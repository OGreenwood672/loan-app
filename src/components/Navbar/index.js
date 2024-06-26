import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserGroup, faPeopleGroup, faUser } from "@fortawesome/free-solid-svg-icons";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { COMMUNITY, FRIENDS, HOME } from "../../constants/routes";



export default function Navbar(props) {

    const styles = StyleSheet.create({
        main_nav: {
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            height: 100,
            width: "100%",
            padding: 0,
            paddingBottom: 10,
            marginTop: 10,
        },
        nav_button: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: 10,
        },
        button_circle: {
            width: 50,
            height: 50,
            borderRadius: 100,
            borderColor: "white",
            borderWidth: 2,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center"
        },
        icon: {
            color: "white",
        },
        small_text: {
            color: "white",
            fontSize: 8,
            padding: 5,
        }
    });

    function NavButton(props) {

        return (
            <TouchableOpacity onPress={props.nav}>
                <View style={styles.nav_button}>
                    <View style={styles.button_circle}>
                        <FontAwesomeIcon style={styles.icon} size={20} icon={props.icon} />
                    </View>
                    <Text style={styles.small_text}>{props.text}</Text>
                </View>
            </TouchableOpacity>

        )
    
    }

    function toHome() {
        props.navigation.navigate(HOME);
    }

    function toFriends() {
        props.navigation.navigate(FRIENDS);
    }

    function toCommunity() {
        props.navigation.navigate(COMMUNITY);
    }

    return (
        <View style={styles.main_nav}>
            <NavButton icon={faUserGroup} text="Friends" nav={toFriends} />
            <NavButton icon={faUser} text="Home" nav={toHome} />
            <NavButton icon={faPeopleGroup} text="Community" nav={toCommunity} />
        </View>
    );

}