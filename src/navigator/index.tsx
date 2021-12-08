/*
 * @Date: 2021-12-07 18:42:03
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \ximalaya\src\navigator\index.tsx
 */
import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp} from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import { Platform, StyleSheet} from "react-native";

// 定义堆栈式导航
export type RootStackParamList = {
    // 底部导航
    BottomTabs: {
        screen?: string;
    };
}

// 创建堆栈式导航
let Stack = createStackNavigator<RootStackParamList>()

class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator 
                   screenOptions={{
                    headerMode:"float",
                    headerTitleAlign: "center",
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                    cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    headerStyle: {
                        ...Platform.select({
                            android: {
                               elevation: 0,
                               borderBottomWidth: StyleSheet.hairlineWidth,
                            },
                            ios: {

                            }
                        })
                    }
                   }}
                   >
                 <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerTitle: "首页"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
// 将导航配置信息导出
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

export default Navigator