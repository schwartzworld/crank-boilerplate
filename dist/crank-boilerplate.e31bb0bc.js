// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@bikeshaving/crank/esm/_tslib-21ac4f0e.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ = __extends;
exports.a = __values;
exports.b = __spread;
exports.c = __generator;
exports.d = __awaiter;
exports.e = __read;
exports.f = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
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

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.f = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.f = __assign;

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

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
          op = [0];
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
      op = [6, e];
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
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
},{}],"node_modules/@repeaterjs/repeater/lib/repeater.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlidingBuffer = exports.RepeaterOverflowError = exports.Repeater = exports.MAX_QUEUE_LENGTH = exports.FixedBuffer = exports.DroppingBuffer = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
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

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

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
          op = [0];
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
      op = [6, e];
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
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

var FixedBuffer =
/** @class */
function () {
  function FixedBuffer(capacity) {
    this.capacity = capacity;
    this.arr = [];

    if (capacity < 0) {
      throw new RangeError("FixedBuffer capacity cannot be less than zero");
    }
  }

  Object.defineProperty(FixedBuffer.prototype, "empty", {
    get: function () {
      return this.arr.length === 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FixedBuffer.prototype, "full", {
    get: function () {
      return this.arr.length >= this.capacity;
    },
    enumerable: true,
    configurable: true
  });

  FixedBuffer.prototype.add = function (value) {
    if (this.full) {
      throw new Error("Buffer full");
    } else {
      this.arr.push(value);
    }
  };

  FixedBuffer.prototype.remove = function () {
    if (this.empty) {
      throw new Error("Buffer empty");
    }

    return this.arr.shift();
  };

  return FixedBuffer;
}(); // TODO: use a circular buffer here


exports.FixedBuffer = FixedBuffer;

var SlidingBuffer =
/** @class */
function () {
  function SlidingBuffer(capacity) {
    this.capacity = capacity;
    this.arr = [];
    this.full = false;

    if (capacity <= 0) {
      throw new RangeError("SlidingBuffer capacity cannot be less than or equal to zero");
    }
  }

  Object.defineProperty(SlidingBuffer.prototype, "empty", {
    get: function () {
      return this.arr.length === 0;
    },
    enumerable: true,
    configurable: true
  });

  SlidingBuffer.prototype.add = function (value) {
    while (this.arr.length >= this.capacity) {
      this.arr.shift();
    }

    this.arr.push(value);
  };

  SlidingBuffer.prototype.remove = function () {
    if (this.empty) {
      throw new Error("Buffer empty");
    }

    return this.arr.shift();
  };

  return SlidingBuffer;
}();

exports.SlidingBuffer = SlidingBuffer;

var DroppingBuffer =
/** @class */
function () {
  function DroppingBuffer(capacity) {
    this.capacity = capacity;
    this.arr = [];
    this.full = false;

    if (capacity <= 0) {
      throw new RangeError("DroppingBuffer capacity cannot be less than or equal to zero");
    }
  }

  Object.defineProperty(DroppingBuffer.prototype, "empty", {
    get: function () {
      return this.arr.length === 0;
    },
    enumerable: true,
    configurable: true
  });

  DroppingBuffer.prototype.add = function (value) {
    if (this.arr.length < this.capacity) {
      this.arr.push(value);
    }
  };

  DroppingBuffer.prototype.remove = function () {
    if (this.empty) {
      throw new Error("Buffer empty");
    }

    return this.arr.shift();
  };

  return DroppingBuffer;
}();

exports.DroppingBuffer = DroppingBuffer;
var MAX_QUEUE_LENGTH = 1024;
exports.MAX_QUEUE_LENGTH = MAX_QUEUE_LENGTH;

var NOOP = function () {};

function isPromiseLike(value) {
  return value != null && typeof value.then === "function";
}

function swallow(value) {
  if (isPromiseLike(value)) {
    Promise.resolve(value).catch(NOOP);
  }
}

var RepeaterOverflowError =
/** @class */
function (_super) {
  __extends(RepeaterOverflowError, _super);

  function RepeaterOverflowError(message) {
    var _newTarget = this.constructor;

    var _this = _super.call(this, message) || this;

    Object.defineProperty(_this, "name", {
      value: "RepeaterOverflowError",
      enumerable: false
    });

    if (typeof Object.setPrototypeOf === "function") {
      Object.setPrototypeOf(_this, _newTarget.prototype);
    } else {
      _this.__proto__ = _newTarget.prototype;
    }

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(_this, _this.constructor);
    }

    return _this;
  }

  return RepeaterOverflowError;
}(Error);
/**
 * The functionality for repeaters is implemented in this helper class and
 * hidden using a private WeakMap to make repeaters themselves opaque and
 * maximally compatible with async generators.
 */


exports.RepeaterOverflowError = RepeaterOverflowError;

var RepeaterController =
/** @class */
function () {
  function RepeaterController(executor, buffer) {
    this.executor = executor;
    this.buffer = buffer;
    this.state = 0
    /* Initial */
    ; // pushQueue and pullQueue will never both contain operations at the same time.

    this.pushQueue = [];
    this.pullQueue = [];
    this.onnext = NOOP;
    this.onstop = NOOP;
  }
  /**
   * This method runs synchronously the first time next is called.
   *
   * Advances state to RepeaterState.Started
   */


  RepeaterController.prototype.execute = function () {
    var _this = this;

    if (this.state >= 1
    /* Started */
    ) {
        return;
      }

    this.state = 1
    /* Started */
    ;
    var push = this.push.bind(this);
    var stop = this.stop.bind(this);
    {
      var stopP = new Promise(function (resolve) {
        return _this.onstop = resolve;
      });
      stop.then = stopP.then.bind(stopP);
      stop.catch = stopP.catch.bind(stopP);
      stop.finally = stopP.finally.bind(stopP);
    }

    try {
      this.execution = Promise.resolve(this.executor(push, stop));
    } catch (err) {
      // sync err in executor
      this.execution = Promise.reject(err);
    } // We don’t have to call this.stop with the error because all that does is
    // reassign this.execution with the rejection.


    this.execution.catch(function () {
      return _this.stop();
    });
  };
  /**
   * A helper method which builds IteratorResult objects from values.  This
   * method prevents types of Repeater<Promise<any>>, where the value property
   * is a promise, and mimics the promise unwrapping behavior of async
   * generators, where yield is equivalent to yield await.
   */


  RepeaterController.prototype.unwrap = function (value) {
    var _this = this;

    var done = this.state >= 3
    /* Finished */
    ;
    return Promise.resolve(value).then(function (value) {
      if (!done && _this.state >= 4
      /* Rejected */
      ) {
          return _this.consume().then(function (value) {
            return {
              value: value,
              done: true
            };
          });
        }

      return {
        value: value,
        done: done
      };
    });
  };
  /**
   * A helper method used to mimic the behavior of async generators where the
   * final result or any error are consumed, so that further calls to next,
   * return or throw return { value: undefined, done: true }.
   */


  RepeaterController.prototype.consume = function () {
    var err = this.err;
    var execution = Promise.resolve(this.execution).then(function (value) {
      if (err != null) {
        throw err;
      }

      return value;
    });
    this.err = undefined;
    this.execution = execution.then(function () {
      return undefined;
    }, function () {
      return undefined;
    });
    return this.pending === undefined ? execution : this.pending.then(function () {
      return execution;
    });
  };
  /**
   * The difference between stopping a repeater vs finishing a repeater is that
   * stopping a repeater allows next to continue to drain values from the
   * pushQueue and buffer, while finishing a repeater will clear all pending
   * values and end iteration immediately. Once, a repeater is finished, all
   * results will have the done property set to true.
   *
   * Advances state to RepeaterState.Finished
   */


  RepeaterController.prototype.finish = function () {
    if (this.state >= 3
    /* Finished */
    ) {
        return;
      }

    if (this.state < 2
    /* Stopped */
    ) {
        this.stop();
      }

    this.state = 3
    /* Finished */
    ;
    this.pushQueue = [];
    this.buffer = new FixedBuffer(0);
  };
  /**
   * Called when a promise passed to push rejects, or when a push call is
   * unhandled.
   *
   * Advances state to RepeaterState.Rejected
   */


  RepeaterController.prototype.reject = function () {
    if (this.state >= 4
    /* Rejected */
    ) {
        return;
      }

    if (this.state < 3
    /* Finished */
    ) {
        this.finish();
      }

    this.state = 4
    /* Rejected */
    ;
  };
  /**
   * This method is bound and passed to the executor as the push argument.
   */


  RepeaterController.prototype.push = function (value) {
    var _this = this;

    swallow(value);

    if (this.pushQueue.length >= MAX_QUEUE_LENGTH) {
      throw new RepeaterOverflowError("No more than " + MAX_QUEUE_LENGTH + " pending calls to push are allowed on a single repeater.");
    } else if (this.state >= 2
    /* Stopped */
    ) {
        return Promise.resolve(undefined);
      }

    var valueP = this.pending === undefined ? Promise.resolve(value) : this.pending.then(function () {
      return value;
    });
    valueP = valueP.catch(function (err) {
      if (_this.state < 2
      /* Stopped */
      ) {
          _this.err = err;
        }

      _this.reject(); // Explicitly return undefined to avoid typescript’s horrible void type


      return undefined;
    });
    var next;

    if (this.pullQueue.length) {
      var pull = this.pullQueue.shift();
      pull.resolve(this.unwrap(valueP));

      if (this.pullQueue.length) {
        next = Promise.resolve(this.pullQueue[0].value);
      } else {
        next = new Promise(function (resolve) {
          return _this.onnext = resolve;
        });
      }
    } else if (!this.buffer.full) {
      this.buffer.add(valueP);
      next = Promise.resolve(undefined);
    } else {
      next = new Promise(function (resolve) {
        _this.pushQueue.push({
          resolve: resolve,
          value: valueP
        });
      });
    } // This method of catching unhandled rejections is adapted from
    // https://stackoverflow.com/a/57792542/1825413


    var floating = true;
    var err;
    var unhandled = next.catch(function (err1) {
      if (floating) {
        err = err1;
      } // Explicitly return undefined to avoid typescript’s horrible void type


      return undefined;
    });

    next.then = function (onFulfilled, onRejected) {
      floating = false;
      return Promise.prototype.then.call(this, onFulfilled, onRejected);
    };

    this.pending = valueP.then(function () {
      return unhandled;
    }).then(function () {
      if (err != null) {
        _this.err = err;

        _this.reject();
      } // Explicitly return undefined to avoid typescript’s horrible void type


      return undefined;
    });
    return next;
  };
  /**
   * This method is bound and passed to the executor as the stop argument.
   *
   * Advances state to RepeaterState.Stopped
   */


  RepeaterController.prototype.stop = function (err) {
    var e_1, _a, e_2, _b;

    var _this = this;

    if (this.state >= 2
    /* Stopped */
    ) {
        return;
      }

    this.state = 2
    /* Stopped */
    ;
    this.onnext();
    this.onstop();

    if (this.err == null) {
      this.err = err;
    }

    try {
      for (var _c = __values(this.pushQueue), _d = _c.next(); !_d.done; _d = _c.next()) {
        var push = _d.value;
        push.resolve();
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
      } finally {
        if (e_1) throw e_1.error;
      }
    } // If the pullQueue contains operations, the pushQueue and buffer are both
    // necessarily empty, so we don‘t have to worry about this.finish clearing
    // the pushQueue or buffer.


    if (this.pullQueue.length) {
      this.finish();

      try {
        for (var _e = __values(this.pullQueue), _f = _e.next(); !_f.done; _f = _e.next()) {
          var pull = _f.value;
          var execution = this.pending === undefined ? this.consume() : this.pending.then(function () {
            return _this.consume();
          });
          pull.resolve(this.unwrap(execution));
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    this.pullQueue = [];
  };

  RepeaterController.prototype.next = function (value) {
    var _this = this;

    swallow(value);

    if (this.pullQueue.length >= MAX_QUEUE_LENGTH) {
      throw new RepeaterOverflowError("No more than " + MAX_QUEUE_LENGTH + " pending calls to Repeater.prototype.next are allowed on a single repeater.");
    }

    if (this.state <= 0
    /* Initial */
    ) {
        this.execute();
      }

    this.onnext(value);

    if (!this.buffer.empty) {
      var result = this.unwrap(this.buffer.remove());

      if (this.pushQueue.length) {
        var push = this.pushQueue.shift();
        this.buffer.add(push.value);
        this.onnext = push.resolve;
      }

      return result;
    } else if (this.pushQueue.length) {
      var push = this.pushQueue.shift();
      this.onnext = push.resolve;
      return this.unwrap(push.value);
    } else if (this.state >= 2
    /* Stopped */
    ) {
        this.finish();
        return this.unwrap(this.consume());
      }

    return new Promise(function (resolve) {
      return _this.pullQueue.push({
        resolve: resolve,
        value: value
      });
    });
  };

  RepeaterController.prototype.return = function (value) {
    swallow(value);
    this.finish();
    this.execution = Promise.resolve(this.execution).then(function () {
      return value;
    });
    return this.unwrap(this.consume());
  };

  RepeaterController.prototype.throw = function (err) {
    if (this.state <= 0
    /* Initial */
    || this.state >= 2
    /* Stopped */
    || !this.buffer.empty) {
      this.finish();

      if (this.err == null) {
        this.err = err;
      }

      return this.unwrap(this.consume());
    }

    return this.next(Promise.reject(err));
  };

  RepeaterController.prototype[Symbol.asyncIterator] = function () {
    return this;
  };

  return RepeaterController;
}();

var controllers = new WeakMap(); // We do not export any types which use >=3.6 IteratorResult, AsyncIterator or
// AsyncGenerator types. This allows the code to be used with older versions of
// typescript. We cannot implement `AsyncIterator` or `AsyncIterableIterator`
// here because the default types are busted as hell.
//
// TODO: use typesVersions to ship stricter types.

var Repeater =
/** @class */
function () {
  function Repeater(executor, buffer) {
    if (buffer === void 0) {
      buffer = new FixedBuffer(0);
    }

    controllers.set(this, new RepeaterController(executor, buffer));
  }

  Repeater.prototype.next = function (value) {
    var controller = controllers.get(this);

    if (controller === undefined) {
      throw new Error("RepeaterController missing from controllers WeakMap");
    }

    return controller.next(value);
  };

  Repeater.prototype.return = function (value) {
    var controller = controllers.get(this);

    if (controller === undefined) {
      throw new Error("RepeaterController missing from controllers WeakMap");
    }

    return controller.return(value);
  };

  Repeater.prototype.throw = function (err) {
    var controller = controllers.get(this);

    if (controller === undefined) {
      throw new Error("RepeaterController missing from controllers WeakMap");
    }

    return controller.throw(err);
  };

  Repeater.prototype[Symbol.asyncIterator] = function () {
    return this;
  };

  Repeater.race = race;
  Repeater.merge = merge;
  Repeater.zip = zip;
  Repeater.latest = latest;
  return Repeater;
}();

exports.Repeater = Repeater;

function isAsyncIterable(value) {
  return value != null && typeof value[Symbol.asyncIterator] === "function";
}

function isIterable(value) {
  return value != null && typeof value[Symbol.iterator] === "function";
}

function asyncIterators(contenders, options) {
  var e_3, _a;

  var yieldValues = options.yieldValues,
      returnValues = options.returnValues;
  var iters = [];

  var _loop_1 = function (contender) {
    if (isAsyncIterable(contender)) {
      iters.push(contender[Symbol.asyncIterator]());
    } else if (isIterable(contender)) {
      var iter_1 = contender[Symbol.iterator]();
      iters.push(function syncToAsyncIterator() {
        return __asyncGenerator(this, arguments, function syncToAsyncIterator_1() {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0,, 6, 7]);

                result = iter_1.next();
                _a.label = 1;

              case 1:
                if (!!result.done) return [3
                /*break*/
                , 4];
                return [4
                /*yield*/
                , __await(result.value)];

              case 2:
                return [4
                /*yield*/
                , _a.sent()];

              case 3:
                _a.sent();

                result = iter_1.next();
                return [3
                /*break*/
                , 1];

              case 4:
                return [4
                /*yield*/
                , __await(result.value)];

              case 5:
                return [2
                /*return*/
                , _a.sent()];

              case 6:
                iter_1.return && iter_1.return();
                return [7
                /*endfinally*/
                ];

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }());
    } else {
      iters.push(function valueToAsyncIterator() {
        return __asyncGenerator(this, arguments, function valueToAsyncIterator_1() {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!yieldValues) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , __await(contender)];

              case 1:
                return [4
                /*yield*/
                , _a.sent()];

              case 2:
                _a.sent();

                _a.label = 3;

              case 3:
                if (!returnValues) return [3
                /*break*/
                , 5];
                return [4
                /*yield*/
                , __await(contender)];

              case 4:
                return [2
                /*return*/
                , _a.sent()];

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }());
    }
  };

  try {
    for (var contenders_1 = __values(contenders), contenders_1_1 = contenders_1.next(); !contenders_1_1.done; contenders_1_1 = contenders_1.next()) {
      var contender = contenders_1_1.value;

      _loop_1(contender);
    }
  } catch (e_3_1) {
    e_3 = {
      error: e_3_1
    };
  } finally {
    try {
      if (contenders_1_1 && !contenders_1_1.done && (_a = contenders_1.return)) _a.call(contenders_1);
    } finally {
      if (e_3) throw e_3.error;
    }
  }

  return iters;
}

function race(contenders) {
  var _this = this;

  var iters = asyncIterators(contenders, {
    returnValues: true
  });
  return new Repeater(function (push, stop) {
    return __awaiter(_this, void 0, void 0, function () {
      var stopped, returned, results, results_1, results_1_1, result_1, result;

      var e_4, _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!iters.length) {
              stop();
              return [2
              /*return*/
              ];
            }

            stopped = false;
            stop.then(function () {
              return stopped = true;
            });
            _b.label = 1;

          case 1:
            _b.trys.push([1,, 7, 9]);

            _b.label = 2;

          case 2:
            if (!!stopped) return [3
            /*break*/
            , 6];
            results = iters.map(function (iter) {
              return iter.next();
            });

            try {
              for (results_1 = (e_4 = void 0, __values(results)), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                result_1 = results_1_1.value;
                Promise.resolve(result_1).then(function (result) {
                  if (result.done && !stopped) {
                    stop();
                    stopped = true;
                    returned = result.value;
                  }
                }, function (err) {
                  return stop(err);
                });
              }
            } catch (e_4_1) {
              e_4 = {
                error: e_4_1
              };
            } finally {
              try {
                if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
              } finally {
                if (e_4) throw e_4.error;
              }
            }

            return [4
            /*yield*/
            , Promise.race(__spread([stop], results))];

          case 3:
            result = _b.sent();
            if (!(result !== undefined && !result.done)) return [3
            /*break*/
            , 5];
            return [4
            /*yield*/
            , push(result.value)];

          case 4:
            _b.sent();

            _b.label = 5;

          case 5:
            return [3
            /*break*/
            , 2];

          case 6:
            return [2
            /*return*/
            , returned];

          case 7:
            stop();
            return [4
            /*yield*/
            , Promise.race(iters.map(function (iter) {
              return iter.return && iter.return();
            }))];

          case 8:
            _b.sent();

            return [7
            /*endfinally*/
            ];

          case 9:
            return [2
            /*return*/
            ];
        }
      });
    });
  });
}

