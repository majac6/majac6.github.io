/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-4aede6f4417faf7c8b2c.js"
  },
  {
    "url": "app-28b15c945c6d7482ef0f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9c5c8cf634d6038446b8.js"
  },
  {
    "url": "index.html",
    "revision": "49d9e9ba50e05961c686c1bde55e01ef"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f15569c0ec2f58bb94b286f890c1c382"
  },
  {
    "url": "0.1b6fc49b5a2698238f73.css"
  },
  {
    "url": "component---src-pages-index-js.43fa1f490356126e3f33.css"
  },
  {
    "url": "component---src-pages-index-js-5ad4b963174368da3e41.js"
  },
  {
    "url": "8-bcac4f72e3b5d9fc4028.js"
  },
  {
    "url": "0-d9593efe5c224c3a2317.js"
  },
  {
    "url": "static/d/973/path---index-6a9-7fmUIHPrxqVOG0Icuqhpg7YDA.json",
    "revision": "44f161e996bbb896e5e0966a4d66405c"
  },
  {
    "url": "component---src-pages-404-js.b8777d5e5f549e451a27.css"
  },
  {
    "url": "component---src-pages-404-js-1e4d025ae9d9181acea0.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});