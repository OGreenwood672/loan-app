import Navbar from "../../components/Navbar";
import { globalstyles } from "../../constants/globalStyles";
import { View, StyleSheet, Image, Text } from "react-native";

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
        }
    })

    const openContractsList = ["1"]; // List of contract IDs

    return (
        <View style={[globalstyles.page, styles.centered]}>
            <View style={{height: 50}} />
            <Text style={styles.title}>Community</Text>
            {openContractsList.length == 0 ? <Text>No People in need</Text> : openContractsList.map(contract => {
                return <CommunityPerson key={contract} id={contract} />
            })}
            <Navbar navigation={navigation} />
        </View>
    )

} 