if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let a={};const o=s=>i(s,l),u={module:{uri:l},exports:a,require:o};e[l]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-b994f779"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"09a4431c1011ac99e6dba23bdda4e1e7"},{url:"assets/chunk-Y3BVWVFU-CSTplvum.js",revision:null},{url:"assets/index-BvsACFW1.js",revision:null},{url:"assets/index-CD2PTcb1.css",revision:null},{url:"assets/index-DShLTh10.js",revision:null},{url:"assets/inside-Y2UVJZNJ-BLhEPyXI.js",revision:null},{url:"assets/puzzles-dynamic-3x3x3-JWIWLLZA-fR7zXD4k.js",revision:null},{url:"assets/puzzles-dynamic-4x4x4-REUXFQJ4-BNnOy5ao.js",revision:null},{url:"assets/puzzles-dynamic-megaminx-2LVHIDL4-Cm8jQJ-N.js",revision:null},{url:"assets/puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js",revision:null},{url:"assets/puzzles-dynamic-unofficial-NCMLO2AJ-SUsTto0f.js",revision:null},{url:"assets/search-dynamic-sgs-side-events-RPVZU2YB-ByYeV_gg.js",revision:null},{url:"assets/search-dynamic-sgs-unofficial-2TYKOUM4-BpdaDVz4.js",revision:null},{url:"assets/search-dynamic-solve-3x3x3-QHRLSVAC-6iYVGW9D.js",revision:null},{url:"assets/search-dynamic-solve-4x4x4-V5D7RQND-9pjK_A3G.js",revision:null},{url:"assets/search-dynamic-solve-fto-UOKDYVD5-D0zc2zu9.js",revision:null},{url:"assets/search-dynamic-solve-kilominx-RAZM75GA-QvxVAUOZ.js",revision:null},{url:"assets/search-dynamic-solve-master_tetraminx-3D4MBF3V-BLQbnxtO.js",revision:null},{url:"assets/search-dynamic-solve-sq1-YESVPPLF-CrG7LKA-.js",revision:null},{url:"assets/search-worker-entry-DNPX3OpU.js",revision:null},{url:"assets/search-worker-entry-DVUyBNvU.js",revision:null},{url:"assets/twisty-dynamic-3d-HF7KVBOE-EL4eH4Uz.js",revision:null},{url:"assets/twsearch_wasm_bg-V4F3SIUO-QGKWKUFY-iE1VAZwZ.js",revision:null},{url:"assets/twsearch-MRZGOB6T-CoPm8qG2.js",revision:null},{url:"assets/worker/chunk-Y3BVWVFU-BDrNbgoW.js",revision:null},{url:"assets/worker/index-OaN7RAFO.js",revision:null},{url:"assets/worker/inside-Y2UVJZNJ-Cu-MpFSH.js",revision:null},{url:"assets/worker/puzzles-dynamic-3x3x3-JWIWLLZA-fR7zXD4k.js",revision:null},{url:"assets/worker/puzzles-dynamic-4x4x4-REUXFQJ4-BNnOy5ao.js",revision:null},{url:"assets/worker/puzzles-dynamic-megaminx-2LVHIDL4-Cm8jQJ-N.js",revision:null},{url:"assets/worker/puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js",revision:null},{url:"assets/worker/puzzles-dynamic-unofficial-NCMLO2AJ-SUsTto0f.js",revision:null},{url:"assets/worker/search-dynamic-sgs-side-events-RPVZU2YB-Q9KJhA9l.js",revision:null},{url:"assets/worker/search-dynamic-sgs-unofficial-2TYKOUM4-BWCqth6N.js",revision:null},{url:"assets/worker/search-dynamic-solve-3x3x3-QHRLSVAC-6iYVGW9D.js",revision:null},{url:"assets/worker/search-dynamic-solve-4x4x4-V5D7RQND-COf66azC.js",revision:null},{url:"assets/worker/search-dynamic-solve-fto-UOKDYVD5-BtkD8cfr.js",revision:null},{url:"assets/worker/search-dynamic-solve-kilominx-RAZM75GA-CspQUh7h.js",revision:null},{url:"assets/worker/search-dynamic-solve-master_tetraminx-3D4MBF3V-ERSDM-8s.js",revision:null},{url:"assets/worker/search-dynamic-solve-sq1-YESVPPLF-3E-Bmagu.js",revision:null},{url:"assets/worker/search-worker-entry-DcOSGEhO.js",revision:null},{url:"assets/worker/twsearch_wasm_bg-V4F3SIUO-QGKWKUFY-iE1VAZwZ.js",revision:null},{url:"assets/worker/twsearch-MRZGOB6T-CwgnijHO.js",revision:null},{url:"favicon-16x16.png",revision:"3b41d07f9e0b539337a8464b2f3c3c48"},{url:"favicon-32x32.png",revision:"0e85f8e32da2e4b667fbe5c02d70e3bc"},{url:"favicon-48x48.png",revision:"aed7ee4b9af83b7dec563629cc26131a"},{url:"favicon.svg",revision:"0cb819a2a078bb0b55a3aa3c3d1eb407"},{url:"icons/cubedex_screenshot_narrow.png",revision:"f39451b0be99a7dbfc9ad7b6d86d702b"},{url:"icons/cubedex_screenshot_wide.png",revision:"f166b808e0c28e86c84d9c62bedd2817"},{url:"icons/icon-1024x1024.png",revision:"8902691e36bd030bba0a8a32685cfbde"},{url:"icons/icon-192x192.png",revision:"32f0676044370c084a7b523656d7ce2e"},{url:"icons/icon-512x512.png",revision:"0d1106fd10e2823d1cae5a3dd8fd579b"},{url:"index.html",revision:"6a82a77cb611719bbc847e85c3d64900"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/icon-192x192.png",revision:"32f0676044370c084a7b523656d7ce2e"},{url:"icons/icon-512x512.png",revision:"0d1106fd10e2823d1cae5a3dd8fd579b"},{url:"manifest.json",revision:"058d5595690e82964d39834b62c6e33d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/cubedex\.app\/.*\.(png|jpg|svg)$/,new s.CacheFirst({cacheName:"images-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:2592e3})]}),"GET")}));
