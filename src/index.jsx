import React, { Fragment, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
const FAQData = [
  {
    id: 0,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 1,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
export default function FaqComponent({
  faqData,
  containerStyle,
  faqItemStyle,
  answerStyle,
  questionStyle,
  controllerIconStyle,
}) {
  const [faqController, setFaqController] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const onFaqController = (answer) => {
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
      padding: 20,
    },
    faqText: {
      fontWeight: 'normal',
    },
    faqAfter: {
      display: 'flex',
      flexDirection: 'row',
    },
    closeIcon: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    closeIconActive: {
      transform: [{ rotate: '45deg' }],
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    answerWrapper: {
      width: '84%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    answer: {
      color: 'white',
      fontSize: 14,
      lineHeight: 14,
    },
    faqTitle: {
      color: '#FF007A',
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 10,
      paddingTop: 10,
    },
  });

  const DisplayFaq = () => {
    return (
      <View onPress={onFaqController} style={styles.answerWrapper}>
        <Text style={[styles.answer, answerStyle]}>{currentAnswer}</Text>
      </View>
    );
  };

  return (
    <Fragment>
      <View style={[styles.container, containerStyle]}>
        {faqData.map((faq, index) => {
          return (
            <Fragment>
              <View style={faqItemStyle} key={index}>
                <TouchableOpacity
                  onPress={() => {
                    onFaqController(faq.answer);
                  }}
                >
                  <View style={styles.faqAfter}>
                    <Text
                      style={[
                        currentAnswer === faq.answer
                          ? styles.closeIconActive
                          : styles.closeIcon,
                        controllerIconStyle,
                      ]}
                    >
                      +
                    </Text>
                    <Text style={[styles.faqTitle, questionStyle]}>
                      {faq.question}
                    </Text>
                  </View>
                  {currentAnswer === faq.answer ? <DisplayFaq /> : null}
                </TouchableOpacity>
              </View>
            </Fragment>
          );
        })}
      </View>
    </Fragment>
  );
}
