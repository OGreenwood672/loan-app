import { StyleSheet, View, Text, Image } from "react-native";
import Navbar from "../../components/Navbar";

import { globalstyles } from "../../constants/globalStyles";

import userDB from "./usersDB";
import { useEffect, useState } from "react";

export default function Friends({ route, navigation }) {

    const styles = StyleSheet.create({
        centered: {
            display: "flex",
            alignItems: "center",
        },
        title: {
            fontSize: 30,
            margin: 15,
        },
        friend_main: {
            width: "90%",
            height: 80,
            margin: "auto",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        friend_section: {
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
        },
        pfp_image: {
            width: 65,
            height: 65,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "black",
        },
        friend_name: {
            fontSize: 26,
            alignSelf: "flex-start"
        },
        friend_credibility: {
            color: "green",
            fontSize: 26,
        }
    })

    const [friendsInfo, setFriendsInfo] = useState([]);
    const friendsList = ["1"];

    function getFriendsInfo() {
        let _friendsInfo = [];
        friendsList.forEach(friend => {
            _friendsInfo.push(userDB[friend])
        });
        setFriendsInfo(_friendsInfo);
    }
    useEffect(getFriendsInfo, []);

    function Friend(props) {

        return (
            <View style={styles.friend_main}>
                <View style={[styles.friend_section, {width: "25%"}]}>
                    <Image
                        source={{ uri: props.info["pfp"] }}
                        style={styles.pfp_image}
                        onError={() => console.log('Error loading pfp image')}
                    />
                </View>
                <View style={[styles.friend_section, {width: "50%"}]}>
                    <Text style={styles.friend_name}>{props.info["name"]}</Text>
                </View>
                <View style={[styles.friend_section, {width: "25%"}]}>
                    <Text style={styles.friend_credibility}>{props.info["credibility"]}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={[globalstyles.page, styles.centered]}>
            <View style={{height: 50}} />
            <Text style={styles.title}>Friends</Text>
            {friendsInfo.length == 0 ? <Text>No Friends Yet</Text> : friendsInfo.map(friend => {
                return <Friend key={friend["id"]} info={friend} />
            })}
            <Navbar navigation={navigation} />
        </View>
    )

}