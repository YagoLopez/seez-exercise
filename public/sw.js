if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,r)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return n;default:return e(s)}})).then(e=>{const s=r(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/IIw_9kKyYr9OjJF-gz20f/_buildManifest.js",revision:"dd68ff4b711965f30387b1a1994f3236"},{url:"/_next/static/IIw_9kKyYr9OjJF-gz20f/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/554a72f280d09b0b991236972841babb3b058c7d.2fc448b50e925fb625c4.js",revision:"8cad9fc170d45afc3955f028cd1f819b"},{url:"/_next/static/chunks/c50076a5d3d7a827a6809a16d1465c4546d60bdb.b2869e7f6bf28896fb74.js",revision:"cd2c7f80f63d0b6ff3c6166384b1756e"},{url:"/_next/static/chunks/commons.821ef178cf552180bb78.js",revision:"10c39559e05aea858b4e227ec2b22c8d"},{url:"/_next/static/chunks/framework.1daf1ec1ecf144ee9147.js",revision:"464131074277806cc6187e6c0f264c8e"},{url:"/_next/static/chunks/main-0de420de55ded5c28067.js",revision:"29380fb4b3f0bbdd054fce2a9e2709cb"},{url:"/_next/static/chunks/pages/_app-6ddb8c35e1c5ca10a172.js",revision:"7e9764193857c7bb6e13747f9b523d8b"},{url:"/_next/static/chunks/pages/_error-5eb0f6ddbbaf7ef74547.js",revision:"45dafde4965f9766bcce4df4c3830dde"},{url:"/_next/static/chunks/pages/index-321a5eca7cbf9ea918a3.js",revision:"ed99c5eed1686277ec5f998157729e2a"},{url:"/_next/static/chunks/pages/random/%5Bcategory%5D-802507d2027c67e1a137.js",revision:"a5fe1072714fbe8865090e8f5f41fc37"},{url:"/_next/static/chunks/pages/search/%5B...terms%5D-1fa68eb5003233dbb43d.js",revision:"b6e8fa4a3519bfe1c6a762e6bba3d79e"},{url:"/_next/static/chunks/polyfills-fa276ba060a4a8ac7eef.js",revision:"d6e6a8bc3994b844b391066d75421272"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/22f89a46d872f12c26d9.css",revision:"4c778d636084a9245116a0f8c883ace6"},{url:"/_next/static/css/83b8730062d9098595a7.css",revision:"f17c17f10db968f23e35df1dcd27692a"},{url:"/apple-touch-icon.png",revision:"7d8281986da8db9c1b5413570ecc1f83"},{url:"/favicon-mask.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/favicon.svg",revision:"eb715773086076cce3498d788f41b246"},{url:"/font/material-icons.woff2",revision:"703cf8f274fbb265d49c6262825780e1"},{url:"/font/roboto-v20-latin-regular.eot",revision:"4be1a572fca40bcb2202504cb17aed91"},{url:"/font/roboto-v20-latin-regular.svg",revision:"3ce3e2e315625e0955240b145c85c682"},{url:"/font/roboto-v20-latin-regular.ttf",revision:"329ae1c377b1fb667f5be6abd50327fc"},{url:"/font/roboto-v20-latin-regular.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/font/roboto-v20-latin-regular.woff2",revision:"479970ffb74f2117317f9d24d9e317fe"},{url:"/imgFail.jpg",revision:"738abb75bfa4fd140b4ee7889c741236"},{url:"/imgFail7.jpeg",revision:"08a4ee5c146c8255d6a19205a5f9e064"},{url:"/imgPlaceholder.png",revision:"7ce360630d762e2be1b8c122fffba869"},{url:"/manifest.json",revision:"4f91a33b290d9668ad45c54ee595194b"},{url:"/styles/global.module.css",revision:"e7fd89c0b01c08c2c3a4a1fcf8aceb45"},{url:"/styles/responsive.css",revision:"29c3d7e9c430cecf378bbc04ff1208ca"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
