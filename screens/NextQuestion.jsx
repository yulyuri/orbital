import * as React from "react";
import { Image, ImageBackground } from "expo-image";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { Button as RNEButton } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const NextQuestion = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require("../assets/Friends1.png")} style={styles.signUp}>

            <View style={styles.topContainer} >
                <Text style={{ color: "white", fontSize: widthPercentageToDP(5) }} >Answering Questions</Text>
            </View>

            <View style={styles.container} >
                <View style={{ alignItems: "center", gap: widthPercentageToDP(2), marginTop: heightPercentageToDP(5) }} >
                    <Text style={{ fontWeight: "bold", fontSize: widthPercentageToDP(6) }} >Next Question</Text>
                </View>
               
            </View>




        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 240,
        height: 184,
    },
    signUp: {
        flex: 1,
        width: "100%",
        height: "100%",

        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
    topContainer: { height: heightPercentageToDP(10), backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: "flex-end", paddingBottom: 5 },
    container: { backgroundColor: "rgba(244,244,244,0.9)", height: heightPercentageToDP(80), borderRadius: widthPercentageToDP(5), marginTop: heightPercentageToDP(2), marginHorizontal: widthPercentageToDP(5), paddingHorizontal: widthPercentageToDP(5) },

});

export default NextQuestion;
