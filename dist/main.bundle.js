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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/player-model.js":
/*!********************************!*\
  !*** ./src/js/player-model.js ***!
  \********************************/
/*! exports provided: PlayerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerModel\", function() { return PlayerModel; });\nvar PlayerModel = [{\n  name: 'Mohamed El Shenawy',\n  image: 'images/shenawy.png',\n  title: 'حارس المرمى',\n  selected: false,\n  type: 'goalKeeper'\n}, {\n  name: 'Sherif Ekramy',\n  image: 'images/shreef.png',\n  title: 'حارس المرمى',\n  selected: false,\n  type: 'goalKeeper'\n}, {\n  name: 'Ali Lotfy',\n  image: 'images/lotfy.png',\n  title: 'حارس المرمى',\n  selected: false,\n  type: 'goalKeeper'\n}, {\n  name: 'Saad Samir',\n  image: 'images/Saad.png',\n  title: 'المدافع',\n  selected: false,\n  type: 'defence'\n}, {\n  name: 'Ahmed Fathy',\n  image: 'images/Fathy.png',\n  title: 'المدافع',\n  selected: false,\n  type: 'defence'\n}, {\n  name: 'Ayman Ashraf',\n  image: 'images/Ayman.png',\n  title: 'المدافع',\n  selected: false,\n  type: 'defence'\n}, {\n  name: 'Salief Kolibaly',\n  image: 'images/Salief.png',\n  title: 'المدافع',\n  selected: false,\n  type: 'defence'\n}, {\n  name: 'Mohamed Hany',\n  image: 'images/mohamed-hany.png',\n  title: 'المدافع',\n  selected: false,\n  type: 'defence'\n}, {\n  name: 'Sabry Rahel',\n  image: 'images/sabry.png',\n  title: 'المدافع',\n  selected: false,\n  type: 'defence'\n}, {\n  name: 'Hossam Ashour',\n  image: 'images/ashor.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Amr El Soulia',\n  image: 'images/amr-solia.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Hisham Mohamed',\n  image: 'images/hesham.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Islam Mohareb',\n  image: 'images/mohareb.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Ahmed Hamody',\n  image: 'images/hamody.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Ahmed Hamdy',\n  image: 'images/ahmed-hamdy.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Mido Gaber',\n  image: 'images/mido-gaber.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Walid Soliman',\n  image: 'images/soliman.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Akram Tawfik',\n  image: 'images/tawfik.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Karim Nedved',\n  image: 'images/nedved.png',\n  title: 'خط الوسط',\n  selected: false,\n  type: 'midfielder'\n}, {\n  name: 'Waleed Azzaro',\n  image: 'images/azzaro.png',\n  title: 'المهاجم',\n  selected: false,\n  type: 'attack'\n}, {\n  name: 'Marwan Mohsen',\n  image: 'images/marwan.png',\n  title: 'المهاجم',\n  selected: false,\n  type: 'attack'\n}, {\n  name: 'Salah Mohsen',\n  image: 'images/salah-mohsen.png',\n  title: 'المهاجم',\n  selected: false,\n  type: 'attack'\n}];\n\n//# sourceURL=webpack:///./src/js/player-model.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-model.js */ \"./src/js/player-model.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar playerModel = _player_model_js__WEBPACK_IMPORTED_MODULE_0__[\"PlayerModel\"];\n\nvar Stadium =\n/*#__PURE__*/\nfunction () {\n  function Stadium() {\n    _classCallCheck(this, Stadium);\n\n    this.content = \"<div class=\\\"player-image\\\">\\n                            <img class=\\\"plus\\\" src=\\\"images/plus.png\\\">\\n                            <img src=\\\"images/player.png\\\">\\n                        </div>\\n                        <div class=\\\"player-name\\\">\\n                            <p>Name</p>\\n                        </div>\";\n    this.goalKeeperPlayers = document.querySelectorAll('div[data-value=\"goalKeeper\"]');\n    this.defencePlayers = document.querySelectorAll('div[data-value=\"defence\"]');\n    this.midfielderPlayers = document.querySelectorAll('div[data-value=\"midfielder\"]');\n    this.attackPlayers = document.querySelectorAll('div[data-value=\"attack\"]');\n  } /////////////////////////////////////////////////\n  ////////////////// Change Formation /////////////\n  /////////////////////////////////////////////////\n\n\n  _createClass(Stadium, [{\n    key: \"formationData\",\n    value: function formationData() {\n      var _this = this;\n\n      var button = document.querySelector('.button');\n      var formationPopup = document.querySelector('.formation-popup');\n      var closeFormation = document.querySelector('.formation-popup .close');\n      var formationsData = document.querySelectorAll('.formation-data');\n      var formations = document.querySelectorAll('.formation');\n      var formationOne = document.querySelector('.one');\n      var formationTwo = document.querySelector('.two');\n      var formationThree = document.querySelector('.three');\n      button.addEventListener('click', function () {\n        formationPopup.style.display = 'block';\n      });\n      closeFormation.addEventListener('click', function () {\n        formationPopup.style.display = 'none';\n      });\n      formationsData.forEach(function (formationData) {\n        return formationData.addEventListener('click', function () {\n          for (var i = 0; i < formations.length; i++) {\n            formations[i].style.display = 'none';\n          }\n\n          formationPopup.style.display = 'none';\n\n          _this.selectedRest();\n\n          if (formationData.classList.contains('formation-data-one')) {\n            formationOne.style.display = 'block';\n          } else if (formationData.classList.contains('formation-data-two')) {\n            formationTwo.style.display = 'block';\n          } else if (formationData.classList.contains('formation-data-three')) {\n            formationThree.style.display = 'block';\n          }\n        });\n      });\n    } /////////////////////////////////////////////////\n    ////////////////// Choose Player Function ///////\n    /////////////////////////////////////////////////\n\n  }, {\n    key: \"chooseYourPlayer\",\n    value: function chooseYourPlayer(postion) {\n      var playersPopup = document.querySelector('.players-popup');\n      var playersList = document.querySelector('.players-list');\n      var postionName = playersPopup.querySelector('.head p');\n      playersPopup.style.display = \"block\";\n      playersList.innerHTML = \"<div class=\\\"players-row\\\"></div>\";\n      postionName.innerHTML = \"\\u0627\\u062E\\u062A\\u0631 \".concat(postion[0].title);\n\n      for (var i = 0; i < postion.length; i++) {\n        var playersRow = document.querySelector('.players-row');\n\n        if (postion[i].selected === true) {\n          playersRow.innerHTML += \"<li class=\\\"players-data disabled\\\">\\n                        <div class=\\\"player-image\\\">\\n                            <img src=\\\"\".concat(postion[i].image, \"\\\">\\n                        </div>\\n                        <div class=\\\"player-name\\\">\\n                            \").concat(postion[i].name, \"\\n                        </div>\\n                        <div class=\\\"selected-image\\\">\\n                            <img src=\\\"images/selected.png\\\">\\n                        </div>\\n                    </li>\");\n        } else if (postion[i].selected === false) {\n          playersRow.innerHTML += \"<li class=\\\"players-data\\\">\\n                        <div class=\\\"player-image\\\">\\n                            <img src=\\\"\".concat(postion[i].image, \"\\\">\\n                        </div>\\n                        <div class=\\\"player-name\\\">\\n                            \").concat(postion[i].name, \"\\n                        </div>\\n                        <div class=\\\"selected-image\\\">\\n                            <img src=\\\"images/selected.png\\\">\\n                        </div>\\n                    </li>\");\n        }\n      }\n    }\n  }, {\n    key: \"updatePlayerData\",\n    value: function updatePlayerData(player, postion) {\n      var playersPopup = document.querySelector('.players-popup');\n      var closePlayer = document.querySelector('.players-popup .close');\n      closePlayer.addEventListener('click', function () {\n        playersPopup.style.display = 'none';\n      });\n      var playersData = document.querySelectorAll('.players-data');\n\n      var _loop = function _loop(i) {\n        playersData[i].addEventListener('click', function () {\n          playersPopup.style.display = \"none\";\n          postion[i].selected = true;\n          player.innerHTML = playersData[i].innerHTML;\n          player.querySelector('.selected-image').remove();\n          player.querySelector('.player-image').innerHTML += \"<img class=\\\"wrong\\\" src=\\\"images/wrong.png\\\">\";\n        });\n      };\n\n      for (var i = 0; i < playersData.length; i++) {\n        _loop(i);\n      }\n    }\n  }, {\n    key: \"selectedRest\",\n    value: function selectedRest() {\n      var _this2 = this;\n\n      var players = document.querySelectorAll('.player');\n      players.forEach(function (player) {\n        return player.innerHTML = _this2.content;\n      });\n\n      for (var i = 0; i < playerModel.length; i++) {\n        playerModel[i].selected = false;\n      }\n    }\n  }, {\n    key: \"playerPostion\",\n    /////////////////////////////////////////////////\n    ///////// Players Data & Function ///////////////\n    /////////////////////////////////////////////////\n    value: function playerPostion(playersPostion, postionArray) {\n      var _this3 = this;\n\n      playersPostion.forEach(function (playerPostion) {\n        return playerPostion.addEventListener('click', function () {\n          var filterArray = [];\n\n          for (var i = 0; i < postionArray.length; i++) {\n            if (postionArray[i].type == playerPostion.dataset.value) {\n              filterArray.push(postionArray[i]);\n            }\n          }\n\n          var wrong = playerPostion.querySelector('.wrong');\n\n          if (playerPostion.contains(wrong)) {\n            for (var _i = 0; _i < filterArray.length; _i++) {\n              var playerName = playerPostion.querySelector('.player-name').textContent.trim();\n\n              if (playerName == filterArray[_i].name.trim()) {\n                filterArray[_i].selected = false;\n                playerPostion.innerHTML = _this3.content;\n              }\n            }\n          } else {\n            _this3.chooseYourPlayer(filterArray);\n\n            _this3.updatePlayerData(playerPostion, filterArray);\n          }\n        });\n      });\n    }\n  }]);\n\n  return Stadium;\n}();\n\nvar stadium = new Stadium();\nstadium.formationData();\nstadium.playerPostion(stadium.goalKeeperPlayers, playerModel);\nstadium.playerPostion(stadium.defencePlayers, playerModel);\nstadium.playerPostion(stadium.midfielderPlayers, playerModel);\nstadium.playerPostion(stadium.attackPlayers, playerModel);\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });