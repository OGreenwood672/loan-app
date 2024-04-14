import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import MyLoans from "../../components/MyLoans";
import Navbar from "../../components/Navbar";

import { globalstyles } from "../../constants/globalStyles";
import { MAKEREQUEST, VIEWREQUESTS } from "../../constants/routes";



export default function Home({ route, navigation }) {

    const styles = StyleSheet.create({
        largeText: {
            fontSize: 100,
            padding: 50,
        },
        logo: {
            marginTop: "13%",
            height: 170,
            width: 288,
            alignSelf: "center",
        },
        requestButtons: {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 15,
        },
        requestButton: {
            backgroundColor: "#8c52ff",
            width: "40%",
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            borderWidth: 2,
        },
        requestButtonText: {
            color: "white",
        }
    })

    return (
        <View style={globalstyles.page}>
            <ScrollView>
                <Image
                    source={require("../../../assets/PAX.png")}
                    style={styles.logo}
                />
                <View style={styles.requestButtons}>
                    <TouchableOpacity style={styles.requestButton} onPress={() => navigation.navigate(MAKEREQUEST)}>
                        <Text style={styles.requestButtonText}>Make Request</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.requestButton} onPress={() => navigation.navigate(VIEWREQUESTS)}>
                        <Text style={styles.requestButtonText}>View Requests</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <MyLoans />
                </View>
            </ScrollView>
            <Navbar navigation={navigation} />
        </View>
    )

}