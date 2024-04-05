import {
    StyleSheet,
    View,
    Switch,
    Image,
    Text,
} from "react-native";
import { useState } from 'react';

export default function SwitchLampada() {
    const [ switchState, setSwitchState ] = new useState(false);

    const changeSwitchState = () => {
        setSwitchState(!switchState);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25 }}>Tente acender a lâmpada</Text>
            <View style={styles.lampadaContainer}>
                <Switch 
                    value={switchState} 
                    onValueChange={changeSwitchState}
                    style={{ marginBottom: 25 }} 
                />
                <Image 
                    source={{ uri: (switchState) ? "./assets/lightbulbON.png" : "./assets/lightbulbOFF.png" }}
                    style={styles.lampada}
                />
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
    lampadaContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 45,
    },
    lampada: {
        width: 200,
        height: 200,
    }
});

