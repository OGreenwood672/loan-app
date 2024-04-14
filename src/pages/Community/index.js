import Navbar from "../../components/Navbar";
import { globalstyles } from "../../constants/globalStyles";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

import CommunityPerson from "../../components/CommunityPerson";

export default function Community({ route, navigation }) {

    const styles = StyleSheet.create({
        centered: {
            display: "flex",
            alignItems: "center",
        },
        title: {
            fontSize: 30,
            margin: 15,
        },
        info_bar: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            margin: 22,
            marginTop: 0,
            marginBottom: 5,
            backgroundColor: "grey",
            padding: 5,
            paddingLeft: 8,
            paddingRight: 8,
        },
        stat: {
            justifyContent: "flex-start",
        }

    })

    const openContractsList = [2]; // List of contract IDs

    return (
        <View style={globalstyles.page}>
            <ScrollView contentContainerStyle={styles.centered}>
                <View style={{height: 50}} />
                <Text style={styles.title}>Community</Text>
                <View style={styles.info_bar}>
                    <Text style={[styles.stat, {width: "60%"}]}>User</Text>
                    <Text style={[styles.stat, {width: "20%"}]}>Amount</Text>
                    <Text style={[styles.stat, {width: "20%"}]}>Credibility</Text>
                </View>
                {openContractsList.length == 0 ? <Text>No People in need</Text> : openContractsList.map(contract => {
                    return <CommunityPerson key={contract} id={contract} navigation={navigation} showButton={true}/>
                })}
            </ScrollView>
            <Navbar navigation={navigation} />
        </View>
    )

} 