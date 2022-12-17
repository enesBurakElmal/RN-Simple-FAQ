import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FaqComponent({
  faqData,
  containerStyle,
  faqItemStyle,
  answerStyle,
  questionStyle,
  controllerIconStyle,
  controllerIconActiveStyle,
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
      alignItems: 'center',
    },
    closeIcon: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      marginRight: width / 40,
    },
    closeIconActive: {
      transform: [{ rotate: '45deg' }],
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      marginRight: width / 40,
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
      left: 7,
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
                          ? [styles.closeIconActive, controllerIconActiveStyle]
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
