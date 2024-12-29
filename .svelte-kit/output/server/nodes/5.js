

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/test/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/5.888a5f92.js","_app/immutable/chunks/index.63c8a074.js"];
export const stylesheets = [];
export const fonts = [];
