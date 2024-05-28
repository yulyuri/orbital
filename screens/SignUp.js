import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { Button as RNEButton } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <Image
        style={styles.yulyuriSoftWhitePinkGradieIcon}
        contentFit="cover"
        source={require("../assets/yulyuri-soft-white-pink-gradient-hq-4k-79b06da4e4cf465b9d9351928b5c4e66-1.png")}
      />
      <View style={styles.signUpChild} />
      <View style={styles.signUpChild} />
      <Button
        style={styles.signup}
        mode="contained-tonal"
        labelStyle={styles.signupBtn}
        onPress={() => navigation.navigate("WhatAreYouLookingFor")}
      >
        Sign up
      </Button>
      <RNEButton
        title="Already have an account? Sign  In"
        radius="5"
        iconPosition="left"
        type="clear"
        titleStyle={styles.frameButtonBtn}
        onPress={() => navigation.goBack()}
        containerStyle={styles.frameButtonBtn1}
        buttonStyle={styles.frameButtonBtn2}
      />
      <TextInput
        style={[styles.confirmPw, styles.emailShadowBox]}
        placeholder="Confirm password"
        placeholderTextColor="#706161"
      />
      <TextInput
        style={[styles.password, styles.emailShadowBox]}
        placeholder="Password"
        placeholderTextColor="#706161"
      />
      <TextInput
        style={[styles.email, styles.emailShadowBox]}
        placeholder="Email"
        placeholderTextColor="#706161"
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signupBtn: {
    color: "#706161",
    fontSize: 20,
    fontFamily: "Inter-Regular",
  },
  frameButtonBtn: {
    color: "#5d3966",
    fontSize: 20,
  },
  frameButtonBtn1: {
    left: 45,
    padding: 10,
    top: 700,
    position: "absolute",
  },
  frameButtonBtn2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  emailShadowBox: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 45,
    width: 296,
    borderRadius: Border.br_xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  yulyuriSoftWhitePinkGradieIcon: {
    top: -18,
    left: -469,
    width: 963,
    height: 1638,
    position: "absolute",
  },
  signUpChild: {
    top: 350,
    left: -310,
    backgroundColor: Color.colorGainsboro,
    height: 61,
    width: 296,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  signup: {
    top: 550,
    left: 143,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  confirmPw: {
    top: 466,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
    fontFamily: FontFamily.interRegular,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 67,
    alignItems: "center",
  },
  password: {
    top: 410,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
    fontFamily: FontFamily.interRegular,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 67,
    alignItems: "center",
  },
  email: {
    top: 354,
    height: 46,
    fontFamily: FontFamily.interRegular,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 67,
  },
  icon: {
    top: 110,
    left: 77,
    width: 240,
    height: 184,
    position: "absolute",
  },
  signUp: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
