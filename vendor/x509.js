var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  1 ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../../root/.cache/deno/npm/registry.npmjs.org/tslib/2.8.1/tslib.js
var require_tslib = __commonJS({
  "../../../root/.cache/deno/npm/registry.npmjs.org/tslib/2.8.1/tslib.js"(exports, module) {
    var __extends3;
    var __assign3;
    var __rest3;
    var __decorate3;
    var __param3;
    var __esDecorate2;
    var __runInitializers2;
    var __propKey2;
    var __setFunctionName2;
    var __metadata3;
    var __awaiter3;
    var __generator3;
    var __exportStar3;
    var __values3;
    var __read3;
    var __spread3;
    var __spreadArrays3;
    var __spreadArray2;
    var __await3;
    var __asyncGenerator3;
    var __asyncDelegator3;
    var __asyncValues3;
    var __makeTemplateObject3;
    var __importStar3;
    var __importDefault3;
    var __classPrivateFieldGet3;
    var __classPrivateFieldSet3;
    var __classPrivateFieldIn2;
    var __createBinding3;
    var __addDisposableResource2;
    var __disposeResources2;
    var __rewriteRelativeImportExtension2;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", [
          "exports"
        ], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
      __name(createExporter, "createExporter");
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };
      __extends3 = /* @__PURE__ */ __name(function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }, "__extends");
      __assign3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      __rest3 = /* @__PURE__ */ __name(function(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }, "__rest");
      __decorate3 = /* @__PURE__ */ __name(function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }, "__decorate");
      __param3 = /* @__PURE__ */ __name(function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      }, "__param");
      __esDecorate2 = /* @__PURE__ */ __name(function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) {
          if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
          return f;
        }
        __name(accept, "accept");
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
          var context = {};
          for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
          for (var p in contextIn.access) context.access[p] = contextIn.access[p];
          context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
          };
          var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
          } : descriptor[key], context);
          if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
          } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
          }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
      }, "__esDecorate");
      __runInitializers2 = /* @__PURE__ */ __name(function(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
          value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
      }, "__runInitializers");
      __propKey2 = /* @__PURE__ */ __name(function(x) {
        return typeof x === "symbol" ? x : "".concat(x);
      }, "__propKey");
      __setFunctionName2 = /* @__PURE__ */ __name(function(f, name, prefix) {
        if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", {
          configurable: true,
          value: prefix ? "".concat(prefix, " ", name) : name
        });
      }, "__setFunctionName");
      __metadata3 = /* @__PURE__ */ __name(function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }, "__metadata");
      __awaiter3 = /* @__PURE__ */ __name(function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }, "__awaiter");
      __generator3 = /* @__PURE__ */ __name(function(thisArg, body) {
        var _ = {
          label: 0,
          sent: /* @__PURE__ */ __name(function() {
            if (t[0] & 1) throw t[1];
            return t[1];
          }, "sent"),
          trys: [],
          ops: []
        }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
        return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        __name(verb, "verb");
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
              op[0] & 2,
              t.value
            ];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [
                  0
                ];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [
              6,
              e
            ];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
        __name(step, "step");
      }, "__generator");
      __exportStar3 = /* @__PURE__ */ __name(function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding3(o, m, p);
      }, "__exportStar");
      __createBinding3 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: /* @__PURE__ */ __name(function() {
              return m[k];
            }, "get")
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      };
      __values3 = /* @__PURE__ */ __name(function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: /* @__PURE__ */ __name(function() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }, "next")
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, "__values");
      __read3 = /* @__PURE__ */ __name(function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
          e = {
            error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      }, "__read");
      __spread3 = /* @__PURE__ */ __name(function() {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read3(arguments[i]));
        return ar;
      }, "__spread");
      __spreadArrays3 = /* @__PURE__ */ __name(function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
        return r;
      }, "__spreadArrays");
      __spreadArray2 = /* @__PURE__ */ __name(function(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      }, "__spreadArray");
      __await3 = /* @__PURE__ */ __name(function(v) {
        return this instanceof __await3 ? (this.v = v, this) : new __await3(v);
      }, "__await");
      __asyncGenerator3 = /* @__PURE__ */ __name(function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function awaitReturn(f) {
          return function(v) {
            return Promise.resolve(v).then(f, reject);
          };
        }
        __name(awaitReturn, "awaitReturn");
        function verb(n, f) {
          if (g[n]) {
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([
                  n,
                  v,
                  a,
                  b
                ]) > 1 || resume(n, v);
              });
            };
            if (f) i[n] = f(i[n]);
          }
        }
        __name(verb, "verb");
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        __name(resume, "resume");
        function step(r) {
          r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        __name(step, "step");
        function fulfill(value) {
          resume("next", value);
        }
        __name(fulfill, "fulfill");
        function reject(value) {
          resume("throw", value);
        }
        __name(reject, "reject");
        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
        __name(settle, "settle");
      }, "__asyncGenerator");
      __asyncDelegator3 = /* @__PURE__ */ __name(function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? {
              value: __await3(o[n](v)),
              done: false
            } : f ? f(v) : v;
          } : f;
        }
        __name(verb, "verb");
      }, "__asyncDelegator");
      __asyncValues3 = /* @__PURE__ */ __name(function(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values3 === "function" ? __values3(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        __name(verb, "verb");
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({
              value: v2,
              done: d
            });
          }, reject);
        }
        __name(settle, "settle");
      }, "__asyncValues");
      __makeTemplateObject3 = /* @__PURE__ */ __name(function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      }, "__makeTemplateObject");
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      };
      var ownKeys = /* @__PURE__ */ __name(function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      }, "ownKeys");
      __importStar3 = /* @__PURE__ */ __name(function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding3(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      }, "__importStar");
      __importDefault3 = /* @__PURE__ */ __name(function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }, "__importDefault");
      __classPrivateFieldGet3 = /* @__PURE__ */ __name(function(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      }, "__classPrivateFieldGet");
      __classPrivateFieldSet3 = /* @__PURE__ */ __name(function(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      }, "__classPrivateFieldSet");
      __classPrivateFieldIn2 = /* @__PURE__ */ __name(function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      }, "__classPrivateFieldIn");
      __addDisposableResource2 = /* @__PURE__ */ __name(function(env, value, async) {
        if (value !== null && value !== void 0) {
          if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
          var dispose, inner;
          if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
          }
          if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
          }
          if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
          if (inner) dispose = /* @__PURE__ */ __name(function() {
            try {
              inner.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          }, "dispose");
          env.stack.push({
            value,
            dispose,
            async
          });
        } else if (async) {
          env.stack.push({
            async: true
          });
        }
        return value;
      }, "__addDisposableResource");
      var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      __disposeResources2 = /* @__PURE__ */ __name(function(env) {
        function fail(e) {
          env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
          env.hasError = true;
        }
        __name(fail, "fail");
        var r, s = 0;
        function next() {
          while (r = env.stack.pop()) {
            try {
              if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
              if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
              } else s |= 1;
            } catch (e) {
              fail(e);
            }
          }
          if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
          if (env.hasError) throw env.error;
        }
        __name(next, "next");
        return next();
      }, "__disposeResources");
      __rewriteRelativeImportExtension2 = /* @__PURE__ */ __name(function(path, preserveJsx) {
        if (typeof path === "string" && /^\.\.?\//.test(path)) {
          return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
          });
        }
        return path;
      }, "__rewriteRelativeImportExtension");
      exporter("__extends", __extends3);
      exporter("__assign", __assign3);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate3);
      exporter("__param", __param3);
      exporter("__esDecorate", __esDecorate2);
      exporter("__runInitializers", __runInitializers2);
      exporter("__propKey", __propKey2);
      exporter("__setFunctionName", __setFunctionName2);
      exporter("__metadata", __metadata3);
      exporter("__awaiter", __awaiter3);
      exporter("__generator", __generator3);
      exporter("__exportStar", __exportStar3);
      exporter("__createBinding", __createBinding3);
      exporter("__values", __values3);
      exporter("__read", __read3);
      exporter("__spread", __spread3);
      exporter("__spreadArrays", __spreadArrays3);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await3);
      exporter("__asyncGenerator", __asyncGenerator3);
      exporter("__asyncDelegator", __asyncDelegator3);
      exporter("__asyncValues", __asyncValues3);
      exporter("__makeTemplateObject", __makeTemplateObject3);
      exporter("__importStar", __importStar3);
      exporter("__importDefault", __importDefault3);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
      exporter("__addDisposableResource", __addDisposableResource2);
      exporter("__disposeResources", __disposeResources2);
      exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension2);
    });
  }
});

// ../../../root/.cache/deno/npm/registry.npmjs.org/tslib/1.14.1/tslib.js
var require_tslib2 = __commonJS({
  "../../../root/.cache/deno/npm/registry.npmjs.org/tslib/1.14.1/tslib.js"(exports, module) {
    var __extends3;
    var __assign3;
    var __rest3;
    var __decorate3;
    var __param3;
    var __metadata3;
    var __awaiter3;
    var __generator3;
    var __exportStar3;
    var __values3;
    var __read3;
    var __spread3;
    var __spreadArrays3;
    var __await3;
    var __asyncGenerator3;
    var __asyncDelegator3;
    var __asyncValues3;
    var __makeTemplateObject3;
    var __importStar3;
    var __importDefault3;
    var __classPrivateFieldGet3;
    var __classPrivateFieldSet3;
    var __createBinding3;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", [
          "exports"
        ], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
      __name(createExporter, "createExporter");
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      __extends3 = /* @__PURE__ */ __name(function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }, "__extends");
      __assign3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      __rest3 = /* @__PURE__ */ __name(function(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }, "__rest");
      __decorate3 = /* @__PURE__ */ __name(function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }, "__decorate");
      __param3 = /* @__PURE__ */ __name(function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      }, "__param");
      __metadata3 = /* @__PURE__ */ __name(function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }, "__metadata");
      __awaiter3 = /* @__PURE__ */ __name(function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }, "__awaiter");
      __generator3 = /* @__PURE__ */ __name(function(thisArg, body) {
        var _ = {
          label: 0,
          sent: /* @__PURE__ */ __name(function() {
            if (t[0] & 1) throw t[1];
            return t[1];
          }, "sent"),
          trys: [],
          ops: []
        }, f, y, t, g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([
              n,
              v
            ]);
          };
        }
        __name(verb, "verb");
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
              op[0] & 2,
              t.value
            ];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [
                  0
                ];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [
              6,
              e
            ];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
        __name(step, "step");
      }, "__generator");
      __createBinding3 = /* @__PURE__ */ __name(function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }, "__createBinding");
      __exportStar3 = /* @__PURE__ */ __name(function(m, exports2) {
        for (var p in m) if (p !== "default" && !exports2.hasOwnProperty(p)) exports2[p] = m[p];
      }, "__exportStar");
      __values3 = /* @__PURE__ */ __name(function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: /* @__PURE__ */ __name(function() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }, "next")
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, "__values");
      __read3 = /* @__PURE__ */ __name(function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
          e = {
            error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      }, "__read");
      __spread3 = /* @__PURE__ */ __name(function() {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read3(arguments[i]));
        return ar;
      }, "__spread");
      __spreadArrays3 = /* @__PURE__ */ __name(function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
        return r;
      }, "__spreadArrays");
      __await3 = /* @__PURE__ */ __name(function(v) {
        return this instanceof __await3 ? (this.v = v, this) : new __await3(v);
      }, "__await");
      __asyncGenerator3 = /* @__PURE__ */ __name(function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([
                n,
                v,
                a,
                b
              ]) > 1 || resume(n, v);
            });
          };
        }
        __name(verb, "verb");
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        __name(resume, "resume");
        function step(r) {
          r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        __name(step, "step");
        function fulfill(value) {
          resume("next", value);
        }
        __name(fulfill, "fulfill");
        function reject(value) {
          resume("throw", value);
        }
        __name(reject, "reject");
        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
        __name(settle, "settle");
      }, "__asyncGenerator");
      __asyncDelegator3 = /* @__PURE__ */ __name(function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? {
              value: __await3(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
        __name(verb, "verb");
      }, "__asyncDelegator");
      __asyncValues3 = /* @__PURE__ */ __name(function(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values3 === "function" ? __values3(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        __name(verb, "verb");
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({
              value: v2,
              done: d
            });
          }, reject);
        }
        __name(settle, "settle");
      }, "__asyncValues");
      __makeTemplateObject3 = /* @__PURE__ */ __name(function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      }, "__makeTemplateObject");
      __importStar3 = /* @__PURE__ */ __name(function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }, "__importStar");
      __importDefault3 = /* @__PURE__ */ __name(function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }, "__importDefault");
      __classPrivateFieldGet3 = /* @__PURE__ */ __name(function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      }, "__classPrivateFieldGet");
      __classPrivateFieldSet3 = /* @__PURE__ */ __name(function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      }, "__classPrivateFieldSet");
      exporter("__extends", __extends3);
      exporter("__assign", __assign3);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate3);
      exporter("__param", __param3);
      exporter("__metadata", __metadata3);
      exporter("__awaiter", __awaiter3);
      exporter("__generator", __generator3);
      exporter("__exportStar", __exportStar3);
      exporter("__createBinding", __createBinding3);
      exporter("__values", __values3);
      exporter("__read", __read3);
      exporter("__spread", __spread3);
      exporter("__spreadArrays", __spreadArrays3);
      exporter("__await", __await3);
      exporter("__asyncGenerator", __asyncGenerator3);
      exporter("__asyncDelegator", __asyncDelegator3);
      exporter("__asyncValues", __asyncValues3);
      exporter("__makeTemplateObject", __makeTemplateObject3);
      exporter("__importStar", __importStar3);
      exporter("__importDefault", __importDefault3);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
    });
  }
});

// ../../../root/.cache/deno/npm/registry.npmjs.org/reflect-metadata/0.2.2/Reflect.js
var Reflect2;
(function(Reflect3) {
  (function(factory) {
    var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
    var exporter = makeExporter(Reflect3);
    if (typeof root.Reflect !== "undefined") {
      exporter = makeExporter(root.Reflect, exporter);
    }
    factory(exporter, root);
    if (typeof root.Reflect === "undefined") {
      root.Reflect = Reflect3;
    }
    function makeExporter(target, previous) {
      return function(key, value) {
        Object.defineProperty(target, key, {
          configurable: true,
          writable: true,
          value
        });
        if (previous) previous(key, value);
      };
    }
    __name(makeExporter, "makeExporter");
    function functionThis() {
      try {
        return Function("return this;")();
      } catch (_) {
      }
    }
    __name(functionThis, "functionThis");
    function indirectEvalThis() {
      try {
        return (void 0, eval)("(function() { return this; })()");
      } catch (_) {
      }
    }
    __name(indirectEvalThis, "indirectEvalThis");
    function sloppyModeThis() {
      return functionThis() || indirectEvalThis();
    }
    __name(sloppyModeThis, "sloppyModeThis");
  })(function(exporter, root) {
    var hasOwn = Object.prototype.hasOwnProperty;
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var supportsCreate = typeof Object.create === "function";
    var supportsProto = {
      __proto__: []
    } instanceof Array;
    var downLevel = !supportsCreate && !supportsProto;
    var HashMap = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: supportsCreate ? function() {
        return MakeDictionary(/* @__PURE__ */ Object.create(null));
      } : supportsProto ? function() {
        return MakeDictionary({
          __proto__: null
        });
      } : function() {
        return MakeDictionary({});
      },
      has: downLevel ? function(map, key) {
        return hasOwn.call(map, key);
      } : function(map, key) {
        return key in map;
      },
      get: downLevel ? function(map, key) {
        return hasOwn.call(map, key) ? map[key] : void 0;
      } : function(map, key) {
        return map[key];
      }
    };
    var functionPrototype = Object.getPrototypeOf(Function);
    var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
    var metadataRegistry = GetOrCreateMetadataRegistry();
    var metadataProvider = CreateMetadataProvider(metadataRegistry);
    function decorate(decorators, target, propertyKey, attributes) {
      if (!IsUndefined(propertyKey)) {
        if (!IsArray(decorators)) throw new TypeError();
        if (!IsObject(target)) throw new TypeError();
        if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
        if (IsNull(attributes)) attributes = void 0;
        propertyKey = ToPropertyKey(propertyKey);
        return DecorateProperty(decorators, target, propertyKey, attributes);
      } else {
        if (!IsArray(decorators)) throw new TypeError();
        if (!IsConstructor(target)) throw new TypeError();
        return DecorateConstructor(decorators, target);
      }
    }
    __name(decorate, "decorate");
    exporter("decorate", decorate);
    function metadata(metadataKey, metadataValue) {
      function decorator(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
        OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      __name(decorator, "decorator");
      return decorator;
    }
    __name(metadata, "metadata");
    exporter("metadata", metadata);
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    __name(defineMetadata, "defineMetadata");
    exporter("defineMetadata", defineMetadata);
    function hasMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    __name(hasMetadata, "hasMetadata");
    exporter("hasMetadata", hasMetadata);
    function hasOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    __name(hasOwnMetadata, "hasOwnMetadata");
    exporter("hasOwnMetadata", hasOwnMetadata);
    function getMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    __name(getMetadata, "getMetadata");
    exporter("getMetadata", getMetadata);
    function getOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    __name(getOwnMetadata, "getOwnMetadata");
    exporter("getOwnMetadata", getOwnMetadata);
    function getMetadataKeys(target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryMetadataKeys(target, propertyKey);
    }
    __name(getMetadataKeys, "getMetadataKeys");
    exporter("getMetadataKeys", getMetadataKeys);
    function getOwnMetadataKeys(target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    __name(getOwnMetadataKeys, "getOwnMetadataKeys");
    exporter("getOwnMetadataKeys", getOwnMetadataKeys);
    function deleteMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      var provider = GetMetadataProvider(
        target,
        propertyKey,
        /*Create*/
        false
      );
      if (IsUndefined(provider)) return false;
      return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
    }
    __name(deleteMetadata, "deleteMetadata");
    exporter("deleteMetadata", deleteMetadata);
    function DecorateConstructor(decorators, target) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsConstructor(decorated)) throw new TypeError();
          target = decorated;
        }
      }
      return target;
    }
    __name(DecorateConstructor, "DecorateConstructor");
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target, propertyKey, descriptor);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsObject(decorated)) throw new TypeError();
          descriptor = decorated;
        }
      }
      return descriptor;
    }
    __name(DecorateProperty, "DecorateProperty");
    function OrdinaryHasMetadata(MetadataKey, O, P) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn2) return true;
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
      return false;
    }
    __name(OrdinaryHasMetadata, "OrdinaryHasMetadata");
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
      var provider = GetMetadataProvider(
        O,
        P,
        /*Create*/
        false
      );
      if (IsUndefined(provider)) return false;
      return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
    }
    __name(OrdinaryHasOwnMetadata, "OrdinaryHasOwnMetadata");
    function OrdinaryGetMetadata(MetadataKey, O, P) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn2) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
      return void 0;
    }
    __name(OrdinaryGetMetadata, "OrdinaryGetMetadata");
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
      var provider = GetMetadataProvider(
        O,
        P,
        /*Create*/
        false
      );
      if (IsUndefined(provider)) return;
      return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
    }
    __name(OrdinaryGetOwnMetadata, "OrdinaryGetOwnMetadata");
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
      var provider = GetMetadataProvider(
        O,
        P,
        /*Create*/
        true
      );
      provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
    }
    __name(OrdinaryDefineOwnMetadata, "OrdinaryDefineOwnMetadata");
    function OrdinaryMetadataKeys(O, P) {
      var ownKeys = OrdinaryOwnMetadataKeys(O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (parent === null) return ownKeys;
      var parentKeys = OrdinaryMetadataKeys(parent, P);
      if (parentKeys.length <= 0) return ownKeys;
      if (ownKeys.length <= 0) return parentKeys;
      var set = new _Set();
      var keys = [];
      for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
        var key = ownKeys_1[_i];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      for (var _a3 = 0, parentKeys_1 = parentKeys; _a3 < parentKeys_1.length; _a3++) {
        var key = parentKeys_1[_a3];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      return keys;
    }
    __name(OrdinaryMetadataKeys, "OrdinaryMetadataKeys");
    function OrdinaryOwnMetadataKeys(O, P) {
      var provider = GetMetadataProvider(
        O,
        P,
        /*create*/
        false
      );
      if (!provider) {
        return [];
      }
      return provider.OrdinaryOwnMetadataKeys(O, P);
    }
    __name(OrdinaryOwnMetadataKeys, "OrdinaryOwnMetadataKeys");
    function Type(x) {
      if (x === null) return 1;
      switch (typeof x) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return x === null ? 1 : 6;
        default:
          return 6;
      }
    }
    __name(Type, "Type");
    function IsUndefined(x) {
      return x === void 0;
    }
    __name(IsUndefined, "IsUndefined");
    function IsNull(x) {
      return x === null;
    }
    __name(IsNull, "IsNull");
    function IsSymbol(x) {
      return typeof x === "symbol";
    }
    __name(IsSymbol, "IsSymbol");
    function IsObject(x) {
      return typeof x === "object" ? x !== null : typeof x === "function";
    }
    __name(IsObject, "IsObject");
    function ToPrimitive(input, PreferredType) {
      switch (Type(input)) {
        case 0:
          return input;
        case 1:
          return input;
        case 2:
          return input;
        case 3:
          return input;
        case 4:
          return input;
        case 5:
          return input;
      }
      var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
      var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
      if (exoticToPrim !== void 0) {
        var result = exoticToPrim.call(input, hint);
        if (IsObject(result)) throw new TypeError();
        return result;
      }
      return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    __name(ToPrimitive, "ToPrimitive");
    function OrdinaryToPrimitive(O, hint) {
      if (hint === "string") {
        var toString_1 = O.toString;
        if (IsCallable(toString_1)) {
          var result = toString_1.call(O);
          if (!IsObject(result)) return result;
        }
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result)) return result;
        }
      } else {
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result)) return result;
        }
        var toString_2 = O.toString;
        if (IsCallable(toString_2)) {
          var result = toString_2.call(O);
          if (!IsObject(result)) return result;
        }
      }
      throw new TypeError();
    }
    __name(OrdinaryToPrimitive, "OrdinaryToPrimitive");
    function ToBoolean(argument) {
      return !!argument;
    }
    __name(ToBoolean, "ToBoolean");
    function ToString(argument) {
      return "" + argument;
    }
    __name(ToString, "ToString");
    function ToPropertyKey(argument) {
      var key = ToPrimitive(
        argument,
        3
        /* String */
      );
      if (IsSymbol(key)) return key;
      return ToString(key);
    }
    __name(ToPropertyKey, "ToPropertyKey");
    function IsArray(argument) {
      return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
    }
    __name(IsArray, "IsArray");
    function IsCallable(argument) {
      return typeof argument === "function";
    }
    __name(IsCallable, "IsCallable");
    function IsConstructor(argument) {
      return typeof argument === "function";
    }
    __name(IsConstructor, "IsConstructor");
    function IsPropertyKey(argument) {
      switch (Type(argument)) {
        case 3:
          return true;
        case 4:
          return true;
        default:
          return false;
      }
    }
    __name(IsPropertyKey, "IsPropertyKey");
    function SameValueZero(x, y) {
      return x === y || x !== x && y !== y;
    }
    __name(SameValueZero, "SameValueZero");
    function GetMethod(V, P) {
      var func = V[P];
      if (func === void 0 || func === null) return void 0;
      if (!IsCallable(func)) throw new TypeError();
      return func;
    }
    __name(GetMethod, "GetMethod");
    function GetIterator(obj) {
      var method = GetMethod(obj, iteratorSymbol);
      if (!IsCallable(method)) throw new TypeError();
      var iterator = method.call(obj);
      if (!IsObject(iterator)) throw new TypeError();
      return iterator;
    }
    __name(GetIterator, "GetIterator");
    function IteratorValue(iterResult) {
      return iterResult.value;
    }
    __name(IteratorValue, "IteratorValue");
    function IteratorStep(iterator) {
      var result = iterator.next();
      return result.done ? false : result;
    }
    __name(IteratorStep, "IteratorStep");
    function IteratorClose(iterator) {
      var f = iterator["return"];
      if (f) f.call(iterator);
    }
    __name(IteratorClose, "IteratorClose");
    function OrdinaryGetPrototypeOf(O) {
      var proto = Object.getPrototypeOf(O);
      if (typeof O !== "function" || O === functionPrototype) return proto;
      if (proto !== functionPrototype) return proto;
      var prototype = O.prototype;
      var prototypeProto = prototype && Object.getPrototypeOf(prototype);
      if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
      var constructor = prototypeProto.constructor;
      if (typeof constructor !== "function") return proto;
      if (constructor === O) return proto;
      return constructor;
    }
    __name(OrdinaryGetPrototypeOf, "OrdinaryGetPrototypeOf");
    function CreateMetadataRegistry() {
      var fallback;
      if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
        fallback = CreateFallbackProvider(root.Reflect);
      }
      var first;
      var second;
      var rest;
      var targetProviderMap = new _WeakMap();
      var registry = {
        registerProvider,
        getProvider,
        setProvider
      };
      return registry;
      function registerProvider(provider) {
        if (!Object.isExtensible(registry)) {
          throw new Error("Cannot add provider to a frozen registry.");
        }
        switch (true) {
          case fallback === provider:
            break;
          case IsUndefined(first):
            first = provider;
            break;
          case first === provider:
            break;
          case IsUndefined(second):
            second = provider;
            break;
          case second === provider:
            break;
          default:
            if (rest === void 0) rest = new _Set();
            rest.add(provider);
            break;
        }
      }
      __name(registerProvider, "registerProvider");
      function getProviderNoCache(O, P) {
        if (!IsUndefined(first)) {
          if (first.isProviderFor(O, P)) return first;
          if (!IsUndefined(second)) {
            if (second.isProviderFor(O, P)) return first;
            if (!IsUndefined(rest)) {
              var iterator = GetIterator(rest);
              while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                  return void 0;
                }
                var provider = IteratorValue(next);
                if (provider.isProviderFor(O, P)) {
                  IteratorClose(iterator);
                  return provider;
                }
              }
            }
          }
        }
        if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
          return fallback;
        }
        return void 0;
      }
      __name(getProviderNoCache, "getProviderNoCache");
      function getProvider(O, P) {
        var providerMap = targetProviderMap.get(O);
        var provider;
        if (!IsUndefined(providerMap)) {
          provider = providerMap.get(P);
        }
        if (!IsUndefined(provider)) {
          return provider;
        }
        provider = getProviderNoCache(O, P);
        if (!IsUndefined(provider)) {
          if (IsUndefined(providerMap)) {
            providerMap = new _Map();
            targetProviderMap.set(O, providerMap);
          }
          providerMap.set(P, provider);
        }
        return provider;
      }
      __name(getProvider, "getProvider");
      function hasProvider(provider) {
        if (IsUndefined(provider)) throw new TypeError();
        return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
      }
      __name(hasProvider, "hasProvider");
      function setProvider(O, P, provider) {
        if (!hasProvider(provider)) {
          throw new Error("Metadata provider not registered.");
        }
        var existingProvider = getProvider(O, P);
        if (existingProvider !== provider) {
          if (!IsUndefined(existingProvider)) {
            return false;
          }
          var providerMap = targetProviderMap.get(O);
          if (IsUndefined(providerMap)) {
            providerMap = new _Map();
            targetProviderMap.set(O, providerMap);
          }
          providerMap.set(P, provider);
        }
        return true;
      }
      __name(setProvider, "setProvider");
    }
    __name(CreateMetadataRegistry, "CreateMetadataRegistry");
    function GetOrCreateMetadataRegistry() {
      var metadataRegistry2;
      if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
        metadataRegistry2 = root.Reflect[registrySymbol];
      }
      if (IsUndefined(metadataRegistry2)) {
        metadataRegistry2 = CreateMetadataRegistry();
      }
      if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
        Object.defineProperty(root.Reflect, registrySymbol, {
          enumerable: false,
          configurable: false,
          writable: false,
          value: metadataRegistry2
        });
      }
      return metadataRegistry2;
    }
    __name(GetOrCreateMetadataRegistry, "GetOrCreateMetadataRegistry");
    function CreateMetadataProvider(registry) {
      var metadata2 = new _WeakMap();
      var provider = {
        isProviderFor: /* @__PURE__ */ __name(function(O, P) {
          var targetMetadata = metadata2.get(O);
          if (IsUndefined(targetMetadata)) return false;
          return targetMetadata.has(P);
        }, "isProviderFor"),
        OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
        OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
        OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
        OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
        OrdinaryDeleteMetadata
      };
      metadataRegistry.registerProvider(provider);
      return provider;
      function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = metadata2.get(O);
        var createdTargetMetadata = false;
        if (IsUndefined(targetMetadata)) {
          if (!Create) return void 0;
          targetMetadata = new _Map();
          metadata2.set(O, targetMetadata);
          createdTargetMetadata = true;
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
          if (!Create) return void 0;
          metadataMap = new _Map();
          targetMetadata.set(P, metadataMap);
          if (!registry.setProvider(O, P, provider)) {
            targetMetadata.delete(P);
            if (createdTargetMetadata) {
              metadata2.delete(O);
            }
            throw new Error("Wrong provider for target.");
          }
        }
        return metadataMap;
      }
      __name(GetOrCreateMetadataMap, "GetOrCreateMetadataMap");
      function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(metadataMap)) return false;
        return ToBoolean(metadataMap.has(MetadataKey));
      }
      __name(OrdinaryHasOwnMetadata2, "OrdinaryHasOwnMetadata");
      function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(metadataMap)) return void 0;
        return metadataMap.get(MetadataKey);
      }
      __name(OrdinaryGetOwnMetadata2, "OrdinaryGetOwnMetadata");
      function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(
          O,
          P,
          /*Create*/
          true
        );
        metadataMap.set(MetadataKey, MetadataValue);
      }
      __name(OrdinaryDefineOwnMetadata2, "OrdinaryDefineOwnMetadata");
      function OrdinaryOwnMetadataKeys2(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(metadataMap)) return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;
        while (true) {
          var next = IteratorStep(iterator);
          if (!next) {
            keys.length = k;
            return keys;
          }
          var nextValue = IteratorValue(next);
          try {
            keys[k] = nextValue;
          } catch (e) {
            try {
              IteratorClose(iterator);
            } finally {
              throw e;
            }
          }
          k++;
        }
      }
      __name(OrdinaryOwnMetadataKeys2, "OrdinaryOwnMetadataKeys");
      function OrdinaryDeleteMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(metadataMap)) return false;
        if (!metadataMap.delete(MetadataKey)) return false;
        if (metadataMap.size === 0) {
          var targetMetadata = metadata2.get(O);
          if (!IsUndefined(targetMetadata)) {
            targetMetadata.delete(P);
            if (targetMetadata.size === 0) {
              metadata2.delete(targetMetadata);
            }
          }
        }
        return true;
      }
      __name(OrdinaryDeleteMetadata, "OrdinaryDeleteMetadata");
    }
    __name(CreateMetadataProvider, "CreateMetadataProvider");
    function CreateFallbackProvider(reflect) {
      var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
      var metadataOwner = new _WeakMap();
      var provider = {
        isProviderFor: /* @__PURE__ */ __name(function(O, P) {
          var metadataPropertySet = metadataOwner.get(O);
          if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
            return true;
          }
          if (getOwnMetadataKeys2(O, P).length) {
            if (IsUndefined(metadataPropertySet)) {
              metadataPropertySet = new _Set();
              metadataOwner.set(O, metadataPropertySet);
            }
            metadataPropertySet.add(P);
            return true;
          }
          return false;
        }, "isProviderFor"),
        OrdinaryDefineOwnMetadata: defineMetadata2,
        OrdinaryHasOwnMetadata: hasOwnMetadata2,
        OrdinaryGetOwnMetadata: getOwnMetadata2,
        OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
        OrdinaryDeleteMetadata: deleteMetadata2
      };
      return provider;
    }
    __name(CreateFallbackProvider, "CreateFallbackProvider");
    function GetMetadataProvider(O, P, Create) {
      var registeredProvider = metadataRegistry.getProvider(O, P);
      if (!IsUndefined(registeredProvider)) {
        return registeredProvider;
      }
      if (Create) {
        if (metadataRegistry.setProvider(O, P, metadataProvider)) {
          return metadataProvider;
        }
        throw new Error("Illegal state.");
      }
      return void 0;
    }
    __name(GetMetadataProvider, "GetMetadataProvider");
    function CreateMapPolyfill() {
      var cacheSentinel = {};
      var arraySentinel = [];
      var MapIterator = (
        /** @class */
        function() {
          function MapIterator2(keys, values, selector) {
            this._index = 0;
            this._keys = keys;
            this._values = values;
            this._selector = selector;
          }
          __name(MapIterator2, "MapIterator");
          MapIterator2.prototype["@@iterator"] = function() {
            return this;
          };
          MapIterator2.prototype[iteratorSymbol] = function() {
            return this;
          };
          MapIterator2.prototype.next = function() {
            var index = this._index;
            if (index >= 0 && index < this._keys.length) {
              var result = this._selector(this._keys[index], this._values[index]);
              if (index + 1 >= this._keys.length) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              } else {
                this._index++;
              }
              return {
                value: result,
                done: false
              };
            }
            return {
              value: void 0,
              done: true
            };
          };
          MapIterator2.prototype.throw = function(error) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            throw error;
          };
          MapIterator2.prototype.return = function(value) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            return {
              value,
              done: true
            };
          };
          return MapIterator2;
        }()
      );
      var Map2 = (
        /** @class */
        function() {
          function Map3() {
            this._keys = [];
            this._values = [];
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          }
          __name(Map3, "Map");
          Object.defineProperty(Map3.prototype, "size", {
            get: /* @__PURE__ */ __name(function() {
              return this._keys.length;
            }, "get"),
            enumerable: true,
            configurable: true
          });
          Map3.prototype.has = function(key) {
            return this._find(
              key,
              /*insert*/
              false
            ) >= 0;
          };
          Map3.prototype.get = function(key) {
            var index = this._find(
              key,
              /*insert*/
              false
            );
            return index >= 0 ? this._values[index] : void 0;
          };
          Map3.prototype.set = function(key, value) {
            var index = this._find(
              key,
              /*insert*/
              true
            );
            this._values[index] = value;
            return this;
          };
          Map3.prototype.delete = function(key) {
            var index = this._find(
              key,
              /*insert*/
              false
            );
            if (index >= 0) {
              var size = this._keys.length;
              for (var i = index + 1; i < size; i++) {
                this._keys[i - 1] = this._keys[i];
                this._values[i - 1] = this._values[i];
              }
              this._keys.length--;
              this._values.length--;
              if (SameValueZero(key, this._cacheKey)) {
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              return true;
            }
            return false;
          };
          Map3.prototype.clear = function() {
            this._keys.length = 0;
            this._values.length = 0;
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          };
          Map3.prototype.keys = function() {
            return new MapIterator(this._keys, this._values, getKey);
          };
          Map3.prototype.values = function() {
            return new MapIterator(this._keys, this._values, getValue);
          };
          Map3.prototype.entries = function() {
            return new MapIterator(this._keys, this._values, getEntry);
          };
          Map3.prototype["@@iterator"] = function() {
            return this.entries();
          };
          Map3.prototype[iteratorSymbol] = function() {
            return this.entries();
          };
          Map3.prototype._find = function(key, insert) {
            if (!SameValueZero(this._cacheKey, key)) {
              this._cacheIndex = -1;
              for (var i = 0; i < this._keys.length; i++) {
                if (SameValueZero(this._keys[i], key)) {
                  this._cacheIndex = i;
                  break;
                }
              }
            }
            if (this._cacheIndex < 0 && insert) {
              this._cacheIndex = this._keys.length;
              this._keys.push(key);
              this._values.push(void 0);
            }
            return this._cacheIndex;
          };
          return Map3;
        }()
      );
      return Map2;
      function getKey(key, _) {
        return key;
      }
      __name(getKey, "getKey");
      function getValue(_, value) {
        return value;
      }
      __name(getValue, "getValue");
      function getEntry(key, value) {
        return [
          key,
          value
        ];
      }
      __name(getEntry, "getEntry");
    }
    __name(CreateMapPolyfill, "CreateMapPolyfill");
    function CreateSetPolyfill() {
      var Set3 = (
        /** @class */
        function() {
          function Set4() {
            this._map = new _Map();
          }
          __name(Set4, "Set");
          Object.defineProperty(Set4.prototype, "size", {
            get: /* @__PURE__ */ __name(function() {
              return this._map.size;
            }, "get"),
            enumerable: true,
            configurable: true
          });
          Set4.prototype.has = function(value) {
            return this._map.has(value);
          };
          Set4.prototype.add = function(value) {
            return this._map.set(value, value), this;
          };
          Set4.prototype.delete = function(value) {
            return this._map.delete(value);
          };
          Set4.prototype.clear = function() {
            this._map.clear();
          };
          Set4.prototype.keys = function() {
            return this._map.keys();
          };
          Set4.prototype.values = function() {
            return this._map.keys();
          };
          Set4.prototype.entries = function() {
            return this._map.entries();
          };
          Set4.prototype["@@iterator"] = function() {
            return this.keys();
          };
          Set4.prototype[iteratorSymbol] = function() {
            return this.keys();
          };
          return Set4;
        }()
      );
      return Set3;
    }
    __name(CreateSetPolyfill, "CreateSetPolyfill");
    function CreateWeakMapPolyfill() {
      var UUID_SIZE = 16;
      var keys = HashMap.create();
      var rootKey = CreateUniqueKey();
      return (
        /** @class */
        function() {
          function WeakMap2() {
            this._key = CreateUniqueKey();
          }
          __name(WeakMap2, "WeakMap");
          WeakMap2.prototype.has = function(target) {
            var table = GetOrCreateWeakMapTable(
              target,
              /*create*/
              false
            );
            return table !== void 0 ? HashMap.has(table, this._key) : false;
          };
          WeakMap2.prototype.get = function(target) {
            var table = GetOrCreateWeakMapTable(
              target,
              /*create*/
              false
            );
            return table !== void 0 ? HashMap.get(table, this._key) : void 0;
          };
          WeakMap2.prototype.set = function(target, value) {
            var table = GetOrCreateWeakMapTable(
              target,
              /*create*/
              true
            );
            table[this._key] = value;
            return this;
          };
          WeakMap2.prototype.delete = function(target) {
            var table = GetOrCreateWeakMapTable(
              target,
              /*create*/
              false
            );
            return table !== void 0 ? delete table[this._key] : false;
          };
          WeakMap2.prototype.clear = function() {
            this._key = CreateUniqueKey();
          };
          return WeakMap2;
        }()
      );
      function CreateUniqueKey() {
        var key;
        do
          key = "@@WeakMap@@" + CreateUUID();
        while (HashMap.has(keys, key));
        keys[key] = true;
        return key;
      }
      __name(CreateUniqueKey, "CreateUniqueKey");
      function GetOrCreateWeakMapTable(target, create3) {
        if (!hasOwn.call(target, rootKey)) {
          if (!create3) return void 0;
          Object.defineProperty(target, rootKey, {
            value: HashMap.create()
          });
        }
        return target[rootKey];
      }
      __name(GetOrCreateWeakMapTable, "GetOrCreateWeakMapTable");
      function FillRandomBytes(buffer, size) {
        for (var i = 0; i < size; ++i) buffer[i] = Math.random() * 255 | 0;
        return buffer;
      }
      __name(FillRandomBytes, "FillRandomBytes");
      function GenRandomBytes(size) {
        if (typeof Uint8Array === "function") {
          var array = new Uint8Array(size);
          if (typeof crypto !== "undefined") {
            crypto.getRandomValues(array);
          } else if (typeof msCrypto !== "undefined") {
            msCrypto.getRandomValues(array);
          } else {
            FillRandomBytes(array, size);
          }
          return array;
        }
        return FillRandomBytes(new Array(size), size);
      }
      __name(GenRandomBytes, "GenRandomBytes");
      function CreateUUID() {
        var data = GenRandomBytes(UUID_SIZE);
        data[6] = data[6] & 79 | 64;
        data[8] = data[8] & 191 | 128;
        var result = "";
        for (var offset = 0; offset < UUID_SIZE; ++offset) {
          var byte = data[offset];
          if (offset === 4 || offset === 6 || offset === 8) result += "-";
          if (byte < 16) result += "0";
          result += byte.toString(16).toLowerCase();
        }
        return result;
      }
      __name(CreateUUID, "CreateUUID");
    }
    __name(CreateWeakMapPolyfill, "CreateWeakMapPolyfill");
    function MakeDictionary(obj) {
      obj.__ = void 0;
      delete obj.__;
      return obj;
    }
    __name(MakeDictionary, "MakeDictionary");
  });
})(Reflect2 || (Reflect2 = {}));

// ../../../root/.cache/deno/npm/registry.npmjs.org/asn1js/3.1.0/build/index.es.js
var index_es_exports = {};
__export(index_es_exports, {
  Any: () => Any,
  BaseBlock: () => BaseBlock,
  BaseStringBlock: () => BaseStringBlock,
  BitString: () => BitString,
  BmpString: () => BmpString,
  Boolean: () => Boolean2,
  CharacterString: () => CharacterString,
  Choice: () => Choice,
  Constructed: () => Constructed,
  DATE: () => DATE,
  DEFAULT_MAX_CONTENT_LENGTH: () => DEFAULT_MAX_CONTENT_LENGTH,
  DEFAULT_MAX_DEPTH: () => DEFAULT_MAX_DEPTH,
  DEFAULT_MAX_NODES: () => DEFAULT_MAX_NODES,
  DateTime: () => DateTime,
  Duration: () => Duration,
  EndOfContent: () => EndOfContent,
  Enumerated: () => Enumerated,
  GeneralString: () => GeneralString,
  GeneralizedTime: () => GeneralizedTime,
  GraphicString: () => GraphicString,
  HexBlock: () => HexBlock,
  IA5String: () => IA5String,
  Integer: () => Integer,
  Null: () => Null,
  NumericString: () => NumericString,
  ObjectIdentifier: () => ObjectIdentifier,
  OctetString: () => OctetString,
  Primitive: () => Primitive,
  PrintableString: () => PrintableString,
  RawData: () => RawData,
  RelativeObjectIdentifier: () => RelativeObjectIdentifier,
  Repeated: () => Repeated,
  Sequence: () => Sequence,
  Set: () => Set2,
  TIME: () => TIME,
  TeletexString: () => TeletexString,
  TimeOfDay: () => TimeOfDay,
  UTCTime: () => UTCTime,
  UniversalString: () => UniversalString,
  Utf8String: () => Utf8String,
  ValueBlock: () => ValueBlock,
  VideotexString: () => VideotexString,
  ViewWriter: () => ViewWriter,
  VisibleString: () => VisibleString,
  compareSchema: () => compareSchema,
  fromBER: () => fromBER,
  verifySchema: () => verifySchema
});

// ../../../root/.cache/deno/npm/registry.npmjs.org/pvtsutils/1.3.6/build/index.es.js
var ARRAY_BUFFER_NAME = "[object ArrayBuffer]";
var BufferSourceConverter = class _BufferSourceConverter {
  static {
    __name(this, "BufferSourceConverter");
  }
  static isArrayBuffer(data) {
    return Object.prototype.toString.call(data) === ARRAY_BUFFER_NAME;
  }
  static toArrayBuffer(data) {
    if (this.isArrayBuffer(data)) {
      return data;
    }
    if (data.byteLength === data.buffer.byteLength) {
      return data.buffer;
    }
    if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {
      return data.buffer;
    }
    return this.toUint8Array(data.buffer).slice(data.byteOffset, data.byteOffset + data.byteLength).buffer;
  }
  static toUint8Array(data) {
    return this.toView(data, Uint8Array);
  }
  static toView(data, type) {
    if (data.constructor === type) {
      return data;
    }
    if (this.isArrayBuffer(data)) {
      return new type(data);
    }
    if (this.isArrayBufferView(data)) {
      return new type(data.buffer, data.byteOffset, data.byteLength);
    }
    throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
  }
  static isBufferSource(data) {
    return this.isArrayBufferView(data) || this.isArrayBuffer(data);
  }
  static isArrayBufferView(data) {
    return ArrayBuffer.isView(data) || data && this.isArrayBuffer(data.buffer);
  }
  static isEqual(a, b) {
    const aView = _BufferSourceConverter.toUint8Array(a);
    const bView = _BufferSourceConverter.toUint8Array(b);
    if (aView.length !== bView.byteLength) {
      return false;
    }
    for (let i = 0; i < aView.length; i++) {
      if (aView[i] !== bView[i]) {
        return false;
      }
    }
    return true;
  }
  static concat(...args) {
    let buffers;
    if (Array.isArray(args[0]) && !(args[1] instanceof Function)) {
      buffers = args[0];
    } else if (Array.isArray(args[0]) && args[1] instanceof Function) {
      buffers = args[0];
    } else {
      if (args[args.length - 1] instanceof Function) {
        buffers = args.slice(0, args.length - 1);
      } else {
        buffers = args;
      }
    }
    let size = 0;
    for (const buffer of buffers) {
      size += buffer.byteLength;
    }
    const res = new Uint8Array(size);
    let offset = 0;
    for (const buffer of buffers) {
      const view = this.toUint8Array(buffer);
      res.set(view, offset);
      offset += view.length;
    }
    if (args[args.length - 1] instanceof Function) {
      return this.toView(res, args[args.length - 1]);
    }
    return res.buffer;
  }
};
var STRING_TYPE = "string";
var HEX_REGEX = /^[0-9a-f\s]+$/i;
var BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
var BASE64URL_REGEX = /^[a-zA-Z0-9-_]+$/;
var Utf8Converter = class {
  static {
    __name(this, "Utf8Converter");
  }
  static fromString(text) {
    const s = unescape(encodeURIComponent(text));
    const uintArray = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) {
      uintArray[i] = s.charCodeAt(i);
    }
    return uintArray.buffer;
  }
  static toString(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    let encodedString = "";
    for (let i = 0; i < buf.length; i++) {
      encodedString += String.fromCharCode(buf[i]);
    }
    const decodedString = decodeURIComponent(escape(encodedString));
    return decodedString;
  }
};
var Utf16Converter = class {
  static {
    __name(this, "Utf16Converter");
  }
  static toString(buffer, littleEndian = false) {
    const arrayBuffer = BufferSourceConverter.toArrayBuffer(buffer);
    const dataView = new DataView(arrayBuffer);
    let res = "";
    for (let i = 0; i < arrayBuffer.byteLength; i += 2) {
      const code = dataView.getUint16(i, littleEndian);
      res += String.fromCharCode(code);
    }
    return res;
  }
  static fromString(text, littleEndian = false) {
    const res = new ArrayBuffer(text.length * 2);
    const dataView = new DataView(res);
    for (let i = 0; i < text.length; i++) {
      dataView.setUint16(i * 2, text.charCodeAt(i), littleEndian);
    }
    return res;
  }
};
var Convert = class _Convert {
  static {
    __name(this, "Convert");
  }
  static isHex(data) {
    return typeof data === STRING_TYPE && HEX_REGEX.test(data);
  }
  static isBase64(data) {
    return typeof data === STRING_TYPE && BASE64_REGEX.test(data);
  }
  static isBase64Url(data) {
    return typeof data === STRING_TYPE && BASE64URL_REGEX.test(data);
  }
  static ToString(buffer, enc = "utf8") {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    switch (enc.toLowerCase()) {
      case "utf8":
        return this.ToUtf8String(buf);
      case "binary":
        return this.ToBinary(buf);
      case "hex":
        return this.ToHex(buf);
      case "base64":
        return this.ToBase64(buf);
      case "base64url":
        return this.ToBase64Url(buf);
      case "utf16le":
        return Utf16Converter.toString(buf, true);
      case "utf16":
      case "utf16be":
        return Utf16Converter.toString(buf);
      default:
        throw new Error(`Unknown type of encoding '${enc}'`);
    }
  }
  static FromString(str, enc = "utf8") {
    if (!str) {
      return new ArrayBuffer(0);
    }
    switch (enc.toLowerCase()) {
      case "utf8":
        return this.FromUtf8String(str);
      case "binary":
        return this.FromBinary(str);
      case "hex":
        return this.FromHex(str);
      case "base64":
        return this.FromBase64(str);
      case "base64url":
        return this.FromBase64Url(str);
      case "utf16le":
        return Utf16Converter.fromString(str, true);
      case "utf16":
      case "utf16be":
        return Utf16Converter.fromString(str);
      default:
        throw new Error(`Unknown type of encoding '${enc}'`);
    }
  }
  static ToBase64(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    if (typeof btoa !== "undefined") {
      const binary2 = this.ToString(buf, "binary");
      return btoa(binary2);
    } else {
      return Buffer.from(buf).toString("base64");
    }
  }
  static FromBase64(base642) {
    const formatted = this.formatString(base642);
    if (!formatted) {
      return new ArrayBuffer(0);
    }
    if (!_Convert.isBase64(formatted)) {
      throw new TypeError("Argument 'base64Text' is not Base64 encoded");
    }
    if (typeof atob !== "undefined") {
      return this.FromBinary(atob(formatted));
    } else {
      return new Uint8Array(Buffer.from(formatted, "base64")).buffer;
    }
  }
  static FromBase64Url(base64url2) {
    const formatted = this.formatString(base64url2);
    if (!formatted) {
      return new ArrayBuffer(0);
    }
    if (!_Convert.isBase64Url(formatted)) {
      throw new TypeError("Argument 'base64url' is not Base64Url encoded");
    }
    return this.FromBase64(this.Base64Padding(formatted.replace(/\-/g, "+").replace(/\_/g, "/")));
  }
  static ToBase64Url(data) {
    return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
  }
  static FromUtf8String(text, encoding = _Convert.DEFAULT_UTF8_ENCODING) {
    switch (encoding) {
      case "ascii":
        return this.FromBinary(text);
      case "utf8":
        return Utf8Converter.fromString(text);
      case "utf16":
      case "utf16be":
        return Utf16Converter.fromString(text);
      case "utf16le":
      case "usc2":
        return Utf16Converter.fromString(text, true);
      default:
        throw new Error(`Unknown type of encoding '${encoding}'`);
    }
  }
  static ToUtf8String(buffer, encoding = _Convert.DEFAULT_UTF8_ENCODING) {
    switch (encoding) {
      case "ascii":
        return this.ToBinary(buffer);
      case "utf8":
        return Utf8Converter.toString(buffer);
      case "utf16":
      case "utf16be":
        return Utf16Converter.toString(buffer);
      case "utf16le":
      case "usc2":
        return Utf16Converter.toString(buffer, true);
      default:
        throw new Error(`Unknown type of encoding '${encoding}'`);
    }
  }
  static FromBinary(text) {
    const stringLength = text.length;
    const resultView = new Uint8Array(stringLength);
    for (let i = 0; i < stringLength; i++) {
      resultView[i] = text.charCodeAt(i);
    }
    return resultView.buffer;
  }
  static ToBinary(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    let res = "";
    for (let i = 0; i < buf.length; i++) {
      res += String.fromCharCode(buf[i]);
    }
    return res;
  }
  static ToHex(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    let result = "";
    const len = buf.length;
    for (let i = 0; i < len; i++) {
      const byte = buf[i];
      if (byte < 16) {
        result += "0";
      }
      result += byte.toString(16);
    }
    return result;
  }
  static FromHex(hexString) {
    let formatted = this.formatString(hexString);
    if (!formatted) {
      return new ArrayBuffer(0);
    }
    if (!_Convert.isHex(formatted)) {
      throw new TypeError("Argument 'hexString' is not HEX encoded");
    }
    if (formatted.length % 2) {
      formatted = `0${formatted}`;
    }
    const res = new Uint8Array(formatted.length / 2);
    for (let i = 0; i < formatted.length; i = i + 2) {
      const c = formatted.slice(i, i + 2);
      res[i / 2] = parseInt(c, 16);
    }
    return res.buffer;
  }
  static ToUtf16String(buffer, littleEndian = false) {
    return Utf16Converter.toString(buffer, littleEndian);
  }
  static FromUtf16String(text, littleEndian = false) {
    return Utf16Converter.fromString(text, littleEndian);
  }
  static Base64Padding(base642) {
    const padCount = 4 - base642.length % 4;
    if (padCount < 4) {
      for (let i = 0; i < padCount; i++) {
        base642 += "=";
      }
    }
    return base642;
  }
  static formatString(data) {
    return (data === null || data === void 0 ? void 0 : data.replace(/[\n\r\t ]/g, "")) || "";
  }
};
Convert.DEFAULT_UTF8_ENCODING = "utf8";
function combine(...buf) {
  const totalByteLength = buf.map((item) => item.byteLength).reduce((prev, cur) => prev + cur);
  const res = new Uint8Array(totalByteLength);
  let currentPos = 0;
  buf.map((item) => new Uint8Array(item)).forEach((arr) => {
    for (const item2 of arr) {
      res[currentPos++] = item2;
    }
  });
  return res.buffer;
}
__name(combine, "combine");
function isEqual(bytes1, bytes2) {
  if (!(bytes1 && bytes2)) {
    return false;
  }
  if (bytes1.byteLength !== bytes2.byteLength) {
    return false;
  }
  const b1 = new Uint8Array(bytes1);
  const b2 = new Uint8Array(bytes2);
  for (let i = 0; i < bytes1.byteLength; i++) {
    if (b1[i] !== b2[i]) {
      return false;
    }
  }
  return true;
}
__name(isEqual, "isEqual");

// ../../../root/.cache/deno/npm/registry.npmjs.org/pvutils/1.2.0/build/utils.es.js
function utilFromBase(inputBuffer, inputBase) {
  let result = 0;
  if (inputBuffer.length === 1) {
    return inputBuffer[0];
  }
  for (let i = inputBuffer.length - 1; i >= 0; i--) {
    result += inputBuffer[inputBuffer.length - 1 - i] * Math.pow(2, inputBase * i);
  }
  return result;
}
__name(utilFromBase, "utilFromBase");
function utilToBase(value, base, reserved = -1) {
  const internalReserved = reserved;
  let internalValue = value;
  let result = 0;
  let biggest = Math.pow(2, base);
  for (let i = 1; i < 8; i++) {
    if (value < biggest) {
      let retBuf;
      if (internalReserved < 0) {
        retBuf = new ArrayBuffer(i);
        result = i;
      } else {
        if (internalReserved < i) {
          return new ArrayBuffer(0);
        }
        retBuf = new ArrayBuffer(internalReserved);
        result = internalReserved;
      }
      const retView = new Uint8Array(retBuf);
      for (let j = i - 1; j >= 0; j--) {
        const basis = Math.pow(2, j * base);
        retView[result - j - 1] = Math.floor(internalValue / basis);
        internalValue -= retView[result - j - 1] * basis;
      }
      return retBuf;
    }
    biggest *= Math.pow(2, base);
  }
  return new ArrayBuffer(0);
}
__name(utilToBase, "utilToBase");
function utilDecodeTC() {
  const buf = new Uint8Array(this.valueHex);
  if (this.valueHex.byteLength >= 2) {
    const condition1 = buf[0] === 255 && buf[1] & 128;
    const condition2 = buf[0] === 0 && (buf[1] & 128) === 0;
    if (condition1 || condition2) {
      this.warnings.push("Needlessly long format");
    }
  }
  const bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
  const bigIntView = new Uint8Array(bigIntBuffer);
  for (let i = 0; i < this.valueHex.byteLength; i++) {
    bigIntView[i] = 0;
  }
  bigIntView[0] = buf[0] & 128;
  const bigInt = utilFromBase(bigIntView, 8);
  const smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
  const smallIntView = new Uint8Array(smallIntBuffer);
  for (let j = 0; j < this.valueHex.byteLength; j++) {
    smallIntView[j] = buf[j];
  }
  smallIntView[0] &= 127;
  const smallInt = utilFromBase(smallIntView, 8);
  return smallInt - bigInt;
}
__name(utilDecodeTC, "utilDecodeTC");
function utilEncodeTC(value) {
  const modValue = value < 0 ? value * -1 : value;
  let bigInt = 128;
  for (let i = 1; i < 8; i++) {
    if (modValue <= bigInt) {
      if (value < 0) {
        const smallInt = bigInt - modValue;
        const retBuf2 = utilToBase(smallInt, 8, i);
        const retView2 = new Uint8Array(retBuf2);
        retView2[0] |= 128;
        return retBuf2;
      }
      let retBuf = utilToBase(modValue, 8, i);
      let retView = new Uint8Array(retBuf);
      if (retView[0] & 128) {
        const tempBuf = retBuf.slice(0);
        const tempView = new Uint8Array(tempBuf);
        retBuf = new ArrayBuffer(retBuf.byteLength + 1);
        retView = new Uint8Array(retBuf);
        for (let k = 0; k < tempBuf.byteLength; k++) {
          retView[k + 1] = tempView[k];
        }
        retView[0] = 0;
      }
      return retBuf;
    }
    bigInt *= Math.pow(2, 8);
  }
  return new ArrayBuffer(0);
}
__name(utilEncodeTC, "utilEncodeTC");
function isEqualBuffer(inputBuffer1, inputBuffer2) {
  if (inputBuffer1.byteLength !== inputBuffer2.byteLength) {
    return false;
  }
  const view1 = new Uint8Array(inputBuffer1);
  const view2 = new Uint8Array(inputBuffer2);
  for (let i = 0; i < view1.length; i++) {
    if (view1[i] !== view2[i]) {
      return false;
    }
  }
  return true;
}
__name(isEqualBuffer, "isEqualBuffer");
function padNumber(inputNumber, fullLength) {
  const str = inputNumber.toString(10);
  if (fullLength < str.length) {
    return "";
  }
  const dif = fullLength - str.length;
  const padding = Array.from({
    length: dif
  });
  for (let i = 0; i < dif; i++) {
    padding[i] = "0";
  }
  const paddingString = padding.join("");
  return paddingString.concat(str);
}
__name(padNumber, "padNumber");
var log2 = Math.log(2);

// ../../../root/.cache/deno/npm/registry.npmjs.org/asn1js/3.1.0/build/index.es.js
function assertBigInt() {
  if (typeof BigInt === "undefined") {
    throw new Error("BigInt is not defined. Your environment doesn't implement BigInt.");
  }
}
__name(assertBigInt, "assertBigInt");
function concat(buffers) {
  let outputLength = 0;
  let prevLength = 0;
  for (let i = 0; i < buffers.length; i++) {
    const buffer = buffers[i];
    outputLength += buffer.byteLength;
  }
  const retView = new Uint8Array(outputLength);
  for (let i = 0; i < buffers.length; i++) {
    const buffer = buffers[i];
    retView.set(buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer), prevLength);
    prevLength += buffer.byteLength;
  }
  return retView.buffer;
}
__name(concat, "concat");
function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
  if (!(inputBuffer instanceof Uint8Array)) {
    baseBlock.error = "Wrong parameter: inputBuffer must be 'Uint8Array'";
    return false;
  }
  if (!inputBuffer.byteLength) {
    baseBlock.error = "Wrong parameter: inputBuffer has zero length";
    return false;
  }
  if (inputOffset < 0) {
    baseBlock.error = "Wrong parameter: inputOffset less than zero";
    return false;
  }
  if (inputLength < 0) {
    baseBlock.error = "Wrong parameter: inputLength less than zero";
    return false;
  }
  if (inputBuffer.byteLength - inputOffset - inputLength < 0) {
    baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
    return false;
  }
  return true;
}
__name(checkBufferParams, "checkBufferParams");
var ViewWriter = class {
  static {
    __name(this, "ViewWriter");
  }
  constructor() {
    this.items = [];
  }
  write(buf) {
    this.items.push(buf instanceof ArrayBuffer ? buf : concat([
      buf
    ]));
  }
  final() {
    return concat(this.items);
  }
};
var ORIGINAL_VIEW_WRITER_WRITE = ViewWriter.prototype.write;
var ORIGINAL_VIEW_WRITER_FINAL = ViewWriter.prototype.final;
var NAME = "name";
var VALUE_HEX_VIEW = "valueHexView";
var IS_HEX_ONLY = "isHexOnly";
var ID_BLOCK = "idBlock";
var TAG_CLASS = "tagClass";
var TAG_NUMBER = "tagNumber";
var IS_CONSTRUCTED = "isConstructed";
var FROM_BER = "fromBER";
var TO_BER = "toBER";
var LOCAL = "local";
var EMPTY_STRING = "";
var EMPTY_BUFFER = new ArrayBuffer(0);
var EMPTY_VIEW = new Uint8Array(0);
var END_OF_CONTENT_NAME = "EndOfContent";
var OCTET_STRING_NAME = "OCTET STRING";
var BIT_STRING_NAME = "BIT STRING";
function HexBlock(BaseClass) {
  var _a3;
  return _a3 = class Some extends BaseClass {
    static {
      __name(this, "Some");
    }
    get valueHex() {
      return this.valueHexView.slice().buffer;
    }
    set valueHex(value) {
      this.valueHexView = new Uint8Array(value);
    }
    constructor(...args) {
      var _b2;
      super(...args);
      const params = args[0] || {};
      this.isHexOnly = (_b2 = params.isHexOnly) !== null && _b2 !== void 0 ? _b2 : false;
      this.valueHexView = params.valueHex ? BufferSourceConverter.toUint8Array(params.valueHex) : EMPTY_VIEW;
    }
    fromBER(inputBuffer, inputOffset, inputLength, _context) {
      const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
      if (!checkBufferParams(this, view, inputOffset, inputLength)) {
        return -1;
      }
      const endLength = inputOffset + inputLength;
      this.valueHexView = view.subarray(inputOffset, endLength);
      if (!this.valueHexView.length) {
        this.warnings.push("Zero buffer length");
        return inputOffset;
      }
      this.blockLength = inputLength;
      return endLength;
    }
    toBER(sizeOnly = false) {
      if (!this.isHexOnly) {
        this.error = "Flag 'isHexOnly' is not set, abort";
        return EMPTY_BUFFER;
      }
      if (sizeOnly) {
        return new ArrayBuffer(this.valueHexView.byteLength);
      }
      if (this.valueHexView.buffer instanceof ArrayBuffer && this.valueHexView.byteLength === this.valueHexView.buffer.byteLength) {
        return this.valueHexView.buffer;
      }
      return BufferSourceConverter.toArrayBuffer(this.valueHexView);
    }
    toJSON() {
      return {
        ...super.toJSON(),
        isHexOnly: this.isHexOnly,
        valueHex: Convert.ToHex(this.valueHexView)
      };
    }
  }, _a3.NAME = "hexBlock", _a3;
}
__name(HexBlock, "HexBlock");
var LocalBaseBlock = class {
  static {
    __name(this, "LocalBaseBlock");
  }
  static blockName() {
    return this.NAME;
  }
  get valueBeforeDecode() {
    return this.valueBeforeDecodeView.slice().buffer;
  }
  set valueBeforeDecode(value) {
    this.valueBeforeDecodeView = new Uint8Array(value);
  }
  constructor({ blockLength = 0, error = EMPTY_STRING, warnings = [], valueBeforeDecode = EMPTY_VIEW } = {}) {
    this.blockLength = blockLength;
    this.error = error;
    this.warnings = warnings;
    this.valueBeforeDecodeView = BufferSourceConverter.toUint8Array(valueBeforeDecode);
  }
  toJSON() {
    return {
      blockName: this.constructor.NAME,
      blockLength: this.blockLength,
      error: this.error,
      warnings: this.warnings,
      valueBeforeDecode: Convert.ToHex(this.valueBeforeDecodeView)
    };
  }
};
LocalBaseBlock.NAME = "baseBlock";
var ValueBlock = class extends LocalBaseBlock {
  static {
    __name(this, "ValueBlock");
  }
  fromBER(_inputBuffer, _inputOffset, _inputLength, _context) {
    throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
  }
  toBER(_sizeOnly, _writer) {
    throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
  }
};
ValueBlock.NAME = "valueBlock";
var LocalIdentificationBlock = class extends HexBlock(LocalBaseBlock) {
  static {
    __name(this, "LocalIdentificationBlock");
  }
  constructor({ idBlock = {} } = {}) {
    var _a3, _b2, _c2, _d;
    super();
    if (idBlock) {
      this.isHexOnly = (_a3 = idBlock.isHexOnly) !== null && _a3 !== void 0 ? _a3 : false;
      this.valueHexView = idBlock.valueHex ? BufferSourceConverter.toUint8Array(idBlock.valueHex) : EMPTY_VIEW;
      this.tagClass = (_b2 = idBlock.tagClass) !== null && _b2 !== void 0 ? _b2 : -1;
      this.tagNumber = (_c2 = idBlock.tagNumber) !== null && _c2 !== void 0 ? _c2 : -1;
      this.isConstructed = (_d = idBlock.isConstructed) !== null && _d !== void 0 ? _d : false;
    } else {
      this.tagClass = -1;
      this.tagNumber = -1;
      this.isConstructed = false;
    }
  }
  toBER(sizeOnly = false) {
    let firstOctet = 0;
    switch (this.tagClass) {
      case 1:
        firstOctet |= 0;
        break;
      case 2:
        firstOctet |= 64;
        break;
      case 3:
        firstOctet |= 128;
        break;
      case 4:
        firstOctet |= 192;
        break;
      default:
        this.error = "Unknown tag class";
        return EMPTY_BUFFER;
    }
    if (this.isConstructed) firstOctet |= 32;
    if (this.tagNumber < 31 && !this.isHexOnly) {
      const retView2 = new Uint8Array(1);
      if (!sizeOnly) {
        let number = this.tagNumber;
        number &= 31;
        firstOctet |= number;
        retView2[0] = firstOctet;
      }
      return retView2.buffer;
    }
    if (!this.isHexOnly) {
      const encodedBuf = utilToBase(this.tagNumber, 7);
      const encodedView = new Uint8Array(encodedBuf);
      const size = encodedBuf.byteLength;
      const retView2 = new Uint8Array(size + 1);
      retView2[0] = firstOctet | 31;
      if (!sizeOnly) {
        for (let i = 0; i < size - 1; i++) retView2[i + 1] = encodedView[i] | 128;
        retView2[size] = encodedView[size - 1];
      }
      return retView2.buffer;
    }
    const retView = new Uint8Array(this.valueHexView.byteLength + 1);
    retView[0] = firstOctet | 31;
    if (!sizeOnly) {
      const curView = this.valueHexView;
      for (let i = 0; i < curView.length - 1; i++) retView[i + 1] = curView[i] | 128;
      retView[this.valueHexView.byteLength] = curView[curView.length - 1];
    }
    return retView.buffer;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    const fastArgs = Number.isInteger(inputOffset) && Number.isInteger(inputLength);
    const intBuffer = fastArgs ? inputView : inputView.subarray(inputOffset, inputOffset + inputLength);
    const baseIndex = fastArgs ? inputOffset : 0;
    const bufferLength = fastArgs ? inputLength : intBuffer.length;
    if (bufferLength === 0) {
      this.error = "Zero buffer length";
      return -1;
    }
    const tagClassMask = intBuffer[baseIndex] & 192;
    switch (tagClassMask) {
      case 0:
        this.tagClass = 1;
        break;
      case 64:
        this.tagClass = 2;
        break;
      case 128:
        this.tagClass = 3;
        break;
      case 192:
        this.tagClass = 4;
        break;
      default:
        this.error = "Unknown tag class";
        return -1;
    }
    this.isConstructed = (intBuffer[baseIndex] & 32) === 32;
    this.isHexOnly = false;
    const tagNumberMask = intBuffer[baseIndex] & 31;
    if (tagNumberMask !== 31) {
      this.tagNumber = tagNumberMask;
      this.blockLength = 1;
    } else {
      let count = 0;
      while (true) {
        const tagByteIndex = count + 1;
        if (tagByteIndex >= bufferLength) {
          this.error = "End of input reached before message was fully decoded";
          return -1;
        }
        count++;
        if ((intBuffer[baseIndex + tagByteIndex] & 128) === 0) break;
      }
      this.blockLength = count + 1;
      const intTagNumberBuffer = this.valueHexView = new Uint8Array(count);
      for (let i = 0; i < count; i++) intTagNumberBuffer[i] = intBuffer[baseIndex + i + 1] & 127;
      if (this.blockLength <= 9) this.tagNumber = utilFromBase(intTagNumberBuffer, 7);
      else {
        this.isHexOnly = true;
        this.warnings.push("Tag too long, represented as hex-coded");
      }
    }
    if (this.tagClass === 1 && this.isConstructed) {
      switch (this.tagNumber) {
        case 1:
        case 2:
        case 5:
        case 6:
        case 9:
        case 13:
        case 14:
        case 23:
        case 24:
        case 31:
        case 32:
        case 33:
        case 34:
          this.error = "Constructed encoding used for primitive type";
          return -1;
      }
    }
    return inputOffset + this.blockLength;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      tagClass: this.tagClass,
      tagNumber: this.tagNumber,
      isConstructed: this.isConstructed
    };
  }
};
LocalIdentificationBlock.NAME = "identificationBlock";
var ORIGINAL_LOCAL_IDENTIFICATION_TO_BER = LocalIdentificationBlock.prototype.toBER;
var ORIGINAL_LOCAL_IDENTIFICATION_FROM_BER = LocalIdentificationBlock.prototype.fromBER;
var LocalLengthBlock = class extends LocalBaseBlock {
  static {
    __name(this, "LocalLengthBlock");
  }
  constructor({ lenBlock = {} } = {}) {
    var _a3, _b2, _c2;
    super();
    this.isIndefiniteForm = (_a3 = lenBlock.isIndefiniteForm) !== null && _a3 !== void 0 ? _a3 : false;
    this.longFormUsed = (_b2 = lenBlock.longFormUsed) !== null && _b2 !== void 0 ? _b2 : false;
    this.length = (_c2 = lenBlock.length) !== null && _c2 !== void 0 ? _c2 : 0;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const view = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, view, inputOffset, inputLength)) {
      return -1;
    }
    const fastArgs = Number.isInteger(inputOffset) && Number.isInteger(inputLength);
    const intBuffer = fastArgs ? view : view.subarray(inputOffset, inputOffset + inputLength);
    const baseIndex = fastArgs ? inputOffset : 0;
    const bufferLength = fastArgs ? inputLength : intBuffer.length;
    if (bufferLength === 0) {
      this.error = "Zero buffer length";
      return -1;
    }
    if (intBuffer[baseIndex] === 255) {
      this.error = "Length block 0xFF is reserved by standard";
      return -1;
    }
    this.isIndefiniteForm = intBuffer[baseIndex] === 128;
    if (this.isIndefiniteForm) {
      this.blockLength = 1;
      return inputOffset + this.blockLength;
    }
    this.longFormUsed = !!(intBuffer[baseIndex] & 128);
    if (this.longFormUsed === false) {
      this.length = intBuffer[baseIndex];
      this.blockLength = 1;
      return inputOffset + this.blockLength;
    }
    const count = intBuffer[baseIndex] & 127;
    if (count > 8) {
      this.error = "Too big integer";
      return -1;
    }
    if (count + 1 > bufferLength) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }
    const lenOffset = inputOffset + 1;
    const lengthBufferView = view.subarray(lenOffset, lenOffset + count);
    if (lengthBufferView[count - 1] === 0) this.warnings.push("Needlessly long encoded length");
    this.length = utilFromBase(lengthBufferView, 8);
    if (this.longFormUsed && this.length <= 127) this.warnings.push("Unnecessary usage of long length form");
    this.blockLength = count + 1;
    return inputOffset + this.blockLength;
  }
  toBER(sizeOnly = false) {
    let retBuf;
    let retView;
    if (this.length > 127) this.longFormUsed = true;
    if (this.isIndefiniteForm) {
      retBuf = new ArrayBuffer(1);
      if (sizeOnly === false) {
        retView = new Uint8Array(retBuf);
        retView[0] = 128;
      }
      return retBuf;
    }
    if (this.longFormUsed) {
      const encodedBuf = utilToBase(this.length, 8);
      if (encodedBuf.byteLength > 127) {
        this.error = "Too big length";
        return EMPTY_BUFFER;
      }
      retBuf = new ArrayBuffer(encodedBuf.byteLength + 1);
      if (sizeOnly) return retBuf;
      const encodedView = new Uint8Array(encodedBuf);
      retView = new Uint8Array(retBuf);
      retView[0] = encodedBuf.byteLength | 128;
      for (let i = 0; i < encodedBuf.byteLength; i++) retView[i + 1] = encodedView[i];
      return retBuf;
    }
    retBuf = new ArrayBuffer(1);
    if (sizeOnly === false) {
      retView = new Uint8Array(retBuf);
      retView[0] = this.length;
    }
    return retBuf;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      isIndefiniteForm: this.isIndefiniteForm,
      longFormUsed: this.longFormUsed,
      length: this.length
    };
  }
};
LocalLengthBlock.NAME = "lengthBlock";
var ORIGINAL_LOCAL_LENGTH_TO_BER = LocalLengthBlock.prototype.toBER;
var ORIGINAL_LOCAL_LENGTH_FROM_BER = LocalLengthBlock.prototype.fromBER;
var typeStore = {};
var _a$y;
var _b;
var _c;
var originalUint8ArraySliceInfo = findMethod(Uint8Array.prototype, "slice");
var originalUint8ArrayConstructor = (_a$y = Object.getOwnPropertyDescriptor(Uint8Array.prototype, "constructor")) === null || _a$y === void 0 ? void 0 : _a$y.value;
var originalArrayIterator = (_b = Object.getOwnPropertyDescriptor(Array.prototype, Symbol.iterator)) === null || _b === void 0 ? void 0 : _b.value;
var intrinsicTypedArrayByteLength = (_c = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "byteLength")) === null || _c === void 0 ? void 0 : _c.get;
var BUILTIN_DISPATCH_PAYLOAD_THRESHOLD = 16384;
var BUILTIN_DISPATCH_MAX_DEPTH = 64;
var builtinRegistry;
function registerBuiltinEncoder(builtinConstructors, internals) {
  const current = builtinRegistry;
  const nextInternals = internals || current;
  if (!nextInternals) {
    builtinRegistry = void 0;
    return;
  }
  builtinRegistry = {
    ...nextInternals,
    ...builtinConstructors
  };
}
__name(registerBuiltinEncoder, "registerBuiltinEncoder");
function dataProperty(object, name) {
  const descriptor = Object.getOwnPropertyDescriptor(object, name);
  if (!descriptor || !("value" in descriptor)) return void 0;
  return descriptor.value;
}
__name(dataProperty, "dataProperty");
function intrinsicPayloadByteLength(value) {
  if (!intrinsicTypedArrayByteLength || !value || typeof value !== "object") return void 0;
  try {
    const byteLength = intrinsicTypedArrayByteLength.call(value);
    return typeof byteLength === "number" ? byteLength : void 0;
  } catch {
    return void 0;
  }
}
__name(intrinsicPayloadByteLength, "intrinsicPayloadByteLength");
function largePayloadOrChain(block, depth) {
  if (depth > BUILTIN_DISPATCH_MAX_DEPTH || !block || typeof block !== "object") return false;
  const valueBlockDescriptor = Object.getOwnPropertyDescriptor(block, "valueBlock");
  if (!valueBlockDescriptor || !("value" in valueBlockDescriptor)) return false;
  const valueBlock = valueBlockDescriptor.value;
  if (!valueBlock || typeof valueBlock !== "object") return false;
  const payloadDescriptor = Object.getOwnPropertyDescriptor(valueBlock, "valueHexView");
  if (payloadDescriptor) {
    if (!("value" in payloadDescriptor)) return false;
    const byteLength = intrinsicPayloadByteLength(payloadDescriptor.value);
    return byteLength !== void 0 && byteLength >= BUILTIN_DISPATCH_PAYLOAD_THRESHOLD;
  }
  const valuesDescriptor = Object.getOwnPropertyDescriptor(valueBlock, "value");
  if (!valuesDescriptor || !("value" in valuesDescriptor) || !Array.isArray(valuesDescriptor.value)) return false;
  const values = valuesDescriptor.value;
  const lengthDescriptor = Object.getOwnPropertyDescriptor(values, "length");
  if (!lengthDescriptor || !("value" in lengthDescriptor) || lengthDescriptor.value !== 1) return false;
  const indexDescriptor = Object.getOwnPropertyDescriptor(values, "0");
  if (!indexDescriptor || !("value" in indexDescriptor)) return false;
  return largePayloadOrChain(indexDescriptor.value, depth + 1);
}
__name(largePayloadOrChain, "largePayloadOrChain");
function shouldUseBuiltinEncoder(block) {
  try {
    return largePayloadOrChain(block, 0);
  } catch {
    return false;
  }
}
__name(shouldUseBuiltinEncoder, "shouldUseBuiltinEncoder");
function sameDataMethod(current, original) {
  return !!current && "value" in current && current.value === original && current.writable === true && current.enumerable === false && current.configurable === true;
}
__name(sameDataMethod, "sameDataMethod");
function writerMethodsStable(registry) {
  return sameDataMethod(Object.getOwnPropertyDescriptor(registry.ViewWriter.prototype, "write"), registry.originalWriterWrite) && sameDataMethod(Object.getOwnPropertyDescriptor(registry.ViewWriter.prototype, "final"), registry.originalWriterFinal);
}
__name(writerMethodsStable, "writerMethodsStable");
function findMethod(prototype, name) {
  let current = prototype;
  while (current) {
    const descriptor = Object.getOwnPropertyDescriptor(current, name);
    if (descriptor) {
      if ("value" in descriptor && typeof descriptor.value === "function") {
        return {
          declaringPrototype: current,
          method: descriptor.value
        };
      }
      return void 0;
    }
    current = Object.getPrototypeOf(current);
  }
  return void 0;
}
__name(findMethod, "findMethod");
function stableInheritedMethod(prototype, name, original) {
  if (!original) return false;
  let current = prototype;
  while (current) {
    const descriptor = Object.getOwnPropertyDescriptor(current, name);
    if (current === original.declaringPrototype) {
      return !!descriptor && "value" in descriptor && descriptor.value === original.method;
    }
    if (descriptor) return false;
    current = Object.getPrototypeOf(current);
  }
  return false;
}
__name(stableInheritedMethod, "stableInheritedMethod");
function prototypeMethod(object, prototype, name, expected) {
  if (Object.prototype.hasOwnProperty.call(object, name)) return false;
  if (Object.getPrototypeOf(object) !== prototype) return false;
  const descriptor = Object.getOwnPropertyDescriptor(prototype, name);
  return !!descriptor && "value" in descriptor && descriptor.value === expected;
}
__name(prototypeMethod, "prototypeMethod");
function inheritedMethod(object, name, expected, primitiveConstructor) {
  if (Object.prototype.hasOwnProperty.call(object, name)) return false;
  const prototype = Object.getPrototypeOf(object);
  const originalPrimitiveValuePrototype = Object.getPrototypeOf(primitiveConstructor.prototype);
  if (prototype !== primitiveConstructor.prototype || Object.getPrototypeOf(prototype) !== originalPrimitiveValuePrototype) {
    return false;
  }
  const descriptor = prototype && Object.getOwnPropertyDescriptor(prototype, name);
  if (descriptor) return false;
  const parentDescriptor = Object.getOwnPropertyDescriptor(originalPrimitiveValuePrototype, name);
  return !!parentDescriptor && "value" in parentDescriptor && parentDescriptor.value === expected;
}
__name(inheritedMethod, "inheritedMethod");
function plainPayload(value, allowEmpty = false) {
  if (!(value instanceof Uint8Array) || Object.getPrototypeOf(value) !== Uint8Array.prototype) return void 0;
  for (const name of [
    "buffer",
    "byteOffset",
    "byteLength",
    "length",
    "slice",
    "constructor"
  ]) {
    if (Object.prototype.hasOwnProperty.call(value, name)) return void 0;
  }
  const constructorDescriptor = Object.getOwnPropertyDescriptor(Uint8Array.prototype, "constructor");
  if (!constructorDescriptor || !("value" in constructorDescriptor) || constructorDescriptor.value !== originalUint8ArrayConstructor) return void 0;
  if (!stableInheritedMethod(Uint8Array.prototype, "slice", originalUint8ArraySliceInfo)) return void 0;
  try {
    const buffer = value.buffer;
    if (!(buffer instanceof ArrayBuffer) || Object.getPrototypeOf(buffer) !== ArrayBuffer.prototype) return void 0;
    if (Object.prototype.hasOwnProperty.call(buffer, "byteLength")) return void 0;
    if (value.byteLength !== value.length || !allowEmpty && value.byteLength === 0) return void 0;
    if (value.byteOffset < 0 || value.byteOffset + value.byteLength > buffer.byteLength) return void 0;
  } catch {
    return void 0;
  }
  return value;
}
__name(plainPayload, "plainPayload");
function validIdBlock(block, constructed, registry) {
  if (Object.getPrototypeOf(block) !== registry.LocalIdentificationBlock.prototype) return false;
  if (!prototypeMethod(block, registry.LocalIdentificationBlock.prototype, "toBER", registry.originalIdentificationToBER)) return false;
  const tagClass = dataProperty(block, "tagClass");
  const tagNumber = dataProperty(block, "tagNumber");
  const isConstructed2 = dataProperty(block, "isConstructed");
  const isHexOnly = dataProperty(block, "isHexOnly");
  const valueHexView = dataProperty(block, "valueHexView");
  if (typeof tagClass !== "number" || !Number.isInteger(tagClass) || tagClass < 1 || tagClass > 4) return false;
  if (typeof tagNumber !== "number" || !Number.isInteger(tagNumber) || tagNumber < 0) return false;
  if (isConstructed2 !== constructed || typeof isHexOnly !== "boolean") return false;
  if (isHexOnly) return !!plainPayload(valueHexView);
  return Number.isSafeInteger(tagNumber);
}
__name(validIdBlock, "validIdBlock");
function validLengthBlock(block, allowIndefinite, registry) {
  if (Object.getPrototypeOf(block) !== registry.LocalLengthBlock.prototype) return false;
  if (!prototypeMethod(block, registry.LocalLengthBlock.prototype, "toBER", registry.originalLengthToBER)) return false;
  const indefinite = dataProperty(block, "isIndefiniteForm");
  const longForm = dataProperty(block, "longFormUsed");
  const lengthDescriptor = Object.getOwnPropertyDescriptor(block, "length");
  const length = lengthDescriptor && "value" in lengthDescriptor ? lengthDescriptor.value : void 0;
  const longFormDescriptor = Object.getOwnPropertyDescriptor(block, "longFormUsed");
  return typeof indefinite === "boolean" && (indefinite === false || allowIndefinite) && typeof longForm === "boolean" && !!longFormDescriptor && "value" in longFormDescriptor && longFormDescriptor.writable === true && !!lengthDescriptor && "value" in lengthDescriptor && lengthDescriptor.writable === true && typeof length === "number" && Number.isSafeInteger(length) && length >= 0;
}
__name(validLengthBlock, "validLengthBlock");
function validBaseBlock(block, isConstructed2, registry) {
  const idBlock = dataProperty(block, "idBlock");
  const lenBlock = dataProperty(block, "lenBlock");
  return !!idBlock && !!lenBlock && validIdBlock(idBlock, isConstructed2, registry) && validLengthBlock(lenBlock, isConstructed2, registry);
}
__name(validBaseBlock, "validBaseBlock");
function constructedChild(block, registry) {
  const valueBlock = dataProperty(block, "valueBlock");
  if (!valueBlock || Object.getPrototypeOf(valueBlock) !== registry.LocalConstructedValueBlock.prototype) return void 0;
  if (!prototypeMethod(valueBlock, registry.LocalConstructedValueBlock.prototype, "toBER", registry.originalConstructedToBER)) return void 0;
  const values = dataProperty(valueBlock, "value");
  if (!Array.isArray(values) || Object.getPrototypeOf(values) !== Array.prototype) return void 0;
  const lengthDescriptor = Object.getOwnPropertyDescriptor(values, "length");
  if (!lengthDescriptor || !("value" in lengthDescriptor) || lengthDescriptor.value !== 1) return void 0;
  if (Object.prototype.hasOwnProperty.call(values, Symbol.iterator)) return void 0;
  const iteratorDescriptor = Object.getOwnPropertyDescriptor(Array.prototype, Symbol.iterator);
  if (!iteratorDescriptor || !("value" in iteratorDescriptor) || iteratorDescriptor.value !== originalArrayIterator) return void 0;
  const indexDescriptor = Object.getOwnPropertyDescriptor(values, "0");
  if (!indexDescriptor || !("value" in indexDescriptor)) return void 0;
  if (Object.getOwnPropertyNames(values).length !== 2) return void 0;
  return indexDescriptor.value;
}
__name(constructedChild, "constructedChild");
function bitPayload(block, registry) {
  const valueBlock = dataProperty(block, "valueBlock");
  if (!valueBlock || Object.getPrototypeOf(valueBlock) !== registry.LocalBitStringValueBlock.prototype) return void 0;
  if (!prototypeMethod(valueBlock, registry.LocalBitStringValueBlock.prototype, "toBER", registry.originalBitStringToBER)) return void 0;
  if (dataProperty(valueBlock, "isConstructed") !== false) return void 0;
  const unusedBits = dataProperty(valueBlock, "unusedBits");
  if (typeof unusedBits !== "number" || !Number.isInteger(unusedBits) || unusedBits < 0 || unusedBits > 7) return void 0;
  const payload = plainPayload(dataProperty(valueBlock, "valueHexView"), true);
  if (!payload) return void 0;
  return {
    payload,
    prefix: Uint8Array.of(payload.byteLength ? unusedBits : 0)
  };
}
__name(bitPayload, "bitPayload");
function primitivePayload(block, kind, registry) {
  const valueBlock = dataProperty(block, "valueBlock");
  if (!valueBlock) return void 0;
  if (kind === "integer") {
    if (Object.getPrototypeOf(valueBlock) !== registry.LocalIntegerValueBlock.prototype) return void 0;
    if (!prototypeMethod(valueBlock, registry.LocalIntegerValueBlock.prototype, "toBER", registry.originalIntegerToBER)) return void 0;
  } else if (kind === "octet") {
    if (Object.getPrototypeOf(valueBlock) !== registry.LocalOctetStringValueBlock.prototype) return void 0;
    if (!prototypeMethod(valueBlock, registry.LocalOctetStringValueBlock.prototype, "toBER", registry.originalOctetStringToBER)) return void 0;
    if (dataProperty(valueBlock, "isConstructed") !== false) return void 0;
  } else {
    if (Object.getPrototypeOf(valueBlock) !== registry.LocalPrimitiveValueBlock.prototype) return void 0;
    if (!inheritedMethod(valueBlock, "toBER", registry.originalPrimitiveToBER, registry.LocalPrimitiveValueBlock)) return void 0;
  }
  if (kind === "primitive" && dataProperty(valueBlock, "isHexOnly") !== true) return void 0;
  if (typeof dataProperty(valueBlock, "isHexOnly") !== "boolean") return void 0;
  return plainPayload(dataProperty(valueBlock, "valueHexView"));
}
__name(primitivePayload, "primitivePayload");
function validOuterMethod(block, registry) {
  if (Object.prototype.hasOwnProperty.call(block, "toBER")) return false;
  let prototype = block;
  while (prototype) {
    const descriptor = Object.getOwnPropertyDescriptor(prototype, "toBER");
    if (descriptor) return "value" in descriptor && descriptor.value === registry.originalBaseBlockToBER;
    prototype = Object.getPrototypeOf(prototype);
  }
  return false;
}
__name(validOuterMethod, "validOuterMethod");
function isPrimitive(block, type, registry) {
  const constructor = registry[type];
  return !!constructor && Object.getPrototypeOf(block) === constructor.prototype;
}
__name(isPrimitive, "isPrimitive");
function isConstructed(block, registry) {
  return Object.getPrototypeOf(block) === registry.Sequence.prototype || Object.getPrototypeOf(block) === registry.Set.prototype || Object.getPrototypeOf(block) === registry.Constructed.prototype;
}
__name(isConstructed, "isConstructed");
function inspectNode(block, depth, registry) {
  if (depth > BUILTIN_DISPATCH_MAX_DEPTH || !block || typeof block !== "object") return void 0;
  try {
    if (!validOuterMethod(block, registry)) return void 0;
    const primitiveKind = isPrimitive(block, "BitString", registry) ? "bit" : isPrimitive(block, "Integer", registry) ? "integer" : isPrimitive(block, "OctetString", registry) ? "octet" : isPrimitive(block, "Primitive", registry) ? "primitive" : void 0;
    const constructed = primitiveKind === void 0 && isConstructed(block, registry);
    if (!primitiveKind && !constructed) return void 0;
    if (!validBaseBlock(block, constructed, registry)) return void 0;
    const idBlock = dataProperty(block, "idBlock");
    const lenBlock = dataProperty(block, "lenBlock");
    if (!idBlock || !lenBlock) return void 0;
    if (primitiveKind) {
      const bit = primitiveKind === "bit" ? bitPayload(block, registry) : void 0;
      const payload = primitiveKind === "bit" ? bit === null || bit === void 0 ? void 0 : bit.payload : primitivePayload(block, primitiveKind, registry);
      return payload ? {
        block,
        kind: primitiveKind,
        idBlock,
        lenBlock,
        indefinite: false,
        payload,
        prefix: bit === null || bit === void 0 ? void 0 : bit.prefix
      } : void 0;
    }
    const child = constructedChild(block, registry);
    const validatedChild = child && inspectNode(child, depth + 1, registry);
    const indefinite = dataProperty(lenBlock, "isIndefiniteForm");
    return validatedChild ? {
      block,
      kind: "constructed",
      idBlock,
      lenBlock,
      indefinite: indefinite === true,
      child: validatedChild
    } : void 0;
  } catch {
    return void 0;
  }
}
__name(inspectNode, "inspectNode");
function buildNode(node, sizeOnly, registry) {
  var _a3, _b2;
  const id = Reflect.apply(registry.originalIdentificationToBER, node.idBlock, [
    sizeOnly
  ]);
  if (!(id instanceof ArrayBuffer) || id.byteLength === 0) throw TypeError("Built-in identifier encoding failed");
  let payload;
  if (node.kind === "constructed") {
    payload = buildNode(node.child, sizeOnly, registry);
  } else {
    payload = node.payload;
  }
  const length = (payload instanceof Uint8Array ? payload.byteLength : payload.total) + ((_b2 = (_a3 = node.prefix) === null || _a3 === void 0 ? void 0 : _a3.byteLength) !== null && _b2 !== void 0 ? _b2 : 0);
  let len;
  if (node.indefinite) {
    len = Uint8Array.of(128).buffer;
  } else {
    node.lenBlock.length = length;
    len = Reflect.apply(registry.originalLengthToBER, node.lenBlock, [
      sizeOnly
    ]);
    if (!(len instanceof ArrayBuffer) || len.byteLength === 0) throw TypeError("Built-in length encoding failed");
  }
  const total = id.byteLength + len.byteLength + length + (node.indefinite ? 2 : 0);
  if (!Number.isSafeInteger(total)) throw RangeError("Built-in encoding is too large");
  return {
    id,
    len,
    payload,
    length,
    total,
    indefinite: node.indefinite,
    prefix: node.prefix
  };
}
__name(buildNode, "buildNode");
function flatten(node, output, offset, sizeOnly) {
  output.set(new Uint8Array(node.id), offset);
  offset += node.id.byteLength;
  output.set(new Uint8Array(node.len), offset);
  offset += node.len.byteLength;
  if (node.prefix) {
    if (!sizeOnly) output.set(node.prefix, offset);
    offset += node.prefix.byteLength;
  }
  if (node.payload instanceof Uint8Array) {
    if (!sizeOnly) output.set(node.payload, offset);
    offset += node.payload.byteLength;
  } else {
    offset = flatten(node.payload, output, offset, sizeOnly);
  }
  if (node.indefinite) offset += 2;
  return offset;
}
__name(flatten, "flatten");
function tryEncodeBuiltin(block, sizeOnly = false) {
  const registry = builtinRegistry;
  if (!registry || !writerMethodsStable(registry)) return void 0;
  const validated = inspectNode(block, 0, registry);
  if (!validated) return void 0;
  const node = buildNode(validated, sizeOnly, registry);
  const output = new Uint8Array(node.total);
  flatten(node, output, 0, sizeOnly);
  return output.buffer;
}
__name(tryEncodeBuiltin, "tryEncodeBuiltin");
var BaseBlock = class extends LocalBaseBlock {
  static {
    __name(this, "BaseBlock");
  }
  constructor({ name = EMPTY_STRING, optional = false, primitiveSchema, ...parameters } = {}, valueBlockType) {
    super(parameters);
    this.name = name;
    this.optional = optional;
    if (primitiveSchema) {
      this.primitiveSchema = primitiveSchema;
    }
    this.idBlock = new LocalIdentificationBlock(parameters);
    this.lenBlock = new LocalLengthBlock(parameters);
    this.valueBlock = valueBlockType ? new valueBlockType(parameters) : new ValueBlock(parameters);
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length, context);
    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }
    if (!this.idBlock.error.length) this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length) this.blockLength += this.lenBlock.blockLength;
    if (!this.valueBlock.error.length) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  }
  toBER(sizeOnly, writer) {
    const _writer = writer || new ViewWriter();
    if (!writer) {
      prepareIndefiniteForm(this);
      if (sizeOnly === true || sizeOnly === false || sizeOnly === void 0) {
        if (shouldUseBuiltinEncoder(this)) {
          const encoded = tryEncodeBuiltin(this, sizeOnly === true);
          if (encoded) return encoded;
        }
      }
    }
    const idBlockBuf = this.idBlock.toBER(sizeOnly);
    _writer.write(idBlockBuf);
    if (this.lenBlock.isIndefiniteForm) {
      _writer.write(new Uint8Array([
        128
      ]).buffer);
      this.valueBlock.toBER(sizeOnly, _writer);
      _writer.write(new ArrayBuffer(2));
    } else {
      const valueBlockBuf = this.valueBlock.toBER(sizeOnly);
      this.lenBlock.length = valueBlockBuf.byteLength;
      const lenBlockBuf = this.lenBlock.toBER(sizeOnly);
      _writer.write(lenBlockBuf);
      _writer.write(valueBlockBuf);
    }
    if (!writer) {
      return _writer.final();
    }
    return EMPTY_BUFFER;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      idBlock: this.idBlock.toJSON(),
      lenBlock: this.lenBlock.toJSON(),
      valueBlock: this.valueBlock.toJSON(),
      name: this.name,
      optional: this.optional
    };
    if (this.primitiveSchema) object.primitiveSchema = this.primitiveSchema.toJSON();
    return object;
  }
  toString(encoding = "ascii") {
    if (encoding === "ascii") {
      return this.onAsciiEncoding();
    }
    return Convert.ToHex(this.toBER());
  }
  onAsciiEncoding() {
    const name = this.constructor.NAME;
    const value = Convert.ToHex(this.valueBlock.valueBeforeDecodeView);
    return `${name} : ${value}`;
  }
  isEqual(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof this.constructor)) {
      return false;
    }
    const thisRaw = this.toBER();
    const otherRaw = other.toBER();
    return isEqualBuffer(thisRaw, otherRaw);
  }
};
BaseBlock.NAME = "BaseBlock";
var ORIGINAL_BASE_BLOCK_TO_BER = BaseBlock.prototype.toBER;
function prepareIndefiniteForm(baseBlock) {
  var _a3;
  if (baseBlock instanceof typeStore.Constructed) {
    for (const value of baseBlock.valueBlock.value) {
      if (prepareIndefiniteForm(value)) {
        baseBlock.lenBlock.isIndefiniteForm = true;
      }
    }
  }
  return !!((_a3 = baseBlock.lenBlock) === null || _a3 === void 0 ? void 0 : _a3.isIndefiniteForm);
}
__name(prepareIndefiniteForm, "prepareIndefiniteForm");
var BaseStringBlock = class extends BaseBlock {
  static {
    __name(this, "BaseStringBlock");
  }
  getValue() {
    return this.valueBlock.value;
  }
  setValue(value) {
    this.valueBlock.value = value;
  }
  constructor({ value = EMPTY_STRING, ...parameters } = {}, stringValueBlockType) {
    super(parameters, stringValueBlockType);
    if (value) {
      this.fromString(value);
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length);
    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }
    this.fromBuffer(this.valueBlock.valueHexView);
    if (!this.idBlock.error.length) this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length) this.blockLength += this.lenBlock.blockLength;
    if (!this.valueBlock.error.length) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : '${this.valueBlock.value}'`;
  }
};
BaseStringBlock.NAME = "BaseStringBlock";
var _a$x;
var LocalPrimitiveValueBlock = class extends HexBlock(ValueBlock) {
  static {
    __name(this, "LocalPrimitiveValueBlock");
  }
  constructor({ isHexOnly = true, ...parameters } = {}) {
    super(parameters);
    this.isHexOnly = isHexOnly;
  }
};
LocalPrimitiveValueBlock.NAME = "PrimitiveValueBlock";
var ORIGINAL_LOCAL_PRIMITIVE_TO_BER = (_a$x = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(LocalPrimitiveValueBlock.prototype), "toBER")) === null || _a$x === void 0 ? void 0 : _a$x.value;
var _a$w;
var Primitive = class extends BaseBlock {
  static {
    __name(this, "Primitive");
  }
  constructor(parameters = {}) {
    super(parameters, LocalPrimitiveValueBlock);
    this.idBlock.isConstructed = false;
  }
};
_a$w = Primitive;
(() => {
  typeStore.Primitive = _a$w;
})();
Primitive.NAME = "PRIMITIVE";
var fastParserRegistry;
function registerFastParser(constructors) {
  fastParserRegistry = {
    Integer: constructors.Integer,
    Null: constructors.Null,
    Sequence: constructors.Sequence
  };
}
__name(registerFastParser, "registerFastParser");
function fastParserContext(context) {
  const nodes = Object.getOwnPropertyDescriptor(context, "nodesCount");
  const maxNodes = Object.getOwnPropertyDescriptor(context, "maxNodes");
  const maxContentLength = Object.getOwnPropertyDescriptor(context, "maxContentLength");
  if (!nodes || !("value" in nodes) || nodes.writable !== true) return false;
  if (!maxNodes || !("value" in maxNodes) || !maxContentLength || !("value" in maxContentLength)) return false;
  return typeof nodes.value === "number" && Number.isSafeInteger(nodes.value) && nodes.value >= 0 && typeof maxNodes.value === "number" && Number.isSafeInteger(maxNodes.value) && maxNodes.value >= 0 && typeof maxContentLength.value === "number" && Number.isSafeInteger(maxContentLength.value) && maxContentLength.value >= 0 && nodes.value < maxNodes.value;
}
__name(fastParserContext, "fastParserContext");
function fastParserType(store, name, value) {
  const descriptor = Object.getOwnPropertyDescriptor(store, name);
  return !!descriptor && "value" in descriptor && descriptor.value === value;
}
__name(fastParserType, "fastParserType");
function tryFastFromBER(inputBuffer, inputOffset, inputLength, context) {
  const registry = fastParserRegistry;
  if (!registry) return void 0;
  let Constructor;
  let length = 0;
  try {
    if (Object.getPrototypeOf(inputBuffer) !== Uint8Array.prototype) return void 0;
    if (!Number.isSafeInteger(inputOffset) || inputOffset < 0 || !Number.isSafeInteger(inputLength) || inputLength < 2) {
      return void 0;
    }
    if (inputOffset > inputBuffer.byteLength || inputLength > inputBuffer.byteLength - inputOffset) return void 0;
    const tag = inputBuffer[inputOffset];
    if (tag !== 2 && tag !== 5 && tag !== 48) return void 0;
    length = inputBuffer[inputOffset + 1];
    if (length >= 128 || length > inputLength - 2) return void 0;
    if (tag === 5 && length !== 0) return void 0;
    if (!fastParserContext(context)) return void 0;
    if (length > Object.getOwnPropertyDescriptor(context, "maxContentLength").value) {
      return void 0;
    }
    const constructorName = tag === 2 ? "Integer" : tag === 5 ? "Null" : "Sequence";
    Constructor = registry[constructorName];
    if (!fastParserType(typeStore, constructorName, Constructor)) return void 0;
    const identificationFromBER = Object.getOwnPropertyDescriptor(LocalIdentificationBlock.prototype, "fromBER");
    const lengthFromBER = Object.getOwnPropertyDescriptor(LocalLengthBlock.prototype, "fromBER");
    if (!identificationFromBER || !("value" in identificationFromBER) || identificationFromBER.value !== ORIGINAL_LOCAL_IDENTIFICATION_FROM_BER || !lengthFromBER || !("value" in lengthFromBER) || lengthFromBER.value !== ORIGINAL_LOCAL_LENGTH_FROM_BER) return void 0;
  } catch {
    return void 0;
  }
  if (!Constructor) return void 0;
  const result = new Constructor();
  result.idBlock.tagClass = 1;
  result.idBlock.tagNumber = inputBuffer[inputOffset] & 31;
  result.idBlock.isConstructed = inputBuffer[inputOffset] === 48;
  result.idBlock.isHexOnly = false;
  result.idBlock.blockLength = 1;
  result.lenBlock.isIndefiniteForm = false;
  result.lenBlock.longFormUsed = false;
  result.lenBlock.length = length;
  result.lenBlock.blockLength = 1;
  context.nodesCount += 1;
  const resultOffset = result.fromBER(inputBuffer, inputOffset + 2, length, context);
  result.valueBeforeDecodeView = inputBuffer.subarray(inputOffset, inputOffset + result.blockLength);
  return {
    offset: resultOffset,
    result
  };
}
__name(tryFastFromBER, "tryFastFromBER");
var DEFAULT_MAX_DEPTH = 100;
var DEFAULT_MAX_NODES = 1e4;
var DEFAULT_MAX_CONTENT_LENGTH = 16 * 1024 * 1024;
var MAX_DEPTH_EXCEEDED_ERROR = "Maximum ASN.1 nesting depth exceeded";
var MAX_NODES_EXCEEDED_ERROR = "Maximum ASN.1 node count exceeded";
var MAX_CONTENT_LENGTH_EXCEEDED_ERROR = "Maximum ASN.1 content length exceeded";
function createFromBerContext(options = {}) {
  var _a3, _b2, _c2, _d;
  return {
    depth: 0,
    maxDepth: (_a3 = options.maxDepth) !== null && _a3 !== void 0 ? _a3 : DEFAULT_MAX_DEPTH,
    nodesCount: 0,
    maxNodes: (_b2 = options.maxNodes) !== null && _b2 !== void 0 ? _b2 : DEFAULT_MAX_NODES,
    maxContentLength: (_c2 = options.maxContentLength) !== null && _c2 !== void 0 ? _c2 : DEFAULT_MAX_CONTENT_LENGTH,
    parseEmbedded: (_d = options.parseEmbedded) !== null && _d !== void 0 ? _d : true
  };
}
__name(createFromBerContext, "createFromBerContext");
function createErrorResult(error) {
  const result = new BaseBlock({}, ValueBlock);
  result.error = error;
  return {
    offset: -1,
    result
  };
}
__name(createErrorResult, "createErrorResult");
function checkNodesLimit(context) {
  context.nodesCount += 1;
  if (context.nodesCount > context.maxNodes) {
    return MAX_NODES_EXCEEDED_ERROR;
  }
  return void 0;
}
__name(checkNodesLimit, "checkNodesLimit");
function checkContentLengthLimit(inputLength, context) {
  if (inputLength > context.maxContentLength) {
    return MAX_CONTENT_LENGTH_EXCEEDED_ERROR;
  }
  return void 0;
}
__name(checkContentLengthLimit, "checkContentLengthLimit");
function localFromBERWithChildContext(inputBuffer, inputOffset, inputLength, context) {
  const childDepth = context.depth + 1;
  if (childDepth > context.maxDepth) {
    return createErrorResult(MAX_DEPTH_EXCEEDED_ERROR);
  }
  context.depth = childDepth;
  try {
    return localFromBER(inputBuffer, inputOffset, inputLength, context);
  } finally {
    context.depth -= 1;
  }
}
__name(localFromBERWithChildContext, "localFromBERWithChildContext");
function localChangeType(inputObject, newType) {
  if (inputObject instanceof newType) {
    return inputObject;
  }
  const newObject = new newType();
  newObject.idBlock = inputObject.idBlock;
  newObject.lenBlock = inputObject.lenBlock;
  newObject.warnings = inputObject.warnings;
  newObject.valueBeforeDecodeView = inputObject.valueBeforeDecodeView;
  return newObject;
}
__name(localChangeType, "localChangeType");
function localFromBER(inputBuffer, inputOffset = 0, inputLength = inputBuffer.length, context = createFromBerContext()) {
  const fastResult = tryFastFromBER(inputBuffer, inputOffset, inputLength, context);
  if (fastResult) return fastResult;
  const incomingOffset = inputOffset;
  let returnObject = new BaseBlock({}, ValueBlock);
  if (!checkBufferParams(returnObject, inputBuffer, inputOffset, inputLength)) {
    return {
      offset: -1,
      result: returnObject
    };
  }
  const fastArgs = Number.isInteger(inputOffset) && Number.isInteger(inputLength);
  if (fastArgs ? inputLength === 0 : inputBuffer.subarray(inputOffset, inputOffset + inputLength).length === 0) {
    returnObject.error = "Zero buffer length";
    return {
      offset: -1,
      result: returnObject
    };
  }
  const nodesLimitError = checkNodesLimit(context);
  if (nodesLimitError) {
    returnObject.error = nodesLimitError;
    return {
      offset: -1,
      result: returnObject
    };
  }
  let resultOffset = returnObject.idBlock.fromBER(inputBuffer, inputOffset, inputLength);
  if (returnObject.idBlock.warnings.length) {
    returnObject.warnings.concat(returnObject.idBlock.warnings);
  }
  if (resultOffset === -1) {
    returnObject.error = returnObject.idBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }
  inputOffset = resultOffset;
  inputLength -= returnObject.idBlock.blockLength;
  resultOffset = returnObject.lenBlock.fromBER(inputBuffer, inputOffset, inputLength);
  if (returnObject.lenBlock.warnings.length) {
    returnObject.warnings.concat(returnObject.lenBlock.warnings);
  }
  if (resultOffset === -1) {
    returnObject.error = returnObject.lenBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }
  inputOffset = resultOffset;
  inputLength -= returnObject.lenBlock.blockLength;
  const valueLength = returnObject.lenBlock.isIndefiniteForm ? inputLength : returnObject.lenBlock.length;
  const contentLengthError = checkContentLengthLimit(valueLength, context);
  if (contentLengthError) {
    returnObject.error = contentLengthError;
    return {
      offset: -1,
      result: returnObject
    };
  }
  if (!returnObject.idBlock.isConstructed && returnObject.lenBlock.isIndefiniteForm) {
    returnObject.error = "Indefinite length form used for primitive encoding form";
    return {
      offset: -1,
      result: returnObject
    };
  }
  let newASN1Type = BaseBlock;
  switch (returnObject.idBlock.tagClass) {
    case 1:
      if (returnObject.idBlock.tagNumber >= 37 && returnObject.idBlock.isHexOnly === false) {
        returnObject.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
        return {
          offset: -1,
          result: returnObject
        };
      }
      switch (returnObject.idBlock.tagNumber) {
        case 0:
          if (returnObject.idBlock.isConstructed && returnObject.lenBlock.length > 0) {
            returnObject.error = "Type [UNIVERSAL 0] is reserved";
            return {
              offset: -1,
              result: returnObject
            };
          }
          newASN1Type = typeStore.EndOfContent;
          break;
        case 1:
          newASN1Type = typeStore.Boolean;
          break;
        case 2:
          newASN1Type = typeStore.Integer;
          break;
        case 3:
          newASN1Type = typeStore.BitString;
          break;
        case 4:
          newASN1Type = typeStore.OctetString;
          break;
        case 5:
          newASN1Type = typeStore.Null;
          break;
        case 6:
          newASN1Type = typeStore.ObjectIdentifier;
          break;
        case 10:
          newASN1Type = typeStore.Enumerated;
          break;
        case 12:
          newASN1Type = typeStore.Utf8String;
          break;
        case 13:
          newASN1Type = typeStore.RelativeObjectIdentifier;
          break;
        case 14:
          newASN1Type = typeStore.TIME;
          break;
        case 15:
          returnObject.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
          return {
            offset: -1,
            result: returnObject
          };
        case 16:
          newASN1Type = typeStore.Sequence;
          break;
        case 17:
          newASN1Type = typeStore.Set;
          break;
        case 18:
          newASN1Type = typeStore.NumericString;
          break;
        case 19:
          newASN1Type = typeStore.PrintableString;
          break;
        case 20:
          newASN1Type = typeStore.TeletexString;
          break;
        case 21:
          newASN1Type = typeStore.VideotexString;
          break;
        case 22:
          newASN1Type = typeStore.IA5String;
          break;
        case 23:
          newASN1Type = typeStore.UTCTime;
          break;
        case 24:
          newASN1Type = typeStore.GeneralizedTime;
          break;
        case 25:
          newASN1Type = typeStore.GraphicString;
          break;
        case 26:
          newASN1Type = typeStore.VisibleString;
          break;
        case 27:
          newASN1Type = typeStore.GeneralString;
          break;
        case 28:
          newASN1Type = typeStore.UniversalString;
          break;
        case 29:
          newASN1Type = typeStore.CharacterString;
          break;
        case 30:
          newASN1Type = typeStore.BmpString;
          break;
        case 31:
          newASN1Type = typeStore.DATE;
          break;
        case 32:
          newASN1Type = typeStore.TimeOfDay;
          break;
        case 33:
          newASN1Type = typeStore.DateTime;
          break;
        case 34:
          newASN1Type = typeStore.Duration;
          break;
        default: {
          const newObject = returnObject.idBlock.isConstructed ? new typeStore.Constructed() : new typeStore.Primitive();
          newObject.idBlock = returnObject.idBlock;
          newObject.lenBlock = returnObject.lenBlock;
          newObject.warnings = returnObject.warnings;
          returnObject = newObject;
        }
      }
      break;
    case 2:
    case 3:
    case 4:
    default: {
      newASN1Type = returnObject.idBlock.isConstructed ? typeStore.Constructed : typeStore.Primitive;
    }
  }
  returnObject = localChangeType(returnObject, newASN1Type);
  resultOffset = returnObject.fromBER(inputBuffer, inputOffset, valueLength, context);
  returnObject.valueBeforeDecodeView = inputBuffer.subarray(incomingOffset, incomingOffset + returnObject.blockLength);
  return {
    offset: resultOffset,
    result: returnObject
  };
}
__name(localFromBER, "localFromBER");
function fromBER(inputBuffer, options = {}) {
  if (!inputBuffer.byteLength) {
    const result = new BaseBlock({}, ValueBlock);
    result.error = "Input buffer has zero length";
    return {
      offset: -1,
      result
    };
  }
  const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
  const normalizedInput = options.copyInput === false ? inputView : inputView.slice();
  return localFromBER(normalizedInput, 0, inputBuffer.byteLength, createFromBerContext(options));
}
__name(fromBER, "fromBER");
function checkLen(indefiniteLength, length) {
  if (indefiniteLength) {
    return 1;
  }
  return length;
}
__name(checkLen, "checkLen");
var LocalConstructedValueBlock = class extends ValueBlock {
  static {
    __name(this, "LocalConstructedValueBlock");
  }
  constructor({ value = [], isIndefiniteForm = false, ...parameters } = {}) {
    super(parameters);
    this.value = value;
    this.isIndefiniteForm = isIndefiniteForm;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    const view = BufferSourceConverter.toUint8Array(inputBuffer);
    const parseContext = context !== null && context !== void 0 ? context : createFromBerContext();
    if (!checkBufferParams(this, view, inputOffset, inputLength)) {
      return -1;
    }
    this.valueBeforeDecodeView = view.subarray(inputOffset, inputOffset + inputLength);
    if (this.valueBeforeDecodeView.length === 0) {
      this.warnings.push("Zero buffer length");
      return inputOffset;
    }
    let currentOffset = inputOffset;
    while (checkLen(this.isIndefiniteForm, inputLength) > 0) {
      const returnObject = localFromBERWithChildContext(view, currentOffset, inputLength, parseContext);
      if (returnObject.offset === -1) {
        this.error = returnObject.result.error;
        this.warnings.concat(returnObject.result.warnings);
        return -1;
      }
      currentOffset = returnObject.offset;
      this.blockLength += returnObject.result.blockLength;
      inputLength -= returnObject.result.blockLength;
      this.value.push(returnObject.result);
      if (this.isIndefiniteForm && returnObject.result.constructor.NAME === END_OF_CONTENT_NAME) {
        break;
      }
    }
    if (this.isIndefiniteForm) {
      if (this.value[this.value.length - 1].constructor.NAME === END_OF_CONTENT_NAME) {
        this.value.pop();
      } else {
        this.warnings.push("No EndOfContent block encoded");
      }
    }
    return currentOffset;
  }
  toBER(sizeOnly, writer) {
    const _writer = writer || new ViewWriter();
    for (let i = 0; i < this.value.length; i++) {
      this.value[i].toBER(sizeOnly, _writer);
    }
    if (!writer) {
      return _writer.final();
    }
    return EMPTY_BUFFER;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      isIndefiniteForm: this.isIndefiniteForm,
      value: []
    };
    for (const value of this.value) {
      object.value.push(value.toJSON());
    }
    return object;
  }
};
LocalConstructedValueBlock.NAME = "ConstructedValueBlock";
var ORIGINAL_LOCAL_CONSTRUCTED_TO_BER = LocalConstructedValueBlock.prototype.toBER;
var _a$v;
var Constructed = class extends BaseBlock {
  static {
    __name(this, "Constructed");
  }
  constructor(parameters = {}) {
    super(parameters, LocalConstructedValueBlock);
    this.idBlock.isConstructed = true;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length, context);
    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }
    if (!this.idBlock.error.length) this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length) this.blockLength += this.lenBlock.blockLength;
    if (!this.valueBlock.error.length) this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  }
  onAsciiEncoding() {
    const values = [];
    for (const value of this.valueBlock.value) {
      values.push(value.toString("ascii").split("\n").map((o) => `  ${o}`).join("\n"));
    }
    const blockName = this.idBlock.tagClass === 3 ? `[${this.idBlock.tagNumber}]` : this.constructor.NAME;
    return values.length ? `${blockName} :
${values.join("\n")}` : `${blockName} :`;
  }
};
_a$v = Constructed;
(() => {
  typeStore.Constructed = _a$v;
})();
Constructed.NAME = "CONSTRUCTED";
var LocalEndOfContentValueBlock = class extends ValueBlock {
  static {
    __name(this, "LocalEndOfContentValueBlock");
  }
  fromBER(inputBuffer, inputOffset, _inputLength) {
    return inputOffset;
  }
  toBER(_sizeOnly) {
    return EMPTY_BUFFER;
  }
};
LocalEndOfContentValueBlock.override = "EndOfContentValueBlock";
var _a$u;
var EndOfContent = class extends BaseBlock {
  static {
    __name(this, "EndOfContent");
  }
  constructor(parameters = {}) {
    super(parameters, LocalEndOfContentValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 0;
  }
};
_a$u = EndOfContent;
(() => {
  typeStore.EndOfContent = _a$u;
})();
EndOfContent.NAME = END_OF_CONTENT_NAME;
var _a$t;
var Null = class extends BaseBlock {
  static {
    __name(this, "Null");
  }
  constructor(parameters = {}) {
    super(parameters, ValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 5;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (this.lenBlock.length > 0) this.warnings.push("Non-zero length of value block for Null type");
    if (!this.idBlock.error.length) this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length) this.blockLength += this.lenBlock.blockLength;
    this.blockLength += inputLength;
    if (inputOffset + inputLength > inputBuffer.byteLength) {
      this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
      return -1;
    }
    return inputOffset + inputLength;
  }
  toBER(sizeOnly, writer) {
    const retBuf = new ArrayBuffer(2);
    if (!sizeOnly) {
      const retView = new Uint8Array(retBuf);
      retView[0] = 5;
      retView[1] = 0;
    }
    if (writer) {
      writer.write(retBuf);
    }
    return retBuf;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME}`;
  }
};
_a$t = Null;
(() => {
  typeStore.Null = _a$t;
})();
Null.NAME = "NULL";
var LocalBooleanValueBlock = class extends HexBlock(ValueBlock) {
  static {
    __name(this, "LocalBooleanValueBlock");
  }
  get value() {
    for (const octet of this.valueHexView) {
      if (octet > 0) {
        return true;
      }
    }
    return false;
  }
  set value(value) {
    this.valueHexView[0] = value ? 255 : 0;
  }
  constructor({ value, ...parameters } = {}) {
    super(parameters);
    if (parameters.valueHex) {
      this.valueHexView = BufferSourceConverter.toUint8Array(parameters.valueHex);
    } else {
      this.valueHexView = new Uint8Array(1);
    }
    if (value) {
      this.value = value;
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    this.valueHexView = inputView.subarray(inputOffset, inputOffset + inputLength);
    if (inputLength > 1) this.warnings.push("Boolean value encoded in more then 1 octet");
    this.isHexOnly = true;
    utilDecodeTC.call(this);
    this.blockLength = inputLength;
    return inputOffset + inputLength;
  }
  toBER() {
    return this.valueHexView.slice().buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.value
    };
  }
};
LocalBooleanValueBlock.NAME = "BooleanValueBlock";
var _a$s;
var Boolean2 = class extends BaseBlock {
  static {
    __name(this, "Boolean");
  }
  getValue() {
    return this.valueBlock.value;
  }
  setValue(value) {
    this.valueBlock.value = value;
  }
  constructor(parameters = {}) {
    super(parameters, LocalBooleanValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 1;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.getValue}`;
  }
};
_a$s = Boolean2;
(() => {
  typeStore.Boolean = _a$s;
})();
Boolean2.NAME = "BOOLEAN";
var LocalOctetStringValueBlock = class extends HexBlock(LocalConstructedValueBlock) {
  static {
    __name(this, "LocalOctetStringValueBlock");
  }
  constructor({ isConstructed: isConstructed2 = false, ...parameters } = {}) {
    super(parameters);
    this.isConstructed = isConstructed2;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    let resultOffset = 0;
    if (this.isConstructed) {
      this.isHexOnly = false;
      resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength, context);
      if (resultOffset === -1) return resultOffset;
      for (let i = 0; i < this.value.length; i++) {
        const currentBlockName = this.value[i].constructor.NAME;
        if (currentBlockName === END_OF_CONTENT_NAME) {
          if (this.isIndefiniteForm) break;
          else {
            this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
            return -1;
          }
        }
        if (currentBlockName !== OCTET_STRING_NAME) {
          this.error = "OCTET STRING may consists of OCTET STRINGs only";
          return -1;
        }
      }
    } else {
      this.isHexOnly = true;
      resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
      this.blockLength = inputLength;
    }
    return resultOffset;
  }
  toBER(sizeOnly, writer) {
    if (this.isConstructed) return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
    return sizeOnly ? new ArrayBuffer(this.valueHexView.byteLength) : this.valueHexView.slice().buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      isConstructed: this.isConstructed
    };
  }
};
LocalOctetStringValueBlock.NAME = "OctetStringValueBlock";
var ORIGINAL_LOCAL_OCTET_STRING_TO_BER = LocalOctetStringValueBlock.prototype.toBER;
var _a$r;
var OctetString = class extends BaseBlock {
  static {
    __name(this, "OctetString");
  }
  constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}) {
    var _b2, _c2;
    (_b2 = parameters.isConstructed) !== null && _b2 !== void 0 ? _b2 : parameters.isConstructed = !!((_c2 = parameters.value) === null || _c2 === void 0 ? void 0 : _c2.length);
    super({
      idBlock: {
        isConstructed: parameters.isConstructed,
        ...idBlock
      },
      lenBlock: {
        ...lenBlock,
        isIndefiniteForm: !!parameters.isIndefiniteForm
      },
      ...parameters
    }, LocalOctetStringValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 4;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    this.valueBlock.isConstructed = this.idBlock.isConstructed;
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    if (inputLength === 0) {
      if (this.idBlock.error.length === 0) this.blockLength += this.idBlock.blockLength;
      if (this.lenBlock.error.length === 0) this.blockLength += this.lenBlock.blockLength;
      return inputOffset;
    }
    if (!this.valueBlock.isConstructed && (context === null || context === void 0 ? void 0 : context.parseEmbedded) !== false) {
      const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
      const buf = view.subarray(inputOffset, inputOffset + inputLength);
      try {
        if (buf.byteLength) {
          const parseContext = context !== null && context !== void 0 ? context : createFromBerContext();
          const asn = localFromBERWithChildContext(buf, 0, buf.byteLength, parseContext);
          if (asn.offset !== -1 && asn.offset === inputLength) {
            this.valueBlock.value = [
              asn.result
            ];
          }
        }
      } catch {
      }
    }
    return super.fromBER(inputBuffer, inputOffset, inputLength, context);
  }
  onAsciiEncoding() {
    if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
      return Constructed.prototype.onAsciiEncoding.call(this);
    }
    const name = this.constructor.NAME;
    const value = Convert.ToHex(this.valueBlock.valueHexView);
    return `${name} : ${value}`;
  }
  getValue() {
    if (!this.idBlock.isConstructed) {
      return this.valueBlock.valueHexView.slice().buffer;
    }
    const array = [];
    for (const content of this.valueBlock.value) {
      if (content instanceof _a$r) {
        array.push(content.valueBlock.valueHexView);
      }
    }
    return BufferSourceConverter.concat(array);
  }
};
_a$r = OctetString;
(() => {
  typeStore.OctetString = _a$r;
})();
OctetString.NAME = OCTET_STRING_NAME;
var LocalBitStringValueBlock = class extends HexBlock(LocalConstructedValueBlock) {
  static {
    __name(this, "LocalBitStringValueBlock");
  }
  constructor({ unusedBits = 0, isConstructed: isConstructed2 = false, ...parameters } = {}) {
    super(parameters);
    this.unusedBits = unusedBits;
    this.isConstructed = isConstructed2;
    this.blockLength = this.valueHexView.byteLength;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    if (!inputLength) {
      return inputOffset;
    }
    let resultOffset = -1;
    if (this.isConstructed) {
      resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength, context);
      if (resultOffset === -1) return resultOffset;
      for (const value of this.value) {
        const currentBlockName = value.constructor.NAME;
        if (currentBlockName === END_OF_CONTENT_NAME) {
          if (this.isIndefiniteForm) break;
          else {
            this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
            return -1;
          }
        }
        if (currentBlockName !== BIT_STRING_NAME) {
          this.error = "BIT STRING may consists of BIT STRINGs only";
          return -1;
        }
        const valueBlock = value.valueBlock;
        if (this.unusedBits > 0 && valueBlock.unusedBits > 0) {
          this.error = 'Using of "unused bits" inside constructive BIT STRING allowed for least one only';
          return -1;
        }
        this.unusedBits = valueBlock.unusedBits;
      }
      return resultOffset;
    }
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    this.unusedBits = intBuffer[0];
    if (this.unusedBits > 7) {
      this.error = "Unused bits for BitString must be in range 0-7";
      return -1;
    }
    if (!this.unusedBits && (context === null || context === void 0 ? void 0 : context.parseEmbedded) !== false) {
      const buf = intBuffer.subarray(1);
      try {
        if (buf.byteLength) {
          const parseContext = context !== null && context !== void 0 ? context : createFromBerContext();
          const asn = localFromBERWithChildContext(buf, 0, buf.byteLength, parseContext);
          if (asn.offset !== -1 && asn.offset === inputLength - 1) {
            this.value = [
              asn.result
            ];
          }
        }
      } catch {
      }
    }
    this.valueHexView = intBuffer.subarray(1);
    this.blockLength = intBuffer.length;
    return inputOffset + inputLength;
  }
  toBER(sizeOnly, writer) {
    if (this.isConstructed) {
      return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
    }
    if (sizeOnly) {
      return new ArrayBuffer(this.valueHexView.byteLength + 1);
    }
    if (!this.valueHexView.byteLength) {
      const empty = new Uint8Array(1);
      empty[0] = 0;
      return empty.buffer;
    }
    const retView = new Uint8Array(this.valueHexView.length + 1);
    retView[0] = this.unusedBits;
    retView.set(this.valueHexView, 1);
    return retView.buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      unusedBits: this.unusedBits,
      isConstructed: this.isConstructed
    };
  }
};
LocalBitStringValueBlock.NAME = "BitStringValueBlock";
var ORIGINAL_LOCAL_BIT_STRING_TO_BER = LocalBitStringValueBlock.prototype.toBER;
var _a$q;
var BitString = class extends BaseBlock {
  static {
    __name(this, "BitString");
  }
  constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}) {
    var _b2, _c2;
    (_b2 = parameters.isConstructed) !== null && _b2 !== void 0 ? _b2 : parameters.isConstructed = !!((_c2 = parameters.value) === null || _c2 === void 0 ? void 0 : _c2.length);
    super({
      idBlock: {
        isConstructed: parameters.isConstructed,
        ...idBlock
      },
      lenBlock: {
        ...lenBlock,
        isIndefiniteForm: !!parameters.isIndefiniteForm
      },
      ...parameters
    }, LocalBitStringValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 3;
  }
  fromBER(inputBuffer, inputOffset, inputLength, context) {
    this.valueBlock.isConstructed = this.idBlock.isConstructed;
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    return super.fromBER(inputBuffer, inputOffset, inputLength, context);
  }
  onAsciiEncoding() {
    if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
      return Constructed.prototype.onAsciiEncoding.call(this);
    } else {
      const bits = [];
      const valueHex = this.valueBlock.valueHexView;
      for (const byte of valueHex) {
        bits.push(byte.toString(2).padStart(8, "0"));
      }
      const bitsStr = bits.join("");
      const name = this.constructor.NAME;
      const value = bitsStr.substring(0, bitsStr.length - this.valueBlock.unusedBits);
      return `${name} : ${value}`;
    }
  }
};
_a$q = BitString;
(() => {
  typeStore.BitString = _a$q;
})();
BitString.NAME = BIT_STRING_NAME;
function bytesToSignedBigInt(view) {
  if (!view.byteLength) return BigInt(0);
  const value = BigInt(`0x${Convert.ToHex(view)}`);
  if (view[0] & 128) return value - (BigInt(1) << BigInt(view.byteLength * 8));
  return value;
}
__name(bytesToSignedBigInt, "bytesToSignedBigInt");
function bytesToSignedDecimal(view) {
  if (typeof BigInt !== "undefined") return bytesToSignedBigInt(view).toString(10);
  const BASE = 1e7;
  const DECIMAL_DIGITS = 7;
  if (!view.byteLength) return "0";
  const negative = !!(view[0] & 128);
  let magnitude = view;
  if (negative) {
    magnitude = new Uint8Array(view.length);
    let carry = 1;
    for (let i = view.length - 1; i >= 0; i--) {
      const value = (view[i] ^ 255) + carry;
      magnitude[i] = value & 255;
      carry = value >> 8;
    }
  }
  const limbs = [
    0
  ];
  for (let index = 0; index < magnitude.length; index++) {
    let carry = magnitude[index];
    for (let i = 0; i < limbs.length; i++) {
      const value = limbs[i] * 256 + carry;
      limbs[i] = value % BASE;
      carry = Math.floor(value / BASE);
    }
    if (carry) limbs.push(carry);
  }
  let top = limbs.length - 1;
  while (top > 0 && limbs[top] === 0) top--;
  let result = String(limbs[top]);
  for (let i = top - 1; i >= 0; i--) result += String(limbs[i]).padStart(DECIMAL_DIGITS, "0");
  return negative && result !== "0" ? `-${result}` : result;
}
__name(bytesToSignedDecimal, "bytesToSignedDecimal");
var _a$p;
var LocalIntegerValueBlock = class extends HexBlock(ValueBlock) {
  static {
    __name(this, "LocalIntegerValueBlock");
  }
  setValueHex() {
    if (this.valueHexView.length >= 4) {
      this.warnings.push("Too big Integer for decoding, hex only");
      this.isHexOnly = true;
      this._valueDec = 0;
    } else {
      this.isHexOnly = false;
      if (this.valueHexView.length > 0) {
        this._valueDec = utilDecodeTC.call(this);
      }
    }
  }
  constructor({ value, ...parameters } = {}) {
    super(parameters);
    this._valueDec = 0;
    if (parameters.valueHex) {
      this.setValueHex();
    }
    if (value !== void 0) {
      this.valueDec = value;
    }
  }
  set valueDec(v) {
    this._valueDec = v;
    this.isHexOnly = false;
    this.valueHexView = new Uint8Array(utilEncodeTC(v));
  }
  get valueDec() {
    return this._valueDec;
  }
  fromDER(inputBuffer, inputOffset, inputLength, expectedLength = 0) {
    const offset = this.fromBER(inputBuffer, inputOffset, inputLength);
    if (offset === -1) return offset;
    const view = this.valueHexView;
    if (view[0] === 0 && (view[1] & 128) !== 0) {
      this.valueHexView = view.subarray(1);
    } else {
      if (expectedLength !== 0) {
        if (view.length < expectedLength) {
          if (expectedLength - view.length > 1) expectedLength = view.length + 1;
          this.valueHexView = view.subarray(expectedLength - view.length);
        }
      }
    }
    return offset;
  }
  toDER(sizeOnly = false) {
    const view = this.valueHexView;
    switch (true) {
      case (view[0] & 128) !== 0:
        {
          const updatedView = new Uint8Array(this.valueHexView.length + 1);
          updatedView[0] = 0;
          updatedView.set(view, 1);
          this.valueHexView = updatedView;
        }
        break;
      case (view[0] === 0 && (view[1] & 128) === 0):
        {
          this.valueHexView = this.valueHexView.subarray(1);
        }
        break;
    }
    return this.toBER(sizeOnly);
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
    if (resultOffset === -1) {
      return resultOffset;
    }
    this.setValueHex();
    return resultOffset;
  }
  toBER(sizeOnly) {
    return sizeOnly ? new ArrayBuffer(this.valueHexView.length) : this.valueHexView.slice().buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      valueDec: this.valueDec
    };
  }
  toString() {
    return bytesToSignedDecimal(this.valueHexView);
  }
};
_a$p = LocalIntegerValueBlock;
LocalIntegerValueBlock.NAME = "IntegerValueBlock";
(() => {
  Object.defineProperty(_a$p.prototype, "valueHex", {
    set: /* @__PURE__ */ __name(function(v) {
      this.valueHexView = new Uint8Array(v);
      this.setValueHex();
    }, "set"),
    get: /* @__PURE__ */ __name(function() {
      return this.valueHexView.slice().buffer;
    }, "get")
  });
})();
var ORIGINAL_LOCAL_INTEGER_TO_BER = LocalIntegerValueBlock.prototype.toBER;
var ORIGINAL_LOCAL_INTEGER_TO_STRING = LocalIntegerValueBlock.prototype.toString;
var _a$o;
var Integer = class extends BaseBlock {
  static {
    __name(this, "Integer");
  }
  constructor(parameters = {}) {
    super(parameters, LocalIntegerValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 2;
  }
  toBigInt() {
    assertBigInt();
    const valueBlock = this.valueBlock;
    const toString = valueBlock.toString;
    if (toString === ORIGINAL_LOCAL_INTEGER_TO_STRING) return bytesToSignedBigInt(valueBlock.valueHexView);
    return BigInt(Reflect.apply(toString, valueBlock, []));
  }
  static fromBigInt(value) {
    assertBigInt();
    const bigIntValue = BigInt(value);
    const writer = new ViewWriter();
    const hex2 = bigIntValue.toString(16).replace(/^-/, "");
    const view = new Uint8Array(Convert.FromHex(hex2));
    if (bigIntValue < 0) {
      const first = new Uint8Array(view.length + (view[0] & 128 ? 1 : 0));
      first[0] |= 128;
      const firstInt = BigInt(`0x${Convert.ToHex(first)}`);
      const secondInt = firstInt + bigIntValue;
      const second = BufferSourceConverter.toUint8Array(Convert.FromHex(secondInt.toString(16)));
      second[0] |= 128;
      writer.write(second);
    } else {
      if (view[0] & 128) {
        writer.write(new Uint8Array([
          0
        ]));
      }
      writer.write(view);
    }
    const res = new _a$o({
      valueHex: writer.final()
    });
    return res;
  }
  convertToDER() {
    const integer = new _a$o({
      valueHex: this.valueBlock.valueHexView
    });
    integer.valueBlock.toDER();
    return integer;
  }
  convertFromDER() {
    return new _a$o({
      valueHex: this.valueBlock.valueHexView[0] === 0 ? this.valueBlock.valueHexView.subarray(1) : this.valueBlock.valueHexView
    });
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.valueBlock.toString()}`;
  }
};
_a$o = Integer;
(() => {
  typeStore.Integer = _a$o;
})();
Integer.NAME = "INTEGER";
var _a$n;
var Enumerated = class extends Integer {
  static {
    __name(this, "Enumerated");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 10;
  }
};
_a$n = Enumerated;
(() => {
  typeStore.Enumerated = _a$n;
})();
Enumerated.NAME = "ENUMERATED";
var LocalSidValueBlock = class extends HexBlock(ValueBlock) {
  static {
    __name(this, "LocalSidValueBlock");
  }
  constructor({ valueDec = -1, isFirstSid = false, ...parameters } = {}) {
    super(parameters);
    this.valueDec = valueDec;
    this.isFirstSid = isFirstSid;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (!inputLength) {
      return inputOffset;
    }
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    const fastPath = this.blockLength === 0 && Number.isInteger(inputOffset) && Number.isInteger(inputLength);
    if (fastPath) {
      let sidLength = 0;
      while (sidLength < inputLength) {
        const octet = intBuffer[sidLength];
        sidLength++;
        if ((octet & 128) === 0) break;
      }
      this.blockLength = sidLength;
      this.valueHexView = new Uint8Array(sidLength);
      for (let i = 0; i < sidLength; i++) this.valueHexView[i] = intBuffer[i] & 127;
    } else {
      this.valueHexView = new Uint8Array(inputLength);
      for (let i = 0; i < inputLength; i++) {
        this.valueHexView[i] = intBuffer[i] & 127;
        this.blockLength++;
        if ((intBuffer[i] & 128) === 0) break;
      }
      const tempView = new Uint8Array(this.blockLength);
      for (let i = 0; i < this.blockLength; i++) {
        tempView[i] = this.valueHexView[i];
      }
      this.valueHexView = tempView;
    }
    if ((intBuffer[this.blockLength - 1] & 128) !== 0) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }
    if (this.valueHexView[0] === 0) this.warnings.push("Needlessly long format of SID encoding");
    if (this.blockLength <= 8) this.valueDec = utilFromBase(this.valueHexView, 7);
    else {
      this.isHexOnly = true;
      this.warnings.push("Too big SID for decoding, hex only");
    }
    return inputOffset + this.blockLength;
  }
  set valueBigInt(value) {
    assertBigInt();
    let bits = BigInt(value).toString(2);
    while (bits.length % 7) {
      bits = "0" + bits;
    }
    const bytes = new Uint8Array(bits.length / 7);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(bits.slice(i * 7, i * 7 + 7), 2) + (i + 1 < bytes.length ? 128 : 0);
    }
    this.fromBER(bytes.buffer, 0, bytes.length);
  }
  toBER(sizeOnly) {
    if (this.isHexOnly) {
      if (sizeOnly) return new ArrayBuffer(this.valueHexView.byteLength);
      const curView = this.valueHexView;
      const retView2 = new Uint8Array(this.blockLength);
      for (let i = 0; i < this.blockLength - 1; i++) retView2[i] = curView[i] | 128;
      retView2[this.blockLength - 1] = curView[this.blockLength - 1];
      return BufferSourceConverter.toArrayBuffer(retView2);
    }
    const encodedBuf = utilToBase(this.valueDec, 7);
    if (encodedBuf.byteLength === 0) {
      this.error = "Error during encoding SID value";
      return EMPTY_BUFFER;
    }
    const retView = new Uint8Array(encodedBuf.byteLength);
    if (!sizeOnly) {
      const encodedView = new Uint8Array(encodedBuf);
      const len = encodedBuf.byteLength - 1;
      for (let i = 0; i < len; i++) retView[i] = encodedView[i] | 128;
      retView[len] = encodedView[len];
    }
    return BufferSourceConverter.toArrayBuffer(retView);
  }
  toString() {
    let result = "";
    if (this.isHexOnly) result = Convert.ToHex(this.valueHexView);
    else {
      if (this.isFirstSid) {
        let sidValue = this.valueDec;
        if (this.valueDec <= 39) result = "0.";
        else {
          if (this.valueDec <= 79) {
            result = "1.";
            sidValue -= 40;
          } else {
            result = "2.";
            sidValue -= 80;
          }
        }
        result += sidValue.toString();
      } else result = this.valueDec.toString();
    }
    return result;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      valueDec: this.valueDec,
      isFirstSid: this.isFirstSid
    };
  }
};
LocalSidValueBlock.NAME = "sidBlock";
var LocalObjectIdentifierValueBlock = class extends ValueBlock {
  static {
    __name(this, "LocalObjectIdentifierValueBlock");
  }
  constructor({ value = EMPTY_STRING, ...parameters } = {}) {
    super(parameters);
    this.value = [];
    if (value) {
      this.fromString(value);
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = inputOffset;
    while (inputLength > 0) {
      const sidBlock = new LocalSidValueBlock();
      resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
      if (resultOffset === -1) {
        this.blockLength = 0;
        this.error = sidBlock.error;
        return resultOffset;
      }
      if (this.value.length === 0) sidBlock.isFirstSid = true;
      this.blockLength += sidBlock.blockLength;
      inputLength -= sidBlock.blockLength;
      this.value.push(sidBlock);
    }
    return resultOffset;
  }
  toBER(sizeOnly) {
    const retBuffers = [];
    for (let i = 0; i < this.value.length; i++) {
      const valueBuf = this.value[i].toBER(sizeOnly);
      if (valueBuf.byteLength === 0) {
        this.error = this.value[i].error;
        return EMPTY_BUFFER;
      }
      retBuffers.push(valueBuf);
    }
    return concat(retBuffers);
  }
  fromString(string) {
    this.value = [];
    let pos1 = 0;
    let pos2 = 0;
    let sid = "";
    let flag = false;
    do {
      pos2 = string.indexOf(".", pos1);
      if (pos2 === -1) sid = string.substring(pos1);
      else sid = string.substring(pos1, pos2);
      pos1 = pos2 + 1;
      if (flag) {
        const sidBlock = this.value[0];
        let plus = 0;
        switch (sidBlock.valueDec) {
          case 0:
            break;
          case 1:
            plus = 40;
            break;
          case 2:
            plus = 80;
            break;
          default:
            this.value = [];
            return;
        }
        const parsedSID = parseInt(sid, 10);
        if (isNaN(parsedSID)) return;
        sidBlock.valueDec = parsedSID + plus;
        flag = false;
      } else {
        const sidBlock = new LocalSidValueBlock();
        if (sid > Number.MAX_SAFE_INTEGER) {
          assertBigInt();
          const sidValue = BigInt(sid);
          sidBlock.valueBigInt = sidValue;
        } else {
          sidBlock.valueDec = parseInt(sid, 10);
          if (isNaN(sidBlock.valueDec)) return;
        }
        if (!this.value.length) {
          sidBlock.isFirstSid = true;
          flag = true;
        }
        this.value.push(sidBlock);
      }
    } while (pos2 !== -1);
  }
  toString() {
    let result = "";
    let isHexOnly = false;
    for (let i = 0; i < this.value.length; i++) {
      isHexOnly = this.value[i].isHexOnly;
      let sidStr = this.value[i].toString();
      if (i !== 0) result = `${result}.`;
      if (isHexOnly) {
        sidStr = `{${sidStr}}`;
        if (this.value[i].isFirstSid) result = `2.{${sidStr} - 80}`;
        else result += sidStr;
      } else result += sidStr;
    }
    return result;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      value: this.toString(),
      sidArray: []
    };
    for (let i = 0; i < this.value.length; i++) {
      object.sidArray.push(this.value[i].toJSON());
    }
    return object;
  }
};
LocalObjectIdentifierValueBlock.NAME = "ObjectIdentifierValueBlock";
var _a$m;
var ObjectIdentifier = class extends BaseBlock {
  static {
    __name(this, "ObjectIdentifier");
  }
  getValue() {
    return this.valueBlock.toString();
  }
  setValue(value) {
    this.valueBlock.fromString(value);
  }
  constructor(parameters = {}) {
    super(parameters, LocalObjectIdentifierValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 6;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.getValue()
    };
  }
};
_a$m = ObjectIdentifier;
(() => {
  typeStore.ObjectIdentifier = _a$m;
})();
ObjectIdentifier.NAME = "OBJECT IDENTIFIER";
var LocalRelativeSidValueBlock = class extends HexBlock(LocalBaseBlock) {
  static {
    __name(this, "LocalRelativeSidValueBlock");
  }
  constructor({ valueDec = 0, ...parameters } = {}) {
    super(parameters);
    this.valueDec = valueDec;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (inputLength === 0) return inputOffset;
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) return -1;
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    const fastPath = this.blockLength === 0 && Number.isInteger(inputOffset) && Number.isInteger(inputLength);
    if (fastPath) {
      let sidLength = 0;
      while (sidLength < inputLength) {
        const octet = intBuffer[sidLength];
        sidLength++;
        if ((octet & 128) === 0) break;
      }
      this.blockLength = sidLength;
      this.valueHexView = new Uint8Array(sidLength);
      for (let i = 0; i < sidLength; i++) this.valueHexView[i] = intBuffer[i] & 127;
    } else {
      this.valueHexView = new Uint8Array(inputLength);
      for (let i = 0; i < inputLength; i++) {
        this.valueHexView[i] = intBuffer[i] & 127;
        this.blockLength++;
        if ((intBuffer[i] & 128) === 0) break;
      }
      const tempView = new Uint8Array(this.blockLength);
      for (let i = 0; i < this.blockLength; i++) tempView[i] = this.valueHexView[i];
      this.valueHexView = tempView;
    }
    if ((intBuffer[this.blockLength - 1] & 128) !== 0) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }
    if (this.valueHexView[0] === 0) this.warnings.push("Needlessly long format of SID encoding");
    if (this.blockLength <= 8) this.valueDec = utilFromBase(this.valueHexView, 7);
    else {
      this.isHexOnly = true;
      this.warnings.push("Too big SID for decoding, hex only");
    }
    return inputOffset + this.blockLength;
  }
  toBER(sizeOnly) {
    if (this.isHexOnly) {
      if (sizeOnly) return new ArrayBuffer(this.valueHexView.byteLength);
      const curView = this.valueHexView;
      const retView2 = new Uint8Array(this.blockLength);
      for (let i = 0; i < this.blockLength - 1; i++) retView2[i] = curView[i] | 128;
      retView2[this.blockLength - 1] = curView[this.blockLength - 1];
      return retView2.buffer;
    }
    const encodedBuf = utilToBase(this.valueDec, 7);
    if (encodedBuf.byteLength === 0) {
      this.error = "Error during encoding SID value";
      return EMPTY_BUFFER;
    }
    const retView = new Uint8Array(encodedBuf.byteLength);
    if (!sizeOnly) {
      const encodedView = new Uint8Array(encodedBuf);
      const len = encodedBuf.byteLength - 1;
      for (let i = 0; i < len; i++) retView[i] = encodedView[i] | 128;
      retView[len] = encodedView[len];
    }
    return retView.buffer;
  }
  toString() {
    let result = "";
    if (this.isHexOnly) result = Convert.ToHex(this.valueHexView);
    else {
      result = this.valueDec.toString();
    }
    return result;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      valueDec: this.valueDec
    };
  }
};
LocalRelativeSidValueBlock.NAME = "relativeSidBlock";
var LocalRelativeObjectIdentifierValueBlock = class extends ValueBlock {
  static {
    __name(this, "LocalRelativeObjectIdentifierValueBlock");
  }
  constructor({ value = EMPTY_STRING, ...parameters } = {}) {
    super(parameters);
    this.value = [];
    if (value) {
      this.fromString(value);
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = inputOffset;
    while (inputLength > 0) {
      const sidBlock = new LocalRelativeSidValueBlock();
      resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
      if (resultOffset === -1) {
        this.blockLength = 0;
        this.error = sidBlock.error;
        return resultOffset;
      }
      this.blockLength += sidBlock.blockLength;
      inputLength -= sidBlock.blockLength;
      this.value.push(sidBlock);
    }
    return resultOffset;
  }
  toBER(sizeOnly, _writer) {
    const retBuffers = [];
    for (let i = 0; i < this.value.length; i++) {
      const valueBuf = this.value[i].toBER(sizeOnly);
      if (valueBuf.byteLength === 0) {
        this.error = this.value[i].error;
        return EMPTY_BUFFER;
      }
      retBuffers.push(valueBuf);
    }
    return concat(retBuffers);
  }
  fromString(string) {
    this.value = [];
    let pos1 = 0;
    let pos2 = 0;
    let sid = "";
    do {
      pos2 = string.indexOf(".", pos1);
      if (pos2 === -1) sid = string.substring(pos1);
      else sid = string.substring(pos1, pos2);
      pos1 = pos2 + 1;
      const sidBlock = new LocalRelativeSidValueBlock();
      sidBlock.valueDec = parseInt(sid, 10);
      if (isNaN(sidBlock.valueDec)) return true;
      this.value.push(sidBlock);
    } while (pos2 !== -1);
    return true;
  }
  toString() {
    let result = "";
    let isHexOnly = false;
    for (let i = 0; i < this.value.length; i++) {
      isHexOnly = this.value[i].isHexOnly;
      let sidStr = this.value[i].toString();
      if (i !== 0) result = `${result}.`;
      if (isHexOnly) {
        sidStr = `{${sidStr}}`;
        result += sidStr;
      } else result += sidStr;
    }
    return result;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      value: this.toString(),
      sidArray: []
    };
    for (let i = 0; i < this.value.length; i++) object.sidArray.push(this.value[i].toJSON());
    return object;
  }
};
LocalRelativeObjectIdentifierValueBlock.NAME = "RelativeObjectIdentifierValueBlock";
var _a$l;
var RelativeObjectIdentifier = class extends BaseBlock {
  static {
    __name(this, "RelativeObjectIdentifier");
  }
  getValue() {
    return this.valueBlock.toString();
  }
  setValue(value) {
    this.valueBlock.fromString(value);
  }
  constructor(parameters = {}) {
    super(parameters, LocalRelativeObjectIdentifierValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 13;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.getValue()
    };
  }
};
_a$l = RelativeObjectIdentifier;
(() => {
  typeStore.RelativeObjectIdentifier = _a$l;
})();
RelativeObjectIdentifier.NAME = "RelativeObjectIdentifier";
var _a$k;
var Sequence = class extends Constructed {
  static {
    __name(this, "Sequence");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 16;
  }
};
_a$k = Sequence;
(() => {
  typeStore.Sequence = _a$k;
})();
Sequence.NAME = "SEQUENCE";
var _a$j;
var Set2 = class extends Constructed {
  static {
    __name(this, "Set");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 17;
  }
};
_a$j = Set2;
(() => {
  typeStore.Set = _a$j;
})();
Set2.NAME = "SET";
var LocalStringValueBlock = class extends HexBlock(ValueBlock) {
  static {
    __name(this, "LocalStringValueBlock");
  }
  constructor({ ...parameters } = {}) {
    super(parameters);
    this.isHexOnly = true;
    this.value = EMPTY_STRING;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.value
    };
  }
};
LocalStringValueBlock.NAME = "StringValueBlock";
var LocalSimpleStringValueBlock = class extends LocalStringValueBlock {
  static {
    __name(this, "LocalSimpleStringValueBlock");
  }
};
LocalSimpleStringValueBlock.NAME = "SimpleStringValueBlock";
var LocalSimpleStringBlock = class extends BaseStringBlock {
  static {
    __name(this, "LocalSimpleStringBlock");
  }
  constructor({ ...parameters } = {}) {
    super(parameters, LocalSimpleStringValueBlock);
  }
  fromBuffer(inputBuffer) {
    this.valueBlock.value = String.fromCharCode.apply(null, BufferSourceConverter.toUint8Array(inputBuffer));
  }
  fromString(inputString) {
    const strLen = inputString.length;
    const view = this.valueBlock.valueHexView = new Uint8Array(strLen);
    for (let i = 0; i < strLen; i++) view[i] = inputString.charCodeAt(i);
    this.valueBlock.value = inputString;
  }
};
LocalSimpleStringBlock.NAME = "SIMPLE STRING";
var LocalUtf8StringValueBlock = class extends LocalSimpleStringBlock {
  static {
    __name(this, "LocalUtf8StringValueBlock");
  }
  fromBuffer(inputBuffer) {
    this.valueBlock.valueHexView = BufferSourceConverter.toUint8Array(inputBuffer);
    try {
      this.valueBlock.value = Convert.ToUtf8String(inputBuffer);
    } catch (ex) {
      this.warnings.push(`Error during "decodeURIComponent": ${ex}, using raw string`);
      this.valueBlock.value = Convert.ToBinary(inputBuffer);
    }
  }
  fromString(inputString) {
    this.valueBlock.valueHexView = new Uint8Array(Convert.FromUtf8String(inputString));
    this.valueBlock.value = inputString;
  }
};
LocalUtf8StringValueBlock.NAME = "Utf8StringValueBlock";
var _a$i;
var Utf8String = class extends LocalUtf8StringValueBlock {
  static {
    __name(this, "Utf8String");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 12;
  }
};
_a$i = Utf8String;
(() => {
  typeStore.Utf8String = _a$i;
})();
Utf8String.NAME = "UTF8String";
var LocalBmpStringValueBlock = class extends LocalSimpleStringBlock {
  static {
    __name(this, "LocalBmpStringValueBlock");
  }
  fromBuffer(inputBuffer) {
    this.valueBlock.value = Convert.ToUtf16String(inputBuffer);
    this.valueBlock.valueHexView = BufferSourceConverter.toUint8Array(inputBuffer);
  }
  fromString(inputString) {
    this.valueBlock.value = inputString;
    this.valueBlock.valueHexView = new Uint8Array(Convert.FromUtf16String(inputString));
  }
};
LocalBmpStringValueBlock.NAME = "BmpStringValueBlock";
var _a$h;
var BmpString = class extends LocalBmpStringValueBlock {
  static {
    __name(this, "BmpString");
  }
  constructor({ ...parameters } = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 30;
  }
};
_a$h = BmpString;
(() => {
  typeStore.BmpString = _a$h;
})();
BmpString.NAME = "BMPString";
var LocalUniversalStringValueBlock = class extends LocalSimpleStringBlock {
  static {
    __name(this, "LocalUniversalStringValueBlock");
  }
  fromBuffer(inputBuffer) {
    const copyBuffer = ArrayBuffer.isView(inputBuffer) ? inputBuffer.slice().buffer : inputBuffer.slice(0);
    const valueView = new Uint8Array(copyBuffer);
    for (let i = 0; i < valueView.length; i += 4) {
      valueView[i] = valueView[i + 3];
      valueView[i + 1] = valueView[i + 2];
      valueView[i + 2] = 0;
      valueView[i + 3] = 0;
    }
    this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(copyBuffer));
  }
  fromString(inputString) {
    const strLength = inputString.length;
    const valueHexView = this.valueBlock.valueHexView = new Uint8Array(strLength * 4);
    for (let i = 0; i < strLength; i++) {
      const codeBuf = utilToBase(inputString.charCodeAt(i), 8);
      const codeView = new Uint8Array(codeBuf);
      if (codeView.length > 4) continue;
      const dif = 4 - codeView.length;
      for (let j = codeView.length - 1; j >= 0; j--) valueHexView[i * 4 + j + dif] = codeView[j];
    }
    this.valueBlock.value = inputString;
  }
};
LocalUniversalStringValueBlock.NAME = "UniversalStringValueBlock";
var _a$g;
var UniversalString = class extends LocalUniversalStringValueBlock {
  static {
    __name(this, "UniversalString");
  }
  constructor({ ...parameters } = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 28;
  }
};
_a$g = UniversalString;
(() => {
  typeStore.UniversalString = _a$g;
})();
UniversalString.NAME = "UniversalString";
var _a$f;
var NumericString = class extends LocalSimpleStringBlock {
  static {
    __name(this, "NumericString");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 18;
  }
};
_a$f = NumericString;
(() => {
  typeStore.NumericString = _a$f;
})();
NumericString.NAME = "NumericString";
var _a$e;
var PrintableString = class extends LocalSimpleStringBlock {
  static {
    __name(this, "PrintableString");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 19;
  }
};
_a$e = PrintableString;
(() => {
  typeStore.PrintableString = _a$e;
})();
PrintableString.NAME = "PrintableString";
var _a$d;
var TeletexString = class extends LocalSimpleStringBlock {
  static {
    __name(this, "TeletexString");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 20;
  }
};
_a$d = TeletexString;
(() => {
  typeStore.TeletexString = _a$d;
})();
TeletexString.NAME = "TeletexString";
var _a$c;
var VideotexString = class extends LocalSimpleStringBlock {
  static {
    __name(this, "VideotexString");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 21;
  }
};
_a$c = VideotexString;
(() => {
  typeStore.VideotexString = _a$c;
})();
VideotexString.NAME = "VideotexString";
var _a$b;
var IA5String = class extends LocalSimpleStringBlock {
  static {
    __name(this, "IA5String");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 22;
  }
};
_a$b = IA5String;
(() => {
  typeStore.IA5String = _a$b;
})();
IA5String.NAME = "IA5String";
var _a$a;
var GraphicString = class extends LocalSimpleStringBlock {
  static {
    __name(this, "GraphicString");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 25;
  }
};
_a$a = GraphicString;
(() => {
  typeStore.GraphicString = _a$a;
})();
GraphicString.NAME = "GraphicString";
var _a$9;
var VisibleString = class extends LocalSimpleStringBlock {
  static {
    __name(this, "VisibleString");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 26;
  }
};
_a$9 = VisibleString;
(() => {
  typeStore.VisibleString = _a$9;
})();
VisibleString.NAME = "VisibleString";
var _a$8;
var GeneralString = class extends LocalSimpleStringBlock {
  static {
    __name(this, "GeneralString");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 27;
  }
};
_a$8 = GeneralString;
(() => {
  typeStore.GeneralString = _a$8;
})();
GeneralString.NAME = "GeneralString";
var _a$7;
var CharacterString = class extends LocalSimpleStringBlock {
  static {
    __name(this, "CharacterString");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 29;
  }
};
_a$7 = CharacterString;
(() => {
  typeStore.CharacterString = _a$7;
})();
CharacterString.NAME = "CharacterString";
var _a$6;
var UTCTime = class extends VisibleString {
  static {
    __name(this, "UTCTime");
  }
  constructor({ value, valueDate, ...parameters } = {}) {
    super(parameters);
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    if (value) {
      this.fromString(value);
      this.valueBlock.valueHexView = new Uint8Array(value.length);
      for (let i = 0; i < value.length; i++) this.valueBlock.valueHexView[i] = value.charCodeAt(i);
    }
    if (valueDate) {
      this.fromDate(valueDate);
      this.valueBlock.valueHexView = new Uint8Array(this.toBuffer());
    }
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 23;
  }
  fromBuffer(inputBuffer) {
    this.fromString(String.fromCharCode.apply(null, BufferSourceConverter.toUint8Array(inputBuffer)));
  }
  toBuffer() {
    const str = this.toString();
    const buffer = new ArrayBuffer(str.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < str.length; i++) view[i] = str.charCodeAt(i);
    return buffer;
  }
  fromDate(inputDate) {
    this.year = inputDate.getUTCFullYear();
    this.month = inputDate.getUTCMonth() + 1;
    this.day = inputDate.getUTCDate();
    this.hour = inputDate.getUTCHours();
    this.minute = inputDate.getUTCMinutes();
    this.second = inputDate.getUTCSeconds();
  }
  toDate() {
    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
  }
  fromString(inputString) {
    const parser = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/gi;
    const parserArray = parser.exec(inputString);
    if (parserArray === null) {
      this.error = "Wrong input string for conversion";
      return;
    }
    const year = parseInt(parserArray[1], 10);
    if (year >= 50) this.year = 1900 + year;
    else this.year = 2e3 + year;
    this.month = parseInt(parserArray[2], 10);
    this.day = parseInt(parserArray[3], 10);
    this.hour = parseInt(parserArray[4], 10);
    this.minute = parseInt(parserArray[5], 10);
    this.second = parseInt(parserArray[6], 10);
  }
  toString(encoding = "iso") {
    if (encoding === "iso") {
      const outputArray = Array.from({
        length: 7
      });
      outputArray[0] = padNumber(this.year < 2e3 ? this.year - 1900 : this.year - 2e3, 2);
      outputArray[1] = padNumber(this.month, 2);
      outputArray[2] = padNumber(this.day, 2);
      outputArray[3] = padNumber(this.hour, 2);
      outputArray[4] = padNumber(this.minute, 2);
      outputArray[5] = padNumber(this.second, 2);
      outputArray[6] = "Z";
      return outputArray.join("");
    }
    return super.toString(encoding);
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.toDate().toISOString()}`;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second
    };
  }
};
_a$6 = UTCTime;
(() => {
  typeStore.UTCTime = _a$6;
})();
UTCTime.NAME = "UTCTime";
var _a$5;
var GeneralizedTime = class extends UTCTime {
  static {
    __name(this, "GeneralizedTime");
  }
  constructor(parameters = {}) {
    var _b2;
    super(parameters);
    (_b2 = this.millisecond) !== null && _b2 !== void 0 ? _b2 : this.millisecond = 0;
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 24;
  }
  fromDate(inputDate) {
    super.fromDate(inputDate);
    this.millisecond = inputDate.getUTCMilliseconds();
  }
  toDate() {
    const utcDate = Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond);
    return new Date(utcDate);
  }
  fromString(inputString) {
    let isUTC = false;
    let timeString = "";
    let dateTimeString = "";
    let fractionPart = 0;
    let parser;
    let hourDifference = 0;
    let minuteDifference = 0;
    if (inputString[inputString.length - 1] === "Z") {
      timeString = inputString.substring(0, inputString.length - 1);
      isUTC = true;
    } else {
      const number = new Number(inputString[inputString.length - 1]);
      if (isNaN(number.valueOf())) throw new Error("Wrong input string for conversion");
      timeString = inputString;
    }
    if (isUTC) {
      if (timeString.indexOf("+") !== -1) throw new Error("Wrong input string for conversion");
      if (timeString.indexOf("-") !== -1) throw new Error("Wrong input string for conversion");
    } else {
      let multiplier = 1;
      let differencePosition = timeString.indexOf("+");
      let differenceString = "";
      if (differencePosition === -1) {
        differencePosition = timeString.indexOf("-");
        multiplier = -1;
      }
      if (differencePosition !== -1) {
        differenceString = timeString.substring(differencePosition + 1);
        timeString = timeString.substring(0, differencePosition);
        if (differenceString.length !== 2 && differenceString.length !== 4) throw new Error("Wrong input string for conversion");
        let number = parseInt(differenceString.substring(0, 2), 10);
        if (isNaN(number.valueOf())) throw new Error("Wrong input string for conversion");
        hourDifference = multiplier * number;
        if (differenceString.length === 4) {
          number = parseInt(differenceString.substring(2, 4), 10);
          if (isNaN(number.valueOf())) throw new Error("Wrong input string for conversion");
          minuteDifference = multiplier * number;
        }
      }
    }
    let fractionPointPosition = timeString.indexOf(".");
    if (fractionPointPosition === -1) fractionPointPosition = timeString.indexOf(",");
    if (fractionPointPosition !== -1) {
      const fractionPartCheck = new Number(`0${timeString.substring(fractionPointPosition)}`);
      if (isNaN(fractionPartCheck.valueOf())) throw new Error("Wrong input string for conversion");
      fractionPart = fractionPartCheck.valueOf();
      dateTimeString = timeString.substring(0, fractionPointPosition);
    } else dateTimeString = timeString;
    switch (true) {
      case dateTimeString.length === 8:
        parser = /(\d{4})(\d{2})(\d{2})/gi;
        if (fractionPointPosition !== -1) throw new Error("Wrong input string for conversion");
        break;
      case dateTimeString.length === 10:
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})/gi;
        if (fractionPointPosition !== -1) {
          let fractionResult = 60 * fractionPart;
          this.minute = Math.floor(fractionResult);
          fractionResult = 60 * (fractionResult - this.minute);
          this.second = Math.floor(fractionResult);
          fractionResult = 1e3 * (fractionResult - this.second);
          this.millisecond = Math.floor(fractionResult);
        }
        break;
      case dateTimeString.length === 12:
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/gi;
        if (fractionPointPosition !== -1) {
          let fractionResult = 60 * fractionPart;
          this.second = Math.floor(fractionResult);
          fractionResult = 1e3 * (fractionResult - this.second);
          this.millisecond = Math.floor(fractionResult);
        }
        break;
      case dateTimeString.length === 14:
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gi;
        if (fractionPointPosition !== -1) {
          const fractionResult = 1e3 * fractionPart;
          this.millisecond = Math.floor(fractionResult);
        }
        break;
      default:
        throw new Error("Wrong input string for conversion");
    }
    const parserArray = parser.exec(dateTimeString);
    if (parserArray === null) throw new Error("Wrong input string for conversion");
    for (let j = 1; j < parserArray.length; j++) {
      switch (j) {
        case 1:
          this.year = parseInt(parserArray[j], 10);
          break;
        case 2:
          this.month = parseInt(parserArray[j], 10);
          break;
        case 3:
          this.day = parseInt(parserArray[j], 10);
          break;
        case 4:
          this.hour = parseInt(parserArray[j], 10) + hourDifference;
          break;
        case 5:
          this.minute = parseInt(parserArray[j], 10) + minuteDifference;
          break;
        case 6:
          this.second = parseInt(parserArray[j], 10);
          break;
        default:
          throw new Error("Wrong input string for conversion");
      }
    }
    if (isUTC === false) {
      const tempDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
      this.year = tempDate.getUTCFullYear();
      this.month = tempDate.getUTCMonth();
      this.day = tempDate.getUTCDay();
      this.hour = tempDate.getUTCHours();
      this.minute = tempDate.getUTCMinutes();
      this.second = tempDate.getUTCSeconds();
      this.millisecond = tempDate.getUTCMilliseconds();
    }
  }
  toString(encoding = "iso") {
    if (encoding === "iso") {
      const outputArray = [];
      outputArray.push(padNumber(this.year, 4));
      outputArray.push(padNumber(this.month, 2));
      outputArray.push(padNumber(this.day, 2));
      outputArray.push(padNumber(this.hour, 2));
      outputArray.push(padNumber(this.minute, 2));
      outputArray.push(padNumber(this.second, 2));
      if (this.millisecond !== 0) {
        outputArray.push(".");
        outputArray.push(padNumber(this.millisecond, 3).replace(/0+$/, ""));
      }
      outputArray.push("Z");
      return outputArray.join("");
    }
    return super.toString(encoding);
  }
  toJSON() {
    return {
      ...super.toJSON(),
      millisecond: this.millisecond
    };
  }
};
_a$5 = GeneralizedTime;
(() => {
  typeStore.GeneralizedTime = _a$5;
})();
GeneralizedTime.NAME = "GeneralizedTime";
var _a$4;
var DATE = class extends Utf8String {
  static {
    __name(this, "DATE");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 31;
  }
};
_a$4 = DATE;
(() => {
  typeStore.DATE = _a$4;
})();
DATE.NAME = "DATE";
var _a$3;
var TimeOfDay = class extends Utf8String {
  static {
    __name(this, "TimeOfDay");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 32;
  }
};
_a$3 = TimeOfDay;
(() => {
  typeStore.TimeOfDay = _a$3;
})();
TimeOfDay.NAME = "TimeOfDay";
var _a$2;
var DateTime = class extends Utf8String {
  static {
    __name(this, "DateTime");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 33;
  }
};
_a$2 = DateTime;
(() => {
  typeStore.DateTime = _a$2;
})();
DateTime.NAME = "DateTime";
var _a$1;
var Duration = class extends Utf8String {
  static {
    __name(this, "Duration");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 34;
  }
};
_a$1 = Duration;
(() => {
  typeStore.Duration = _a$1;
})();
Duration.NAME = "Duration";
var _a;
var TIME = class extends Utf8String {
  static {
    __name(this, "TIME");
  }
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 14;
  }
};
_a = TIME;
(() => {
  typeStore.TIME = _a;
})();
TIME.NAME = "TIME";
var Any = class {
  static {
    __name(this, "Any");
  }
  constructor({ name = EMPTY_STRING, optional = false } = {}) {
    this.name = name;
    this.optional = optional;
  }
};
var Choice = class extends Any {
  static {
    __name(this, "Choice");
  }
  constructor({ value = [], ...parameters } = {}) {
    super(parameters);
    this.value = value;
  }
};
var Repeated = class extends Any {
  static {
    __name(this, "Repeated");
  }
  constructor({ value = new Any(), local = false, ...parameters } = {}) {
    super(parameters);
    this.value = value;
    this.local = local;
  }
};
var RawData = class {
  static {
    __name(this, "RawData");
  }
  get data() {
    return this.dataView.slice().buffer;
  }
  set data(value) {
    this.dataView = BufferSourceConverter.toUint8Array(value);
  }
  constructor({ data = EMPTY_VIEW } = {}) {
    this.dataView = BufferSourceConverter.toUint8Array(data);
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const endLength = inputOffset + inputLength;
    this.dataView = BufferSourceConverter.toUint8Array(inputBuffer).subarray(inputOffset, endLength);
    return endLength;
  }
  toBER(_sizeOnly) {
    return this.dataView.slice().buffer;
  }
};
function compareSchema(root, inputData, inputSchema) {
  if (inputSchema instanceof Choice) {
    for (const element of inputSchema.value) {
      const result = compareSchema(root, inputData, element);
      if (result.verified) {
        return {
          verified: true,
          result: root
        };
      }
    }
    {
      const _result = {
        verified: false,
        result: {
          error: "Wrong values for Choice type"
        }
      };
      if (inputSchema.hasOwnProperty(NAME)) _result.name = inputSchema.name;
      return _result;
    }
  }
  if (inputSchema instanceof Any) {
    if (inputSchema.hasOwnProperty(NAME)) root[inputSchema.name] = inputData;
    return {
      verified: true,
      result: root
    };
  }
  if (root instanceof Object === false) {
    return {
      verified: false,
      result: {
        error: "Wrong root object"
      }
    };
  }
  if (inputData instanceof Object === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 data"
      }
    };
  }
  if (inputSchema instanceof Object === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }
  if (ID_BLOCK in inputSchema === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }
  if (FROM_BER in inputSchema.idBlock === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }
  if (TO_BER in inputSchema.idBlock === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }
  const encodedId = inputSchema.idBlock.toBER(false);
  if (encodedId.byteLength === 0) {
    return {
      verified: false,
      result: {
        error: "Error encoding idBlock for ASN.1 schema"
      }
    };
  }
  const decodedOffset = inputSchema.idBlock.fromBER(encodedId, 0, encodedId.byteLength);
  if (decodedOffset === -1) {
    return {
      verified: false,
      result: {
        error: "Error decoding idBlock for ASN.1 schema"
      }
    };
  }
  if (inputSchema.idBlock.hasOwnProperty(TAG_CLASS) === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }
  if (inputSchema.idBlock.tagClass !== inputData.idBlock.tagClass) {
    return {
      verified: false,
      result: root
    };
  }
  if (inputSchema.idBlock.hasOwnProperty(TAG_NUMBER) === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }
  if (inputSchema.idBlock.tagNumber !== inputData.idBlock.tagNumber) {
    return {
      verified: false,
      result: root
    };
  }
  if (inputSchema.idBlock.hasOwnProperty(IS_CONSTRUCTED) === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }
  if (inputSchema.idBlock.isConstructed !== inputData.idBlock.isConstructed) {
    return {
      verified: false,
      result: root
    };
  }
  if (!(IS_HEX_ONLY in inputSchema.idBlock)) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema"
      }
    };
  }
  if (inputSchema.idBlock.isHexOnly !== inputData.idBlock.isHexOnly) {
    return {
      verified: false,
      result: root
    };
  }
  if (inputSchema.idBlock.isHexOnly) {
    if (VALUE_HEX_VIEW in inputSchema.idBlock === false) {
      return {
        verified: false,
        result: {
          error: "Wrong ASN.1 schema"
        }
      };
    }
    const schemaView = inputSchema.idBlock.valueHexView;
    const asn1View = inputData.idBlock.valueHexView;
    if (schemaView.length !== asn1View.length) {
      return {
        verified: false,
        result: root
      };
    }
    for (let i = 0; i < schemaView.length; i++) {
      if (schemaView[i] !== asn1View[1]) {
        return {
          verified: false,
          result: root
        };
      }
    }
  }
  if (inputSchema.name) {
    inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
    if (inputSchema.name) root[inputSchema.name] = inputData;
  }
  if (inputSchema instanceof typeStore.Constructed) {
    let admission = 0;
    let result = {
      verified: false,
      result: {
        error: "Unknown error"
      }
    };
    let maxLength = inputSchema.valueBlock.value.length;
    if (maxLength > 0) {
      if (inputSchema.valueBlock.value[0] instanceof Repeated) {
        maxLength = inputData.valueBlock.value.length;
      }
    }
    if (maxLength === 0) {
      return {
        verified: true,
        result: root
      };
    }
    if (inputData.valueBlock.value.length === 0 && inputSchema.valueBlock.value.length !== 0) {
      let _optional = true;
      for (let i = 0; i < inputSchema.valueBlock.value.length; i++) _optional = _optional && (inputSchema.valueBlock.value[i].optional || false);
      if (_optional) {
        return {
          verified: true,
          result: root
        };
      }
      if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name) delete root[inputSchema.name];
      }
      root.error = "Inconsistent object length";
      return {
        verified: false,
        result: root
      };
    }
    for (let i = 0; i < maxLength; i++) {
      if (i - admission >= inputData.valueBlock.value.length) {
        if (inputSchema.valueBlock.value[i].optional === false) {
          const _result = {
            verified: false,
            result: root
          };
          root.error = "Inconsistent length between ASN.1 data and schema";
          if (inputSchema.name) {
            inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
            if (inputSchema.name) {
              delete root[inputSchema.name];
              _result.name = inputSchema.name;
            }
          }
          return _result;
        }
      } else {
        if (inputSchema.valueBlock.value[0] instanceof Repeated) {
          result = compareSchema(root, inputData.valueBlock.value[i], inputSchema.valueBlock.value[0].value);
          if (result.verified === false) {
            if (inputSchema.valueBlock.value[0].optional) admission++;
            else {
              if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name) delete root[inputSchema.name];
              }
              return result;
            }
          }
          if (NAME in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].name.length > 0) {
            let arrayRoot = {};
            if (LOCAL in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].local) arrayRoot = inputData;
            else arrayRoot = root;
            if (typeof arrayRoot[inputSchema.valueBlock.value[0].name] === "undefined") arrayRoot[inputSchema.valueBlock.value[0].name] = [];
            arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[i]);
          }
        } else {
          result = compareSchema(root, inputData.valueBlock.value[i - admission], inputSchema.valueBlock.value[i]);
          if (result.verified === false) {
            if (inputSchema.valueBlock.value[i].optional) admission++;
            else {
              if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name) delete root[inputSchema.name];
              }
              return result;
            }
          }
        }
      }
    }
    if (result.verified === false) {
      const _result = {
        verified: false,
        result: root
      };
      if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name) {
          delete root[inputSchema.name];
          _result.name = inputSchema.name;
        }
      }
      return _result;
    }
    return {
      verified: true,
      result: root
    };
  }
  if (inputSchema.primitiveSchema && VALUE_HEX_VIEW in inputData.valueBlock) {
    const asn1 = localFromBER(inputData.valueBlock.valueHexView);
    if (asn1.offset === -1) {
      const _result = {
        verified: false,
        result: asn1.result
      };
      if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name) {
          delete root[inputSchema.name];
          _result.name = inputSchema.name;
        }
      }
      return _result;
    }
    return compareSchema(root, asn1.result, inputSchema.primitiveSchema);
  }
  return {
    verified: true,
    result: root
  };
}
__name(compareSchema, "compareSchema");
function verifySchema(inputBuffer, inputSchema) {
  if (inputSchema instanceof Object === false) {
    return {
      verified: false,
      result: {
        error: "Wrong ASN.1 schema type"
      }
    };
  }
  const asn1 = localFromBER(BufferSourceConverter.toUint8Array(inputBuffer));
  if (asn1.offset === -1) {
    return {
      verified: false,
      result: asn1.result
    };
  }
  return compareSchema(asn1.result, asn1.result, inputSchema);
}
__name(verifySchema, "verifySchema");
registerBuiltinEncoder({
  BitString,
  Integer,
  OctetString,
  Primitive,
  Constructed,
  Sequence,
  Set: Set2
}, {
  BaseBlock,
  ViewWriter,
  LocalIdentificationBlock,
  LocalLengthBlock,
  LocalIntegerValueBlock,
  LocalOctetStringValueBlock,
  LocalConstructedValueBlock,
  LocalBitStringValueBlock,
  LocalPrimitiveValueBlock,
  originalBaseBlockToBER: ORIGINAL_BASE_BLOCK_TO_BER,
  originalWriterWrite: ORIGINAL_VIEW_WRITER_WRITE,
  originalWriterFinal: ORIGINAL_VIEW_WRITER_FINAL,
  originalIdentificationToBER: ORIGINAL_LOCAL_IDENTIFICATION_TO_BER,
  originalLengthToBER: ORIGINAL_LOCAL_LENGTH_TO_BER,
  originalIntegerToBER: ORIGINAL_LOCAL_INTEGER_TO_BER,
  originalOctetStringToBER: ORIGINAL_LOCAL_OCTET_STRING_TO_BER,
  originalBitStringToBER: ORIGINAL_LOCAL_BIT_STRING_TO_BER,
  originalConstructedToBER: ORIGINAL_LOCAL_CONSTRUCTED_TO_BER,
  originalPrimitiveToBER: ORIGINAL_LOCAL_PRIMITIVE_TO_BER
});
registerFastParser({
  Integer,
  Null,
  Sequence
});

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/bytes/buffer-source.js
var ARRAY_BUFFER_TAG = "[object ArrayBuffer]";
var SHARED_ARRAY_BUFFER_TAG = "[object SharedArrayBuffer]";
function tagOf(value) {
  return Object.prototype.toString.call(value);
}
__name(tagOf, "tagOf");
function isArrayBufferViewLike(value) {
  if (ArrayBuffer.isView(value)) {
    return true;
  }
  if (!value || typeof value !== "object") {
    return false;
  }
  const view = value;
  return typeof view.byteOffset === "number" && typeof view.byteLength === "number" && isArrayBufferLike(view.buffer);
}
__name(isArrayBufferViewLike, "isArrayBufferViewLike");
function isArrayBuffer(value) {
  return tagOf(value) === ARRAY_BUFFER_TAG;
}
__name(isArrayBuffer, "isArrayBuffer");
function isSharedArrayBuffer(value) {
  return typeof SharedArrayBuffer !== "undefined" && tagOf(value) === SHARED_ARRAY_BUFFER_TAG;
}
__name(isSharedArrayBuffer, "isSharedArrayBuffer");
function isArrayBufferLike(value) {
  return isArrayBuffer(value) || isSharedArrayBuffer(value);
}
__name(isArrayBufferLike, "isArrayBufferLike");
function isArrayBufferView(value) {
  return isArrayBufferViewLike(value);
}
__name(isArrayBufferView, "isArrayBufferView");
function isBufferSource(value) {
  return isArrayBufferLike(value) || isArrayBufferView(value);
}
__name(isBufferSource, "isBufferSource");
function assertBufferSource(value) {
  if (!isBufferSource(value)) {
    throw new TypeError("Expected ArrayBuffer, SharedArrayBuffer, or ArrayBufferView");
  }
}
__name(assertBufferSource, "assertBufferSource");
function toUint8Array(data) {
  assertBufferSource(data);
  if (isArrayBufferLike(data)) {
    return new Uint8Array(data);
  }
  return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}
__name(toUint8Array, "toUint8Array");
function toArrayBuffer(data) {
  assertBufferSource(data);
  if (isArrayBuffer(data)) {
    return data;
  }
  const buffer = new ArrayBuffer(data.byteLength);
  new Uint8Array(buffer).set(toUint8Array(data));
  return buffer;
}
__name(toArrayBuffer, "toArrayBuffer");

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/bytes/equal.js
function equal(a, b, options = {}) {
  const left = toUint8Array(a);
  const right = toUint8Array(b);
  if (!options.constantTime && left.byteLength !== right.byteLength) {
    return false;
  }
  const length = Math.max(left.byteLength, right.byteLength);
  let diff = left.byteLength ^ right.byteLength;
  for (let i = 0; i < length; i++) {
    diff |= (left[i] ?? 0) ^ (right[i] ?? 0);
  }
  return diff === 0;
}
__name(equal, "equal");

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/encoding/binary.js
var binary_exports = {};
__export(binary_exports, {
  binary: () => binary,
  decode: () => decode,
  encode: () => encode,
  is: () => is
});
function encode(data) {
  const bytes = toUint8Array(data);
  let result = "";
  for (const byte of bytes) {
    result += String.fromCharCode(byte);
  }
  return result;
}
__name(encode, "encode");
function decode(text) {
  const result = new Uint8Array(text.length);
  for (let i = 0; i < text.length; i++) {
    result[i] = text.charCodeAt(i) & 255;
  }
  return result;
}
__name(decode, "decode");
function is(text) {
  return typeof text === "string";
}
__name(is, "is");
var binary = {
  encode,
  decode,
  is
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/encoding/hex.js
var hex_exports = {};
__export(hex_exports, {
  decode: () => decode2,
  encode: () => encode2,
  format: () => format,
  formats: () => formats,
  hex: () => hex,
  is: () => is2,
  normalize: () => normalize,
  parse: () => parse
});
var HEX_CHARACTER_REGEX = /^[0-9a-f]$/i;
var COMMON_SEPARATORS = [
  " ",
  "	",
  "\n",
  "\r",
  ":",
  "-",
  "."
];
function resolveSeparators(options) {
  if (options.separators === "none") {
    return [];
  }
  if (!options.separators || options.separators === "common") {
    return COMMON_SEPARATORS;
  }
  return options.separators;
}
__name(resolveSeparators, "resolveSeparators");
function validateSeparator(separator) {
  if (!separator) {
    throw new TypeError("Hex separators must be non-empty strings");
  }
}
__name(validateSeparator, "validateSeparator");
function matchSeparator(text, index, separators) {
  for (const separator of separators) {
    if (text.startsWith(separator, index)) {
      return separator;
    }
  }
  return void 0;
}
__name(matchSeparator, "matchSeparator");
function detectCase(text) {
  const hasUpper = /[A-F]/.test(text);
  const hasLower = /[a-f]/.test(text);
  return hasUpper && !hasLower ? "upper" : "lower";
}
__name(detectCase, "detectCase");
function detectLineSeparator(text) {
  const match = /\r\n|\n/.exec(text);
  if (!match) {
    return void 0;
  }
  return match[0] === "\r\n" ? "\r\n" : "\n";
}
__name(detectLineSeparator, "detectLineSeparator");
function compactForDetection(text) {
  return text.replace(/[^0-9a-f]/gi, "");
}
__name(compactForDetection, "compactForDetection");
function detectGroup(text) {
  const segments = text.match(/[0-9A-Fa-f]+|[^0-9A-Fa-f]+/g) ?? [];
  if (segments.length < 3) {
    return void 0;
  }
  const hexSegments = segments.filter((_, index) => index % 2 === 0);
  const separators = segments.filter((_, index) => index % 2 === 1);
  const separator = separators[0];
  if (!separator || separators.some((item) => item !== separator)) {
    return void 0;
  }
  if (hexSegments.some((segment) => segment.length === 0 || segment.length % 2 !== 0)) {
    return void 0;
  }
  const firstLength = hexSegments[0]?.length ?? 0;
  if (!firstLength) {
    return void 0;
  }
  if (hexSegments.slice(0, -1).some((segment) => segment.length !== firstLength)) {
    return void 0;
  }
  if ((hexSegments[hexSegments.length - 1]?.length ?? 0) > firstLength) {
    return void 0;
  }
  return {
    size: firstLength / 2,
    separator
  };
}
__name(detectGroup, "detectGroup");
function detectFormat(text) {
  const trimmed = text.trim();
  const prefix = /^0x/i.test(trimmed) ? "0x" : "";
  const body = prefix ? trimmed.slice(2) : trimmed;
  const lineSeparator = detectLineSeparator(body);
  const lines = body.split(/\r\n|\n/).filter((line) => line.length > 0);
  const sampleLine = lines[0]?.trim() ?? "";
  const group = detectGroup(sampleLine);
  const format4 = {
    case: detectCase(trimmed),
    prefix
  };
  if (group) {
    format4.group = group;
  }
  if (lineSeparator && lines.length > 1) {
    const firstLineBytes = compactForDetection(lines[0] ?? "").length / 2;
    if (firstLineBytes > 0 && lines.slice(0, -1).every((line) => compactForDetection(line).length / 2 === firstLineBytes)) {
      format4.line = {
        bytesPerLine: firstLineBytes,
        separator: lineSeparator
      };
    }
  }
  return format4;
}
__name(detectFormat, "detectFormat");
function normalizeText(text, options) {
  const allowPrefix = options.allowPrefix ?? true;
  const separators = [
    ...resolveSeparators(options)
  ].sort((left, right) => right.length - left.length);
  for (const separator of separators) {
    validateSeparator(separator);
  }
  let working = text.trim();
  if (/^0x/i.test(working)) {
    if (!allowPrefix) {
      throw new TypeError("Hexadecimal text must not include a 0x prefix");
    }
    working = working.slice(2);
  }
  let normalized = "";
  let lastTokenWasSeparator = false;
  for (let index = 0; index < working.length; ) {
    const character = working[index] ?? "";
    if (HEX_CHARACTER_REGEX.test(character)) {
      normalized += character;
      lastTokenWasSeparator = false;
      index += 1;
      continue;
    }
    const separator = matchSeparator(working, index, separators);
    if (!separator) {
      throw new TypeError("Input is not valid hexadecimal text");
    }
    if (options.strict && (lastTokenWasSeparator || normalized.length === 0)) {
      throw new TypeError("Hexadecimal text contains misplaced separators");
    }
    lastTokenWasSeparator = true;
    index += separator.length;
  }
  if (options.strict && lastTokenWasSeparator && normalized.length > 0) {
    throw new TypeError("Hexadecimal text must not end with a separator");
  }
  if (normalized.length % 2 !== 0) {
    if (!options.allowOddLength) {
      throw new TypeError("Hexadecimal text must contain an even number of characters");
    }
    normalized = `0${normalized}`;
  }
  return normalized.toLowerCase();
}
__name(normalizeText, "normalizeText");
function groupPairs(pairs, group) {
  if (!group) {
    return pairs.join("");
  }
  if (!Number.isInteger(group.size) || group.size < 1) {
    throw new RangeError("Hex group size must be a positive integer");
  }
  const chunks = [];
  for (let index = 0; index < pairs.length; index += group.size) {
    chunks.push(pairs.slice(index, index + group.size).join(""));
  }
  return chunks.join(group.separator);
}
__name(groupPairs, "groupPairs");
function normalize(text, options = {}) {
  return normalizeText(text, options);
}
__name(normalize, "normalize");
function is2(text, options = {}) {
  if (typeof text !== "string") {
    return false;
  }
  try {
    normalize(text, options);
    return true;
  } catch {
    return false;
  }
}
__name(is2, "is");
function encode2(data, options = {}) {
  const bytes = toUint8Array(data);
  const casing = options.case ?? "lower";
  const pairs = Array.from(bytes, (byte) => {
    const text = byte.toString(16).padStart(2, "0");
    return casing === "upper" ? text.toUpperCase() : text;
  });
  let body = "";
  if (options.line) {
    const bytesPerLine = options.line.bytesPerLine;
    if (!Number.isInteger(bytesPerLine) || bytesPerLine < 1) {
      throw new RangeError("Hex bytesPerLine must be a positive integer");
    }
    const separator = options.line.separator ?? "\n";
    const lines = [];
    for (let index = 0; index < pairs.length; index += bytesPerLine) {
      lines.push(groupPairs(pairs.slice(index, index + bytesPerLine), options.group));
    }
    body = lines.join(separator);
  } else {
    body = groupPairs(pairs, options.group);
  }
  return `${options.prefix ?? ""}${body}`;
}
__name(encode2, "encode");
function decode2(text, options = {}) {
  const normalized = normalize(text, options);
  const result = new Uint8Array(normalized.length / 2);
  for (let i = 0; i < normalized.length; i += 2) {
    result[i / 2] = Number.parseInt(normalized.slice(i, i + 2), 16);
  }
  return result;
}
__name(decode2, "decode");
function parse(text, options = {}) {
  const normalized = normalize(text, options);
  return {
    bytes: decode2(normalized),
    format: detectFormat(text),
    normalized
  };
}
__name(parse, "parse");
function format(data, value) {
  return encode2(data, value);
}
__name(format, "format");
var formats = {
  compact: Object.freeze({}),
  upper: Object.freeze({
    case: "upper"
  }),
  colon: Object.freeze({
    group: {
      size: 1,
      separator: ":"
    }
  }),
  colonUpper: Object.freeze({
    case: "upper",
    group: {
      size: 1,
      separator: ":"
    }
  }),
  groupsOf4: Object.freeze({
    group: {
      size: 4,
      separator: " "
    }
  }),
  prefixed: Object.freeze({
    prefix: "0x"
  })
};
var hex = {
  encode: encode2,
  decode: decode2,
  format,
  formats,
  is: is2,
  normalize,
  parse
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/encoding/utf8.js
var utf8_exports = {};
__export(utf8_exports, {
  decode: () => decode3,
  encode: () => encode3,
  utf8: () => utf8
});
function encode3(text) {
  return new TextEncoder().encode(text);
}
__name(encode3, "encode");
function decode3(data) {
  return new TextDecoder("utf-8", {
    fatal: false
  }).decode(toUint8Array(data));
}
__name(decode3, "decode");
var utf8 = {
  encode: encode3,
  decode: decode3
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/encoding/utf16.js
var utf16_exports = {};
__export(utf16_exports, {
  decode: () => decode4,
  encode: () => encode4,
  utf16: () => utf16
});
function encode4(text, options = {}) {
  const result = new ArrayBuffer(text.length * 2);
  const view = new DataView(result);
  for (let i = 0; i < text.length; i++) {
    view.setUint16(i * 2, text.charCodeAt(i), options.littleEndian ?? false);
  }
  return new Uint8Array(result);
}
__name(encode4, "encode");
function decode4(data, options = {}) {
  const buffer = toArrayBuffer(data);
  const view = new DataView(buffer);
  let result = "";
  for (let i = 0; i < buffer.byteLength; i += 2) {
    result += String.fromCharCode(view.getUint16(i, options.littleEndian ?? false));
  }
  return result;
}
__name(decode4, "decode");
var utf16 = {
  encode: encode4,
  decode: decode4
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/encoding/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  decode: () => decode5,
  encode: () => encode5,
  is: () => is3,
  normalize: () => normalize2,
  pad: () => pad
});
var BASE64_REGEX2 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
function nodeBuffer() {
  return globalThis.Buffer;
}
__name(nodeBuffer, "nodeBuffer");
function normalize2(text) {
  return text.replace(/[\n\r\t ]/g, "");
}
__name(normalize2, "normalize");
function pad(text) {
  const remainder = text.length % 4;
  return remainder ? text + "=".repeat(4 - remainder) : text;
}
__name(pad, "pad");
function is3(text) {
  if (typeof text !== "string") {
    return false;
  }
  const normalized = normalize2(text);
  return normalized === "" || BASE64_REGEX2.test(normalized);
}
__name(is3, "is");
function encode5(data, _options) {
  const bytes = toUint8Array(data);
  const buffer = nodeBuffer();
  if (buffer) {
    return buffer.from(bytes).toString("base64");
  }
  return btoa(encode(bytes));
}
__name(encode5, "encode");
function decode5(text, _options) {
  const normalized = normalize2(text);
  if (!is3(normalized)) {
    throw new TypeError("Input is not valid Base64 text");
  }
  const buffer = nodeBuffer();
  if (buffer) {
    return new Uint8Array(buffer.from(normalized, "base64"));
  }
  return decode(atob(normalized));
}
__name(decode5, "decode");
var base64 = {
  encode: encode5,
  decode: decode5,
  is: is3,
  normalize: normalize2,
  pad
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/encoding/base64url.js
var base64url_exports = {};
__export(base64url_exports, {
  base64url: () => base64url,
  decode: () => decode6,
  encode: () => encode6,
  is: () => is4,
  normalize: () => normalize3
});
var BASE64URL_REGEX2 = /^[A-Za-z0-9_-]*$/;
function normalize3(text) {
  return text.replace(/[\n\r\t ]/g, "");
}
__name(normalize3, "normalize");
function is4(text) {
  return typeof text === "string" && BASE64URL_REGEX2.test(normalize3(text));
}
__name(is4, "is");
function encode6(data, _options) {
  return base64.encode(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
__name(encode6, "encode");
function decode6(text, _options) {
  const normalized = normalize3(text);
  if (!is4(normalized)) {
    throw new TypeError("Input is not valid Base64Url text");
  }
  return base64.decode(base64.pad(normalized.replace(/-/g, "+").replace(/_/g, "/")));
}
__name(decode6, "decode");
var base64url = {
  encode: encode6,
  decode: decode6,
  is: is4,
  normalize: normalize3
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/pem/pem.js
var LABEL_REGEX = /^[A-Z0-9][A-Z0-9 ._-]*[A-Z0-9]$/i;
var PEM_BLOCK_REGEX = /-----BEGIN ([^-]+)-----([\s\S]*?)-----END \1-----/g;
function assertLabel(label) {
  if (!LABEL_REGEX.test(label)) {
    throw new TypeError(`Invalid PEM label '${label}'`);
  }
}
__name(assertLabel, "assertLabel");
function wrap(text, lineLength) {
  const result = [];
  for (let i = 0; i < text.length; i += lineLength) {
    result.push(text.slice(i, i + lineLength));
  }
  return result;
}
__name(wrap, "wrap");
function parseBody(body) {
  const normalized = body.trim().replace(/\r\n/g, "\n");
  const lines = normalized.split("\n").map((line) => line.trim()).filter(Boolean);
  const headers = {};
  let index = 0;
  for (; index < lines.length; index++) {
    const line = lines[index];
    const separator = line.indexOf(":");
    if (separator <= 0) {
      break;
    }
    headers[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  return {
    headers: Object.keys(headers).length ? headers : void 0,
    base64Lines: lines.slice(index),
    base64Text: lines.slice(index).join("")
  };
}
__name(parseBody, "parseBody");
function detectNewline(text) {
  return /\r\n/.test(text) ? "\r\n" : "\n";
}
__name(detectNewline, "detectNewline");
function collectBlocks(text, options = {}) {
  const blocks = [];
  const requestedLabel = options.label;
  let match;
  PEM_BLOCK_REGEX.lastIndex = 0;
  while (match = PEM_BLOCK_REGEX.exec(text)) {
    const label = match[1].trim();
    if (requestedLabel && label !== requestedLabel) {
      continue;
    }
    assertLabel(label);
    const parsed = parseBody(match[2]);
    blocks.push({
      label,
      data: base64.decode(parsed.base64Text),
      headers: parsed.headers,
      lineLength: parsed.base64Lines[0]?.length ?? 64,
      newline: detectNewline(match[0])
    });
  }
  if (options.strict && blocks.length === 0) {
    throw new TypeError(requestedLabel ? `No PEM block with label '${requestedLabel}' was found` : "No PEM blocks were found");
  }
  return blocks;
}
__name(collectBlocks, "collectBlocks");
function encode7(label, data, options = {}) {
  assertLabel(label);
  const lineLength = options.lineLength ?? 64;
  if (!Number.isInteger(lineLength) || lineLength < 1) {
    throw new RangeError("PEM lineLength must be a positive integer");
  }
  const newline = options.newline ?? "\n";
  const lines = [
    `-----BEGIN ${label}-----`
  ];
  if (options.headers) {
    for (const [name, value] of Object.entries(options.headers)) {
      lines.push(`${name}: ${value}`);
    }
    lines.push("");
  }
  lines.push(...wrap(base64.encode(data), lineLength));
  lines.push(`-----END ${label}-----`);
  return `${lines.join(newline)}${newline}`;
}
__name(encode7, "encode");
function decode7(text, options = {}) {
  return collectBlocks(text, options).map(({ lineLength: _lineLength, newline: _newline, ...block }) => block);
}
__name(decode7, "decode");
function decodeFirst(text, label) {
  const [block] = decode7(text, {
    label,
    strict: true
  });
  return block.data;
}
__name(decodeFirst, "decodeFirst");
function parse2(text, options = {}) {
  const [block] = collectBlocks(text, {
    ...options,
    strict: true
  });
  const format4 = {
    label: block.label,
    headers: block.headers,
    lineLength: block.lineLength,
    newline: block.newline
  };
  return {
    bytes: block.data,
    format: format4,
    normalized: encode7(block.label, block.data, format4)
  };
}
__name(parse2, "parse");
function format2(data, value) {
  return encode7(value.label, data, value);
}
__name(format2, "format");
var pemConverter = {
  name: "pem",
  encode: /* @__PURE__ */ __name((data, options) => {
    if (!options?.label) {
      throw new TypeError("PEM label is required");
    }
    return encode7(options.label, data, options);
  }, "encode"),
  decode: /* @__PURE__ */ __name((text, options) => decodeFirst(text, options?.label), "decode"),
  format: format2,
  is: /* @__PURE__ */ __name((text) => typeof text === "string" && /-----BEGIN [^-]+-----/.test(text), "is"),
  parse: parse2
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/converters/registry.js
function keyOf(name) {
  return name.trim().toLowerCase();
}
__name(keyOf, "keyOf");
function toError(error) {
  return error instanceof Error ? error : new Error(String(error));
}
__name(toError, "toError");
function removeConverter(converters, primaryNames, converter) {
  for (const alias of [
    converter.name,
    ...converter.aliases ?? []
  ]) {
    converters.delete(keyOf(alias));
  }
  primaryNames.delete(keyOf(converter.name));
}
__name(removeConverter, "removeConverter");
function requireCapability(converter, name, capability) {
  const method = converter[capability];
  if (typeof method !== "function") {
    throw new Error(`Converter '${name}' does not support ${capability}()`);
  }
  return method;
}
__name(requireCapability, "requireCapability");
function detectConfidence(name, text, converter) {
  const normalizedName = keyOf(converter.name || name);
  const trimmed = text.trim();
  if (!trimmed) {
    return 0;
  }
  let accepted = false;
  if (converter.is) {
    accepted = converter.is(text);
  }
  let decodable = false;
  try {
    converter.decode(text);
    decodable = true;
  } catch {
    decodable = false;
  }
  if (!accepted && !decodable) {
    return 0;
  }
  switch (normalizedName) {
    case "pem":
      return /-----BEGIN [^-]+-----/.test(text) ? 1 : 0;
    case "hex": {
      const compact = trimmed.replace(/^0x/i, "").replace(/[\s:.-]/g, "");
      if (!compact || /[^0-9a-f]/i.test(compact) || compact.length % 2 !== 0) {
        return 0;
      }
      if (/^0x/i.test(trimmed) || /[:\s.-]/.test(trimmed)) {
        return 0.95;
      }
      if (/[a-f]/.test(trimmed) || /[A-F]/.test(trimmed)) {
        return 0.8;
      }
      return 0.45;
    }
    case "base64url":
      if (/[-_]/.test(trimmed)) {
        return 0.95;
      }
      if (/=/.test(trimmed)) {
        return 0.1;
      }
      return 0.6;
    case "base64":
      if (/[+/=]/.test(trimmed)) {
        return 0.9;
      }
      return 0.55;
    case "binary":
    case "utf8":
    case "utf16be":
    case "utf16le":
      return 0;
    default:
      return accepted && decodable ? 0.75 : 0.5;
  }
}
__name(detectConfidence, "detectConfidence");
function createConverterRegistry(initialConverters = []) {
  const converters = /* @__PURE__ */ new Map();
  const primaryNames = /* @__PURE__ */ new Set();
  const api = {
    register(converter, options = {}) {
      if (!converter.name || !keyOf(converter.name)) {
        throw new TypeError("Converter name is required");
      }
      const names2 = [
        ...new Set([
          converter.name,
          ...converter.aliases ?? []
        ].map(keyOf))
      ];
      const conflicts = /* @__PURE__ */ new Set();
      for (const name of names2) {
        const existing = converters.get(name);
        if (!existing) {
          continue;
        }
        if (!options.override) {
          throw new Error(`Converter '${name}' is already registered`);
        }
        conflicts.add(existing);
      }
      for (const conflicting of conflicts) {
        removeConverter(converters, primaryNames, conflicting);
      }
      for (const name of names2) {
        converters.set(name, converter);
      }
      primaryNames.add(keyOf(converter.name));
      return this;
    },
    unregister(name) {
      const converter = converters.get(keyOf(name));
      if (!converter) {
        return false;
      }
      removeConverter(converters, primaryNames, converter);
      return true;
    },
    has(name) {
      return converters.has(keyOf(name));
    },
    get(name) {
      const converter = converters.get(keyOf(name));
      if (!converter) {
        throw new Error(`Converter '${name}' is not registered`);
      }
      return converter;
    },
    list() {
      return [
        ...primaryNames
      ].map((name) => this.get(name));
    },
    encode(name, data, options) {
      return this.get(name).encode(data, options);
    },
    decode(name, text, options) {
      return this.get(name).decode(text, options);
    },
    tryDecode(name, text, options) {
      try {
        return {
          ok: true,
          bytes: this.decode(name, text, options)
        };
      } catch (error) {
        return {
          ok: false,
          error: toError(error)
        };
      }
    },
    normalize(name, text, options) {
      const converter = this.get(name);
      return requireCapability(converter, name, "normalize").call(converter, text, options);
    },
    parse(name, text, options) {
      const converter = this.get(name);
      return requireCapability(converter, name, "parse").call(converter, text, options);
    },
    format(name, data, format4) {
      const converter = this.get(name);
      return requireCapability(converter, name, "format").call(converter, data, format4);
    },
    transcode(text, options) {
      const bytes = this.decode(options.from, text, options.fromOptions);
      return this.encode(options.to, bytes, options.toOptions);
    },
    detect(text, options = {}) {
      const formatNames = options.formats?.length ? options.formats.map((name) => String(name)) : this.list().map((converter) => converter.name).filter((name) => ![
        "binary",
        "utf8",
        "utf16be",
        "utf16le"
      ].includes(keyOf(name)));
      const detections = /* @__PURE__ */ new Map();
      for (const requestedName of formatNames) {
        const converter = this.get(requestedName);
        const confidence = detectConfidence(requestedName, text, converter);
        if (confidence <= 0) {
          continue;
        }
        const format4 = converter.name;
        const current = detections.get(format4);
        if (!current || confidence > current.confidence) {
          detections.set(format4, {
            format: format4,
            confidence
          });
        }
      }
      return [
        ...detections.values()
      ].sort((left, right) => right.confidence - left.confidence);
    }
  };
  for (const converter of initialConverters) {
    api.register(converter);
  }
  return api;
}
__name(createConverterRegistry, "createConverterRegistry");

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/converters/defaults.js
var binaryConverter = {
  name: "binary",
  aliases: [
    "latin1"
  ],
  encode: binary_exports.encode,
  decode: binary_exports.decode,
  is: binary_exports.is
};
var hexConverter = {
  name: "hex",
  encode: hex_exports.encode,
  decode: hex_exports.decode,
  format: hex_exports.format,
  is: hex_exports.is,
  normalize: hex_exports.normalize,
  parse: hex_exports.parse
};
var base64Converter = {
  name: "base64",
  aliases: [
    "b64"
  ],
  encode: base64_exports.encode,
  decode: base64_exports.decode,
  is: base64_exports.is,
  normalize: base64_exports.normalize
};
var base64urlConverter = {
  name: "base64url",
  aliases: [
    "base64-url",
    "b64url"
  ],
  encode: base64url_exports.encode,
  decode: base64url_exports.decode,
  is: base64url_exports.is,
  normalize: base64url_exports.normalize
};
var utf8Converter = {
  name: "utf8",
  aliases: [
    "utf-8"
  ],
  encode: /* @__PURE__ */ __name((data) => utf8_exports.decode(data), "encode"),
  decode: /* @__PURE__ */ __name((text) => utf8_exports.encode(text), "decode"),
  is: /* @__PURE__ */ __name((text) => typeof text === "string", "is")
};
var utf16beConverter = {
  name: "utf16be",
  aliases: [
    "utf16",
    "utf-16",
    "utf-16be"
  ],
  encode: /* @__PURE__ */ __name((data) => utf16_exports.decode(data), "encode"),
  decode: /* @__PURE__ */ __name((text) => utf16_exports.encode(text), "decode"),
  is: /* @__PURE__ */ __name((text) => typeof text === "string", "is")
};
var utf16leConverter = {
  name: "utf16le",
  aliases: [
    "utf-16le",
    "ucs2",
    "usc2"
  ],
  encode: /* @__PURE__ */ __name((data) => utf16_exports.decode(data, {
    littleEndian: true
  }), "encode"),
  decode: /* @__PURE__ */ __name((text) => utf16_exports.encode(text, {
    littleEndian: true
  }), "decode"),
  is: /* @__PURE__ */ __name((text) => typeof text === "string", "is")
};
var defaultConverters = [
  binaryConverter,
  hexConverter,
  base64Converter,
  base64urlConverter,
  utf8Converter,
  utf16beConverter,
  utf16leConverter,
  pemConverter
];
var defaultConverterRegistry = createConverterRegistry(defaultConverters);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/utils/2.0.3/build/esm/converters/convert.js
function encode8(name, data, ...args) {
  return defaultConverterRegistry.encode(name, data, ...args);
}
__name(encode8, "encode");
function decode8(name, text, ...args) {
  return defaultConverterRegistry.decode(name, text, ...args);
}
__name(decode8, "decode");
function tryDecode(name, text, ...args) {
  return defaultConverterRegistry.tryDecode(name, text, ...args);
}
__name(tryDecode, "tryDecode");
function normalize4(name, text, ...args) {
  return defaultConverterRegistry.normalize(name, text, ...args);
}
__name(normalize4, "normalize");
function parse3(name, text, ...args) {
  return defaultConverterRegistry.parse(name, text, ...args);
}
__name(parse3, "parse");
function format3(name, data, value) {
  return defaultConverterRegistry.format(name, data, value);
}
__name(format3, "format");
function transcode(text, options) {
  return defaultConverterRegistry.transcode(text, options);
}
__name(transcode, "transcode");
function detect(text, options) {
  return defaultConverterRegistry.detect(text, options);
}
__name(detect, "detect");
function normalizeEncodingName(encoding) {
  return encoding.toLowerCase();
}
__name(normalizeEncodingName, "normalizeEncodingName");
var convert = {
  encode: encode8,
  decode: decode8,
  tryDecode,
  normalize: normalize4,
  parse: parse3,
  format: format3,
  transcode,
  detect,
  to(format4, data, ...args) {
    return encode8(format4, data, ...args);
  },
  from(format4, text, ...args) {
    return decode8(format4, text, ...args);
  },
  toString(data, encoding = "utf8") {
    return encode8(encoding, data);
  },
  fromString(text, encoding = "utf8") {
    if (normalizeEncodingName(encoding) === "hex") {
      return toArrayBuffer(hex_exports.decode(text, {
        allowOddLength: true
      }));
    }
    return toArrayBuffer(decode8(encoding, text));
  },
  toBase64: base64_exports.encode,
  fromBase64: /* @__PURE__ */ __name((text) => toArrayBuffer(base64_exports.decode(text)), "fromBase64"),
  toBase64Url: base64url_exports.encode,
  fromBase64Url: /* @__PURE__ */ __name((text) => toArrayBuffer(base64url_exports.decode(text)), "fromBase64Url"),
  toHex: hex_exports.encode,
  fromHex: /* @__PURE__ */ __name((text) => toArrayBuffer(hex_exports.decode(text, {
    allowOddLength: true
  })), "fromHex"),
  toBinary: binary_exports.encode,
  fromBinary: /* @__PURE__ */ __name((text) => toArrayBuffer(binary_exports.decode(text)), "fromBinary"),
  toUtf8String: utf8_exports.decode,
  fromUtf8String: /* @__PURE__ */ __name((text) => toArrayBuffer(utf8_exports.encode(text)), "fromUtf8String"),
  toUtf16String: /* @__PURE__ */ __name((data, littleEndian = false) => utf16_exports.decode(data, {
    littleEndian
  }), "toUtf16String"),
  fromUtf16String: /* @__PURE__ */ __name((text, littleEndian = false) => toArrayBuffer(utf16_exports.encode(text, {
    littleEndian
  })), "fromUtf16String"),
  isHex: hex_exports.is,
  isBase64: base64_exports.is,
  isBase64Url: base64url_exports.is,
  formatString: base64_exports.normalize
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/enums.js
var AsnTypeTypes;
(function(AsnTypeTypes2) {
  AsnTypeTypes2[AsnTypeTypes2["Sequence"] = 0] = "Sequence";
  AsnTypeTypes2[AsnTypeTypes2["Set"] = 1] = "Set";
  AsnTypeTypes2[AsnTypeTypes2["Choice"] = 2] = "Choice";
})(AsnTypeTypes || (AsnTypeTypes = {}));
var AsnPropTypes;
(function(AsnPropTypes2) {
  AsnPropTypes2[AsnPropTypes2["Any"] = 1] = "Any";
  AsnPropTypes2[AsnPropTypes2["Boolean"] = 2] = "Boolean";
  AsnPropTypes2[AsnPropTypes2["OctetString"] = 3] = "OctetString";
  AsnPropTypes2[AsnPropTypes2["BitString"] = 4] = "BitString";
  AsnPropTypes2[AsnPropTypes2["Integer"] = 5] = "Integer";
  AsnPropTypes2[AsnPropTypes2["Enumerated"] = 6] = "Enumerated";
  AsnPropTypes2[AsnPropTypes2["ObjectIdentifier"] = 7] = "ObjectIdentifier";
  AsnPropTypes2[AsnPropTypes2["Utf8String"] = 8] = "Utf8String";
  AsnPropTypes2[AsnPropTypes2["BmpString"] = 9] = "BmpString";
  AsnPropTypes2[AsnPropTypes2["UniversalString"] = 10] = "UniversalString";
  AsnPropTypes2[AsnPropTypes2["NumericString"] = 11] = "NumericString";
  AsnPropTypes2[AsnPropTypes2["PrintableString"] = 12] = "PrintableString";
  AsnPropTypes2[AsnPropTypes2["TeletexString"] = 13] = "TeletexString";
  AsnPropTypes2[AsnPropTypes2["VideotexString"] = 14] = "VideotexString";
  AsnPropTypes2[AsnPropTypes2["IA5String"] = 15] = "IA5String";
  AsnPropTypes2[AsnPropTypes2["GraphicString"] = 16] = "GraphicString";
  AsnPropTypes2[AsnPropTypes2["VisibleString"] = 17] = "VisibleString";
  AsnPropTypes2[AsnPropTypes2["GeneralString"] = 18] = "GeneralString";
  AsnPropTypes2[AsnPropTypes2["CharacterString"] = 19] = "CharacterString";
  AsnPropTypes2[AsnPropTypes2["UTCTime"] = 20] = "UTCTime";
  AsnPropTypes2[AsnPropTypes2["GeneralizedTime"] = 21] = "GeneralizedTime";
  AsnPropTypes2[AsnPropTypes2["DATE"] = 22] = "DATE";
  AsnPropTypes2[AsnPropTypes2["TimeOfDay"] = 23] = "TimeOfDay";
  AsnPropTypes2[AsnPropTypes2["DateTime"] = 24] = "DateTime";
  AsnPropTypes2[AsnPropTypes2["Duration"] = 25] = "Duration";
  AsnPropTypes2[AsnPropTypes2["TIME"] = 26] = "TIME";
  AsnPropTypes2[AsnPropTypes2["Null"] = 27] = "Null";
  AsnPropTypes2[AsnPropTypes2["RelativeObjectIdentifier"] = 28] = "RelativeObjectIdentifier";
})(AsnPropTypes || (AsnPropTypes = {}));

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/types/bit_string.js
var BitString2 = class {
  static {
    __name(this, "BitString");
  }
  unusedBits = 0;
  value = new ArrayBuffer(0);
  constructor(params, unusedBits = 0) {
    if (params) {
      if (typeof params === "number") {
        this.fromNumber(params);
      } else if (isBufferSource(params)) {
        this.unusedBits = unusedBits;
        this.value = toArrayBuffer(params);
      } else {
        throw TypeError("Unsupported type of 'params' argument for BitString");
      }
    }
  }
  fromASN(asn) {
    if (!(asn instanceof BitString)) {
      throw new TypeError("Argument 'asn' is not instance of ASN.1 BitString");
    }
    this.unusedBits = asn.valueBlock.unusedBits;
    this.value = toArrayBuffer(asn.valueBlock.valueHex);
    return this;
  }
  toASN() {
    return new BitString({
      unusedBits: this.unusedBits,
      valueHex: this.value
    });
  }
  toSchema(name) {
    return new BitString({
      name
    });
  }
  toNumber() {
    let res = "";
    const uintArray = new Uint8Array(this.value);
    for (const octet of uintArray) {
      res += octet.toString(2).padStart(8, "0");
    }
    res = res.split("").reverse().join("");
    if (this.unusedBits) {
      res = res.slice(this.unusedBits).padStart(this.unusedBits, "0");
    }
    return parseInt(res, 2);
  }
  fromNumber(value) {
    let bits = value.toString(2);
    const octetSize = bits.length + 7 >> 3;
    this.unusedBits = (octetSize << 3) - bits.length;
    const octets = new Uint8Array(octetSize);
    bits = bits.padStart(octetSize << 3, "0").split("").reverse().join("");
    let index = 0;
    while (index < octetSize) {
      octets[index] = parseInt(bits.slice(index << 3, (index << 3) + 8), 2);
      index++;
    }
    this.value = octets.buffer;
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/types/octet_string.js
var OctetString2 = class {
  static {
    __name(this, "OctetString");
  }
  buffer;
  get byteLength() {
    return this.buffer.byteLength;
  }
  get byteOffset() {
    return 0;
  }
  constructor(param) {
    if (typeof param === "number") {
      this.buffer = new ArrayBuffer(param);
    } else {
      if (isBufferSource(param)) {
        this.buffer = toArrayBuffer(param);
      } else if (Array.isArray(param)) {
        this.buffer = new Uint8Array(param).buffer;
      } else {
        this.buffer = new ArrayBuffer(0);
      }
    }
  }
  fromASN(asn) {
    if (!(asn instanceof OctetString)) {
      throw new TypeError("Argument 'asn' is not instance of ASN.1 OctetString");
    }
    this.buffer = toArrayBuffer(asn.valueBlock.valueHex);
    return this;
  }
  toASN() {
    return new OctetString({
      valueHex: this.buffer
    });
  }
  toSchema(name) {
    return new OctetString({
      name
    });
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/converters.js
var AsnAnyConverter = {
  fromASN: /* @__PURE__ */ __name((value) => value instanceof Null ? null : toArrayBuffer(value.valueBeforeDecodeView), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => {
    if (value === null) {
      return new Null();
    }
    const schema = fromBER(value, {
      maxDepth: Infinity,
      maxNodes: Infinity,
      maxContentLength: Infinity
    });
    if (schema.result.error) {
      throw new Error(schema.result.error);
    }
    return schema.result;
  }, "toASN")
};
var AsnIntegerConverter = {
  fromASN: /* @__PURE__ */ __name((value) => value.valueBlock.valueHexView.byteLength >= 4 ? value.valueBlock.toString() : value.valueBlock.valueDec, "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new Integer({
    value: +value
  }), "toASN")
};
var AsnEnumeratedConverter = {
  fromASN: /* @__PURE__ */ __name((value) => value.valueBlock.valueDec, "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new Enumerated({
    value
  }), "toASN")
};
var AsnIntegerArrayBufferConverter = {
  fromASN: /* @__PURE__ */ __name((value) => toArrayBuffer(value.valueBlock.valueHexView), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new Integer({
    valueHex: value
  }), "toASN")
};
var AsnBitStringConverter = {
  fromASN: /* @__PURE__ */ __name((value) => toArrayBuffer(value.valueBlock.valueHexView), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new BitString({
    valueHex: value
  }), "toASN")
};
var AsnObjectIdentifierConverter = {
  fromASN: /* @__PURE__ */ __name((value) => value.valueBlock.toString(), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new ObjectIdentifier({
    value
  }), "toASN")
};
var AsnRelativeObjectIdentifierConverter = {
  fromASN: /* @__PURE__ */ __name((value) => value.valueBlock.toString(), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new RelativeObjectIdentifier({
    value
  }), "toASN")
};
var AsnBooleanConverter = {
  fromASN: /* @__PURE__ */ __name((value) => value.valueBlock.value, "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new Boolean2({
    value
  }), "toASN")
};
var AsnOctetStringConverter = {
  fromASN: /* @__PURE__ */ __name((value) => toArrayBuffer(value.valueBlock.valueHexView), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new OctetString({
    valueHex: value
  }), "toASN")
};
var AsnConstructedOctetStringConverter = {
  fromASN: /* @__PURE__ */ __name((value) => new OctetString2(value.getValue()), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => value.toASN(), "toASN")
};
function createStringConverter(Asn1Type) {
  return {
    fromASN: /* @__PURE__ */ __name((value) => value.valueBlock.value, "fromASN"),
    toASN: /* @__PURE__ */ __name((value) => new Asn1Type({
      value
    }), "toASN")
  };
}
__name(createStringConverter, "createStringConverter");
var AsnUtf8StringConverter = createStringConverter(Utf8String);
var AsnBmpStringConverter = createStringConverter(BmpString);
var AsnUniversalStringConverter = createStringConverter(UniversalString);
var AsnNumericStringConverter = createStringConverter(NumericString);
var AsnPrintableStringConverter = createStringConverter(PrintableString);
var AsnTeletexStringConverter = createStringConverter(TeletexString);
var AsnVideotexStringConverter = createStringConverter(VideotexString);
var AsnIA5StringConverter = createStringConverter(IA5String);
var AsnGraphicStringConverter = createStringConverter(GraphicString);
var AsnVisibleStringConverter = createStringConverter(VisibleString);
var AsnGeneralStringConverter = createStringConverter(GeneralString);
var AsnCharacterStringConverter = createStringConverter(CharacterString);
var AsnUTCTimeConverter = {
  fromASN: /* @__PURE__ */ __name((value) => value.toDate(), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new UTCTime({
    valueDate: value
  }), "toASN")
};
var AsnGeneralizedTimeConverter = {
  fromASN: /* @__PURE__ */ __name((value) => value.toDate(), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => new GeneralizedTime({
    valueDate: value
  }), "toASN")
};
var AsnNullConverter = {
  fromASN: /* @__PURE__ */ __name(() => null, "fromASN"),
  toASN: /* @__PURE__ */ __name(() => {
    return new Null();
  }, "toASN")
};
function defaultConverter(type) {
  switch (type) {
    case AsnPropTypes.Any:
      return AsnAnyConverter;
    case AsnPropTypes.BitString:
      return AsnBitStringConverter;
    case AsnPropTypes.BmpString:
      return AsnBmpStringConverter;
    case AsnPropTypes.Boolean:
      return AsnBooleanConverter;
    case AsnPropTypes.CharacterString:
      return AsnCharacterStringConverter;
    case AsnPropTypes.Enumerated:
      return AsnEnumeratedConverter;
    case AsnPropTypes.GeneralString:
      return AsnGeneralStringConverter;
    case AsnPropTypes.GeneralizedTime:
      return AsnGeneralizedTimeConverter;
    case AsnPropTypes.GraphicString:
      return AsnGraphicStringConverter;
    case AsnPropTypes.IA5String:
      return AsnIA5StringConverter;
    case AsnPropTypes.Integer:
      return AsnIntegerConverter;
    case AsnPropTypes.Null:
      return AsnNullConverter;
    case AsnPropTypes.NumericString:
      return AsnNumericStringConverter;
    case AsnPropTypes.ObjectIdentifier:
      return AsnObjectIdentifierConverter;
    case AsnPropTypes.RelativeObjectIdentifier:
      return AsnRelativeObjectIdentifierConverter;
    case AsnPropTypes.OctetString:
      return AsnOctetStringConverter;
    case AsnPropTypes.PrintableString:
      return AsnPrintableStringConverter;
    case AsnPropTypes.TeletexString:
      return AsnTeletexStringConverter;
    case AsnPropTypes.UTCTime:
      return AsnUTCTimeConverter;
    case AsnPropTypes.UniversalString:
      return AsnUniversalStringConverter;
    case AsnPropTypes.Utf8String:
      return AsnUtf8StringConverter;
    case AsnPropTypes.VideotexString:
      return AsnVideotexStringConverter;
    case AsnPropTypes.VisibleString:
      return AsnVisibleStringConverter;
    default:
      return null;
  }
}
__name(defaultConverter, "defaultConverter");

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/helper.js
function isConvertible(target) {
  if (typeof target === "function" && target.prototype) {
    if (target.prototype.toASN && target.prototype.fromASN) {
      return true;
    } else {
      return isConvertible(target.prototype);
    }
  } else {
    return !!(target && typeof target === "object" && "toASN" in target && "fromASN" in target);
  }
}
__name(isConvertible, "isConvertible");
function isTypeOfArray(target) {
  if (target) {
    const proto = Object.getPrototypeOf(target);
    if (proto?.prototype?.constructor === Array) {
      return true;
    }
    return isTypeOfArray(proto);
  }
  return false;
}
__name(isTypeOfArray, "isTypeOfArray");
function isArrayEqual(bytes1, bytes2) {
  if (!(bytes1 && bytes2)) {
    return false;
  }
  if (bytes1.byteLength !== bytes2.byteLength) {
    return false;
  }
  const b1 = new Uint8Array(bytes1);
  const b2 = new Uint8Array(bytes2);
  for (let i = 0; i < bytes1.byteLength; i++) {
    if (b1[i] !== b2[i]) {
      return false;
    }
  }
  return true;
}
__name(isArrayEqual, "isArrayEqual");

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/schema.js
var AsnSchemaStorage = class {
  static {
    __name(this, "AsnSchemaStorage");
  }
  items = /* @__PURE__ */ new WeakMap();
  has(target) {
    return this.items.has(target);
  }
  get(target, checkSchema = false) {
    const schema = this.items.get(target);
    if (!schema) {
      throw new Error(`Cannot get schema for '${target.prototype.constructor.name}' target`);
    }
    if (checkSchema && !schema.schema) {
      throw new Error(`Schema '${target.prototype.constructor.name}' doesn't contain ASN.1 schema. Call 'AsnSchemaStorage.cache'.`);
    }
    return schema;
  }
  cache(target) {
    const schema = this.get(target);
    if (!schema.schema) {
      schema.schema = this.create(target, true);
    }
  }
  createDefault(target) {
    const schema = {
      type: AsnTypeTypes.Sequence,
      items: {}
    };
    const parentSchema = this.findParentSchema(target);
    if (parentSchema) {
      Object.assign(schema, parentSchema);
      schema.items = Object.assign({}, schema.items, parentSchema.items);
    }
    return schema;
  }
  create(target, useNames) {
    const schema = this.items.get(target) || this.createDefault(target);
    const asn1Value = [];
    for (const key in schema.items) {
      const item = schema.items[key];
      const name = useNames ? key : "";
      let asn1Item;
      if (typeof item.type === "number") {
        const Asn1TypeName = AsnPropTypes[item.type];
        const Asn1Type = index_es_exports[Asn1TypeName];
        if (!Asn1Type) {
          throw new Error(`Cannot get ASN1 class by name '${Asn1TypeName}'`);
        }
        asn1Item = new Asn1Type({
          name
        });
      } else if (isConvertible(item.type)) {
        const instance2 = new item.type();
        asn1Item = instance2.toSchema(name);
      } else if (item.optional) {
        const itemSchema = this.get(item.type);
        if (itemSchema.type === AsnTypeTypes.Choice) {
          asn1Item = new Any({
            name
          });
        } else {
          asn1Item = this.create(item.type, false);
          asn1Item.name = name;
        }
      } else {
        asn1Item = new Any({
          name
        });
      }
      const optional = !!item.optional || item.defaultValue !== void 0;
      if (item.repeated) {
        asn1Item.name = "";
        const Container = item.repeated === "set" ? Set2 : Sequence;
        asn1Item = new Container({
          name: "",
          value: [
            new Repeated({
              name,
              value: asn1Item
            })
          ]
        });
      }
      if (item.context !== null && item.context !== void 0) {
        if (item.implicit) {
          if (typeof item.type === "number" || isConvertible(item.type)) {
            const Container = item.repeated ? Constructed : Primitive;
            asn1Value.push(new Container({
              name,
              optional,
              idBlock: {
                tagClass: 3,
                tagNumber: item.context
              }
            }));
          } else {
            this.cache(item.type);
            const isRepeated = !!item.repeated;
            let value = !isRepeated ? this.get(item.type, true).schema : asn1Item;
            value = "valueBlock" in value ? value.valueBlock.value : value.value;
            asn1Value.push(new Constructed({
              name: !isRepeated ? name : "",
              optional,
              idBlock: {
                tagClass: 3,
                tagNumber: item.context
              },
              value
            }));
          }
        } else {
          asn1Value.push(new Constructed({
            optional,
            idBlock: {
              tagClass: 3,
              tagNumber: item.context
            },
            value: [
              asn1Item
            ]
          }));
        }
      } else {
        asn1Item.optional = optional;
        asn1Value.push(asn1Item);
      }
    }
    switch (schema.type) {
      case AsnTypeTypes.Sequence:
        return new Sequence({
          value: asn1Value,
          name: ""
        });
      case AsnTypeTypes.Set:
        return new Set2({
          value: asn1Value,
          name: ""
        });
      case AsnTypeTypes.Choice:
        return new Choice({
          value: asn1Value,
          name: ""
        });
      default:
        throw new Error("Unsupported ASN1 type in use");
    }
  }
  set(target, schema) {
    this.items.set(target, schema);
    return this;
  }
  findParentSchema(target) {
    const parent = Object.getPrototypeOf(target);
    if (parent) {
      const schema = this.items.get(parent);
      return schema || this.findParentSchema(parent);
    }
    return null;
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/storage.js
var schemaStorage = new AsnSchemaStorage();

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/decorators.js
var AsnType = /* @__PURE__ */ __name((options) => (target) => {
  let schema;
  if (!schemaStorage.has(target)) {
    schema = schemaStorage.createDefault(target);
    schemaStorage.set(target, schema);
  } else {
    schema = schemaStorage.get(target);
  }
  Object.assign(schema, options);
}, "AsnType");
var AsnProp = /* @__PURE__ */ __name((options) => (target, propertyKey) => {
  let schema;
  if (!schemaStorage.has(target.constructor)) {
    schema = schemaStorage.createDefault(target.constructor);
    schemaStorage.set(target.constructor, schema);
  } else {
    schema = schemaStorage.get(target.constructor);
  }
  const copyOptions = Object.assign({}, options);
  if (typeof copyOptions.type === "number" && !copyOptions.converter) {
    const defaultConverter2 = defaultConverter(options.type);
    if (!defaultConverter2) {
      throw new Error(`Cannot get default converter for property '${propertyKey}' of ${target.constructor.name}`);
    }
    copyOptions.converter = defaultConverter2;
  }
  copyOptions.raw = options.raw;
  schema.items[propertyKey] = copyOptions;
}, "AsnProp");

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/errors/schema_validation.js
var AsnSchemaValidationError = class extends Error {
  static {
    __name(this, "AsnSchemaValidationError");
  }
  schemas = [];
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/parser.js
var AsnParser = class {
  static {
    __name(this, "AsnParser");
  }
  static parse(data, target, options) {
    const asn1Parsed = fromBER(toArrayBuffer(data), options?.berOptions);
    if (asn1Parsed.result.error) {
      throw new Error(asn1Parsed.result.error);
    }
    const res = this.fromASN(asn1Parsed.result, target, options);
    return res;
  }
  static fromASN(asn1Schema, target, options) {
    try {
      if (isConvertible(target)) {
        const value = new target();
        return value.fromASN(asn1Schema);
      }
      const schema = schemaStorage.get(target);
      schemaStorage.cache(target);
      let targetSchema = schema.schema;
      const choiceResult = this.handleChoiceTypes(asn1Schema, schema, target, targetSchema, options);
      if (choiceResult?.result) {
        return choiceResult.result;
      }
      if (choiceResult?.targetSchema) {
        targetSchema = choiceResult.targetSchema;
      }
      const sequenceResult = this.handleSequenceTypes(asn1Schema, schema, target, targetSchema);
      const res = new target();
      if (isTypeOfArray(target)) {
        return this.handleArrayTypes(asn1Schema, schema, target, options);
      }
      this.processSchemaItems(schema, sequenceResult, res, options);
      return res;
    } catch (error) {
      if (error instanceof AsnSchemaValidationError) {
        error.schemas.push(target.name);
      }
      throw error;
    }
  }
  static handleChoiceTypes(asn1Schema, schema, target, targetSchema, options) {
    if (asn1Schema.constructor === Constructed && schema.type === AsnTypeTypes.Choice && asn1Schema.idBlock.tagClass === 3) {
      for (const key in schema.items) {
        const schemaItem = schema.items[key];
        if (schemaItem.context === asn1Schema.idBlock.tagNumber && schemaItem.implicit) {
          if (typeof schemaItem.type === "function" && schemaStorage.has(schemaItem.type)) {
            const fieldSchema = schemaStorage.get(schemaItem.type);
            if (fieldSchema && fieldSchema.type === AsnTypeTypes.Sequence) {
              const newSeq = new Sequence();
              if ("value" in asn1Schema.valueBlock && Array.isArray(asn1Schema.valueBlock.value) && "value" in newSeq.valueBlock) {
                newSeq.valueBlock.value = asn1Schema.valueBlock.value;
                const fieldValue = this.fromASN(newSeq, schemaItem.type, options);
                const res = new target();
                res[key] = fieldValue;
                return {
                  result: res
                };
              }
            }
          }
        }
      }
    } else if (asn1Schema.constructor === Constructed && schema.type !== AsnTypeTypes.Choice) {
      const newTargetSchema = new Constructed({
        idBlock: {
          tagClass: 3,
          tagNumber: asn1Schema.idBlock.tagNumber
        },
        value: schema.schema.valueBlock.value
      });
      for (const key in schema.items) {
        delete asn1Schema[key];
      }
      return {
        targetSchema: newTargetSchema
      };
    }
    return null;
  }
  static handleSequenceTypes(asn1Schema, schema, target, targetSchema) {
    if (schema.type === AsnTypeTypes.Sequence) {
      const asn1ComparedSchema = compareSchema({}, asn1Schema, targetSchema);
      if (!asn1ComparedSchema.verified) {
        throw new AsnSchemaValidationError(`Data does not match to ${target.name} ASN1 schema.${asn1ComparedSchema.result.error ? ` ${asn1ComparedSchema.result.error}` : ""}`);
      }
      return asn1ComparedSchema;
    } else {
      const asn1ComparedSchema = compareSchema({}, asn1Schema, targetSchema);
      if (!asn1ComparedSchema.verified) {
        throw new AsnSchemaValidationError(`Data does not match to ${target.name} ASN1 schema.${asn1ComparedSchema.result.error ? ` ${asn1ComparedSchema.result.error}` : ""}`);
      }
      return asn1ComparedSchema;
    }
  }
  static processRepeatedField(asn1Elements, asn1Index, schemaItem) {
    let elementsToProcess = asn1Elements.slice(asn1Index);
    if (elementsToProcess.length === 1 && elementsToProcess[0].constructor.name === "Sequence") {
      const seq = elementsToProcess[0];
      if (seq.valueBlock && seq.valueBlock.value && Array.isArray(seq.valueBlock.value)) {
        elementsToProcess = seq.valueBlock.value;
      }
    }
    if (typeof schemaItem.type === "number") {
      const converter = defaultConverter(schemaItem.type);
      if (!converter) throw new Error(`No converter for ASN.1 type ${schemaItem.type}`);
      return elementsToProcess.filter((el) => el && el.valueBlock).map((el) => {
        try {
          return converter.fromASN(el);
        } catch {
          return void 0;
        }
      }).filter((v) => v !== void 0);
    } else {
      return elementsToProcess.filter((el) => el && el.valueBlock).map((el) => {
        try {
          return this.fromASN(el, schemaItem.type);
        } catch {
          return void 0;
        }
      }).filter((v) => v !== void 0);
    }
  }
  static processPrimitiveField(asn1Element, schemaItem) {
    const converter = defaultConverter(schemaItem.type);
    if (!converter) throw new Error(`No converter for ASN.1 type ${schemaItem.type}`);
    return converter.fromASN(asn1Element);
  }
  static isOptionalChoiceField(schemaItem) {
    return schemaItem.optional && typeof schemaItem.type === "function" && schemaStorage.has(schemaItem.type) && schemaStorage.get(schemaItem.type).type === AsnTypeTypes.Choice;
  }
  static processOptionalChoiceField(asn1Element, schemaItem) {
    try {
      const value = this.fromASN(asn1Element, schemaItem.type);
      return {
        processed: true,
        value
      };
    } catch (err) {
      if (err instanceof AsnSchemaValidationError && /Wrong values for Choice type/.test(err.message)) {
        return {
          processed: false
        };
      }
      throw err;
    }
  }
  static handleArrayTypes(asn1Schema, schema, target, options) {
    if (!("value" in asn1Schema.valueBlock && Array.isArray(asn1Schema.valueBlock.value))) {
      throw new Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");
    }
    const itemType = schema.itemType;
    if (typeof itemType === "number") {
      const converter = defaultConverter(itemType);
      if (!converter) {
        throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
      }
      return target.from(asn1Schema.valueBlock.value, (element) => converter.fromASN(element));
    } else {
      return target.from(asn1Schema.valueBlock.value, (element) => this.fromASN(element, itemType, options));
    }
  }
  static processSchemaItems(schema, asn1ComparedSchema, res, options) {
    for (const key in schema.items) {
      const asn1SchemaValue = asn1ComparedSchema.result[key];
      if (!asn1SchemaValue) {
        continue;
      }
      const schemaItem = schema.items[key];
      const schemaItemType = schemaItem.type;
      let parsedValue;
      if (typeof schemaItemType === "number" || isConvertible(schemaItemType)) {
        parsedValue = this.processPrimitiveSchemaItem(asn1SchemaValue, schemaItem, schemaItemType, options);
      } else {
        parsedValue = this.processComplexSchemaItem(asn1SchemaValue, schemaItem, schemaItemType, options);
      }
      if (parsedValue && typeof parsedValue === "object" && "value" in parsedValue && "raw" in parsedValue) {
        res[key] = parsedValue.value;
        res[`${key}Raw`] = parsedValue.raw;
      } else {
        res[key] = parsedValue;
      }
    }
  }
  static processPrimitiveSchemaItem(asn1SchemaValue, schemaItem, schemaItemType, options) {
    const converter = schemaItem.converter ?? (isConvertible(schemaItemType) ? new schemaItemType() : null);
    if (!converter) {
      throw new Error("Converter is empty");
    }
    if (schemaItem.repeated) {
      return this.processRepeatedPrimitiveItem(asn1SchemaValue, schemaItem, converter, options);
    } else {
      return this.processSinglePrimitiveItem(asn1SchemaValue, schemaItem, schemaItemType, converter, options);
    }
  }
  static processRepeatedPrimitiveItem(asn1SchemaValue, schemaItem, converter, options) {
    if (schemaItem.implicit) {
      const Container = schemaItem.repeated === "sequence" ? Sequence : Set2;
      const newItem = new Container();
      newItem.valueBlock = asn1SchemaValue.valueBlock;
      const newItemAsn = fromBER(newItem.toBER(false), options?.berOptions);
      if (newItemAsn.offset === -1) {
        throw new Error(`Cannot parse the child item. ${newItemAsn.result.error}`);
      }
      if (!("value" in newItemAsn.result.valueBlock && Array.isArray(newItemAsn.result.valueBlock.value))) {
        throw new Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");
      }
      const value = newItemAsn.result.valueBlock.value;
      return Array.from(value, (element) => converter.fromASN(element));
    } else {
      return Array.from(asn1SchemaValue, (element) => converter.fromASN(element));
    }
  }
  static processSinglePrimitiveItem(asn1SchemaValue, schemaItem, schemaItemType, converter, options) {
    let value = asn1SchemaValue;
    if (schemaItem.implicit) {
      let newItem;
      if (isConvertible(schemaItemType)) {
        newItem = new schemaItemType().toSchema("");
      } else {
        const Asn1TypeName = AsnPropTypes[schemaItemType];
        const Asn1Type = index_es_exports[Asn1TypeName];
        if (!Asn1Type) {
          throw new Error(`Cannot get '${Asn1TypeName}' class from asn1js module`);
        }
        newItem = new Asn1Type();
      }
      newItem.valueBlock = value.valueBlock;
      value = fromBER(newItem.toBER(false), options?.berOptions).result;
    }
    return converter.fromASN(value);
  }
  static processComplexSchemaItem(asn1SchemaValue, schemaItem, schemaItemType, options) {
    if (schemaItem.repeated) {
      if (!Array.isArray(asn1SchemaValue)) {
        throw new Error("Cannot get list of items from the ASN.1 parsed value. ASN.1 value should be iterable.");
      }
      return Array.from(asn1SchemaValue, (element) => this.fromASN(element, schemaItemType, options));
    } else {
      const valueToProcess = this.handleImplicitTagging(asn1SchemaValue, schemaItem, schemaItemType);
      if (this.isOptionalChoiceField(schemaItem)) {
        try {
          return this.fromASN(valueToProcess, schemaItemType, options);
        } catch (err) {
          if (err instanceof AsnSchemaValidationError && /Wrong values for Choice type/.test(err.message)) {
            return void 0;
          }
          throw err;
        }
      } else {
        const parsedValue = this.fromASN(valueToProcess, schemaItemType, options);
        if (schemaItem.raw) {
          return {
            value: parsedValue,
            raw: asn1SchemaValue.valueBeforeDecodeView
          };
        }
        return parsedValue;
      }
    }
  }
  static handleImplicitTagging(asn1SchemaValue, schemaItem, schemaItemType) {
    if (schemaItem.implicit && typeof schemaItem.context === "number") {
      const schema = schemaStorage.get(schemaItemType);
      if (schema.type === AsnTypeTypes.Sequence) {
        const newSeq = new Sequence();
        if ("value" in asn1SchemaValue.valueBlock && Array.isArray(asn1SchemaValue.valueBlock.value) && "value" in newSeq.valueBlock) {
          newSeq.valueBlock.value = asn1SchemaValue.valueBlock.value;
          return newSeq;
        }
      } else if (schema.type === AsnTypeTypes.Set) {
        const newSet = new Set2();
        if ("value" in asn1SchemaValue.valueBlock && Array.isArray(asn1SchemaValue.valueBlock.value) && "value" in newSet.valueBlock) {
          newSet.valueBlock.value = asn1SchemaValue.valueBlock.value;
          return newSet;
        }
      }
    }
    return asn1SchemaValue;
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/serializer.js
var AsnSerializer = class _AsnSerializer {
  static {
    __name(this, "AsnSerializer");
  }
  static serialize(obj) {
    if (obj instanceof BaseBlock) {
      return obj.toBER(false);
    }
    return this.toASN(obj).toBER(false);
  }
  static toASN(obj) {
    if (obj && typeof obj === "object" && isConvertible(obj)) {
      return obj.toASN();
    }
    if (!(obj && typeof obj === "object")) {
      throw new TypeError("Parameter 1 should be type of Object.");
    }
    const target = obj.constructor;
    const schema = schemaStorage.get(target);
    schemaStorage.cache(target);
    let asn1Value = [];
    if (schema.itemType) {
      if (!Array.isArray(obj)) {
        throw new TypeError("Parameter 1 should be type of Array.");
      }
      if (typeof schema.itemType === "number") {
        const converter = defaultConverter(schema.itemType);
        if (!converter) {
          throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
        }
        asn1Value = obj.map((o) => converter.toASN(o));
      } else {
        asn1Value = obj.map((o) => this.toAsnItem({
          type: schema.itemType
        }, "[]", target, o));
      }
    } else {
      for (const key in schema.items) {
        const schemaItem = schema.items[key];
        const objProp = obj[key];
        if (objProp === void 0 || schemaItem.defaultValue === objProp || typeof schemaItem.defaultValue === "object" && typeof objProp === "object" && isArrayEqual(this.serialize(schemaItem.defaultValue), this.serialize(objProp))) {
          continue;
        }
        const asn1Item = _AsnSerializer.toAsnItem(schemaItem, key, target, objProp);
        if (typeof schemaItem.context === "number") {
          if (schemaItem.implicit) {
            if (!schemaItem.repeated && (typeof schemaItem.type === "number" || isConvertible(schemaItem.type))) {
              const value = {};
              value.valueHex = asn1Item instanceof Null ? toArrayBuffer(asn1Item.valueBeforeDecodeView) : asn1Item.valueBlock.toBER();
              asn1Value.push(new Primitive({
                optional: schemaItem.optional,
                idBlock: {
                  tagClass: 3,
                  tagNumber: schemaItem.context
                },
                ...value
              }));
            } else {
              asn1Value.push(new Constructed({
                optional: schemaItem.optional,
                idBlock: {
                  tagClass: 3,
                  tagNumber: schemaItem.context
                },
                value: asn1Item.valueBlock.value
              }));
            }
          } else {
            asn1Value.push(new Constructed({
              optional: schemaItem.optional,
              idBlock: {
                tagClass: 3,
                tagNumber: schemaItem.context
              },
              value: [
                asn1Item
              ]
            }));
          }
        } else if (schemaItem.repeated) {
          asn1Value = asn1Value.concat(asn1Item);
        } else {
          asn1Value.push(asn1Item);
        }
      }
    }
    let asnSchema;
    switch (schema.type) {
      case AsnTypeTypes.Sequence:
        asnSchema = new Sequence({
          value: asn1Value
        });
        break;
      case AsnTypeTypes.Set:
        asnSchema = new Set2({
          value: asn1Value
        });
        break;
      case AsnTypeTypes.Choice:
        if (!asn1Value[0]) {
          throw new Error(`Schema '${target.name}' has wrong data. Choice cannot be empty.`);
        }
        asnSchema = asn1Value[0];
        break;
    }
    return asnSchema;
  }
  static toAsnItem(schemaItem, key, target, objProp) {
    let asn1Item;
    if (typeof schemaItem.type === "number") {
      const converter = schemaItem.converter;
      if (!converter) {
        throw new Error(`Property '${key}' doesn't have converter for type ${AsnPropTypes[schemaItem.type]} in schema '${target.name}'`);
      }
      if (schemaItem.repeated) {
        if (!Array.isArray(objProp)) {
          throw new TypeError("Parameter 'objProp' should be type of Array.");
        }
        const items = Array.from(objProp, (element) => converter.toASN(element));
        const Container = schemaItem.repeated === "sequence" ? Sequence : Set2;
        asn1Item = new Container({
          value: items
        });
      } else {
        asn1Item = converter.toASN(objProp);
      }
    } else {
      if (schemaItem.repeated) {
        if (!Array.isArray(objProp)) {
          throw new TypeError("Parameter 'objProp' should be type of Array.");
        }
        const items = Array.from(objProp, (element) => this.toASN(element));
        const Container = schemaItem.repeated === "sequence" ? Sequence : Set2;
        asn1Item = new Container({
          value: items
        });
      } else {
        asn1Item = this.toASN(objProp);
      }
    }
    return asn1Item;
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/objects.js
var AsnArray = class extends Array {
  static {
    __name(this, "AsnArray");
  }
  constructor(items = []) {
    if (typeof items === "number") {
      super(items);
    } else {
      super();
      for (const item of items) {
        this.push(item);
      }
    }
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-schema/2.11.0/build/es2015/convert.js
var AsnConvert = class _AsnConvert {
  static {
    __name(this, "AsnConvert");
  }
  static serialize(obj) {
    return AsnSerializer.serialize(obj);
  }
  static parse(data, target, options) {
    return AsnParser.parse(data, target, options);
  }
  static toString(data, options) {
    const buf = isBufferSource(data) ? toArrayBuffer(data) : _AsnConvert.serialize(data);
    const asn = fromBER(buf, options?.berOptions);
    if (asn.offset === -1) {
      throw new Error(`Cannot decode ASN.1 data. ${asn.result.error}`);
    }
    return asn.result.toString();
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/tslib/2.8.1/modules/index.js
var import_tslib = __toESM(require_tslib());
var { __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension } = import_tslib.default;

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/ip_converter.js
var IpConverter = class {
  static {
    __name(this, "IpConverter");
  }
  static isIPv4(ip) {
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
  }
  static parseIPv4(ip) {
    const parts = ip.split(".");
    if (parts.length !== 4) {
      throw new Error("Invalid IPv4 address");
    }
    return parts.map((part) => {
      const num = parseInt(part, 10);
      if (isNaN(num) || num < 0 || num > 255) {
        throw new Error("Invalid IPv4 address part");
      }
      return num;
    });
  }
  static parseIPv6(ip) {
    const expandedIP = this.expandIPv6(ip);
    const parts = expandedIP.split(":");
    if (parts.length !== 8) {
      throw new Error("Invalid IPv6 address");
    }
    return parts.reduce((bytes, part) => {
      const num = parseInt(part, 16);
      if (isNaN(num) || num < 0 || num > 65535) {
        throw new Error("Invalid IPv6 address part");
      }
      bytes.push(num >> 8 & 255);
      bytes.push(num & 255);
      return bytes;
    }, []);
  }
  static expandIPv6(ip) {
    if (!ip.includes("::")) {
      return ip;
    }
    const parts = ip.split("::");
    if (parts.length > 2) {
      throw new Error("Invalid IPv6 address");
    }
    const left = parts[0] ? parts[0].split(":") : [];
    const right = parts[1] ? parts[1].split(":") : [];
    const missing = 8 - (left.length + right.length);
    if (missing < 0) {
      throw new Error("Invalid IPv6 address");
    }
    return [
      ...left,
      ...Array(missing).fill("0"),
      ...right
    ].join(":");
  }
  static formatIPv6(bytes) {
    const parts = [];
    for (let i = 0; i < 16; i += 2) {
      parts.push((bytes[i] << 8 | bytes[i + 1]).toString(16));
    }
    return this.compressIPv6(parts.join(":"));
  }
  static compressIPv6(ip) {
    const parts = ip.split(":");
    let longestZeroStart = -1;
    let longestZeroLength = 0;
    let currentZeroStart = -1;
    let currentZeroLength = 0;
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === "0") {
        if (currentZeroStart === -1) {
          currentZeroStart = i;
        }
        currentZeroLength++;
      } else {
        if (currentZeroLength > longestZeroLength) {
          longestZeroStart = currentZeroStart;
          longestZeroLength = currentZeroLength;
        }
        currentZeroStart = -1;
        currentZeroLength = 0;
      }
    }
    if (currentZeroLength > longestZeroLength) {
      longestZeroStart = currentZeroStart;
      longestZeroLength = currentZeroLength;
    }
    if (longestZeroLength > 1) {
      const before = parts.slice(0, longestZeroStart).join(":");
      const after = parts.slice(longestZeroStart + longestZeroLength).join(":");
      return `${before}::${after}`;
    }
    return ip;
  }
  static parseCIDR(text) {
    const [addr, prefixStr] = text.split("/");
    const prefix = parseInt(prefixStr, 10);
    if (this.isIPv4(addr)) {
      if (prefix < 0 || prefix > 32) {
        throw new Error("Invalid IPv4 prefix length");
      }
      return [
        this.parseIPv4(addr),
        prefix
      ];
    } else {
      if (prefix < 0 || prefix > 128) {
        throw new Error("Invalid IPv6 prefix length");
      }
      return [
        this.parseIPv6(addr),
        prefix
      ];
    }
  }
  static decodeIP(value) {
    if (value.length === 64 && parseInt(value, 16) === 0) {
      return "::/0";
    }
    if (value.length !== 16) {
      return value;
    }
    const mask = parseInt(value.slice(8), 16).toString(2).split("").reduce((a, k) => a + +k, 0);
    let ip = value.slice(0, 8).replace(/(.{2})/g, (match) => `${parseInt(match, 16)}.`);
    ip = ip.slice(0, -1);
    return `${ip}/${mask}`;
  }
  static toString(buf) {
    const uint8 = new Uint8Array(buf);
    if (uint8.length === 4) {
      return Array.from(uint8).join(".");
    }
    if (uint8.length === 16) {
      return this.formatIPv6(uint8);
    }
    if (uint8.length === 8 || uint8.length === 32) {
      const half = uint8.length / 2;
      const addrBytes = uint8.slice(0, half);
      const maskBytes = uint8.slice(half);
      const isAllZeros = uint8.every((byte) => byte === 0);
      if (isAllZeros) {
        return uint8.length === 8 ? "0.0.0.0/0" : "::/0";
      }
      const prefixLen = maskBytes.reduce((a, b) => a + (b.toString(2).match(/1/g) || []).length, 0);
      if (uint8.length === 8) {
        const addrStr = Array.from(addrBytes).join(".");
        return `${addrStr}/${prefixLen}`;
      } else {
        const addrStr = this.formatIPv6(addrBytes);
        return `${addrStr}/${prefixLen}`;
      }
    }
    return this.decodeIP(hex_exports.encode(buf));
  }
  static fromString(text) {
    if (text.includes("/")) {
      const [addr, prefix] = this.parseCIDR(text);
      const maskBytes = new Uint8Array(addr.length);
      let bitsLeft = prefix;
      for (let i = 0; i < maskBytes.length; i++) {
        if (bitsLeft >= 8) {
          maskBytes[i] = 255;
          bitsLeft -= 8;
        } else if (bitsLeft > 0) {
          maskBytes[i] = 255 << 8 - bitsLeft;
          bitsLeft = 0;
        }
      }
      const out = new Uint8Array(addr.length * 2);
      out.set(addr, 0);
      out.set(maskBytes, addr.length);
      return out.buffer;
    }
    const bytes = this.isIPv4(text) ? this.parseIPv4(text) : this.parseIPv6(text);
    return new Uint8Array(bytes).buffer;
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/name.js
var RelativeDistinguishedName_1;
var RDNSequence_1;
var Name_1;
var DirectoryString = class DirectoryString2 {
  static {
    __name(this, "DirectoryString");
  }
  teletexString;
  printableString;
  universalString;
  utf8String;
  bmpString;
  constructor(params = {}) {
    Object.assign(this, params);
  }
  toString() {
    return this.bmpString || this.printableString || this.teletexString || this.universalString || this.utf8String || "";
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.TeletexString
  })
], DirectoryString.prototype, "teletexString", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.PrintableString
  })
], DirectoryString.prototype, "printableString", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.UniversalString
  })
], DirectoryString.prototype, "universalString", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Utf8String
  })
], DirectoryString.prototype, "utf8String", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BmpString
  })
], DirectoryString.prototype, "bmpString", void 0);
DirectoryString = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], DirectoryString);
var AttributeValue = class AttributeValue2 extends DirectoryString {
  static {
    __name(this, "AttributeValue");
  }
  ia5String;
  anyValue;
  constructor(params = {}) {
    super(params);
    Object.assign(this, params);
  }
  toString() {
    return this.ia5String || (this.anyValue ? hex_exports.encode(this.anyValue) : super.toString());
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String
  })
], AttributeValue.prototype, "ia5String", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any
  })
], AttributeValue.prototype, "anyValue", void 0);
AttributeValue = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], AttributeValue);
var AttributeTypeAndValue = class {
  static {
    __name(this, "AttributeTypeAndValue");
  }
  type = "";
  value = new AttributeValue();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], AttributeTypeAndValue.prototype, "type", void 0);
__decorate([
  AsnProp({
    type: AttributeValue
  })
], AttributeTypeAndValue.prototype, "value", void 0);
var RelativeDistinguishedName = RelativeDistinguishedName_1 = class RelativeDistinguishedName2 extends AsnArray {
  static {
    __name(this, "RelativeDistinguishedName");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RelativeDistinguishedName_1.prototype);
  }
};
RelativeDistinguishedName = RelativeDistinguishedName_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: AttributeTypeAndValue
  })
], RelativeDistinguishedName);
var RDNSequence = RDNSequence_1 = class RDNSequence2 extends AsnArray {
  static {
    __name(this, "RDNSequence");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RDNSequence_1.prototype);
  }
};
RDNSequence = RDNSequence_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: RelativeDistinguishedName
  })
], RDNSequence);
var Name = Name_1 = class Name2 extends RDNSequence {
  static {
    __name(this, "Name");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Name_1.prototype);
  }
};
Name = Name_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], Name);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/general_name.js
var AsnIpConverter = {
  fromASN: /* @__PURE__ */ __name((value) => IpConverter.toString(AsnOctetStringConverter.fromASN(value)), "fromASN"),
  toASN: /* @__PURE__ */ __name((value) => AsnOctetStringConverter.toASN(IpConverter.fromString(value)), "toASN")
};
var OtherName = class {
  static {
    __name(this, "OtherName");
  }
  typeId = "";
  value = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], OtherName.prototype, "typeId", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], OtherName.prototype, "value", void 0);
var EDIPartyName = class {
  static {
    __name(this, "EDIPartyName");
  }
  nameAssigner;
  partyName = new DirectoryString();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: DirectoryString,
    optional: true,
    context: 0,
    implicit: true
  })
], EDIPartyName.prototype, "nameAssigner", void 0);
__decorate([
  AsnProp({
    type: DirectoryString,
    context: 1,
    implicit: true
  })
], EDIPartyName.prototype, "partyName", void 0);
var GeneralName = class GeneralName2 {
  static {
    __name(this, "GeneralName");
  }
  otherName;
  rfc822Name;
  dNSName;
  x400Address;
  directoryName;
  ediPartyName;
  uniformResourceIdentifier;
  iPAddress;
  registeredID;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: OtherName,
    context: 0,
    implicit: true
  })
], GeneralName.prototype, "otherName", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String,
    context: 1,
    implicit: true
  })
], GeneralName.prototype, "rfc822Name", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String,
    context: 2,
    implicit: true
  })
], GeneralName.prototype, "dNSName", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 3,
    implicit: true
  })
], GeneralName.prototype, "x400Address", void 0);
__decorate([
  AsnProp({
    type: Name,
    context: 4,
    implicit: false
  })
], GeneralName.prototype, "directoryName", void 0);
__decorate([
  AsnProp({
    type: EDIPartyName,
    context: 5
  })
], GeneralName.prototype, "ediPartyName", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String,
    context: 6,
    implicit: true
  })
], GeneralName.prototype, "uniformResourceIdentifier", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.OctetString,
    context: 7,
    implicit: true,
    converter: AsnIpConverter
  })
], GeneralName.prototype, "iPAddress", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier,
    context: 8,
    implicit: true
  })
], GeneralName.prototype, "registeredID", void 0);
GeneralName = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], GeneralName);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/object_identifiers.js
var id_pkix = "1.3.6.1.5.5.7";
var id_pe = `${id_pkix}.1`;
var id_qt = `${id_pkix}.2`;
var id_kp = `${id_pkix}.3`;
var id_ad = `${id_pkix}.48`;
var id_qt_csp = `${id_qt}.1`;
var id_qt_unotice = `${id_qt}.2`;
var id_ad_ocsp = `${id_ad}.1`;
var id_ad_caIssuers = `${id_ad}.2`;
var id_ad_timeStamping = `${id_ad}.3`;
var id_ad_caRepository = `${id_ad}.5`;
var id_ce = "2.5.29";

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/authority_information_access.js
var AuthorityInfoAccessSyntax_1;
var id_pe_authorityInfoAccess = `${id_pe}.1`;
var AccessDescription = class {
  static {
    __name(this, "AccessDescription");
  }
  accessMethod = "";
  accessLocation = new GeneralName();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], AccessDescription.prototype, "accessMethod", void 0);
__decorate([
  AsnProp({
    type: GeneralName
  })
], AccessDescription.prototype, "accessLocation", void 0);
var AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = class AuthorityInfoAccessSyntax2 extends AsnArray {
  static {
    __name(this, "AuthorityInfoAccessSyntax");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, AuthorityInfoAccessSyntax_1.prototype);
  }
};
AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AccessDescription
  })
], AuthorityInfoAccessSyntax);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/authority_key_identifier.js
var id_ce_authorityKeyIdentifier = `${id_ce}.35`;
var KeyIdentifier = class extends OctetString2 {
  static {
    __name(this, "KeyIdentifier");
  }
};
var AuthorityKeyIdentifier = class {
  static {
    __name(this, "AuthorityKeyIdentifier");
  }
  keyIdentifier;
  authorityCertIssuer;
  authorityCertSerialNumber;
  constructor(params = {}) {
    if (params) {
      Object.assign(this, params);
    }
  }
};
__decorate([
  AsnProp({
    type: KeyIdentifier,
    context: 0,
    optional: true,
    implicit: true
  })
], AuthorityKeyIdentifier.prototype, "keyIdentifier", void 0);
__decorate([
  AsnProp({
    type: GeneralName,
    context: 1,
    optional: true,
    implicit: true,
    repeated: "sequence"
  })
], AuthorityKeyIdentifier.prototype, "authorityCertIssuer", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 2,
    optional: true,
    implicit: true,
    converter: AsnIntegerArrayBufferConverter
  })
], AuthorityKeyIdentifier.prototype, "authorityCertSerialNumber", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/basic_constraints.js
var id_ce_basicConstraints = `${id_ce}.19`;
var BasicConstraints = class {
  static {
    __name(this, "BasicConstraints");
  }
  cA = false;
  pathLenConstraint;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    defaultValue: false
  })
], BasicConstraints.prototype, "cA", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    optional: true
  })
], BasicConstraints.prototype, "pathLenConstraint", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/general_names.js
var GeneralNames_1;
var GeneralNames = GeneralNames_1 = class GeneralNames2 extends AsnArray {
  static {
    __name(this, "GeneralNames");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, GeneralNames_1.prototype);
  }
};
GeneralNames = GeneralNames_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: GeneralName
  })
], GeneralNames);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/certificate_issuer.js
var CertificateIssuer_1;
var id_ce_certificateIssuer = `${id_ce}.29`;
var CertificateIssuer = CertificateIssuer_1 = class CertificateIssuer2 extends GeneralNames {
  static {
    __name(this, "CertificateIssuer");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CertificateIssuer_1.prototype);
  }
};
CertificateIssuer = CertificateIssuer_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], CertificateIssuer);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/certificate_policies.js
var CertificatePolicies_1;
var id_ce_certificatePolicies = `${id_ce}.32`;
var id_ce_certificatePolicies_anyPolicy = `${id_ce_certificatePolicies}.0`;
var DisplayText = class DisplayText2 {
  static {
    __name(this, "DisplayText");
  }
  ia5String;
  visibleString;
  bmpString;
  utf8String;
  constructor(params = {}) {
    Object.assign(this, params);
  }
  toString() {
    return this.ia5String || this.visibleString || this.bmpString || this.utf8String || "";
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String
  })
], DisplayText.prototype, "ia5String", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.VisibleString
  })
], DisplayText.prototype, "visibleString", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BmpString
  })
], DisplayText.prototype, "bmpString", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Utf8String
  })
], DisplayText.prototype, "utf8String", void 0);
DisplayText = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], DisplayText);
var NoticeReference = class {
  static {
    __name(this, "NoticeReference");
  }
  organization = new DisplayText();
  noticeNumbers = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: DisplayText
  })
], NoticeReference.prototype, "organization", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    repeated: "sequence"
  })
], NoticeReference.prototype, "noticeNumbers", void 0);
var UserNotice = class {
  static {
    __name(this, "UserNotice");
  }
  noticeRef;
  explicitText;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: NoticeReference,
    optional: true
  })
], UserNotice.prototype, "noticeRef", void 0);
__decorate([
  AsnProp({
    type: DisplayText,
    optional: true
  })
], UserNotice.prototype, "explicitText", void 0);
var Qualifier = class Qualifier2 {
  static {
    __name(this, "Qualifier");
  }
  cPSuri;
  userNotice;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String
  })
], Qualifier.prototype, "cPSuri", void 0);
__decorate([
  AsnProp({
    type: UserNotice
  })
], Qualifier.prototype, "userNotice", void 0);
Qualifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], Qualifier);
var PolicyQualifierInfo = class {
  static {
    __name(this, "PolicyQualifierInfo");
  }
  policyQualifierId = "";
  qualifier = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], PolicyQualifierInfo.prototype, "policyQualifierId", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any
  })
], PolicyQualifierInfo.prototype, "qualifier", void 0);
var PolicyInformation = class {
  static {
    __name(this, "PolicyInformation");
  }
  policyIdentifier = "";
  policyQualifiers;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], PolicyInformation.prototype, "policyIdentifier", void 0);
__decorate([
  AsnProp({
    type: PolicyQualifierInfo,
    repeated: "sequence",
    optional: true
  })
], PolicyInformation.prototype, "policyQualifiers", void 0);
var CertificatePolicies = CertificatePolicies_1 = class CertificatePolicies2 extends AsnArray {
  static {
    __name(this, "CertificatePolicies");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CertificatePolicies_1.prototype);
  }
};
CertificatePolicies = CertificatePolicies_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: PolicyInformation
  })
], CertificatePolicies);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/crl_number.js
var id_ce_cRLNumber = `${id_ce}.20`;
var CRLNumber = class CRLNumber2 {
  static {
    __name(this, "CRLNumber");
  }
  value;
  constructor(value = 0) {
    this.value = value;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], CRLNumber.prototype, "value", void 0);
CRLNumber = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], CRLNumber);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/crl_delta_indicator.js
var id_ce_deltaCRLIndicator = `${id_ce}.27`;
var BaseCRLNumber = class BaseCRLNumber2 extends CRLNumber {
  static {
    __name(this, "BaseCRLNumber");
  }
};
BaseCRLNumber = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], BaseCRLNumber);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/crl_distribution_points.js
var CRLDistributionPoints_1;
var id_ce_cRLDistributionPoints = `${id_ce}.31`;
var ReasonFlags;
(function(ReasonFlags2) {
  ReasonFlags2[ReasonFlags2["unused"] = 1] = "unused";
  ReasonFlags2[ReasonFlags2["keyCompromise"] = 2] = "keyCompromise";
  ReasonFlags2[ReasonFlags2["cACompromise"] = 4] = "cACompromise";
  ReasonFlags2[ReasonFlags2["affiliationChanged"] = 8] = "affiliationChanged";
  ReasonFlags2[ReasonFlags2["superseded"] = 16] = "superseded";
  ReasonFlags2[ReasonFlags2["cessationOfOperation"] = 32] = "cessationOfOperation";
  ReasonFlags2[ReasonFlags2["certificateHold"] = 64] = "certificateHold";
  ReasonFlags2[ReasonFlags2["privilegeWithdrawn"] = 128] = "privilegeWithdrawn";
  ReasonFlags2[ReasonFlags2["aACompromise"] = 256] = "aACompromise";
})(ReasonFlags || (ReasonFlags = {}));
var Reason = class extends BitString2 {
  static {
    __name(this, "Reason");
  }
  toJSON() {
    const res = [];
    const flags = this.toNumber();
    if (flags & ReasonFlags.aACompromise) {
      res.push("aACompromise");
    }
    if (flags & ReasonFlags.affiliationChanged) {
      res.push("affiliationChanged");
    }
    if (flags & ReasonFlags.cACompromise) {
      res.push("cACompromise");
    }
    if (flags & ReasonFlags.certificateHold) {
      res.push("certificateHold");
    }
    if (flags & ReasonFlags.cessationOfOperation) {
      res.push("cessationOfOperation");
    }
    if (flags & ReasonFlags.keyCompromise) {
      res.push("keyCompromise");
    }
    if (flags & ReasonFlags.privilegeWithdrawn) {
      res.push("privilegeWithdrawn");
    }
    if (flags & ReasonFlags.superseded) {
      res.push("superseded");
    }
    if (flags & ReasonFlags.unused) {
      res.push("unused");
    }
    return res;
  }
  toString() {
    return `[${this.toJSON().join(", ")}]`;
  }
};
var DistributionPointName = class DistributionPointName2 {
  static {
    __name(this, "DistributionPointName");
  }
  fullName;
  nameRelativeToCRLIssuer;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralName,
    context: 0,
    repeated: "sequence",
    implicit: true
  })
], DistributionPointName.prototype, "fullName", void 0);
__decorate([
  AsnProp({
    type: RelativeDistinguishedName,
    context: 1,
    implicit: true
  })
], DistributionPointName.prototype, "nameRelativeToCRLIssuer", void 0);
DistributionPointName = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], DistributionPointName);
var DistributionPoint = class {
  static {
    __name(this, "DistributionPoint");
  }
  distributionPoint;
  reasons;
  cRLIssuer;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: DistributionPointName,
    context: 0,
    optional: true
  })
], DistributionPoint.prototype, "distributionPoint", void 0);
__decorate([
  AsnProp({
    type: Reason,
    context: 1,
    optional: true,
    implicit: true
  })
], DistributionPoint.prototype, "reasons", void 0);
__decorate([
  AsnProp({
    type: GeneralName,
    context: 2,
    optional: true,
    repeated: "sequence",
    implicit: true
  })
], DistributionPoint.prototype, "cRLIssuer", void 0);
var CRLDistributionPoints = CRLDistributionPoints_1 = class CRLDistributionPoints2 extends AsnArray {
  static {
    __name(this, "CRLDistributionPoints");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CRLDistributionPoints_1.prototype);
  }
};
CRLDistributionPoints = CRLDistributionPoints_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: DistributionPoint
  })
], CRLDistributionPoints);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/crl_freshest.js
var FreshestCRL_1;
var id_ce_freshestCRL = `${id_ce}.46`;
var FreshestCRL = FreshestCRL_1 = class FreshestCRL2 extends CRLDistributionPoints {
  static {
    __name(this, "FreshestCRL");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, FreshestCRL_1.prototype);
  }
};
FreshestCRL = FreshestCRL_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: DistributionPoint
  })
], FreshestCRL);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/crl_issuing_distribution_point.js
var id_ce_issuingDistributionPoint = `${id_ce}.28`;
var IssuingDistributionPoint = class _IssuingDistributionPoint {
  static {
    __name(this, "IssuingDistributionPoint");
  }
  static ONLY = false;
  distributionPoint;
  onlyContainsUserCerts = _IssuingDistributionPoint.ONLY;
  onlyContainsCACerts = _IssuingDistributionPoint.ONLY;
  onlySomeReasons;
  indirectCRL = _IssuingDistributionPoint.ONLY;
  onlyContainsAttributeCerts = _IssuingDistributionPoint.ONLY;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: DistributionPointName,
    context: 0,
    optional: true
  })
], IssuingDistributionPoint.prototype, "distributionPoint", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    context: 1,
    defaultValue: IssuingDistributionPoint.ONLY,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "onlyContainsUserCerts", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    context: 2,
    defaultValue: IssuingDistributionPoint.ONLY,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "onlyContainsCACerts", void 0);
__decorate([
  AsnProp({
    type: Reason,
    context: 3,
    optional: true,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "onlySomeReasons", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    context: 4,
    defaultValue: IssuingDistributionPoint.ONLY,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "indirectCRL", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    context: 5,
    defaultValue: IssuingDistributionPoint.ONLY,
    implicit: true
  })
], IssuingDistributionPoint.prototype, "onlyContainsAttributeCerts", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/crl_reason.js
var id_ce_cRLReasons = `${id_ce}.21`;
var CRLReasons;
(function(CRLReasons2) {
  CRLReasons2[CRLReasons2["unspecified"] = 0] = "unspecified";
  CRLReasons2[CRLReasons2["keyCompromise"] = 1] = "keyCompromise";
  CRLReasons2[CRLReasons2["cACompromise"] = 2] = "cACompromise";
  CRLReasons2[CRLReasons2["affiliationChanged"] = 3] = "affiliationChanged";
  CRLReasons2[CRLReasons2["superseded"] = 4] = "superseded";
  CRLReasons2[CRLReasons2["cessationOfOperation"] = 5] = "cessationOfOperation";
  CRLReasons2[CRLReasons2["certificateHold"] = 6] = "certificateHold";
  CRLReasons2[CRLReasons2["removeFromCRL"] = 8] = "removeFromCRL";
  CRLReasons2[CRLReasons2["privilegeWithdrawn"] = 9] = "privilegeWithdrawn";
  CRLReasons2[CRLReasons2["aACompromise"] = 10] = "aACompromise";
})(CRLReasons || (CRLReasons = {}));
var CRLReason = class CRLReason2 {
  static {
    __name(this, "CRLReason");
  }
  reason = CRLReasons.unspecified;
  constructor(reason = CRLReasons.unspecified) {
    this.reason = reason;
  }
  toJSON() {
    return CRLReasons[this.reason];
  }
  toString() {
    return this.toJSON();
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Enumerated
  })
], CRLReason.prototype, "reason", void 0);
CRLReason = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], CRLReason);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/extended_key_usage.js
var ExtendedKeyUsage_1;
var id_ce_extKeyUsage = `${id_ce}.37`;
var ExtendedKeyUsage = ExtendedKeyUsage_1 = class ExtendedKeyUsage2 extends AsnArray {
  static {
    __name(this, "ExtendedKeyUsage");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, ExtendedKeyUsage_1.prototype);
  }
};
ExtendedKeyUsage = ExtendedKeyUsage_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AsnPropTypes.ObjectIdentifier
  })
], ExtendedKeyUsage);
var anyExtendedKeyUsage = `${id_ce_extKeyUsage}.0`;
var id_kp_serverAuth = `${id_kp}.1`;
var id_kp_clientAuth = `${id_kp}.2`;
var id_kp_codeSigning = `${id_kp}.3`;
var id_kp_emailProtection = `${id_kp}.4`;
var id_kp_timeStamping = `${id_kp}.8`;
var id_kp_OCSPSigning = `${id_kp}.9`;

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/inhibit_any_policy.js
var id_ce_inhibitAnyPolicy = `${id_ce}.54`;
var InhibitAnyPolicy = class InhibitAnyPolicy2 {
  static {
    __name(this, "InhibitAnyPolicy");
  }
  value;
  constructor(value = new ArrayBuffer(0)) {
    this.value = value;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], InhibitAnyPolicy.prototype, "value", void 0);
InhibitAnyPolicy = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], InhibitAnyPolicy);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/invalidity_date.js
var id_ce_invalidityDate = `${id_ce}.24`;
var InvalidityDate = class InvalidityDate2 {
  static {
    __name(this, "InvalidityDate");
  }
  value = /* @__PURE__ */ new Date();
  constructor(value) {
    if (value) {
      this.value = value;
    }
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime
  })
], InvalidityDate.prototype, "value", void 0);
InvalidityDate = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], InvalidityDate);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/issuer_alternative_name.js
var IssueAlternativeName_1;
var id_ce_issuerAltName = `${id_ce}.18`;
var IssueAlternativeName = IssueAlternativeName_1 = class IssueAlternativeName2 extends GeneralNames {
  static {
    __name(this, "IssueAlternativeName");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, IssueAlternativeName_1.prototype);
  }
};
IssueAlternativeName = IssueAlternativeName_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], IssueAlternativeName);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/key_usage.js
var id_ce_keyUsage = `${id_ce}.15`;
var KeyUsageFlags;
(function(KeyUsageFlags3) {
  KeyUsageFlags3[KeyUsageFlags3["digitalSignature"] = 1] = "digitalSignature";
  KeyUsageFlags3[KeyUsageFlags3["nonRepudiation"] = 2] = "nonRepudiation";
  KeyUsageFlags3[KeyUsageFlags3["keyEncipherment"] = 4] = "keyEncipherment";
  KeyUsageFlags3[KeyUsageFlags3["dataEncipherment"] = 8] = "dataEncipherment";
  KeyUsageFlags3[KeyUsageFlags3["keyAgreement"] = 16] = "keyAgreement";
  KeyUsageFlags3[KeyUsageFlags3["keyCertSign"] = 32] = "keyCertSign";
  KeyUsageFlags3[KeyUsageFlags3["cRLSign"] = 64] = "cRLSign";
  KeyUsageFlags3[KeyUsageFlags3["encipherOnly"] = 128] = "encipherOnly";
  KeyUsageFlags3[KeyUsageFlags3["decipherOnly"] = 256] = "decipherOnly";
})(KeyUsageFlags || (KeyUsageFlags = {}));
var KeyUsage = class extends BitString2 {
  static {
    __name(this, "KeyUsage");
  }
  toJSON() {
    const flag = this.toNumber();
    const res = [];
    if (flag & KeyUsageFlags.cRLSign) {
      res.push("crlSign");
    }
    if (flag & KeyUsageFlags.dataEncipherment) {
      res.push("dataEncipherment");
    }
    if (flag & KeyUsageFlags.decipherOnly) {
      res.push("decipherOnly");
    }
    if (flag & KeyUsageFlags.digitalSignature) {
      res.push("digitalSignature");
    }
    if (flag & KeyUsageFlags.encipherOnly) {
      res.push("encipherOnly");
    }
    if (flag & KeyUsageFlags.keyAgreement) {
      res.push("keyAgreement");
    }
    if (flag & KeyUsageFlags.keyCertSign) {
      res.push("keyCertSign");
    }
    if (flag & KeyUsageFlags.keyEncipherment) {
      res.push("keyEncipherment");
    }
    if (flag & KeyUsageFlags.nonRepudiation) {
      res.push("nonRepudiation");
    }
    return res;
  }
  toString() {
    return `[${this.toJSON().join(", ")}]`;
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/name_constraints.js
var GeneralSubtrees_1;
var id_ce_nameConstraints = `${id_ce}.30`;
var GeneralSubtree = class {
  static {
    __name(this, "GeneralSubtree");
  }
  base = new GeneralName();
  minimum = 0;
  maximum;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralName
  })
], GeneralSubtree.prototype, "base", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 0,
    defaultValue: 0,
    implicit: true
  })
], GeneralSubtree.prototype, "minimum", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 1,
    optional: true,
    implicit: true
  })
], GeneralSubtree.prototype, "maximum", void 0);
var GeneralSubtrees = GeneralSubtrees_1 = class GeneralSubtrees2 extends AsnArray {
  static {
    __name(this, "GeneralSubtrees");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, GeneralSubtrees_1.prototype);
  }
};
GeneralSubtrees = GeneralSubtrees_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: GeneralSubtree
  })
], GeneralSubtrees);
var NameConstraints = class {
  static {
    __name(this, "NameConstraints");
  }
  permittedSubtrees;
  excludedSubtrees;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralSubtrees,
    context: 0,
    optional: true,
    implicit: true
  })
], NameConstraints.prototype, "permittedSubtrees", void 0);
__decorate([
  AsnProp({
    type: GeneralSubtrees,
    context: 1,
    optional: true,
    implicit: true
  })
], NameConstraints.prototype, "excludedSubtrees", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/policy_constraints.js
var id_ce_policyConstraints = `${id_ce}.36`;
var PolicyConstraints = class {
  static {
    __name(this, "PolicyConstraints");
  }
  requireExplicitPolicy;
  inhibitPolicyMapping;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 0,
    implicit: true,
    optional: true,
    converter: AsnIntegerArrayBufferConverter
  })
], PolicyConstraints.prototype, "requireExplicitPolicy", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 1,
    implicit: true,
    optional: true,
    converter: AsnIntegerArrayBufferConverter
  })
], PolicyConstraints.prototype, "inhibitPolicyMapping", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/policy_mappings.js
var PolicyMappings_1;
var id_ce_policyMappings = `${id_ce}.33`;
var PolicyMapping = class {
  static {
    __name(this, "PolicyMapping");
  }
  issuerDomainPolicy = "";
  subjectDomainPolicy = "";
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], PolicyMapping.prototype, "issuerDomainPolicy", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], PolicyMapping.prototype, "subjectDomainPolicy", void 0);
var PolicyMappings = PolicyMappings_1 = class PolicyMappings2 extends AsnArray {
  static {
    __name(this, "PolicyMappings");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, PolicyMappings_1.prototype);
  }
};
PolicyMappings = PolicyMappings_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: PolicyMapping
  })
], PolicyMappings);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/subject_alternative_name.js
var SubjectAlternativeName_1;
var id_ce_subjectAltName = `${id_ce}.17`;
var SubjectAlternativeName = SubjectAlternativeName_1 = class SubjectAlternativeName2 extends GeneralNames {
  static {
    __name(this, "SubjectAlternativeName");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SubjectAlternativeName_1.prototype);
  }
};
SubjectAlternativeName = SubjectAlternativeName_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], SubjectAlternativeName);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/attribute.js
var Attribute = class {
  static {
    __name(this, "Attribute");
  }
  type = "";
  values = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], Attribute.prototype, "type", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    repeated: "set"
  })
], Attribute.prototype, "values", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/subject_directory_attributes.js
var SubjectDirectoryAttributes_1;
var id_ce_subjectDirectoryAttributes = `${id_ce}.9`;
var SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = class SubjectDirectoryAttributes2 extends AsnArray {
  static {
    __name(this, "SubjectDirectoryAttributes");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SubjectDirectoryAttributes_1.prototype);
  }
};
SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Attribute
  })
], SubjectDirectoryAttributes);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/subject_key_identifier.js
var id_ce_subjectKeyIdentifier = `${id_ce}.14`;
var SubjectKeyIdentifier = class extends KeyIdentifier {
  static {
    __name(this, "SubjectKeyIdentifier");
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/private_key_usage_period.js
var id_ce_privateKeyUsagePeriod = `${id_ce}.16`;
var PrivateKeyUsagePeriod = class {
  static {
    __name(this, "PrivateKeyUsagePeriod");
  }
  notBefore;
  notAfter;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime,
    context: 0,
    implicit: true,
    optional: true
  })
], PrivateKeyUsagePeriod.prototype, "notBefore", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime,
    context: 1,
    implicit: true,
    optional: true
  })
], PrivateKeyUsagePeriod.prototype, "notAfter", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/entrust_version_info.js
var EntrustInfoFlags;
(function(EntrustInfoFlags2) {
  EntrustInfoFlags2[EntrustInfoFlags2["keyUpdateAllowed"] = 1] = "keyUpdateAllowed";
  EntrustInfoFlags2[EntrustInfoFlags2["newExtensions"] = 2] = "newExtensions";
  EntrustInfoFlags2[EntrustInfoFlags2["pKIXCertificate"] = 4] = "pKIXCertificate";
})(EntrustInfoFlags || (EntrustInfoFlags = {}));
var EntrustInfo = class extends BitString2 {
  static {
    __name(this, "EntrustInfo");
  }
  toJSON() {
    const res = [];
    const flags = this.toNumber();
    if (flags & EntrustInfoFlags.pKIXCertificate) {
      res.push("pKIXCertificate");
    }
    if (flags & EntrustInfoFlags.newExtensions) {
      res.push("newExtensions");
    }
    if (flags & EntrustInfoFlags.keyUpdateAllowed) {
      res.push("keyUpdateAllowed");
    }
    return res;
  }
  toString() {
    return `[${this.toJSON().join(", ")}]`;
  }
};
var EntrustVersionInfo = class {
  static {
    __name(this, "EntrustVersionInfo");
  }
  entrustVers = "";
  entrustInfoFlags = new EntrustInfo();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralString
  })
], EntrustVersionInfo.prototype, "entrustVers", void 0);
__decorate([
  AsnProp({
    type: EntrustInfo
  })
], EntrustVersionInfo.prototype, "entrustInfoFlags", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extensions/subject_info_access.js
var SubjectInfoAccessSyntax_1;
var id_pe_subjectInfoAccess = `${id_pe}.11`;
var SubjectInfoAccessSyntax = SubjectInfoAccessSyntax_1 = class SubjectInfoAccessSyntax2 extends AsnArray {
  static {
    __name(this, "SubjectInfoAccessSyntax");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SubjectInfoAccessSyntax_1.prototype);
  }
};
SubjectInfoAccessSyntax = SubjectInfoAccessSyntax_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AccessDescription
  })
], SubjectInfoAccessSyntax);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/algorithm_identifier.js
var AlgorithmIdentifier = class _AlgorithmIdentifier {
  static {
    __name(this, "AlgorithmIdentifier");
  }
  algorithm = "";
  parameters;
  constructor(params = {}) {
    Object.assign(this, params);
  }
  isEqual(data) {
    return data instanceof _AlgorithmIdentifier && data.algorithm == this.algorithm && (data.parameters && this.parameters && equal(data.parameters, this.parameters) || data.parameters === this.parameters);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], AlgorithmIdentifier.prototype, "algorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    optional: true
  })
], AlgorithmIdentifier.prototype, "parameters", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/subject_public_key_info.js
var SubjectPublicKeyInfo = class {
  static {
    __name(this, "SubjectPublicKeyInfo");
  }
  algorithm = new AlgorithmIdentifier();
  subjectPublicKey = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], SubjectPublicKeyInfo.prototype, "algorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString
  })
], SubjectPublicKeyInfo.prototype, "subjectPublicKey", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/time.js
var Time = class Time2 {
  static {
    __name(this, "Time");
  }
  utcTime;
  generalTime;
  constructor(time) {
    if (time) {
      if (typeof time === "string" || typeof time === "number" || time instanceof Date) {
        const date = new Date(time);
        date.setMilliseconds(0);
        if (date.getUTCFullYear() > 2049) {
          this.generalTime = date;
        } else {
          this.utcTime = date;
        }
      } else {
        Object.assign(this, time);
      }
    }
  }
  getTime() {
    const time = this.utcTime || this.generalTime;
    if (!time) {
      throw new Error("Cannot get time from CHOICE object");
    }
    return time;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.UTCTime
  })
], Time.prototype, "utcTime", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime
  })
], Time.prototype, "generalTime", void 0);
Time = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], Time);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/validity.js
var Validity = class {
  static {
    __name(this, "Validity");
  }
  notBefore = new Time(/* @__PURE__ */ new Date());
  notAfter = new Time(/* @__PURE__ */ new Date());
  constructor(params) {
    if (params) {
      this.notBefore = new Time(params.notBefore);
      this.notAfter = new Time(params.notAfter);
    }
  }
};
__decorate([
  AsnProp({
    type: Time
  })
], Validity.prototype, "notBefore", void 0);
__decorate([
  AsnProp({
    type: Time
  })
], Validity.prototype, "notAfter", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/extension.js
var Extensions_1;
var Extension = class _Extension {
  static {
    __name(this, "Extension");
  }
  static CRITICAL = false;
  extnID = "";
  critical = _Extension.CRITICAL;
  extnValue = new OctetString2();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], Extension.prototype, "extnID", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    defaultValue: Extension.CRITICAL
  })
], Extension.prototype, "critical", void 0);
__decorate([
  AsnProp({
    type: OctetString2
  })
], Extension.prototype, "extnValue", void 0);
var Extensions = Extensions_1 = class Extensions2 extends AsnArray {
  static {
    __name(this, "Extensions");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Extensions_1.prototype);
  }
};
Extensions = Extensions_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Extension
  })
], Extensions);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/types.js
var Version;
(function(Version4) {
  Version4[Version4["v1"] = 0] = "v1";
  Version4[Version4["v2"] = 1] = "v2";
  Version4[Version4["v3"] = 2] = "v3";
})(Version || (Version = {}));

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/tbs_certificate.js
var TBSCertificate = class {
  static {
    __name(this, "TBSCertificate");
  }
  version = Version.v1;
  serialNumber = new ArrayBuffer(0);
  signature = new AlgorithmIdentifier();
  issuer = new Name();
  validity = new Validity();
  subject = new Name();
  subjectPublicKeyInfo = new SubjectPublicKeyInfo();
  issuerUniqueID;
  subjectUniqueID;
  extensions;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 0,
    defaultValue: Version.v1
  })
], TBSCertificate.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], TBSCertificate.prototype, "serialNumber", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], TBSCertificate.prototype, "signature", void 0);
__decorate([
  AsnProp({
    type: Name
  })
], TBSCertificate.prototype, "issuer", void 0);
__decorate([
  AsnProp({
    type: Validity
  })
], TBSCertificate.prototype, "validity", void 0);
__decorate([
  AsnProp({
    type: Name
  })
], TBSCertificate.prototype, "subject", void 0);
__decorate([
  AsnProp({
    type: SubjectPublicKeyInfo
  })
], TBSCertificate.prototype, "subjectPublicKeyInfo", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    context: 1,
    implicit: true,
    optional: true
  })
], TBSCertificate.prototype, "issuerUniqueID", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    context: 2,
    implicit: true,
    optional: true
  })
], TBSCertificate.prototype, "subjectUniqueID", void 0);
__decorate([
  AsnProp({
    type: Extensions,
    context: 3,
    optional: true
  })
], TBSCertificate.prototype, "extensions", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/certificate.js
var Certificate = class {
  static {
    __name(this, "Certificate");
  }
  tbsCertificate = new TBSCertificate();
  tbsCertificateRaw;
  signatureAlgorithm = new AlgorithmIdentifier();
  signatureValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: TBSCertificate,
    raw: true
  })
], Certificate.prototype, "tbsCertificate", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], Certificate.prototype, "signatureAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString
  })
], Certificate.prototype, "signatureValue", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/tbs_cert_list.js
var RevokedCertificate = class {
  static {
    __name(this, "RevokedCertificate");
  }
  userCertificate = new ArrayBuffer(0);
  revocationDate = new Time();
  crlEntryExtensions;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RevokedCertificate.prototype, "userCertificate", void 0);
__decorate([
  AsnProp({
    type: Time
  })
], RevokedCertificate.prototype, "revocationDate", void 0);
__decorate([
  AsnProp({
    type: Extension,
    optional: true,
    repeated: "sequence"
  })
], RevokedCertificate.prototype, "crlEntryExtensions", void 0);
var TBSCertList = class {
  static {
    __name(this, "TBSCertList");
  }
  version;
  signature = new AlgorithmIdentifier();
  issuer = new Name();
  thisUpdate = new Time();
  nextUpdate;
  revokedCertificates;
  crlExtensions;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    optional: true
  })
], TBSCertList.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], TBSCertList.prototype, "signature", void 0);
__decorate([
  AsnProp({
    type: Name
  })
], TBSCertList.prototype, "issuer", void 0);
__decorate([
  AsnProp({
    type: Time
  })
], TBSCertList.prototype, "thisUpdate", void 0);
__decorate([
  AsnProp({
    type: Time,
    optional: true
  })
], TBSCertList.prototype, "nextUpdate", void 0);
__decorate([
  AsnProp({
    type: RevokedCertificate,
    repeated: "sequence",
    optional: true
  })
], TBSCertList.prototype, "revokedCertificates", void 0);
__decorate([
  AsnProp({
    type: Extension,
    optional: true,
    context: 0,
    repeated: "sequence"
  })
], TBSCertList.prototype, "crlExtensions", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509/2.11.0/build/es2015/certificate_list.js
var CertificateList = class {
  static {
    __name(this, "CertificateList");
  }
  tbsCertList = new TBSCertList();
  tbsCertListRaw;
  signatureAlgorithm = new AlgorithmIdentifier();
  signature = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: TBSCertList,
    raw: true
  })
], CertificateList.prototype, "tbsCertList", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], CertificateList.prototype, "signatureAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString
  })
], CertificateList.prototype, "signature", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/issuer_and_serial_number.js
var IssuerAndSerialNumber = class {
  static {
    __name(this, "IssuerAndSerialNumber");
  }
  issuer = new Name();
  serialNumber = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: Name
  })
], IssuerAndSerialNumber.prototype, "issuer", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], IssuerAndSerialNumber.prototype, "serialNumber", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/signer_identifier.js
var SignerIdentifier = class SignerIdentifier2 {
  static {
    __name(this, "SignerIdentifier");
  }
  subjectKeyIdentifier;
  issuerAndSerialNumber;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: SubjectKeyIdentifier,
    context: 0,
    implicit: true
  })
], SignerIdentifier.prototype, "subjectKeyIdentifier", void 0);
__decorate([
  AsnProp({
    type: IssuerAndSerialNumber
  })
], SignerIdentifier.prototype, "issuerAndSerialNumber", void 0);
SignerIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], SignerIdentifier);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/types.js
var CMSVersion;
(function(CMSVersion2) {
  CMSVersion2[CMSVersion2["v0"] = 0] = "v0";
  CMSVersion2[CMSVersion2["v1"] = 1] = "v1";
  CMSVersion2[CMSVersion2["v2"] = 2] = "v2";
  CMSVersion2[CMSVersion2["v3"] = 3] = "v3";
  CMSVersion2[CMSVersion2["v4"] = 4] = "v4";
  CMSVersion2[CMSVersion2["v5"] = 5] = "v5";
})(CMSVersion || (CMSVersion = {}));
var DigestAlgorithmIdentifier = class DigestAlgorithmIdentifier2 extends AlgorithmIdentifier {
  static {
    __name(this, "DigestAlgorithmIdentifier");
  }
};
DigestAlgorithmIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], DigestAlgorithmIdentifier);
var SignatureAlgorithmIdentifier = class SignatureAlgorithmIdentifier2 extends AlgorithmIdentifier {
  static {
    __name(this, "SignatureAlgorithmIdentifier");
  }
};
SignatureAlgorithmIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], SignatureAlgorithmIdentifier);
var KeyEncryptionAlgorithmIdentifier = class KeyEncryptionAlgorithmIdentifier2 extends AlgorithmIdentifier {
  static {
    __name(this, "KeyEncryptionAlgorithmIdentifier");
  }
};
KeyEncryptionAlgorithmIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], KeyEncryptionAlgorithmIdentifier);
var ContentEncryptionAlgorithmIdentifier = class ContentEncryptionAlgorithmIdentifier2 extends AlgorithmIdentifier {
  static {
    __name(this, "ContentEncryptionAlgorithmIdentifier");
  }
};
ContentEncryptionAlgorithmIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], ContentEncryptionAlgorithmIdentifier);
var MessageAuthenticationCodeAlgorithm = class MessageAuthenticationCodeAlgorithm2 extends AlgorithmIdentifier {
  static {
    __name(this, "MessageAuthenticationCodeAlgorithm");
  }
};
MessageAuthenticationCodeAlgorithm = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], MessageAuthenticationCodeAlgorithm);
var KeyDerivationAlgorithmIdentifier = class KeyDerivationAlgorithmIdentifier2 extends AlgorithmIdentifier {
  static {
    __name(this, "KeyDerivationAlgorithmIdentifier");
  }
};
KeyDerivationAlgorithmIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], KeyDerivationAlgorithmIdentifier);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/attribute.js
var Attribute2 = class {
  static {
    __name(this, "Attribute");
  }
  attrType = "";
  attrValues = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], Attribute2.prototype, "attrType", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    repeated: "set"
  })
], Attribute2.prototype, "attrValues", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/signer_info.js
var SignerInfos_1;
var SignerInfo = class {
  static {
    __name(this, "SignerInfo");
  }
  version = CMSVersion.v0;
  sid = new SignerIdentifier();
  digestAlgorithm = new DigestAlgorithmIdentifier();
  signedAttrs;
  signedAttrsRaw;
  signatureAlgorithm = new SignatureAlgorithmIdentifier();
  signature = new OctetString2();
  unsignedAttrs;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], SignerInfo.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: SignerIdentifier
  })
], SignerInfo.prototype, "sid", void 0);
__decorate([
  AsnProp({
    type: DigestAlgorithmIdentifier
  })
], SignerInfo.prototype, "digestAlgorithm", void 0);
__decorate([
  AsnProp({
    type: Attribute2,
    repeated: "set",
    context: 0,
    implicit: true,
    optional: true,
    raw: true
  })
], SignerInfo.prototype, "signedAttrs", void 0);
__decorate([
  AsnProp({
    type: SignatureAlgorithmIdentifier
  })
], SignerInfo.prototype, "signatureAlgorithm", void 0);
__decorate([
  AsnProp({
    type: OctetString2
  })
], SignerInfo.prototype, "signature", void 0);
__decorate([
  AsnProp({
    type: Attribute2,
    repeated: "set",
    context: 1,
    implicit: true,
    optional: true
  })
], SignerInfo.prototype, "unsignedAttrs", void 0);
var SignerInfos = SignerInfos_1 = class SignerInfos2 extends AsnArray {
  static {
    __name(this, "SignerInfos");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SignerInfos_1.prototype);
  }
};
SignerInfos = SignerInfos_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: SignerInfo
  })
], SignerInfos);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/attributes/counter_signature.js
var CounterSignature = class CounterSignature2 extends SignerInfo {
  static {
    __name(this, "CounterSignature");
  }
};
CounterSignature = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], CounterSignature);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/attributes/signing_time.js
var SigningTime = class SigningTime2 extends Time {
  static {
    __name(this, "SigningTime");
  }
};
SigningTime = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], SigningTime);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/aa_clear_attrs.js
var ACClearAttrs = class {
  static {
    __name(this, "ACClearAttrs");
  }
  acIssuer = new GeneralName();
  acSerial = 0;
  attrs = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralName
  })
], ACClearAttrs.prototype, "acIssuer", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], ACClearAttrs.prototype, "acSerial", void 0);
__decorate([
  AsnProp({
    type: Attribute,
    repeated: "sequence"
  })
], ACClearAttrs.prototype, "attrs", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/attr_spec.js
var AttrSpec_1;
var AttrSpec = AttrSpec_1 = class AttrSpec2 extends AsnArray {
  static {
    __name(this, "AttrSpec");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, AttrSpec_1.prototype);
  }
};
AttrSpec = AttrSpec_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AsnPropTypes.ObjectIdentifier
  })
], AttrSpec);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/aa_controls.js
var AAControls = class {
  static {
    __name(this, "AAControls");
  }
  pathLenConstraint;
  permittedAttrs;
  excludedAttrs;
  permitUnSpecified = true;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    optional: true
  })
], AAControls.prototype, "pathLenConstraint", void 0);
__decorate([
  AsnProp({
    type: AttrSpec,
    implicit: true,
    context: 0,
    optional: true
  })
], AAControls.prototype, "permittedAttrs", void 0);
__decorate([
  AsnProp({
    type: AttrSpec,
    implicit: true,
    context: 1,
    optional: true
  })
], AAControls.prototype, "excludedAttrs", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    defaultValue: true
  })
], AAControls.prototype, "permitUnSpecified", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/issuer_serial.js
var IssuerSerial = class {
  static {
    __name(this, "IssuerSerial");
  }
  issuer = new GeneralNames();
  serial = new ArrayBuffer(0);
  issuerUID = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralNames
  })
], IssuerSerial.prototype, "issuer", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], IssuerSerial.prototype, "serial", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    optional: true
  })
], IssuerSerial.prototype, "issuerUID", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/object_digest_info.js
var DigestedObjectType;
(function(DigestedObjectType2) {
  DigestedObjectType2[DigestedObjectType2["publicKey"] = 0] = "publicKey";
  DigestedObjectType2[DigestedObjectType2["publicKeyCert"] = 1] = "publicKeyCert";
  DigestedObjectType2[DigestedObjectType2["otherObjectTypes"] = 2] = "otherObjectTypes";
})(DigestedObjectType || (DigestedObjectType = {}));
var ObjectDigestInfo = class {
  static {
    __name(this, "ObjectDigestInfo");
  }
  digestedObjectType = DigestedObjectType.publicKey;
  otherObjectTypeID;
  digestAlgorithm = new AlgorithmIdentifier();
  objectDigest = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Enumerated
  })
], ObjectDigestInfo.prototype, "digestedObjectType", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier,
    optional: true
  })
], ObjectDigestInfo.prototype, "otherObjectTypeID", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], ObjectDigestInfo.prototype, "digestAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString
  })
], ObjectDigestInfo.prototype, "objectDigest", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/v2_form.js
var V2Form = class {
  static {
    __name(this, "V2Form");
  }
  issuerName;
  baseCertificateID;
  objectDigestInfo;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralNames,
    optional: true
  })
], V2Form.prototype, "issuerName", void 0);
__decorate([
  AsnProp({
    type: IssuerSerial,
    context: 0,
    implicit: true,
    optional: true
  })
], V2Form.prototype, "baseCertificateID", void 0);
__decorate([
  AsnProp({
    type: ObjectDigestInfo,
    context: 1,
    implicit: true,
    optional: true
  })
], V2Form.prototype, "objectDigestInfo", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/attr_cert_issuer.js
var AttCertIssuer = class AttCertIssuer2 {
  static {
    __name(this, "AttCertIssuer");
  }
  v1Form;
  v2Form;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralName,
    repeated: "sequence"
  })
], AttCertIssuer.prototype, "v1Form", void 0);
__decorate([
  AsnProp({
    type: V2Form,
    context: 0,
    implicit: true
  })
], AttCertIssuer.prototype, "v2Form", void 0);
AttCertIssuer = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], AttCertIssuer);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/attr_cert_validity_period.js
var AttCertValidityPeriod = class {
  static {
    __name(this, "AttCertValidityPeriod");
  }
  notBeforeTime = /* @__PURE__ */ new Date();
  notAfterTime = /* @__PURE__ */ new Date();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime
  })
], AttCertValidityPeriod.prototype, "notBeforeTime", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime
  })
], AttCertValidityPeriod.prototype, "notAfterTime", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/holder.js
var Holder = class {
  static {
    __name(this, "Holder");
  }
  baseCertificateID;
  entityName;
  objectDigestInfo;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: IssuerSerial,
    implicit: true,
    context: 0,
    optional: true
  })
], Holder.prototype, "baseCertificateID", void 0);
__decorate([
  AsnProp({
    type: GeneralNames,
    implicit: true,
    context: 1,
    optional: true
  })
], Holder.prototype, "entityName", void 0);
__decorate([
  AsnProp({
    type: ObjectDigestInfo,
    implicit: true,
    context: 2,
    optional: true
  })
], Holder.prototype, "objectDigestInfo", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/attribute_certificate_info.js
var AttCertVersion;
(function(AttCertVersion2) {
  AttCertVersion2[AttCertVersion2["v2"] = 1] = "v2";
})(AttCertVersion || (AttCertVersion = {}));
var AttributeCertificateInfo = class {
  static {
    __name(this, "AttributeCertificateInfo");
  }
  version = AttCertVersion.v2;
  holder = new Holder();
  issuer = new AttCertIssuer();
  signature = new AlgorithmIdentifier();
  serialNumber = new ArrayBuffer(0);
  attrCertValidityPeriod = new AttCertValidityPeriod();
  attributes = [];
  issuerUniqueID;
  extensions;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], AttributeCertificateInfo.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: Holder
  })
], AttributeCertificateInfo.prototype, "holder", void 0);
__decorate([
  AsnProp({
    type: AttCertIssuer
  })
], AttributeCertificateInfo.prototype, "issuer", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], AttributeCertificateInfo.prototype, "signature", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], AttributeCertificateInfo.prototype, "serialNumber", void 0);
__decorate([
  AsnProp({
    type: AttCertValidityPeriod
  })
], AttributeCertificateInfo.prototype, "attrCertValidityPeriod", void 0);
__decorate([
  AsnProp({
    type: Attribute,
    repeated: "sequence"
  })
], AttributeCertificateInfo.prototype, "attributes", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    optional: true
  })
], AttributeCertificateInfo.prototype, "issuerUniqueID", void 0);
__decorate([
  AsnProp({
    type: Extensions,
    optional: true
  })
], AttributeCertificateInfo.prototype, "extensions", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/attribute_certificate.js
var AttributeCertificate = class {
  static {
    __name(this, "AttributeCertificate");
  }
  acinfo = new AttributeCertificateInfo();
  signatureAlgorithm = new AlgorithmIdentifier();
  signatureValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AttributeCertificateInfo
  })
], AttributeCertificate.prototype, "acinfo", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], AttributeCertificate.prototype, "signatureAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString
  })
], AttributeCertificate.prototype, "signatureValue", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/class_list.js
var ClassListFlags;
(function(ClassListFlags2) {
  ClassListFlags2[ClassListFlags2["unmarked"] = 1] = "unmarked";
  ClassListFlags2[ClassListFlags2["unclassified"] = 2] = "unclassified";
  ClassListFlags2[ClassListFlags2["restricted"] = 4] = "restricted";
  ClassListFlags2[ClassListFlags2["confidential"] = 8] = "confidential";
  ClassListFlags2[ClassListFlags2["secret"] = 16] = "secret";
  ClassListFlags2[ClassListFlags2["topSecret"] = 32] = "topSecret";
})(ClassListFlags || (ClassListFlags = {}));
var ClassList = class extends BitString2 {
  static {
    __name(this, "ClassList");
  }
};

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/security_category.js
var SecurityCategory = class {
  static {
    __name(this, "SecurityCategory");
  }
  type = "";
  value = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier,
    implicit: true,
    context: 0
  })
], SecurityCategory.prototype, "type", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    implicit: true,
    context: 1
  })
], SecurityCategory.prototype, "value", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/clearance.js
var Clearance = class {
  static {
    __name(this, "Clearance");
  }
  policyId = "";
  classList = new ClassList(ClassListFlags.unclassified);
  securityCategories;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], Clearance.prototype, "policyId", void 0);
__decorate([
  AsnProp({
    type: ClassList,
    defaultValue: new ClassList(ClassListFlags.unclassified)
  })
], Clearance.prototype, "classList", void 0);
__decorate([
  AsnProp({
    type: SecurityCategory,
    repeated: "set"
  })
], Clearance.prototype, "securityCategories", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/ietf_attr_syntax.js
var IetfAttrSyntaxValueChoices = class {
  static {
    __name(this, "IetfAttrSyntaxValueChoices");
  }
  cotets;
  oid;
  string;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: OctetString2
  })
], IetfAttrSyntaxValueChoices.prototype, "cotets", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], IetfAttrSyntaxValueChoices.prototype, "oid", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Utf8String
  })
], IetfAttrSyntaxValueChoices.prototype, "string", void 0);
var IetfAttrSyntax = class {
  static {
    __name(this, "IetfAttrSyntax");
  }
  policyAuthority;
  values = [];
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralNames,
    implicit: true,
    context: 0,
    optional: true
  })
], IetfAttrSyntax.prototype, "policyAuthority", void 0);
__decorate([
  AsnProp({
    type: IetfAttrSyntaxValueChoices,
    repeated: "sequence"
  })
], IetfAttrSyntax.prototype, "values", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/object_identifiers.js
var id_pe_ac_auditIdentity = `${id_pe}.4`;
var id_pe_aaControls = `${id_pe}.6`;
var id_pe_ac_proxying = `${id_pe}.10`;
var id_ce_targetInformation = `${id_ce}.55`;
var id_aca = `${id_pkix}.10`;
var id_aca_authenticationInfo = `${id_aca}.1`;
var id_aca_accessIdentity = `${id_aca}.2`;
var id_aca_chargingIdentity = `${id_aca}.3`;
var id_aca_group = `${id_aca}.4`;
var id_aca_encAttrs = `${id_aca}.6`;
var id_at = "2.5.4";
var id_at_role = `${id_at}.72`;

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/target.js
var Targets_1;
var TargetCert = class {
  static {
    __name(this, "TargetCert");
  }
  targetCertificate = new IssuerSerial();
  targetName;
  certDigestInfo;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: IssuerSerial
  })
], TargetCert.prototype, "targetCertificate", void 0);
__decorate([
  AsnProp({
    type: GeneralName,
    optional: true
  })
], TargetCert.prototype, "targetName", void 0);
__decorate([
  AsnProp({
    type: ObjectDigestInfo,
    optional: true
  })
], TargetCert.prototype, "certDigestInfo", void 0);
var Target = class Target2 {
  static {
    __name(this, "Target");
  }
  targetName;
  targetGroup;
  targetCert;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralName,
    context: 0,
    implicit: true
  })
], Target.prototype, "targetName", void 0);
__decorate([
  AsnProp({
    type: GeneralName,
    context: 1,
    implicit: true
  })
], Target.prototype, "targetGroup", void 0);
__decorate([
  AsnProp({
    type: TargetCert,
    context: 2,
    implicit: true
  })
], Target.prototype, "targetCert", void 0);
Target = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], Target);
var Targets = Targets_1 = class Targets2 extends AsnArray {
  static {
    __name(this, "Targets");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Targets_1.prototype);
  }
};
Targets = Targets_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Target
  })
], Targets);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/proxy_info.js
var ProxyInfo_1;
var ProxyInfo = ProxyInfo_1 = class ProxyInfo2 extends AsnArray {
  static {
    __name(this, "ProxyInfo");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, ProxyInfo_1.prototype);
  }
};
ProxyInfo = ProxyInfo_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Targets
  })
], ProxyInfo);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/role_syntax.js
var RoleSyntax = class {
  static {
    __name(this, "RoleSyntax");
  }
  roleAuthority;
  roleName;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralNames,
    implicit: true,
    context: 0,
    optional: true
  })
], RoleSyntax.prototype, "roleAuthority", void 0);
__decorate([
  AsnProp({
    type: GeneralName,
    implicit: true,
    context: 1
  })
], RoleSyntax.prototype, "roleName", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-attr/2.11.0/build/es2015/svce_auth_info.js
var SvceAuthInfo = class {
  static {
    __name(this, "SvceAuthInfo");
  }
  service = new GeneralName();
  ident = new GeneralName();
  authInfo;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: GeneralName
  })
], SvceAuthInfo.prototype, "service", void 0);
__decorate([
  AsnProp({
    type: GeneralName
  })
], SvceAuthInfo.prototype, "ident", void 0);
__decorate([
  AsnProp({
    type: OctetString2,
    optional: true
  })
], SvceAuthInfo.prototype, "authInfo", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/certificate_choices.js
var CertificateSet_1;
var OtherCertificateFormat = class {
  static {
    __name(this, "OtherCertificateFormat");
  }
  otherCertFormat = "";
  otherCert = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], OtherCertificateFormat.prototype, "otherCertFormat", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any
  })
], OtherCertificateFormat.prototype, "otherCert", void 0);
var CertificateChoices = class CertificateChoices2 {
  static {
    __name(this, "CertificateChoices");
  }
  certificate;
  v2AttrCert;
  other;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: Certificate
  })
], CertificateChoices.prototype, "certificate", void 0);
__decorate([
  AsnProp({
    type: AttributeCertificate,
    context: 2,
    implicit: true
  })
], CertificateChoices.prototype, "v2AttrCert", void 0);
__decorate([
  AsnProp({
    type: OtherCertificateFormat,
    context: 3,
    implicit: true
  })
], CertificateChoices.prototype, "other", void 0);
CertificateChoices = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], CertificateChoices);
var CertificateSet = CertificateSet_1 = class CertificateSet2 extends AsnArray {
  static {
    __name(this, "CertificateSet");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CertificateSet_1.prototype);
  }
};
CertificateSet = CertificateSet_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: CertificateChoices
  })
], CertificateSet);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/content_info.js
var ContentInfo = class {
  static {
    __name(this, "ContentInfo");
  }
  contentType = "";
  content = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], ContentInfo.prototype, "contentType", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], ContentInfo.prototype, "content", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/encapsulated_content_info.js
var EncapsulatedContent = class EncapsulatedContent2 {
  static {
    __name(this, "EncapsulatedContent");
  }
  single;
  any;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: OctetString2
  })
], EncapsulatedContent.prototype, "single", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any
  })
], EncapsulatedContent.prototype, "any", void 0);
EncapsulatedContent = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], EncapsulatedContent);
var EncapsulatedContentInfo = class {
  static {
    __name(this, "EncapsulatedContentInfo");
  }
  eContentType = "";
  eContent;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], EncapsulatedContentInfo.prototype, "eContentType", void 0);
__decorate([
  AsnProp({
    type: EncapsulatedContent,
    context: 0,
    optional: true
  })
], EncapsulatedContentInfo.prototype, "eContent", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/encrypted_content_info.js
var EncryptedContent = class EncryptedContent2 {
  static {
    __name(this, "EncryptedContent");
  }
  value;
  constructedValue;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: OctetString2,
    context: 0,
    implicit: true,
    optional: true
  })
], EncryptedContent.prototype, "value", void 0);
__decorate([
  AsnProp({
    type: OctetString2,
    converter: AsnConstructedOctetStringConverter,
    context: 0,
    implicit: true,
    optional: true,
    repeated: "sequence"
  })
], EncryptedContent.prototype, "constructedValue", void 0);
EncryptedContent = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], EncryptedContent);
var EncryptedContentInfo = class {
  static {
    __name(this, "EncryptedContentInfo");
  }
  contentType = "";
  contentEncryptionAlgorithm = new ContentEncryptionAlgorithmIdentifier();
  encryptedContent;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], EncryptedContentInfo.prototype, "contentType", void 0);
__decorate([
  AsnProp({
    type: ContentEncryptionAlgorithmIdentifier
  })
], EncryptedContentInfo.prototype, "contentEncryptionAlgorithm", void 0);
__decorate([
  AsnProp({
    type: EncryptedContent,
    optional: true
  })
], EncryptedContentInfo.prototype, "encryptedContent", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/other_key_attribute.js
var OtherKeyAttribute = class {
  static {
    __name(this, "OtherKeyAttribute");
  }
  keyAttrId = "";
  keyAttr;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], OtherKeyAttribute.prototype, "keyAttrId", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    optional: true
  })
], OtherKeyAttribute.prototype, "keyAttr", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/key_agree_recipient_info.js
var RecipientEncryptedKeys_1;
var RecipientKeyIdentifier = class {
  static {
    __name(this, "RecipientKeyIdentifier");
  }
  subjectKeyIdentifier = new SubjectKeyIdentifier();
  date;
  other;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: SubjectKeyIdentifier
  })
], RecipientKeyIdentifier.prototype, "subjectKeyIdentifier", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime,
    optional: true
  })
], RecipientKeyIdentifier.prototype, "date", void 0);
__decorate([
  AsnProp({
    type: OtherKeyAttribute,
    optional: true
  })
], RecipientKeyIdentifier.prototype, "other", void 0);
var KeyAgreeRecipientIdentifier = class KeyAgreeRecipientIdentifier2 {
  static {
    __name(this, "KeyAgreeRecipientIdentifier");
  }
  rKeyId;
  issuerAndSerialNumber;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: RecipientKeyIdentifier,
    context: 0,
    implicit: true,
    optional: true
  })
], KeyAgreeRecipientIdentifier.prototype, "rKeyId", void 0);
__decorate([
  AsnProp({
    type: IssuerAndSerialNumber,
    optional: true
  })
], KeyAgreeRecipientIdentifier.prototype, "issuerAndSerialNumber", void 0);
KeyAgreeRecipientIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], KeyAgreeRecipientIdentifier);
var RecipientEncryptedKey = class {
  static {
    __name(this, "RecipientEncryptedKey");
  }
  rid = new KeyAgreeRecipientIdentifier();
  encryptedKey = new OctetString2();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: KeyAgreeRecipientIdentifier
  })
], RecipientEncryptedKey.prototype, "rid", void 0);
__decorate([
  AsnProp({
    type: OctetString2
  })
], RecipientEncryptedKey.prototype, "encryptedKey", void 0);
var RecipientEncryptedKeys = RecipientEncryptedKeys_1 = class RecipientEncryptedKeys2 extends AsnArray {
  static {
    __name(this, "RecipientEncryptedKeys");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RecipientEncryptedKeys_1.prototype);
  }
};
RecipientEncryptedKeys = RecipientEncryptedKeys_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: RecipientEncryptedKey
  })
], RecipientEncryptedKeys);
var OriginatorPublicKey = class {
  static {
    __name(this, "OriginatorPublicKey");
  }
  algorithm = new AlgorithmIdentifier();
  publicKey = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], OriginatorPublicKey.prototype, "algorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString
  })
], OriginatorPublicKey.prototype, "publicKey", void 0);
var OriginatorIdentifierOrKey = class OriginatorIdentifierOrKey2 {
  static {
    __name(this, "OriginatorIdentifierOrKey");
  }
  subjectKeyIdentifier;
  originatorKey;
  issuerAndSerialNumber;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: SubjectKeyIdentifier,
    context: 0,
    implicit: true,
    optional: true
  })
], OriginatorIdentifierOrKey.prototype, "subjectKeyIdentifier", void 0);
__decorate([
  AsnProp({
    type: OriginatorPublicKey,
    context: 1,
    implicit: true,
    optional: true
  })
], OriginatorIdentifierOrKey.prototype, "originatorKey", void 0);
__decorate([
  AsnProp({
    type: IssuerAndSerialNumber,
    optional: true
  })
], OriginatorIdentifierOrKey.prototype, "issuerAndSerialNumber", void 0);
OriginatorIdentifierOrKey = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], OriginatorIdentifierOrKey);
var KeyAgreeRecipientInfo = class {
  static {
    __name(this, "KeyAgreeRecipientInfo");
  }
  version = CMSVersion.v3;
  originator = new OriginatorIdentifierOrKey();
  ukm;
  keyEncryptionAlgorithm = new KeyEncryptionAlgorithmIdentifier();
  recipientEncryptedKeys = new RecipientEncryptedKeys();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], KeyAgreeRecipientInfo.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: OriginatorIdentifierOrKey,
    context: 0
  })
], KeyAgreeRecipientInfo.prototype, "originator", void 0);
__decorate([
  AsnProp({
    type: OctetString2,
    context: 1,
    optional: true
  })
], KeyAgreeRecipientInfo.prototype, "ukm", void 0);
__decorate([
  AsnProp({
    type: KeyEncryptionAlgorithmIdentifier
  })
], KeyAgreeRecipientInfo.prototype, "keyEncryptionAlgorithm", void 0);
__decorate([
  AsnProp({
    type: RecipientEncryptedKeys
  })
], KeyAgreeRecipientInfo.prototype, "recipientEncryptedKeys", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/key_trans_recipient_info.js
var RecipientIdentifier = class RecipientIdentifier2 {
  static {
    __name(this, "RecipientIdentifier");
  }
  subjectKeyIdentifier;
  issuerAndSerialNumber;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: SubjectKeyIdentifier,
    context: 0,
    implicit: true
  })
], RecipientIdentifier.prototype, "subjectKeyIdentifier", void 0);
__decorate([
  AsnProp({
    type: IssuerAndSerialNumber
  })
], RecipientIdentifier.prototype, "issuerAndSerialNumber", void 0);
RecipientIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], RecipientIdentifier);
var KeyTransRecipientInfo = class {
  static {
    __name(this, "KeyTransRecipientInfo");
  }
  version = CMSVersion.v0;
  rid = new RecipientIdentifier();
  keyEncryptionAlgorithm = new KeyEncryptionAlgorithmIdentifier();
  encryptedKey = new OctetString2();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], KeyTransRecipientInfo.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: RecipientIdentifier
  })
], KeyTransRecipientInfo.prototype, "rid", void 0);
__decorate([
  AsnProp({
    type: KeyEncryptionAlgorithmIdentifier
  })
], KeyTransRecipientInfo.prototype, "keyEncryptionAlgorithm", void 0);
__decorate([
  AsnProp({
    type: OctetString2
  })
], KeyTransRecipientInfo.prototype, "encryptedKey", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/kek_recipient_info.js
var KEKIdentifier = class {
  static {
    __name(this, "KEKIdentifier");
  }
  keyIdentifier = new OctetString2();
  date;
  other;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: OctetString2
  })
], KEKIdentifier.prototype, "keyIdentifier", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime,
    optional: true
  })
], KEKIdentifier.prototype, "date", void 0);
__decorate([
  AsnProp({
    type: OtherKeyAttribute,
    optional: true
  })
], KEKIdentifier.prototype, "other", void 0);
var KEKRecipientInfo = class {
  static {
    __name(this, "KEKRecipientInfo");
  }
  version = CMSVersion.v4;
  kekid = new KEKIdentifier();
  keyEncryptionAlgorithm = new KeyEncryptionAlgorithmIdentifier();
  encryptedKey = new OctetString2();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], KEKRecipientInfo.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: KEKIdentifier
  })
], KEKRecipientInfo.prototype, "kekid", void 0);
__decorate([
  AsnProp({
    type: KeyEncryptionAlgorithmIdentifier
  })
], KEKRecipientInfo.prototype, "keyEncryptionAlgorithm", void 0);
__decorate([
  AsnProp({
    type: OctetString2
  })
], KEKRecipientInfo.prototype, "encryptedKey", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/password_recipient_info.js
var PasswordRecipientInfo = class {
  static {
    __name(this, "PasswordRecipientInfo");
  }
  version = CMSVersion.v0;
  keyDerivationAlgorithm;
  keyEncryptionAlgorithm = new KeyEncryptionAlgorithmIdentifier();
  encryptedKey = new OctetString2();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], PasswordRecipientInfo.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: KeyDerivationAlgorithmIdentifier,
    context: 0,
    optional: true
  })
], PasswordRecipientInfo.prototype, "keyDerivationAlgorithm", void 0);
__decorate([
  AsnProp({
    type: KeyEncryptionAlgorithmIdentifier
  })
], PasswordRecipientInfo.prototype, "keyEncryptionAlgorithm", void 0);
__decorate([
  AsnProp({
    type: OctetString2
  })
], PasswordRecipientInfo.prototype, "encryptedKey", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/recipient_info.js
var OtherRecipientInfo = class {
  static {
    __name(this, "OtherRecipientInfo");
  }
  oriType = "";
  oriValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], OtherRecipientInfo.prototype, "oriType", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any
  })
], OtherRecipientInfo.prototype, "oriValue", void 0);
var RecipientInfo = class RecipientInfo2 {
  static {
    __name(this, "RecipientInfo");
  }
  ktri;
  kari;
  kekri;
  pwri;
  ori;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: KeyTransRecipientInfo,
    optional: true
  })
], RecipientInfo.prototype, "ktri", void 0);
__decorate([
  AsnProp({
    type: KeyAgreeRecipientInfo,
    context: 1,
    implicit: true,
    optional: true
  })
], RecipientInfo.prototype, "kari", void 0);
__decorate([
  AsnProp({
    type: KEKRecipientInfo,
    context: 2,
    implicit: true,
    optional: true
  })
], RecipientInfo.prototype, "kekri", void 0);
__decorate([
  AsnProp({
    type: PasswordRecipientInfo,
    context: 3,
    implicit: true,
    optional: true
  })
], RecipientInfo.prototype, "pwri", void 0);
__decorate([
  AsnProp({
    type: OtherRecipientInfo,
    context: 4,
    implicit: true,
    optional: true
  })
], RecipientInfo.prototype, "ori", void 0);
RecipientInfo = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], RecipientInfo);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/recipient_infos.js
var RecipientInfos_1;
var RecipientInfos = RecipientInfos_1 = class RecipientInfos2 extends AsnArray {
  static {
    __name(this, "RecipientInfos");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RecipientInfos_1.prototype);
  }
};
RecipientInfos = RecipientInfos_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: RecipientInfo
  })
], RecipientInfos);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/revocation_info_choice.js
var RevocationInfoChoices_1;
var id_ri = `${id_pkix}.16`;
var id_ri_ocsp_response = `${id_ri}.2`;
var id_ri_scvp = `${id_ri}.4`;
var OtherRevocationInfoFormat = class {
  static {
    __name(this, "OtherRevocationInfoFormat");
  }
  otherRevInfoFormat = "";
  otherRevInfo = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], OtherRevocationInfoFormat.prototype, "otherRevInfoFormat", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any
  })
], OtherRevocationInfoFormat.prototype, "otherRevInfo", void 0);
var RevocationInfoChoice = class RevocationInfoChoice2 {
  static {
    __name(this, "RevocationInfoChoice");
  }
  other = new OtherRevocationInfoFormat();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: OtherRevocationInfoFormat,
    context: 1,
    implicit: true
  })
], RevocationInfoChoice.prototype, "other", void 0);
RevocationInfoChoice = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], RevocationInfoChoice);
var RevocationInfoChoices = RevocationInfoChoices_1 = class RevocationInfoChoices2 extends AsnArray {
  static {
    __name(this, "RevocationInfoChoices");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RevocationInfoChoices_1.prototype);
  }
};
RevocationInfoChoices = RevocationInfoChoices_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: RevocationInfoChoice
  })
], RevocationInfoChoices);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/originator_info.js
var OriginatorInfo = class {
  static {
    __name(this, "OriginatorInfo");
  }
  certs;
  crls;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: CertificateSet,
    context: 0,
    implicit: true,
    optional: true
  })
], OriginatorInfo.prototype, "certs", void 0);
__decorate([
  AsnProp({
    type: RevocationInfoChoices,
    context: 1,
    implicit: true,
    optional: true
  })
], OriginatorInfo.prototype, "crls", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/enveloped_data.js
var UnprotectedAttributes_1;
var UnprotectedAttributes = UnprotectedAttributes_1 = class UnprotectedAttributes2 extends AsnArray {
  static {
    __name(this, "UnprotectedAttributes");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, UnprotectedAttributes_1.prototype);
  }
};
UnprotectedAttributes = UnprotectedAttributes_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: Attribute2
  })
], UnprotectedAttributes);
var EnvelopedData = class {
  static {
    __name(this, "EnvelopedData");
  }
  version = CMSVersion.v0;
  originatorInfo;
  recipientInfos = new RecipientInfos();
  encryptedContentInfo = new EncryptedContentInfo();
  unprotectedAttrs;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], EnvelopedData.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: OriginatorInfo,
    context: 0,
    implicit: true,
    optional: true
  })
], EnvelopedData.prototype, "originatorInfo", void 0);
__decorate([
  AsnProp({
    type: RecipientInfos
  })
], EnvelopedData.prototype, "recipientInfos", void 0);
__decorate([
  AsnProp({
    type: EncryptedContentInfo
  })
], EnvelopedData.prototype, "encryptedContentInfo", void 0);
__decorate([
  AsnProp({
    type: UnprotectedAttributes,
    context: 1,
    implicit: true,
    optional: true
  })
], EnvelopedData.prototype, "unprotectedAttrs", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/object_identifiers.js
var id_signedData = "1.2.840.113549.1.7.2";

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-cms/2.11.0/build/es2015/signed_data.js
var DigestAlgorithmIdentifiers_1;
var DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers_1 = class DigestAlgorithmIdentifiers2 extends AsnArray {
  static {
    __name(this, "DigestAlgorithmIdentifiers");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, DigestAlgorithmIdentifiers_1.prototype);
  }
};
DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: DigestAlgorithmIdentifier
  })
], DigestAlgorithmIdentifiers);
var SignedData = class {
  static {
    __name(this, "SignedData");
  }
  version = CMSVersion.v0;
  digestAlgorithms = new DigestAlgorithmIdentifiers();
  encapContentInfo = new EncapsulatedContentInfo();
  certificates;
  crls;
  signerInfos = new SignerInfos();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], SignedData.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: DigestAlgorithmIdentifiers
  })
], SignedData.prototype, "digestAlgorithms", void 0);
__decorate([
  AsnProp({
    type: EncapsulatedContentInfo
  })
], SignedData.prototype, "encapContentInfo", void 0);
__decorate([
  AsnProp({
    type: CertificateSet,
    context: 0,
    implicit: true,
    optional: true
  })
], SignedData.prototype, "certificates", void 0);
__decorate([
  AsnProp({
    type: RevocationInfoChoices,
    context: 1,
    implicit: true,
    optional: true
  })
], SignedData.prototype, "crls", void 0);
__decorate([
  AsnProp({
    type: SignerInfos
  })
], SignedData.prototype, "signerInfos", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-ecc/2.11.0/build/es2015/object_identifiers.js
var id_ecPublicKey = "1.2.840.10045.2.1";
var id_ecdsaWithSHA1 = "1.2.840.10045.4.1";
var id_ecdsaWithSHA224 = "1.2.840.10045.4.3.1";
var id_ecdsaWithSHA256 = "1.2.840.10045.4.3.2";
var id_ecdsaWithSHA384 = "1.2.840.10045.4.3.3";
var id_ecdsaWithSHA512 = "1.2.840.10045.4.3.4";
var id_secp256r1 = "1.2.840.10045.3.1.7";
var id_secp384r1 = "1.3.132.0.34";
var id_secp521r1 = "1.3.132.0.35";

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-ecc/2.11.0/build/es2015/algorithms.js
function create(algorithm) {
  return new AlgorithmIdentifier({
    algorithm
  });
}
__name(create, "create");
var ecdsaWithSHA1 = create(id_ecdsaWithSHA1);
var ecdsaWithSHA224 = create(id_ecdsaWithSHA224);
var ecdsaWithSHA256 = create(id_ecdsaWithSHA256);
var ecdsaWithSHA384 = create(id_ecdsaWithSHA384);
var ecdsaWithSHA512 = create(id_ecdsaWithSHA512);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-ecc/2.11.0/build/es2015/rfc3279.js
var FieldID = class FieldID2 {
  static {
    __name(this, "FieldID");
  }
  fieldType;
  parameters;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], FieldID.prototype, "fieldType", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any
  })
], FieldID.prototype, "parameters", void 0);
FieldID = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], FieldID);
var ECPoint = class extends OctetString2 {
  static {
    __name(this, "ECPoint");
  }
};
var Curve = class Curve2 {
  static {
    __name(this, "Curve");
  }
  a;
  b;
  seed;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.OctetString
  })
], Curve.prototype, "a", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.OctetString
  })
], Curve.prototype, "b", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    optional: true
  })
], Curve.prototype, "seed", void 0);
Curve = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], Curve);
var ECPVer;
(function(ECPVer2) {
  ECPVer2[ECPVer2["ecpVer1"] = 1] = "ecpVer1";
})(ECPVer || (ECPVer = {}));
var SpecifiedECDomain = class SpecifiedECDomain2 {
  static {
    __name(this, "SpecifiedECDomain");
  }
  version = ECPVer.ecpVer1;
  fieldID;
  curve;
  base;
  order;
  cofactor;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], SpecifiedECDomain.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: FieldID
  })
], SpecifiedECDomain.prototype, "fieldID", void 0);
__decorate([
  AsnProp({
    type: Curve
  })
], SpecifiedECDomain.prototype, "curve", void 0);
__decorate([
  AsnProp({
    type: ECPoint
  })
], SpecifiedECDomain.prototype, "base", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], SpecifiedECDomain.prototype, "order", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    optional: true
  })
], SpecifiedECDomain.prototype, "cofactor", void 0);
SpecifiedECDomain = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], SpecifiedECDomain);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-ecc/2.11.0/build/es2015/ec_parameters.js
var ECParameters = class ECParameters2 {
  static {
    __name(this, "ECParameters");
  }
  namedCurve;
  implicitCurve;
  specifiedCurve;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], ECParameters.prototype, "namedCurve", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Null
  })
], ECParameters.prototype, "implicitCurve", void 0);
__decorate([
  AsnProp({
    type: SpecifiedECDomain
  })
], ECParameters.prototype, "specifiedCurve", void 0);
ECParameters = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], ECParameters);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-ecc/2.11.0/build/es2015/ec_private_key.js
var ECPrivateKey = class {
  static {
    __name(this, "ECPrivateKey");
  }
  version = 1;
  privateKey = new OctetString2();
  parameters;
  publicKey;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], ECPrivateKey.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: OctetString2
  })
], ECPrivateKey.prototype, "privateKey", void 0);
__decorate([
  AsnProp({
    type: ECParameters,
    context: 0,
    optional: true
  })
], ECPrivateKey.prototype, "parameters", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    context: 1,
    optional: true
  })
], ECPrivateKey.prototype, "publicKey", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-ecc/2.11.0/build/es2015/ec_signature_value.js
var ECDSASigValue = class {
  static {
    __name(this, "ECDSASigValue");
  }
  r = new ArrayBuffer(0);
  s = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], ECDSASigValue.prototype, "r", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], ECDSASigValue.prototype, "s", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-rsa/2.11.0/build/es2015/object_identifiers.js
var id_pkcs_1 = "1.2.840.113549.1.1";
var id_rsaEncryption = `${id_pkcs_1}.1`;
var id_RSAES_OAEP = `${id_pkcs_1}.7`;
var id_pSpecified = `${id_pkcs_1}.9`;
var id_RSASSA_PSS = `${id_pkcs_1}.10`;
var id_md2WithRSAEncryption = `${id_pkcs_1}.2`;
var id_md5WithRSAEncryption = `${id_pkcs_1}.4`;
var id_sha1WithRSAEncryption = `${id_pkcs_1}.5`;
var id_sha224WithRSAEncryption = `${id_pkcs_1}.14`;
var id_sha256WithRSAEncryption = `${id_pkcs_1}.11`;
var id_sha384WithRSAEncryption = `${id_pkcs_1}.12`;
var id_sha512WithRSAEncryption = `${id_pkcs_1}.13`;
var id_sha512_224WithRSAEncryption = `${id_pkcs_1}.15`;
var id_sha512_256WithRSAEncryption = `${id_pkcs_1}.16`;
var id_sha1 = "1.3.14.3.2.26";
var id_sha224 = "2.16.840.1.101.3.4.2.4";
var id_sha256 = "2.16.840.1.101.3.4.2.1";
var id_sha384 = "2.16.840.1.101.3.4.2.2";
var id_sha512 = "2.16.840.1.101.3.4.2.3";
var id_sha512_224 = "2.16.840.1.101.3.4.2.5";
var id_sha512_256 = "2.16.840.1.101.3.4.2.6";
var id_md2 = "1.2.840.113549.2.2";
var id_md5 = "1.2.840.113549.2.5";
var id_mgf1 = `${id_pkcs_1}.8`;

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-rsa/2.11.0/build/es2015/algorithms.js
function create2(algorithm) {
  return new AlgorithmIdentifier({
    algorithm,
    parameters: null
  });
}
__name(create2, "create");
var md2 = create2(id_md2);
var md4 = create2(id_md5);
var sha1 = create2(id_sha1);
var sha224 = create2(id_sha224);
var sha256 = create2(id_sha256);
var sha384 = create2(id_sha384);
var sha512 = create2(id_sha512);
var sha512_224 = create2(id_sha512_224);
var sha512_256 = create2(id_sha512_256);
var mgf1SHA1 = new AlgorithmIdentifier({
  algorithm: id_mgf1,
  parameters: AsnConvert.serialize(sha1)
});
var pSpecifiedEmpty = new AlgorithmIdentifier({
  algorithm: id_pSpecified,
  parameters: AsnConvert.serialize(AsnOctetStringConverter.toASN(new Uint8Array([
    218,
    57,
    163,
    238,
    94,
    107,
    75,
    13,
    50,
    85,
    191,
    239,
    149,
    96,
    24,
    144,
    175,
    216,
    7,
    9
  ]).buffer))
});
var rsaEncryption = create2(id_rsaEncryption);
var md2WithRSAEncryption = create2(id_md2WithRSAEncryption);
var md5WithRSAEncryption = create2(id_md5WithRSAEncryption);
var sha1WithRSAEncryption = create2(id_sha1WithRSAEncryption);
var sha224WithRSAEncryption = create2(id_sha512_224WithRSAEncryption);
var sha256WithRSAEncryption = create2(id_sha512_256WithRSAEncryption);
var sha384WithRSAEncryption = create2(id_sha384WithRSAEncryption);
var sha512WithRSAEncryption = create2(id_sha512WithRSAEncryption);
var sha512_224WithRSAEncryption = create2(id_sha512_224WithRSAEncryption);
var sha512_256WithRSAEncryption = create2(id_sha512_256WithRSAEncryption);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-rsa/2.11.0/build/es2015/parameters/rsaes_oaep.js
var RsaEsOaepParams = class {
  static {
    __name(this, "RsaEsOaepParams");
  }
  hashAlgorithm = new AlgorithmIdentifier(sha1);
  maskGenAlgorithm = new AlgorithmIdentifier({
    algorithm: id_mgf1,
    parameters: AsnConvert.serialize(sha1)
  });
  pSourceAlgorithm = new AlgorithmIdentifier(pSpecifiedEmpty);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 0,
    defaultValue: sha1
  })
], RsaEsOaepParams.prototype, "hashAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 1,
    defaultValue: mgf1SHA1
  })
], RsaEsOaepParams.prototype, "maskGenAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 2,
    defaultValue: pSpecifiedEmpty
  })
], RsaEsOaepParams.prototype, "pSourceAlgorithm", void 0);
var RSAES_OAEP = new AlgorithmIdentifier({
  algorithm: id_RSAES_OAEP,
  parameters: AsnConvert.serialize(new RsaEsOaepParams())
});

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-rsa/2.11.0/build/es2015/parameters/rsassa_pss.js
var RsaSaPssParams = class {
  static {
    __name(this, "RsaSaPssParams");
  }
  hashAlgorithm = new AlgorithmIdentifier(sha1);
  maskGenAlgorithm = new AlgorithmIdentifier({
    algorithm: id_mgf1,
    parameters: AsnConvert.serialize(sha1)
  });
  saltLength = 20;
  trailerField = 1;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 0,
    defaultValue: sha1
  })
], RsaSaPssParams.prototype, "hashAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier,
    context: 1,
    defaultValue: mgf1SHA1
  })
], RsaSaPssParams.prototype, "maskGenAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 2,
    defaultValue: 20
  })
], RsaSaPssParams.prototype, "saltLength", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 3,
    defaultValue: 1
  })
], RsaSaPssParams.prototype, "trailerField", void 0);
var RSASSA_PSS = new AlgorithmIdentifier({
  algorithm: id_RSASSA_PSS,
  parameters: AsnConvert.serialize(new RsaSaPssParams())
});

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-rsa/2.11.0/build/es2015/parameters/rsassa_pkcs1_v1_5.js
var DigestInfo = class {
  static {
    __name(this, "DigestInfo");
  }
  digestAlgorithm = new AlgorithmIdentifier();
  digest = new OctetString2();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], DigestInfo.prototype, "digestAlgorithm", void 0);
__decorate([
  AsnProp({
    type: OctetString2
  })
], DigestInfo.prototype, "digest", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-rsa/2.11.0/build/es2015/other_prime_info.js
var OtherPrimeInfos_1;
var OtherPrimeInfo = class {
  static {
    __name(this, "OtherPrimeInfo");
  }
  prime = new ArrayBuffer(0);
  exponent = new ArrayBuffer(0);
  coefficient = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], OtherPrimeInfo.prototype, "prime", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], OtherPrimeInfo.prototype, "exponent", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], OtherPrimeInfo.prototype, "coefficient", void 0);
var OtherPrimeInfos = OtherPrimeInfos_1 = class OtherPrimeInfos2 extends AsnArray {
  static {
    __name(this, "OtherPrimeInfos");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, OtherPrimeInfos_1.prototype);
  }
};
OtherPrimeInfos = OtherPrimeInfos_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: OtherPrimeInfo
  })
], OtherPrimeInfos);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-rsa/2.11.0/build/es2015/rsa_private_key.js
var RSAPrivateKey = class {
  static {
    __name(this, "RSAPrivateKey");
  }
  version = 0;
  modulus = new ArrayBuffer(0);
  publicExponent = new ArrayBuffer(0);
  privateExponent = new ArrayBuffer(0);
  prime1 = new ArrayBuffer(0);
  prime2 = new ArrayBuffer(0);
  exponent1 = new ArrayBuffer(0);
  exponent2 = new ArrayBuffer(0);
  coefficient = new ArrayBuffer(0);
  otherPrimeInfos;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], RSAPrivateKey.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "modulus", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "publicExponent", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "privateExponent", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "prime1", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "prime2", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "exponent1", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "exponent2", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPrivateKey.prototype, "coefficient", void 0);
__decorate([
  AsnProp({
    type: OtherPrimeInfos,
    optional: true
  })
], RSAPrivateKey.prototype, "otherPrimeInfos", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-rsa/2.11.0/build/es2015/rsa_public_key.js
var RSAPublicKey = class {
  static {
    __name(this, "RSAPublicKey");
  }
  modulus = new ArrayBuffer(0);
  publicExponent = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPublicKey.prototype, "modulus", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], RSAPublicKey.prototype, "publicExponent", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/types/lifecycle.js
var Lifecycle;
(function(Lifecycle2) {
  Lifecycle2[Lifecycle2["Transient"] = 0] = "Transient";
  Lifecycle2[Lifecycle2["Singleton"] = 1] = "Singleton";
  Lifecycle2[Lifecycle2["ResolutionScoped"] = 2] = "ResolutionScoped";
  Lifecycle2[Lifecycle2["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
var lifecycle_default = Lifecycle;

// ../../../root/.cache/deno/npm/registry.npmjs.org/tslib/1.14.1/modules/index.js
var import_tslib88 = __toESM(require_tslib2());
var { __extends: __extends2, __assign: __assign2, __rest: __rest2, __decorate: __decorate2, __param: __param2, __metadata: __metadata2, __awaiter: __awaiter2, __generator: __generator2, __exportStar: __exportStar2, __createBinding: __createBinding2, __values: __values2, __read: __read2, __spread: __spread2, __spreadArrays: __spreadArrays2, __await: __await2, __asyncGenerator: __asyncGenerator2, __asyncDelegator: __asyncDelegator2, __asyncValues: __asyncValues2, __makeTemplateObject: __makeTemplateObject2, __importStar: __importStar2, __importDefault: __importDefault2, __classPrivateFieldGet: __classPrivateFieldGet2, __classPrivateFieldSet: __classPrivateFieldSet2 } = import_tslib88.default;

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/reflection-helpers.js
var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function getParamInfo(target) {
  var params = Reflect.getMetadata("design:paramtypes", target) || [];
  var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
  Object.keys(injectionTokens).forEach(function(key) {
    params[+key] = injectionTokens[key];
  });
  return params;
}
__name(getParamInfo, "getParamInfo");

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/providers/class-provider.js
function isClassProvider(provider) {
  return !!provider.useClass;
}
__name(isClassProvider, "isClassProvider");

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/providers/factory-provider.js
function isFactoryProvider(provider) {
  return !!provider.useFactory;
}
__name(isFactoryProvider, "isFactoryProvider");

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/lazy-helpers.js
var DelayedConstructor = function() {
  function DelayedConstructor2(wrap2) {
    this.wrap = wrap2;
    this.reflectMethods = [
      "get",
      "getPrototypeOf",
      "setPrototypeOf",
      "getOwnPropertyDescriptor",
      "defineProperty",
      "has",
      "set",
      "deleteProperty",
      "apply",
      "construct",
      "ownKeys"
    ];
  }
  __name(DelayedConstructor2, "DelayedConstructor");
  DelayedConstructor2.prototype.createProxy = function(createObject) {
    var _this = this;
    var target = {};
    var init = false;
    var value;
    var delayedObject = /* @__PURE__ */ __name(function() {
      if (!init) {
        value = createObject(_this.wrap());
        init = true;
      }
      return value;
    }, "delayedObject");
    return new Proxy(target, this.createHandler(delayedObject));
  };
  DelayedConstructor2.prototype.createHandler = function(delayedObject) {
    var handler = {};
    var install = /* @__PURE__ */ __name(function(name) {
      handler[name] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        args[0] = delayedObject();
        var method = Reflect[name];
        return method.apply(void 0, __spread2(args));
      };
    }, "install");
    this.reflectMethods.forEach(install);
    return handler;
  };
  return DelayedConstructor2;
}();

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/providers/injection-token.js
function isNormalToken(token) {
  return typeof token === "string" || typeof token === "symbol";
}
__name(isNormalToken, "isNormalToken");
function isTokenDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "multiple" in descriptor;
}
__name(isTokenDescriptor, "isTokenDescriptor");
function isTransformDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "transform" in descriptor;
}
__name(isTransformDescriptor, "isTransformDescriptor");
function isConstructorToken(token) {
  return typeof token === "function" || token instanceof DelayedConstructor;
}
__name(isConstructorToken, "isConstructorToken");

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/providers/token-provider.js
function isTokenProvider(provider) {
  return !!provider.useToken;
}
__name(isTokenProvider, "isTokenProvider");

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/providers/value-provider.js
function isValueProvider(provider) {
  return provider.useValue != void 0;
}
__name(isValueProvider, "isValueProvider");

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/providers/provider.js
function isProvider(provider) {
  return isClassProvider(provider) || isValueProvider(provider) || isTokenProvider(provider) || isFactoryProvider(provider);
}
__name(isProvider, "isProvider");

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/registry-base.js
var RegistryBase = function() {
  function RegistryBase2() {
    this._registryMap = /* @__PURE__ */ new Map();
  }
  __name(RegistryBase2, "RegistryBase");
  RegistryBase2.prototype.entries = function() {
    return this._registryMap.entries();
  };
  RegistryBase2.prototype.getAll = function(key) {
    this.ensure(key);
    return this._registryMap.get(key);
  };
  RegistryBase2.prototype.get = function(key) {
    this.ensure(key);
    var value = this._registryMap.get(key);
    return value[value.length - 1] || null;
  };
  RegistryBase2.prototype.set = function(key, value) {
    this.ensure(key);
    this._registryMap.get(key).push(value);
  };
  RegistryBase2.prototype.setAll = function(key, value) {
    this._registryMap.set(key, value);
  };
  RegistryBase2.prototype.has = function(key) {
    this.ensure(key);
    return this._registryMap.get(key).length > 0;
  };
  RegistryBase2.prototype.clear = function() {
    this._registryMap.clear();
  };
  RegistryBase2.prototype.ensure = function(key) {
    if (!this._registryMap.has(key)) {
      this._registryMap.set(key, []);
    }
  };
  return RegistryBase2;
}();
var registry_base_default = RegistryBase;

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/registry.js
var Registry = function(_super) {
  __extends2(Registry2, _super);
  function Registry2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  __name(Registry2, "Registry");
  return Registry2;
}(registry_base_default);
var registry_default = Registry;

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/resolution-context.js
var ResolutionContext = /* @__PURE__ */ function() {
  function ResolutionContext2() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  __name(ResolutionContext2, "ResolutionContext");
  return ResolutionContext2;
}();
var resolution_context_default = ResolutionContext;

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/error-helpers.js
function formatDependency(params, idx) {
  if (params === null) {
    return "at position #" + idx;
  }
  var argName = params.split(",")[idx].trim();
  return '"' + argName + '" at position #' + idx;
}
__name(formatDependency, "formatDependency");
function composeErrorMessage(msg, e, indent) {
  if (indent === void 0) {
    indent = "    ";
  }
  return __spread2([
    msg
  ], e.message.split("\n").map(function(l) {
    return indent + l;
  })).join("\n");
}
__name(composeErrorMessage, "composeErrorMessage");
function formatErrorCtor(ctor, paramIdx, error) {
  var _a3 = __read2(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b2 = _a3[1], params = _b2 === void 0 ? null : _b2;
  var dep = formatDependency(params, paramIdx);
  return composeErrorMessage("Cannot inject the dependency " + dep + ' of "' + ctor.name + '" constructor. Reason:', error);
}
__name(formatErrorCtor, "formatErrorCtor");

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/types/disposable.js
function isDisposable(value) {
  if (typeof value.dispose !== "function") return false;
  var disposeFun = value.dispose;
  if (disposeFun.length > 0) {
    return false;
  }
  return true;
}
__name(isDisposable, "isDisposable");

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/interceptors.js
var PreResolutionInterceptors = function(_super) {
  __extends2(PreResolutionInterceptors2, _super);
  function PreResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  __name(PreResolutionInterceptors2, "PreResolutionInterceptors");
  return PreResolutionInterceptors2;
}(registry_base_default);
var PostResolutionInterceptors = function(_super) {
  __extends2(PostResolutionInterceptors2, _super);
  function PostResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  __name(PostResolutionInterceptors2, "PostResolutionInterceptors");
  return PostResolutionInterceptors2;
}(registry_base_default);
var Interceptors = /* @__PURE__ */ function() {
  function Interceptors2() {
    this.preResolution = new PreResolutionInterceptors();
    this.postResolution = new PostResolutionInterceptors();
  }
  __name(Interceptors2, "Interceptors");
  return Interceptors2;
}();
var interceptors_default = Interceptors;

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/dependency-container.js
var typeInfo = /* @__PURE__ */ new Map();
var InternalDependencyContainer = function() {
  function InternalDependencyContainer2(parent) {
    this.parent = parent;
    this._registry = new registry_default();
    this.interceptors = new interceptors_default();
    this.disposed = false;
    this.disposables = /* @__PURE__ */ new Set();
  }
  __name(InternalDependencyContainer2, "InternalDependencyContainer");
  InternalDependencyContainer2.prototype.register = function(token, providerOrConstructor, options) {
    if (options === void 0) {
      options = {
        lifecycle: lifecycle_default.Transient
      };
    }
    this.ensureNotDisposed();
    var provider;
    if (!isProvider(providerOrConstructor)) {
      provider = {
        useClass: providerOrConstructor
      };
    } else {
      provider = providerOrConstructor;
    }
    if (isTokenProvider(provider)) {
      var path = [
        token
      ];
      var tokenProvider = provider;
      while (tokenProvider != null) {
        var currentToken = tokenProvider.useToken;
        if (path.includes(currentToken)) {
          throw new Error("Token registration cycle detected! " + __spread2(path, [
            currentToken
          ]).join(" -> "));
        }
        path.push(currentToken);
        var registration = this._registry.get(currentToken);
        if (registration && isTokenProvider(registration.provider)) {
          tokenProvider = registration.provider;
        } else {
          tokenProvider = null;
        }
      }
    }
    if (options.lifecycle === lifecycle_default.Singleton || options.lifecycle == lifecycle_default.ContainerScoped || options.lifecycle == lifecycle_default.ResolutionScoped) {
      if (isValueProvider(provider) || isFactoryProvider(provider)) {
        throw new Error('Cannot use lifecycle "' + lifecycle_default[options.lifecycle] + '" with ValueProviders or FactoryProviders');
      }
    }
    this._registry.set(token, {
      provider,
      options
    });
    return this;
  };
  InternalDependencyContainer2.prototype.registerType = function(from, to) {
    this.ensureNotDisposed();
    if (isNormalToken(to)) {
      return this.register(from, {
        useToken: to
      });
    }
    return this.register(from, {
      useClass: to
    });
  };
  InternalDependencyContainer2.prototype.registerInstance = function(token, instance2) {
    this.ensureNotDisposed();
    return this.register(token, {
      useValue: instance2
    });
  };
  InternalDependencyContainer2.prototype.registerSingleton = function(from, to) {
    this.ensureNotDisposed();
    if (isNormalToken(from)) {
      if (isNormalToken(to)) {
        return this.register(from, {
          useToken: to
        }, {
          lifecycle: lifecycle_default.Singleton
        });
      } else if (to) {
        return this.register(from, {
          useClass: to
        }, {
          lifecycle: lifecycle_default.Singleton
        });
      }
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var useClass = from;
    if (to && !isNormalToken(to)) {
      useClass = to;
    }
    return this.register(from, {
      useClass
    }, {
      lifecycle: lifecycle_default.Singleton
    });
  };
  InternalDependencyContainer2.prototype.resolve = function(token, context, isOptional) {
    if (context === void 0) {
      context = new resolution_context_default();
    }
    if (isOptional === void 0) {
      isOptional = false;
    }
    this.ensureNotDisposed();
    var registration = this.getRegistration(token);
    if (!registration && isNormalToken(token)) {
      if (isOptional) {
        return void 0;
      }
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "Single");
    if (registration) {
      var result = this.resolveRegistration(registration, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    if (isConstructorToken(token)) {
      var result = this.construct(token, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  };
  InternalDependencyContainer2.prototype.executePreResolutionInterceptor = function(token, resolutionType) {
    var e_1, _a3;
    if (this.interceptors.preResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b2 = __values2(this.interceptors.preResolution.getAll(token)), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var interceptor = _c2.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, resolutionType);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      this.interceptors.preResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.executePostResolutionInterceptor = function(token, result, resolutionType) {
    var e_2, _a3;
    if (this.interceptors.postResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b2 = __values2(this.interceptors.postResolution.getAll(token)), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var interceptor = _c2.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, result, resolutionType);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      this.interceptors.postResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.resolveRegistration = function(registration, context) {
    this.ensureNotDisposed();
    if (registration.options.lifecycle === lifecycle_default.ResolutionScoped && context.scopedResolutions.has(registration)) {
      return context.scopedResolutions.get(registration);
    }
    var isSingleton = registration.options.lifecycle === lifecycle_default.Singleton;
    var isContainerScoped = registration.options.lifecycle === lifecycle_default.ContainerScoped;
    var returnInstance = isSingleton || isContainerScoped;
    var resolved;
    if (isValueProvider(registration.provider)) {
      resolved = registration.provider.useValue;
    } else if (isTokenProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.resolve(registration.provider.useToken, context)) : this.resolve(registration.provider.useToken, context);
    } else if (isClassProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.construct(registration.provider.useClass, context)) : this.construct(registration.provider.useClass, context);
    } else if (isFactoryProvider(registration.provider)) {
      resolved = registration.provider.useFactory(this);
    } else {
      resolved = this.construct(registration.provider, context);
    }
    if (registration.options.lifecycle === lifecycle_default.ResolutionScoped) {
      context.scopedResolutions.set(registration, resolved);
    }
    return resolved;
  };
  InternalDependencyContainer2.prototype.resolveAll = function(token, context, isOptional) {
    var _this = this;
    if (context === void 0) {
      context = new resolution_context_default();
    }
    if (isOptional === void 0) {
      isOptional = false;
    }
    this.ensureNotDisposed();
    var registrations = this.getAllRegistrations(token);
    if (!registrations && isNormalToken(token)) {
      if (isOptional) {
        return [];
      }
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "All");
    if (registrations) {
      var result_1 = registrations.map(function(item) {
        return _this.resolveRegistration(item, context);
      });
      this.executePostResolutionInterceptor(token, result_1, "All");
      return result_1;
    }
    var result = [
      this.construct(token, context)
    ];
    this.executePostResolutionInterceptor(token, result, "All");
    return result;
  };
  InternalDependencyContainer2.prototype.isRegistered = function(token, recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    this.ensureNotDisposed();
    return this._registry.has(token) || recursive && (this.parent || false) && this.parent.isRegistered(token, true);
  };
  InternalDependencyContainer2.prototype.reset = function() {
    this.ensureNotDisposed();
    this._registry.clear();
    this.interceptors.preResolution.clear();
    this.interceptors.postResolution.clear();
  };
  InternalDependencyContainer2.prototype.clearInstances = function() {
    var e_3, _a3;
    this.ensureNotDisposed();
    try {
      for (var _b2 = __values2(this._registry.entries()), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
        var _d = __read2(_c2.value, 2), token = _d[0], registrations = _d[1];
        this._registry.setAll(token, registrations.filter(function(registration) {
          return !isValueProvider(registration.provider);
        }).map(function(registration) {
          registration.instance = void 0;
          return registration;
        }));
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  };
  InternalDependencyContainer2.prototype.createChildContainer = function() {
    var e_4, _a3;
    this.ensureNotDisposed();
    var childContainer = new InternalDependencyContainer2(this);
    try {
      for (var _b2 = __values2(this._registry.entries()), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
        var _d = __read2(_c2.value, 2), token = _d[0], registrations = _d[1];
        if (registrations.some(function(_a4) {
          var options = _a4.options;
          return options.lifecycle === lifecycle_default.ContainerScoped;
        })) {
          childContainer._registry.setAll(token, registrations.map(function(registration) {
            if (registration.options.lifecycle === lifecycle_default.ContainerScoped) {
              return {
                provider: registration.provider,
                options: registration.options
              };
            }
            return registration;
          }));
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
    return childContainer;
  };
  InternalDependencyContainer2.prototype.beforeResolution = function(token, callback, options) {
    if (options === void 0) {
      options = {
        frequency: "Always"
      };
    }
    this.interceptors.preResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.afterResolution = function(token, callback, options) {
    if (options === void 0) {
      options = {
        frequency: "Always"
      };
    }
    this.interceptors.postResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.dispose = function() {
    return __awaiter2(this, void 0, void 0, function() {
      var promises;
      return __generator2(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            this.disposed = true;
            promises = [];
            this.disposables.forEach(function(disposable) {
              var maybePromise = disposable.dispose();
              if (maybePromise) {
                promises.push(maybePromise);
              }
            });
            return [
              4,
              Promise.all(promises)
            ];
          case 1:
            _a3.sent();
            return [
              2
            ];
        }
      });
    });
  };
  InternalDependencyContainer2.prototype.getRegistration = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.get(token);
    }
    if (this.parent) {
      return this.parent.getRegistration(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.getAllRegistrations = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.getAll(token);
    }
    if (this.parent) {
      return this.parent.getAllRegistrations(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.construct = function(ctor, context) {
    var _this = this;
    if (ctor instanceof DelayedConstructor) {
      return ctor.createProxy(function(target) {
        return _this.resolve(target, context);
      });
    }
    var instance2 = function() {
      var paramInfo = typeInfo.get(ctor);
      if (!paramInfo || paramInfo.length === 0) {
        if (ctor.length === 0) {
          return new ctor();
        } else {
          throw new Error('TypeInfo not known for "' + ctor.name + '"');
        }
      }
      var params = paramInfo.map(_this.resolveParams(context, ctor));
      return new (ctor.bind.apply(ctor, __spread2([
        void 0
      ], params)))();
    }();
    if (isDisposable(instance2)) {
      this.disposables.add(instance2);
    }
    return instance2;
  };
  InternalDependencyContainer2.prototype.resolveParams = function(context, ctor) {
    var _this = this;
    return function(param, idx) {
      var _a3, _b2, _c2;
      try {
        if (isTokenDescriptor(param)) {
          if (isTransformDescriptor(param)) {
            return param.multiple ? (_a3 = _this.resolve(param.transform)).transform.apply(_a3, __spread2([
              _this.resolveAll(param.token, new resolution_context_default(), param.isOptional)
            ], param.transformArgs)) : (_b2 = _this.resolve(param.transform)).transform.apply(_b2, __spread2([
              _this.resolve(param.token, context, param.isOptional)
            ], param.transformArgs));
          } else {
            return param.multiple ? _this.resolveAll(param.token, new resolution_context_default(), param.isOptional) : _this.resolve(param.token, context, param.isOptional);
          }
        } else if (isTransformDescriptor(param)) {
          return (_c2 = _this.resolve(param.transform, context)).transform.apply(_c2, __spread2([
            _this.resolve(param.token, context)
          ], param.transformArgs));
        }
        return _this.resolve(param, context);
      } catch (e) {
        throw new Error(formatErrorCtor(ctor, idx, e));
      }
    };
  };
  InternalDependencyContainer2.prototype.ensureNotDisposed = function() {
    if (this.disposed) {
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
    }
  };
  return InternalDependencyContainer2;
}();
var instance = new InternalDependencyContainer();

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/decorators/injectable.js
function injectable(options) {
  return function(target) {
    typeInfo.set(target, getParamInfo(target));
    if (options && options.token) {
      if (!Array.isArray(options.token)) {
        instance.register(options.token, target);
      } else {
        options.token.forEach(function(token) {
          instance.register(token, target);
        });
      }
    }
  };
}
__name(injectable, "injectable");
var injectable_default = injectable;

// ../../../root/.cache/deno/npm/registry.npmjs.org/tsyringe/4.10.0/dist/esm5/index.js
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
}

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/attribute.js
var PKCS12AttrSet_1;
var PKCS12Attribute = class {
  static {
    __name(this, "PKCS12Attribute");
  }
  attrId = "";
  attrValues = [];
  constructor(params = {}) {
    Object.assign(params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], PKCS12Attribute.prototype, "attrId", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    repeated: "set"
  })
], PKCS12Attribute.prototype, "attrValues", void 0);
var PKCS12AttrSet = PKCS12AttrSet_1 = class PKCS12AttrSet2 extends AsnArray {
  static {
    __name(this, "PKCS12AttrSet");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, PKCS12AttrSet_1.prototype);
  }
};
PKCS12AttrSet = PKCS12AttrSet_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: PKCS12Attribute
  })
], PKCS12AttrSet);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/authenticated_safe.js
var AuthenticatedSafe_1;
var AuthenticatedSafe = AuthenticatedSafe_1 = class AuthenticatedSafe2 extends AsnArray {
  static {
    __name(this, "AuthenticatedSafe");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, AuthenticatedSafe_1.prototype);
  }
};
AuthenticatedSafe = AuthenticatedSafe_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: ContentInfo
  })
], AuthenticatedSafe);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/object_identifiers.js
var id_rsadsi = "1.2.840.113549";
var id_pkcs = `${id_rsadsi}.1`;
var id_pkcs_12 = `${id_pkcs}.12`;
var id_pkcs_12PbeIds = `${id_pkcs_12}.1`;
var id_pbeWithSHAAnd128BitRC4 = `${id_pkcs_12PbeIds}.1`;
var id_pbeWithSHAAnd40BitRC4 = `${id_pkcs_12PbeIds}.2`;
var id_pbeWithSHAAnd3_KeyTripleDES_CBC = `${id_pkcs_12PbeIds}.3`;
var id_pbeWithSHAAnd2_KeyTripleDES_CBC = `${id_pkcs_12PbeIds}.4`;
var id_pbeWithSHAAnd128BitRC2_CBC = `${id_pkcs_12PbeIds}.5`;
var id_pbewithSHAAnd40BitRC2_CBC = `${id_pkcs_12PbeIds}.6`;
var id_bagtypes = `${id_pkcs_12}.10.1`;

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/bags/types.js
var id_keyBag = `${id_bagtypes}.1`;
var id_pkcs8ShroudedKeyBag = `${id_bagtypes}.2`;
var id_certBag = `${id_bagtypes}.3`;
var id_CRLBag = `${id_bagtypes}.4`;
var id_SecretBag = `${id_bagtypes}.5`;
var id_SafeContents = `${id_bagtypes}.6`;
var id_pkcs_9 = "1.2.840.113549.1.9";

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/bags/cert_bag.js
var CertBag = class {
  static {
    __name(this, "CertBag");
  }
  certId = "";
  certValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], CertBag.prototype, "certId", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], CertBag.prototype, "certValue", void 0);
var id_certTypes = `${id_pkcs_9}.22`;
var id_x509Certificate = `${id_certTypes}.1`;
var id_sdsiCertificate = `${id_certTypes}.2`;

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/bags/crl_bag.js
var CRLBag = class {
  static {
    __name(this, "CRLBag");
  }
  crlId = "";
  crltValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], CRLBag.prototype, "crlId", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], CRLBag.prototype, "crltValue", void 0);
var id_crlTypes = `${id_pkcs_9}.23`;
var id_x509CRL = `${id_crlTypes}.1`;

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pkcs8/2.11.0/build/es2015/encrypted_private_key_info.js
var EncryptedData = class extends OctetString2 {
  static {
    __name(this, "EncryptedData");
  }
};
var EncryptedPrivateKeyInfo = class {
  static {
    __name(this, "EncryptedPrivateKeyInfo");
  }
  encryptionAlgorithm = new AlgorithmIdentifier();
  encryptedData = new EncryptedData();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], EncryptedPrivateKeyInfo.prototype, "encryptionAlgorithm", void 0);
__decorate([
  AsnProp({
    type: EncryptedData
  })
], EncryptedPrivateKeyInfo.prototype, "encryptedData", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pkcs8/2.11.0/build/es2015/private_key_info.js
var Attributes_1;
var Version2;
(function(Version4) {
  Version4[Version4["v1"] = 0] = "v1";
})(Version2 || (Version2 = {}));
var PrivateKey = class extends OctetString2 {
  static {
    __name(this, "PrivateKey");
  }
};
var Attributes = Attributes_1 = class Attributes2 extends AsnArray {
  static {
    __name(this, "Attributes");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Attributes_1.prototype);
  }
};
Attributes = Attributes_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Attribute
  })
], Attributes);
var PrivateKeyInfo = class {
  static {
    __name(this, "PrivateKeyInfo");
  }
  version = Version2.v1;
  privateKeyAlgorithm = new AlgorithmIdentifier();
  privateKey = new PrivateKey();
  attributes;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], PrivateKeyInfo.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], PrivateKeyInfo.prototype, "privateKeyAlgorithm", void 0);
__decorate([
  AsnProp({
    type: PrivateKey
  })
], PrivateKeyInfo.prototype, "privateKey", void 0);
__decorate([
  AsnProp({
    type: Attributes,
    implicit: true,
    context: 0,
    optional: true
  })
], PrivateKeyInfo.prototype, "attributes", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/bags/key_bag.js
var KeyBag = class KeyBag2 extends PrivateKeyInfo {
  static {
    __name(this, "KeyBag");
  }
};
KeyBag = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], KeyBag);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/bags/pkcs8_shrouded_key_bag.js
var PKCS8ShroudedKeyBag = class PKCS8ShroudedKeyBag2 extends EncryptedPrivateKeyInfo {
  static {
    __name(this, "PKCS8ShroudedKeyBag");
  }
};
PKCS8ShroudedKeyBag = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], PKCS8ShroudedKeyBag);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/bags/secret_bag.js
var SecretBag = class {
  static {
    __name(this, "SecretBag");
  }
  secretTypeId = "";
  secretValue = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], SecretBag.prototype, "secretTypeId", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], SecretBag.prototype, "secretValue", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/mac_data.js
var MacData = class {
  static {
    __name(this, "MacData");
  }
  mac = new DigestInfo();
  macSalt = new OctetString2();
  iterations = 1;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: DigestInfo
  })
], MacData.prototype, "mac", void 0);
__decorate([
  AsnProp({
    type: OctetString2
  })
], MacData.prototype, "macSalt", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    defaultValue: 1
  })
], MacData.prototype, "iterations", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/pfx.js
var PFX = class {
  static {
    __name(this, "PFX");
  }
  version = 3;
  authSafe = new ContentInfo();
  macData = new MacData();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], PFX.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: ContentInfo
  })
], PFX.prototype, "authSafe", void 0);
__decorate([
  AsnProp({
    type: MacData,
    optional: true
  })
], PFX.prototype, "macData", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pfx/2.11.0/build/es2015/safe_bag.js
var SafeContents_1;
var SafeBag = class {
  static {
    __name(this, "SafeBag");
  }
  bagId = "";
  bagValue = new ArrayBuffer(0);
  bagAttributes;
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], SafeBag.prototype, "bagId", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    context: 0
  })
], SafeBag.prototype, "bagValue", void 0);
__decorate([
  AsnProp({
    type: PKCS12Attribute,
    repeated: "set",
    optional: true
  })
], SafeBag.prototype, "bagAttributes", void 0);
var SafeContents = SafeContents_1 = class SafeContents2 extends AsnArray {
  static {
    __name(this, "SafeContents");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SafeContents_1.prototype);
  }
};
SafeContents = SafeContents_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: SafeBag
  })
], SafeContents);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-pkcs9/2.11.0/build/es2015/index.js
var ExtensionRequest_1;
var ExtendedCertificateAttributes_1;
var SMIMECapabilities_1;
var id_pkcs9 = "1.2.840.113549.1.9";
var id_pkcs9_mo = `${id_pkcs9}.0`;
var id_pkcs9_oc = `${id_pkcs9}.24`;
var id_pkcs9_at = `${id_pkcs9}.25`;
var id_pkcs9_sx = `${id_pkcs9}.26`;
var id_pkcs9_mr = `${id_pkcs9}.27`;
var id_pkcs9_oc_pkcsEntity = `${id_pkcs9_oc}.1`;
var id_pkcs9_oc_naturalPerson = `${id_pkcs9_oc}.2`;
var id_pkcs9_at_emailAddress = `${id_pkcs9}.1`;
var id_pkcs9_at_unstructuredName = `${id_pkcs9}.2`;
var id_pkcs9_at_contentType = `${id_pkcs9}.3`;
var id_pkcs9_at_messageDigest = `${id_pkcs9}.4`;
var id_pkcs9_at_signingTime = `${id_pkcs9}.5`;
var id_pkcs9_at_counterSignature = `${id_pkcs9}.6`;
var id_pkcs9_at_challengePassword = `${id_pkcs9}.7`;
var id_pkcs9_at_unstructuredAddress = `${id_pkcs9}.8`;
var id_pkcs9_at_extendedCertificateAttributes = `${id_pkcs9}.9`;
var id_pkcs9_at_signingDescription = `${id_pkcs9}.13`;
var id_pkcs9_at_extensionRequest = `${id_pkcs9}.14`;
var id_pkcs9_at_smimeCapabilities = `${id_pkcs9}.15`;
var id_pkcs9_at_friendlyName = `${id_pkcs9}.20`;
var id_pkcs9_at_localKeyId = `${id_pkcs9}.21`;
var id_pkcs9_at_pkcs15Token = `${id_pkcs9_at}.1`;
var id_pkcs9_at_encryptedPrivateKeyInfo = `${id_pkcs9_at}.2`;
var id_pkcs9_at_randomNonce = `${id_pkcs9_at}.3`;
var id_pkcs9_at_sequenceNumber = `${id_pkcs9_at}.4`;
var id_pkcs9_at_pkcs7PDU = `${id_pkcs9_at}.5`;
var id_ietf_at = "1.3.6.1.5.5.7.9";
var id_pkcs9_at_dateOfBirth = `${id_ietf_at}.1`;
var id_pkcs9_at_placeOfBirth = `${id_ietf_at}.2`;
var id_pkcs9_at_gender = `${id_ietf_at}.3`;
var id_pkcs9_at_countryOfCitizenship = `${id_ietf_at}.4`;
var id_pkcs9_at_countryOfResidence = `${id_ietf_at}.5`;
var id_pkcs9_sx_pkcs9String = `${id_pkcs9_sx}.1`;
var id_pkcs9_sx_signingTime = `${id_pkcs9_sx}.2`;
var id_pkcs9_mr_caseIgnoreMatch = `${id_pkcs9_mr}.1`;
var id_pkcs9_mr_signingTimeMatch = `${id_pkcs9_mr}.2`;
var id_smime = `${id_pkcs9}.16`;
var id_certTypes2 = `${id_pkcs9}.22`;
var crlTypes = `${id_pkcs9}.23`;
var id_at_pseudonym = `${id_at}.65`;
var PKCS9String = class PKCS9String2 extends DirectoryString {
  static {
    __name(this, "PKCS9String");
  }
  ia5String;
  constructor(params = {}) {
    super(params);
  }
  toString() {
    const o = {};
    o.toString();
    return this.ia5String || super.toString();
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String
  })
], PKCS9String.prototype, "ia5String", void 0);
PKCS9String = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], PKCS9String);
var Pkcs7PDU = class Pkcs7PDU2 extends ContentInfo {
  static {
    __name(this, "Pkcs7PDU");
  }
};
Pkcs7PDU = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], Pkcs7PDU);
var UserPKCS12 = class UserPKCS122 extends PFX {
  static {
    __name(this, "UserPKCS12");
  }
};
UserPKCS12 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], UserPKCS12);
var EncryptedPrivateKeyInfo2 = class EncryptedPrivateKeyInfo3 extends EncryptedPrivateKeyInfo {
  static {
    __name(this, "EncryptedPrivateKeyInfo");
  }
};
EncryptedPrivateKeyInfo2 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], EncryptedPrivateKeyInfo2);
var EmailAddress = class EmailAddress2 {
  static {
    __name(this, "EmailAddress");
  }
  value;
  constructor(value = "") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.IA5String
  })
], EmailAddress.prototype, "value", void 0);
EmailAddress = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], EmailAddress);
var UnstructuredName = class UnstructuredName2 extends PKCS9String {
  static {
    __name(this, "UnstructuredName");
  }
};
UnstructuredName = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], UnstructuredName);
var UnstructuredAddress = class UnstructuredAddress2 extends DirectoryString {
  static {
    __name(this, "UnstructuredAddress");
  }
};
UnstructuredAddress = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], UnstructuredAddress);
var DateOfBirth = class DateOfBirth2 {
  static {
    __name(this, "DateOfBirth");
  }
  value;
  constructor(value = /* @__PURE__ */ new Date()) {
    this.value = value;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime
  })
], DateOfBirth.prototype, "value", void 0);
DateOfBirth = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], DateOfBirth);
var PlaceOfBirth = class PlaceOfBirth2 extends DirectoryString {
  static {
    __name(this, "PlaceOfBirth");
  }
};
PlaceOfBirth = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], PlaceOfBirth);
var Gender = class Gender2 {
  static {
    __name(this, "Gender");
  }
  value;
  constructor(value = "M") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.PrintableString
  })
], Gender.prototype, "value", void 0);
Gender = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], Gender);
var CountryOfCitizenship = class CountryOfCitizenship2 {
  static {
    __name(this, "CountryOfCitizenship");
  }
  value;
  constructor(value = "") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.PrintableString
  })
], CountryOfCitizenship.prototype, "value", void 0);
CountryOfCitizenship = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], CountryOfCitizenship);
var CountryOfResidence = class CountryOfResidence2 extends CountryOfCitizenship {
  static {
    __name(this, "CountryOfResidence");
  }
};
CountryOfResidence = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], CountryOfResidence);
var Pseudonym = class Pseudonym2 extends DirectoryString {
  static {
    __name(this, "Pseudonym");
  }
};
Pseudonym = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], Pseudonym);
var ContentType = class ContentType2 {
  static {
    __name(this, "ContentType");
  }
  value;
  constructor(value = "") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], ContentType.prototype, "value", void 0);
ContentType = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], ContentType);
var SigningTime3 = class SigningTime4 extends Time {
  static {
    __name(this, "SigningTime");
  }
};
SigningTime3 = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], SigningTime3);
var SequenceNumber = class SequenceNumber2 {
  static {
    __name(this, "SequenceNumber");
  }
  value;
  constructor(value = 0) {
    this.value = value;
  }
  toString() {
    return this.value.toString();
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], SequenceNumber.prototype, "value", void 0);
SequenceNumber = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], SequenceNumber);
var CounterSignature3 = class CounterSignature4 extends SignerInfo {
  static {
    __name(this, "CounterSignature");
  }
};
CounterSignature3 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], CounterSignature3);
var ChallengePassword = class ChallengePassword2 extends DirectoryString {
  static {
    __name(this, "ChallengePassword");
  }
};
ChallengePassword = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], ChallengePassword);
var ExtensionRequest = ExtensionRequest_1 = class ExtensionRequest2 extends Extensions {
  static {
    __name(this, "ExtensionRequest");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, ExtensionRequest_1.prototype);
  }
};
ExtensionRequest = ExtensionRequest_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], ExtensionRequest);
var ExtendedCertificateAttributes = ExtendedCertificateAttributes_1 = class ExtendedCertificateAttributes2 extends AsnArray {
  static {
    __name(this, "ExtendedCertificateAttributes");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, ExtendedCertificateAttributes_1.prototype);
  }
};
ExtendedCertificateAttributes = ExtendedCertificateAttributes_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Set,
    itemType: Attribute2
  })
], ExtendedCertificateAttributes);
var FriendlyName = class FriendlyName2 {
  static {
    __name(this, "FriendlyName");
  }
  value;
  constructor(value = "") {
    this.value = value;
  }
  toString() {
    return this.value;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.BmpString
  })
], FriendlyName.prototype, "value", void 0);
FriendlyName = __decorate([
  AsnType({
    type: AsnTypeTypes.Choice
  })
], FriendlyName);
var SMIMECapability = class SMIMECapability2 extends AlgorithmIdentifier {
  static {
    __name(this, "SMIMECapability");
  }
};
SMIMECapability = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], SMIMECapability);
var SMIMECapabilities = SMIMECapabilities_1 = class SMIMECapabilities2 extends AsnArray {
  static {
    __name(this, "SMIMECapabilities");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SMIMECapabilities_1.prototype);
  }
};
SMIMECapabilities = SMIMECapabilities_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: SMIMECapability
  })
], SMIMECapabilities);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-post-quantum/2.11.0/build/es2015/composite_signatures.js
var CompositeParams_1;
var CompositeSignatureValue_1;
var CompositeParams = CompositeParams_1 = class CompositeParams2 extends AsnArray {
  static {
    __name(this, "CompositeParams");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CompositeParams_1.prototype);
  }
};
CompositeParams = CompositeParams_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AlgorithmIdentifier
  })
], CompositeParams);
var CompositeSignatureValue = CompositeSignatureValue_1 = class CompositeSignatureValue2 extends AsnArray {
  static {
    __name(this, "CompositeSignatureValue");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CompositeSignatureValue_1.prototype);
  }
};
CompositeSignatureValue = CompositeSignatureValue_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: AsnPropTypes.BitString
  })
], CompositeSignatureValue);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-asym-key/2.11.0/build/es2015/index.js
var AsymmetricKeyPackage_1;
var Version3;
(function(Version4) {
  Version4[Version4["v1"] = 0] = "v1";
  Version4[Version4["v2"] = 1] = "v2";
})(Version3 || (Version3 = {}));
var PrivateKeyAlgorithmIdentifier = class PrivateKeyAlgorithmIdentifier2 extends AlgorithmIdentifier {
  static {
    __name(this, "PrivateKeyAlgorithmIdentifier");
  }
};
PrivateKeyAlgorithmIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], PrivateKeyAlgorithmIdentifier);
var OneAsymmetricKey = class OneAsymmetricKey2 {
  static {
    __name(this, "OneAsymmetricKey");
  }
  version = Version3.v1;
  privateKeyAlgorithm = new AlgorithmIdentifier();
  privateKey = new ArrayBuffer(0);
  attributes;
  publicKey;
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], OneAsymmetricKey.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], OneAsymmetricKey.prototype, "privateKeyAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.OctetString
  })
], OneAsymmetricKey.prototype, "privateKey", void 0);
__decorate([
  AsnProp({
    type: Attributes,
    context: 0,
    implicit: true,
    optional: true
  })
], OneAsymmetricKey.prototype, "attributes", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    context: 1,
    implicit: true,
    optional: true
  })
], OneAsymmetricKey.prototype, "publicKey", void 0);
OneAsymmetricKey = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], OneAsymmetricKey);
var PrivateKeyInfo2 = class PrivateKeyInfo3 extends OneAsymmetricKey {
  static {
    __name(this, "PrivateKeyInfo");
  }
};
PrivateKeyInfo2 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], PrivateKeyInfo2);
var AsymmetricKeyPackage = AsymmetricKeyPackage_1 = class AsymmetricKeyPackage2 extends AsnArray {
  static {
    __name(this, "AsymmetricKeyPackage");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, AsymmetricKeyPackage_1.prototype);
  }
};
AsymmetricKeyPackage = AsymmetricKeyPackage_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: OneAsymmetricKey
  })
], AsymmetricKeyPackage);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-post-quantum/2.11.0/build/es2015/composite_keys.js
var CompositePublicKey_1;
var CompositePrivateKey_1;
var CompositeAlgorithmIdentifier = class CompositeAlgorithmIdentifier2 extends AlgorithmIdentifier {
  static {
    __name(this, "CompositeAlgorithmIdentifier");
  }
};
CompositeAlgorithmIdentifier = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence
  })
], CompositeAlgorithmIdentifier);
var CompositePublicKey = CompositePublicKey_1 = class CompositePublicKey2 extends AsnArray {
  static {
    __name(this, "CompositePublicKey");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CompositePublicKey_1.prototype);
  }
};
CompositePublicKey = CompositePublicKey_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: SubjectPublicKeyInfo
  })
], CompositePublicKey);
var CompositePrivateKey = CompositePrivateKey_1 = class CompositePrivateKey2 extends AsnArray {
  static {
    __name(this, "CompositePrivateKey");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CompositePrivateKey_1.prototype);
  }
};
CompositePrivateKey = CompositePrivateKey_1 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: OneAsymmetricKey
  })
], CompositePrivateKey);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-x509-post-quantum/2.11.0/build/es2015/object_identifiers.js
var id_sigAlgs = "2.16.840.1.101.3.4.3";
var id_ml_dsa_44 = `${id_sigAlgs}.17`;
var id_ml_dsa_65 = `${id_sigAlgs}.18`;
var id_ml_dsa_87 = `${id_sigAlgs}.19`;
var id_slh_dsa_sha2_128s = `${id_sigAlgs}.20`;
var id_slh_dsa_sha2_128f = `${id_sigAlgs}.21`;
var id_slh_dsa_sha2_192s = `${id_sigAlgs}.22`;
var id_slh_dsa_sha2_192f = `${id_sigAlgs}.23`;
var id_slh_dsa_sha2_256s = `${id_sigAlgs}.24`;
var id_slh_dsa_sha2_256f = `${id_sigAlgs}.25`;
var id_slh_dsa_shake_128s = `${id_sigAlgs}.26`;
var id_slh_dsa_shake_128f = `${id_sigAlgs}.27`;
var id_slh_dsa_shake_192s = `${id_sigAlgs}.28`;
var id_slh_dsa_shake_192f = `${id_sigAlgs}.29`;
var id_slh_dsa_shake_256s = `${id_sigAlgs}.30`;
var id_slh_dsa_shake_256f = `${id_sigAlgs}.31`;

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-csr/2.11.0/build/es2015/attributes.js
var Attributes_12;
var Attributes3 = Attributes_12 = class Attributes4 extends AsnArray {
  static {
    __name(this, "Attributes");
  }
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Attributes_12.prototype);
  }
};
Attributes3 = Attributes_12 = __decorate([
  AsnType({
    type: AsnTypeTypes.Sequence,
    itemType: Attribute
  })
], Attributes3);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-csr/2.11.0/build/es2015/certification_request_info.js
var CertificationRequestInfo = class {
  static {
    __name(this, "CertificationRequestInfo");
  }
  version = 0;
  subject = new Name();
  subjectPKInfo = new SubjectPublicKeyInfo();
  attributes = new Attributes3();
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer
  })
], CertificationRequestInfo.prototype, "version", void 0);
__decorate([
  AsnProp({
    type: Name
  })
], CertificationRequestInfo.prototype, "subject", void 0);
__decorate([
  AsnProp({
    type: SubjectPublicKeyInfo
  })
], CertificationRequestInfo.prototype, "subjectPKInfo", void 0);
__decorate([
  AsnProp({
    type: Attributes3,
    implicit: true,
    context: 0,
    optional: true
  })
], CertificationRequestInfo.prototype, "attributes", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/asn1-csr/2.11.0/build/es2015/certification_request.js
var CertificationRequest = class {
  static {
    __name(this, "CertificationRequest");
  }
  certificationRequestInfo = new CertificationRequestInfo();
  certificationRequestInfoRaw;
  signatureAlgorithm = new AlgorithmIdentifier();
  signature = new ArrayBuffer(0);
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({
    type: CertificationRequestInfo,
    raw: true
  })
], CertificationRequest.prototype, "certificationRequestInfo", void 0);
__decorate([
  AsnProp({
    type: AlgorithmIdentifier
  })
], CertificationRequest.prototype, "signatureAlgorithm", void 0);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString
  })
], CertificationRequest.prototype, "signature", void 0);

// ../../../root/.cache/deno/npm/registry.npmjs.org/@peculiar/x509/2.2.0/build/x509.es.js
var diAlgorithm = "crypto.algorithm";
var AlgorithmProvider = class {
  static {
    __name(this, "AlgorithmProvider");
  }
  getAlgorithms() {
    return instance.resolveAll(diAlgorithm);
  }
  toAsnAlgorithm(alg) {
    const algCopy = {
      ...alg
    };
    if (algCopy.hash && typeof algCopy.hash === "string") {
      algCopy.hash = {
        name: algCopy.hash
      };
    }
    for (const algorithm of this.getAlgorithms()) {
      const res = algorithm.toAsnAlgorithm(algCopy);
      if (res) {
        return res;
      }
    }
    if (/^[0-9.]+$/.test(alg.name)) {
      const res = new AlgorithmIdentifier({
        algorithm: alg.name
      });
      if ("parameters" in alg) {
        const unknown = alg;
        res.parameters = unknown.parameters;
      }
      return res;
    }
    throw new Error("Cannot convert WebCrypto algorithm to ASN.1 algorithm");
  }
  toWebAlgorithm(alg) {
    for (const algorithm of this.getAlgorithms()) {
      const res = algorithm.toWebAlgorithm(alg);
      if (res) {
        return res;
      }
    }
    const unknown = {
      name: alg.algorithm,
      parameters: alg.parameters
    };
    return unknown;
  }
};
var diAlgorithmProvider = "crypto.algorithmProvider";
instance.registerSingleton(diAlgorithmProvider, AlgorithmProvider);
var EcAlgorithm_1;
var idVersionOne = "1.3.36.3.3.2.8.1.1";
var idBrainpoolP160r1 = `${idVersionOne}.1`;
var idBrainpoolP160t1 = `${idVersionOne}.2`;
var idBrainpoolP192r1 = `${idVersionOne}.3`;
var idBrainpoolP192t1 = `${idVersionOne}.4`;
var idBrainpoolP224r1 = `${idVersionOne}.5`;
var idBrainpoolP224t1 = `${idVersionOne}.6`;
var idBrainpoolP256r1 = `${idVersionOne}.7`;
var idBrainpoolP256t1 = `${idVersionOne}.8`;
var idBrainpoolP320r1 = `${idVersionOne}.9`;
var idBrainpoolP320t1 = `${idVersionOne}.10`;
var idBrainpoolP384r1 = `${idVersionOne}.11`;
var idBrainpoolP384t1 = `${idVersionOne}.12`;
var idBrainpoolP512r1 = `${idVersionOne}.13`;
var idBrainpoolP512t1 = `${idVersionOne}.14`;
var brainpoolP160r1 = "brainpoolP160r1";
var brainpoolP160t1 = "brainpoolP160t1";
var brainpoolP192r1 = "brainpoolP192r1";
var brainpoolP192t1 = "brainpoolP192t1";
var brainpoolP224r1 = "brainpoolP224r1";
var brainpoolP224t1 = "brainpoolP224t1";
var brainpoolP256r1 = "brainpoolP256r1";
var brainpoolP256t1 = "brainpoolP256t1";
var brainpoolP320r1 = "brainpoolP320r1";
var brainpoolP320t1 = "brainpoolP320t1";
var brainpoolP384r1 = "brainpoolP384r1";
var brainpoolP384t1 = "brainpoolP384t1";
var brainpoolP512r1 = "brainpoolP512r1";
var brainpoolP512t1 = "brainpoolP512t1";
var ECDSA = "ECDSA";
var EcAlgorithm = EcAlgorithm_1 = class EcAlgorithm2 {
  static {
    __name(this, "EcAlgorithm");
  }
  toAsnAlgorithm(alg) {
    switch (alg.name.toLowerCase()) {
      case ECDSA.toLowerCase():
        if ("hash" in alg) {
          const hash = typeof alg.hash === "string" ? alg.hash : alg.hash.name;
          switch (hash.toLowerCase()) {
            case "sha-1":
              return ecdsaWithSHA1;
            case "sha-256":
              return ecdsaWithSHA256;
            case "sha-384":
              return ecdsaWithSHA384;
            case "sha-512":
              return ecdsaWithSHA512;
          }
        } else if ("namedCurve" in alg) {
          let parameters = "";
          switch (alg.namedCurve) {
            case "P-256":
              parameters = id_secp256r1;
              break;
            case "K-256":
              parameters = EcAlgorithm_1.SECP256K1;
              break;
            case "P-384":
              parameters = id_secp384r1;
              break;
            case "P-521":
              parameters = id_secp521r1;
              break;
            case brainpoolP160r1:
              parameters = idBrainpoolP160r1;
              break;
            case brainpoolP160t1:
              parameters = idBrainpoolP160t1;
              break;
            case brainpoolP192r1:
              parameters = idBrainpoolP192r1;
              break;
            case brainpoolP192t1:
              parameters = idBrainpoolP192t1;
              break;
            case brainpoolP224r1:
              parameters = idBrainpoolP224r1;
              break;
            case brainpoolP224t1:
              parameters = idBrainpoolP224t1;
              break;
            case brainpoolP256r1:
              parameters = idBrainpoolP256r1;
              break;
            case brainpoolP256t1:
              parameters = idBrainpoolP256t1;
              break;
            case brainpoolP320r1:
              parameters = idBrainpoolP320r1;
              break;
            case brainpoolP320t1:
              parameters = idBrainpoolP320t1;
              break;
            case brainpoolP384r1:
              parameters = idBrainpoolP384r1;
              break;
            case brainpoolP384t1:
              parameters = idBrainpoolP384t1;
              break;
            case brainpoolP512r1:
              parameters = idBrainpoolP512r1;
              break;
            case brainpoolP512t1:
              parameters = idBrainpoolP512t1;
              break;
          }
          if (parameters) {
            return new AlgorithmIdentifier({
              algorithm: id_ecPublicKey,
              parameters: AsnConvert.serialize(new ECParameters({
                namedCurve: parameters
              }))
            });
          }
        }
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case id_ecdsaWithSHA1:
        return {
          name: ECDSA,
          hash: {
            name: "SHA-1"
          }
        };
      case id_ecdsaWithSHA256:
        return {
          name: ECDSA,
          hash: {
            name: "SHA-256"
          }
        };
      case id_ecdsaWithSHA384:
        return {
          name: ECDSA,
          hash: {
            name: "SHA-384"
          }
        };
      case id_ecdsaWithSHA512:
        return {
          name: ECDSA,
          hash: {
            name: "SHA-512"
          }
        };
      case id_ecPublicKey: {
        if (!alg.parameters) {
          throw new TypeError("Cannot get required parameters from EC algorithm");
        }
        const parameters = AsnConvert.parse(alg.parameters, ECParameters);
        switch (parameters.namedCurve) {
          case id_secp256r1:
            return {
              name: ECDSA,
              namedCurve: "P-256"
            };
          case EcAlgorithm_1.SECP256K1:
            return {
              name: ECDSA,
              namedCurve: "K-256"
            };
          case id_secp384r1:
            return {
              name: ECDSA,
              namedCurve: "P-384"
            };
          case id_secp521r1:
            return {
              name: ECDSA,
              namedCurve: "P-521"
            };
          case idBrainpoolP160r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP160r1
            };
          case idBrainpoolP160t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP160t1
            };
          case idBrainpoolP192r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP192r1
            };
          case idBrainpoolP192t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP192t1
            };
          case idBrainpoolP224r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP224r1
            };
          case idBrainpoolP224t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP224t1
            };
          case idBrainpoolP256r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP256r1
            };
          case idBrainpoolP256t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP256t1
            };
          case idBrainpoolP320r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP320r1
            };
          case idBrainpoolP320t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP320t1
            };
          case idBrainpoolP384r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP384r1
            };
          case idBrainpoolP384t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP384t1
            };
          case idBrainpoolP512r1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP512r1
            };
          case idBrainpoolP512t1:
            return {
              name: ECDSA,
              namedCurve: brainpoolP512t1
            };
        }
      }
    }
    return null;
  }
};
EcAlgorithm.SECP256K1 = "1.3.132.0.10";
EcAlgorithm = EcAlgorithm_1 = __decorate([
  injectable_default()
], EcAlgorithm);
instance.registerSingleton(diAlgorithm, EcAlgorithm);
var NAME2 = Symbol("name");
var VALUE = Symbol("value");
var TextObject = class {
  static {
    __name(this, "TextObject");
  }
  constructor(name, items = {}, value = "") {
    this[NAME2] = name;
    this[VALUE] = value;
    for (const key in items) {
      this[key] = items[key];
    }
  }
};
TextObject.NAME = NAME2;
TextObject.VALUE = VALUE;
var DefaultAlgorithmSerializer = class {
  static {
    __name(this, "DefaultAlgorithmSerializer");
  }
  static toTextObject(alg) {
    const obj = new TextObject("Algorithm Identifier", {}, OidSerializer.toString(alg.algorithm));
    if (alg.parameters) {
      switch (alg.algorithm) {
        case id_ecPublicKey: {
          const ecAlg = new EcAlgorithm().toWebAlgorithm(alg);
          if (ecAlg && "namedCurve" in ecAlg) {
            obj["Named Curve"] = ecAlg.namedCurve;
          } else {
            obj["Parameters"] = alg.parameters;
          }
          break;
        }
        default:
          obj["Parameters"] = alg.parameters;
      }
    }
    return obj;
  }
};
var OidSerializer = class {
  static {
    __name(this, "OidSerializer");
  }
  static toString(oid) {
    const name = this.items[oid];
    if (name) {
      return name;
    }
    return oid;
  }
};
OidSerializer.items = {
  [id_sha1]: "sha1",
  [id_sha224]: "sha224",
  [id_sha256]: "sha256",
  [id_sha384]: "sha384",
  [id_sha512]: "sha512",
  [id_rsaEncryption]: "rsaEncryption",
  [id_sha1WithRSAEncryption]: "sha1WithRSAEncryption",
  [id_sha224WithRSAEncryption]: "sha224WithRSAEncryption",
  [id_sha256WithRSAEncryption]: "sha256WithRSAEncryption",
  [id_sha384WithRSAEncryption]: "sha384WithRSAEncryption",
  [id_sha512WithRSAEncryption]: "sha512WithRSAEncryption",
  [id_ecPublicKey]: "ecPublicKey",
  [id_ecdsaWithSHA1]: "ecdsaWithSHA1",
  [id_ecdsaWithSHA224]: "ecdsaWithSHA224",
  [id_ecdsaWithSHA256]: "ecdsaWithSHA256",
  [id_ecdsaWithSHA384]: "ecdsaWithSHA384",
  [id_ecdsaWithSHA512]: "ecdsaWithSHA512",
  [id_kp_serverAuth]: "TLS WWW server authentication",
  [id_kp_clientAuth]: "TLS WWW client authentication",
  [id_kp_codeSigning]: "Code Signing",
  [id_kp_emailProtection]: "E-mail Protection",
  [id_kp_timeStamping]: "Time Stamping",
  [id_kp_OCSPSigning]: "OCSP Signing",
  [id_signedData]: "Signed Data"
};
var TextConverter = class {
  static {
    __name(this, "TextConverter");
  }
  static serialize(obj) {
    return this.serializeObj(obj).join("\n");
  }
  static pad(deep = 0) {
    return "".padStart(2 * deep, " ");
  }
  static serializeObj(obj, deep = 0) {
    const res = [];
    let pad2 = this.pad(deep++);
    let value = "";
    const objValue = obj[TextObject.VALUE];
    if (objValue) {
      value = ` ${objValue}`;
    }
    res.push(`${pad2}${obj[TextObject.NAME]}:${value}`);
    pad2 = this.pad(deep);
    for (const key in obj) {
      if (typeof key === "symbol") {
        continue;
      }
      const value2 = obj[key];
      const keyValue = key ? `${key}: ` : "";
      if (typeof value2 === "string" || typeof value2 === "number" || typeof value2 === "boolean") {
        res.push(`${pad2}${keyValue}${value2}`);
      } else if (value2 instanceof Date) {
        res.push(`${pad2}${keyValue}${value2.toUTCString()}`);
      } else if (Array.isArray(value2)) {
        for (const obj2 of value2) {
          obj2[TextObject.NAME] = key;
          res.push(...this.serializeObj(obj2, deep));
        }
      } else if (value2 instanceof TextObject) {
        value2[TextObject.NAME] = key;
        res.push(...this.serializeObj(value2, deep));
      } else if (BufferSourceConverter.isBufferSource(value2)) {
        if (key) {
          res.push(`${pad2}${keyValue}`);
          res.push(...this.serializeBufferSource(value2, deep + 1));
        } else {
          res.push(...this.serializeBufferSource(value2, deep));
        }
      } else if ("toTextObject" in value2) {
        const obj2 = value2.toTextObject();
        obj2[TextObject.NAME] = key;
        res.push(...this.serializeObj(obj2, deep));
      } else {
        throw new TypeError("Cannot serialize data in text format. Unsupported type.");
      }
    }
    return res;
  }
  static serializeBufferSource(buffer, deep = 0) {
    const pad2 = this.pad(deep);
    const view = BufferSourceConverter.toUint8Array(buffer);
    const res = [];
    for (let i = 0; i < view.length; ) {
      const row = [];
      for (let j = 0; j < 16 && i < view.length; j++) {
        if (j === 8) {
          row.push("");
        }
        const hex2 = view[i++].toString(16).padStart(2, "0");
        row.push(hex2);
      }
      res.push(`${pad2}${row.join(" ")}`);
    }
    return res;
  }
  static serializeAlgorithm(alg) {
    return this.algorithmSerializer.toTextObject(alg);
  }
};
TextConverter.oidSerializer = OidSerializer;
TextConverter.algorithmSerializer = DefaultAlgorithmSerializer;
var _AsnData_rawData;
var _AsnData_options;
var AsnData = class _AsnData {
  static {
    __name(this, "AsnData");
  }
  get parseOptions() {
    return __classPrivateFieldGet(this, _AsnData_options, "f");
  }
  get rawData() {
    if (!__classPrivateFieldGet(this, _AsnData_rawData, "f")) {
      __classPrivateFieldSet(this, _AsnData_rawData, AsnConvert.serialize(this.asn), "f");
    }
    return __classPrivateFieldGet(this, _AsnData_rawData, "f");
  }
  constructor(...args) {
    _AsnData_rawData.set(this, void 0);
    _AsnData_options.set(this, void 0);
    if (BufferSourceConverter.isBufferSource(args[0])) {
      __classPrivateFieldSet(this, _AsnData_options, args[2], "f");
      this.asn = AsnConvert.parse(args[0], args[1], args[2]);
      __classPrivateFieldSet(this, _AsnData_rawData, BufferSourceConverter.toArrayBuffer(args[0]), "f");
      this.onInit(this.asn);
    } else {
      __classPrivateFieldSet(this, _AsnData_options, args[1], "f");
      this.asn = args[0];
      this.onInit(this.asn);
    }
  }
  equal(data) {
    if (data instanceof _AsnData) {
      return isEqual(data.rawData, this.rawData);
    }
    return false;
  }
  toString(format4 = "text") {
    switch (format4) {
      case "asn":
        return AsnConvert.toString(this.rawData, __classPrivateFieldGet(this, _AsnData_options, "f"));
      case "text":
        return TextConverter.serialize(this.toTextObject());
      case "hex":
        return Convert.ToHex(this.rawData);
      case "base64":
        return Convert.ToBase64(this.rawData);
      case "base64url":
        return Convert.ToBase64Url(this.rawData);
      default:
        throw TypeError("Argument 'format' is unsupported value");
    }
  }
  getTextName() {
    const constructor = this.constructor;
    return constructor.NAME;
  }
  toTextObject() {
    const obj = this.toTextObjectEmpty();
    obj[""] = this.rawData;
    return obj;
  }
  toTextObjectEmpty(value) {
    return new TextObject(this.getTextName(), {}, value);
  }
};
_AsnData_rawData = /* @__PURE__ */ new WeakMap(), _AsnData_options = /* @__PURE__ */ new WeakMap();
AsnData.NAME = "ASN";
var _a2;
var CryptoProvider = class _CryptoProvider {
  static {
    __name(this, "CryptoProvider");
  }
  static isCryptoKeyPair(data) {
    return data && data.privateKey && data.publicKey;
  }
  static isCryptoKey(data) {
    return data && data.usages && data.type && data.algorithm && data.extractable !== void 0;
  }
  constructor() {
    this.items = /* @__PURE__ */ new Map();
    this[_a2] = "CryptoProvider";
    if (typeof self !== "undefined" && typeof crypto !== "undefined") {
      this.set(_CryptoProvider.DEFAULT, crypto);
    } else if (typeof global !== "undefined" && global.crypto && global.crypto.subtle) {
      this.set(_CryptoProvider.DEFAULT, global.crypto);
    }
  }
  clear() {
    this.items.clear();
  }
  delete(key) {
    return this.items.delete(key);
  }
  forEach(callbackfn, thisArg) {
    return this.items.forEach(callbackfn, thisArg);
  }
  has(key) {
    return this.items.has(key);
  }
  get size() {
    return this.items.size;
  }
  entries() {
    return this.items.entries();
  }
  keys() {
    return this.items.keys();
  }
  values() {
    return this.items.values();
  }
  [Symbol.iterator]() {
    return this.items[Symbol.iterator]();
  }
  get(key = _CryptoProvider.DEFAULT) {
    const crypto2 = this.items.get(key.toLowerCase());
    if (!crypto2) {
      throw new Error(`Cannot get Crypto by name '${key}'`);
    }
    return crypto2;
  }
  set(key, value) {
    if (typeof key === "string") {
      if (!value) {
        throw new TypeError("Argument 'value' is required");
      }
      this.items.set(key.toLowerCase(), value);
    } else {
      this.items.set(_CryptoProvider.DEFAULT, key);
    }
    return this;
  }
};
_a2 = Symbol.toStringTag;
CryptoProvider.DEFAULT = "default";
var cryptoProvider = new CryptoProvider();
var selfProducedParseOptions = {
  berOptions: {
    maxDepth: Infinity,
    maxNodes: Infinity,
    maxContentLength: Infinity
  }
};
function getCertificateSerialNumber(raw) {
  let serialNumber = BufferSourceConverter.toUint8Array(raw);
  if (serialNumber.length > 1 && serialNumber[0] === 0 && serialNumber[1] > 127) {
    serialNumber = serialNumber.slice(1);
  }
  return Convert.ToHex(serialNumber);
}
__name(getCertificateSerialNumber, "getCertificateSerialNumber");
var Extension2 = class _Extension extends AsnData {
  static {
    __name(this, "Extension");
  }
  constructor(...args) {
    let raw;
    let options;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      raw = BufferSourceConverter.toArrayBuffer(args[0]);
      options = args[1];
    } else {
      raw = AsnConvert.serialize(new Extension({
        extnID: args[0],
        critical: args[1],
        extnValue: new OctetString2(BufferSourceConverter.toArrayBuffer(args[2]))
      }));
      options = selfProducedParseOptions;
    }
    super(raw, Extension, options);
  }
  onInit(asn) {
    this.type = asn.extnID;
    this.critical = asn.critical;
    this.value = asn.extnValue.buffer;
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj[""] = this.value;
    return obj;
  }
  toTextObjectWithoutValue() {
    const obj = this.toTextObjectEmpty(this.critical ? "critical" : void 0);
    if (obj[TextObject.NAME] === _Extension.NAME) {
      obj[TextObject.NAME] = OidSerializer.toString(this.type);
    }
    return obj;
  }
};
var OID_REGEX = /^[0-2](?:\.[1-9][0-9]*)+$/;
function isOID(id) {
  return new RegExp(OID_REGEX).test(id);
}
__name(isOID, "isOID");
var NameIdentifier = class {
  static {
    __name(this, "NameIdentifier");
  }
  constructor(names2 = {}) {
    this.items = {};
    for (const id in names2) {
      this.register(id, names2[id]);
    }
  }
  get(idOrName) {
    return this.items[idOrName] || null;
  }
  findId(idOrName) {
    if (!isOID(idOrName)) {
      return this.get(idOrName);
    }
    return idOrName;
  }
  register(id, name) {
    this.items[id] = name;
    this.items[name] = id;
  }
};
var names = new NameIdentifier();
names.register("CN", "2.5.4.3");
names.register("L", "2.5.4.7");
names.register("ST", "2.5.4.8");
names.register("O", "2.5.4.10");
names.register("OU", "2.5.4.11");
names.register("C", "2.5.4.6");
names.register("DC", "0.9.2342.19200300.100.1.25");
names.register("E", "1.2.840.113549.1.9.1");
names.register("G", "2.5.4.42");
names.register("I", "2.5.4.43");
names.register("SN", "2.5.4.4");
names.register("T", "2.5.4.12");
function replaceUnknownCharacter(text, char) {
  return `\\${Convert.ToHex(Convert.FromUtf8String(char)).toUpperCase()}`;
}
__name(replaceUnknownCharacter, "replaceUnknownCharacter");
function escape2(data) {
  return data.replace(/([,+"\\<>;])/g, "\\$1").replace(/^([ #])/, "\\$1").replace(/([ ]$)/, "\\$1").replace(/([\r\n\t])/, replaceUnknownCharacter);
}
__name(escape2, "escape");
var Name3 = class _Name {
  static {
    __name(this, "Name");
  }
  static isASCII(text) {
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      if (code > 255) {
        return false;
      }
    }
    return true;
  }
  static isPrintableString(text) {
    return /^[A-Za-z0-9 '()+,-./:=?]*$/g.test(text);
  }
  constructor(data, extraNames = {}) {
    this.extraNames = new NameIdentifier();
    this.asn = new Name();
    for (const key in extraNames) {
      if (Object.prototype.hasOwnProperty.call(extraNames, key)) {
        const value = extraNames[key];
        this.extraNames.register(key, value);
      }
    }
    if (typeof data === "string") {
      this.asn = this.fromString(data);
    } else if (data instanceof Name) {
      this.asn = data;
    } else if (BufferSourceConverter.isBufferSource(data)) {
      this.asn = AsnConvert.parse(data, Name);
    } else {
      this.asn = this.fromJSON(data);
    }
  }
  getField(idOrName) {
    const id = this.extraNames.findId(idOrName) || names.findId(idOrName);
    const res = [];
    for (const name of this.asn) {
      for (const rdn of name) {
        if (rdn.type === id) {
          res.push(rdn.value.toString());
        }
      }
    }
    return res;
  }
  getName(idOrName) {
    return this.extraNames.get(idOrName) || names.get(idOrName);
  }
  toString() {
    return this.asn.map((rdn) => rdn.map((o) => {
      const type = this.getName(o.type) || o.type;
      const value = o.value.anyValue ? `#${Convert.ToHex(o.value.anyValue)}` : escape2(o.value.toString());
      return `${type}=${value}`;
    }).join("+")).join(", ");
  }
  toJSON() {
    var _a3;
    const json = [];
    for (const rdn of this.asn) {
      const jsonItem = {};
      for (const attr of rdn) {
        const type = this.getName(attr.type) || attr.type;
        (_a3 = jsonItem[type]) !== null && _a3 !== void 0 ? _a3 : jsonItem[type] = [];
        jsonItem[type].push(attr.value.anyValue ? `#${Convert.ToHex(attr.value.anyValue)}` : attr.value.toString());
      }
      json.push(jsonItem);
    }
    return json;
  }
  fromString(data) {
    const asn = new Name();
    const regex = /(\d\.[\d.]*\d|[A-Za-z]+)=((?:"")|(?:".*?[^\\]")|(?:[^,+"\\](?=[,+]|$))|(?:[^,+].*?(?:[^\\][,+]))|(?:))([,+])?/g;
    let matches = null;
    let level = ",";
    while (matches = regex.exec(`${data},`)) {
      let [, type, value] = matches;
      const lastChar = value[value.length - 1];
      if (lastChar === "," || lastChar === "+") {
        value = value.slice(0, value.length - 1);
        matches[3] = lastChar;
      }
      const next = matches[3];
      type = this.getTypeOid(type);
      const attr = this.createAttribute(type, value);
      if (level === "+") {
        asn[asn.length - 1].push(attr);
      } else {
        asn.push(new RelativeDistinguishedName([
          attr
        ]));
      }
      level = next;
    }
    return asn;
  }
  fromJSON(data) {
    const asn = new Name();
    for (const item of data) {
      const asnRdn = new RelativeDistinguishedName();
      for (const type in item) {
        const typeId = this.getTypeOid(type);
        const values = item[type];
        for (const value of values) {
          const asnAttr = this.createAttribute(typeId, value);
          asnRdn.push(asnAttr);
        }
      }
      asn.push(asnRdn);
    }
    return asn;
  }
  getTypeOid(type) {
    if (!/[\d.]+/.test(type)) {
      type = this.getName(type) || "";
    }
    if (!type) {
      throw new Error(`Cannot get OID for name type '${type}'`);
    }
    return type;
  }
  createAttribute(type, value) {
    const attr = new AttributeTypeAndValue({
      type
    });
    if (typeof value === "object") {
      for (const key in value) {
        switch (key) {
          case "ia5String":
            attr.value.ia5String = value[key];
            break;
          case "utf8String":
            attr.value.utf8String = value[key];
            break;
          case "universalString":
            attr.value.universalString = value[key];
            break;
          case "bmpString":
            attr.value.bmpString = value[key];
            break;
          case "printableString":
            attr.value.printableString = value[key];
            break;
        }
      }
    } else if (value[0] === "#") {
      attr.value.anyValue = Convert.FromHex(value.slice(1));
    } else {
      const processedValue = this.processStringValue(value);
      if (type === this.getName("E") || type === this.getName("DC")) {
        attr.value.ia5String = processedValue;
      } else {
        if (_Name.isPrintableString(processedValue)) {
          attr.value.printableString = processedValue;
        } else {
          attr.value.utf8String = processedValue;
        }
      }
    }
    return attr;
  }
  processStringValue(value) {
    const quotedMatches = /"(.*?[^\\])?"/.exec(value);
    if (quotedMatches) {
      value = quotedMatches[1];
    }
    return value.replace(/\\0a/gi, "\n").replace(/\\0d/gi, "\r").replace(/\\0g/gi, "	").replace(/\\(.)/g, "$1");
  }
  toArrayBuffer() {
    return AsnConvert.serialize(this.asn);
  }
  async getThumbprint(arg1, arg2) {
    let crypto2;
    let algorithm = "SHA-1";
    if (arg1) {
      if (typeof arg1 === "object" && "subtle" in arg1) {
        crypto2 = arg1;
      } else {
        algorithm = arg1;
        crypto2 = arg2;
      }
    }
    crypto2 !== null && crypto2 !== void 0 ? crypto2 : crypto2 = cryptoProvider.get();
    return await crypto2.subtle.digest(algorithm, this.toArrayBuffer());
  }
};
var ERR_GN_CONSTRUCTOR = "Cannot initialize GeneralName from ASN.1 data.";
var ERR_GN_STRING_FORMAT = `${ERR_GN_CONSTRUCTOR} Unsupported string format in use.`;
var ERR_GUID = `${ERR_GN_CONSTRUCTOR} Value doesn't match to GUID regular expression.`;
var GUID_REGEX = /^([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})$/i;
var id_GUID = "1.3.6.1.4.1.311.25.1";
var id_UPN = "1.3.6.1.4.1.311.20.2.3";
var DNS = "dns";
var DN = "dn";
var EMAIL = "email";
var IP = "ip";
var URL = "url";
var GUID = "guid";
var UPN = "upn";
var REGISTERED_ID = "id";
var GeneralName3 = class extends AsnData {
  static {
    __name(this, "GeneralName");
  }
  constructor(...args) {
    var _a3;
    let name;
    let options;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      options = args[1];
      name = AsnConvert.parse(args[0], GeneralName, options);
    } else if (typeof args[0] === "string") {
      options = selfProducedParseOptions;
      switch (args[0]) {
        case DN: {
          const derName = new Name3(args[1]).toArrayBuffer();
          const asnName = AsnConvert.parse(derName, Name, selfProducedParseOptions);
          name = new GeneralName({
            directoryName: asnName
          });
          break;
        }
        case DNS:
          name = new GeneralName({
            dNSName: args[1]
          });
          break;
        case EMAIL:
          name = new GeneralName({
            rfc822Name: args[1]
          });
          break;
        case GUID: {
          const matches = new RegExp(GUID_REGEX, "i").exec(args[1]);
          if (!matches) {
            throw new Error("Cannot parse GUID value. Value doesn't match to regular expression");
          }
          const hex2 = matches.slice(1).map((o, i) => {
            if (i < 3) {
              return Convert.ToHex(new Uint8Array(Convert.FromHex(o)).reverse());
            }
            return o;
          }).join("");
          name = new GeneralName({
            otherName: new OtherName({
              typeId: id_GUID,
              value: AsnConvert.serialize(new OctetString2(Convert.FromHex(hex2)))
            })
          });
          break;
        }
        case IP:
          name = new GeneralName({
            iPAddress: args[1]
          });
          break;
        case REGISTERED_ID:
          name = new GeneralName({
            registeredID: args[1]
          });
          break;
        case UPN: {
          name = new GeneralName({
            otherName: new OtherName({
              typeId: id_UPN,
              value: AsnConvert.serialize(AsnUtf8StringConverter.toASN(args[1]))
            })
          });
          break;
        }
        case URL:
          name = new GeneralName({
            uniformResourceIdentifier: args[1]
          });
          break;
        default:
          throw new Error("Cannot create GeneralName. Unsupported type of the name");
      }
    } else {
      name = args[0];
      options = (_a3 = args[1]) !== null && _a3 !== void 0 ? _a3 : selfProducedParseOptions;
    }
    super(name, options);
  }
  onInit(asn) {
    if (asn.dNSName != void 0) {
      this.type = DNS;
      this.value = asn.dNSName;
    } else if (asn.rfc822Name != void 0) {
      this.type = EMAIL;
      this.value = asn.rfc822Name;
    } else if (asn.iPAddress != void 0) {
      this.type = IP;
      this.value = asn.iPAddress;
    } else if (asn.uniformResourceIdentifier != void 0) {
      this.type = URL;
      this.value = asn.uniformResourceIdentifier;
    } else if (asn.registeredID != void 0) {
      this.type = REGISTERED_ID;
      this.value = asn.registeredID;
    } else if (asn.directoryName != void 0) {
      this.type = DN;
      this.value = new Name3(asn.directoryName).toString();
    } else if (asn.otherName != void 0) {
      if (asn.otherName.typeId === id_GUID) {
        this.type = GUID;
        const guid = AsnConvert.parse(asn.otherName.value, OctetString2, this.parseOptions);
        const matches = new RegExp(GUID_REGEX, "i").exec(Convert.ToHex(guid));
        if (!matches) {
          throw new Error(ERR_GUID);
        }
        this.value = matches.slice(1).map((o, i) => {
          if (i < 3) {
            return Convert.ToHex(new Uint8Array(Convert.FromHex(o)).reverse());
          }
          return o;
        }).join("-");
      } else if (asn.otherName.typeId === id_UPN) {
        this.type = UPN;
        this.value = AsnConvert.parse(asn.otherName.value, DirectoryString, this.parseOptions).toString();
      } else {
        throw new Error(ERR_GN_STRING_FORMAT);
      }
    } else {
      throw new Error(ERR_GN_STRING_FORMAT);
    }
  }
  toJSON() {
    return {
      type: this.type,
      value: this.value
    };
  }
  toTextObject() {
    let type;
    switch (this.type) {
      case DN:
      case DNS:
      case GUID:
      case IP:
      case REGISTERED_ID:
      case UPN:
      case URL:
        type = this.type.toUpperCase();
        break;
      case EMAIL:
        type = "Email";
        break;
      default:
        throw new Error("Unsupported GeneralName type");
    }
    let value = this.value;
    if (this.type === REGISTERED_ID) {
      value = OidSerializer.toString(value);
    }
    return new TextObject(type, void 0, value);
  }
};
var GeneralNames3 = class extends AsnData {
  static {
    __name(this, "GeneralNames");
  }
  constructor(params, options) {
    let names2;
    let stored = selfProducedParseOptions;
    if (params instanceof GeneralNames) {
      names2 = params;
    } else if (Array.isArray(params)) {
      const items = [];
      for (const name of params) {
        if (name instanceof GeneralName) {
          items.push(name);
        } else {
          const asnName = AsnConvert.parse(new GeneralName3(name.type, name.value).rawData, GeneralName, selfProducedParseOptions);
          items.push(asnName);
        }
      }
      names2 = new GeneralNames(items);
    } else if (BufferSourceConverter.isBufferSource(params)) {
      names2 = AsnConvert.parse(params, GeneralNames, options);
      stored = options !== null && options !== void 0 ? options : {};
    } else {
      throw new Error("Cannot initialize GeneralNames. Incorrect incoming arguments");
    }
    super(names2, stored);
  }
  onInit(asn) {
    const items = [];
    for (const asnName of asn) {
      let name = null;
      try {
        name = new GeneralName3(asnName, this.parseOptions);
      } catch {
        continue;
      }
      items.push(name);
    }
    this.items = items;
  }
  toJSON() {
    return this.items.map((o) => o.toJSON());
  }
  toTextObject() {
    const res = super.toTextObjectEmpty();
    for (const name of this.items) {
      const nameObj = name.toTextObject();
      let field = res[nameObj[TextObject.NAME]];
      if (!Array.isArray(field)) {
        field = [];
        res[nameObj[TextObject.NAME]] = field;
      }
      field.push(nameObj);
    }
    return res;
  }
};
GeneralNames3.NAME = "GeneralNames";
var rPaddingTag = "-{5}";
var rEolChars = "\\n";
var rNameTag = `[^${rEolChars}]+`;
var rBeginTag = `${rPaddingTag}BEGIN (${rNameTag}(?=${rPaddingTag}))${rPaddingTag}`;
var rEndTag = `${rPaddingTag}END \\1${rPaddingTag}`;
var rEolGroup = "\\n";
var rHeaderKey = `[^:${rEolChars}]+`;
var rHeaderValue = `(?:[^${rEolChars}]+${rEolGroup}(?: +[^${rEolChars}]+${rEolGroup})*)`;
var rBase64Chars = "[a-zA-Z0-9=+/]+";
var rBase64 = `(?:${rBase64Chars}${rEolGroup})+`;
var rPem = `${rBeginTag}${rEolGroup}(?:((?:${rHeaderKey}: ${rHeaderValue})+))?${rEolGroup}?(${rBase64})${rEndTag}`;
var rEolPattern = new RegExp(`[${rEolChars}]+`, "g");
var PemConverter = class {
  static {
    __name(this, "PemConverter");
  }
  static isPem(data) {
    return typeof data === "string" && new RegExp(rPem, "g").test(data.replace(/\r/g, ""));
  }
  static decodeWithHeaders(pem2) {
    pem2 = pem2.replace(/\r/g, "");
    const pattern = new RegExp(rPem, "g");
    const res = [];
    let matches = null;
    while (matches = pattern.exec(pem2)) {
      const base642 = matches[3].replace(rEolPattern, "");
      const pemStruct = {
        type: matches[1],
        headers: [],
        rawData: Convert.FromBase64(base642)
      };
      const headersString = matches[2];
      if (headersString) {
        const headers = headersString.split(new RegExp(rEolGroup, "g"));
        let lastHeader = null;
        for (const header of headers) {
          const [key, value] = header.split(/:(.*)/);
          if (value === void 0) {
            if (!lastHeader) {
              throw new Error("Cannot parse PEM string. Incorrect header value");
            }
            lastHeader.value += key.trim();
          } else {
            if (lastHeader) {
              pemStruct.headers.push(lastHeader);
            }
            lastHeader = {
              key,
              value: value.trim()
            };
          }
        }
        if (lastHeader) {
          pemStruct.headers.push(lastHeader);
        }
      }
      res.push(pemStruct);
    }
    return res;
  }
  static decode(pem2) {
    const blocks = this.decodeWithHeaders(pem2);
    return blocks.map((o) => o.rawData);
  }
  static decodeFirst(pem2) {
    const items = this.decode(pem2);
    if (!items.length) {
      throw new RangeError("PEM string doesn't contain any objects");
    }
    return items[0];
  }
  static encode(rawData, tag) {
    if (Array.isArray(rawData)) {
      const raws = new Array();
      if (tag) {
        rawData.forEach((element) => {
          if (!BufferSourceConverter.isBufferSource(element)) {
            throw new TypeError("Cannot encode array of BufferSource in PEM format. Not all items of the array are BufferSource");
          }
          raws.push(this.encodeStruct({
            type: tag,
            rawData: BufferSourceConverter.toArrayBuffer(element)
          }));
        });
      } else {
        rawData.forEach((element) => {
          if (!("type" in element)) {
            throw new TypeError("Cannot encode array of PemStruct in PEM format. Not all items of the array are PemStrut");
          }
          raws.push(this.encodeStruct(element));
        });
      }
      return raws.join("\n");
    } else {
      if (!tag) {
        throw new Error("Required argument 'tag' is missed");
      }
      return this.encodeStruct({
        type: tag,
        rawData: BufferSourceConverter.toArrayBuffer(rawData)
      });
    }
  }
  static encodeStruct(pem2) {
    var _a3;
    const upperCaseType = pem2.type.toLocaleUpperCase();
    const res = [];
    res.push(`-----BEGIN ${upperCaseType}-----`);
    if ((_a3 = pem2.headers) === null || _a3 === void 0 ? void 0 : _a3.length) {
      for (const header of pem2.headers) {
        res.push(`${header.key}: ${header.value}`);
      }
      res.push("");
    }
    const base642 = Convert.ToBase64(pem2.rawData);
    for (let i = 0; i < base642.length; i += 64) {
      res.push(base642.substring(i, i + 64));
    }
    res.push(`-----END ${upperCaseType}-----`);
    return res.join("\n");
  }
};
PemConverter.CertificateTag = "CERTIFICATE";
PemConverter.CrlTag = "CRL";
PemConverter.CertificateRequestTag = "CERTIFICATE REQUEST";
PemConverter.PublicKeyTag = "PUBLIC KEY";
PemConverter.PrivateKeyTag = "PRIVATE KEY";
var PemData = class _PemData extends AsnData {
  static {
    __name(this, "PemData");
  }
  static isAsnEncoded(data) {
    return BufferSourceConverter.isBufferSource(data) || typeof data === "string";
  }
  static toArrayBuffer(raw) {
    if (typeof raw === "string") {
      if (PemConverter.isPem(raw)) {
        return PemConverter.decode(raw)[0];
      } else if (Convert.isHex(raw)) {
        return Convert.FromHex(raw);
      } else if (Convert.isBase64(raw)) {
        return Convert.FromBase64(raw);
      } else if (Convert.isBase64Url(raw)) {
        return Convert.FromBase64Url(raw);
      } else {
        throw new TypeError("Unsupported format of 'raw' argument. Must be one of DER, PEM, HEX, Base64, or Base4Url");
      }
    } else {
      const buffer = BufferSourceConverter.toUint8Array(raw);
      if (buffer.length > 0 && buffer[0] === 48) {
        return BufferSourceConverter.toArrayBuffer(raw);
      }
      const stringRaw = Convert.ToBinary(raw);
      if (PemConverter.isPem(stringRaw)) {
        return PemConverter.decode(stringRaw)[0];
      } else if (Convert.isHex(stringRaw)) {
        return Convert.FromHex(stringRaw);
      } else if (Convert.isBase64(stringRaw)) {
        return Convert.FromBase64(stringRaw);
      } else if (Convert.isBase64Url(stringRaw)) {
        return Convert.FromBase64Url(stringRaw);
      }
      throw new TypeError("Unsupported format of 'raw' argument. Must be one of DER, PEM, HEX, Base64, or Base4Url");
    }
  }
  constructor(...args) {
    if (_PemData.isAsnEncoded(args[0])) {
      super(_PemData.toArrayBuffer(args[0]), args[1], args[2]);
    } else {
      super(args[0], args[1]);
    }
  }
  toString(format4 = "pem") {
    switch (format4) {
      case "pem":
        return PemConverter.encode(this.rawData, this.tag);
      default:
        return super.toString(format4);
    }
  }
};
var PublicKey = class _PublicKey extends PemData {
  static {
    __name(this, "PublicKey");
  }
  static async create(data, crypto2 = cryptoProvider.get()) {
    if (data instanceof _PublicKey) {
      return data;
    } else if (CryptoProvider.isCryptoKey(data)) {
      if (data.type !== "public") {
        throw new TypeError("Public key is required");
      }
      const spki = await crypto2.subtle.exportKey("spki", data);
      return new _PublicKey(spki);
    } else if (data.publicKey) {
      return data.publicKey;
    } else if (BufferSourceConverter.isBufferSource(data)) {
      return new _PublicKey(data);
    } else {
      throw new TypeError("Unsupported PublicKeyType");
    }
  }
  constructor(param, options) {
    if (PemData.isAsnEncoded(param)) {
      super(param, SubjectPublicKeyInfo, options);
    } else {
      super(param, options);
    }
    this.tag = PemConverter.PublicKeyTag;
  }
  async export(arg1, arg2, arg3) {
    let crypto2;
    let keyUsages = [
      "verify"
    ];
    let algorithm = {
      hash: "SHA-256",
      ...this.algorithm
    };
    if (arg2) {
      algorithm = arg1;
      keyUsages = arg2;
      crypto2 = arg3;
    } else {
      crypto2 = arg1;
    }
    crypto2 !== null && crypto2 !== void 0 ? crypto2 : crypto2 = cryptoProvider.get();
    let raw = this.rawData;
    const asnSpki = AsnConvert.parse(this.rawData, SubjectPublicKeyInfo, this.parseOptions);
    if (asnSpki.algorithm.algorithm === id_RSASSA_PSS) {
      raw = convertSpkiToRsaPkcs1(asnSpki, raw);
    }
    return crypto2.subtle.importKey("spki", raw, algorithm, true, keyUsages);
  }
  onInit(asn) {
    const algProv = instance.resolve(diAlgorithmProvider);
    const algorithm = this.algorithm = algProv.toWebAlgorithm(asn.algorithm);
    switch (asn.algorithm.algorithm) {
      case id_rsaEncryption: {
        const rsaPublicKey = AsnConvert.parse(asn.subjectPublicKey, RSAPublicKey, this.parseOptions);
        const modulus = BufferSourceConverter.toUint8Array(rsaPublicKey.modulus);
        algorithm.publicExponent = BufferSourceConverter.toUint8Array(rsaPublicKey.publicExponent);
        algorithm.modulusLength = (!modulus[0] ? modulus.slice(1) : modulus).byteLength << 3;
        break;
      }
    }
  }
  async getThumbprint(arg1, arg2) {
    let crypto2;
    let algorithm = "SHA-1";
    if (arg1) {
      if (typeof arg1 === "object" && "subtle" in arg1) {
        crypto2 = arg1;
      } else {
        algorithm = arg1;
        crypto2 = arg2;
      }
    }
    crypto2 !== null && crypto2 !== void 0 ? crypto2 : crypto2 = cryptoProvider.get();
    return await crypto2.subtle.digest(algorithm, this.rawData);
  }
  async getKeyIdentifier(arg1, arg2) {
    let crypto2;
    let algorithm = "SHA-1";
    if (arg1) {
      if (typeof arg1 === "object" && "subtle" in arg1) {
        crypto2 = arg1;
      } else {
        algorithm = arg1;
        crypto2 = arg2;
      }
    }
    crypto2 !== null && crypto2 !== void 0 ? crypto2 : crypto2 = cryptoProvider.get();
    const asn = AsnConvert.parse(this.rawData, SubjectPublicKeyInfo, this.parseOptions);
    return await crypto2.subtle.digest(algorithm, asn.subjectPublicKey);
  }
  toTextObject() {
    const obj = this.toTextObjectEmpty();
    const asn = AsnConvert.parse(this.rawData, SubjectPublicKeyInfo, this.parseOptions);
    obj["Algorithm"] = TextConverter.serializeAlgorithm(asn.algorithm);
    switch (asn.algorithm.algorithm) {
      case id_ecPublicKey:
        obj["EC Point"] = asn.subjectPublicKey;
        break;
      case id_rsaEncryption:
      default:
        obj["Raw Data"] = asn.subjectPublicKey;
    }
    return obj;
  }
};
function convertSpkiToRsaPkcs1(asnSpki, raw) {
  asnSpki.algorithm = new AlgorithmIdentifier({
    algorithm: id_rsaEncryption,
    parameters: null
  });
  raw = AsnConvert.serialize(asnSpki);
  return raw;
}
__name(convertSpkiToRsaPkcs1, "convertSpkiToRsaPkcs1");
var AuthorityKeyIdentifierExtension = class _AuthorityKeyIdentifierExtension extends Extension2 {
  static {
    __name(this, "AuthorityKeyIdentifierExtension");
  }
  static async create(param, critical = false, crypto2 = cryptoProvider.get()) {
    if ("name" in param && "serialNumber" in param) {
      return new _AuthorityKeyIdentifierExtension(param, critical);
    }
    const key = await PublicKey.create(param, crypto2);
    const id = await key.getKeyIdentifier(crypto2);
    return new _AuthorityKeyIdentifierExtension(Convert.ToHex(id), critical);
  }
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
    } else if (typeof args[0] === "string") {
      const value = new AuthorityKeyIdentifier({
        keyIdentifier: new KeyIdentifier(Convert.FromHex(args[0]))
      });
      super(id_ce_authorityKeyIdentifier, args[1], AsnConvert.serialize(value));
    } else {
      const certId = args[0];
      const certIdName = certId.name instanceof GeneralNames3 ? AsnConvert.parse(certId.name.rawData, GeneralNames, selfProducedParseOptions) : certId.name;
      const value = new AuthorityKeyIdentifier({
        authorityCertIssuer: certIdName,
        authorityCertSerialNumber: Convert.FromHex(certId.serialNumber)
      });
      super(id_ce_authorityKeyIdentifier, args[1], AsnConvert.serialize(value));
    }
  }
  onInit(asn) {
    super.onInit(asn);
    const aki = AsnConvert.parse(asn.extnValue, AuthorityKeyIdentifier, this.parseOptions);
    if (aki.keyIdentifier) {
      this.keyId = Convert.ToHex(aki.keyIdentifier);
    }
    if (aki.authorityCertIssuer || aki.authorityCertSerialNumber) {
      this.certId = {
        name: aki.authorityCertIssuer || [],
        serialNumber: aki.authorityCertSerialNumber ? Convert.ToHex(aki.authorityCertSerialNumber) : ""
      };
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const asn = AsnConvert.parse(this.value, AuthorityKeyIdentifier, this.parseOptions);
    if (asn.authorityCertIssuer) {
      obj["Authority Issuer"] = new GeneralNames3(asn.authorityCertIssuer).toTextObject();
    }
    if (asn.authorityCertSerialNumber) {
      obj["Authority Serial Number"] = asn.authorityCertSerialNumber;
    }
    if (asn.keyIdentifier) {
      obj[""] = asn.keyIdentifier;
    }
    return obj;
  }
};
AuthorityKeyIdentifierExtension.NAME = "Authority Key Identifier";
var BasicConstraintsExtension = class extends Extension2 {
  static {
    __name(this, "BasicConstraintsExtension");
  }
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
      const value = AsnConvert.parse(this.value, BasicConstraints, this.parseOptions);
      this.ca = value.cA;
      this.pathLength = value.pathLenConstraint;
    } else {
      const value = new BasicConstraints({
        cA: args[0],
        pathLenConstraint: args[1]
      });
      super(id_ce_basicConstraints, args[2], AsnConvert.serialize(value));
      this.ca = args[0];
      this.pathLength = args[1];
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    if (this.ca) {
      obj["CA"] = this.ca;
    }
    if (this.pathLength !== void 0) {
      obj["Path Length"] = this.pathLength;
    }
    return obj;
  }
};
BasicConstraintsExtension.NAME = "Basic Constraints";
var ExtendedKeyUsage3;
(function(ExtendedKeyUsage4) {
  ExtendedKeyUsage4["serverAuth"] = "1.3.6.1.5.5.7.3.1";
  ExtendedKeyUsage4["clientAuth"] = "1.3.6.1.5.5.7.3.2";
  ExtendedKeyUsage4["codeSigning"] = "1.3.6.1.5.5.7.3.3";
  ExtendedKeyUsage4["emailProtection"] = "1.3.6.1.5.5.7.3.4";
  ExtendedKeyUsage4["timeStamping"] = "1.3.6.1.5.5.7.3.8";
  ExtendedKeyUsage4["ocspSigning"] = "1.3.6.1.5.5.7.3.9";
})(ExtendedKeyUsage3 || (ExtendedKeyUsage3 = {}));
var ExtendedKeyUsageExtension = class extends Extension2 {
  static {
    __name(this, "ExtendedKeyUsageExtension");
  }
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
      const value = AsnConvert.parse(this.value, ExtendedKeyUsage, this.parseOptions);
      this.usages = value.map((o) => o);
    } else {
      const value = new ExtendedKeyUsage(args[0]);
      super(id_ce_extKeyUsage, args[1], AsnConvert.serialize(value));
      this.usages = args[0];
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj[""] = this.usages.map((o) => OidSerializer.toString(o)).join(", ");
    return obj;
  }
};
ExtendedKeyUsageExtension.NAME = "Extended Key Usages";
var KeyUsageFlags2;
(function(KeyUsageFlags3) {
  KeyUsageFlags3[KeyUsageFlags3["digitalSignature"] = 1] = "digitalSignature";
  KeyUsageFlags3[KeyUsageFlags3["nonRepudiation"] = 2] = "nonRepudiation";
  KeyUsageFlags3[KeyUsageFlags3["keyEncipherment"] = 4] = "keyEncipherment";
  KeyUsageFlags3[KeyUsageFlags3["dataEncipherment"] = 8] = "dataEncipherment";
  KeyUsageFlags3[KeyUsageFlags3["keyAgreement"] = 16] = "keyAgreement";
  KeyUsageFlags3[KeyUsageFlags3["keyCertSign"] = 32] = "keyCertSign";
  KeyUsageFlags3[KeyUsageFlags3["cRLSign"] = 64] = "cRLSign";
  KeyUsageFlags3[KeyUsageFlags3["encipherOnly"] = 128] = "encipherOnly";
  KeyUsageFlags3[KeyUsageFlags3["decipherOnly"] = 256] = "decipherOnly";
})(KeyUsageFlags2 || (KeyUsageFlags2 = {}));
var KeyUsagesExtension = class extends Extension2 {
  static {
    __name(this, "KeyUsagesExtension");
  }
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
      const value = AsnConvert.parse(this.value, KeyUsage, this.parseOptions);
      this.usages = value.toNumber();
    } else {
      const value = new KeyUsage(args[0]);
      super(id_ce_keyUsage, args[1], AsnConvert.serialize(value));
      this.usages = args[0];
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const asn = AsnConvert.parse(this.value, KeyUsage, this.parseOptions);
    obj[""] = asn.toJSON().join(", ");
    return obj;
  }
};
KeyUsagesExtension.NAME = "Key Usages";
var SubjectKeyIdentifierExtension = class _SubjectKeyIdentifierExtension extends Extension2 {
  static {
    __name(this, "SubjectKeyIdentifierExtension");
  }
  static async create(publicKey, critical = false, crypto2 = cryptoProvider.get()) {
    const key = await PublicKey.create(publicKey, crypto2);
    const id = await key.getKeyIdentifier(crypto2);
    return new _SubjectKeyIdentifierExtension(Convert.ToHex(id), critical);
  }
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
      const value = AsnConvert.parse(this.value, SubjectKeyIdentifier, this.parseOptions);
      this.keyId = Convert.ToHex(value);
    } else {
      const identifier = typeof args[0] === "string" ? Convert.FromHex(args[0]) : args[0];
      const value = new SubjectKeyIdentifier(identifier);
      super(id_ce_subjectKeyIdentifier, args[1], AsnConvert.serialize(value));
      this.keyId = Convert.ToHex(identifier);
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const asn = AsnConvert.parse(this.value, SubjectKeyIdentifier, this.parseOptions);
    obj[""] = asn;
    return obj;
  }
};
SubjectKeyIdentifierExtension.NAME = "Subject Key Identifier";
var SubjectAlternativeNameExtension = class extends Extension2 {
  static {
    __name(this, "SubjectAlternativeNameExtension");
  }
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
    } else {
      super(id_ce_subjectAltName, args[1], new GeneralNames3(args[0] || []).rawData);
    }
  }
  onInit(asn) {
    super.onInit(asn);
    const value = AsnConvert.parse(asn.extnValue, SubjectAlternativeName, this.parseOptions);
    this.names = new GeneralNames3(value);
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const namesObj = this.names.toTextObject();
    for (const key in namesObj) {
      obj[key] = namesObj[key];
    }
    return obj;
  }
};
SubjectAlternativeNameExtension.NAME = "Subject Alternative Name";
var ExtensionFactory = class {
  static {
    __name(this, "ExtensionFactory");
  }
  static register(id, type) {
    this.items.set(id, type);
  }
  static create(data, options) {
    const extension = new Extension2(data, options);
    const Type = this.items.get(extension.type);
    if (Type) {
      return new Type(data, options);
    }
    return extension;
  }
};
ExtensionFactory.items = /* @__PURE__ */ new Map();
var CertificatePolicyExtension = class extends Extension2 {
  static {
    __name(this, "CertificatePolicyExtension");
  }
  constructor(...args) {
    var _a3;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
      const asnPolicies = AsnConvert.parse(this.value, CertificatePolicies, this.parseOptions);
      this.policies = asnPolicies.map((o) => o.policyIdentifier);
    } else {
      const policies = args[0];
      const critical = (_a3 = args[1]) !== null && _a3 !== void 0 ? _a3 : false;
      const value = new CertificatePolicies(policies.map((o) => new PolicyInformation({
        policyIdentifier: o
      })));
      super(id_ce_certificatePolicies, critical, AsnConvert.serialize(value));
      this.policies = policies;
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj["Policy"] = this.policies.map((o) => new TextObject("", {}, OidSerializer.toString(o)));
    return obj;
  }
};
CertificatePolicyExtension.NAME = "Certificate Policies";
ExtensionFactory.register(id_ce_certificatePolicies, CertificatePolicyExtension);
var CRLDistributionPointsExtension = class extends Extension2 {
  static {
    __name(this, "CRLDistributionPointsExtension");
  }
  constructor(...args) {
    var _a3;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
    } else if (Array.isArray(args[0]) && typeof args[0][0] === "string") {
      const urls = args[0];
      const dps = urls.map((url) => {
        return new DistributionPoint({
          distributionPoint: new DistributionPointName({
            fullName: [
              new GeneralName({
                uniformResourceIdentifier: url
              })
            ]
          })
        });
      });
      const value = new CRLDistributionPoints(dps);
      super(id_ce_cRLDistributionPoints, args[1], AsnConvert.serialize(value));
    } else {
      const value = new CRLDistributionPoints(args[0]);
      super(id_ce_cRLDistributionPoints, args[1], AsnConvert.serialize(value));
    }
    (_a3 = this.distributionPoints) !== null && _a3 !== void 0 ? _a3 : this.distributionPoints = [];
  }
  onInit(asn) {
    super.onInit(asn);
    const crlExt = AsnConvert.parse(asn.extnValue, CRLDistributionPoints, this.parseOptions);
    this.distributionPoints = crlExt;
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj["Distribution Point"] = this.distributionPoints.map((dp) => {
      var _a3;
      const dpObj = new TextObject("");
      if ((_a3 = dp.distributionPoint) === null || _a3 === void 0 ? void 0 : _a3.fullName) {
        dpObj[""] = dp.distributionPoint.fullName.map((name) => new GeneralName3(name).toString()).join(", ");
      }
      if (dp.reasons) {
        dpObj["Reasons"] = dp.reasons.toString();
      }
      if (dp.cRLIssuer) {
        dpObj["CRL Issuer"] = dp.cRLIssuer.map((issuer) => issuer.toString()).join(", ");
      }
      return dpObj;
    });
    return obj;
  }
};
CRLDistributionPointsExtension.NAME = "CRL Distribution Points";
var AuthorityInfoAccessExtension = class extends Extension2 {
  static {
    __name(this, "AuthorityInfoAccessExtension");
  }
  constructor(...args) {
    var _a3, _b2, _c2, _d;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
    } else if (args[0] instanceof AuthorityInfoAccessSyntax) {
      const value = new AuthorityInfoAccessSyntax(args[0]);
      super(id_pe_authorityInfoAccess, args[1], AsnConvert.serialize(value));
    } else {
      const params = args[0];
      const value = new AuthorityInfoAccessSyntax();
      addAccessDescriptions(value, params, id_ad_ocsp, "ocsp");
      addAccessDescriptions(value, params, id_ad_caIssuers, "caIssuers");
      addAccessDescriptions(value, params, id_ad_timeStamping, "timeStamping");
      addAccessDescriptions(value, params, id_ad_caRepository, "caRepository");
      super(id_pe_authorityInfoAccess, args[1], AsnConvert.serialize(value));
    }
    (_a3 = this.ocsp) !== null && _a3 !== void 0 ? _a3 : this.ocsp = [];
    (_b2 = this.caIssuers) !== null && _b2 !== void 0 ? _b2 : this.caIssuers = [];
    (_c2 = this.timeStamping) !== null && _c2 !== void 0 ? _c2 : this.timeStamping = [];
    (_d = this.caRepository) !== null && _d !== void 0 ? _d : this.caRepository = [];
  }
  onInit(asn) {
    super.onInit(asn);
    this.ocsp = [];
    this.caIssuers = [];
    this.timeStamping = [];
    this.caRepository = [];
    const aia = AsnConvert.parse(asn.extnValue, AuthorityInfoAccessSyntax, this.parseOptions);
    aia.forEach((accessDescription) => {
      switch (accessDescription.accessMethod) {
        case id_ad_ocsp:
          this.ocsp.push(new GeneralName3(accessDescription.accessLocation));
          break;
        case id_ad_caIssuers:
          this.caIssuers.push(new GeneralName3(accessDescription.accessLocation));
          break;
        case id_ad_timeStamping:
          this.timeStamping.push(new GeneralName3(accessDescription.accessLocation));
          break;
        case id_ad_caRepository:
          this.caRepository.push(new GeneralName3(accessDescription.accessLocation));
          break;
      }
    });
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    if (this.ocsp.length) {
      addUrlsToObject(obj, "OCSP", this.ocsp);
    }
    if (this.caIssuers.length) {
      addUrlsToObject(obj, "CA Issuers", this.caIssuers);
    }
    if (this.timeStamping.length) {
      addUrlsToObject(obj, "Time Stamping", this.timeStamping);
    }
    if (this.caRepository.length) {
      addUrlsToObject(obj, "CA Repository", this.caRepository);
    }
    return obj;
  }
};
AuthorityInfoAccessExtension.NAME = "Authority Info Access";
function addUrlsToObject(obj, key, urls) {
  if (urls.length === 1) {
    obj[key] = urls[0].toTextObject();
  } else {
    const names2 = new TextObject("");
    urls.forEach((name, index) => {
      const nameObj = name.toTextObject();
      const indexedKey = `${nameObj[TextObject.NAME]} ${index + 1}`;
      let field = names2[indexedKey];
      if (!Array.isArray(field)) {
        field = [];
        names2[indexedKey] = field;
      }
      field.push(nameObj);
    });
    obj[key] = names2;
  }
}
__name(addUrlsToObject, "addUrlsToObject");
function addAccessDescriptions(value, params, method, key) {
  const items = params[key];
  if (items) {
    const array = Array.isArray(items) ? items : [
      items
    ];
    array.forEach((url) => {
      if (typeof url === "string") {
        url = new GeneralName3("url", url);
      }
      value.push(new AccessDescription({
        accessMethod: method,
        accessLocation: AsnConvert.parse(url.rawData, GeneralName, selfProducedParseOptions)
      }));
    });
  }
}
__name(addAccessDescriptions, "addAccessDescriptions");
var IssuerAlternativeNameExtension = class extends Extension2 {
  static {
    __name(this, "IssuerAlternativeNameExtension");
  }
  constructor(...args) {
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
    } else {
      super(id_ce_issuerAltName, args[1], new GeneralNames3(args[0] || []).rawData);
    }
  }
  onInit(asn) {
    super.onInit(asn);
    const value = AsnConvert.parse(asn.extnValue, GeneralNames, this.parseOptions);
    this.names = new GeneralNames3(value);
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const namesObj = this.names.toTextObject();
    for (const key in namesObj) {
      obj[key] = namesObj[key];
    }
    return obj;
  }
};
IssuerAlternativeNameExtension.NAME = "Issuer Alternative Name";
var Attribute3 = class _Attribute extends AsnData {
  static {
    __name(this, "Attribute");
  }
  constructor(...args) {
    let raw;
    let options;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      raw = BufferSourceConverter.toArrayBuffer(args[0]);
      options = args[1];
    } else {
      const type = args[0];
      const values = Array.isArray(args[1]) ? args[1].map((o) => BufferSourceConverter.toArrayBuffer(o)) : [];
      raw = AsnConvert.serialize(new Attribute({
        type,
        values
      }));
      options = selfProducedParseOptions;
    }
    super(raw, Attribute, options);
  }
  onInit(asn) {
    this.type = asn.type;
    this.values = asn.values;
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj["Value"] = this.values.map((o) => new TextObject("", {
      "": o
    }));
    return obj;
  }
  toTextObjectWithoutValue() {
    const obj = this.toTextObjectEmpty();
    if (obj[TextObject.NAME] === _Attribute.NAME) {
      obj[TextObject.NAME] = OidSerializer.toString(this.type);
    }
    return obj;
  }
};
Attribute3.NAME = "Attribute";
var ChallengePasswordAttribute = class extends Attribute3 {
  static {
    __name(this, "ChallengePasswordAttribute");
  }
  constructor(...args) {
    var _a3;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
    } else {
      const value = new ChallengePassword({
        printableString: args[0]
      });
      super(id_pkcs9_at_challengePassword, [
        AsnConvert.serialize(value)
      ]);
    }
    (_a3 = this.password) !== null && _a3 !== void 0 ? _a3 : this.password = "";
  }
  onInit(asn) {
    super.onInit(asn);
    if (this.values[0]) {
      const value = AsnConvert.parse(this.values[0], ChallengePassword, this.parseOptions);
      this.password = value.toString();
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    obj[TextObject.VALUE] = this.password;
    return obj;
  }
};
ChallengePasswordAttribute.NAME = "Challenge Password";
var ExtensionsAttribute = class extends Attribute3 {
  static {
    __name(this, "ExtensionsAttribute");
  }
  constructor(...args) {
    var _a3;
    if (BufferSourceConverter.isBufferSource(args[0])) {
      super(args[0], args[1]);
    } else {
      const extensions = args[0];
      const value = new Extensions();
      for (const extension of extensions) {
        value.push(AsnConvert.parse(extension.rawData, Extension, selfProducedParseOptions));
      }
      super(id_pkcs9_at_extensionRequest, [
        AsnConvert.serialize(value)
      ]);
    }
    (_a3 = this.items) !== null && _a3 !== void 0 ? _a3 : this.items = [];
  }
  onInit(asn) {
    super.onInit(asn);
    if (this.values[0]) {
      const value = AsnConvert.parse(this.values[0], Extensions, this.parseOptions);
      this.items = value.map((o) => ExtensionFactory.create(AsnConvert.serialize(o), this.parseOptions));
    }
  }
  toTextObject() {
    const obj = this.toTextObjectWithoutValue();
    const extensions = this.items.map((o) => o.toTextObject());
    for (const extension of extensions) {
      obj[extension[TextObject.NAME]] = extension;
    }
    return obj;
  }
};
ExtensionsAttribute.NAME = "Extensions";
var AttributeFactory = class {
  static {
    __name(this, "AttributeFactory");
  }
  static register(id, type) {
    this.items.set(id, type);
  }
  static create(data, options) {
    const attribute = new Attribute3(data, options);
    const Type = this.items.get(attribute.type);
    if (Type) {
      return new Type(data, options);
    }
    return attribute;
  }
};
AttributeFactory.items = /* @__PURE__ */ new Map();
var diAsnSignatureFormatter = "crypto.signatureFormatter";
var AsnDefaultSignatureFormatter = class {
  static {
    __name(this, "AsnDefaultSignatureFormatter");
  }
  toAsnSignature(algorithm, signature) {
    return BufferSourceConverter.toArrayBuffer(signature);
  }
  toWebSignature(algorithm, signature) {
    return BufferSourceConverter.toArrayBuffer(signature);
  }
};
var RsaAlgorithm_1;
var RsaAlgorithm = RsaAlgorithm_1 = class RsaAlgorithm2 {
  static {
    __name(this, "RsaAlgorithm");
  }
  static createPssParams(hash, saltLength) {
    const hashAlgorithm = RsaAlgorithm_1.getHashAlgorithm(hash);
    if (!hashAlgorithm) {
      return null;
    }
    return new RsaSaPssParams({
      hashAlgorithm,
      maskGenAlgorithm: new AlgorithmIdentifier({
        algorithm: id_mgf1,
        parameters: AsnConvert.serialize(hashAlgorithm)
      }),
      saltLength
    });
  }
  static getHashAlgorithm(alg) {
    const algProv = instance.resolve(diAlgorithmProvider);
    if (typeof alg === "string") {
      return algProv.toAsnAlgorithm({
        name: alg
      });
    }
    if (typeof alg === "object" && alg && "name" in alg) {
      return algProv.toAsnAlgorithm(alg);
    }
    return null;
  }
  toAsnAlgorithm(alg) {
    switch (alg.name.toLowerCase()) {
      case "rsassa-pkcs1-v1_5":
        if ("hash" in alg) {
          let hash;
          if (typeof alg.hash === "string") {
            hash = alg.hash;
          } else if (alg.hash && typeof alg.hash === "object" && "name" in alg.hash && typeof alg.hash.name === "string") {
            hash = alg.hash.name.toUpperCase();
          } else {
            throw new Error("Cannot get hash algorithm name");
          }
          switch (hash.toLowerCase()) {
            case "sha-1":
              return new AlgorithmIdentifier({
                algorithm: id_sha1WithRSAEncryption,
                parameters: null
              });
            case "sha-256":
              return new AlgorithmIdentifier({
                algorithm: id_sha256WithRSAEncryption,
                parameters: null
              });
            case "sha-384":
              return new AlgorithmIdentifier({
                algorithm: id_sha384WithRSAEncryption,
                parameters: null
              });
            case "sha-512":
              return new AlgorithmIdentifier({
                algorithm: id_sha512WithRSAEncryption,
                parameters: null
              });
          }
        } else {
          return new AlgorithmIdentifier({
            algorithm: id_rsaEncryption,
            parameters: null
          });
        }
        break;
      case "rsa-pss":
        if ("hash" in alg) {
          if (!("saltLength" in alg && typeof alg.saltLength === "number")) {
            throw new Error("Cannot get 'saltLength' from 'alg' argument");
          }
          const pssParams = RsaAlgorithm_1.createPssParams(alg.hash, alg.saltLength);
          if (!pssParams) {
            throw new Error("Cannot create PSS parameters");
          }
          return new AlgorithmIdentifier({
            algorithm: id_RSASSA_PSS,
            parameters: AsnConvert.serialize(pssParams)
          });
        } else {
          return new AlgorithmIdentifier({
            algorithm: id_RSASSA_PSS,
            parameters: null
          });
        }
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case id_rsaEncryption:
        return {
          name: "RSASSA-PKCS1-v1_5"
        };
      case id_sha1WithRSAEncryption:
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-1"
          }
        };
      case id_sha256WithRSAEncryption:
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-256"
          }
        };
      case id_sha384WithRSAEncryption:
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-384"
          }
        };
      case id_sha512WithRSAEncryption:
        return {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-512"
          }
        };
      case id_RSASSA_PSS:
        if (alg.parameters) {
          const pssParams = AsnConvert.parse(alg.parameters, RsaSaPssParams);
          const algProv = instance.resolve(diAlgorithmProvider);
          const hashAlg = algProv.toWebAlgorithm(pssParams.hashAlgorithm);
          return {
            name: "RSA-PSS",
            hash: hashAlg,
            saltLength: pssParams.saltLength
          };
        } else {
          return {
            name: "RSA-PSS"
          };
        }
    }
    return null;
  }
};
RsaAlgorithm = RsaAlgorithm_1 = __decorate([
  injectable_default()
], RsaAlgorithm);
instance.registerSingleton(diAlgorithm, RsaAlgorithm);
var ShaAlgorithm = class ShaAlgorithm2 {
  static {
    __name(this, "ShaAlgorithm");
  }
  toAsnAlgorithm(alg) {
    switch (alg.name.toLowerCase()) {
      case "sha-1":
        return new AlgorithmIdentifier({
          algorithm: id_sha1
        });
      case "sha-256":
        return new AlgorithmIdentifier({
          algorithm: id_sha256
        });
      case "sha-384":
        return new AlgorithmIdentifier({
          algorithm: id_sha384
        });
      case "sha-512":
        return new AlgorithmIdentifier({
          algorithm: id_sha512
        });
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case id_sha1:
        return {
          name: "SHA-1"
        };
      case id_sha256:
        return {
          name: "SHA-256"
        };
      case id_sha384:
        return {
          name: "SHA-384"
        };
      case id_sha512:
        return {
          name: "SHA-512"
        };
    }
    return null;
  }
};
ShaAlgorithm = __decorate([
  injectable_default()
], ShaAlgorithm);
instance.registerSingleton(diAlgorithm, ShaAlgorithm);
var AsnEcSignatureFormatter = class _AsnEcSignatureFormatter {
  static {
    __name(this, "AsnEcSignatureFormatter");
  }
  addPadding(pointSize, data) {
    const bytes = BufferSourceConverter.toUint8Array(data);
    const res = new Uint8Array(pointSize);
    res.set(bytes, pointSize - bytes.length);
    return res.buffer;
  }
  removePadding(data, positive = false) {
    let bytes = BufferSourceConverter.toUint8Array(data);
    for (let i = 0; i < bytes.length; i++) {
      if (!bytes[i]) {
        continue;
      }
      bytes = bytes.slice(i);
      break;
    }
    if (positive && bytes[0] > 127) {
      const result = new Uint8Array(bytes.length + 1);
      result.set(bytes, 1);
      return result.buffer;
    }
    return bytes.buffer;
  }
  toAsnSignature(algorithm, signature) {
    if (algorithm.name === "ECDSA") {
      const namedCurve = algorithm.namedCurve;
      const pointSize = _AsnEcSignatureFormatter.namedCurveSize.get(namedCurve) || _AsnEcSignatureFormatter.defaultNamedCurveSize;
      const ecSignature = new ECDSASigValue();
      const uint8Signature = BufferSourceConverter.toUint8Array(signature);
      ecSignature.r = this.removePadding(uint8Signature.slice(0, pointSize), true);
      ecSignature.s = this.removePadding(uint8Signature.slice(pointSize, pointSize + pointSize), true);
      return AsnConvert.serialize(ecSignature);
    }
    return null;
  }
  toWebSignature(algorithm, signature) {
    if (algorithm.name === "ECDSA") {
      const ecSigValue = AsnConvert.parse(signature, ECDSASigValue);
      const namedCurve = algorithm.namedCurve;
      const pointSize = _AsnEcSignatureFormatter.namedCurveSize.get(namedCurve) || _AsnEcSignatureFormatter.defaultNamedCurveSize;
      const r = this.addPadding(pointSize, this.removePadding(ecSigValue.r));
      const s = this.addPadding(pointSize, this.removePadding(ecSigValue.s));
      return combine(r, s);
    }
    return null;
  }
};
AsnEcSignatureFormatter.namedCurveSize = /* @__PURE__ */ new Map();
AsnEcSignatureFormatter.defaultNamedCurveSize = 32;
var idX25519 = "1.3.101.110";
var idX448 = "1.3.101.111";
var idEd25519 = "1.3.101.112";
var idEd448 = "1.3.101.113";
var EdAlgorithm = class EdAlgorithm2 {
  static {
    __name(this, "EdAlgorithm");
  }
  toAsnAlgorithm(alg) {
    let algorithm = null;
    switch (alg.name.toLowerCase()) {
      case "ed25519":
        algorithm = idEd25519;
        break;
      case "x25519":
        algorithm = idX25519;
        break;
      case "eddsa":
        switch (alg.namedCurve.toLowerCase()) {
          case "ed25519":
            algorithm = idEd25519;
            break;
          case "ed448":
            algorithm = idEd448;
            break;
        }
        break;
      case "ecdh-es":
        switch (alg.namedCurve.toLowerCase()) {
          case "x25519":
            algorithm = idX25519;
            break;
          case "x448":
            algorithm = idX448;
            break;
        }
    }
    if (algorithm) {
      return new AlgorithmIdentifier({
        algorithm
      });
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case idEd25519:
        return {
          name: "Ed25519"
        };
      case idEd448:
        return {
          name: "EdDSA",
          namedCurve: "Ed448"
        };
      case idX25519:
        return {
          name: "X25519"
        };
      case idX448:
        return {
          name: "ECDH-ES",
          namedCurve: "X448"
        };
    }
    return null;
  }
};
EdAlgorithm = __decorate([
  injectable_default()
], EdAlgorithm);
instance.registerSingleton(diAlgorithm, EdAlgorithm);
var MlDsaAlgorithm = class MlDsaAlgorithm2 {
  static {
    __name(this, "MlDsaAlgorithm");
  }
  toAsnAlgorithm(alg) {
    let algorithm = null;
    switch (alg.name.toLowerCase()) {
      case "ml-dsa-44":
        algorithm = id_ml_dsa_44;
        break;
      case "ml-dsa-65":
        algorithm = id_ml_dsa_65;
        break;
      case "ml-dsa-87":
        algorithm = id_ml_dsa_87;
        break;
    }
    if (algorithm) {
      return new AlgorithmIdentifier({
        algorithm
      });
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case id_ml_dsa_44:
        return {
          name: "ML-DSA-44"
        };
      case id_ml_dsa_65:
        return {
          name: "ML-DSA-65"
        };
      case id_ml_dsa_87:
        return {
          name: "ML-DSA-87"
        };
    }
    return null;
  }
};
MlDsaAlgorithm = __decorate([
  injectable_default()
], MlDsaAlgorithm);
instance.registerSingleton(diAlgorithm, MlDsaAlgorithm);
var SlhDsaAlgorithm = class SlhDsaAlgorithm2 {
  static {
    __name(this, "SlhDsaAlgorithm");
  }
  toAsnAlgorithm(alg) {
    let algorithm = null;
    switch (alg.name.toLowerCase()) {
      case "slh-dsa-sha2-128s":
        algorithm = id_slh_dsa_sha2_128s;
        break;
      case "slh-dsa-sha2-128f":
        algorithm = id_slh_dsa_sha2_128f;
        break;
      case "slh-dsa-sha2-192s":
        algorithm = id_slh_dsa_sha2_192s;
        break;
      case "slh-dsa-sha2-192f":
        algorithm = id_slh_dsa_sha2_192f;
        break;
      case "slh-dsa-sha2-256s":
        algorithm = id_slh_dsa_sha2_256s;
        break;
      case "slh-dsa-sha2-256f":
        algorithm = id_slh_dsa_sha2_256f;
        break;
      case "slh-dsa-shake-128s":
        algorithm = id_slh_dsa_shake_128s;
        break;
      case "slh-dsa-shake-128f":
        algorithm = id_slh_dsa_shake_128f;
        break;
      case "slh-dsa-shake-192s":
        algorithm = id_slh_dsa_shake_192s;
        break;
      case "slh-dsa-shake-192f":
        algorithm = id_slh_dsa_shake_192f;
        break;
      case "slh-dsa-shake-256s":
        algorithm = id_slh_dsa_shake_256s;
        break;
      case "slh-dsa-shake-256f":
        algorithm = id_slh_dsa_shake_256f;
        break;
    }
    if (algorithm) {
      return new AlgorithmIdentifier({
        algorithm
      });
    }
    return null;
  }
  toWebAlgorithm(alg) {
    switch (alg.algorithm) {
      case id_slh_dsa_sha2_128s:
        return {
          name: "SLH-DSA-SHA2-128s"
        };
      case id_slh_dsa_sha2_128f:
        return {
          name: "SLH-DSA-SHA2-128f"
        };
      case id_slh_dsa_sha2_192s:
        return {
          name: "SLH-DSA-SHA2-192s"
        };
      case id_slh_dsa_sha2_192f:
        return {
          name: "SLH-DSA-SHA2-192f"
        };
      case id_slh_dsa_sha2_256s:
        return {
          name: "SLH-DSA-SHA2-256s"
        };
      case id_slh_dsa_sha2_256f:
        return {
          name: "SLH-DSA-SHA2-256f"
        };
      case id_slh_dsa_shake_128s:
        return {
          name: "SLH-DSA-SHAKE-128s"
        };
      case id_slh_dsa_shake_128f:
        return {
          name: "SLH-DSA-SHAKE-128f"
        };
      case id_slh_dsa_shake_192s:
        return {
          name: "SLH-DSA-SHAKE-192s"
        };
      case id_slh_dsa_shake_192f:
        return {
          name: "SLH-DSA-SHAKE-192f"
        };
      case id_slh_dsa_shake_256s:
        return {
          name: "SLH-DSA-SHAKE-256s"
        };
      case id_slh_dsa_shake_256f:
        return {
          name: "SLH-DSA-SHAKE-256f"
        };
    }
    return null;
  }
};
SlhDsaAlgorithm = __decorate([
  injectable_default()
], SlhDsaAlgorithm);
instance.registerSingleton(diAlgorithm, SlhDsaAlgorithm);
var _Pkcs10CertificateRequest_tbs;
var _Pkcs10CertificateRequest_subjectName;
var _Pkcs10CertificateRequest_subject;
var _Pkcs10CertificateRequest_signatureAlgorithm;
var _Pkcs10CertificateRequest_signature;
var _Pkcs10CertificateRequest_publicKey;
var _Pkcs10CertificateRequest_attributes;
var _Pkcs10CertificateRequest_extensions;
var Pkcs10CertificateRequest = class extends PemData {
  static {
    __name(this, "Pkcs10CertificateRequest");
  }
  get subjectName() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_subjectName, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_subjectName, new Name3(this.asn.certificationRequestInfo.subject), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_subjectName, "f");
  }
  get subject() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_subject, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_subject, this.subjectName.toString(), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_subject, "f");
  }
  get signatureAlgorithm() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_signatureAlgorithm, "f")) {
      const algProv = instance.resolve(diAlgorithmProvider);
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_signatureAlgorithm, algProv.toWebAlgorithm(this.asn.signatureAlgorithm), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_signatureAlgorithm, "f");
  }
  get signature() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_signature, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_signature, this.asn.signature, "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_signature, "f");
  }
  get publicKey() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_publicKey, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_publicKey, new PublicKey(this.asn.certificationRequestInfo.subjectPKInfo, this.parseOptions), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_publicKey, "f");
  }
  get attributes() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_attributes, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_attributes, this.asn.certificationRequestInfo.attributes.map((o) => AttributeFactory.create(AsnConvert.serialize(o), this.parseOptions)), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_attributes, "f");
  }
  get extensions() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_extensions, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_extensions, [], "f");
      const extensions = this.getAttribute(id_pkcs9_at_extensionRequest);
      if (extensions instanceof ExtensionsAttribute) {
        __classPrivateFieldSet(this, _Pkcs10CertificateRequest_extensions, extensions.items, "f");
      }
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_extensions, "f");
  }
  get tbs() {
    if (!__classPrivateFieldGet(this, _Pkcs10CertificateRequest_tbs, "f")) {
      __classPrivateFieldSet(this, _Pkcs10CertificateRequest_tbs, this.asn.certificationRequestInfoRaw || AsnConvert.serialize(this.asn.certificationRequestInfo), "f");
    }
    return __classPrivateFieldGet(this, _Pkcs10CertificateRequest_tbs, "f");
  }
  constructor(param, options) {
    const args = PemData.isAsnEncoded(param) ? [
      param,
      CertificationRequest,
      options
    ] : [
      param,
      options
    ];
    super(args[0], args[1], args[2]);
    _Pkcs10CertificateRequest_tbs.set(this, void 0);
    _Pkcs10CertificateRequest_subjectName.set(this, void 0);
    _Pkcs10CertificateRequest_subject.set(this, void 0);
    _Pkcs10CertificateRequest_signatureAlgorithm.set(this, void 0);
    _Pkcs10CertificateRequest_signature.set(this, void 0);
    _Pkcs10CertificateRequest_publicKey.set(this, void 0);
    _Pkcs10CertificateRequest_attributes.set(this, void 0);
    _Pkcs10CertificateRequest_extensions.set(this, void 0);
    this.tag = PemConverter.CertificateRequestTag;
  }
  onInit(_asn) {
  }
  getAttribute(type) {
    for (const attr of this.attributes) {
      if (attr.type === type) {
        return attr;
      }
    }
    return null;
  }
  getAttributes(type) {
    return this.attributes.filter((o) => o.type === type);
  }
  getExtension(type) {
    for (const ext of this.extensions) {
      if (ext.type === type) {
        return ext;
      }
    }
    return null;
  }
  getExtensions(type) {
    return this.extensions.filter((o) => o.type === type);
  }
  async verify(crypto2 = cryptoProvider.get()) {
    const algorithm = {
      ...this.publicKey.algorithm,
      ...this.signatureAlgorithm
    };
    const publicKey = await this.publicKey.export(algorithm, [
      "verify"
    ], crypto2);
    const signatureFormatters = instance.resolveAll(diAsnSignatureFormatter).reverse();
    let signature = null;
    for (const signatureFormatter of signatureFormatters) {
      signature = signatureFormatter.toWebSignature(algorithm, this.signature);
      if (signature) {
        break;
      }
    }
    if (!signature) {
      throw Error("Cannot convert WebCrypto signature value to ASN.1 format");
    }
    const ok = await crypto2.subtle.verify(this.signatureAlgorithm, publicKey, signature, this.tbs);
    return ok;
  }
  toTextObject() {
    const obj = this.toTextObjectEmpty();
    const req = AsnConvert.parse(this.rawData, CertificationRequest, this.parseOptions);
    const tbs = req.certificationRequestInfo;
    const data = new TextObject("", {
      Version: `${Version[tbs.version]} (${tbs.version})`,
      Subject: this.subject,
      "Subject Public Key Info": this.publicKey
    });
    if (this.attributes.length) {
      const attrs = new TextObject("");
      for (const ext of this.attributes) {
        const attrObj = ext.toTextObject();
        attrs[attrObj[TextObject.NAME]] = attrObj;
      }
      data["Attributes"] = attrs;
    }
    obj["Data"] = data;
    obj["Signature"] = new TextObject("", {
      Algorithm: TextConverter.serializeAlgorithm(req.signatureAlgorithm),
      "": req.signature
    });
    return obj;
  }
};
_Pkcs10CertificateRequest_tbs = /* @__PURE__ */ new WeakMap(), _Pkcs10CertificateRequest_subjectName = /* @__PURE__ */ new WeakMap(), _Pkcs10CertificateRequest_subject = /* @__PURE__ */ new WeakMap(), _Pkcs10CertificateRequest_signatureAlgorithm = /* @__PURE__ */ new WeakMap(), _Pkcs10CertificateRequest_signature = /* @__PURE__ */ new WeakMap(), _Pkcs10CertificateRequest_publicKey = /* @__PURE__ */ new WeakMap(), _Pkcs10CertificateRequest_attributes = /* @__PURE__ */ new WeakMap(), _Pkcs10CertificateRequest_extensions = /* @__PURE__ */ new WeakMap();
Pkcs10CertificateRequest.NAME = "PKCS#10 Certificate Request";
var _X509Certificate_tbs;
var _X509Certificate_serialNumber;
var _X509Certificate_subjectName;
var _X509Certificate_subject;
var _X509Certificate_issuerName;
var _X509Certificate_issuer;
var _X509Certificate_notBefore;
var _X509Certificate_notAfter;
var _X509Certificate_signatureAlgorithm;
var _X509Certificate_signature;
var _X509Certificate_extensions;
var _X509Certificate_publicKey;
var X509Certificate = class extends PemData {
  static {
    __name(this, "X509Certificate");
  }
  get publicKey() {
    if (!__classPrivateFieldGet(this, _X509Certificate_publicKey, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_publicKey, new PublicKey(this.asn.tbsCertificate.subjectPublicKeyInfo, this.parseOptions), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_publicKey, "f");
  }
  get serialNumber() {
    if (!__classPrivateFieldGet(this, _X509Certificate_serialNumber, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_serialNumber, getCertificateSerialNumber(this.asn.tbsCertificate.serialNumber), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_serialNumber, "f");
  }
  get subjectName() {
    if (!__classPrivateFieldGet(this, _X509Certificate_subjectName, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_subjectName, new Name3(this.asn.tbsCertificate.subject), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_subjectName, "f");
  }
  get subject() {
    if (!__classPrivateFieldGet(this, _X509Certificate_subject, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_subject, this.subjectName.toString(), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_subject, "f");
  }
  get issuerName() {
    if (!__classPrivateFieldGet(this, _X509Certificate_issuerName, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_issuerName, new Name3(this.asn.tbsCertificate.issuer), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_issuerName, "f");
  }
  get issuer() {
    if (!__classPrivateFieldGet(this, _X509Certificate_issuer, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_issuer, this.issuerName.toString(), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_issuer, "f");
  }
  get notBefore() {
    if (!__classPrivateFieldGet(this, _X509Certificate_notBefore, "f")) {
      const notBefore = this.asn.tbsCertificate.validity.notBefore.utcTime || this.asn.tbsCertificate.validity.notBefore.generalTime;
      if (!notBefore) {
        throw new Error("Cannot get 'notBefore' value");
      }
      __classPrivateFieldSet(this, _X509Certificate_notBefore, notBefore, "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_notBefore, "f");
  }
  get notAfter() {
    if (!__classPrivateFieldGet(this, _X509Certificate_notAfter, "f")) {
      const notAfter = this.asn.tbsCertificate.validity.notAfter.utcTime || this.asn.tbsCertificate.validity.notAfter.generalTime;
      if (!notAfter) {
        throw new Error("Cannot get 'notAfter' value");
      }
      __classPrivateFieldSet(this, _X509Certificate_notAfter, notAfter, "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_notAfter, "f");
  }
  get signatureAlgorithm() {
    if (!__classPrivateFieldGet(this, _X509Certificate_signatureAlgorithm, "f")) {
      const algProv = instance.resolve(diAlgorithmProvider);
      __classPrivateFieldSet(this, _X509Certificate_signatureAlgorithm, algProv.toWebAlgorithm(this.asn.signatureAlgorithm), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_signatureAlgorithm, "f");
  }
  get signature() {
    if (!__classPrivateFieldGet(this, _X509Certificate_signature, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_signature, this.asn.signatureValue, "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_signature, "f");
  }
  get extensions() {
    if (!__classPrivateFieldGet(this, _X509Certificate_extensions, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_extensions, [], "f");
      if (this.asn.tbsCertificate.extensions) {
        __classPrivateFieldSet(this, _X509Certificate_extensions, this.asn.tbsCertificate.extensions.map((o) => ExtensionFactory.create(AsnConvert.serialize(o), this.parseOptions)), "f");
      }
    }
    return __classPrivateFieldGet(this, _X509Certificate_extensions, "f");
  }
  get tbs() {
    if (!__classPrivateFieldGet(this, _X509Certificate_tbs, "f")) {
      __classPrivateFieldSet(this, _X509Certificate_tbs, this.asn.tbsCertificateRaw || AsnConvert.serialize(this.asn.tbsCertificate), "f");
    }
    return __classPrivateFieldGet(this, _X509Certificate_tbs, "f");
  }
  constructor(param, options) {
    const args = PemData.isAsnEncoded(param) ? [
      param,
      Certificate,
      options
    ] : [
      param,
      options
    ];
    super(args[0], args[1], args[2]);
    _X509Certificate_tbs.set(this, void 0);
    _X509Certificate_serialNumber.set(this, void 0);
    _X509Certificate_subjectName.set(this, void 0);
    _X509Certificate_subject.set(this, void 0);
    _X509Certificate_issuerName.set(this, void 0);
    _X509Certificate_issuer.set(this, void 0);
    _X509Certificate_notBefore.set(this, void 0);
    _X509Certificate_notAfter.set(this, void 0);
    _X509Certificate_signatureAlgorithm.set(this, void 0);
    _X509Certificate_signature.set(this, void 0);
    _X509Certificate_extensions.set(this, void 0);
    _X509Certificate_publicKey.set(this, void 0);
    this.tag = PemConverter.CertificateTag;
  }
  onInit(_asn) {
  }
  getExtension(type) {
    for (const ext of this.extensions) {
      if (typeof type === "string") {
        if (ext.type === type) {
          return ext;
        }
      } else {
        if (ext instanceof type) {
          return ext;
        }
      }
    }
    return null;
  }
  getExtensions(type) {
    return this.extensions.filter((o) => {
      if (typeof type === "string") {
        return o.type === type;
      } else {
        return o instanceof type;
      }
    });
  }
  async verify(params = {}, crypto2 = cryptoProvider.get()) {
    let keyAlgorithm;
    let publicKey;
    const paramsKey = params.publicKey;
    try {
      if (!paramsKey) {
        keyAlgorithm = {
          ...this.publicKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = await this.publicKey.export(keyAlgorithm, [
          "verify"
        ], crypto2);
      } else if ("publicKey" in paramsKey) {
        keyAlgorithm = {
          ...paramsKey.publicKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = await paramsKey.publicKey.export(keyAlgorithm, [
          "verify"
        ], crypto2);
      } else if (paramsKey instanceof PublicKey) {
        keyAlgorithm = {
          ...paramsKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = await paramsKey.export(keyAlgorithm, [
          "verify"
        ], crypto2);
      } else if (BufferSourceConverter.isBufferSource(paramsKey)) {
        const key = new PublicKey(paramsKey);
        keyAlgorithm = {
          ...key.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = await key.export(keyAlgorithm, [
          "verify"
        ], crypto2);
      } else {
        keyAlgorithm = {
          ...paramsKey.algorithm,
          ...this.signatureAlgorithm
        };
        publicKey = paramsKey;
      }
    } catch {
      return false;
    }
    const signatureFormatters = instance.resolveAll(diAsnSignatureFormatter).reverse();
    let signature = null;
    for (const signatureFormatter of signatureFormatters) {
      signature = signatureFormatter.toWebSignature(keyAlgorithm, this.signature);
      if (signature) {
        break;
      }
    }
    if (!signature) {
      throw Error("Cannot convert ASN.1 signature value to WebCrypto format");
    }
    const ok = await crypto2.subtle.verify(this.signatureAlgorithm, publicKey, signature, this.tbs);
    if (params.signatureOnly) {
      return ok;
    } else {
      const date = params.date || /* @__PURE__ */ new Date();
      const time = date.getTime();
      return ok && this.notBefore.getTime() < time && time < this.notAfter.getTime();
    }
  }
  async getThumbprint(arg1, arg2) {
    let crypto2;
    let algorithm = "SHA-1";
    if (arg1) {
      if (typeof arg1 === "object" && "subtle" in arg1) {
        crypto2 = arg1;
      } else {
        algorithm = arg1;
        crypto2 = arg2;
      }
    }
    crypto2 !== null && crypto2 !== void 0 ? crypto2 : crypto2 = cryptoProvider.get();
    return await crypto2.subtle.digest(algorithm, this.rawData);
  }
  async isSelfSigned(crypto2 = cryptoProvider.get()) {
    return this.subject === this.issuer && await this.verify({
      signatureOnly: true
    }, crypto2);
  }
  toTextObject() {
    const obj = this.toTextObjectEmpty();
    const cert = AsnConvert.parse(this.rawData, Certificate, this.parseOptions);
    const tbs = cert.tbsCertificate;
    const data = new TextObject("", {
      Version: `${Version[tbs.version]} (${tbs.version})`,
      "Serial Number": tbs.serialNumber,
      "Signature Algorithm": TextConverter.serializeAlgorithm(tbs.signature),
      Issuer: this.issuer,
      Validity: new TextObject("", {
        "Not Before": tbs.validity.notBefore.getTime(),
        "Not After": tbs.validity.notAfter.getTime()
      }),
      Subject: this.subject,
      "Subject Public Key Info": this.publicKey
    });
    if (tbs.issuerUniqueID) {
      data["Issuer Unique ID"] = tbs.issuerUniqueID;
    }
    if (tbs.subjectUniqueID) {
      data["Subject Unique ID"] = tbs.subjectUniqueID;
    }
    if (this.extensions.length) {
      const extensions = new TextObject("");
      for (const ext of this.extensions) {
        const extObj = ext.toTextObject();
        extensions[extObj[TextObject.NAME]] = extObj;
      }
      data["Extensions"] = extensions;
    }
    obj["Data"] = data;
    obj["Signature"] = new TextObject("", {
      Algorithm: TextConverter.serializeAlgorithm(cert.signatureAlgorithm),
      "": cert.signatureValue
    });
    return obj;
  }
};
_X509Certificate_tbs = /* @__PURE__ */ new WeakMap(), _X509Certificate_serialNumber = /* @__PURE__ */ new WeakMap(), _X509Certificate_subjectName = /* @__PURE__ */ new WeakMap(), _X509Certificate_subject = /* @__PURE__ */ new WeakMap(), _X509Certificate_issuerName = /* @__PURE__ */ new WeakMap(), _X509Certificate_issuer = /* @__PURE__ */ new WeakMap(), _X509Certificate_notBefore = /* @__PURE__ */ new WeakMap(), _X509Certificate_notAfter = /* @__PURE__ */ new WeakMap(), _X509Certificate_signatureAlgorithm = /* @__PURE__ */ new WeakMap(), _X509Certificate_signature = /* @__PURE__ */ new WeakMap(), _X509Certificate_extensions = /* @__PURE__ */ new WeakMap(), _X509Certificate_publicKey = /* @__PURE__ */ new WeakMap();
X509Certificate.NAME = "Certificate";
var _X509Certificates_options;
_X509Certificates_options = /* @__PURE__ */ new WeakMap();
var _X509CrlEntry_serialNumber;
var _X509CrlEntry_revocationDate;
var _X509CrlEntry_reason;
var _X509CrlEntry_invalidity;
var _X509CrlEntry_extensions;
var X509CrlReason;
(function(X509CrlReason2) {
  X509CrlReason2[X509CrlReason2["unspecified"] = 0] = "unspecified";
  X509CrlReason2[X509CrlReason2["keyCompromise"] = 1] = "keyCompromise";
  X509CrlReason2[X509CrlReason2["cACompromise"] = 2] = "cACompromise";
  X509CrlReason2[X509CrlReason2["affiliationChanged"] = 3] = "affiliationChanged";
  X509CrlReason2[X509CrlReason2["superseded"] = 4] = "superseded";
  X509CrlReason2[X509CrlReason2["cessationOfOperation"] = 5] = "cessationOfOperation";
  X509CrlReason2[X509CrlReason2["certificateHold"] = 6] = "certificateHold";
  X509CrlReason2[X509CrlReason2["removeFromCRL"] = 8] = "removeFromCRL";
  X509CrlReason2[X509CrlReason2["privilegeWithdrawn"] = 9] = "privilegeWithdrawn";
  X509CrlReason2[X509CrlReason2["aACompromise"] = 10] = "aACompromise";
})(X509CrlReason || (X509CrlReason = {}));
_X509CrlEntry_serialNumber = /* @__PURE__ */ new WeakMap(), _X509CrlEntry_revocationDate = /* @__PURE__ */ new WeakMap(), _X509CrlEntry_reason = /* @__PURE__ */ new WeakMap(), _X509CrlEntry_invalidity = /* @__PURE__ */ new WeakMap(), _X509CrlEntry_extensions = /* @__PURE__ */ new WeakMap();
var _X509Crl_tbs;
var _X509Crl_signatureAlgorithm;
var _X509Crl_issuerName;
var _X509Crl_thisUpdate;
var _X509Crl_nextUpdate;
var _X509Crl_entries;
var _X509Crl_extensions;
_X509Crl_tbs = /* @__PURE__ */ new WeakMap(), _X509Crl_signatureAlgorithm = /* @__PURE__ */ new WeakMap(), _X509Crl_issuerName = /* @__PURE__ */ new WeakMap(), _X509Crl_thisUpdate = /* @__PURE__ */ new WeakMap(), _X509Crl_nextUpdate = /* @__PURE__ */ new WeakMap(), _X509Crl_entries = /* @__PURE__ */ new WeakMap(), _X509Crl_extensions = /* @__PURE__ */ new WeakMap();
ExtensionFactory.register(id_ce_basicConstraints, BasicConstraintsExtension);
ExtensionFactory.register(id_ce_extKeyUsage, ExtendedKeyUsageExtension);
ExtensionFactory.register(id_ce_keyUsage, KeyUsagesExtension);
ExtensionFactory.register(id_ce_subjectKeyIdentifier, SubjectKeyIdentifierExtension);
ExtensionFactory.register(id_ce_authorityKeyIdentifier, AuthorityKeyIdentifierExtension);
ExtensionFactory.register(id_ce_subjectAltName, SubjectAlternativeNameExtension);
ExtensionFactory.register(id_ce_cRLDistributionPoints, CRLDistributionPointsExtension);
ExtensionFactory.register(id_pe_authorityInfoAccess, AuthorityInfoAccessExtension);
ExtensionFactory.register(id_ce_issuerAltName, IssuerAlternativeNameExtension);
AttributeFactory.register(id_pkcs9_at_challengePassword, ChallengePasswordAttribute);
AttributeFactory.register(id_pkcs9_at_extensionRequest, ExtensionsAttribute);
instance.registerSingleton(diAsnSignatureFormatter, AsnDefaultSignatureFormatter);
instance.registerSingleton(diAsnSignatureFormatter, AsnEcSignatureFormatter);
AsnEcSignatureFormatter.namedCurveSize.set("P-256", 32);
AsnEcSignatureFormatter.namedCurveSize.set("K-256", 32);
AsnEcSignatureFormatter.namedCurveSize.set("P-384", 48);
AsnEcSignatureFormatter.namedCurveSize.set("P-521", 66);
export {
  BasicConstraintsExtension,
  ExtendedKeyUsageExtension,
  KeyUsageFlags2 as KeyUsageFlags,
  KeyUsagesExtension,
  X509Certificate,
  fromBER
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/*!
 * MIT License
 * 
 * Copyright (c) 2017-2024 Peculiar Ventures, LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
/*!
 Copyright (c) Peculiar Ventures, LLC
*/
/*!
 * Copyright (c) 2014, GMO GlobalSign
 * Copyright (c) 2015-2022, Peculiar Ventures
 * All rights reserved.
 * 
 * Author 2014-2019, Yury Strozhevsky
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 * 
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
/*!
 * MIT License
 * 
 * Copyright (c) Peculiar Ventures. All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
