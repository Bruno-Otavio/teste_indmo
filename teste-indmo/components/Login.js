import {
    Dimensions, 
    View, 
    StyleSheet, 
    Text,
    TouchableOpacity,
} from "react-native";
import React from "react";
import MaskInput from "react-native-mask-input";

const { width, height } = Dimensions.get("screen");

const user = {
    username: "user",
    password: "123456",
}

export default function Login({ navigation }) {
    const [ username, setUsername ] = React.useState("user");
    const [ password, setPassword ] = React.useState("123456");

    const verifyUser = () => {
        if (password === user.password && username === user.username) {
            navigation.navigate("Home", { name: "Home" });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
                <MaskInput
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setUsername(masked)}
                    value={user.username}
                    placeholder="Digite seu Username"
                />
                <MaskInput
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setPassword(masked)}
                    value={user.password}
                    placeholder="Digite sua Senha"
                />
                <TouchableOpacity style={styles.button} onPress={verifyUser}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
    },
    title: {
        fontSize: 25,
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
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
