import * as server from '../entries/pages/(waves)/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.c0dd5569.js","_app/immutable/chunks/index.9dc8c717.js","_app/immutable/chunks/Button.c73d75d2.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/ContentSection.759a5e55.js"];
export const stylesheets = ["_app/immutable/assets/5.02b901f6.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css","_app/immutable/assets/ContentSection.cd12d60a.css"];
export const fonts = [];
