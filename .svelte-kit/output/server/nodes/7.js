import * as server from '../entries/pages/(waves)/blog/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.d22cf509.js","_app/immutable/chunks/index.63c8a074.js","_app/immutable/chunks/ContentSection.c317476c.js","_app/immutable/chunks/regex.7dfa9b23.js"];
export const stylesheets = ["_app/immutable/assets/7.bbabfa68.css","_app/immutable/assets/ContentSection.cd12d60a.css"];
export const fonts = [];
