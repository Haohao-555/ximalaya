import React from "react";
import { RouteProp, TabNavigationState, NavigationContainer, getFocusedRouteNameFromRoute} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RootStackNavigation, RootStackParamList } from "./index";
import Home from "@/pages/Home"
import Account from "@/pages/Account"
import Listen from "@/pages/Listen"
import Found from "@/pages/Found"

// 底部导航分类
export type BottomTabParamList = {
    Home: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
}
// 创建底部导航
const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, "BottomTabs"> & {
    state?: TabNavigationState<BottomTabParamList>;
};
interface IProps {
    navigation: RootStackNavigation,
    // 接收堆栈式导航中的底部导航参数
    route: Route
}
function getHeaderTitle(route: Route) {
    const routeName = getFocusedRouteNameFromRoute(route) 
    switch (routeName) {
        case 'Home':
          return '首页';
        case 'Listen':
          return '我听';
        case 'Found':
          return '发现';
        case 'Account':
          return '账户';
        default:
          return '首页';
      }
  }
class BottomTabs extends React.Component<IProps> {
    componentDidUpdate() {
       
       const { navigation, route } = this.props;
       console.dir(navigation)
    //    navigation.reset();
       navigation.setOptions({
           headerTitle: getHeaderTitle(route)
       })
    }
    
    render() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#f86442",
                }}
            >
                <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: '首页' }} />
                <Tab.Screen name="Listen" component={Listen} options={{ tabBarLabel: '我听' }} />
                <Tab.Screen name="Found" component={Found} options={{ tabBarLabel: '发现' }} />
                <Tab.Screen name="Account" component={Account} options={{ tabBarLabel: '我的' }} />
            </Tab.Navigator>
        )
    }
}

export default BottomTabs
