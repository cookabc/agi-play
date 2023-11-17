// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jeGeT":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
// Takes Stanford CoreNLP JSON output (var data = ... in data.js)
// and uses brat to render everything.
//var serverAddress = 'http://localhost:9000';
var serverAddress = "";
// Load Brat libraries
var bratLocation = "./";
head.js(// External libraries
bratLocation + "js/jquery.svg.min.js", bratLocation + "js/jquery.svgdom.min.js", // brat helper modules
bratLocation + "js/configuration.js", bratLocation + "js/util.js", bratLocation + "js/annotation_log.js", bratLocation + "js/webfont.js", // brat modules
bratLocation + "js/dispatcher.js", bratLocation + "js/url_monitor.js", bratLocation + "js/visualizer.js", // parse viewer
bratLocation + "js/corenlp-parseviewer.js");
// Uses Dagre (https://github.com/cpettitt/dagre) for constinuency parse
// visualization. It works better than the brat visualization.
var useDagre = true;
var currentQuery = "The quick brown fox jumped over the lazy dog.";
var currentSentences = "";
var currentText = "";
// ----------------------------------------------------------------------------
// HELPERS
// ----------------------------------------------------------------------------
/**
 * Add the startsWith function to the String class
 */ if (typeof String.prototype.startsWith !== "function") // see below for better implementation!
String.prototype.startsWith = function(str) {
    return this.indexOf(str) === 0;
};
function isInt(value) {
    return !isNaN(value) && function(x) {
        return (x | 0) === x;
    }(parseFloat(value));
}
/**
 * A reverse map of PTB tokens to their original gloss
 */ var tokensMap = {
    "-LRB-": "(",
    "-RRB-": ")",
    "-LSB-": "[",
    "-RSB-": "]",
    "-LCB-": "{",
    "-RCB-": "}",
    "``": '"',
    "''": '"'
};
/**
 * A mapping from part of speech tag to the associated visualization color
 */ function posColor(posTag) {
    if (posTag.startsWith("N")) return "#A4BCED";
    else if (posTag.startsWith("V") || posTag.startsWith("M")) return "#ADF6A2";
    else if (posTag.startsWith("P")) return "#CCDAF6";
    else if (posTag.startsWith("I")) return "#FFE8BE";
    else if (posTag.startsWith("R") || posTag.startsWith("W")) return "#FFFDA8";
    else if (posTag.startsWith("D") || posTag === "CD") return "#CCADF6";
    else if (posTag.startsWith("J")) return "#FFFDA8";
    else if (posTag.startsWith("T")) return "#FFE8BE";
    else if (posTag.startsWith("E") || posTag.startsWith("S")) return "#E4CBF6";
    else if (posTag.startsWith("CC")) return "#FFFFFF";
    else if (posTag === "LS" || posTag === "FW") return "#FFFFFF";
    else return "#E3E3E3";
}
/**
 * A mapping from named entity tag to the associated visualization color
 */ function nerColor(nerTag) {
    if (nerTag === "PERSON") return "#FFCCAA";
    else if (nerTag === "ORGANIZATION") return "#8FB2FF";
    else if (nerTag === "MISC") return "#F1F447";
    else if (nerTag === "LOCATION" || nerTag === "COUNTRY" || nerTag === "STATE_OR_PROVINCE" || nerTag === "CITY") return "#95DFFF";
    else if (nerTag === "DATE" || nerTag === "TIME" || nerTag === "DURATION" || nerTag === "SET") return "#9AFFE6";
    else if (nerTag === "MONEY") return "#FFFFFF";
    else if (nerTag === "PERCENT") return "#FFA22B";
    else return "#E3E3E3";
}
var d3_category18 = {
    // Just like d3_category20 but no grays!
    name: "d3_category_18",
    colors: [
        "#aec7e8",
        "#ffbb78",
        "#98df8a",
        "#ff9896",
        "#c5b0d5",
        "#c49c94",
        "#f7b6d2",
        "#dbdb8d",
        "#9edae5",
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#8c564b",
        "#e377c2",
        "#bcbd22",
        "#17becf"
    ]
};
function generateRandomColor() {
    return "#" + Math.random().toString(16).slice(2, 8);
}
function generateNextColor(i, palette) {
    if (palette && i < palette.colors.length) return palette.colors[i];
    else return generateRandomColor();
}
function getTagColor(tag, colorIndex, colors) {
    var ci = colorIndex[tag];
    if (ci == null) {
        ci = colors.length;
        colorIndex[tag] = ci;
        colors.push(generateNextColor(ci, d3_category18));
    }
    return colors[ci];
}
/**
 * A mapping from coref values to the associated visualization color
 */ var corefColorIndex = {};