function merge(contenders) {
  var _this = this;

  var iters = asyncIterators(contenders, {
    yieldValues: true
  });
  return new Repeater(function (push, stop) {
    return __awaiter(_this, void 0, void 0, function () {
      var stopped, returned;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!iters.length) {
              stop();
              return [2
              /*return*/
              ];
            }

            stopped = false;
            stop.then(function () {
              return stopped = true;
            });
            return [4
            /*yield*/
            , Promise.all(iters.map(function (iter) {
              return __awaiter(_this, void 0, void 0, function () {
                var result, _a;

                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      _b.trys.push([0,, 6, 9]);

                      _b.label = 1;

                    case 1:
                      if (!!stopped) return [3
                      /*break*/
                      , 5];
                      return [4
                      /*yield*/
                      , Promise.race([iter.next(), stop])];

                    case 2:
                      result = _b.sent();
                      if (!(result !== undefined)) return [3
                      /*break*/
                      , 4];

                      if (result.done) {
                        returned = result.value;
                        return [2
                        /*return*/
                        ];
                      }

                      return [4
                      /*yield*/
                      , push(result.value)];

                    case 3:
                      _b.sent();

                      _b.label = 4;

                    case 4:
                      return [3
                      /*break*/
                      , 1];

                    case 5:
                      return [3
                      /*break*/
                      , 9];

                    case 6:
                      _a = iter.return;
                      if (!_a) return [3
                      /*break*/
                      , 8];
                      return [4
                      /*yield*/
                      , iter.return()];

                    case 7:
                      _a = _b.sent();
                      _b.label = 8;

                    case 8:
                      return [7
                      /*endfinally*/
                      ];

                    case 9:
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }))];

          case 1:
            _a.sent();

            stop();
            return [2
            /*return*/
            , returned];
        }
      });
    });
  });
}

function zip(contenders) {
  var _this = this;

  var iters = asyncIterators(contenders, {
    returnValues: true
  });
  return new Repeater(function (push, stop) {
    return __awaiter(_this, void 0, void 0, function () {
      var stopped, resultsP, results, values;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!iters.length) {
              stop();
              return [2
              /*return*/
              , []];
            }

            stopped = false;
            stop.then(function () {
              return stopped = true;
            });
            _a.label = 1;

          case 1:
            _a.trys.push([1,, 6, 8]);

            _a.label = 2;

          case 2:
            if (!!stopped) return [3
            /*break*/
            , 5];
            resultsP = Promise.all(iters.map(function (iter) {
              return iter.next();
            }));
            return [4
            /*yield*/
            , Promise.race([stop, resultsP])];

          case 3:
            results = _a.sent();

            if (results === undefined) {
              return [2
              /*return*/
              ];
            }

            values = results.map(function (result) {
              return result.value;
            });

            if (results.some(function (result) {
              return result.done;
            })) {
              return [2
              /*return*/
              , values];
            }

            return [4
            /*yield*/
            , push(values)];

          case 4:
            _a.sent();

            return [3
            /*break*/
            , 2];

          case 5:
            return [3
            /*break*/
            , 8];

          case 6:
            stop();
            return [4
            /*yield*/
            , Promise.all(iters.map(function (iter) {
              return iter.return && iter.return();
            }))];

          case 7:
            _a.sent();

            return [7
            /*endfinally*/
            ];

          case 8:
            return [2
            /*return*/
            ];
        }
      });
    });
  });
}

function latest(contenders) {
  var _this = this;

  var iters = asyncIterators(contenders, {
    yieldValues: true,
    returnValues: true
  });
  return new Repeater(function (push, stop) {
    return __awaiter(_this, void 0, void 0, function () {
      var stopped, resultsP, results_2, values_1;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!iters.length) {
              stop();
              return [2
              /*return*/
              , []];
            }

            stopped = false;
            stop.then(function () {
              return stopped = true;
            });
            _a.label = 1;

          case 1:
            _a.trys.push([1,, 5, 7]);

            resultsP = Promise.all(iters.map(function (iter) {
              return iter.next();
            }));
            return [4
            /*yield*/
            , Promise.race([stop, resultsP])];

          case 2:
            results_2 = _a.sent();

            if (results_2 === undefined) {
              return [2
              /*return*/
              ];
            }

            values_1 = results_2.map(function (result) {
              return result.value;
            });

            if (results_2.every(function (result) {
              return result.done;
            })) {
              return [2
              /*return*/
              , values_1];
            }

            return [4
            /*yield*/
            , push(values_1.slice())];

          case 3:
            _a.sent();

            return [4
            /*yield*/
            , Promise.all(iters.map(function (iter, i) {
              return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      if (results_2[i].done) {
                        return [2
                        /*return*/
                        , results_2[i].value];
                      }

                      _a.label = 1;

                    case 1:
                      if (!!stopped) return [3
                      /*break*/
                      , 5];
                      return [4
                      /*yield*/
                      , Promise.race([stop, iter.next()])];

                    case 2:
                      result = _a.sent();
                      if (!(result !== undefined)) return [3
                      /*break*/
                      , 4];

                      if (result.done) {
                        return [2
                        /*return*/
                        , result.value];
                      }

                      values_1[i] = result.value;
                      return [4
                      /*yield*/
                      , push(values_1.slice())];

                    case 3:
                      _a.sent();

                      _a.label = 4;

                    case 4:
                      return [3
                      /*break*/
                      , 1];

                    case 5:
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }))];

          case 4:
            return [2
            /*return*/
            , _a.sent()];

          case 5:
            stop();
            return [4
            /*yield*/
            , Promise.all(iters.map(function (iter) {
              return iter.return && iter.return();
            }))];

          case 6:
            _a.sent();

            return [7
            /*endfinally*/
            ];

          case 7:
            return [2
            /*return*/
            ];
        }
      });
    });
  });
}
},{}],"node_modules/event-target-shim/dist/event-target-shim.js":[function(require,module,exports) {
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */

/**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */

var privateData = new WeakMap();
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */

var wrappers = new WeakMap();
/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */

function pd(event) {
  var retv = privateData.get(event);
  console.assert(retv != null, "'this' is expected an Event object, but got", event);
  return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */


function setCancelFlag(data) {
  if (data.passiveListener != null) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
      console.error("Unable to preventDefault inside passive event listener invocation.", data.passiveListener);
    }

    return;
  }

  if (!data.event.cancelable) {
    return;
  }

  data.canceled = true;

  if (typeof data.event.preventDefault === "function") {
    data.event.preventDefault();
  }
}
/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */

/**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */


function Event(eventTarget, event) {
  privateData.set(this, {
    eventTarget: eventTarget,
    event: event,
    eventPhase: 2,
    currentTarget: eventTarget,
    canceled: false,
    stopped: false,
    immediateStopped: false,
    passiveListener: null,
    timeStamp: event.timeStamp || Date.now()
  }); // https://heycam.github.io/webidl/#Unforgeable

  Object.defineProperty(this, "isTrusted", {
    value: false,
    enumerable: true
  }); // Define accessors

  var keys = Object.keys(event);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];

    if (!(key in this)) {
      Object.defineProperty(this, key, defineRedirectDescriptor(key));
    }
  }
} // Should be enumerable, but class methods are not enumerable.


