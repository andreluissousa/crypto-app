import React from "react";
import { StyleSheet, Text, StatusBar, SafeAreaView, Platform } from "react-native";
import { CurrentPrice } from "./src/components/CurrentPrice";
import { HistoryGraphic } from "./src/components/HistoryGraphic";
import { QuotationList } from "./src/components/QuotationList";
import QuotationItems from "./src/components/QuotationList/QuotationItems";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open App</Text>
      <StatusBar 
        backgroundColor="#f50d41"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList />
      <QuotationItems />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  }
})