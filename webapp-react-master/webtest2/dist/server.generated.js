module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/assets/images/profile-pic.png":
/*!**********************************************!*\
  !*** ./client/assets/images/profile-pic.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"07300db72dd3c12efff9429af1feeca8.png\");\n\n//# sourceURL=webpack:///./client/assets/images/profile-pic.png?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || \"mongodb+srv://sumeet:CDANRXUlU9usXbKF@cluster0.kkdsq.gcp.mongodb.net/Social?retryWrites=true&w=majority\"\n};\nconst _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst signin = async (req, res) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      \"email\": req.body.email\n    });\n    if (!user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n    res.cookie('t', token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status('401').json({\n      error: \"Could not sign in\"\n    });\n  }\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  algorithms: ['HS256'],\n  userProperty: 'auth'\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nconst _default = {\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/chat.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/chat.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _helpers_dberror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/dberror */ \"./server/helpers/dberror.js\");\n/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/message.model */ \"./server/models/message.model.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst list = async (req, res) => {\n  try {\n    let msg = await _models_message_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n      'chatroom': req.params.chtid\n    }).select('chatroom userId name message _id');\n    res.json(msg);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst _default = {\n  list\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\chat.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\chat.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/chat.controller.js?");

/***/ }),

/***/ "./server/controllers/post.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/post.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/post.model */ \"./server/models/post.model.js\");\n/* harmony import */ var _helpers_dberror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/dberror */ \"./server/helpers/dberror.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst create = (req, res, next) => {\n  let form = new formidable__WEBPACK_IMPORTED_MODULE_2___default.a.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Image could not be uploaded\"\n      });\n    }\n\n    let post = new _models_post_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fields);\n    post.postedBy = req.profile;\n\n    if (files.photo) {\n      post.photo.data = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(files.photo.path);\n      post.photo.contentType = files.photo.type;\n    }\n\n    try {\n      let result = await post.save();\n      res.json(result);\n    } catch (err) {\n      return res.status(400).json({\n        error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n      });\n    }\n  });\n};\n\nconst postByID = async (req, res, next, id) => {\n  try {\n    let post = await _models_post_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate('postedBy', '_id name').exec();\n    if (!post) return res.status('400').json({\n      error: \"Post not found\"\n    });\n    req.post = post;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve use post\"\n    });\n  }\n};\n\nconst listByUser = async (req, res) => {\n  try {\n    let posts = await _models_post_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      postedBy: req.profile._id\n    }).populate('comments.postedBy', '_id name').populate('postedBy', '_id name').sort('-created').exec();\n    res.json(posts);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst listNewsFeed = async (req, res) => {\n  let following = req.profile.following;\n  following.push(req.profile._id);\n\n  try {\n    let posts = await _models_post_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      postedBy: {\n        $in: req.profile.following\n      }\n    }).populate('comments.postedBy', '_id name').populate('postedBy', '_id name').sort('-created').exec();\n    res.json(posts);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst remove = async (req, res) => {\n  let post = req.post;\n\n  try {\n    let deletedPost = await post.remove();\n    res.json(deletedPost);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst photo = (req, res, next) => {\n  res.set(\"Content-Type\", req.post.photo.contentType);\n  return res.send(req.post.photo.data);\n};\n\nconst like = async (req, res) => {\n  try {\n    let result = await _models_post_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.postId, {\n      $push: {\n        likes: req.body.userId\n      }\n    }, {\n      new: true\n    });\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst unlike = async (req, res) => {\n  try {\n    let result = await _models_post_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.postId, {\n      $pull: {\n        likes: req.body.userId\n      }\n    }, {\n      new: true\n    });\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst comment = async (req, res) => {\n  let comment = req.body.comment;\n  comment.postedBy = req.body.userId;\n\n  try {\n    let result = await _models_post_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.postId, {\n      $push: {\n        comments: comment\n      }\n    }, {\n      new: true\n    }).populate('comments.postedBy', '_id name').populate('postedBy', '_id name').exec();\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst uncomment = async (req, res) => {\n  let comment = req.body.comment;\n\n  try {\n    let result = await _models_post_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.postId, {\n      $pull: {\n        comments: {\n          _id: comment._id\n        }\n      }\n    }, {\n      new: true\n    }).populate('comments.postedBy', '_id name').populate('postedBy', '_id name').exec();\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst isPoster = (req, res, next) => {\n  let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;\n\n  if (!isPoster) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nconst _default = {\n  listByUser,\n  listNewsFeed,\n  create,\n  postByID,\n  remove,\n  photo,\n  like,\n  unlike,\n  comment,\n  uncomment,\n  isPoster\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(postByID, \"postByID\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(listByUser, \"listByUser\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(listNewsFeed, \"listNewsFeed\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(photo, \"photo\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(like, \"like\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(unlike, \"unlike\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(comment, \"comment\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(uncomment, \"uncomment\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(isPoster, \"isPoster\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\post.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/post.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/dberror */ \"./server/helpers/dberror.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_assets_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../client/assets/images/profile-pic.png */ \"./client/assets/images/profile-pic.png\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst create = async (req, res) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/**\r\n * Load user and append to req.\r\n */\n\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate('following', '_id name').populate('followers', '_id name').exec();\n    if (!user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\n\nconst read = (req, res) => {\n  req.profile.password_b = undefined;\n  return res.json(req.profile);\n};\n\nconst list = async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select('name email updated created');\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst update = (req, res) => {\n  let form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Photo could not be uploaded\"\n      });\n    }\n\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, fields);\n    user.updated = Date.now();\n\n    if (files.photo) {\n      user.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path);\n      user.photo.contentType = files.photo.type;\n    }\n\n    try {\n      await user.save();\n      user.password_b = undefined;\n      res.json(user);\n    } catch (err) {\n      return res.status(400).json({\n        error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n  });\n};\n\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.password_b = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst photo = (req, res, next) => {\n  if (req.profile.photo.data) {\n    res.set(\"Content-Type\", req.profile.photo.contentType);\n    return res.send(req.profile.photo.data);\n  }\n\n  next();\n};\n\nconst defaultPhoto = (req, res) => {\n  return res.sendFile(process.cwd() + _client_assets_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n};\n\nconst addFollowing = async (req, res, next) => {\n  try {\n    await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.userId, {\n      $push: {\n        following: req.body.followId\n      }\n    });\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst addFollower = async (req, res) => {\n  try {\n    let result = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.followId, {\n      $push: {\n        followers: req.body.userId\n      }\n    }, {\n      new: true\n    }).populate('following', '_id name').populate('followers', '_id name').exec();\n    result.password_b = undefined;\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst removeFollowing = async (req, res, next) => {\n  try {\n    await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.userId, {\n      $pull: {\n        following: req.body.unfollowId\n      }\n    });\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst removeFollower = async (req, res) => {\n  try {\n    let result = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.body.unfollowId, {\n      $pull: {\n        followers: req.body.userId\n      }\n    }, {\n      new: true\n    }).populate('following', '_id name').populate('followers', '_id name').exec();\n    result.password_b = undefined;\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst findPeople = async (req, res) => {\n  let following = req.profile.following;\n  following.push(req.profile._id);\n\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      _id: {\n        $nin: following\n      }\n    }).select('name');\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dberror__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst _default = {\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update,\n  photo,\n  defaultPhoto,\n  addFollowing,\n  addFollower,\n  removeFollowing,\n  removeFollower,\n  findPeople\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(photo, \"photo\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(defaultPhoto, \"defaultPhoto\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(addFollowing, \"addFollowing\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(addFollower, \"addFollower\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(removeFollowing, \"removeFollowing\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(removeFollower, \"removeFollower\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(findPeople, \"findPeople\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\controllers\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user */ \"./server/routes/user.js\");\n/* harmony import */ var _routes_post_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/post.routes */ \"./server/routes/post.routes.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_11__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use('/', _routes_user__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use('/', _routes_post_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_11___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\n_devBundle__WEBPACK_IMPORTED_MODULE_6__[\"default\"].compile(app);\napp.get('/', (req, res) => {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_10__[\"default\"])());\n});\nconst _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\express.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\express.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dberror.js":
/*!***********************************!*\
  !*** ./server/helpers/dberror.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n\nconst _default = {\n  getErrorMessage\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\helpers\\\\dberror.js\");\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\helpers\\\\dberror.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\helpers\\\\dberror.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dberror.js?");

/***/ }),

