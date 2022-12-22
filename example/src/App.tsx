import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Faq from 'rn-simple-faq';

const exampleData = [
  {
    id: 0,
    question: 'Lorem ipsum',
    answer: 'Dip samet',
  },
  {
    id: 1,
    question: 'Lorem ipsum sit amet',
    answer: 'Dip samet lorem ipsum',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Faq faqData={exampleData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
