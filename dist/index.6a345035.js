// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dkjHR":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "032419a86a345035";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"davKm":[function(require,module,exports) {
var _applicantManager = require("./typeScriptFiles/Managers/ApplicantManager");
var _cityManager = require("./typeScriptFiles/Managers/CityManager");
var _dataStorage = require("./DataStorage");
var _listManager = require("./typeScriptFiles/Managers/ListManager");
// Import stylesheets
var _styleCss = require("./style.css");
var _tableManager = require("./typeScriptFiles/Managers/TableManager");
var _cardManager = require("./typeScriptFiles/Managers/CardManager");
var _cityListFromAPI = require("./typeScriptFiles/API/CityListFromAPI");
/**
 * Listeleri başlangıç halinde kapalı hale getiren kısım
 */ const userTableSection = document.getElementById("userListSection");
userTableSection.style.display = "none";
const cityOpportunityListSection = document.getElementById("cityOpportunityListSection");
cityOpportunityListSection.style.display = "none";
const cardListSection = document.getElementById("cardListSection");
cardListSection.style.display = "none";
/**
 * Doğum taihini max olarak bugünün tarihine ayarlayan kısım
 */ document.getElementById('applicantBirthDateAttach').max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
/**
 * Default olarak kullanıcı ve şehir-olanakların eklendiği kısım
 */ let cityDefaultList = _dataStorage.DataStorage.createCityList();
let applicantDefaultList = _dataStorage.DataStorage.createApplicantlist();
let cardDefaultList = _dataStorage.DataStorage.createCardList();
/**
 * Yeni Kullancı kısmında kaydet butonuna tıklanınca karşılaşılacak senaryo
 */ const saveNewUser = document.getElementById("newUserSavingButton");
const userForm = document.getElementById("userForm");
saveNewUser.onclick = function() {
    if (userForm.reportValidity()) {
        _applicantManager.ApplicantManager.createApplicantObject();
        _tableManager.TableManager.resetUserPage();
    }
};
/**
 * * Yeni Kullancı kısmında listele butonuna tıklanınca karşılaşılacak senaryo
 */ const listUsers = document.getElementById("listUserButton");
listUsers.onclick = function() {
    let myUserTableList = document.getElementById("userListSection");
    userTableSection.style.display = "inline";
    cityOpportunityListSection.style.display = "none";
    cardListSection.style.display = "none";
    _listManager.ListManager.createUserList(_dataStorage.DataStorage.applicants);
};
/**
 *  * Yeni Şehir-olanak kısmında kaydet butonuna tıklanınca karşılaşılacak senaryo
 */ const saveNewCityOpportunity = document.getElementById("newCityAndOpportunitySavingButton");
const cityForm = document.getElementById("cityForm");
saveNewCityOpportunity.onclick = function() {
    if (cityForm.reportValidity()) {
        _cityManager.CityManager.createCityObject();
        _tableManager.TableManager.resetCityPage();
    }
};
/**
 * Yeni Şehir-olanak kısmında listele butonuna tıklanınca karşılaşılacak senaryo
 */ const listCitiesOpportunities = document.getElementById("listCityOpportunityButton");
listCitiesOpportunities.onclick = function() {
    let myCityOpportunityTableList = document.getElementById("cityOpportunityListSection");
    userTableSection.style.display = "none";
    cityOpportunityListSection.style.display = "inline";
    cardListSection.style.display = "none";
    _listManager.ListManager.createCityOpportunityList(_dataStorage.DataStorage.cities);
};
/**
 * Yeni Kart kısmında kaydet butonuna tıklanınca karşılaşılacak senaryo
 */ const saveNewCard = document.getElementById("newCardSavingButton");
const cardForm = document.getElementById("cardForm");
saveNewCard.onclick = function() {
    _cardManager.CardManager.createCardObject();
    _tableManager.TableManager.resetCardPage();
    alert("Kart başarılı bir şekilde listeye eklendi.");
};
/**
 * Yeni Kart kısmında listele butonuna tıklanınca karşılaşılacak senaryo
 */ const listCards = document.getElementById("listCardButton");
listCards.onclick = function() {
    let myCityOpportunityTableList = document.getElementById("cardListSection");
    userTableSection.style.display = "none";
    cityOpportunityListSection.style.display = "none";
    cardListSection.style.display = "inline";
    _listManager.ListManager.createCardList(_dataStorage.DataStorage.cards);
};
/**
 * Kart kaydındaki Select box ların oluşturulduğu kısım  
 */ let myUserSelectBox = document.getElementById("userField");
