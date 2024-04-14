
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import userDB from "../../constants/usersDB";
import openContractsDB from "./contracts";
import { useEffect, useState } from "react";
import { OFFER } from "../../constants/routes";

export default function CommunityPerson(props) {

    const styles = StyleSheet.create({
        person_main: {
            width: "90%",
            margin: "auto",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "black",
        },
        person_top: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 80,
        },
        about: {
            margin: 10,
            marginTop: 0,
            borderTopWidth: 1,
            paddingTop: 3
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
        contract_amount: {
            fontSize: 20,
        },
        person_credibility: {
            color: "green",
            fontSize: 18,
        },
        button: {
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#06a9ca",
            margin: 10,
            marginTop: 0,
            borderRadius: 10,
        }
    })

    const [personInfo, setPersonInfo] = useState({});
    const [contractInfo, setContractInfo] = useState({});

    function getContractInfo(id) {
        const contracts = openContractsDB.filter(contract => contract["from"] === id);
        if (contracts.length > 0)
            setContractInfo(contracts[0]);
    }
    useEffect(() => getContractInfo(props.id), []);

    function getPerson(id) {
        let user = userDB[id];
        if (user)
            setPersonInfo(user);
    }
    useEffect(() => getPerson(contractInfo["from"]), [contractInfo]);

    function offer() {
        props.navigation.navigate(OFFER, { contractID: props.id })
    }
    return (
        <View style={styles.person_main}>
            <View style={styles.person_top}>
                <View style={[styles.person_section, {width: "20%"}]}>
                    {personInfo["pfp"] !== "" ? <Image
                        source={{ uri: personInfo["pfp"] }}
                        style={styles.pfp_image}
                        onError={() => console.log('Error loading pfp image')}
                    /> : <View />}
                </View>
                <View style={[styles.person_section, {width: "34%"}]}>
                    <Text style={styles.person_name}>{personInfo["name"]}</Text>
                </View>
                <View style={[styles.person_section, {width: "23%"}]}>
                    <Text style={styles.person_credibility}>{Math.round(personInfo["credibility"])}%</Text>
                </View>
                <View style={[styles.person_section, {width: "23%"}]}>
                    <Text style={styles.contract_amount}>£{contractInfo["amount"]}</Text>
                </View>
            </View>
            <View style={styles.about}>
                <Text>{contractInfo["about"]}</Text>
            </View>
            {props.showButton ? (
            <TouchableOpacity onPress={offer}>
                <View style={styles.button}>
                    <Text>Offer</Text>
                </View>
            </TouchableOpacity>
            ) : <View />}
        </View>
    )

}