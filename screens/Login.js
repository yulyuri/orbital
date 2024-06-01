import * as React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { Button as RNEButton } from "@rneui/themed";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Padding, Color, Border, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.loginIcon}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <TextInput
        style={[styles.password, styles.passwordShadowBox]}
        placeholder="Password"
        placeholderTextColor="#706161"
      />
      <TextInput
        style={[styles.username, styles.passwordShadowBox]}
        placeholder="Username"
        placeholderTextColor="#706161"
      />
      <View style={[styles.connectingMatches, styles.connectingLayout]}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Text style={[styles.connectingMatchesOne, styles.connectingLayout]}>
          Connecting matches, 
          one algorithm at a time
        </Text>
      </View>
      <Image
        style={styles.loginChild}
        contentFit="cover"
        source={require("../assets/frame-9.png")}
      />
      <RNEButton
        title="Dont have an account? Sign Up"
        radius="5"
        iconPosition="left"
        type="clear"
        titleStyle={styles.frameButtonBtn}
        onPress={() => navigation.navigate("SignUp")}
        containerStyle={styles.frameButtonBtn1}
        buttonStyle={styles.frameButtonBtn2}
      />
      <RNEButton
        title="Forgot Password?"
        radius="5"
        iconPosition="left"
        type="clear"
        titleStyle={styles.frameButton1Btn}
        containerStyle={styles.frameButton1Btn1}
        buttonStyle={styles.frameButton1Btn2}
      />
      <Button
        style={styles.login}
        disabled={false}
        onPress={() => navigation.navigate("LookingFor")}
        mode="contained"
        labelStyle={styles.loginBtn}
      >
        Login
      </Button>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  frameButton1Btn: {
    color: "#5d3966",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  frameButton1Btn1: {
    left: 100,
    padding: 10,
    top: 620,
    position: "absolute",
  },
  frameButton1Btn2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    color: "#706161",
    fontSize: 20,
    fontFamily: "Inter-Regular",
  },
  passwordShadowBox: {
    fontSize: FontSize.size_xl,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 45,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    overflow: "hidden",
  },
  connectingLayout: {
    width: 135,
    position: "absolute",
  },
  password: {
    top: 445,
    width: 296,
    height: 46,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  username: {
    top: 380,
    width: 298,
    paddingHorizontal: 13,
  },
  frameIcon: {
    top: 100,
    left: 56,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  connectingMatchesOne: {
    top: 72,
    left: 0,
    fontSize: 11,
    color: "#000",
    textAlign: "center",
    height: 15,
    fontFamily: FontFamily.interRegular,
    width: 135,
  },
  connectingMatches: {
    top: 250,
    left: 125,
    height: 300,
  },
  loginChild: {
    top: 120,
    left: 77,
    width: 240,
    height: 230,
    position: "absolute",
  },
  login: {
    top: 550,
    left: 143,
    position: "absolute",
  },
  loginIcon: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Login;
