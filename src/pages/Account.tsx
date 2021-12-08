import React from "react";
import { View, Text } from "react-native";
import {RootStackNavigation} from "../navigator"
interface IProps {
    navigation: RootStackNavigation
}
class Account extends React.Component<IProps> {
    render() {
        return (
            <View>
                <Text>Accound</Text>
            </View>
        )
    }
}
export default Account
