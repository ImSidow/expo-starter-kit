import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";

import Colors from "../helpers/constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { RootTabParamList, RootTabScreenProps } from "./types";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
    const colorScheme = useColorScheme();
    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name="TabOne"
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
                    title: "Tab One",
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate("Modal")}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <FontAwesome name="info-circle" size={25} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    title: "Tab Two",
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
};

type TabBarIconPropsType = {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
};
const TabBarIcon = (props: TabBarIconPropsType) => {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};

export default BottomTabNavigator;
