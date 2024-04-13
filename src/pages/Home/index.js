import { ScrollView, View, Text, StyleSheet } from "react-native";

import Navbar from "../../components/Navbar";




export default function Home() {

    const styles = StyleSheet.create({
        largeText: {
            fontSize: 100,
            padding: 50,
        }
    })

    return (
        <View>
            <ScrollView>
                <View>
                    <Text style={styles.largeText}>HELLO</Text>

                </View>
            </ScrollView>
        <Navbar />
        </View>
    )

}