import Navbar from "../../components/Navbar";
import { globalstyles } from "../../constants/globalStyles";
import { View, } from "react-native";

export default function Community({ route, navigation }) {

    return (
        <View style={globalstyles.page}>
            <Navbar navigation={navigation} />
        </View>
    )

} 