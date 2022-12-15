"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FaqComponent;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const FAQData = [{
  id: 0,
  question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
  id: 1,
  question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}];
function FaqComponent(_ref) {
  let {
    faqData,
    containerStyle,
    faqItemStyle,
    answerStyle,
    questionStyle,
    controllerIconStyle
  } = _ref;
  const [faqController, setFaqController] = (0, _react.useState)(false);
  const [currentAnswer, setCurrentAnswer] = (0, _react.useState)('');
  const onFaqController = answer => {
    setCurrentAnswer(answer);
    setFaqController(!faqController);
    if (answer === currentAnswer) {
      setCurrentAnswer('');
    }
  };
  const styles = _reactNative.StyleSheet.create({
    container: {
      width: '100%',
      height: 'auto',
      backgroundColor: 'black',
      padding: 20
    },
    faqText: {
      fontWeight: 'normal'
    },
    faqAfter: {
      display: 'flex',
      flexDirection: 'row'
    },
    closeIcon: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30
    },
    closeIconActive: {
      transform: [{
        rotate: '45deg'
      }],
      right: 5,
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30
    },
    answerWrapper: {
      width: '84%',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    answer: {
      color: 'white',
      fontSize: 14,
      lineHeight: 14
    },
    faqTitle: {
      color: '#FF007A',
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 10,
      paddingTop: 10
    }
  });
  const DisplayFaq = () => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      onPress: onFaqController,
      style: styles.answerWrapper
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [styles.answer, answerStyle]
    }, currentAnswer));
  };
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, containerStyle]
  }, faqData.map((faq, index) => {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: index,
      style: [faqItemStyle]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => {
        onFaqController(faq.answer);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.faqAfter
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [currentAnswer === faq.answer ? styles.closeIconActive : styles.closeIcon, controllerIconStyle]
    }, "+"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [styles.faqTitle, questionStyle]
    }, faq.question)), currentAnswer === faq.answer ? /*#__PURE__*/_react.default.createElement(DisplayFaq, null) : null)));
  })));
}

// export default {
//   getFAQData() {
//     return Promise.resolve(FAQData);
//   },
// };
//# sourceMappingURL=index.js.map