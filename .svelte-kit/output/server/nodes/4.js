

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/customization/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/4.fe45a646.js","_app/immutable/chunks/index.63c8a074.js"];
export const stylesheets = [];
export const fonts = [];
