// Läuft nur für Videos (siehe run_worker_first in wrangler.jsonc).
// Workers Static Assets beantwortet Range-Anfragen mit der ganzen Datei (200).
// Safari spielt <video> aber nur mit 206 Partial Content ab, darum schneiden wir hier selbst zu.

const HEADERS = {
	"X-Content-Type-Options": "nosniff",
	"X-Frame-Options": "DENY",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"Permissions-Policy": "camera=(), microphone=(), geolocation=()",
	"Cache-Control": "public, max-age=31536000, immutable",
	"Accept-Ranges": "bytes",
};

export default {
	async fetch(request, env) {
		const asset = await env.ASSETS.fetch(new Request(request.url, { method: "GET" }));
		if (!asset.ok) return asset;

		const headers = new Headers(HEADERS);
		headers.set("Content-Type", asset.headers.get("Content-Type") || "video/mp4");
		const etag = asset.headers.get("ETag");
		if (etag) headers.set("ETag", etag);

		const body = await asset.arrayBuffer();
		const size = body.byteLength;
		const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get("Range") || "");

		if (!range || (range[1] === "" && range[2] === "")) {
			headers.set("Content-Length", String(size));
			return new Response(request.method === "HEAD" ? null : body, { status: 200, headers });
		}

		let start, end;
		if (range[1] === "") {
			// bytes=-500 → die letzten 500 Bytes
			start = Math.max(0, size - Number(range[2]));
			end = size - 1;
		} else {
			start = Number(range[1]);
			end = range[2] === "" ? size - 1 : Math.min(Number(range[2]), size - 1);
		}

		if (start >= size || start > end) {
			headers.set("Content-Range", `bytes */${size}`);
			return new Response(null, { status: 416, headers });
		}

		headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
		headers.set("Content-Length", String(end - start + 1));
		return new Response(request.method === "HEAD" ? null : body.slice(start, end + 1), { status: 206, headers });
	},
};
