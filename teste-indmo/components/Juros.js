import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";

export default function Juros() {
    const [ value, setValue ] = React.useState();
    const [ tax, setTax ] = React.useState();
    const [ total, setTotal] = React.useState();

    const calculateTax = () => {
        let total = parseInt(value) + (parseInt(value) * parseInt(tax) / 100);
        setTotal(total);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cálculo de Juros</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Valor a ser taxado"
                    onChangeText={setValue}
                    inputMode="numeric"
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Porcentagem da taxa"
                    onChangeText={setTax}
                    inputMode="numeric"
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={calculateTax}
                >
                    <Text>
                        Cacular
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 15, margin: 5}}>
                    Valor Final: {(total === undefined) ? "R$" : `R$${total}`}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    title: {
        fontSize: 20
    },
    form: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        gap: 10,
    },
    textInput: {
        backgroundColor: "#f6f6f6",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#97E7E1",
        borderRadius: 10,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    }
});
