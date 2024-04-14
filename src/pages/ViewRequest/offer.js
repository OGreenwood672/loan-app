import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { default_person } from "../../constants/defaults";

import userDB from "../../constants/usersDB";
import { transfer } from "../../crypto_great";

export default function Offer(props) {

    const [personInfo, setPersonInfo] = useState(default_person);

    const styles = StyleSheet.create({
        main: {
            width: "90%",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "black",
            margin: 10,
        },
        friend_main: {
            height: 80,
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
        },
        fact: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 10,
            borderTopWidth: 1,
        },
        fact_text: {
            fontSize: 15,
        },
        acceptOfferButton: {
            display: "flex",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "green",
            padding: 10,
            width: "60%",
            margin: 10,
            borderRadius: 10,
            borderWidth: 2,
        },
        acceptOfferText: {
            fontSize: 20,
            color: "white",
        }

    });

    function getPerson() {
        let user = userDB[props.info["from"]];
        if (user)
            setPersonInfo(user);
    }
    useEffect(getPerson, []);

    function acceptOffer() {
        transfer(props.amount);
        console.log("ACCEPTED");
    }

    return (
        <View style={styles.main}>
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

            <View style={styles.fact}>
                <Text style={styles.fact_text}>Interest</Text>
                <Text style={styles.fact_text}>{props.info["interest"]}%</Text>
            </View>

            <View style={styles.fact}>
                <Text style={styles.fact_text}>Loan Days</Text>
                <Text style={styles.fact_text}>{props.info["loanDays"]}%</Text>
            </View>

            <View style={[styles.fact, {borderBottomWidth: 1}]}>
                <Text style={styles.fact_text}>Installments</Text>
                <Text style={styles.fact_text}>{props.info["installments"]}%</Text>
            </View>

            {props.showButton ? <TouchableOpacity style={styles.acceptOfferButton} onPress={acceptOffer}>
                <Text style={styles.acceptOfferText}>Accept</Text>
            </TouchableOpacity> : <View />}

        </View>
    )

}