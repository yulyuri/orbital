// import * as React from "react";
// import { Image, ImageBackground, ImageSourcePropType } from "expo-image";
// import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import { useNavigation, NavigationProp } from "@react-navigation/native";
// import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

// const LookingFor: React.FC = () => {
//     const navigation = useNavigation<NavigationProp<any>>();

//     return (
//         <ImageBackground source={require("../assets/images/Whatareyoulookingfor.png")} style={styles.signUp}>
//             <View style={styles.topContainer}>
//                 <Text style={{ color: "white", fontSize: widthPercentageToDP(5) }}>Answering Questions</Text>
//             </View>
//             <View style={styles.container}>
//                 <View style={{ alignItems: "center", gap: widthPercentageToDP(2), marginTop: heightPercentageToDP(5) }}>
//                     <Image
//                         style={styles.icon}
//                         contentFit="cover"
//                         source={require("../assets/images/duck.png")}
//                     />
//                     <Text style={{ fontWeight: "bold", fontSize: widthPercentageToDP(6) }}>What are you looking for?</Text>
//                 </View>
//                 <View style={{ gap: 10, marginTop: 30 }}>
//                     <TouchableOpacity onPress={() => navigation.navigate("Friends")} activeOpacity={0.7} style={styles.buttonContainer}>
//                         <Image
//                             style={styles.buttonBackgroundImage}
//                             contentFit="cover"
//                             source={require("../assets/images/Rectangle9.png")}
//                         />
//                         <Text style={styles.buttonText}>Friends</Text>
//                         <Image
//                             style={styles.IconImage}
//                             contentFit="cover"
//                             source={require("../assets/images/Frame.png")}
//                         />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => navigation.navigate("Roommates")} activeOpacity={0.7} style={styles.buttonContainer}>
//                         <Image
//                             style={styles.buttonBackgroundImage}
//                             contentFit="cover"
//                             source={require("../assets/images/Group20.png")}
//                         />
//                         <Text style={styles.buttonText}>Roommates</Text>
//                         <Image
//                             style={styles.IconImage}
//                             contentFit="cover"
//                             source={require("../assets/images/Frame.png")}
//                         />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => navigation.navigate("ProjectMate")} activeOpacity={0.7} style={styles.buttonContainer}>
//                         <Image
//                             style={styles.buttonBackgroundImage}
//                             contentFit="cover"
//                             source={require("../assets/images/Group21.png")}
//                         />
//                         <Text style={styles.buttonText}>Project Mate</Text>
//                         <Image
//                             style={styles.IconImage}
//                             contentFit="cover"
//                             source={require("../assets/images/Frame1.png")}
//                         />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     icon: {
//         width: 240,
//         height: 184,
//     },
//     signUp: {
//         flex: 1,
//         width: "100%",
//         height: "100%",
//         overflow: "hidden",
//         backgroundColor: "white",
//     },
//     topContainer: { height: heightPercentageToDP(10), backgroundColor: "rgba(0,0,0,0.4)", alignItems: "center", justifyContent: "flex-end", paddingBottom: 5 },
//     container: { backgroundColor: "rgba(244,244,244,0.9)", height: heightPercentageToDP(80), borderRadius: widthPercentageToDP(5), marginTop: heightPercentageToDP(2), marginHorizontal: widthPercentageToDP(5), paddingHorizontal: widthPercentageToDP(5) },
//     buttonContainer: { position: 'relative', height: heightPercentageToDP(10), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 15 },
//     buttonBackgroundImage: { position: "absolute", height: "100%", width: "100%", objectFit: "cover" },
//     buttonText: { fontSize: widthPercentageToDP(5) },
//     IconImage: { height: 20, width: 20 }
// });

// export default LookingFor;
