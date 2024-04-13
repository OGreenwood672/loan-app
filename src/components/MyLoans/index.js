import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

import fakeLoans from "./fakeLoans"
import { useState, useEffect } from "react"

export default function MyLoans(props) {

    const [activeLoans, setActiveLoans] = useState([]);
    const [activeInvestments, setActiveInvestments] = useState([]);
    const [userID, setUserID] = useState(1243437);

    const styles = StyleSheet.create({
        main_box: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        },
        LoansTitle: {
            fontSize: 35,
            marginBottom: 10,
            marginTop: 10,
        },
        activeLoanBox: {
            borderRadius: 20,
            borderColor: "black",
            borderWidth: 3,
            width: "85%",
            padding: 15,
            marginTop: 15,
        },
        loanTop: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
        },
        loanTitle: {
            fontSize: 18,
            color: "black",
        },
        daysLeft: {
            color: "#e08e00",
        },
        loanNextDate: {
            fontSize: 10,
        },
        progress: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
        },
        progressBar: {
            width: "80%",
            height: 20,
            backgroundColor: '#e0e0e0',
            borderRadius: 7,
            overflow: 'hidden',
            marginRight: 10,
        },
        progressBarBackground: {
            flex: 1,
            backgroundColor: '#bdbdbd',
            width: "100%"
        },
        progressBarForeground: {
            height: '100%',
            backgroundColor: '#26c511',
            width: "100%",
            borderRadius: 7,
        },
        progressText: {
            color: "black"
        },
        buttons: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
        },
        button: {
            padding: 10,
            backgroundColor: "blue",
            marginTop: 5,
            width: "48%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
        },
        button_text: {
            textAlign: "center",
            color: "white",
        }
    })
    
    function getActiveLoans() {
        let _loans = [];
        for (let i=0; i<fakeLoans.length; i++) {
            if (fakeLoans[i]["from"] == userID) {
                _loans.push(fakeLoans[i])
            }
        }
        setActiveLoans(_loans);
    }
    useEffect(getActiveLoans, [userID]);

    function getActiveInvestments() {
        let _investments = [];
        for (let i=0; i<fakeLoans.length; i++) {
            if (fakeLoans[i]["to"] == userID) {
                _investments.push(fakeLoans[i])
            }
        }
        setActiveInvestments(_investments);
    }
    useEffect(getActiveInvestments, [userID]);

    function payAll() {
        console.log("PAID ALL");
    }

    function payNext() {
        console.log("PAID NEXT");
    }

    function ActiveLoan(props) {
        return (
            <View style={styles.activeLoanBox}>
                <View style={styles.loanTop}>
                    <Text style={styles.loanTitle}>Loan: {props.loan["amount"]} from {props.loan["to"]}</Text>
                    <Text style={styles.daysLeft}>3 days left</Text>
                </View>
                <Text style={styles.loanNextDate}>Next Payment Due: 08/20/25</Text>
                <View style={styles.progress}>
                    <View style={styles.progressBar}>
                        <View style={styles.progressBarBackground} />
                        <View style={[styles.progressBarForeground, { width: "67%" }]} />
                    </View>
                    <Text style={styles.progressText}>67%</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={payAll} style={styles.button}>
                        <Text style={styles.button_text}>Pay Total</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={payNext} style={styles.button}>
                        <Text style={styles.button_text}>Pay Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function ActiveInvestment(props) {
        return (
            <View style={styles.activeLoanBox}>
                <View style={styles.loanTop}>
                    <Text style={styles.loanTitle}>Loan: {props.loan["amount"]} to {props.loan["from"]}</Text>
                    <Text style={styles.daysLeft}>5 days left</Text>
                </View>
                <Text style={styles.loanNextDate}>Next Payment Due: 08/20/25</Text>
                <View style={styles.progress}>
                    <View style={styles.progressBar}>
                        <View style={styles.progressBarBackground} />
                        <View style={[styles.progressBarForeground, { width: "67%" }]} />
                    </View>
                    <Text style={styles.progressText}>67%</Text>
                </View>

            </View>
        )
    }

    return (
        <View style={styles.main_box}>
            <Text style={styles.LoansTitle}>Active Loans</Text>
            {activeLoans.length == 0 ? <Text>No Active Loans</Text> : activeLoans.map(loan => {
                return <ActiveLoan key={loan["ID"]} loan={loan} />;
            })}
            <View style={{marginTop: 50}} />
            <Text style={styles.LoansTitle}>Active Investments</Text>
            {activeInvestments.length == 0 ? <Text>No Active Investments</Text> : activeInvestments.map(loan => {
                return <ActiveInvestment key={loan["ID"]} loan={loan} />;
            })}
            <View style={{marginTop: 150}} />

        </View>
    )

}