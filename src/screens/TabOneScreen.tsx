import { Pressable, PressableProps, StyleSheet, TextStyle, ViewStyle } from "react-native";

import EditScreenInfo from "@components/EditScreenInfo";
import { Text, View } from "@components/Themed";
import { RootTabScreenProps } from "@navigation/types";
import useCountStore from "@store/useCountStore";

export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
    const { count, increment, decrement } = useCountStore((state) => state);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="/screens/TabOneScreen.tsx" />
            <Button label="Increment" style={{ backgroundColor: "blue" }} labelStyle={{ color: "white" }} onPress={increment} />
            <Text> {count} </Text>
            <Button label="Decrement" style={{ backgroundColor: "blue" }} labelStyle={{ color: "white" }} onPress={decrement} />
        </View>
    );
}

const Button = ({ label, style, labelStyle, ...props }: { label: string; style?: ViewStyle; labelStyle?: TextStyle } & PressableProps) => {
    return (
        <Pressable style={[{ paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }, style]} {...props}>
            <Text style={labelStyle}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
