if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-3e548cb2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"/_next/static/XusrEZJtphMSkULhLs4zh/_buildManifest.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/XusrEZJtphMSkULhLs4zh/_ssgManifest.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/746-118ea4497d1a8c66a03d.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/95b64a6e-4837f896f516a58e8f77.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/d7eeaac4-1bb624b6bd2b0d823629.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/main-508439d685b40913547d.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/pages/_app-62def272083c40fbe4e5.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/pages/_error-a0e21b9b223f827fe1f2.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/pages/index-8eae98d8ead893bb633c.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/chunks/webpack-6aa24242c38afc8913a0.js",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/_next/static/css/56ddc270c59eb67d45ab.css",revision:"XusrEZJtphMSkULhLs4zh"},{url:"/favicon.ico",revision:"109a76b44db8d4fa9d78f970db204950"},{url:"/icon-192.png",revision:"5428f90ae26c5c4128daf570a5c13221"},{url:"/icon-512.png",revision:"fd33256464b9995cc5ccf2b22a0f0e92"},{url:"/images/prod-1.png",revision:"6ef03a9e6f86d8f64400f06288f8cf72"},{url:"/images/prod-2.png",revision:"e7be9ae92acd9eb9ec23eb36c05f81e2"},{url:"/images/prod-3-1.jpg",revision:"74ada03988fffc18bf489fc0bb3b95ee"},{url:"/images/prod-3-2.png",revision:"362748c937216794572ca57496120022"},{url:"/images/prod-4.png",revision:"9e307b7a98e0b80cb99781c14db16383"},{url:"/images/prod-6.png",revision:"79b10a64773f8679be788aaa38a02da0"},{url:"/images/prod-8.png",revision:"cb773ba07e6569e24728476a4b1d21fe"},{url:"/images/prod-9.png",revision:"f9a0acbfb96416348cc96b2b8643ae58"},{url:"/images/projects.jpeg",revision:"71b816d591030692f82ea67ae0627029"},{url:"/images/slide1.jpg",revision:"22f15efc9752130a0d2c3414e793f300"},{url:"/images/slide2.jpg",revision:"40b713f251d969b5c7c30ea4c260313e"},{url:"/images/slide3.jpg",revision:"34f9f1b4cf576e9a24bd78c06303b08d"},{url:"/images/slide4.jpg",revision:"3bd92a130f12573b0656275c38654774"},{url:"/index.html",revision:"fb865637a95baec1a4413763ee134d8a"},{url:"/manifest.json",revision:"386513f1d39f47ecfc28608a0474140a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET")}));
