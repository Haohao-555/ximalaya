import React from "react";
import { View, Text } from "react-native";
import { RootStackNavigation } from "../navigator";
interface IProps {
    navigation: RootStackNavigation
}

class Listen extends React.Component<IProps> {
    render() {
        return (
            <View>
                <Text>Listen</Text>
            </View>
        )
    }
}
export default Listen