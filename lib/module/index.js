import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
const FAQData = [{
  id: 0,
  question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
  id: 1,
  question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}];
export default function FaqComponent(_ref) {
  let {
    faqData,
    containerStyle,
    faqItemStyle,
    answerStyle,
    questionStyle,
    controllerIconStyle
  } = _ref;
  const [faqController, setFaqController] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const onFaqController = answer => {
    setCurrentAnswer(answer);
    setFaqController(!faqController);
    if (answer === currentAnswer) {
      setCurrentAnswer('');
    }
  };
  const styles = StyleSheet.create({
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
    return /*#__PURE__*/React.createElement(View, {
      onPress: onFaqController,
      style: styles.answerWrapper
    }, /*#__PURE__*/React.createElement(Text, {
      style: [styles.answer, answerStyle]
    }, currentAnswer));
  };
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(View, {
    style: [styles.container, containerStyle]
  }, faqData.map((faq, index) => {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(View, {
      key: index,
      style: [faqItemStyle]
    }, /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => {
        onFaqController(faq.answer);
      }
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.faqAfter
    }, /*#__PURE__*/React.createElement(Text, {
      style: [currentAnswer === faq.answer ? styles.closeIconActive : styles.closeIcon, controllerIconStyle]
    }, "+"), /*#__PURE__*/React.createElement(Text, {
      style: [styles.faqTitle, questionStyle]
    }, faq.question)), currentAnswer === faq.answer ? /*#__PURE__*/React.createElement(DisplayFaq, null) : null)));
  })));
}

// export default {
//   getFAQData() {
//     return Promise.resolve(FAQData);
//   },
// };
//# sourceMappingURL=index.js.map