import { StyleSheet, View, Text, Image } from "react-native";

import userDB from "../../constants/usersDB";
import { useState, useEffect } from "react";
import { default_person } from "../../constants/defaults";

export default function Friend(props) {

    const styles = StyleSheet.create({
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

    const [personInfo, setPersonInfo] = useState(default_person);
    function getPerson(id) {
        let user = userDB.filter(user => id == user["id"])[0];
        if (user)
            setPersonInfo(user);
    }
    useEffect(() => getPerson(props.id), [])


    return (
        <View style={styles.friend_main}>
            <View style={[styles.friend_section, {width: "25%"}]}>
                {personInfo["pfp"] !== "" ? <Image
                    source={{ uri: personInfo["pfp"] }}
                    style={styles.pfp_image}
                    onError={() => console.log('Error loading pfp image')}
                /> : <View />}
            </View>
            <View style={[styles.friend_section, {width: "50%"}]}>
                <Text style={styles.friend_name}>{personInfo["name"]}</Text>
            </View>
            <View style={[styles.friend_section, {width: "25%"}]}>
                <Text style={styles.friend_credibility}>{Math.round(personInfo["credibility"])}%</Text>
            </View>
        </View>
    )

}