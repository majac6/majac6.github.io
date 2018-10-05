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
    "url": "webpack-runtime-8851c9735b913aa5f1d4.js"
  },
  {
    "url": "app-9e314268e9bb1c9084fd.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9c5c8cf634d6038446b8.js"
  },
  {
    "url": "index.html",
    "revision": "f939c04b97856618f01fa67278dc5c9a"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fde5a54324202645bdf7c50abc826aa1"
  },
  {
    "url": "8.01b9e4c3c5bdc7281f86.css"
  },
  {
    "url": "component---src-pages-index-js.c282c491a7c3ccbbd62d.css"
  },
  {
    "url": "component---src-pages-index-js-83863d6c52068a062afa.js"
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
    "url": "component---src-pages-404-js.75d6d5c8b41ee4626f39.css"
  },
  {
    "url": "component---src-pages-404-js-bee4d1d79c2e09484edd.js"
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