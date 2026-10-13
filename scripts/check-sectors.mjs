import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const ts = require('typescript');
const root = fileURLToPath(new URL('../', import.meta.url));
function load(relative, dependencies = {}) {
  const source = readFileSync(root + relative, 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
  const context = { exports: {}, Intl, require: name => dependencies[name] || require(root + 'src/lib/' + name) };
  vm.runInNewContext(compiled, context);
  return context.exports;
}
const offer = load('src/lib/offer.ts');
const catalog = load('src/lib/sectors.ts', { './sectors.json': JSON.parse(readFileSync(root+'src/lib/sectors.json','utf8')) });
const { sectors, sectorGroups, sectorsInGroup, visualForCase, groupCases } = catalog;
assert.equal(sectors.length,25);
assert.equal(sectorGroups.length,5);
assert.equal(new Set(sectors.map(s=>s.slug)).size,25);
assert.equal(new Set(sectors.map(s=>s.headline)).size,25);
const knownLabels = offer.industryGroups.flatMap(g=>g.items);
const visualKinds = new Set();
const ids = new Set();
for (const sector of sectors) {
  assert.ok(knownLabels.includes(sector.label), `${sector.label} must be selectable in the calculator`);
  assert.equal(sector.cases.length,3);
  assert.equal(sector.slots.length,3);
  assert.ok(sectorGroups.some(group=>group.slug===sector.group));
  assert.equal(new Set(sector.cases.map(c=>c.tab)).size,3,'Each page needs distinguishable task tabs');
  for (const useCase of sector.cases) {
    assert.ok(!ids.has(useCase.id));ids.add(useCase.id);
    for (const key of ['name','working','rule']) assert.ok(useCase.assistant?.[key]?.length > 8, `${useCase.id}: assistant ${key} missing`);
    for(const key of ['title','problem','solution','result','request','output']) assert.ok(useCase[key].length>20, `${useCase.id}: ${key} missing`);
    assert.equal(useCase.facts.length,3);
    assert.ok(offer.modules.some(module=>module.id===useCase.module));
    assert.ok(offer.calculateOffer([useCase.module],false,'none'));
    visualKinds.add(visualForCase(sector,useCase));
  }
}
assert.equal(ids.size,75);
assert.equal(visualKinds.size,5);
for (const group of sectorGroups) {
  assert.equal(sectorsInGroup(group.slug).length,5);
  assert.equal(group.problems.length,3);
  assert.equal(group.outcomes.length,3);
  assert.equal(groupCases(group).length,3);
}
console.log('Catalog passed: 25 unique industry pages, five groups, 75 complete cases, all calculator mappings and five visual patterns.');
if (process.env.CHECK_SITE_ORIGIN) {
  const origin=process.env.CHECK_SITE_ORIGIN;
  const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll("'",'&#x27;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  const requests=[...sectors.map(sector=>({path:'/branchen/'+sector.slug,title:sector.headline,problems:sector.cases.map(c=>c.problem),results:sector.cases.map(c=>c.result),initialSolution:sector.cases[0].solution,helperName:sector.cases[0].assistant.name,helperRule:sector.cases[0].assistant.rule})),...sectorGroups.map(group=>({path:'/bereiche/'+group.slug,title:group.headline,problems:group.problems,results:group.outcomes,initialSolution:groupCases(group)[0].useCase.solution,helperName:groupCases(group)[0].useCase.assistant.name,helperRule:groupCases(group)[0].useCase.assistant.rule}))];
  for(let offset=0;offset<requests.length;offset+=5) {
    await Promise.all(requests.slice(offset,offset+5).map(async page=>{
      const response=await fetch(origin+page.path);
      assert.equal(response.status,200,page.path);
      const html=await response.text();
      const main=html.match(/<main[\s\S]*?<\/main>/)?.[0];
      assert.ok(main,page.path);
      assert.ok(main.includes(escape(page.title)),page.path+' heading');
      for(const text of [...page.problems,...page.results,page.initialSolution,page.helperName,page.helperRule]) assert.ok(main.includes(escape(text)),page.path+' main content missing');
      for(const section of ['probleme','beispiele','ergebnisse','rechner','prozess','erstgespraech']) assert.ok(main.includes(`id="${section}"`),page.path+' missing '+section);
      assert.ok(html.includes(`https://www.marcogrotemeyer.de${page.path}`),page.path+' canonical');
    }));
  }
  const index=await fetch(origin+'/branchen');assert.equal(index.status,200);
  const missing=await fetch(origin+'/branchen/does-not-exist');assert.equal(missing.status,404);
  const sitemap=await(await fetch(origin+'/sitemap.xml')).text();
  for(const page of requests)assert.ok(sitemap.includes(page.path),page.path+' sitemap');
  console.log('HTTP audit passed: all 30 detailed pages contain their actual problems, solution, results, calculator, collaboration and canonical; index, sitemap and 404 checked.');
}
