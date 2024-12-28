

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.22c311c4.js","_app/immutable/chunks/index.63c8a074.js","_app/immutable/chunks/Footer.39de1f74.js","_app/immutable/chunks/index.f07250df.js","_app/immutable/chunks/Button.c31a9f71.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.e5f5e168.js"];
export const stylesheets = ["_app/immutable/assets/1.e3eb7d9c.css","_app/immutable/assets/Footer.ecd5031e.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
