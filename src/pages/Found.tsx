import React from "react";
import {Text, View, Button} from "react-native"
import { RootStackNavigation } from "../navigator";

interface IProps {
    navigation: RootStackNavigation
}

class Found extends React.Component<IProps> {
    render() {
        return(
            <View>
                <Text>found</Text>
            </View>
        )
    }
}

export default Found