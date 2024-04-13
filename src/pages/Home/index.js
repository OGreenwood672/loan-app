import { ScrollView, View, Text, StyleSheet } from "react-native";

import Navbar from "../../components/Navbar";
import { globalstyles } from "../../constants/globalStyles";
import MyLoans from "../../components/myLoans";




export default function Home({ route, navigation }) {

    const styles = StyleSheet.create({
        largeText: {
            fontSize: 100,
            padding: 50,
        }
    })

    return (
        <View style={globalstyles.page}>
            <ScrollView>
                <View>
                    <Text style={styles.largeText}>HELLO</Text>
                    <MyLoans />
                </View>
            </ScrollView>
            <Navbar navigation={navigation} />
        </View>
    )

}