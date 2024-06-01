import * as React from "react";
import { Image, ImageBackground } from "expo-image";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Input } from "react-native";
import { Button } from "react-native-paper";
import { Button as RNEButton } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import RadioButton from "../components/RadioButton";

const Roommates = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = React.useState('option1');
    const [selectedOption2, setSelectedOption2] = React.useState('option1');
    const [selectedImportant,setSelectedImportant] = React.useState('');

    return (
        <ImageBackground source={require("../assets/Friends1.png")} style={styles.signUp}>

            <View style={styles.topContainer} >
                <Text style={{ color: "white", fontSize: widthPercentageToDP(5) }} >Answering Questions</Text>
            </View>

            <View style={styles.container} >
                <View style={{ alignItems: "center", gap: widthPercentageToDP(2), marginTop: heightPercentageToDP(5) }} >
                    <Text style={{ fontWeight: "bold", fontSize: widthPercentageToDP(6) }} >Are you a morning or night person?</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 17 }} >Your answer:</Text>
                    <View style={styles.answerContainer} >
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                            <Text style={{ fontSize: 17 }} >Morning</Text>
                            <RadioButton
                                label="Option 1"
                                selected={selectedOption === 'option1'}
                                onPress={() => setSelectedOption('option1')}
                            />
                           
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                            <Text style={{ fontSize: 17 }} >Night</Text>
                            <RadioButton
                                label="Option 2"
                                selected={selectedOption === 'option2'}
                                onPress={() => setSelectedOption('option2')}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 17 }} >Answer you’ll accept: </Text>
                    <View style={styles.answerContainer} >
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                            <Text style={{ fontSize: 17 }} >Morning</Text>
                            <RadioButton
                                selected={selectedOption2 === 'option1'}
                                onPress={() => setSelectedOption2('option1')}
                            />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                            <Text style={{ fontSize: 17 }} >Night</Text>
                            <RadioButton
                                selected={selectedOption2 === 'option2'}
                                onPress={() => setSelectedOption2('option2')}
                            />
                        </View>
                    </View>
                </View>


                {/* important button */}
                <View style={{ gap: 2 }} >
                    <Text style={{ color: "black", fontSize: 17 }} >Importance</Text>
                    <View style={styles.importantButtonContainer} >
                        <TouchableOpacity onPress={()=>setSelectedImportant("A little")} style={{ color: "#0500FF", width: widthPercentageToDP(25), alignItems: "center", justifyContent: "center", borderRightColor: "#0500FF", borderRightWidth: 1, height: "100%" ,backgroundColor:selectedImportant ==="A little" ? "red":"transparent"}}>
                            <Text style={{ color: "#0500FF" }} >A little</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setSelectedImportant("Somewhat")} style={{ color: "#0500FF", width: widthPercentageToDP(30), alignItems: "center", justifyContent: "center", borderRightColor: "#0500FF", borderRightWidth: 1, height: "100%" ,backgroundColor:selectedImportant ==="Somewhat" ? "red":"transparent"}}>
                            <Text style={{ color: "#0500FF" }} >Somewhat
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setSelectedImportant("Very")} style={{ color: "#0500FF", width: widthPercentageToDP(25), alignItems: "center", justifyContent: "center", height: "100%",backgroundColor:selectedImportant ==="Very" ? "red":"transparent" }}>
                            <Text style={{ color: "#0500FF" }} >Very</Text></TouchableOpacity>
                    </View>
                </View>


                {/* bottom buttons */}
                <View style={styles.bottomButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("LookingFor")} activeOpacity={0.7} style={{ gap: 5, alignItems: "center" }} >
                        <Image
                            style={{ height: 20, width: 20, objectFit: "cover" }}
                            source={require("../assets/back.png")}
                        />
                        <Text style={{ fontSize: widthPercentageToDP(4) }} >Previous</Text>
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate("NextQuestion")} activeOpacity={0.7} style={{ gap: 5 }} >
                        <Image
                            style={{ height: 20, width: 20, alignItems: "center" }}
                            source={require("../assets/forward.png")}
                        />
                        <Text style={{ fontSize: widthPercentageToDP(4) }} >Skip</Text>
                    </TouchableOpacity>

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
    answerContainer: {
        gap: 5,
        paddingHorizontal: widthPercentageToDP(5),
        paddingVertical: widthPercentageToDP(3),

        height: heightPercentageToDP(10),
        borderRadius: 21,
        backgroundColor: "#D9D9D9",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    topContainer: { height: heightPercentageToDP(10), backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: "flex-end", paddingBottom: 5 },
    container: { gap: widthPercentageToDP(10), backgroundColor: "rgba(244,244,244,0.9)", height: heightPercentageToDP(80), borderRadius: widthPercentageToDP(5), marginTop: heightPercentageToDP(2), marginHorizontal: widthPercentageToDP(5), paddingHorizontal: widthPercentageToDP(5) },
    importantButtonContainer: { backgroundColor: "#D9D9D9", flexDirection: "row", alignItems: "center", justifyContent: "center", borderColor: "#0500FF", borderWidth: 1, height: heightPercentageToDP(5) },
    importButton: { color: "#0500FF", width: widthPercentageToDP(25), alignItems: "center", justifyContent: "center", borderRightColor: "#0500FF", borderRightWidth: 1, height: "100%" },
    bottomButtonContainer: { marginTop: heightPercentageToDP(5), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }

});

export default Roommates;
