import{H as a,_ as r}from"./control-654b50f6.js";const p=o=>{var t;return((t=o.match(/([\w-]+)\.(svelte\.md|md|svx)/i))==null?void 0:t[1])??null};function i(o,t){return new a(o,t)}new TextEncoder;const n=async({params:o})=>{var _;const t=Object.assign({"/src/posts/a-second-post.svelte.md":()=>r(()=>import("./a-second-post.svelte-cc0ef726.js"),["./a-second-post.svelte-cc0ef726.js","./index-4e325a2d.js","./Counter-60bc58ca.js","..\\assets\\Counter-c6b41550.css","./Image-af53a4e4.js","..\\assets\\Image-1603c92f.css"],import.meta.url),"/src/posts/first-post.md":()=>r(()=>import("./first-post-2eaadcbe.js"),["./first-post-2eaadcbe.js","./index-4e325a2d.js","./Image-af53a4e4.js","..\\assets\\Image-1603c92f.css"],import.meta.url),"/src/posts/unpublished-draft-example.svelte.md":()=>r(()=>import("./unpublished-draft-example.svelte-0b4c10e8.js"),["./unpublished-draft-example.svelte-0b4c10e8.js","./index-4e325a2d.js"],import.meta.url),"/src/posts/welcome-to-my-blog.svelte.md":()=>r(()=>import("./welcome-to-my-blog.svelte-6de94866.js"),["./welcome-to-my-blog.svelte-6de94866.js","./index-4e325a2d.js","./Counter-60bc58ca.js","..\\assets\\Counter-c6b41550.css"],import.meta.url),"/src/posts/yet-another-blog-post.svelte.md":()=>r(()=>import("./yet-another-blog-post.svelte-c78b4ffb.js"),["./yet-another-blog-post.svelte-c78b4ffb.js","./index-4e325a2d.js","./Counter-60bc58ca.js","..\\assets\\Counter-c6b41550.css"],import.meta.url)});let e={};for(const[l,m]of Object.entries(t))if(p(l)===o.slug){e={path:l,resolver:m};break}const s=await((_=e==null?void 0:e.resolver)==null?void 0:_.call(e));if(!s||!s.metadata.published)throw i(404);return{component:s.default,frontmatter:s.metadata}},u=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{u as _,n as l};