/***/ "./server/models/message.model.js":
/*!****************************************!*\
  !*** ./server/models/message.model.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst messageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  chatroom: {\n    type: String,\n    required: \"Chatroom is required!\",\n    ref: \"Chatroom\"\n  },\n  userId: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    required: \"Chatroom is required!\",\n    ref: \"User\"\n  },\n  message: {\n    type: String,\n    required: \"Message is required!\"\n  },\n  name: {\n    type: String,\n    required: 'name required'\n  }\n});\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('chat', messageSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(messageSchema, \"messageSchema\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\models\\\\message.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\models\\\\message.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/message.model.js?");

/***/ }),

/***/ "./server/models/post.model.js":
/*!*************************************!*\
  !*** ./server/models/post.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst PostSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  text: {\n    type: String,\n    required: 'Text is required'\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  likes: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'User'\n  }],\n  comments: [{\n    text: String,\n    created: {\n      type: Date,\n      default: Date.now\n    },\n    postedBy: {\n      type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n      ref: 'User'\n    }\n  }],\n  postedBy: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'User'\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Post', PostSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PostSchema, \"PostSchema\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\models\\\\post.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\models\\\\post.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/post.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  password_b: {\n    type: String,\n    required: \"Password is required\"\n  },\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  about: {\n    type: String,\n    trim: true\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  following: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'User'\n  }],\n  followers: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'User'\n  }]\n});\nUserSchema.virtual('password').set(function (password) {\n  //set virual password so as to not store in user document\n  this._password = password; //this.salt = this.makeSalt()\n\n  this.password_b = password;\n}).get(function () {\n  return this.password_b;\n});\nUserSchema.path('password_b').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return plainText === this.password_b;\n  }\n};\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\models\\\\user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\models\\\\user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\routes\\\\auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\routes\\\\auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/post.routes.js":
/*!**************************************!*\
  !*** ./server/routes/post.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/post.controller */ \"./server/controllers/post.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/api/posts/new/:userId').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create);\nrouter.route('/api/posts/photo/:postId').get(_controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].photo);\nrouter.route('/api/posts/by/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listByUser);\nrouter.route('/api/posts/feed/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listNewsFeed);\nrouter.route('/api/posts/like').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].like);\nrouter.route('/api/posts/unlike').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].unlike);\nrouter.route('/api/posts/comment').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].comment);\nrouter.route('/api/posts/uncomment').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].uncomment);\nrouter.route('/api/posts/:postId').delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isPoster, _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nrouter.param('postId', _controllers_post_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].postByID);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\routes\\\\post.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\routes\\\\post.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/post.routes.js?");