Event.prototype = {
  /**
   * The type of this event.
   * @type {string}
   */
  get type() {
    return pd(this).event.type;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get target() {
    return pd(this).eventTarget;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get currentTarget() {
    return pd(this).currentTarget;
  },

  /**
   * @returns {EventTarget[]} The composed path of this event.
   */
  composedPath: function () {
    var currentTarget = pd(this).currentTarget;

    if (currentTarget == null) {
      return [];
    }

    return [currentTarget];
  },

  /**
   * Constant of NONE.
   * @type {number}
   */
  get NONE() {
    return 0;
  },

  /**
   * Constant of CAPTURING_PHASE.
   * @type {number}
   */
  get CAPTURING_PHASE() {
    return 1;
  },

  /**
   * Constant of AT_TARGET.
   * @type {number}
   */
  get AT_TARGET() {
    return 2;
  },

  /**
   * Constant of BUBBLING_PHASE.
   * @type {number}
   */
  get BUBBLING_PHASE() {
    return 3;
  },

  /**
   * The target of this event.
   * @type {number}
   */
  get eventPhase() {
    return pd(this).eventPhase;
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopPropagation: function () {
    var data = pd(this);
    data.stopped = true;

    if (typeof data.event.stopPropagation === "function") {
      data.event.stopPropagation();
    }
  },

  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopImmediatePropagation: function () {
    var data = pd(this);
    data.stopped = true;
    data.immediateStopped = true;

    if (typeof data.event.stopImmediatePropagation === "function") {
      data.event.stopImmediatePropagation();
    }
  },

  /**
   * The flag to be bubbling.
   * @type {boolean}
   */
  get bubbles() {
    return Boolean(pd(this).event.bubbles);
  },

  /**
   * The flag to be cancelable.
   * @type {boolean}
   */
  get cancelable() {
    return Boolean(pd(this).event.cancelable);
  },

  /**
   * Cancel this event.
   * @returns {void}
   */
  preventDefault: function () {
    setCancelFlag(pd(this));
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   */
  get defaultPrevented() {
    return pd(this).canceled;
  },

  /**
   * The flag to be composed.
   * @type {boolean}
   */
  get composed() {
    return Boolean(pd(this).event.composed);
  },

  /**
   * The unix time of this event.
   * @type {number}
   */
  get timeStamp() {
    return pd(this).timeStamp;
  },

  /**
   * The target of this event.
   * @type {EventTarget}
   * @deprecated
   */
  get srcElement() {
    return pd(this).eventTarget;
  },

  /**
   * The flag to stop event bubbling.
   * @type {boolean}
   * @deprecated
   */
  get cancelBubble() {
    return pd(this).stopped;
  },

  set cancelBubble(value) {
    if (!value) {
      return;
    }

    var data = pd(this);
    data.stopped = true;

    if (typeof data.event.cancelBubble === "boolean") {
      data.event.cancelBubble = true;
    }
  },

  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   * @deprecated
   */
  get returnValue() {
    return !pd(this).canceled;
  },

  set returnValue(value) {
    if (!value) {
      setCancelFlag(pd(this));
    }
  },

  /**
   * Initialize this event object. But do nothing under event dispatching.
   * @param {string} type The event type.
   * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
   * @param {boolean} [cancelable=false] The flag to be possible to cancel.
   * @deprecated
   */
  initEvent: function () {// Do nothing.
  }
}; // `constructor` is not enumerable.

Object.defineProperty(Event.prototype, "constructor", {
  value: Event,
  configurable: true,
  writable: true
}); // Ensure `event instanceof window.Event` is `true`.

if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
  Object.setPrototypeOf(Event.prototype, window.Event.prototype); // Make association for wrappers.

  wrappers.set(window.Event.prototype, Event);
}
/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */


function defineRedirectDescriptor(key) {
  return {
    get: function () {
      return pd(this).event[key];
    },
    set: function (value) {
      pd(this).event[key] = value;
    },
    configurable: true,
    enumerable: true
  };
}
/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */


function defineCallDescriptor(key) {
  return {
    value: function () {
      var event = pd(this).event;
      return event[key].apply(event, arguments);
    },
    configurable: true,
    enumerable: true
  };
}
/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */


function defineWrapper(BaseEvent, proto) {
  var keys = Object.keys(proto);

  if (keys.length === 0) {
    return BaseEvent;
  }
  /** CustomEvent */


  function CustomEvent(eventTarget, event) {
    BaseEvent.call(this, eventTarget, event);
  }

  CustomEvent.prototype = Object.create(BaseEvent.prototype, {
    constructor: {
      value: CustomEvent,
      configurable: true,
      writable: true
    }
  }); // Define accessors.

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];

    if (!(key in BaseEvent.prototype)) {
      var descriptor = Object.getOwnPropertyDescriptor(proto, key);
      var isFunc = typeof descriptor.value === "function";
      Object.defineProperty(CustomEvent.prototype, key, isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key));
    }
  }

  return CustomEvent;
}
/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */


function getWrapper(proto) {
  if (proto == null || proto === Object.prototype) {
    return Event;
  }

  var wrapper = wrappers.get(proto);

  if (wrapper == null) {
    wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
    wrappers.set(proto, wrapper);
  }

  return wrapper;
}
/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */


function wrapEvent(eventTarget, event) {
  var Wrapper = getWrapper(Object.getPrototypeOf(event));
  return new Wrapper(eventTarget, event);
}
/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */


function isStopped(event) {
  return pd(event).immediateStopped;
}
/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */


function setEventPhase(event, eventPhase) {
  pd(event).eventPhase = eventPhase;
}
/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */


function setCurrentTarget(event, currentTarget) {
  pd(event).currentTarget = currentTarget;
}
/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */


function setPassiveListener(event, passiveListener) {
  pd(event).passiveListener = passiveListener;
}
/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */

/**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */


var listenersMap = new WeakMap(); // Listener types

var CAPTURE = 1;
var BUBBLE = 2;
var ATTRIBUTE = 3;
/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */

function isObject(x) {
  return x !== null && _typeof(x) === "object"; //eslint-disable-line no-restricted-syntax
}
/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */


function getListeners(eventTarget) {
  var listeners = listenersMap.get(eventTarget);

  if (listeners == null) {
    throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  }

  return listeners;
}
/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */


function defineEventAttributeDescriptor(eventName) {
  return {
    get: function () {
      var listeners = getListeners(this);
      var node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          return node.listener;
        }

        node = node.next;
      }

      return null;
    },
    set: function (listener) {
      if (typeof listener !== "function" && !isObject(listener)) {
        listener = null; // eslint-disable-line no-param-reassign
      }

      var listeners = getListeners(this); // Traverse to the tail while removing old value.

      var prev = null;
      var node = listeners.get(eventName);

      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          // Remove old value.
          if (prev !== null) {
            prev.next = node.next;
          } else if (node.next !== null) {
            listeners.set(eventName, node.next);
          } else {
            listeners.delete(eventName);
          }
        } else {
          prev = node;
        }

        node = node.next;
      } // Add new value.


      if (listener !== null) {
        var newNode = {
          listener: listener,
          listenerType: ATTRIBUTE,
          passive: false,
          once: false,
          next: null
        };

        if (prev === null) {
          listeners.set(eventName, newNode);
        } else {
          prev.next = newNode;
        }
      }
    },
    configurable: true,
    enumerable: true
  };
}
/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */


function defineEventAttribute(eventTargetPrototype, eventName) {
  Object.defineProperty(eventTargetPrototype, "on".concat(eventName), defineEventAttributeDescriptor(eventName));
}
/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */


function defineCustomEventTarget(eventNames) {
  /** CustomEventTarget */
  function CustomEventTarget() {
    EventTarget.call(this);
  }

  CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
    constructor: {
      value: CustomEventTarget,
      configurable: true,
      writable: true
    }
  });

  for (var i = 0; i < eventNames.length; ++i) {
    defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
  }

  return CustomEventTarget;
}
/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */


function EventTarget() {
  /*eslint-disable consistent-return */
  if (this instanceof EventTarget) {
    listenersMap.set(this, new Map());
    return;
  }

  if (arguments.length === 1 && Array.isArray(arguments[0])) {
    return defineCustomEventTarget(arguments[0]);
  }

  if (arguments.length > 0) {
    var types = new Array(arguments.length);

    for (var i = 0; i < arguments.length; ++i) {
      types[i] = arguments[i];
    }

    return defineCustomEventTarget(types);
  }

  throw new TypeError("Cannot call a class as a function");
  /*eslint-enable consistent-return */
} // Should be enumerable, but class methods are not enumerable.


EventTarget.prototype = {
  /**
   * Add a given listener to this event target.
   * @param {string} eventName The event name to add.
   * @param {Function} listener The listener to add.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  addEventListener: function (eventName, listener, options) {
    if (listener == null) {
      return;
    }

    if (typeof listener !== "function" && !isObject(listener)) {
      throw new TypeError("'listener' should be a function or an object.");
    }

    var listeners = getListeners(this);
    var optionsIsObj = isObject(options);
    var capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
    var listenerType = capture ? CAPTURE : BUBBLE;
    var newNode = {
      listener: listener,
      listenerType: listenerType,
      passive: optionsIsObj && Boolean(options.passive),
      once: optionsIsObj && Boolean(options.once),
      next: null
    }; // Set it as the first node if the first node is null.

    var node = listeners.get(eventName);

    if (node === undefined) {
      listeners.set(eventName, newNode);
      return;
    } // Traverse to the tail while checking duplication..


    var prev = null;

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        // Should ignore duplication.
        return;
      }

      prev = node;
      node = node.next;
    } // Add it.


    prev.next = newNode;
  },

  /**
   * Remove a given listener from this event target.
   * @param {string} eventName The event name to remove.
   * @param {Function} listener The listener to remove.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  removeEventListener: function (eventName, listener, options) {
    if (listener == null) {
      return;
    }

    var listeners = getListeners(this);
    var capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
    var listenerType = capture ? CAPTURE : BUBBLE;
    var prev = null;
    var node = listeners.get(eventName);

    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }

        return;
      }

      prev = node;
      node = node.next;
    }
  },

  /**
   * Dispatch a given event.
   * @param {Event|{type:string}} event The event to dispatch.
   * @returns {boolean} `false` if canceled.
   */
  dispatchEvent: function (event) {
    if (event == null || typeof event.type !== "string") {
      throw new TypeError('"event.type" should be a string.');
    } // If listeners aren't registered, terminate.


    var listeners = getListeners(this);
    var eventName = event.type;
    var node = listeners.get(eventName);

    if (node == null) {
      return true;
    } // Since we cannot rewrite several properties, so wrap object.


    var wrappedEvent = wrapEvent(this, event); // This doesn't process capturing phase and bubbling phase.
    // This isn't participating in a tree.

    var prev = null;

    while (node != null) {
      // Remove this listener if it's once
      if (node.once) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }
      } else {
        prev = node;
      } // Call this listener


      setPassiveListener(wrappedEvent, node.passive ? node.listener : null);

      if (typeof node.listener === "function") {
        try {
          node.listener.call(this, wrappedEvent);
        } catch (err) {
          if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error(err);
          }
        }
      } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") {
        node.listener.handleEvent(wrappedEvent);
      } // Break if `event.stopImmediatePropagation` was called.


      if (isStopped(wrappedEvent)) {
        break;
      }

      node = node.next;
    }

    setPassiveListener(wrappedEvent, null);
    setEventPhase(wrappedEvent, 0);
    setCurrentTarget(wrappedEvent, null);
    return !wrappedEvent.defaultPrevented;
  }
}; // `constructor` is not enumerable.

Object.defineProperty(EventTarget.prototype, "constructor", {
  value: EventTarget,
  configurable: true,
  writable: true
}); // Ensure `eventTarget instanceof window.EventTarget` is `true`.

if (typeof window !== "undefined" && typeof window.EventTarget !== "undefined") {
  Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}

