

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/test/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/4.6b37f5d4.js","_app/immutable/chunks/index.63c8a074.js"];
export const stylesheets = [];
export const fonts = [];