/***/ }),

/***/ "./server/routes/user.js":
/*!*******************************!*\
  !*** ./server/routes/user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_chat_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/chat.controller */ \"./server/controllers/chat.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.route('/api/users/photo/:userId').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].photo, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaultPhoto);\nrouter.route('/api/users/defaultphoto').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaultPhoto);\nrouter.route('/api/users/findpeople/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findPeople);\nrouter.route('/api/chat/:chtid').get(_controllers_chat_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].list);\nrouter.route('/api/user/follow').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addFollowing, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addFollower);\nrouter.route('/api/user/unfollow').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeFollowing, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeFollower);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\routes\\\\user.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\routes\\\\user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/message.model */ \"./server/models/message.model.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${mongoUri}`);\n});\n/*const connection = mongoose.connection;\r\nconnection.once('open', () => {\r\n    console.log(\"MongoDB database connection established successfully\");\r\n})*/\n\nconst server = http__WEBPACK_IMPORTED_MODULE_4___default.a.createServer(_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst io = socket_io__WEBPACK_IMPORTED_MODULE_3___default()(server);\nio.use(async (socket, next) => {\n  const token = socket.handshake.query.token;\n  const tkn = JSON.parse(token);\n  socket.userId = tkn.user._id;\n  next();\n});\nio.on('connection', socket => {\n  console.log(\"new connection\" + socket.userId);\n  socket.on('disconnect', () => {\n    console.log(\"user disconnect\");\n  });\n  socket.on(\"joinRoom\", ({\n    chatroomid\n  }) => {\n    socket.join(chatroomid);\n    console.log(\"user joined chat \" + chatroomid);\n  });\n  socket.on('leaveRoom', ({\n    chatroomid\n  }) => {\n    socket.leave(chatroomid);\n    console.log(\"user left chat \" + chatroomid);\n  });\n  socket.on(\"chatroomMessage\", async ({\n    chatroomid,\n    message\n  }) => {\n    if (message.trim().length > 0) {\n      const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n        _id: socket.userId\n      });\n      const newMessage = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n        chatroom: chatroomid,\n        name: user.name,\n        userId: socket.userId,\n        message\n      });\n      io.to(chatroomid).emit(\"newMessage\", {\n        message,\n        name: user.name,\n        userId: socket.userId\n      });\n      await newMessage.save();\n    }\n  });\n});\nserver.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(server, \"server\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\server.js\");\n  reactHotLoader.register(io, \"io\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\server\\\\server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = () => {\n  return `<!doctype html>      \n  <html lang=\"en\">          \n  <head>             \n  <meta charset=\"utf-8\">             \n  <title>test 1</title>  \n  <link rel=\"stylesheet\"href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"rel=\"stylesheet\">     \n  </head>          \n  <body style=\"background-color: skyblue\">  \n  <div id=\"root\"></div> \n  <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>      \n  </body>      \n  </html>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\webdev\\\\test1\\\\social\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\lenovo\\Desktop\\webdev\\test1\\social\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/extend\");\n\n//# sourceURL=webpack:///external_%22lodash/extend%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });