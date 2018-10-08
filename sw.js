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
    "url": "webpack-runtime-3aaed05a290440f559cb.js"
  },
  {
    "url": "app-090a843e256d3beeae19.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9c5c8cf634d6038446b8.js"
  },
  {
    "url": "index.html",
    "revision": "17732f6724acf60c199f38a924e788c6"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ef276adcb0ea3e9717e62fdef8289e1f"
  },
  {
    "url": "8.fb9f0610e6b19b5bec06.css"
  },
  {
    "url": "component---src-pages-index-js.61a4acb8b45c8921ace9.css"
  },
  {
    "url": "component---src-pages-index-js-c112d73e4950b79981f7.js"
  },
  {
    "url": "8-bf1fd61178fc616b69f3.js"
  },
  {
    "url": "0-5c1fff499d1d072aca60.js"
  },
  {
    "url": "static/d/458/path---index-6a9-GysytxATMFK85Aa6VNKB7IMQ28k.json",
    "revision": "c33becadf7f1caf1301bac417c47af40"
  },
  {
    "url": "component---src-pages-404-js.94e2880b454817fd5cd2.css"
  },
  {
    "url": "component---src-pages-404-js-ed37a197ded20c1157df.js"
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