import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import CommunityPerson from "../../components/CommunityPerson";
import { globalstyles } from "../../constants/globalStyles";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { COMMUNITY, HOME } from "../../constants/routes";



export default function Offer({ route, navigation }) {

    const [interest, setInterest] = useState(0);
    const [loanDays, setLoanDays] = useState(10);
    const [installments, setInstallments] = useState(0);


    const styles = StyleSheet.create({
        makeoffer: {
            fontSize: 30,
            alignSelf: "center",
            marginBottom: 20,
        },
        center: {
            display: "flex",
        },
        inputbox: {
            padding: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "black",
            margin: 10,
            width: "90%",
            alignSelf: "center",
        },
        inputContainer: {
            borderTopWidth: 1,
            padding: 3,
            width: "50%",
        },
        input: {
            fontSize: 20,
        },
        input_tag: {
            fontSize: 20,
        },
        buttons: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
        },
        button: {
            backgroundColor: "green",
            width: "40%",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            borderRadius: 10,
        },
        buttonText: {
            fontSize: 18,
            color: "white"
        }
    });

    const handleInterestChange = (text) => {
        const regex = /^-?\d*\.?\d*$/;
        if (regex.test(text)) {
            setInterest(text);
        }
    };

    const handleInstallmentsChange = (text) => {
        const regex = /^$|^[0-9]{1}$/;
        if (regex.test(text)) {
            setInstallments(text);
        }
    };

    const handleLoanDaysChange = (text) => {
        const regex = /^$|^(?:[1-9]|[1-8][0-9]|90)$/;
        if (regex.test(text)) {
            setLoanDays(text);
        }
    };

    function confirmOrder() {
        console.log("ORDER CONFIRMED");
        navigation.navigate(HOME);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[globalstyles.page, styles.center]}>
                <View style={{height: 70}} />

                <Text style={styles.makeoffer}>Make Offer</Text>

                <View style={{alignItems: "center"}}>
                    <CommunityPerson id={route.params.contractID} showButton={false} />
                </View>

                <View style={styles.inputbox}>
                    <Text style={styles.input_tag}>Interest (%)</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="0"
                            onChangeText={handleInterestChange}
                        />
                    </View>
                </View>

                <View style={styles.inputbox}>
                    <Text style={styles.input_tag}>Days to Loan</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="10"
                            onChangeText={handleLoanDaysChange}
                        />
                    </View>
                    
                </View>

                <View style={styles.inputbox}>
                    <Text style={styles.input_tag}>Installments</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="0"
                            onChangeText={handleInstallmentsChange}
                        />
                    </View>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.button, {backgroundColor: "green"}]} onPress={confirmOrder}>
                        <Text style={styles.buttonText}>Confirm Offer!</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 300}} />

                <Navbar navigation={navigation} />
            </View>
        </TouchableWithoutFeedback>
    )

}