import { c as create_ssr_component } from "./index2.js";
const metadata = {
  "title": "Fourier Transforms",
  "slug": "FourierTransforms",
  "date": "2023-04-22T21:55:15.361Z",
  "excerpt": "Defining the Fourier Transform",
  "tags": ["Signal Processing", "Applied Mathematics"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>The Fourier transform is an integral transformation that takes an input function and returns the superposition of sines and cosines that makeup the original function.</p>
<div class="math math-display"><!-- HTML_TAG_START --><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="script">F</mi><mo stretchy="false">{</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">}</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mi mathvariant="normal">∞</mi></msubsup><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><msup><mi>e</mi><mrow><mo>−</mo><mi>j</mi><mi>k</mi><mi>x</mi></mrow></msup></mrow><mi>d</mi><mi>x</mi></mrow><annotation encoding="application/x-tex">\\mathcal{F}\\{f(x)\\} = \\int_{-\\infty}^{\\infty}{f(x)e^{-jkx}}dx</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.09931em;">F</span><span class="mopen">{</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)}</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.3846em;vertical-align:-0.9703em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4143em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.8129em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9703em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8991em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">jk</span><span class="mord mathnormal mtight">x</span></span></span></span></span></span></span></span></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span></span></span></span></span><!-- HTML_TAG_END --></div>
<p>This transformation is one of the fundamental building blocks of modern signal analysis. </p>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  Page as P,
  __vite_glob_0_0 as _,
  metadata as m
};
