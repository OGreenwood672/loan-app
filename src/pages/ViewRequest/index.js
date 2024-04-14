import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { globalstyles } from "../../constants/globalStyles";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";

import openContractsDB from "../../components/CommunityPerson/contracts";
import userDB from "../../constants/usersDB";
import alloffers from "../../components/CommunityPerson/alloffers";

import { default_contract, default_person } from "../../constants/defaults";

import Offer from "./offer";

export default function ViewRequests({ route, navigation }) {

    const [personInfo, setPersonInfo] = useState(default_person);
    const [contractInfo, setContractInfo] = useState(default_contract);

    const [offers, setOffers] = useState([]);

    const styles = StyleSheet.create({
        center: {
            display: "flex",
            alignItems: "center",
        },
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
        title: {
            fontSize: 25,
            margin: 25,
        }
    })

    function getContractInfo() {
        setContractInfo(openContractsDB["1"])
    }
    useEffect(getContractInfo, []);

    function getPerson(id) {
        let user = userDB[id];
        if (user)
            setPersonInfo(user);
    }
    useEffect(() => getPerson(contractInfo["from"]), [contractInfo]);

    function getOffers() {
        if (Object.keys(contractInfo).length === 0) return; // Guard clause to handle case where contractInfo is not available yet
    
        const _offers = alloffers.filter(offer => offer.contractID === contractInfo.id);
        setOffers(_offers);
    }
    useEffect(getOffers, [contractInfo]);

    function MyListing() {

        return (
            <View style={styles.center}>
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
                </View>

                <Text style={styles.title}>Offers</Text>

                {offers.map(offer => {
                    return <Offer key={offer["from"]} info={offer} />
                })}

            </View>
        )

    }

    return (
        <View style={[globalstyles.page, styles.center]}>
            <ScrollView>
                <View style={{height: 70}} />

                {Object.keys(contractInfo).length === 0 && Object.keys(personInfo).length === 0 ? <View /> : <MyListing />}

                <View style={{height: 125}} />
            </ScrollView>
            <Navbar navigation={navigation} />
        </View>
    )

}