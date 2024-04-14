import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { globalstyles } from "../../constants/globalStyles";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";

import openContractsDB from "../../components/CommunityPerson/contracts";
import userDB from "../../constants/usersDB";
import alloffers from "../../components/CommunityPerson/alloffers";

import { default_contract, default_person } from "../../constants/defaults";

import Offer from "./offer";
import { myID } from "../../constants/me";
import CommunityPerson from "../../components/CommunityPerson";

export default function ViewRequests({ route, navigation }) {

    const [personInfo, setPersonInfo] = useState(default_person);
    const [contractInfo, setContractInfo] = useState(default_contract);

    const [outgoingOffers, setOutgoingOffers] = useState([]);

    const [offers, setOffers] = useState([]);

    const styles = StyleSheet.create({
        center: {
            display: "flex",
            alignItems: "center",
        },
        title: {
            fontSize: 25,
            margin: 15,
        },
        small: {
            width: "90%"
        },
        border: {
            borderRadius: 10,
            borderTopWidth: 2,
            padding: 15,
        }
    })

    function getContractInfo() {
        const contracts = openContractsDB.filter(contract => contract["from"] === myID);
        if (contracts.length > 0)
            setContractInfo(contracts[0]);
    }
    useEffect(getContractInfo, []);

    function getPerson() {
        let user = userDB.filter(user => user["id"] == myID);
        if (user)
            setPersonInfo(user);
    }
    useEffect(getPerson, []);

    function getOutgoingOffers() {    
        const _offers = alloffers.filter(offer => offer["from"] === myID);
        setOutgoingOffers(_offers);
    }
    useEffect(getOutgoingOffers, []);

    function getOffers() {
        if (Object.keys(contractInfo).length === 0) return;
    
        const _offers = alloffers.filter(offer => offer.contractID === contractInfo.id);
        setOffers(_offers);
    }
    useEffect(getOffers, [contractInfo]);

    function MyListing() {

        return (
            <View style={styles.center}>
                <Text style={styles.title}>Your Active Listing</Text>

                <CommunityPerson id={contractInfo["id"]} />

                <Text style={styles.title}>Offers</Text>

                {offers.map((offer, index) => {
                    return <Offer key={index} info={offer} amount={contractInfo["amount"]} showButton={true} />
                })}

            </View>
        )

    }
    return (
        <View style={globalstyles.page}>
            <ScrollView contentContainerStyle={styles.center}>
                <View style={{height: 70}} />

                {Object.keys(contractInfo).length === 0 && Object.keys(personInfo).length === 0 ? <Text>No Active Listing</Text> : <MyListing />}

                <Text style={styles.title}>Outgoing Offers</Text>
                {Object.keys(outgoingOffers).length === 0 ? <Text>No Outgoing Offers</Text> : outgoingOffers.map((offer, index) => {
                    return (
                        <View key={index} style={[styles.center, styles.border]}>
                            <CommunityPerson id={offer["contractID"]} />
                            <View style={styles.small}>
                                <Offer info={offer} showButton={false} />
                            </View>
                        </View>
                    )
                })}

                <View style={{height: 125}} />
            </ScrollView>
            <Navbar navigation={navigation} />
        </View>
    )

}