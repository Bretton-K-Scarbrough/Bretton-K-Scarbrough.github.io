export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicons/apple-touch-icon.png","favicons/favicon-96x96 (copy).png","favicons/favicon-96x96.png","favicons/favicon.ico","favicons/favicon.svg","favicons/site.webmanifest","favicons/web-app-manifest-192x192.png","favicons/web-app-manifest-512x512.png","images/features/extensible.jpg","images/features/light-dark.jpg","images/features/markdown.jpg","images/features/open-source.jpg","images/features/optimized.jpg","images/features/themeable.jpg","images/posts/blog-posts.jpg","images/posts/customization.jpg","images/posts/frontmatter-preview-dashboard.png","images/posts/frontmatter-preview-edit.png","images/posts/project-structure.jpg","images/sample-image.png","images/site-preview.png","images/site-screenshot.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.676ed8fc.js","app":"_app/immutable/entry/app.72bbbbe1.js","imports":["_app/immutable/entry/start.676ed8fc.js","_app/immutable/chunks/index.63c8a074.js","_app/immutable/chunks/index.f07250df.js","_app/immutable/entry/app.72bbbbe1.js","_app/immutable/chunks/index.63c8a074.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
