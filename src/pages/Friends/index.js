import { StyleSheet, View, Text } from "react-native";
import Navbar from "../../components/Navbar";

import { globalstyles } from "../../constants/globalStyles";

import Friend from "../../components/Friend";

export default function Friends({ route, navigation }) {

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

    const friendsList = [2, 3];

    return (
        <View style={[globalstyles.page, styles.centered]}>
            <View style={{height: 50}} />
            <Text style={styles.title}>Friends</Text>
            {friendsList.length == 0 ? <Text>No Friends Yet</Text> : friendsList.map(friendID => {
                return <Friend key={friendID} id={friendID} />
            })}
            <Navbar navigation={navigation} />
        </View>
    )

}