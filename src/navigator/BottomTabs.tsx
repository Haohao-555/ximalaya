import React from "react";
import { RouteProp, TabNavigationState, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RootStackNavigation, RootStackParamList } from "./index";
import Account from "@/pages/Account"
import Listen from "@/pages/Listen"
import Found from "@/pages/Found"
import { LogBox} from "react-native";
import Icon from '@/assets/iconfont';
import HomeTabs from "./HomeTabs";
// 底部导航分类
export type BottomTabParamList = {
  HomeTabs: undefined;
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
    case 'HomeTabs':
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
    navigation.setOptions({
      headerTitle: getHeaderTitle(route)
    })

  }
  componentDidMount() {
    LogBox.ignoreAllLogs()
  }
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f86442',
        }}
      >
        <Tab.Screen name="HomeTabs" component={HomeTabs} options={{ tabBarLabel: '首页', tabBarIcon: ({color, size}) => (
              <Icon name="icon-shouye" color={color} size={size} />
            ),}} />
        <Tab.Screen name="Listen" component={Listen} options={{ tabBarLabel: '我听', tabBarIcon: ({color, size}) => (
              <Icon name="icon-wotingwokan-" color={color} size={size} />
            ),}} />
        <Tab.Screen name="Found" component={Found} options={{ tabBarLabel: '发现', tabBarIcon: ({color, size}) => (
              <Icon name="icon-faxian" color={color} size={size} />
            ),}} />
        <Tab.Screen name="Account" component={Account} options={{ tabBarLabel: '我的', tabBarIcon: ({color, size}) => (
              <Icon name="icon-wodefill" color={color} size={size} />
            ),}} />
      </Tab.Navigator>
    )
  }
}

export default BottomTabs
