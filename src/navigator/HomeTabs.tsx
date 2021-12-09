import React from "react";
import 'react-native-tab-view'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Home from "@/pages/Home";

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Home1" component={Home}/>
                <Tab.Screen name="Home2" component={Home}/>
            </Tab.Navigator>
        )
    }
}
export default HomeTabs;