

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b4712d6a.js","_app/immutable/chunks/index.9dc8c717.js","_app/immutable/chunks/Footer.936c87e4.js","_app/immutable/chunks/index.cb167a86.js","_app/immutable/chunks/Button.c73d75d2.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.8c8c4435.js"];
export const stylesheets = ["_app/immutable/assets/1.e3eb7d9c.css","_app/immutable/assets/Footer.ecd5031e.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
