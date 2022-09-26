import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "./types";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default AppStack;
