import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const WhatAreYouLookingFor = () => {
  return (
    <Image
      style={styles.whatAreYouLookingFor}
      contentFit="cover"
      source={require("../assets/what-are-you-looking-for.png")}
    />
  );
};

const styles = StyleSheet.create({
  whatAreYouLookingFor: {
    width: 430,
    height: 932,
    overflow: "hidden",
  },
});

export default WhatAreYouLookingFor;