_listManager.ListManager.createUserSelectList(myUserSelectBox);
let myCityOpportunitySelectBox = document.getElementById("cityOpportunityField");
_listManager.ListManager.createCityOpportunitySelectList(myCityOpportunitySelectBox);
let myCitySelectBox = document.getElementById("checkBoxList");
_listManager.ListManager.createCitySelectList(myCitySelectBox, "İstanbul");
console.log(_cityListFromAPI.CityListFromAPI.getCityViaXhr() + "şehhirerrrrrrrr");

},{"./typeScriptFiles/Managers/ApplicantManager":"7MKWA","./typeScriptFiles/Managers/CityManager":"5isDM","./DataStorage":"91qPx","./typeScriptFiles/Managers/ListManager":"a9xEb","./style.css":"dTv9V","./typeScriptFiles/Managers/TableManager":"kmwZ0","./typeScriptFiles/Managers/CardManager":"f7E1M","./typeScriptFiles/API/CityListFromAPI":"bGmYO"}],"7MKWA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *  * Program başvuran kişinin bilgilerinin oluşturulduğu ve verisaklamaya gönderildiği cardList sınıf
 */ parcelHelpers.export(exports, "ApplicantManager", ()=>ApplicantManager
);
var _applicant = require("../../Applicant");
var _dataStorage = require("../../DataStorage");
var _listManager = require("./ListManager");
var _applicantControllerAPI = require("../API/ApplicantControllerAPI");
var _verifications = require("../../Verifications");
class ApplicantManager {
    static createApplicantObject() {
        let applicantName = document.getElementById("applicantNameAttach");
        _verifications.Verifications.checkText(applicantName);
        let applicantSurname = document.getElementById("applicantSurnameAttach");
        let applicantBirthDate = document.getElementById("applicantBirthDateAttach");
        _verifications.Verifications.checkDate(applicantBirthDate);
        let applicantID = document.getElementById("applicantIDAttach");
        const selectedTypeOfApplicantBasedOnAgeInput = document.getElementById("citizenTypeSelection");
        let typeOfApplicantBasedOnAge;
        switch(Number(selectedTypeOfApplicantBasedOnAgeInput.value)){
            case 0:
                typeOfApplicantBasedOnAge = "Çocuk";
                break;
            case 2:
                typeOfApplicantBasedOnAge = "Yaşlı";
                break;
            case 1:
                typeOfApplicantBasedOnAge = "Normal";
                break;
        }
        const selectedTypeOfApplicantBasedOnEducationInput = document.getElementById("applicatTypeSelection");
        let typeOfApplicantBasedOnEducation;
        switch(selectedTypeOfApplicantBasedOnEducationInput.value){
            case "0":
                typeOfApplicantBasedOnEducation = "Öğrenci";
                break;
            case "1":
                typeOfApplicantBasedOnEducation = "Sivil";
                break;
            case "2":
                typeOfApplicantBasedOnEducation = "--";
        }
        if (_verifications.Verifications.checkID(applicantID)) {
            if (_verifications.Verifications.validateID(applicantID)) {
                let newApplicant = new _applicant.Applicant(applicantName.value.toUpperCase(), applicantSurname.value.toUpperCase(), applicantBirthDate.value, Number(applicantID.value), typeOfApplicantBasedOnAge, typeOfApplicantBasedOnEducation);
                _applicantControllerAPI.ApplicantControllerAPI.createApplicantViaAPI(newApplicant);
                // DataStorage.applicants.push(newApplicant);
                _listManager.ListManager.updateUserSelectionList();
                alert("Kullanıcı başarılı bir şekilde listeye eklendi.");
            }
        }
    }
    static getApplicantNameWithId(id) {
        let result = "";
        _dataStorage.DataStorage.applicants.forEach((applicant)=>{
            if (applicant.ApplicantID === id) result = applicant.ApplicantName;
        });
        return result;
    }
}

},{"../../Applicant":"aThwr","../../DataStorage":"91qPx","./ListManager":"a9xEb","../API/ApplicantControllerAPI":"dX5yk","../../Verifications":"2CwYE","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"aThwr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Program başvuran kişinin bilgilerinin saklandığı sınıf
 */ parcelHelpers.export(exports, "Applicant", ()=>Applicant
);
class Applicant {
    constructor(applicantName1, applicantSurname1, applicantBirthDate1, applicantID1, typeOfApplicantBasedOnAge, typeOfApplicantBasedOnEducation){
        this._applicantName = applicantName1;
        this._applicantSurname = applicantSurname1;
        this._applicantBirthDate = applicantBirthDate1;
        this._applicantID = applicantID1;
        this._typeOfApplicantBasedOnAge = typeOfApplicantBasedOnAge;
        this._typeOfApplicantBasedOnEducation = typeOfApplicantBasedOnEducation;
    }
    get ApplicantName() {
        return this._applicantName;
    }
    set ApplicantName(applicantName) {
        this._applicantName = applicantName;
    }
    get ApplicantSurname() {
        return this._applicantSurname;
    }
    set ApplicantSurname(applicantSurname) {
        this._applicantSurname = applicantSurname;
    }
    get ApplicantBirthDate() {
        return this._applicantBirthDate;
    }
    set ApplicantBirthDate(applicantBirthDate) {
        this._applicantBirthDate = applicantBirthDate;
    }
    get ApplicantID() {
        return this._applicantID;
    }
    set ApplicantID(applicantID) {
        this._applicantID = applicantID;
    }
    get ApplicantTypeBasedOnAge() {
        return this._typeOfApplicantBasedOnAge;
    }
    set ApplicantTypeBasedOnAge(applicantTypeBasedOnAge) {
        this._typeOfApplicantBasedOnAge = applicantTypeBasedOnAge;
    }
    get ApplicantTypeBasedOnEducation() {
        return this._typeOfApplicantBasedOnEducation;
    }
    set ApplicantTypeBasedOnEducation(applicantTypeBasedOnEducation) {
        this._typeOfApplicantBasedOnEducation = applicantTypeBasedOnEducation;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"jzpuJ":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"91qPx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataStorage", ()=>DataStorage
);
var _applicantListFromAPI = require("./typeScriptFiles/API/ApplicantListFromAPI");
var _cardListFromAPI = require("./typeScriptFiles/API/CardListFromAPI");
var _cityListFromAPI = require("./typeScriptFiles/API/CityListFromAPI");
class DataStorage {
    /**
 * Default olarak programa basılan Şehir-olanak bilgileri
 */ static createCityList() {
        this.cities = _cityListFromAPI.CityListFromAPI.getCityViaXhr();
        /*
  this.cities.push(
      {
        CityName: "ISTANBUL",
        OpportunityName: "OTOPARK",
        PerYearPrice: 225,
        TopLimitYearValue: 1,
        CityOpportunityId: 1
      },
      {
        CityName: "ISTANBUL",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 400,
        TopLimitYearValue: 3,
        CityOpportunityId :2
      },
      {
        CityName: "ISTANBUL",
        OpportunityName: "TIYATRO",
        PerYearPrice: 400,
        TopLimitYearValue: 3,
        CityOpportunityId:3
      },
      {
        CityName: "ANKARA",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 300,
        TopLimitYearValue: 4,
        CityOpportunityId:4
      },  {
        CityName: "BURSA",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 250,
        TopLimitYearValue: 5,
        CityOpportunityId:5
      },  {
        CityName: "ADANA",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 200,
        TopLimitYearValue: 5,
        CityOpportunityId:6
      },  {
        CityName: "IZMIR",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 300,
        TopLimitYearValue: 4,
        CityOpportunityId:7
      });
*/ return this.cities;
    }
    /**
 * Default olarak programa basılan kullanıcı bilgileri
 */ static createApplicantlist() {
        this.applicants = _applicantListFromAPI.ApplicantListFromAPI.getApplicantViaXhr();
        /* this.applicants.push(
      {
        ApplicantName :"YASIN",
        ApplicantSurname: "BUZGULU",
        ApplicantBirthDate: "1997-09-05",
        ApplicantID: 53452312702,
        ApplicantTypeBasedOnAge: "Normal",
        ApplicantTypeBasedOnEducation:  "Öğrenci"
      });
      */ return this.applicants;
    }
    static createCardList() {
        this.cards = _cardListFromAPI.CardListFromAPI.getCardViaXhr();
        return this.cards;
    }
}
DataStorage.cities = new Array();
DataStorage.applicants = new Array();
DataStorage.cards = new Array();

},{"./typeScriptFiles/API/ApplicantListFromAPI":"9vHnO","./typeScriptFiles/API/CardListFromAPI":"iXQFl","./typeScriptFiles/API/CityListFromAPI":"bGmYO","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"9vHnO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApplicantListFromAPI", ()=>ApplicantListFromAPI
);
class ApplicantListFromAPI {
    static getApplicantViaXhr() {
        let xhr = new XMLHttpRequest();
        let applicants = new Array();
        xhr.open("GET", 'http://localhost:8080/applicants/');
        xhr.onload = (event)=>{
            var data = JSON.parse(event.target.response);
            if (Number(event.target.status) >= 200 && Number(event.target.status) < 400) data.forEach((applicant)=>{
                applicants.push({
                    ApplicantName: applicant.ApplicantName,
                    ApplicantSurname: applicant.ApplicantSurname,
                    ApplicantBirthDate: applicant.ApplicantBirthDate,
                    ApplicantID: Number(applicant.ApplicantID),
                    ApplicantTypeBasedOnAge: applicant.ApplicantTypeBasedOnAge,
                    ApplicantTypeBasedOnEducation: applicant.ApplicantTypeBasedOnEducation
                });
            });
            else console.log('error');
        };
        xhr.onerror = (err)=>{
            console.log('[Error]', err);
        };
        // Send XHR request
        xhr.send();
        return applicants;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"iXQFl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CardListFromAPI", ()=>CardListFromAPI
);
class CardListFromAPI {
    static getCardViaXhr() {
        let xhr = new XMLHttpRequest();
        let cards = new Array();
        xhr.open("GET", 'http://localhost:8080/cards/');
        xhr.onload = (event)=>{
            var data = JSON.parse(event.target.response);
            if (Number(event.target.status) >= 200 && Number(event.target.status) < 400) data.forEach((card)=>{
                cards.push({
                    CardIdentitty: Number(card.CardIdentitty),
                    CardPrice: Number(card.CardPrice),
                    CardExpiryDate: card.CardExpiryDate,
                    User: card.User,
                    City: card.City,
                    Opportunity: card.Opportunity
                });
            });
            else console.log('error');
        };
        xhr.onerror = (err)=>{
            console.log('[Error]', err);
        };
        // Send XHR request
        xhr.send();
        return cards;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"bGmYO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CityListFromAPI", ()=>CityListFromAPI
);
class CityListFromAPI {
    static getCityViaXhr() {
        let xhr = new XMLHttpRequest();
        let cities = new Array();
        xhr.open("GET", 'http://localhost:8080/cities/');
        xhr.onload = (event)=>{
            var data = JSON.parse(event.target.response);
            if (Number(event.target.status) >= 200 && Number(event.target.status) < 400) data.forEach((city)=>{
                cities.push({
                    CityName: city.CityName,
                    OpportunityName: city.OpportunityName,
                    PerYearPrice: Number(city.PerYearPrice),
                    TopLimitYearValue: Number(city.TopLimitYearValue),
                    CityOpportunityId: Number(city.CityOpportunityId)
                });
            });
            else console.log('error');
        };
        xhr.onerror = (err)=>{
            console.log('[Error]', err);
        };
        // Send XHR request
        xhr.send();
        return cities;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"a9xEb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ListManager", ()=>ListManager
);
var _dataStorage = require("../../DataStorage");
var _applicantControllerAPI = require("../API/ApplicantControllerAPI");
var _cardControllerAPI = require("../API/CardControllerAPI");
var _cityControllerAPI = require("../API/CityControllerAPI");
var _tableManager = require("./TableManager");
class ListManager {
    /**
 * Yeni Kart kaydında kaydedilen kullanıcıların listelendiği kısım
 */ static createUserSelectList(myUser) {
        let selectList = document.createElement("select");
        selectList.id = "myUserSelect";
        selectList.innerHTML = `<option value="none" selected disabled hidden required> Lütfen Kullanıcı Seçiniz`;
        myUser.appendChild(selectList);
        for(let i = 0; i < _dataStorage.DataStorage.applicants.length; i++){
            let option = document.createElement("option");
            option.value = _dataStorage.DataStorage.applicants[i].ApplicantID.toString();
            option.text = _dataStorage.DataStorage.applicants[i].ApplicantName + " " + _dataStorage.DataStorage.applicants[i].ApplicantID;
            selectList.appendChild(option);
        }
    }
    /**
   * Yeni kullanıcı eklendikçe, yeni kart kaydındaki kullanıcı selection listesini güncelleyen kısım
   */ static updateUserSelectionList() {
        let myUserSelectBox = document.getElementById("userField");
        myUserSelectBox.innerHTML = '';
        ListManager.createUserSelectList(myUserSelectBox);
    }
    /**
 * Yeni Kart kaydında şehir selection listesinin hazırlandığı kısım
 */ static createCityOpportunitySelectList(myCityOpportunity) {
        let selectListCity = document.createElement("select");
        selectListCity.id = "myCityOpportunitySelect";
        selectListCity.innerHTML = `<option value="none" selected disabled hidden required>Lütfen Şehir-Olanak Seçiniz`;
        selectListCity.onchange = function(evt) {
            var value = evt.target.value;
            ListManager.createCitySelectList(myCityOpportunity, value);
        };
        myCityOpportunity.appendChild(selectListCity);
        let city = [];
        for(let i = 0; i < _dataStorage.DataStorage.cities.length; i++)city.push(_dataStorage.DataStorage.cities[i].CityName);
        city = city.filter((element, i1)=>i1 === city.indexOf(element)
        );
        for(let i1 = 0; i1 < city.length; i1++){
            let option = document.createElement("option");
            option.value = city[i1];
            option.text = city[i1];
            selectListCity.appendChild(option);
        }
    }
    /**
 * Yeni Kart kaydında şehir seçimine bağlı olarak olanakların checkbox lara koyulduğu kısım 
 */ static createCitySelectList(myCitySelectBox, citiesName) {
        const checkBoxList = document.getElementById("checkBoxList");
        checkBoxList.innerHTML = "";
        const myCityOpportunitySelect = document.getElementById("myCityOpportunitySelect");
        var selectedCitiesName = myCityOpportunitySelect.options[myCityOpportunitySelect.selectedIndex].value;
        const citiesList = _dataStorage.DataStorage.cities.filter((item)=>item.CityName == citiesName
        );
        for(let i = 0; i < citiesList.length; i++){
            let selectListCity = document.createElement("input");
            selectListCity.type = "checkbox";
            selectListCity.id = "inputSelectOpportunity" + i.toString();
            selectListCity.name = "selectOpportunity";
            selectListCity.value = citiesList[i].OpportunityName.toString();
            var label = document.createElement('label');
            label.htmlFor = "inputSelectOpportunity" + i.toString();
            label.appendChild(document.createTextNode(citiesList[i].OpportunityName));
            checkBoxList.appendChild(selectListCity);
            checkBoxList.appendChild(label);
        }
    }
    /**
 * Şehir Selectiın List için Ekleme, Düzenleme ve silmelere işlemelerine bağlı değişikliklerin güncellendiği kısım
 */ static updateCityOpportunitySelectionList() {
        let myCityOpportunitySelectBox = document.getElementById("cityOpportunityField");
        myCityOpportunitySelectBox.innerHTML = '';
        ListManager.createCityOpportunitySelectList(myCityOpportunitySelectBox);
    }
    /**
   *  olanak checkboxları için Ekleme, Düzenleme ve silmelere işlemelerine bağlı değişikliklerin güncellendiği kısım
   */ static updateCitySelectionList() {
        let myCityOpportunitySelectBox = document.getElementById("checkBoxList");
        myCityOpportunitySelectBox.innerHTML = '';
        ListManager.createCitySelectList(myCityOpportunitySelectBox);
    }
    /**
 * Kayıtlı kullanıcılar için listeleme ve tablo oluşturan kısım
 */ static createUserList(userList) {
        let userTable = document.getElementById("userTableId");
        userTable.innerHTML = "";
        let table = document.createElement("table");
        let t1body = document.createElement("tbody");
        table.id = "userTableReferedId";
        table.innerHTML = `<thead>\n                              <tr>\n                              <th>İsim</th>\n                              <th>Soyisim</th>\n                              <th>Doğum Tarihi (YYYY-MM-DD)</th>\n                              <th>Kimlik Numarası</th>\n                              <th>Yaşa Göre Tip</th>\n                              <th>Eğitime Göre Tip</th>\n                              <th>Sil</th>\n                              <th>Düzenle</th>\n                              </tr>\n				    			    </thead>`;
        userTable.appendChild(table);
        for(let i = 0; i < userList.length; i++){
            let row = document.createElement("tr");
            let cell = document.createElement("td");
            let cellText = document.createTextNode(userList[i].ApplicantName);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(userList[i].ApplicantSurname);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(userList[i].ApplicantBirthDate);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(userList[i].ApplicantID);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(userList[i].ApplicantTypeBasedOnAge);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(userList[i].ApplicantTypeBasedOnEducation);
            cell.appendChild(cellText);
            row.appendChild(cell);
            let cellButtonDelete = document.createElement("button");
            cell = document.createElement("td");
            cellButtonDelete.innerHTML = "Sil";
            cellButtonDelete.addEventListener("click", function() {
                let confirmDelete = confirm("Kullanıcıyı silmek istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
                if (confirmDelete) {
                    _applicantControllerAPI.ApplicantControllerAPI.deleteApplicantViaAPI(userList[i].ApplicantID);
                    //DataStorage.applicants = DataStorage.applicants.filter (applicant => 
                    //(applicant.ApplicantName+applicant.ApplicantID) != (userList[i].ApplicantName+userList[i].ApplicantID));
                    ListManager.refreshUserTable();
                    ListManager.updateUserSelectionList();
                }
                return;
            });
            cell.appendChild(cellButtonDelete);
            row.appendChild(cell);
            cell = document.createElement("td");
            let cellEditButton = document.createElement("button");
            // cellEditButton.setAttribute("href", "mainPage");
            cellEditButton.innerHTML = "Düzenle";
            cellEditButton.addEventListener("click", function() {
                window.location.href = '#applicantPage';
                _tableManager.TableManager.editUserTable(userList, i);
                return;
            });
            cell.appendChild(cellEditButton);
            row.appendChild(cell);
            t1body.appendChild(row);
        }
        table.appendChild(t1body);
        userTable.appendChild(table);
    }
    /**
   * Kullanıcı listesinin Ekleme, Düzenleme ve silme işlemelerine bağlı değişiklikler ile güncellendiği kısım
   */ static refreshUserTable() {
        let element = document.getElementById("userTableReferedId");
        element.innerHTML = "";
        element.parentNode.removeChild(element);
        ListManager.createUserList(_dataStorage.DataStorage.applicants);
    }
    /**
   * Kayıtlı şehir olanaklar için listeleme ve tablo oluşturan kısım
   */ static createCityOpportunityList(cityOpportunityList) {
        let cityOpportunityTable = document.getElementById("cityOpportunityTableId");
        cityOpportunityTable.innerHTML = '';
        let table = document.createElement("table");
        let t1body = document.createElement("tbody");
        table.id = "cityOpportunityTableReferedId";
        table.innerHTML = `<thead>\n                              <tr>\n                              <th>Şehir İsmi</th>\n                              <th>Olanak İsmi</th>\n                              <th>1 Yıl için Ücreti</th>\n                              <th>Tanımlanabileceği Max. Yıl</th>\n                              <th>Sil</th>\n                              <th>Düzenle</th>\n                              </tr>\n				    			    </thead>`;
        cityOpportunityTable.appendChild(table);
        for(let i = 0; i < cityOpportunityList.length; i++){
            let row = document.createElement("tr");
            let cell = document.createElement("td");
            let cellText = document.createTextNode(cityOpportunityList[i].CityName);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(cityOpportunityList[i].OpportunityName);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(cityOpportunityList[i].PerYearPrice);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(cityOpportunityList[i].TopLimitYearValue);
            cell.appendChild(cellText);
            row.appendChild(cell);
            let cellButtonDelete = document.createElement("button");
            cell = document.createElement("td");
            cellButtonDelete.innerHTML = "Sil";
            cellButtonDelete.addEventListener("click", function() {
                let confirmDelete = confirm("Şehir - Olanak bilgisini silmek istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
                if (confirmDelete) {
                    _cityControllerAPI.CityControllerAPI.deleteCityViaAPI(cityOpportunityList[i].CityOpportunityId);
                    //DataStorage.cities = DataStorage.cities.filter (cityOpportunity => 
                    //(cityOpportunity.CityName+cityOpportunity.OpportunityName) != (cityOpportunityList[i].CityName+cityOpportunityList[i].OpportunityName));
                    ListManager.refreshCityOpportunityTable();
                    ListManager.updateCityOpportunitySelectionList();
                    ListManager.updateCitySelectionList();
                }
                return;
            });
            cell.appendChild(cellButtonDelete);
            row.appendChild(cell);
            cell = document.createElement("td");
            let cellEditButton = document.createElement("button");
            cellEditButton.innerHTML = "Düzenle";
            cellEditButton.addEventListener("click", function() {
                window.location.href = '#cityPage';
                _tableManager.TableManager.editCityTable(cityOpportunityList, i);
                return;
            });
            cell.appendChild(cellEditButton);
            row.appendChild(cell);
            t1body.appendChild(row);
        }
        table.appendChild(t1body);
        cityOpportunityTable.appendChild(table);
    }
    /**
   *  Şehir-Olanak listesinin Ekleme, Düzenleme ve silme işlemelerine bağlı değişiklikler ile güncellendiği kısım
   */ static refreshCityOpportunityTable() {
        let element = document.getElementById("cityOpportunityTableReferedId");
        element.innerHTML = "";
        element.parentNode.removeChild(element);
        ListManager.createCityOpportunityList(_dataStorage.DataStorage.cities);
    }
    /**
   *Kayıtlı kartlar için listeleme ve tablo oluşturan kısım
   */ static createCardList(cardList) {
        let cardTable = document.getElementById("cardTableId");
        cardTable.innerHTML = "";
        let table = document.createElement("table");
        let t1body = document.createElement("tbody");
        table.id = "cardTableReferedId";
        table.innerHTML = `<thead>\n                              <tr>\n                              <th>Kart ID</th>\n                              <th>Kart Son Kullanma Tarihi</th>\n                              <th>Kullancı</th>\n                              <th>Şehir</th>\n                              <th>Olanak</th>\n                              <th>Sil</th>\n                              <th>Düzenle</th>\n                              </trcardListcardListcardList>\n				    			    </thead>`;
        cardTable.appendChild(table);
        for(let i = 0; i < cardList.length; i++){
            let row = document.createElement("tr");
            let cell = document.createElement("td");
            let cellText = document.createTextNode(cardList[i]._identity);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(cardList[i]._expiryDate);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(cardList[i].applicant);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell = document.createElement("td");
            cellText = document.createTextNode(cardList[i].city);
            cell.appendChild(cellText);
            row.appendChild(cell);
            //}
            cell = document.createElement("td");
            cellText = document.createTextNode(cardList[i].opportunity);
            cell.appendChild(cellText);
            row.appendChild(cell);
            row.appendChild(cell);
            let cellButtonDelete = document.createElement("button");
            cell = document.createElement("td");
            cellButtonDelete.innerHTML = "Sil";
            cellButtonDelete.addEventListener("click", function() {
                let confirmDelete = confirm("Kart bilgisini silmek istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
                if (confirmDelete) {
                    _cardControllerAPI.CardControllerAPI.deleteCardViaAPI(cardList[i]._identity);
                    //DataStorage.cards = DataStorage.cards.filter (card => (card._identity) != (cardList[i]._identity));
                    ListManager.refreshCardTable();
                }
                return;
            });
            cell.appendChild(cellButtonDelete);
            row.appendChild(cell);
            cell = document.createElement("td");
            let cellEditButton = document.createElement("button");
            cellEditButton.innerHTML = "Düzenle";
            cellEditButton.addEventListener("click", function() {
                window.location.href = '#cardPage';
                _tableManager.TableManager.editCardTable(cardList, i);
                return;
            });
            cell.appendChild(cellEditButton);
            row.appendChild(cell);
            t1body.appendChild(row);
        }
        table.appendChild(t1body);
        cardTable.appendChild(table);
    }
    static refreshCardTable() {
        let element = document.getElementById("cardTableReferedId");
        element.innerHTML = '';
        element.parentNode.removeChild(element);
        ListManager.createCardList(_dataStorage.DataStorage.cards);
    }
    /**
   * Son kullanıcının kaldırıldığı kısım
   */ static removeLast() {
        // DataStorage.applicants.pop();
        _dataStorage.DataStorage.applicants.splice(-1, 1);
    }
}

},{"../../DataStorage":"91qPx","../API/ApplicantControllerAPI":"dX5yk","../API/CardControllerAPI":"gAs5o","../API/CityControllerAPI":"dnf12","./TableManager":"kmwZ0","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"dX5yk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApplicantControllerAPI", ()=>ApplicantControllerAPI
);
var _dataStorage = require("../../DataStorage");
var _iapplicant = require("../interface/IApplicant");
class ApplicantControllerAPI {
    /**
 * 
 * @param IApplicant 	*	Verilen parametre objesini HTTP POST metodu ile gönderen metod
 */ static createApplicantViaAPI(IApplicant) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("POST", 'http://localhost:8080/applicants/', false);
        xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlRequest.send(IApplicant);
        window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400) console.log('error');
        _dataStorage.DataStorage.createApplicantlist();
    }
    /**
	*	Verilen IApplicant objesini HTTP PUT metodu ile düzenleyen sınıf, 
	*/ static editApplicantViaAPI(IApplicant, applicantID) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("PUT", 'http://localhost:8080/applicants/' + applicantID);
        xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlRequest.send(IApplicant);
        window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400) console.log('error');
        _dataStorage.DataStorage.createApplicantlist();
    }
    /**
	* Verilen applicantID ile uygun IApplicant nesnesini silmek için HTTP DELETE metodunu çalıştırır.
	*/ static deleteApplicantViaAPI(applicantID) {
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'http://localhost:8080/applicants/' + applicantID);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send();
        window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400) console.log('error');
        _dataStorage.DataStorage.createApplicantlist();
    }
}

},{"../../DataStorage":"91qPx","../interface/IApplicant":"1lm3A","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"1lm3A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"gAs5o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CardControllerAPI", ()=>CardControllerAPI
);
var _dataStorage = require("../../DataStorage");
class CardControllerAPI {
    /**
 * 
 * @param Icard nesnesini HTTP POST metodu ile gönderen metod
 */ static createCardViaAPI(ICard) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("POST", 'http://localhost:8080/cards/', false);
        xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlRequest.send(ICard);
        window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400) console.log('error');
        _dataStorage.DataStorage.createCardList();
    }
    /**
*	Verilen ICard objesini HTTP PUT metodu ile düzenleyen sınıf, 
*/ static editCardViaAPI(ICard, identity) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("PUT", 'http://localhost:1234/cards/' + identity);
        xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlRequest.send(ICard);
        window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400) console.log('error');
        _dataStorage.DataStorage.createCardList();
    }
    /**
* Verilen identity ile uygun ICard nesnesini silmek için HTTP DELETE metodunu çalıştırır.
*/ static deleteCardViaAPI(identity) {
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'http://localhost:1234/cities/' + identity);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send();
        window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400) console.log('error');
        _dataStorage.DataStorage.createCardList();
    }
}

},{"../../DataStorage":"91qPx","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"dnf12":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CityControllerAPI", ()=>CityControllerAPI
);
var _dataStorage = require("../../DataStorage");
class CityControllerAPI {
    /**
 * 
 * @param ICity nesnesini HTTP POST metodu ile gönderen metod
 */ static createCityViaAPI(ICity) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("POST", 'http://localhost:8080/cities/', false);
        xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlRequest.send(ICity);
        window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400) console.log('error');
        _dataStorage.DataStorage.createCityList();
    }
    /**
	*	Verilen ICity objesini HTTP PUT metodu ile düzenleyen sınıf, 
	*/ static editCityViaAPI(ICity, CityOpportunityId) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("PUT", 'http://localhost:8080/cities/' + CityOpportunityId);
        xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlRequest.send(ICity);
        window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400) console.log('error');
        _dataStorage.DataStorage.createCityList();
    }
    /**
	* Verilen CityOpportunityId ile uygun ICity nesnesini silmek için HTTP DELETE metodunu çalıştırır.
	*/ static deleteCityViaAPI(CityOpportunityId) {
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'http://localhost:8080/cities/' + CityOpportunityId);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send();
        window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400) console.log('error');
        _dataStorage.DataStorage.createCityList();
    }
}

},{"../../DataStorage":"91qPx","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"kmwZ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TableManager", ()=>TableManager
);
var _dataStorage = require("../../DataStorage");
var _applicantControllerAPI = require("../API/ApplicantControllerAPI");
var _cardControllerAPI = require("../API/CardControllerAPI");
var _cityControllerAPI = require("../API/CityControllerAPI");
var _listManager = require("./ListManager");
class TableManager {
    static editUserTable(userList, i) {
        let applicantNameEdit = document.getElementById("applicantNameAttach");
        applicantNameEdit.defaultValue = _dataStorage.DataStorage.applicants[i].ApplicantName.toString();
        let applicantSurnameEdit = document.getElementById("applicantSurnameAttach");
        applicantSurnameEdit.defaultValue = _dataStorage.DataStorage.applicants[i].ApplicantSurname.toString();
        let applicantIdEdit = document.getElementById("applicantIDAttach");
        applicantIdEdit.defaultValue = _dataStorage.DataStorage.applicants[i].ApplicantID.toString();
        document.getElementById('applicantBirthDateAttach').value = _dataStorage.DataStorage.applicants[i].ApplicantBirthDate.substring(0, 10);
        if (_dataStorage.DataStorage.applicants[i].ApplicantTypeBasedOnAge == "Çocuk") document.getElementById("citizenTypeSelection").value = '0';
        else if (_dataStorage.DataStorage.applicants[i].ApplicantTypeBasedOnAge == "Normal") document.getElementById("citizenTypeSelection").value = '1';
        else if (_dataStorage.DataStorage.applicants[i].ApplicantTypeBasedOnAge == "Yaşlı") document.getElementById("citizenTypeSelection").value = '2';
        if (_dataStorage.DataStorage.applicants[i].ApplicantTypeBasedOnEducation == "Öğrenci") document.getElementById("applicatTypeSelection").value = '0';
        else if (_dataStorage.DataStorage.applicants[i].ApplicantTypeBasedOnEducation == "Sivil") document.getElementById("applicatTypeSelection").value = '1';
        else document.getElementById("applicatTypeSelection").value = '2';
        _applicantControllerAPI.ApplicantControllerAPI.editApplicantViaAPI(userList[i], userList[i].applicantID);
        // DataStorage.applicants = DataStorage.applicants.filter (applicant => applicant.ApplicantName != userList[i].ApplicantName);
        _listManager.ListManager.refreshUserTable();
    }
    static editCityTable(cityList, i) {
        let cityNameEdit = document.getElementById("cityNameAttach");
        cityNameEdit.defaultValue = _dataStorage.DataStorage.cities[i].CityName.toString();
        let opportunityNameEdit = document.getElementById("opportunityNameAttach");
        opportunityNameEdit.defaultValue = _dataStorage.DataStorage.cities[i].OpportunityName.toString();
        let perYearPriceEdit = document.getElementById("perYearPriceAttatch");
        perYearPriceEdit.value = _dataStorage.DataStorage.cities[i].PerYearPrice.toString();
        let topLimitYearValueEdit = document.getElementById("topLimitYearValueAttach");
        topLimitYearValueEdit.defaultValue = _dataStorage.DataStorage.cities[i].TopLimitYearValue.toString();
        _cityControllerAPI.CityControllerAPI.editCityViaAPI(cityList[i], cityList[i].CityOpportunityId);
        //DataStorage.cities = DataStorage.cities.filter (cityOpportunity => (cityOpportunity.CityName+cityOpportunity.OpportunityName) != (cityList[i].CityName+cityList[i].OpportunityName));
        _listManager.ListManager.refreshCityOpportunityTable();
    }
    static editCardTable(cardList, i) {
        let id = cardList[i].applicant.toString();
        let myApplicantId = id.slice(id.length - 11);
        document.getElementById("myUserSelect").value = myApplicantId;
        document.getElementById("myCityOpportunitySelect").value = cardList[i].city[0];
        let cardPriceValueEdit = document.getElementById("cardPriceAttach");
        cardPriceValueEdit.defaultValue = cardList[i]._price.toString();
        _cardControllerAPI.CardControllerAPI.editCardViaAPI(cardList[i], cardList[i].identity);
        //DataStorage.cards = DataStorage.cards.filter (card => (card.CardIdentitty) != (cardList[i].CardIdentitty));
        _listManager.ListManager.refreshCardTable();
    }
    static resetUserPage() {
        let applicantNameEdit = document.getElementById("applicantNameAttach");
        applicantNameEdit.defaultValue = "";
        let applicantSurnameEdit = document.getElementById("applicantSurnameAttach");
        applicantSurnameEdit.defaultValue = "";
        let applicantSBirthDateEdit = document.getElementById("applicantBirthDateAttach");
        applicantSBirthDateEdit.value = "";
        let applicantIdEdit = document.getElementById("applicantIDAttach");
        applicantIdEdit.defaultValue = "";
        document.getElementById('userForm').reset();
    }
    static resetCityPage() {
        let cityNameEdit = document.getElementById("cityNameAttach");
        cityNameEdit.defaultValue = "";
        let opportunityNameEdit = document.getElementById("opportunityNameAttach");
        opportunityNameEdit.defaultValue = "";
        let perYearPriceEdit = document.getElementById("perYearPriceAttatch");
        perYearPriceEdit.value = "";
        let topLimitYearValueEdit = document.getElementById("topLimitYearValueAttach");
        topLimitYearValueEdit.defaultValue = "";
        document.getElementById('cityForm').reset();
    }
    static resetCardPage() {
        let cardPriceEdit = document.getElementById("cardPriceAttach");
        cardPriceEdit.defaultValue = '';
        let userSelectionEdit = document.getElementById("myUserSelect");
        userSelectionEdit.value = "0";
        let citySelectionEdit = document.getElementById("myCityOpportunitySelect");
        citySelectionEdit.value = "0";
        document.getElementById('cardForm').reset();
    }
}

},{"../../DataStorage":"91qPx","../API/ApplicantControllerAPI":"dX5yk","../API/CardControllerAPI":"gAs5o","../API/CityControllerAPI":"dnf12","./ListManager":"a9xEb","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"2CwYE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Verifications", ()=>Verifications
);
var _dataStorage = require("./DataStorage");
class Verifications {
    static checkText(text) {
    }
    static checkID(idNumber, cardId) {
        let helper = 0;
        for(let i = 0; i < _dataStorage.DataStorage.applicants.length; i++)if (idNumber.value == _dataStorage.DataStorage.applicants[i].ApplicantID) {
            let confirmDelete = confirm("Girelen Id'ye (" + idNumber.value + ") sahip kayıtlı bir kullanıcı var.\n Üzerine yazmak istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
            if (confirmDelete) {
                let b = _dataStorage.DataStorage.applicants.filter(function(e) {
                    return e.value === idNumber.value;
                });
                _dataStorage.DataStorage.applicants.splice(_dataStorage.DataStorage.applicants.findIndex((e)=>e.value === idNumber.value
                ), 1);
                return true;
            } else {
                helper = 1;
                return false;
            }
        }
        if (helper == 0) return true;
        else return false;
    }
    static validateID(tcNumber) {
        let myId = tcNumber;
        tcNumber = tcNumber.value.toString();
        // T.C. identity number 11 haneli olmalı
        if (myId.value.length != 11) {
            alert("Kimlik numrasını " + myId.value.length + " hane girdiniz. \n Lütfen kimlik numaranızı 11 hane giriniz");
            return false;
        }
        const digits = tcNumber.split('');
        // son 2 hane (10. and 11.) validasyon için tutulur
        const d10 = Number(digits[9]);
        const d11 = Number(digits[10]);
        // ilk 10 hane toplanır/ tek haneler toplanır / çift haneler toplanır
        let sumOf10 = 0;
        let evens = 0;
        let odds = 0;
        digits.forEach((digitNumber, index)=>{
            digitNumber = Number(digitNumber);
            if (index < 10) sumOf10 += digitNumber;
            if (index < 9) {
                if ((index + 1) % 2 === 0) evens += digitNumber;
                else odds += digitNumber;
            }
        });
        // ilk 10 hane toplamının mod 10 nu 11. haneyi vermelidir.
        if (sumOf10 % 10 != d11) {
            alert("Girilen kimlik numarası hatalıdır! \n Lütfen tekrar giriniz");
            return false;
        }
        // tek haneler tplamının 7 katından çift haneler çıkarılınca elde edilen değerin mod 10 nu 10. haneyi vermelidir
        if ((odds * 7 - evens) % 10 != d10) {
            alert("Girilen kimlik numarası hatalıdır! \n Lütfen tekrar giriniz");
            return false;
        }
        return true;
    }
    static checkDate(inputDate) {
        let today = new Date().toLocaleDateString();
        var todayDate = Date.parse(today);
        var enteredDate = Date.parse(inputDate);
        if (todayDate < enteredDate) alert("Error!");
    }
    static checkCityOpportunity(city, opportunity) {
        let helper = 0;
        let cityLast = city.value.toUpperCase();
        let opportunityLast = opportunity.value.toUpperCase();
        for(let i = 0; i < _dataStorage.DataStorage.cities.length; i++)if (cityLast == _dataStorage.DataStorage.cities[i].CityName) {
            let confirmDelete = confirm("Girelen  (" + cityLast + "  ve " + opportunityLast + ") için mevcut bir kayıt var.\n Üzerine yazmak istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
            if (confirmDelete) {
                _dataStorage.DataStorage.cities = _dataStorage.DataStorage.cities.filter((cityOpportunity)=>cityOpportunity.CityName + cityOpportunity.OpportunityName != _dataStorage.DataStorage.cities[i].CityName + _dataStorage.DataStorage.cities[i].OpportunityName
                );
                return true;
            } else {
                helper = 1;
                return false;
            }
        }
        if (helper == 0) return true;
        else return false;
    }
    static checkCardExistence(myApplicant, mycity, cardList, idNumber) {
        let controller = 0;
        for(let i = 0; i < cardList.length; i++){
            let id = cardList[i].applicant.toString();
            let myApplicantId = id.slice(id.length - 11);
            if (myApplicant.toString() == myApplicantId) {
                if (mycity == cardList[i].city.toString()) {
                    let confirmDelete = confirm("Seçilen " + myApplicant + " kullanıcısı için " + mycity + " şehri  adına daha önce kart oluşturulmuştur.\n Üzerine yazmak istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
                    if (confirmDelete) {
                        var ele_rem1 = cardList.splice(i, 1);
                        return true;
                    } else {
                        controller = 1;
                        return false;
                    }
                }
            }
        }
        if (controller == 0) return true;
        else return false;
    }
}

},{"./DataStorage":"91qPx","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"5isDM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Şehir olanak bilgilerininin alınıp yeni şehir nesnelerinin oluşturulduğu sınıf
 */ parcelHelpers.export(exports, "CityManager", ()=>CityManager
);
var _city = require("../../City");
var _dataStorage = require("../../DataStorage");
var _listManager = require("./ListManager");
var _verifications = require("../../Verifications");
var _cityControllerAPI = require("../API/CityControllerAPI");
class CityManager {
    static createCityObject() {
        let cityName = document.getElementById("cityNameAttach");
        let opportunityName = document.getElementById("opportunityNameAttach");
        let perYearPrice = document.getElementById("perYearPriceAttatch");
        let topLimitYearValue = document.getElementById("topLimitYearValueAttach");
        let CityOpportunityId = Math.floor(Math.random() * 10000);
        if (_verifications.Verifications.checkCityOpportunity(cityName, opportunityName)) {
            let newCityAndOpportunity = new _city.City(cityName.value.toUpperCase(), opportunityName.value.toUpperCase(), Number(perYearPrice.value), Number(topLimitYearValue.value), Number(CityOpportunityId));
            _cityControllerAPI.CityControllerAPI.createCityViaAPI(newCityAndOpportunity);
            //DataStorage.cities.push(newCityAndOpportunity);
            _listManager.ListManager.updateCityOpportunitySelectionList();
            _listManager.ListManager.updateCitySelectionList();
            alert("Şehir-Olanak başarılı bir şekilde listeye eklendi.");
        }
    }
    static getCityOpportunityNameWithId(id) {
        let result = "";
        _dataStorage.DataStorage.cities.forEach((city)=>{
            if (city.CityOpportunityId === id) result = city.CityName + city.OpportunityName;
        });
        return result;
    }
}

},{"../../City":"1grgF","../../DataStorage":"91qPx","./ListManager":"a9xEb","../../Verifications":"2CwYE","../API/CityControllerAPI":"dnf12","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"1grgF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Programdaki şehir isimlerinin tutulduğu sınıf
 */ parcelHelpers.export(exports, "City", ()=>City
);
class City {
    constructor(cityName1, opportunityName, perYearPrice1, topLimitYearValue1, CityOpportunityId1){
        this._cityName = cityName1;
        this._opportunityName = opportunityName;
        this._perYearPrice = perYearPrice1;
        this._topLimitYearValue = topLimitYearValue1;
        this.CityOpportunityId = CityOpportunityId1;
    }
    get CityName() {
        return this._cityName;
    }
    set CityName(cityName) {
        this._cityName = cityName;
    }
    get OpportunityName() {
        return this._opportunityName;
    }
    set OpportunityName(name) {
        this._opportunityName = name;
    }
    get PerYearPrice() {
        return this._perYearPrice;
    }
    set PerYearPrice(perYearPrice) {
        this._perYearPrice = perYearPrice;
    }
    get TopLimitYearValue() {
        return this._topLimitYearValue;
    }
    set TopLimitYearValue(topLimitYearValue) {
        this._topLimitYearValue = topLimitYearValue;
    }
    get CityOpportunityId() {
        return this._CityOpportunityId;
    }
    set CityOpportunityId(CityOpportunityId) {
        this._CityOpportunityId = CityOpportunityId;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"dTv9V":[function() {},{}],"f7E1M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Kart bilgilerinin derlenip yeni kart nesnelerinin oluşturulduğu sınıf
 */ parcelHelpers.export(exports, "CardManager", ()=>CardManager
);
var _card = require("../../Card");
var _dataStorage = require("../../DataStorage");
var _verifications = require("../../Verifications");
var _cardControllerAPI = require("../API/CardControllerAPI");
class CardManager {
    static createCardObject() {
        let cardIdendity = Math.floor(Math.random() * 100000000);
        let cardPrice = document.getElementById("cardPriceAttach");
        let todayDate = new Date();
        let year = todayDate.getFullYear();
        let month = todayDate.getMonth();
        let day = todayDate.getDate();
        let addedExpiryDateYear = 4;
        let expiryDateValue = new Date(year + addedExpiryDateYear, month, day);
        let expiryDate = expiryDateValue.toDateString();
        const userSelector = document.getElementById("myUserSelect");
        let selectedUserID = userSelector.options[userSelector.selectedIndex].value;
        const resultUser = _dataStorage.DataStorage.applicants.filter((item)=>item.ApplicantID == selectedUserID
        );
        const citySelector = document.getElementById("myCityOpportunitySelect");
        let selectedCityName = citySelector.options[citySelector.selectedIndex].value;
        let resultCity = _dataStorage.DataStorage.cities.filter((item)=>item.CityName == selectedCityName
        );
        let checkedUser = [];
        for(let i = 0; i < resultUser.length; i++){
            checkedUser.push(resultUser[i].ApplicantName.toUpperCase() + " " + resultUser[i].ApplicantSurname.toUpperCase() + " " + resultUser[i].ApplicantID);
            var myApplicant = resultUser[i].ApplicantID;
            var typeCitizen = resultUser[i].ApplicantTypeBasedOnAge;
            var typeApplicant = resultUser[i].ApplicantTypeBasedOnEducation;
        }
        let checkedCity = [];
        for(let i1 = 0; i1 < resultCity.length; i1++)checkedCity.push(resultCity[i1].CityName.toUpperCase());
        const opportunitySelector = document.getElementById("checkBoxList");
        let element = document.getElementById("checkBoxList");
        element.checked;
        var inputElems = document.getElementsByTagName("input");
        let checkedOpportunity = [];
        for(var i2 = 0; i2 < inputElems.length; i2++)if (inputElems[i2].type == "checkbox" && inputElems[i2].checked == true) checkedOpportunity.push(inputElems[i2].value);
        let result = 0;
        for(let i3 = 0; i3 < _dataStorage.DataStorage.cities.length; i3++)if (checkedCity[0] == _dataStorage.DataStorage.cities[i3].CityName) {
            for(let j = 0; j < checkedOpportunity.length; j++)if (checkedOpportunity[j] == _dataStorage.DataStorage.cities[i3].OpportunityName) result = result + _dataStorage.DataStorage.cities[i3].PerYearPrice * _dataStorage.DataStorage.cities[i3].TopLimitYearValue;
        }
        if (typeCitizen == "Çocuk" || typeCitizen == "Yaşlı") var finalPrice = 0;
        else if (typeApplicant == "Öğrenci") finalPrice = result + Number(cardPrice.value) - (result + Number(cardPrice.value)) / 5;
        if (_verifications.Verifications.checkCardExistence(myApplicant, checkedCity, _dataStorage.DataStorage.cards, cardIdendity)) {
            let newCard = new _card.Card(Number(cardIdendity), Number(cardPrice.value), expiryDate, checkedUser, checkedCity, checkedOpportunity);
            _cardControllerAPI.CardControllerAPI.createCardViaAPI(newCard);
            // DataStorage.cards.push(newCard);
            alert("Normal \xfccret ; \n Kart \xdccreti :" + Number(cardPrice.value) + "  Toplam Olanak Fiyatı :" + result + "\n Ödenecek tutar : " + finalPrice);
        }
    }
    static getCardWithId(id) {
        let result = "";
        _dataStorage.DataStorage.cards.forEach((card)=>{
            if (card.CardIdentitty === id) result = card.User + card.City + card.Opportunity;
        });
        return result;
    }
}

},{"../../Card":"jBgOb","../../DataStorage":"91qPx","../../Verifications":"2CwYE","../API/CardControllerAPI":"gAs5o","@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}],"jBgOb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Programda tanımlı kartların ID, fiyat, son kullanım tarihi, kullanıcının ve şehir-olanağın tanımlandığı sınıf
 */ parcelHelpers.export(exports, "Card", ()=>Card
);
class Card {
    constructor(identity1, price1, expiryDate1, applicant, city, opportunity){
        this._identity = identity1;
        this._price = price1;
        this._expiryDate = expiryDate1;
        this.applicant = applicant;
        this.city = city;
        this.opportunity = opportunity;
    }
    get Identity() {
        return this._identity;
    }
    set Identitty(identity) {
        this._identity = identity;
    }
    get Price() {
        return this._price;
    }
    set Price(price) {
        this._price = price;
    }
    get ExpiryDate() {
        return this._expiryDate;
    }
    set ExpiryDate(expiryDate) {
        this._expiryDate = expiryDate;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jzpuJ"}]},["dkjHR","davKm"], "davKm", "parcelRequire477f")

//# sourceMappingURL=index.6a345035.js.map
