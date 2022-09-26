import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import AppStack from "./AppStack";

export default function Router({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <AppStack />
        </NavigationContainer>
    );
}
