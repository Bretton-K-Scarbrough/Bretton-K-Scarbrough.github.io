import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./index2.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  if ($$props.data_2 === void 0 && $$bindings.data_2 && data_2 !== void 0)
    $$bindings.data_2(data_2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `
${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${constructors[2] ? `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(constructors[2] || missing_component, "svelte:component").$$render(
                  $$result,
                  { data: data_2, form, this: components[2] },
                  {
                    this: ($$value) => {
                      components[2] = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}` : `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}
${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n\n		<!-- Favicon -->\n		<link\n			rel="apple-touch-icon"\n			sizes="180x180"\n			href="' + assets2 + '/favicons/apple-touch-icon.png"\n		/>\n		<link\n			rel="icon"\n			type="image/png"\n			sizes="32x32"\n			href="' + assets2 + '/favicons/favicon-32x32.png"\n		/>\n		<link\n			rel="icon"\n			type="image/png"\n			sizes="16x16"\n			href="' + assets2 + '/favicons/favicon-16x16.png"\n		/>\n		<link rel="manifest" href="' + assets2 + '/favicons/site.webmanifest" />\n		<link\n			rel="mask-icon"\n			href="' + assets2 + '/favicons/safari-pinned-tab.svg"\n			color="#0ca4a5"\n		/>\n		<link rel="shortcut icon" href="' + assets2 + '/favicons/favicon.ico" />\n		<link rel="icon" href="' + assets2 + `/favicons/favicon.png" />
		<!-- <link -->
		<!--   rel="stylesheet" -->
		<!--   href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" -->
		<!-- /> -->
		<!-- Tell browser this site is responsive -->
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!-- Tell browser this site supports light and dark mode -->
		<meta name="color-scheme" content="light dark" />
		<!-- Color for browser url bar in mobile/Safari -->
		<meta name="theme-color" media="(prefers-color-scheme: light)" content="#b28cf2" />
		<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#4612A1" />
		<!-- Disable Google FLOC -->
		<meta http-equiv="Permissions-Policy" content="interest-cohort=()" />

		<script>
			// Calling this here so that it loads as quickly as possible
			// Avoiding a flash of light mode in case dark mode is used
			const theme = localStorage.getItem('theme-preference') || 'auto';
			document.firstElementChild?.setAttribute('data-theme', theme);
		<\/script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">

<!----TODO: Mathjax stuff---->
<!-- <script> -->
<!--     window.MathJax = { -->
<!--         tex: { -->
<!--             inlineMath: [['$', '$'], ['\\\\(', '\\\\)']], // Inline delimiters -->
<!--             displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']], // Block delimiters -->
<!--             processEscapes: true, // Allow escaping special characters -->
<!--             packages: { '[+]': ['base', 'ams'] }, // Ensure required MathJax packages -->
<!-- 	    processEnvironments: true, -->
<!-- 	    macros: { R: '\\mathbf R'} -->
<!-- 	 -->
<!--         }, -->
<!--         svg: { fontCache: 'global' }, -->
<!--         options: { -->
<!--             // skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'], // Avoid processing raw code blocks -->
<!--         } -->
<!--     }; -->
<!-- <\/script> -->
<!-- <script type="text/javascript" id="MathJax-script" async -->
<!--   src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"> -->
<!-- <\/script> -->


		` + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div id="svelte-root">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1ax8bf8"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
