import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Home({ navigation }) {
    const goToSwitch = () => {
        navigation.navigate("Juros", { name: "Juros" });
    }

    const goToJuros = () => {
        navigation.navigate("Switch", { name: "Switch" })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Opções</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goToSwitch}
                >
                    <Text>
                        Cálculo de Juros
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goToJuros}
                >
                    <Text>
                        Switch
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    title: {
        fontSize: 25,
    },
    buttonContainer: {
        gap: 15
    },
    button: {
        alignItems: "center",
        backgroundColor: "#97E7E1",
        fontSize: 15,
        borderRadius: 10,
        padding: 15,
        paddingRight: 25,
        paddingLeft: 25,
    }
});
