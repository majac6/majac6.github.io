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
    "url": "webpack-runtime-5d68dad73ed388a9674a.js"
  },
  {
    "url": "app-090a843e256d3beeae19.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9c5c8cf634d6038446b8.js"
  },
  {
    "url": "index.html",
    "revision": "e22998d178ff46df78c6aa9d304ac8b4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ab0b89243da2ecfb7b5738318da8c792"
  },
  {
    "url": "8.6934362be3aed255c47c.css"
  },
  {
    "url": "component---src-pages-index-js.f29d36043362c9ccbfaa.css"
  },
  {
    "url": "component---src-pages-index-js-4112e1bbbd9e9712b564.js"
  },
  {
    "url": "8-b55c962d4b6828bbff5e.js"
  },
  {
    "url": "0-d1a8890f7ba4b8f537c5.js"
  },
  {
    "url": "static/d/458/path---index-6a9-GysytxATMFK85Aa6VNKB7IMQ28k.json",
    "revision": "c33becadf7f1caf1301bac417c47af40"
  },
  {
    "url": "component---src-pages-404-js.b8777d5e5f549e451a27.css"
  },
  {
    "url": "component---src-pages-404-js-8f5a0d22fcf6d438bacc.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
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