var corefColors = [];
function corefColor(corefTag) {
    if (corefTag === "MENTION") return "#FFE000";
    else return getTagColor(corefTag, corefColorIndex, corefColors);
}
var speakerColorIndex = {};
var speakerColors = [];
function speakerColor(tag) {
    return getTagColor(tag, speakerColorIndex, speakerColors);
}
/**
 * A mapping from sentiment value to the associated
 * visualization color
 */ function sentimentColor(sentiment) {
    if (sentiment === "VERY POSITIVE") return "#00FF00";
    else if (sentiment === "POSITIVE") return "#7FFF00";
    else if (sentiment === "NEUTRAL") return "#FFFF00";
    else if (sentiment === "NEGATIVE") return "#FF7F00";
    else if (sentiment === "VERY NEGATIVE") return "#FF0000";
    else return "#E3E3E3";
}
/**
 * Get a list of annotators, from the annotator option input.
 */ function annotators() {
    var annotators = "tokenize,ssplit";
    if ($("#language").val() === "de" | $("#language").val() === "fr" | $("#language").val() === "es") annotators += ",mwt";
    else if ($("#language").val() === "hu" | $("#language").val() === "it") annotators = "cdc_tokenize";
    $("#annotators").find("option:selected").each(function() {
        annotators += "," + $(this).val();
    });
    return annotators;
}
/**
 * Get the input date
 */ function date() {
    function f(n) {
        return n < 10 ? "0" + n : n;
    }
    var date = new Date();
    var M = date.getMonth() + 1;
    var D = date.getDate();
    var Y = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return "" + Y + "-" + f(M) + "-" + f(D) + "T" + f(h) + ":" + f(m) + ":" + f(s);
}
//-----------------------------------------------------------------------------
// Constituency parser
//-----------------------------------------------------------------------------
function ConstituencyParseProcessor() {
    var parenthesize = function(input, list) {
        if (list === undefined) return parenthesize(input, []);
        else {
            var token = input.shift();
            if (token === undefined) return list.pop();
            else if (token === "(") {
                list.push(parenthesize(input, []));
                return parenthesize(input, list);
            } else if (token === ")") return list;
            else return parenthesize(input, list.concat(token));
        }
    };
    var toTree = function(list) {
        if (list.length === 2 && typeof list[1] === "string") return {
            label: list[0],
            text: list[1],
            isTerminal: true
        };
        else if (list.length >= 2) {
            var label = list.shift();
            var node = {
                label: label
            };
            var rest = list.map(function(x) {
                var t = toTree(x);
                if (typeof t === "object") t.parent = node;
                return t;
            });
            node.children = rest;
            return node;
        } else return list;
    };
    var indexTree = function(tree, tokens, index) {
        index = index || 0;
        if (tree.isTerminal) {
            tree.token = tokens[index];
            tree.tokenIndex = index;
            tree.tokenStart = index;
            tree.tokenEnd = index + 1;
            return index + 1;
        } else if (tree.children) {
            tree.tokenStart = index;
            for(var i = 0; i < tree.children.length; i++){
                var child = tree.children[i];
                index = indexTree(child, tokens, index);
            }
            tree.tokenEnd = index;
        }
        return index;
    };
    var tokenize = function(input) {
        return input.split('"').map(function(x, i) {
            if (i % 2 === 0) // not in string
            return x.replace(/\(/g, " ( ").replace(/\)/g, " ) ");
            else // in string
            return x.replace(/ /g, "!whitespace!");
        }).join('"').trim().split(/\s+/).map(function(x) {
            return x.replace(/!whitespace!/g, " ");
        });
    };
    var convertParseStringToTree = function(input, tokens) {
        var p = parenthesize(tokenize(input));
        if (Array.isArray(p)) {
            var tree = toTree(p);
            // Correlate tree with tokens
            indexTree(tree, tokens);
            return tree;
        }
    };
    this.process = function(annotation) {
        for(var i = 0; i < annotation.sentences.length; i++){
            var s = annotation.sentences[i];
            if (s.parse) s.parseTree = convertParseStringToTree(s.parse, s.tokens);
        }
    };
}
// ----------------------------------------------------------------------------
// RENDER
// ----------------------------------------------------------------------------
/**
 * Render a given JSON data structure
 */ function render(data, reverse) {
    // Tweak arguments
    if (typeof reverse !== "boolean") reverse = false;
    // Error checks
    if (typeof data.sentences === "undefined") return;
    /**
     * Register an entity type (a tag) for Brat
     */ var entityTypesSet = {};
    var entityTypes = [];
    function addEntityType(name, type, coarseType) {
        if (typeof coarseType === "undefined") coarseType = type;
        // Don't add duplicates
        if (entityTypesSet[type]) return;
        entityTypesSet[type] = true;
        // Get the color of the entity type
        color = "#ffccaa";
        if (name === "POS") color = posColor(type);
        else if (name === "NER") color = nerColor(coarseType);
        else if (name === "NNER") color = nerColor(coarseType);
        else if (name === "SPEAKER") color = speakerColor(coarseType);
        else if (name === "COREF") color = corefColor(coarseType);
        else if (name === "ENTITY") color = posColor("NN");
        else if (name === "RELATION") color = posColor("VB");
        else if (name === "LEMMA") color = "#FFFFFF";
        else if (name === "SENTIMENT") color = sentimentColor(type);
        else if (name === "LINK") color = "#FFFFFF";
        else if (name === "KBP_ENTITY") color = "#FFFFFF";
        // Register the type
        entityTypes.push({
            type: type,
            labels: [
                type
            ],
            bgColor: color,
            borderColor: "darken"
        });
    }
    /**
     * Register a relation type (an arc) for Brat
     */ var relationTypesSet = {};
    var relationTypes1 = [];
    function addRelationType(type, symmetricEdge) {
        // Prevent adding duplicates
        if (relationTypesSet[type]) return;
        relationTypesSet[type] = true;
        // Default arguments
        if (typeof symmetricEdge === "undefined") symmetricEdge = false;
        // Add the type
        relationTypes1.push({
            type: type,
            labels: [
                type
            ],
            dashArray: symmetricEdge ? "3,3" : undefined,
            arrowHead: symmetricEdge ? "none" : undefined
        });
    }
    //
    // Construct text of annotation
    //
    currentText = []; // GLOBAL
    currentSentences = data.sentences; // GLOBAL
    data.sentences.forEach(function(sentence) {
        for(var i = 0; i < sentence.tokens.length; ++i){
            var token = sentence.tokens[i];
            var word = token.word;
            if (!(typeof tokensMap[word] === "undefined")) word = tokensMap[word];
            if (i > 0) currentText.push(" ");
            token.characterOffsetBegin = currentText.length;
            for(var j = 0; j < word.length; ++j)currentText.push(word[j]);
            token.characterOffsetEnd = currentText.length;
        }
        currentText.push("\n");
    });
    currentText = currentText.join("");
    //
    // Shared variables
    // These are what we'll render in BRAT
    //
    // (pos)
    var posEntities = [];
    // (lemma)
    var lemmaEntities = [];
    // (ner)
    var nerEntities = [];
    var nerEntitiesNormalized = [];
    // (sentiment)
    var sentimentEntities = [];
    // (entitylinking)
    var linkEntities = [];
    // (dependencies)
    var depsRelations = [];
    var deps2Relations = [];
    // (openie)
    var openieEntities = [];
    var openieEntitiesSet = {};
    var openieRelations = [];
    var openieRelationsSet = {};
    // (kbp)
    var kbpEntities = [];
    var kbpEntitiesSet = [];
    var kbpRelations = [];
    var kbpRelationsSet = [];
    var cparseEntities = [];
    var cparseRelations = [];
    var speakerEntities = [];
    //
    // Loop over sentences.
    // This fills in the variables above.
    //
    for(var sentI = 0; sentI < data.sentences.length; ++sentI){
        var sentence = data.sentences[sentI];
        var index = sentence.index;
        var tokens = sentence.tokens;
        var deps = sentence["basicDependencies"];
        var deps2 = sentence["enhancedPlusPlusDependencies"];
        var parseTree = sentence["parseTree"];
        // Speakers
        if (tokens.length > 0 && typeof tokens[0].speaker !== "undefined") {
            var speaker = tokens[0].speaker;
            var speakerId = "S(" + speaker + ")";
            addEntityType("SPEAKER", speakerId);
            var begin = parseInt(tokens[0].characterOffsetBegin);
            var end = parseInt(tokens[tokens.length - 1].characterOffsetEnd);
            speakerEntities.push([
                "sent" + sentI,
                speakerId,
                [
                    [
                        begin,
                        end
                    ]
                ]
            ]);
        }
        // POS tags
        /**
         * Generate a POS tagged token id
         */ function posID(i) {
            return "POS_" + sentI + "_" + i;
        }
        if (tokens.length > 0 && typeof tokens[0].pos !== "undefined") for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            var pos = token.pos;
            var begin = parseInt(token.characterOffsetBegin);
            var end = parseInt(token.characterOffsetEnd);
            addEntityType("POS", pos);
            posEntities.push([
                posID(i),
                pos,
                [
                    [
                        begin,
                        end
                    ]
                ]
            ]);
        }
        // Constituency parse
        // Carries the same assumption as NER
        if (parseTree && !useDagre) {
            var parseEntities = [];
            var parseRels = [];
            function processParseTree(tree, index) {
                tree.visitIndex = index;
                index++;
                if (tree.isTerminal) {
                    parseEntities[tree.visitIndex] = posEntities[tree.tokenIndex];
                    return index;
                } else if (tree.children) {
                    addEntityType("PARSENODE", tree.label);
                    parseEntities[tree.visitIndex] = [
                        "PARSENODE_" + sentI + "_" + tree.visitIndex,
                        tree.label,
                        [
                            [
                                tokens[tree.tokenStart].characterOffsetBegin,
                                tokens[tree.tokenEnd - 1].characterOffsetEnd
                            ]
                        ]
                    ];
                    var parentEnt = parseEntities[tree.visitIndex];
                    for(var i = 0; i < tree.children.length; i++){
                        var child = tree.children[i];
                        index = processParseTree(child, index);
                        var childEnt = parseEntities[child.visitIndex];
                        addRelationType("pc");
                        parseRels.push([
                            "PARSEEDGE_" + sentI + "_" + parseRels.length,
                            "pc",
                            [
                                [
                                    "parent",
                                    parentEnt[0]
                                ],
                                [
                                    "child",
                                    childEnt[0]
                                ]
                            ]
                        ]);
                    }
                }
                return index;
            }
            processParseTree(parseTree, 0);
            cparseEntities = cparseEntities.concat(cparseEntities, parseEntities);
            cparseRelations = cparseRelations.concat(parseRels);
        }
        // Dependency parsing
        /**
         * Process a dependency tree from JSON to Brat relations
         */ function processDeps(name, deps) {
            var relations = [];
            // Format: [${ID}, ${TYPE}, [[${ARGNAME}, ${TARGET}], [${ARGNAME}, ${TARGET}]]]
            for(var i = 0; i < deps.length; i++){
                var dep = deps[i];
                var governor = dep.governor - 1;
                var dependent = dep.dependent - 1;
                if (governor == -1) continue;
                addRelationType(dep.dep);
                relations.push([
                    name + "_" + sentI + "_" + i,
                    dep.dep,
                    [
                        [
                            "governor",
                            posID(governor)
                        ],
                        [
                            "dependent",
                            posID(dependent)
                        ]
                    ]
                ]);
            }
            return relations;
        }
        // Actually add the dependencies
        if (typeof deps !== "undefined") depsRelations = depsRelations.concat(processDeps("dep", deps));
        if (typeof deps2 !== "undefined") deps2Relations = deps2Relations.concat(processDeps("dep2", deps2));
        // Lemmas
        if (tokens.length > 0 && typeof tokens[0].lemma !== "undefined") for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            var lemma = token.lemma;
            var begin = parseInt(token.characterOffsetBegin);
            var end = parseInt(token.characterOffsetEnd);
            addEntityType("LEMMA", lemma);
            lemmaEntities.push([
                "LEMMA_" + sentI + "_" + i,
                lemma,
                [
                    [
                        begin,
                        end
                    ]
                ]
            ]);
        }
        // NER tags
        // Assumption: contiguous occurrence of one non-O is a single entity
        if (tokens.some(function(token) {
            return token.ner;
        })) for(var i = 0; i < tokens.length; i++){
            var ner = tokens[i].ner || "O";
            var normalizedNER = tokens[i].normalizedNER;
            if (typeof normalizedNER === "undefined") normalizedNER = ner;
            if (ner == "O") continue;
            var j = i;
            while(j < tokens.length - 1 && tokens[j + 1].ner == ner)j++;
            addEntityType("NER", ner, ner);
            nerEntities.push([
                "NER_" + sentI + "_" + i,
                ner,
                [
                    [
                        tokens[i].characterOffsetBegin,
                        tokens[j].characterOffsetEnd
                    ]
                ]
            ]);
            if (ner != normalizedNER) {
                addEntityType("NNER", normalizedNER, ner);
                nerEntities.push([
                    "NNER_" + sentI + "_" + i,
                    normalizedNER,
                    [
                        [
                            tokens[i].characterOffsetBegin,
                            tokens[j].characterOffsetEnd
                        ]
                    ]
                ]);
            }
            i = j;
        }
        // Sentiment
        if (typeof sentence.sentiment !== "undefined") {
            var sentiment = sentence.sentiment.toUpperCase().replace("VERY", "VERY ");
            addEntityType("SENTIMENT", sentiment);
            sentimentEntities.push([
                "SENTIMENT_" + sentI,
                sentiment,
                [
                    [
                        tokens[0].characterOffsetBegin,
                        tokens[tokens.length - 1].characterOffsetEnd
                    ]
                ]
            ]);
        }
        // Entity Links
        // Carries the same assumption as NER
        if (tokens.length > 0) for(var i = 0; i < tokens.length; i++){
            var link = tokens[i].entitylink;
            if (link == "O" || typeof link === "undefined") continue;
            var j = i;
            while(j < tokens.length - 1 && tokens[j + 1].entitylink == link)j++;
            addEntityType("LINK", link);
            linkEntities.push([
                "LINK_" + sentI + "_" + i,
                link,
                [
                    [
                        tokens[i].characterOffsetBegin,
                        tokens[j].characterOffsetEnd
                    ]
                ]
            ]);
            i = j;
        }
        // Open IE
        // Helper Functions
        function openieID(span) {
            return "OPENIEENTITY_" + sentI + "_" + span[0] + "_" + span[1];
        }
        function addEntity(span, role) {
            // Don't add duplicate entities
            if (openieEntitiesSet[[
                sentI,
                span,
                role
            ]]) return;
            openieEntitiesSet[[
                sentI,
                span,
                role
            ]] = true;
            // Add the entity
            openieEntities.push([
                openieID(span),
                role,
                [
                    [
                        tokens[span[0]].characterOffsetBegin,
                        tokens[span[1] - 1].characterOffsetEnd
                    ]
                ]
            ]);
        }
        function addRelation(gov, dep, role) {
            // Don't add duplicate relations
            if (openieRelationsSet[[
                sentI,
                gov,
                dep,
                role
            ]]) return;
            openieRelationsSet[[
                sentI,
                gov,
                dep,
                role
            ]] = true;
            // Add the relation
            openieRelations.push([
                "OPENIESUBJREL_" + sentI + "_" + gov[0] + "_" + gov[1] + "_" + dep[0] + "_" + dep[1],
                role,
                [
                    [
                        "governor",
                        openieID(gov)
                    ],
                    [
                        "dependent",
                        openieID(dep)
                    ]
                ]
            ]);
        }
        // Render OpenIE
        if (typeof sentence.openie !== "undefined") {
            // Register the entities + relations we'll need
            addEntityType("ENTITY", "Entity");
            addEntityType("RELATION", "Relation");
            addRelationType("subject");
            addRelationType("object");
            // Loop over triples
            for(var i = 0; i < sentence.openie.length; ++i){
                var subjectSpan = sentence.openie[i].subjectSpan;
                var relationSpan = sentence.openie[i].relationSpan;
                var objectSpan = sentence.openie[i].objectSpan;
                if (parseInt(relationSpan[0]) < 0 || parseInt(relationSpan[1]) < 0) continue; // This is a phantom relation
                var begin = parseInt(token.characterOffsetBegin);
                // Add the entities
                addEntity(subjectSpan, "Entity");
                addEntity(relationSpan, "Relation");
                addEntity(objectSpan, "Entity");
                // Add the relations
                addRelation(relationSpan, subjectSpan, "subject");
                addRelation(relationSpan, objectSpan, "object");
            }
        } // End OpenIE block
        //
        // KBP
        //
        // Helper Functions
        function kbpEntity(span) {
            return "KBPENTITY_" + sentI + "_" + span[0] + "_" + span[1];
        }
        function addKBPEntity(span, role) {
            // Don't add duplicate entities
            if (kbpEntitiesSet[[
                sentI,
                span,
                role
            ]]) return;
            kbpEntitiesSet[[
                sentI,
                span,
                role
            ]] = true;
            // Add the entity
            kbpEntities.push([
                kbpEntity(span),
                role,
                [
                    [
                        tokens[span[0]].characterOffsetBegin,
                        tokens[span[1] - 1].characterOffsetEnd
                    ]
                ]
            ]);
        }
        function addKBPRelation(gov, dep, role) {
            // Don't add duplicate relations
            if (kbpRelationsSet[[
                sentI,
                gov,
                dep,
                role
            ]]) return;
            kbpRelationsSet[[
                sentI,
                gov,
                dep,
                role
            ]] = true;
            // Add the relation
            kbpRelations.push([
                "KBPRELATION_" + sentI + "_" + gov[0] + "_" + gov[1] + "_" + dep[0] + "_" + dep[1],
                role,
                [
                    [
                        "governor",
                        kbpEntity(gov)
                    ],
                    [
                        "dependent",
                        kbpEntity(dep)
                    ]
                ]
            ]);
        }
        if (typeof sentence.kbp !== "undefined") {
            // Register the entities + relations we'll need
            addRelationType("subject");
            addRelationType("object");
            // Loop over triples
            for(var i = 0; i < sentence.kbp.length; ++i){
                var subjectSpan = sentence.kbp[i].subjectSpan;
                var subjectLink = "Entity";
                for(var k = subjectSpan[0]; k < subjectSpan[1]; ++k)if (subjectLink == "Entity" && typeof tokens[k] !== "undefined" && tokens[k].entitylink != "O" && typeof tokens[k].entitylink !== "undefined") subjectLink = tokens[k].entitylink;
                addEntityType("KBP_ENTITY", subjectLink);
                var objectSpan = sentence.kbp[i].objectSpan;
                var objectLink = "Entity";
                for(var k = objectSpan[0]; k < objectSpan[1]; ++k)if (objectLink == "Entity" && typeof tokens[k] !== "undefined" && tokens[k].entitylink != "O" && typeof tokens[k].entitylink !== "undefined") objectLink = tokens[k].entitylink;
                addEntityType("KBP_ENTITY", objectLink);
                var relation = sentence.kbp[i].relation;
                var begin = parseInt(token.characterOffsetBegin);
                // Add the entities
                addKBPEntity(subjectSpan, subjectLink);
                addKBPEntity(objectSpan, objectLink);
                // Add the relations
                addKBPRelation(subjectSpan, objectSpan, relation);
            }
        } // End KBP block
    } // End sentence loop
    //
    // Coreference
    //
    var corefEntities = [];
    var corefRelations = [];
    corefColors = [];
    corefColorIndex = {};
    speakerColors = [];
    speakerColorIndex = {};
    if (typeof data.corefs !== "undefined") {
        addRelationType("coref", true);
        addEntityType("COREF", "Mention");
        var clusters = Object.keys(data.corefs);
        clusters.forEach(function(clusterId) {
            var chain = data.corefs[clusterId];
            if (chain.length > 1) {
                var entityChainId = "CorefEntity" + clusterId;
                addEntityType("COREF", entityChainId);
                for(var i = 0; i < chain.length; ++i){
                    var mention = chain[i];
                    var id = "COREF" + mention.id;
                    var tokens = data.sentences[mention.sentNum - 1].tokens;
                    corefEntities.push([
                        id,
                        entityChainId,
                        [
                            [
                                tokens[mention.startIndex - 1].characterOffsetBegin,
                                tokens[mention.endIndex - 2].characterOffsetEnd
                            ]
                        ]
                    ]);
                // if (i > 0) {
                //   var lastId = 'COREF' + chain[i - 1].id;
                //   corefRelations.push(['COREF' + chain[i-1].id + '_' + chain[i].id,
                //                        'coref',
                //                        [['governor', lastId],
                //                         ['dependent', id]    ] ]);
                // }
                }
            }
        });
    } // End coreference block
    //
    // Actually render the elements
    //
    /**
     * Helper function to render a given set of entities / relations
     * to a Div, if it exists.
     */ function embed(container, entities, relations, reverse) {
        var text = currentText;
        if (reverse) {
            var length = currentText.length;
            for(var i = 0; i < entities.length; ++i){
                var offsets = entities[i][2][0];
                var tmp = length - offsets[0];
                offsets[0] = length - offsets[1];
                offsets[1] = tmp;
            }
            text = text.split("").reverse().join("");
        }
        if ($("#" + container).length > 0) Util.embed(container, {
            entity_types: entityTypes,
            relation_types: relationTypes1
        }, {
            text: text,
            entities: entities,
            relations: relations
        });
    }
    // Render each annotation
    head.ready(function() {
        embed("pos", posEntities);
        embed("lemma", lemmaEntities);
        embed("ner", nerEntities);
        embed("entities", linkEntities);
        if (!useDagre) embed("parse", cparseEntities, cparseRelations);
        embed("deps", posEntities, depsRelations);
        embed("deps2", posEntities, deps2Relations);
        if (speakerEntities.length) embed("speakers", speakerEntities);
        embed("coref", corefEntities, corefRelations);
        embed("openie", openieEntities, openieRelations);
        embed("kbp", kbpEntities, kbpRelations);
        embed("sentiment", sentimentEntities);
        // Constituency parse
        // Uses d3 and dagre-d3 (not brat)
        if ($("#parse").length > 0 && useDagre) {
            var parseViewer = new ParseViewer({
                selector: "#parse"
            });
            parseViewer.showAnnotation(data);
            $("#parse").addClass("svg").css("display", "block");
        }
    });
} // End render function
/**
 * Render a TokensRegex response
 */ function renderTokensregex(data) {
    /**COREF'
     * Register an entity type (a tag) for Brat
     */ var entityTypesSet = {};
    var entityTypes = [];
    function addEntityType(type, color1) {
        // Don't add duplicates
        if (entityTypesSet[type]) return;
        entityTypesSet[type] = true;
        // Set the color
        if (typeof color1 === "undefined") color1 = "#ADF6A2";
        // Register the type
        entityTypes.push({
            type: type,
            labels: [
                type
            ],
            bgColor: color1,
            borderColor: "darken"
        });
    }
    var entities = [];
    for(var sentI = 0; sentI < data.sentences.length; ++sentI){
        var tokens = currentSentences[sentI].tokens;
        for(var matchI = 0; matchI < data.sentences[sentI].length; ++matchI){
            var match = data.sentences[sentI][matchI];
            // Add groups
            for(groupName in match)if (groupName.startsWith("$") || isInt(groupName)) {
                addEntityType(groupName, "#FFFDA8");
                var begin = parseInt(tokens[match[groupName].begin].characterOffsetBegin);
                var end = parseInt(tokens[match[groupName].end - 1].characterOffsetEnd);
                entities.push([
                    "TOK_" + sentI + "_" + matchI + "_" + groupName,
                    groupName,
                    [
                        [
                            begin,
                            end
                        ]
                    ]
                ]);
            }
            // Add match
            addEntityType("match", "#ADF6A2");
            var begin = parseInt(tokens[match.begin].characterOffsetBegin);
            var end = parseInt(tokens[match.end - 1].characterOffsetEnd);
            entities.push([
                "TOK_" + sentI + "_" + matchI + "_match",
                "match",
                [
                    [
                        begin,
                        end
                    ]
                ]
            ]);
        }
    }
    Util.embed("tokensregex", {
        entity_types: entityTypes,
        relation_types: []
    }, {
        text: currentText,
        entities: entities,
        relations: []
    });
} // END renderTokensregex()
/**
 * Render a Semgrex response
 */ function renderSemgrex(data) {
    /**
     * Register an entity type (a tag) for Brat
     */ var entityTypesSet = {};
    var entityTypes = [];
    function addEntityType(type, color1) {
        // Don't add duplicates
        if (entityTypesSet[type]) return;
        entityTypesSet[type] = true;
        // Set the color
        if (typeof color1 === "undefined") color1 = "#ADF6A2";
        // Register the type
        entityTypes.push({
            type: type,
            labels: [
                type
            ],
            bgColor: color1,
            borderColor: "darken"
        });
    }
    relationTypes = [
        {
            type: "semgrex",
            labels: [
                "-"
            ],
            dashArray: "3,3",
            arrowHead: "none"
        }
    ];
    var entities = [];
    var relations = [];
    for(var sentI = 0; sentI < data.sentences.length; ++sentI){
        var tokens = currentSentences[sentI].tokens;
        for(var matchI = 0; matchI < data.sentences[sentI].length; ++matchI){
            var match = data.sentences[sentI][matchI];
            // Add match
            addEntityType("match", "#ADF6A2");
            var begin = parseInt(tokens[match.begin].characterOffsetBegin);
            var end = parseInt(tokens[match.end - 1].characterOffsetEnd);
            entities.push([
                "SEM_" + sentI + "_" + matchI + "_match",
                "match",
                [
                    [
                        begin,
                        end
                    ]
                ]
            ]);
            // Add groups
            for(groupName in match)if (groupName.startsWith("$") || isInt(groupName)) {
                // (add node)
                group = match[groupName];
                groupName = groupName.substring(1);
                addEntityType(groupName, "#FFFDA8");
                var begin = parseInt(tokens[group.begin].characterOffsetBegin);
                var end = parseInt(tokens[group.end - 1].characterOffsetEnd);
                entities.push([
                    "SEM_" + sentI + "_" + matchI + "_" + groupName,
                    groupName,
                    [
                        [
                            begin,
                            end
                        ]
                    ]
                ]);
                // (add relation)
                relations.push([
                    "SEMGREX_" + sentI + "_" + matchI + "_" + groupName,
                    "semgrex",
                    [
                        [
                            "governor",
                            "SEM_" + sentI + "_" + matchI + "_match"
                        ],
                        [
                            "dependent",
                            "SEM_" + sentI + "_" + matchI + "_" + groupName
                        ]
                    ]
                ]);
            }
        }
    }
    Util.embed("semgrex", {
        entity_types: entityTypes,
        relation_types: relationTypes
    }, {
        text: currentText,
        entities: entities,
        relations: relations
    });
} // END renderSemgrex
/**
 * Render a Tregex response
 */ function renderTregex(data) {
    $("#tregex").empty();
    $("#tregex").append("<pre>" + JSON.stringify(data, null, 4) + "</pre>");
} // END renderTregex
// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
/**
 * MAIN()
 *
 * The entry point of the page
 */ $(document).ready(function() {
    // Some initial styling
    $(".chosen-select").chosen();
    $(".chosen-container").css("width", "100%");
    // Language-specific changes
    $("#language").on("change", function() {
        $("#text").attr("dir", "");
        if ($("#language").val() === "en") $("#text").attr("placeholder", "e.g., The quick brown fox jumped over the lazy dog.");
        else if ($("#language").val() === "zh") $("#text").attr("placeholder", "\u4F8B\u5982\uFF0C\u5FEB\u901F\u7684\u68D5\u8272\u72D0\u72F8\u8DF3\u904E\u4E86\u61F6\u60F0\u7684\u72D7\u3002");
        else $("#text").attr("placeholder", "Unknown language for placeholder query: " + $("#language").val());
    });
    // Submit on shift-enter
    $("#text").keydown(function(event1) {
        if (event1.keyCode == 13) {
            if (event1.shiftKey) {
                event1.preventDefault(); // don't register the enter key when pressed
                return false;
            }
        }
    });
    $("#text").keyup(function(event1) {
        if (event1.keyCode == 13) {
            if (event1.shiftKey) {
                $("#submit").click(); // submit the form when the enter key is released
                event1.stopPropagation();
                return false;
            }
        }
    });
    // Submit on clicking the 'submit' button
    $("#submit").click(function() {
        // Get the text to annotate
        currentQuery = $("#text").val();
        if (currentQuery.trim() == "") {
            if ($("#language").val() === "en") currentQuery = "The quick brown fox jumped over the lazy dog.";
            else if ($("#language").val() === "zh") currentQuery = "\u5FEB\u901F\u7684\u68D5\u8272\u72D0\u72F8\u8DF3\u8FC7\u4E86\u61D2\u60F0\u7684\u72D7";
            else currentQuery = "Unknown language for default query: " + $("#language").val();
            $("#text").val(currentQuery);
        }
        // Update the UI
        $("#submit").prop("disabled", true);
        $("#annotations").hide();
        // $("#patterns_row").hide();
        $("#loading").show();
        // Run query
        $.ajax({
            type: "POST",
            url: serverAddress + "/api/nlp/?properties=" + encodeURIComponent('{"annotators": "' + annotators() + '", "date": "' + date() + '"}') + "&pipelineLanguage=" + encodeURIComponent($("#language").val()),
            data: encodeURIComponent(currentQuery),
            dataType: "json",
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            success: function(data) {
                $("#submit").prop("disabled", false);
                if (typeof data === "undefined" || data.sentences == undefined) alert("Failed to reach server!");
                else {
                    // Process constituency parse
                    var constituencyParseProcessor = new ConstituencyParseProcessor();
                    constituencyParseProcessor.process(data);
                    // Empty divs
                    $("#annotations").empty();
                    // Re-render divs
                    function createAnnotationDiv(id, annotator, selector, label) {
                        // (make sure we requested that element)
                        if (annotators().indexOf(annotator) < 0) return;
                        // (make sure the data contains that element)
                        ok = false;
                        if (typeof data[selector] !== "undefined") ok = true;
                        else if (typeof data.sentences !== "undefined" && data.sentences.length > 0) {
                            if (typeof data.sentences[0][selector] !== "undefined") ok = true;
                            else if (typeof data.sentences[0].tokens != "undefined" && data.sentences[0].tokens.length > 0) // (make sure the annotator select is in at least one of the tokens of any sentence)
                            ok = data.sentences.some(function(sentence) {
                                return sentence.tokens.some(function(token) {
                                    return typeof token[selector] !== "undefined";
                                });
                            });
                        }
                        // (render the element)
                        if (ok) $("#annotations").append('<h4 class="red">' + label + ':</h4> <div id="' + id + '"></div>');
                    }
                    // (create the divs)
                    //                  div id      annotator     field_in_data                          label
                    createAnnotationDiv("pos", "pos", "pos", "Part-of-Speech");
                    createAnnotationDiv("lemma", "lemma", "lemma", "Lemmas");
                    createAnnotationDiv("ner", "ner", "ner", "Named Entity Recognition");
                    createAnnotationDiv("parse", "parse", "parseTree", "Constituency Parse");
                    createAnnotationDiv("deps", "depparse", "basicDependencies", "Basic Dependencies");
                    createAnnotationDiv("deps2", "depparse", "enhancedPlusPlusDependencies", "Enhanced++ Dependencies");
                    createAnnotationDiv("openie", "openie", "openie", "Open IE");
                    createAnnotationDiv("speakers", "coref", "corefs", "Speakers");
                    createAnnotationDiv("coref", "coref", "corefs", "Coreference");
                    createAnnotationDiv("entities", "entitylink", "entitylink", "Wikidict Entities");
                    createAnnotationDiv("kbp", "kbp", "kbp", "KBP Relations");
                    createAnnotationDiv("sentiment", "sentiment", "sentiment", "Sentiment");
                    // Update UI
                    $("#loading").hide();
                    $(".corenlp_error").remove(); // Clear error messages
                    $("#annotations").show();
                    // Render
                    var reverse = $("#language").val() === "ar";
                    render(data, reverse);
                // Render patterns
                // $("#annotations").append('<h4 class="red" style="margin-top: 4ex;">CoreNLP Tools:</h4>'); // TODO(gabor) a strange place to add this header to
                // $("#patterns_row").show();
                }
            },
            error: function(data) {
                DATA = data;
                var alertDiv = $("<div/>").addClass("alert").addClass("alert-danger").addClass("alert-dismissible").addClass("corenlp_error").attr("role", "alert");
                var button = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
                var message = $("<span/>").text(data.responseText);
                button.appendTo(alertDiv);
                message.appendTo(alertDiv);
                $("#loading").hide();
                alertDiv.appendTo($("#errors"));
                $("#submit").prop("disabled", false);
            }
        });
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
    // Support passing parameters on page launch, via window.location.hash parameters.
    // Example: http://localhost:9000/#text=foo%20bar&annotators=pos,lemma,ner
    (function() {
        var rawParams = window.location.hash.slice(1).split("&");
        var params = {};
        rawParams.forEach(function(paramKV) {
            paramKV = paramKV.split("=");
            if (paramKV.length === 2) {
                var key = paramKV[0];
                var value = paramKV[1];
                params[key] = value;
            }
        });
        if (params.text) {
            var text = decodeURIComponent(params.text);
            $("#text").val(text);
        }
        if (params.annotators) {
            var annotators = params.annotators.split(",");
            // De-select everything
            $("#annotators").find("option").each(function() {
                $(this).prop("selected", false);
            });
            // Select the specified ones.
            annotators.forEach(function(a) {
                $("#annotators").find('option[value="' + a + '"]').prop("selected", true);
            });
            // Refresh Chosen
            $("#annotators").trigger("chosen:updated");
        }
        if (params.text || params.annotators) // Finally, let's auto-submit.
        $("#submit").click();
    })();
    $("#form_tokensregex").submit(function(e) {
        // Don't actually submit the form
        e.preventDefault();
        // Get text
        if ($("#tokensregex_search").val().trim() == "") $("#tokensregex_search").val("(?$foxtype [{pos:JJ}]+ ) fox");
        var pattern = $("#tokensregex_search").val();
        // Remove existing annotation
        $("#tokensregex").remove();
        // Make ajax call
        // Previously this would escape the + and & in pattern before the
        // call to encodeURIComponent, but the server doesn't double
        // unescape the incoming patterns, so that was not working
        $.ajax({
            type: "POST",
            url: serverAddress + "/tokensregex?pattern=" + encodeURIComponent(pattern) + "&properties=" + encodeURIComponent('{"annotators": "' + annotators() + '", "date": "' + date() + '"}') + "&pipelineLanguage=" + encodeURIComponent($("#language").val()),
            data: encodeURIComponent(currentQuery),
            success: function(data) {
                $(".tokensregex_error").remove(); // Clear error messages
                $('<div id="tokensregex" class="pattern_brat"/>').appendTo($("#div_tokensregex"));
                renderTokensregex(data);
            },
            error: function(data) {
                var alertDiv = $("<div/>").addClass("alert").addClass("alert-danger").addClass("alert-dismissible").addClass("tokensregex_error").attr("role", "alert");
                var button = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
                var message = $("<span/>").text(data.responseText);
                button.appendTo(alertDiv);
                message.appendTo(alertDiv);
                alertDiv.appendTo($("#div_tokensregex"));
            }
        });
    });
    $("#form_semgrex").submit(function(e) {
        // Don't actually submit the form
        e.preventDefault();
        // Get text
        if ($("#semgrex_search").val().trim() == "") $("#semgrex_search").val("{pos:/VB.*/} >nsubj {}=subject >/nmod:.*/ {}=prep_phrase");
        var pattern = $("#semgrex_search").val();
        // Remove existing annotation
        $("#semgrex").remove();
        // Add missing required annotators
        var requiredAnnotators = annotators().split(",");
        if (requiredAnnotators.indexOf("depparse") < 0) requiredAnnotators.push("depparse");
        // Make ajax call
        $.ajax({
            type: "POST",
            url: serverAddress + "/semgrex?pattern=" + encodeURIComponent(pattern) + "&properties=" + encodeURIComponent('{"annotators": "' + requiredAnnotators.join(",") + '", "date": "' + date() + '"}') + "&pipelineLanguage=" + encodeURIComponent($("#language").val()),
            data: encodeURIComponent(currentQuery),
            success: function(data) {
                $(".semgrex_error").remove(); // Clear error messages
                $('<div id="semgrex" class="pattern_brat"/>').appendTo($("#div_semgrex"));
                renderSemgrex(data);
            },
            error: function(data) {
                var alertDiv = $("<div/>").addClass("alert").addClass("alert-danger").addClass("alert-dismissible").addClass("semgrex_error").attr("role", "alert");
                var button = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
                var message = $("<span/>").text(data.responseText);
                button.appendTo(alertDiv);
                message.appendTo(alertDiv);
                alertDiv.appendTo($("#div_semgrex"));
            }
        });
    });
    $("#form_tregex").submit(function(e) {
        // Don't actually submit the form
        e.preventDefault();
        // Get text
        if ($("#tregex_search").val().trim() == "") $("#tregex_search").val("NP < NN=animal");
        var pattern = $("#tregex_search").val();
        // Remove existing annotation
        $("#tregex").remove();
        // Add missing required annotators
        var requiredAnnotators = annotators().split(",");
        if (requiredAnnotators.indexOf("parse") < 0) requiredAnnotators.push("parse");
        // Make ajax call
        $.ajax({
            type: "POST",
            url: serverAddress + "/tregex?pattern=" + encodeURIComponent(pattern) + "&properties=" + encodeURIComponent('{"annotators": "' + requiredAnnotators.join(",") + '", "date": "' + date() + '"}') + "&pipelineLanguage=" + encodeURIComponent($("#language").val()),
            data: encodeURIComponent(currentQuery),
            success: function(data) {
                $(".tregex_error").remove(); // Clear error messages
                $('<div id="tregex" class="pattern_brat"/>').appendTo($("#div_tregex"));
                renderTregex(data);
            },
            error: function(data) {
                var alertDiv = $("<div/>").addClass("alert").addClass("alert-danger").addClass("alert-dismissible").addClass("tregex_error").attr("role", "alert");
                var button = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
                var message = $("<span/>").text(data.responseText);
                button.appendTo(alertDiv);
                message.appendTo(alertDiv);
                alertDiv.appendTo($("#div_tregex"));
            }
        });
    });
});

},{}]},["jeGeT","8lqZg"], "8lqZg", "parcelRequire7ee5")

//# sourceMappingURL=index.975ef6c8.js.map
