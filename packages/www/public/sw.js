if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-e9cae24d"],(function(e){"use strict";importScripts("worker-ZSKPWmeLuzbDpY-pLKFsC.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZSKPWmeLuzbDpY-pLKFsC/_buildManifest.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/ZSKPWmeLuzbDpY-pLKFsC/_ssgManifest.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/735-ba27aca2225e6314c5f3.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/735-ba27aca2225e6314c5f3.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/946.be8034bb4741e645734d.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/946.be8034bb4741e645734d.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/framework-6904c37ecf5b200e4e2e.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/framework-6904c37ecf5b200e4e2e.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/main-1fd13886f63948e5452c.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/main-1fd13886f63948e5452c.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/_app-1b1c09f4b9b07d988fc8.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/_app-1b1c09f4b9b07d988fc8.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/_error-1cd1e11cd5e9c8211770.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/_error-1cd1e11cd5e9c8211770.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/index-fd827907cbac6dc3cce1.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/index-fd827907cbac6dc3cce1.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/r/%5Bid%5D-22c98f064aaf55fccee2.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/r/%5Bid%5D-22c98f064aaf55fccee2.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/shhh-01c6ea76028167db64d3.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/shhh-01c6ea76028167db64d3.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/signout-bf0779b7caa9ea2189b2.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/signout-bf0779b7caa9ea2189b2.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/sponsorware-baeafb7f62f75b8230cd.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/sponsorware-baeafb7f62f75b8230cd.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/u/%5Bid%5D-3e3c5cc071f0a68d97b4.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/pages/u/%5Bid%5D-3e3c5cc071f0a68d97b4.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/polyfills-7510a95ef9a46fd369c3.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/polyfills-7510a95ef9a46fd369c3.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/webpack-9513ffb94df872a9a6d9.js",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/chunks/webpack-9513ffb94df872a9a6d9.js.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/css/2946e48fdf8b8c44ed3f.css",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/_next/static/css/2946e48fdf8b8c44ed3f.css.map",revision:"ZSKPWmeLuzbDpY-pLKFsC"},{url:"/android-chrome-192x192.png",revision:"57c9c4cd91d24d48b7ffdda0768fd225"},{url:"/android-chrome-512x512.png",revision:"8d2454e6cf551f8ca1e1d5670b13a8d1"},{url:"/android-chrome-maskable-192x192.png",revision:"71c93ce0b34d2fbb4c6654a9131a3d9d"},{url:"/android-chrome-maskable-512x512.png",revision:"4265b8c09997b16ac1493500b43f3755"},{url:"/android-chrome-maskable-beta-512x512.png",revision:"145800cf2381faf1c0f4a61c29a88448"},{url:"/apple-touch-icon.png",revision:"8081d08be3673ec33dbeecab06706b2b"},{url:"/favicon-16x16.png",revision:"ac17d75b1ee007781212853a57b88285"},{url:"/favicon-32x32.png",revision:"360bc7cd4706c0657917f3b78fed6b71"},{url:"/favicon.ico",revision:"b2bf6bb7b4d0234f3e6df44fd7d5707e"},{url:"/flat.png",revision:"e0460141713b5c94104ce19b36c4b462"},{url:"/icons/Redo.svg",revision:"6196f61a2053ff606d5746eb3ab380e3"},{url:"/icons/Trash.svg",revision:"5f2c42a17b7d8459f2e556b6209a61c6"},{url:"/icons/Undo.svg",revision:"24de701870630f51132f9bed3f18ee8f"},{url:"/icons/grab.svg",revision:"a1ca9e5c31d1edd2558ab075f72fde4e"},{url:"/icons/pointer.svg",revision:"dff260f896fe23adb83341639fdf93be"},{url:"/icons/resize.svg",revision:"0a3cb701d15731e25919783801d18f95"},{url:"/images/hello.mp4",revision:"b716f249cc6c781c91b0ac9dc23423b3"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
