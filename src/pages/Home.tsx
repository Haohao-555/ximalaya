import React from "react";
import { Text, View, Button } from "react-native";
import { RootStackNavigation } from "../navigator";
// 定义接口（接收参数）props
interface IProps {
    navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
    // onPress = () => {
    // // 获取导航的配置信息
    // const { navigation } = this.props;
    // navigation.navigate("Detail",{
    //     id: 100,
    // })
    // }
    render() {
        return (
            <View>
                <Text>Home4</Text>
                {/* <Button title="跳转到详情页" onPress={this.onPress}></Button> */}
            </View>
        )
    }
}
export default Home