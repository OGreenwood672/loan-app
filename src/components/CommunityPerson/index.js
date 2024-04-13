
import { StyleSheet, View, Text, Image } from "react-native";

import userDB from "../../constants/usersDB";
import openContractsDB from "./contracts";
import { useEffect, useState } from "react";

export default function CommunityPerson(props) {

    const styles = StyleSheet.create({
        person_main: {
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
        person_section: {
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
        person_name: {
            fontSize: 26,
            alignSelf: "flex-start"
        },
        person_credibility: {
            color: "green",
            fontSize: 26,
        }
    })

    const [personInfo, setPersonInfo] = useState({});
    const [contractInfo, setContractInfo] = useState({});

    function getContractInfo(id) {
        setContractInfo(openContractsDB[id]);
    }
    useEffect(() => getContractInfo(props.id), []);

    function getPerson(id) {
        let user = userDB[id];
        if (user)
            setPersonInfo(user);
    }
    useEffect(() => getPerson(contractInfo["from"]), [contractInfo]);

    return (
        <View style={styles.person_main}>
            <View style={[styles.person_section, {width: "20%"}]}>
                {personInfo["pfp"] !== "" ? <Image
                    source={{ uri: personInfo["pfp"] }}
                    style={styles.pfp_image}
                    onError={() => console.log('Error loading pfp image')}
                /> : <View />}
            </View>
            <View style={[styles.person_section, {width: "40%"}]}>
                <Text style={styles.person_name}>{personInfo["name"]}</Text>
            </View>
            <View style={[styles.person_section, {width: "20%"}]}>
                <Text style={styles.contract_amount}>{contractInfo["amount"]}</Text>
            </View>
            <View style={[styles.person_section, {width: "20%"}]}>
                <Text style={styles.person_credibility}>{Math.round(personInfo["credibility"])}%</Text>
            </View>
        </View>
    )

}