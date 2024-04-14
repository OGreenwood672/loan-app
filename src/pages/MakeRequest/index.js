import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { globalstyles } from "../../constants/globalStyles";
import Navbar from "../../components/Navbar";
import { HOME } from "../../constants/routes";
import { contract } from "../../crypto_great";
import { myWallet, private_key } from "../../constants/me";




export default function MakeRequest({ route, navigation }) {

    const [amount, setAmount] = useState(10);
    const AmountLimit = 2000;
    const [about, setAbout] = useState("");
    const AboutLimit = 300;

    function changeAmount(num) {
        if (num <= AmountLimit)
            setAmount(num)
    }

    function changeAbout(text) {
        if (text.length <= AboutLimit)
            setAbout(text);
    }

    const styles = StyleSheet.create({
        title: {
            fontSize: 25,
            margin: 20,
            marginTop: 70,
        },
        center: {
            display: "flex",
            alignItems: "center",
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
        aboutContainer: {
            borderTopWidth: 1,
            padding: 3,
            minHeight: 300,
        },
        input: {
            fontSize: 17,
        },
        input_tag: {
            fontSize: 20,
        },
        submitButton: {
            backgroundColor: "#8c52ff",
            borderRadius: 10,
            width: "40%",
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
        },
        submitButtonText: {
            fontSize: 18,
        }
    });

    async function submitRequest() {
        
        // let res = contract.createProduct(myWallet, "1", about, amount.toString())
        // res.then(resp => {
        //     console.log("SUBMIT", resp);
        //     // navigation.navigate(HOME);
        // }).catch(error => {
        //     console.error("Error submitting product:", error);
        //     // Handle the error here (e.g., display an error message to the user)
        // });
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[globalstyles.page, styles.center]}>

                <Text style={styles.title}>Make Request</Text>

                <View style={styles.inputbox}>
                    <Text style={styles.input_tag}>Amount</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="10"
                            onChangeText={changeAmount}
                        />
                    </View>
                </View>
                <View style={styles.inputbox}>
                    <Text style={styles.input_tag}>About</Text>
                    <View style={styles.aboutContainer}>
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            multiline={true}
                            placeholder="Enter why you want a loan."
                            onChangeText={changeAbout}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={submitRequest}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>

                <Navbar navigation={navigation} />

            </View>
        </TouchableWithoutFeedback>
    )

}