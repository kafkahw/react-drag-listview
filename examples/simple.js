webpackJsonp([1],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
throw new Error("Cannot find module \"react-drag-listview/src/index.js\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_less__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_less__);




/* eslint-disable no-console,func-names,react/no-multi-comp */





var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    var data = [];
    for (var i = 1, len = 21; i < len; i += 1) {
      data.push({
        title: 'rows' + i
      });
    }
    _this.state = {
      data: data
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
    key: 'render',
    value: function render() {
      var that = this;
      var dragProps = {
        onDragEnd: function onDragEnd(fromIndex, toIndex) {
          var data = that.state.data;

          var item = data.splice(fromIndex, 1)[0];
          data.splice(toIndex, 0, item);
          that.setState({ data: data });
        },

        nodeSelector: 'li',
        handleSelector: 'a'
      };

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { className: 'simple simple1' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'h2',
          null,
          'Dragging handle'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { className: 'simple-inner' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_drag_listview_src_index_js___default.a,
            dragProps,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'ol',
              null,
              this.state.data.map(function (item, index) {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  'li',
                  { key: index },
                  item.title,
                  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'a',
                    { href: '#' },
                    'Drag'
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

},[102]);
//# sourceMappingURL=simple.js.map