import * as server from '../entries/pages/(blog-article)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(blog-article)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.90e0184d.js","_app/immutable/chunks/index.9dc8c717.js","_app/immutable/chunks/Footer.936c87e4.js","_app/immutable/chunks/index.cb167a86.js","_app/immutable/chunks/ContentSection.759a5e55.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/meta.82364fc2.js"];
export const stylesheets = ["_app/immutable/assets/2.a0c51d5a.css","_app/immutable/assets/Footer.ecd5031e.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/ContentSection.cd12d60a.css"];
export const fonts = [];