exports.defineEventAttribute = defineEventAttribute;
exports.EventTarget = EventTarget;
exports.default = EventTarget;
module.exports = EventTarget;
module.exports.EventTarget = module.exports["default"] = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;
},{}],"node_modules/@bikeshaving/crank/esm/pledge-363d33da.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i = isPromiseLike;
exports.P = void 0;

function isPromiseLike(value) {
  return value != null && typeof value.then === "function";
}

function upgrade(value) {
  if (isPromiseLike(value) && !(value instanceof Promise)) {
    return Promise.resolve(value);
  }

  return value;
}
/**
 * A pledge is like a promise, except it runs synchronously if possible.
 */


var Pledge =
/** @class */
function () {
  // TODO: allow value to be a callable function so we can catch errors
  function Pledge(value) {
    var _this = this;

    if (isPromiseLike(value)) {
      this.state = {
        status: "pending",
        promise: Promise.resolve(value)
      };
      value.then(function (value) {
        return _this.state = {
          status: "fulfilled",
          value: value
        };
      }, function (reason) {
        return _this.state = {
          status: "rejected",
          reason: reason
        };
      });
    } else {
      this.state = {
        status: "fulfilled",
        value: value
      };
    }
  }

  Pledge.prototype.then = function (onFulfilled, onRejected) {
    switch (this.state.status) {
      case "fulfilled":
        {
          if (onFulfilled == null) {
            return this.state.value;
          } else {
            return upgrade(onFulfilled(this.state.value));
          }
        }

      case "rejected":
        {
          if (onRejected == null) {
            throw this.state.reason;
          } else {
            return upgrade(onRejected(this.state.reason));
          }
        }

      case "pending":
        {
          return this.state.promise.then(onFulfilled, onRejected);
        }
    }
  };

  Pledge.prototype.catch = function (onRejected) {
    switch (this.state.status) {
      case "fulfilled":
        {
          return this.state.value;
        }

      case "rejected":
        {
          if (onRejected == null) {
            throw this.state.reason;
          } else {
            return upgrade(onRejected(this.state.reason));
          }
        }

      case "pending":
        {
          return this.state.promise.catch(onRejected);
        }
    }
  };

  Pledge.prototype.finally = function (onFinally) {
    switch (this.state.status) {
      case "fulfilled":
        {
          if (onFinally != null) {
            onFinally();
          }

          return this.state.value;
        }

      case "rejected":
        {
          if (onFinally != null) {
            onFinally();
          }

          throw this.state.reason;
        }

      case "pending":
        {
          return this.state.promise.finally(onFinally);
        }
    }
  };

  return Pledge;
}();

exports.P = Pledge;
},{}],"node_modules/@bikeshaving/crank/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearFrame = clearFrame;
exports.createElement = createElement;
exports.isComponentElement = isComponentElement;
exports.isElement = isElement;
exports.isIntrinsicElement = isIntrinsicElement;
exports.isKeyedElement = isKeyedElement;
exports.setFrame = setFrame;
exports.Text = exports.Renderer = exports.Portal = exports.Fragment = exports.Default = exports.Copy = exports.Context = void 0;

var _tslib21ac4f0e = require("./_tslib-21ac4f0e.js");

var _repeater = require("@repeaterjs/repeater");

var _eventTargetShim = require("event-target-shim");

var _pledge363d33da = require("./pledge-363d33da.js");

function normalizeOptions(options) {
  var capture = false;
  var passive;
  var once;

  if (typeof options === "boolean") {
    capture = options;
  } else if (options != null) {
    capture = !!options.capture;
    passive = options.passive;
    once = options.once;
  }

  return {
    capture: capture,
    passive: passive,
    once: once
  };
} // TODO: strongly typed events somehow


