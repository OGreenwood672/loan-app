import "@ethersproject/shims"

import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { globalstyles } from "../../constants/globalStyles";
import Navbar from "../../components/Navbar";
import { ethers } from 'ethers';
import { HOME } from "../../constants/routes";

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
        const address = ethers.utils.getAddress("0xC0b3bf772fd9f4ad6f996467a06F85053df23Ff3");
        // console.log("ADDRESS", address);
        const loanlisting_contractABI = [
            {
                "inputs": [
                    {
                        "internalType": "address payable",
                        "name": "_wallet_address",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "_set_date",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_about",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_amount",
                        "type": "string"
                    }
                ],
                "name": "createProduct",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address payable",
                        "name": "wallet_address",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "set_date",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "about",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "amount",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "purchased",
                        "type": "bool"
                    }
                ],
                "name": "ProductCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "loaner_wallet_address",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "address payable",
                        "name": "loanee_wallet_address",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "set_date",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "about",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "amount",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "purchased",
                        "type": "bool"
                    }
                ],
                "name": "ProductPurchased",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "purchaseProduct",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "productCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "products",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address payable",
                        "name": "wallet_address",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "set_date",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "about",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "amount",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "purchased",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]

        const provider2 = new ethers.providers.JsonRpcProvider('https://rpc-evm-sidechain.xrpl.org/');

        const evmWallet = new ethers.Wallet(
            "503ffd0a8650b7ebac02051250501efd26a2c949d92df00f8e64b9209e00eaec",
            provider2
        );
        const loancontractAddress = "0x1A6796B0c164bBFDD6D3bE81f1FBC5faF3314280";
        const contract = new ethers.Contract(loancontractAddress, loanlisting_contractABI, evmWallet);
        // contract.connect(evmWallet);
        res = await contract.createProduct(address, "1", about, amount.toString(),{gasLimit:1000000})
        console.log("SUBMIT", res);
        // res.then(resp => {
        //     console.log("SUBMIT", resp);
        //     // navigation.navigate(HOME);
        // }).catch(error => {
        //     console.error("Error submitting product:", error);
        //     // Handle the error here (e.g., display an error message to the user)
        // });
        navigation.navigate(HOME);
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