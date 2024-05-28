import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground } from "react-native";

const Splash = () => {
  return (
    <ImageBackground
      style={styles.splashIcon}
      resizeMode="cover"
      source={require("../assets/splash.png")}
    >
      <View style={styles.frame}>
        <Image
          style={styles.file1Icon}
          contentFit="cover"
          source={require("../assets/file-1.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  file1Icon: {
    width: 389,
    height: 345,
  },
  frame: {
    position: "absolute",
    top: 293,
    left: 21,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  splashIcon: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Splash;
