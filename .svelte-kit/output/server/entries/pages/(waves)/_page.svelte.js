import { c as create_ssr_component, v as validate_component, e as each } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                     */import { C as ContentSection, B as BlogPostCard } from "../../../chunks/ContentSection.js";
const SingleSparkle_svelte_svelte_type_style_lang = "";
const Sparkles_svelte_svelte_type_style_lang = "";
const Hero_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#hero.svelte-romlur.svelte-romlur{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px;position:relative;padding:80px 0}@media(max-width: 767px){#hero.svelte-romlur.svelte-romlur{padding:40px 0 50px}}#hero.svelte-romlur .hello.svelte-romlur{text-align:center}#hero.svelte-romlur .intro.svelte-romlur{font-weight:500;font-size:1.4rem;width:min(100%, 440px);display:flex;flex-direction:column}@media(max-width: 767px){#hero.svelte-romlur .intro.svelte-romlur{display:none}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="hero" class="svelte-romlur"><h1 class="hello svelte-romlur">B.K. Scarbrough&#39;s Personal Blog</h1>
	<p class="intro svelte-romlur">
		
		
		</p>
	<h3>Rants about math, science and engineering.
	<br>
	<br></h3>
</section>`;
});
const SparklingHighlight_svelte_svelte_type_style_lang = "";
const About_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#about.svelte-1qp99xm.svelte-1qp99xm{position:relative;display:grid;grid-template-columns:500px 250px;align-items:center;justify-content:space-between;padding-bottom:50px}@media(max-width: 767px){#about.svelte-1qp99xm.svelte-1qp99xm{grid-template-columns:1fr;justify-items:center;gap:20px}}#about.svelte-1qp99xm .info.svelte-1qp99xm{display:flex;flex-direction:column;gap:10px}@media(max-width: 767px){}@media(max-width: 767px){}@media(max-width: 767px){#about.svelte-1qp99xm .info.svelte-1qp99xm{gap:20px}}@media(max-width: 767px){}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section id="about" class="svelte-1qp99xm"><div class="info svelte-1qp99xm">
		
		
		
		
		</div>
	
	
	
	
	
	
</section>`;
});
const RecentPosts_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".grid.svelte-1hdv5ie{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}@media(max-width: 767px){.grid.svelte-1hdv5ie{grid-template-columns:1fr}}",
  map: null
};
const RecentPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$1);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "recent-posts",
      title: "Blog posts",
      description: "Here are some recent blog posts!",
      align: "left"
    },
    {},
    {
      button: () => {
        return `<div slot="button">${validate_component(Button, "Button").$$render($$result, { href: "/blog" }, {}, {
          default: () => {
            return `View More`;
          }
        })}</div>`;
      },
      default: () => {
        return `<div class="grid svelte-1hdv5ie">${each(posts, (post) => {
          return `${validate_component(BlogPostCard, "BlogPostCard").$$render(
            $$result,
            {
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              tags: post.tags,
              readingTime: post.readingTime,
              showImage: false
            },
            {},
            {}
          )}`;
        })}</div>`;
      }
    }
  )}`;
});
const FeatureCard_svelte_svelte_type_style_lang = "";
const Features_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 1085px){}@media(max-width: 767px){}@media(min-width: 1086px){}@media(max-width: 1085px){}@media(max-width: 900px){}",
  map: null
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { features } = $$props;
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  $$result.css.add(css);
  return `
















`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { features, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	${validate_component(About, "About").$$render($$result, {}, {}, {})}
	${posts && posts.length > 0 ? `${validate_component(RecentPosts, "RecentPosts").$$render($$result, { posts }, {}, {})}` : ``}
	${validate_component(Features, "Features").$$render($$result, { features }, {}, {})}</div>`;
});
export {
  Page as default
};