var CrankEventTarget =
/** @class */
function (_super) {
  (0, _tslib21ac4f0e._)(CrankEventTarget, _super);

  function CrankEventTarget(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent; // TODO: maybe use a helper class?
    // we need a map from:
    // type -> capture -> listener record
    // for efficient querying

    _this.listeners = [];
    _this._delegates = new Set();
    return _this;
  }

  Object.defineProperty(CrankEventTarget.prototype, "delegates", {
    get: function () {
      return this._delegates;
    },
    set: function (delegates) {
      var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

      var _this = this;

      var removed = new Set(Array.from(this._delegates).filter(function (d) {
        return !delegates.has(d);
      }));
      var added = new Set(Array.from(delegates).filter(function (d) {
        return !_this._delegates.has(d);
      }));

      try {
        for (var removed_1 = (0, _tslib21ac4f0e.a)(removed), removed_1_1 = removed_1.next(); !removed_1_1.done; removed_1_1 = removed_1.next()) {
          var delegate = removed_1_1.value;

          try {
            for (var _e = (e_2 = void 0, (0, _tslib21ac4f0e.a)(this.listeners)), _f = _e.next(); !_f.done; _f = _e.next()) {
              var listener = _f.value;
              delegate.removeEventListener(listener.type, listener.callback, listener.options);
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (removed_1_1 && !removed_1_1.done && (_a = removed_1.return)) _a.call(removed_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      try {
        for (var added_1 = (0, _tslib21ac4f0e.a)(added), added_1_1 = added_1.next(); !added_1_1.done; added_1_1 = added_1.next()) {
          var delegate = added_1_1.value;

          try {
            for (var _g = (e_4 = void 0, (0, _tslib21ac4f0e.a)(this.listeners)), _h = _g.next(); !_h.done; _h = _g.next()) {
              var listener = _h.value;
              delegate.addEventListener(listener.type, listener.callback, listener.options);
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (added_1_1 && !added_1_1.done && (_c = added_1.return)) _c.call(added_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      this._delegates = delegates;
    },
    enumerable: true,
    configurable: true
  });

  CrankEventTarget.prototype.addEventListener = function (type, callback, options) {
    var e_5, _a;

    if (callback == null) {
      return;
    } else if (typeof callback === "object") {
      throw new Error("Listener objects are not supported");
    }

    options = normalizeOptions(options);
    var record = {
      type: type,
      callback: callback,
      options: options
    };

    if (options.once) {
      var self_1 = this;

      record.callback = function (ev) {
        var result = callback.call(this, ev);
        self_1.removeEventListener(record.type, record.callback, record.options);
        return result;
      };
    }

    if (record.type.slice(0, 6) !== "crank.") {
      var idx = this.listeners.findIndex(function (record1) {
        return record.type === record1.type && record.callback === record1.callback && record.options.capture === record1.options.capture;
      });

      if (idx <= -1) {
        this.listeners.push(record);
      }
    }

    try {
      for (var _b = (0, _tslib21ac4f0e.a)(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
        var delegate = _c.value;
        delegate.addEventListener(type, callback, options);
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    return _super.prototype.addEventListener.call(this, type, callback, options);
  };

  CrankEventTarget.prototype.removeEventListener = function (type, callback, options) {
    var e_6, _a;

    if (callback == null) {
      return;
    }

    var capture = typeof options === "boolean" ? options : !!(options && options.capture);
    var idx = this.listeners.findIndex(function (record) {
      return record.type === type && record.callback === callback && record.options.capture === capture;
    });
    var record = this.listeners[idx];

    if (record !== undefined) {
      this.listeners.splice(idx, 1);
    }

    try {
      for (var _b = (0, _tslib21ac4f0e.a)(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
        var delegate = _c.value;
        delegate.removeEventListener(type, callback, options);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    return _super.prototype.removeEventListener.call(this, type, callback, options);
  };

  CrankEventTarget.prototype.clearEventListeners = function () {
    var e_7, _a;

    try {
      for (var _b = (0, _tslib21ac4f0e.a)(this.listeners.slice()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var listener = _c.value;
        this.removeEventListener(listener.type, listener.callback, listener.options);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_7) throw e_7.error;
      }
    }
  }; // TODO: ev is any because event-target-shim has a weird dispatchEvent type


  CrankEventTarget.prototype.dispatchEvent = function (ev) {
    var continued = _super.prototype.dispatchEvent.call(this, ev);

    if (continued && ev.bubbles && this.parent !== undefined) {
      // TODO: implement event capturing
      continued = this.parent.dispatchEvent(ev);
    }

    return continued;
  };

  return CrankEventTarget;
}(_eventTargetShim.EventTarget);

function isEventTarget(value) {
  return value != null && typeof value.addEventListener === "function" && typeof value.removeEventListener === "function" && typeof value.dispatchEvent === "function";
}

var _a;

function isIterable(value) {
  return value != null && typeof value[Symbol.iterator] === "function";
}

function isNonStringIterable(value) {
  return typeof value !== "string" && isIterable(value);
}

function isIteratorOrAsyncIterator(value) {
  return value != null && typeof value.next === "function";
} // TODO: rename


var Default = Symbol.for("crank.Default"); // TODO: rename

exports.Default = Default;
var Text = Symbol.for("crank.Text"); // TODO: We use any for symbol tags because typescript support for symbols is weak af.

exports.Text = Text;
var Portal = Symbol.for("crank.Portal");
exports.Portal = Portal;
var Fragment = Symbol.for("crank.Fragment");
exports.Fragment = Fragment;
var Copy = Symbol("crank.Copy");
exports.Copy = Copy;
var ElementSigil = Symbol.for("crank.ElementSigil");

function isElement(value) {
  return value != null && value[ElementSigil];
}

function isIntrinsicElement(value) {
  return isElement(value) && typeof value.tag !== "function";
}

function isComponentElement(value) {
  return isElement(value) && typeof value.tag === "function";
}

function isKeyedElement(value) {
  return isElement(value) && value.key != null;
}

function createElement(tag, props) {
  var _a;

  props = Object.assign({}, props);
  var key = props["crank-key"];

  if (key != null) {
    delete props["crank-key"];
  }

  if (arguments.length > 3) {
    props.children = Array.from(arguments).slice(2);
  } else if (arguments.length > 2) {
    props.children = arguments[2];
  }

  return _a = {}, _a[ElementSigil] = true, _a.tag = tag, _a.props = props, _a.key = key, _a;
}

function toGuest(child) {
  if (child == null || typeof child === "boolean") {
    return undefined;
  } else if (typeof child === "string" || isElement(child)) {
    return child;
  } else {
    return child.toString();
  }
} // TODO: explain what this function does


function chase(fn) {
  var next = function () {};

  return function chaseWrapper() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var result = fn.apply(this, args);
    next(result);

    if ((0, _pledge363d33da.i)(result)) {
      var nextP = new Promise(function (resolve) {
        return next = resolve;
      });
      return Promise.race([result, nextP]);
    }

    return result;
  };
}

var Link =
/** @class */
function () {
  function Link() {}

  Link.prototype.insertBefore = function (newLink, refLink) {
    newLink.nextSibling = refLink;

    if (refLink.previousSibling === undefined) {
      newLink.previousSibling = undefined;
      this.firstChild = newLink;
    } else {
      newLink.previousSibling = refLink.previousSibling;
      refLink.previousSibling.nextSibling = newLink;
    }

    refLink.previousSibling = newLink;
  };

  Link.prototype.insertAfter = function (newLink, refLink) {
    newLink.previousSibling = refLink;

    if (refLink.nextSibling === undefined) {
      newLink.nextSibling = undefined;
      this.lastChild = newLink;
    } else {
      newLink.nextSibling = refLink.nextSibling;
      refLink.nextSibling.previousSibling = newLink;
    }

    refLink.nextSibling = newLink;
  };

  Link.prototype.appendChild = function (link) {
    if (this.lastChild === undefined) {
      this.firstChild = link;
      this.lastChild = link;
      link.previousSibling = undefined;
      link.nextSibling = undefined;
    } else {
      this.insertAfter(link, this.lastChild);
    }
  };

  Link.prototype.removeChild = function (link) {
    if (link.previousSibling === undefined) {
      this.firstChild = link.nextSibling;
    } else {
      link.previousSibling.nextSibling = link.nextSibling;
    }

    if (link.nextSibling === undefined) {
      this.lastChild = link.previousSibling;
    } else {
      link.nextSibling.previousSibling = link.previousSibling;
    }
  };

  Link.prototype.replaceChild = function (newLink, refLink) {
    this.insertBefore(newLink, refLink);
    this.removeChild(refLink);
  };

  return Link;
}();

var Host =
/** @class */
function (_super) {
  (0, _tslib21ac4f0e._)(Host, _super);

  function Host(parent, // TODO: Figure out a way to not have to pass in a renderer
  renderer) {
    var _this = _super.call(this) || this;

    _this.publications = new Set(); // TODO: reduce the number of boolean properties

    _this.updating = false;
    _this.done = false;
    _this.unmounted = false;
    _this.independent = false;
    _this.clock = 0; // TODO: clean up this monster

    _this.updateChildren = chase(function updateChildren(children) {
      var e_1, _a, e_2, _b;

      var _this = this;

      var host = this.firstChild;
      var promises = [];
      var hostsByKey;

      if (children != null) {
        if (!isNonStringIterable(children)) {
          children = [children];
        }

        var _loop_1 = function (child) {
          if (isNonStringIterable(child)) {
            child = createElement(Fragment, null, child);
          }

          var guest = toGuest(child);
          var tag = void 0;
          var key = void 0;
          var isNewHost = false;

          if (isElement(guest)) {
            tag = guest.tag;
            key = guest.key;

            if (hostsByKey !== undefined && hostsByKey.has(key)) {
              // TODO: warn about a duplicate key
              key = undefined;
            }
          }

          if (key != null) {
            var newHost = this_1.hostsByKey && this_1.hostsByKey.get(key);

            if (newHost === undefined) {
              newHost = new Host(this_1, this_1.renderer);
              isNewHost = true;
            } else {
              this_1.hostsByKey.delete(key);

              if (host !== newHost) {
                this_1.removeChild(newHost);
              }
            }

            if (host === undefined) {
              this_1.appendChild(newHost);
            } else if (host !== newHost) {
              if (isKeyedElement(host.guest)) {
                this_1.insertAfter(newHost, host);
              } else {
                this_1.insertBefore(newHost, host);
              }
            }

            host = newHost;
          } else if (host === undefined) {
            host = new Host(this_1, this_1.renderer);
            this_1.appendChild(host);
            isNewHost = true;
          } else if (host.key != null) {
            var newHost = new Host(this_1, this_1.renderer);
            this_1.insertAfter(newHost, host);
            host = newHost;
            isNewHost = true;
          }

          if (tag !== Copy) {
            if (isNewHost || !host.unmounted && host.tag === tag) {
              var updateP = host.update(guest);

              if (updateP !== undefined) {
                promises.push(updateP);
              }
            } else {
              // replace the host with another one
              var clock = host.clock++;
              var newHost_1 = new Host(this_1, this_1.renderer);
              newHost_1.clock = clock;
              var updateP = newHost_1.update(guest);

              if (updateP === undefined) {
                host.unmount();
                this_1.replaceChild(newHost_1, host);
                host.replacedBy = newHost_1;
              } else {
                // TODO: unmount only when the host is ready to be replaced
                host.unmount();
                promises.push(updateP);
                var host1_1 = host;
                updateP.then(function () {
                  if (host1_1.replacedBy === undefined) {
                    _this.replaceChild(newHost_1, host1_1);

                    host1_1.replacedBy = newHost_1;
                  } else if (host1_1.replacedBy.replacedBy === undefined && host1_1.replacedBy.clock < newHost_1.clock) {
                    _this.replaceChild(newHost_1, host1_1.replacedBy);

                    host1_1.replacedBy = newHost_1;
                  }
                });
              }
            }
          }

          if (key !== undefined) {
            if (hostsByKey === undefined) {
              hostsByKey = new Map();
            }

            hostsByKey.set(key, host);
          }

          host = host.nextSibling;
        };

        var this_1 = this;

        try {
          for (var children_1 = (0, _tslib21ac4f0e.a)(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
            var child = children_1_1.value;

            _loop_1(child);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      } // unmounting excess hosts


      while (host !== undefined) {
        if (this.hostsByKey !== undefined && host.key !== undefined) {
          this.hostsByKey.delete(host.key);
        }

        host.unmount();
        var nextSibling = host.nextSibling;
        this.removeChild(host);
        host = nextSibling;
      } // unmounting keyed hosts


      if (this.hostsByKey) {
        try {
          for (var _c = (0, _tslib21ac4f0e.a)(this.hostsByKey.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var host_1 = _d.value; // TODO: implement async unmount for keyed hosts

            host_1.unmount();
            this.removeChild(host_1);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }

      this.hostsByKey = hostsByKey; // TODO: can we move this somewhere else

      if (promises.length) {
        return Promise.all(promises).then(function () {
          return void _this.commit();
        }); // void :(
      } else {
        this.commit();
      }
    });
    _this.parent = parent;
    _this.renderer = renderer;
    return _this;
  }

  Object.defineProperty(Host.prototype, "tag", {
    // TODO: flatten these instead of storing guest
    get: function () {
      return isElement(this.guest) ? this.guest.tag : undefined;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Host.prototype, "key", {
    get: function () {
      return isElement(this.guest) ? this.guest.key : undefined;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Host.prototype, "props", {
    get: function () {
      return isElement(this.guest) ? this.guest.props : undefined;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Host.prototype, "childNodes", {
    get: function () {
      if (this.cachedChildNodes !== undefined) {
        return this.cachedChildNodes;
      }

      var buffer;
      var childNodes = [];

      for (var host = this.firstChild; host !== undefined; host = host.nextSibling) {
        if (typeof host.node === "string") {
          buffer = (buffer || "") + host.node;
        } else if (host.tag !== Portal) {
          if (buffer !== undefined) {
            childNodes.push(buffer);
            buffer = undefined;
          }

          if (host.node === undefined) {
            childNodes.push.apply(childNodes, (0, _tslib21ac4f0e.b)(host.childNodes));
          } else {
            childNodes.push(host.node);
          }
        }
      }

      if (buffer !== undefined) {
        childNodes.push(buffer);
      }

      if (this.ctx !== undefined && typeof this.tag === "function") {
        // TODO: filter predicate type narrowing is not working
        this.ctx.delegates = new Set(childNodes.filter(isEventTarget));
      }

      this.cachedChildNodes = childNodes;
      return childNodes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Host.prototype, "childNodeOrNodes", {
    get: function () {
      if (this.childNodes.length > 1) {
        return this.childNodes;
      }

      return this.childNodes[0];
    },
    enumerable: true,
    configurable: true
  });

  Host.prototype.update = function (guest) {
    this.updating = true;

    if (this.tag === undefined) {
      if (isElement(guest)) {
        this.ctx = new Context(this, this.parent && this.parent.ctx);

        if (typeof guest.tag !== "function") {
          this.intrinsic = this.renderer.intrinsicFor(guest.tag);
        }
      }
    }

    this.guest = guest;
    return this.refresh();
  };

  Host.prototype.step = function (next) {
    var _this = this;

    if (this.ctx === undefined) {
      throw new Error("Missing context");
    } else if (!isComponentElement(this.guest)) {
      throw new Error("Non-component element as guest");
    }

    if (this.iterator === undefined) {
      this.ctx.clearEventListeners(); // TODO: can we have pledges take an executor to reduce error duplication

      var value = void 0;

      try {
        value = this.guest.tag.call(this.ctx, this.guest.props);

        if ((0, _pledge363d33da.i)(value)) {
          value = Promise.resolve(value).catch(function (err) {
            if (_this.parent === undefined) {
              throw err;
            }

            _this.parent.catch(err);

            return undefined;
          });
          return value;
        }
      } catch (err) {
        if (this.parent === undefined) {
          throw err;
        }

        this.parent.catch(err);
        return;
      }

      if (isIteratorOrAsyncIterator(value)) {
        this.iterator = value;
      } else {
        return value;
      }
    } else if (this.done) {
      return;
    }

    var iteration; // TODO: figure out if we can have pledges take a callback to reduce duplication when catching events

    try {
      iteration = this.iterator.next(next);

      if ((0, _pledge363d33da.i)(iteration)) {
        iteration = iteration.catch(function (err) {
          if (_this.parent === undefined) {
            throw err;
          }

          _this.parent.catch(err);

          return undefined;
        });
      }
    } catch (err) {
      if (this.parent === undefined) {
        throw err;
      }

      this.parent.catch(err);
      return;
    }

    if ((0, _pledge363d33da.i)(iteration)) {
      this.independent = true;
      return iteration.then(function (iteration) {
        var updateP = new _pledge363d33da.P(iteration.value).then(function (child) {
          return _this.updateChildren(child);
        });
        var next = new _pledge363d33da.P(updateP).then(function () {
          return _this.childNodeOrNodes;
        });

        if (iteration.done) {
          _this.done = true;
        } else if (!_this.done) {
          _this.pending = new Promise(function (resolve) {
            return setFrame(resolve);
          }).then(function () {
            return _this.step(next);
          });
        }

        return updateP;
      });
    }

    if (iteration.done) {
      this.done = true;
    }

    return new _pledge363d33da.P(iteration.value).then(function (child) {
      return _this.updateChildren(child);
    });
  };

  Host.prototype.run = function () {
    var _this = this;

    if (this.pending === undefined) {
      var next = this.iterator === undefined ? undefined : this.childNodeOrNodes;
      var step = this.step(next);

      if (this.iterator === undefined) {
        if ((0, _pledge363d33da.i)(step)) {
          this.pending = Promise.resolve(step).finally(function () {
            _this.pending = _this.enqueued;
            _this.enqueued = undefined;
          });
          return Promise.resolve(step).then(function (child) {
            return _this.updateChildren(child);
          });
        } else {
          return this.updateChildren(step);
        }
      } else if ((0, _pledge363d33da.i)(step)) {
        this.pending = Promise.resolve(step);

        if (!this.independent) {
          this.pending.finally(function () {
            _this.pending = _this.enqueued;
            _this.enqueued = undefined;
          });
        }
      }

      return this.pending;
    } else if (this.independent) {
      return this.pending;
    } else if (this.enqueued === undefined) {
      this.enqueued = this.pending.then(function () {
        return _this.step(_this.childNodeOrNodes);
      }, function () {
        return _this.step(_this.childNodeOrNodes);
      });

      if (this.iterator === undefined) {
        this.enqueued = this.enqueued.then(function (child) {
          return _this.updateChildren(child);
        });
      }

      this.enqueued.finally(function () {
        _this.pending = _this.enqueued;
        _this.enqueued = undefined;
      });
    }

    return this.enqueued;
  };

  Host.prototype.refresh = function () {
    var e_3, _a;

    if (this.unmounted) {
      return;
    } else if (this.tag !== undefined) {
      try {
        for (var _b = (0, _tslib21ac4f0e.a)(this.publications), _c = _b.next(); !_c.done; _c = _b.next()) {
          var pub = _c.value;
          pub.push(this.props);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      if (typeof this.tag === "function") {
        return this.run();
      } else {
        return this.updateChildren(this.props && this.props.children);
      }
    } else if (typeof this.guest === "string") {
      this.node = this.renderer.text(this.guest);
    } else {
      this.node = undefined;
    }
  };

  Host.prototype.commit = function () {
    this.cachedChildNodes = undefined;

    if (isElement(this.guest)) {
      if (typeof this.guest.tag === "function") {
        if (!this.updating && this.parent !== undefined) {
          // TODO: batch this per microtask
          this.parent.commit();
        }
      } else {
        if (this.committer === undefined && this.intrinsic !== undefined && this.ctx !== undefined) {
          var value = this.intrinsic.call(this.ctx, this.guest.props);

          if (isIteratorOrAsyncIterator(value)) {
            this.committer = value;
          } else {
            this.node = value;
          }
        }

        if (this.committer !== undefined) {
          var iteration = this.committer.next();
          this.node = iteration.value;

          if (iteration.done) {
            this.committer = undefined;
            this.intrinsic = undefined;
          }
        }

        if (this.node == null && this.parent !== undefined) {
          this.parent.commit();
        }
      }
    }

    this.updating = false;
  };

  Host.prototype.catch = function (reason) {
    var _this = this;

    if (this.iterator === undefined || this.iterator.throw === undefined || this.done) {
      if (this.parent === undefined) {
        throw reason;
      }

      this.parent.catch(reason);
    } else {
      try {
        // TODO: catch async errors too
        var iteration = this.iterator.throw(reason);
        new _pledge363d33da.P(iteration).then(function (iteration) {
          if (iteration.done) {
            _this.done = true;
          }

          _this.updateChildren(iteration.value);
        });
      } catch (err) {
        if (this.parent === undefined) {
          throw err;
        }

        this.parent.catch(err);
      }
    }
  };

  Host.prototype.unmount = function () {
    var e_4, _a;

    try {
      for (var _b = (0, _tslib21ac4f0e.a)(this.publications), _c = _b.next(); !_c.done; _c = _b.next()) {
        var pub = _c.value;
        pub.stop();
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_4) throw e_4.error;
      }
    } // TODO: await the return if the host is keyed and commit the parent


    if (!this.done) {
      if (this.iterator !== undefined && this.iterator.return) {
        this.iterator.return();
      }

      if (this.committer && this.committer.return) {
        this.committer.return();
      }
    }

    this.unmounted = true;
    this.committer = undefined;
    this.iterator = undefined;
    this.updating = false;
    this.unmountChildren();
  };

  Host.prototype.unmountChildren = function () {
    var host = this.firstChild;

    while (host !== undefined) {
      // TODO: catch errors
      host.unmount();
      host = host.nextSibling;
    }
  };

  return Host;
}(Link);

var hosts = new WeakMap();

var Context =
/** @class */
function (_super) {
  (0, _tslib21ac4f0e._)(Context, _super);

  function Context(host, parent) {
    var _this = _super.call(this, parent) || this;

    hosts.set(_this, host);
    return _this;
  }

  Object.defineProperty(Context.prototype, "node", {
    get: function () {
      return hosts.get(this).node;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "childNodes", {
    get: function () {
      return hosts.get(this).childNodes;
    },
    enumerable: true,
    configurable: true
  }); // TODO: throw an error if props are pulled multiple times without a yield

  Context.prototype[Symbol.iterator] = function () {
    var host;
    return (0, _tslib21ac4f0e.c)(this, function (_a) {
      switch (_a.label) {
        case 0:
          host = hosts.get(this);
          _a.label = 1;

        case 1:
          return [4
          /*yield*/
          , host.props];

        case 2:
          _a.sent();

          return [3
          /*break*/
          , 1];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  }; // TODO: throw an error if props are pulled multiple times without a yield


  Context.prototype[Symbol.asyncIterator] = function () {
    var _this = this;

    var host = hosts.get(this);
    return new _repeater.Repeater(function (push, stop) {
      return (0, _tslib21ac4f0e.d)(_this, void 0, void 0, function () {
        var pub;
        return (0, _tslib21ac4f0e.c)(this, function (_a) {
          switch (_a.label) {
            case 0:
              push(host.props);
              pub = {
                push: push,
                stop: stop
              };
              host.publications.add(pub);
              return [4
              /*yield*/
              , stop];

            case 1:
              _a.sent();

              host.publications.delete(pub);
              return [2
              /*return*/
              ];
          }
        });
      });
    }, new _repeater.SlidingBuffer(1));
  }; // TODO: throw or warn if called on an unmounted component?


  Context.prototype.refresh = function () {
    var host = hosts.get(this);
    return host.refresh();
  };

  return Context;
}(CrankEventTarget);

exports.Context = Context;
var defaultEnv = (_a = {}, _a[Default] = function (tag) {
  throw new Error("Environment did not provide an intrinsic for " + tag);
}, _a[Portal] = function () {
  throw new Error("Environment did not provide an intrinsic for Portal");
}, _a[Fragment] = function () {
  return undefined; // void :(
}, _a);

function setFrame(callback) {
  if (requestAnimationFrame !== undefined) {
    return requestAnimationFrame(callback);
  } else if (setImmediate !== undefined) {
    return setImmediate(function () {
      return callback(Date.now());
    });
  } else {
    return setTimeout(function () {
      return callback(Date.now());
    });
  }
}

function clearFrame(id) {
  if (requestAnimationFrame !== undefined) {
    cancelAnimationFrame(id);
  } else if (setImmediate !== undefined) {
    clearImmediate(id);
  } else {
    clearTimeout(id);
  }
}

var Renderer =
/** @class */
function () {
  function Renderer(env) {
    this.cache = new WeakMap();
    this.env = (0, _tslib21ac4f0e.f)({}, defaultEnv);

    if (env) {
      this.extend(env);
    }
  }

  Renderer.prototype.getOrCreateHost = function (root) {
    var host;

    if (root !== undefined) {
      host = this.cache.get(root);
    }

    if (host === undefined) {
      host = new Host(undefined, this);

      if (root !== undefined) {
        this.cache.set(root, host);
      }
    }

    return host;
  };

  Renderer.prototype.extend = function (env) {
    var e_5, _a;

    if (env[Default] != null) {
      this.env[Default] = env[Default];
    }

    if (env[Portal] != null) {
      this.env[Portal] = env[Portal];
    }

    try {
      for (var _b = (0, _tslib21ac4f0e.a)(Object.entries(env)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = (0, _tslib21ac4f0e.e)(_c.value, 2),
            tag = _d[0],
            value = _d[1];

        if (value != null) {
          this.env[tag] = value;
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }
  };

  Renderer.prototype.intrinsicFor = function (tag) {
    if (this.env[tag]) {
      return this.env[tag];
    } else if (typeof tag === "string") {
      return this.env[Default](tag);
    } else {
      throw new Error("Unknown tag " + tag.toString());
    }
  };

  Renderer.prototype.text = function (text) {
    if (this.env[Text] !== undefined) {
      // TODO: remove non-null assertion when typescript gets its shit together with symbols
      return this.env[Text](text);
    }

    return text;
  };

  Renderer.prototype.render = function (child, root) {
    if (!isElement(child) || child.tag !== Portal) {
      child = createElement(Portal, {
        root: root
      }, child);
    }

    var host = this.getOrCreateHost(root);
    var p;

    if (child == null) {
      p = host.unmount();
    } else {
      p = host.update(toGuest(child));
    }

    return new _pledge363d33da.P(p).then(function () {
      return host.ctx;
    });
  };

  return Renderer;
}();

exports.Renderer = Renderer;
},{"./_tslib-21ac4f0e.js":"node_modules/@bikeshaving/crank/esm/_tslib-21ac4f0e.js","@repeaterjs/repeater":"node_modules/@repeaterjs/repeater/lib/repeater.esm.js","event-target-shim":"node_modules/event-target-shim/dist/event-target-shim.js","./pledge-363d33da.js":"node_modules/@bikeshaving/crank/esm/pledge-363d33da.js"}],"node_modules/@bikeshaving/crank/esm/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderer = exports.env = exports.DOMRenderer = void 0;

var _tslib21ac4f0e = require("./_tslib-21ac4f0e.js");

require("@repeaterjs/repeater");

require("event-target-shim");

var _index = require("./index.js");

require("./pledge-363d33da.js");

var _a;

function updateProps(el, props, newProps) {
  for (var name_1 in Object.assign({}, props, newProps)) {
    // TODO: throw an error if event props are found
    if (name_1 === "children") {
      continue;
    }

    var value = props[name_1];
    var newValue = newProps[name_1];

    if (name_1 === "style") {
      if (newValue == null) {
        el.removeAttribute("style");
      } else if (typeof newValue === "string") {
        el.style.cssText = newValue;
      } else {
        for (var styleName in Object.assign({}, value, newValue)) {
          var styleValue = value && value[styleName];
          var newStyleValue = newValue && newValue[styleName];

          if (newStyleValue == null) {
            el.style.removeProperty(styleName);
          } else if (styleValue !== newStyleValue) {
            el.style.setProperty(styleName, newStyleValue);
          }
        }
      }
    } else if (name_1 in el) {
      el[name_1] = newValue;
    } else {
      if (newValue === true) {
        el.setAttribute(name_1, "");
      } else if (newValue === false || newValue == null) {
        el.removeAttribute(name_1);
      } else {
        el.setAttribute(name_1, newValue);
      }
    }
  }
} // TODO: improve this algorithm
// https://stackoverflow.com/questions/59418120/what-is-the-most-efficient-way-to-update-the-childnodes-of-a-dom-node-with-an-ar


function updateChildren(el, children) {
  var e_1, _a, e_2, _b;

  if (el.childNodes.length === 0) {
    var fragment = document.createDocumentFragment();

    try {
      for (var children_1 = (0, _tslib21ac4f0e.a)(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
        var child = children_1_1.value;

        if (typeof child === "string") {
          child = document.createTextNode(child);
        }

        fragment.appendChild(child);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    el.appendChild(fragment);
    return;
  }

  var oldChild = el.firstChild;

  try {
    for (var children_2 = (0, _tslib21ac4f0e.a)(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
      var newChild = children_2_1.value;

      if (oldChild === null) {
        el.appendChild(typeof newChild === "string" ? document.createTextNode(newChild) : newChild);
      } else if (typeof newChild === "string") {
        if (oldChild.nodeType === Node.TEXT_NODE) {
          if (oldChild.nodeValue !== newChild) {
            oldChild.nodeValue = newChild;
          }

          oldChild = oldChild.nextSibling;
        } else {
          el.insertBefore(document.createTextNode(newChild), oldChild);
        }
      } else if (oldChild !== newChild) {
        el.insertBefore(newChild, oldChild);
      } else {
        oldChild = oldChild.nextSibling;
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (children_2_1 && !children_2_1.done && (_b = children_2.return)) _b.call(children_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  while (oldChild !== null) {
    var nextSibling = oldChild.nextSibling;
    el.removeChild(oldChild);
    oldChild = nextSibling;
  }
}

var env = (_a = {}, _a[_index.Default] = function (tag) {
  return function defaultDOM() {
    var node, props, prevChildNodes, _a, _b, props1, e_3_1;

    var e_3, _c;

    return (0, _tslib21ac4f0e.c)(this, function (_d) {
      switch (_d.label) {
        case 0:
          node = document.createElement(tag);
          props = {};
          prevChildNodes = [];
          _d.label = 1;

        case 1:
          _d.trys.push([1, 6, 7, 8]);

          _a = (0, _tslib21ac4f0e.a)(this), _b = _a.next();
          _d.label = 2;

        case 2:
          if (!!_b.done) return [3
          /*break*/
          , 5];
          props1 = _b.value;
          updateProps(node, props, props1);

          if (!("innerHTML" in props1) && (this.childNodes.length > 0 || prevChildNodes.length > 0)) {
            updateChildren(node, this.childNodes);
            prevChildNodes = this.childNodes;
          }

          return [4
          /*yield*/
          , node];

        case 3:
          _d.sent();

          props = props1;
          _d.label = 4;

        case 4:
          _b = _a.next();
          return [3
          /*break*/
          , 2];

        case 5:
          return [3
          /*break*/
          , 8];

        case 6:
          e_3_1 = _d.sent();
          e_3 = {
            error: e_3_1
          };
          return [3
          /*break*/
          , 8];

        case 7:
          try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
          } finally {
            if (e_3) throw e_3.error;
          }

          return [7
          /*endfinally*/
          ];

        case 8:
          return [2
          /*return*/
          ];
      }
    });
  };
}, _a[_index.Portal] = function (_a) {
  var _b, _c, newRoot, e_4_1;

  var e_4, _d;

  var root = _a.root;
  return (0, _tslib21ac4f0e.c)(this, function (_e) {
    switch (_e.label) {
      case 0:
        if (root == null) {
          throw new TypeError("Portal element is missing root node");
        }

        _e.label = 1;

      case 1:
        _e.trys.push([1,, 10, 11]);

        _e.label = 2;

      case 2:
        _e.trys.push([2, 7, 8, 9]);

        _b = (0, _tslib21ac4f0e.a)(this), _c = _b.next();
        _e.label = 3;

      case 3:
        if (!!_c.done) return [3
        /*break*/
        , 6];
        newRoot = _c.value.root;

        if (newRoot == null) {
          throw new TypeError("Portal element is missing root node");
        }

        if (root !== newRoot) {
          updateChildren(root, []);
          root = newRoot;
        }

        updateChildren(root, this.childNodes);
        return [4
        /*yield*/
        , root];

      case 4:
        _e.sent();

        _e.label = 5;

      case 5:
        _c = _b.next();
        return [3
        /*break*/
        , 3];

      case 6:
        return [3
        /*break*/
        , 9];

      case 7:
        e_4_1 = _e.sent();
        e_4 = {
          error: e_4_1
        };
        return [3
        /*break*/
        , 9];

      case 8:
        try {
          if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
        } finally {
          if (e_4) throw e_4.error;
        }

        return [7
        /*endfinally*/
        ];

      case 9:
        return [3
        /*break*/
        , 11];

      case 10:
        updateChildren(root, []);
        return [7
        /*endfinally*/
        ];

      case 11:
        return [2
        /*return*/
        ];
    }
  });
}, _a);
exports.env = env;

var DOMRenderer =
/** @class */
function (_super) {
  (0, _tslib21ac4f0e._)(DOMRenderer, _super);

  function DOMRenderer() {
    return _super.call(this, env) || this;
  }

  return DOMRenderer;
}(_index.Renderer);

exports.DOMRenderer = DOMRenderer;
var renderer = new DOMRenderer();
exports.renderer = renderer;
},{"./_tslib-21ac4f0e.js":"node_modules/@bikeshaving/crank/esm/_tslib-21ac4f0e.js","@repeaterjs/repeater":"node_modules/@repeaterjs/repeater/lib/repeater.esm.js","event-target-shim":"node_modules/event-target-shim/dist/event-target-shim.js","./index.js":"node_modules/@bikeshaving/crank/esm/index.js","./pledge-363d33da.js":"node_modules/@bikeshaving/crank/esm/pledge-363d33da.js"}],"node_modules/@bikeshaving/crank/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = require("./esm/dom.js");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});
},{"./esm/dom.js":"node_modules/@bikeshaving/crank/esm/dom.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _crank = require("@bikeshaving/crank");

var _dom = require("@bikeshaving/crank/dom");

/** @jsx createElement */
_dom.renderer.render((0, _crank.createElement)("div", {
  id: "hello"
}, "Hello world"), document.body);
},{"@bikeshaving/crank":"node_modules/@bikeshaving/crank/esm/index.js","@bikeshaving/crank/dom":"node_modules/@bikeshaving/crank/dom.js"}],"../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64742" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/crank-boilerplate.e31bb0bc.js.map