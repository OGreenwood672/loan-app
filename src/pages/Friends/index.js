import { View } from "react-native";
import Navbar from "../../components/Navbar";

import { globalstyles } from "../../constants/globalStyles";

export default function Friends({ route, navigation }) {

    return (
        <View style={globalstyles.page}>
            <Navbar navigation={navigation} />
        </View>
    )

}