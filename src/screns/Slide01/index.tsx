import React, { useState } from "react";
import { DeviceEventEmitter, Text, TouchableOpacity, View } from "react-native";
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";
import { Principal } from '../Principal';


export function Slide01({ navigation }: MenuStackTypes) {
    const [mostrarPrincipal, setMostrarPrincipal] = useState(false);
        if (mostrarPrincipal) {
            return <Principal />;
      }
    return(
        <View>
            <TouchableOpacity
                onPress={() => DeviceEventEmitter.emit("voltarPrincipal")}
                style={{ marginTop: 20, padding: 10, backgroundColor: "#007AFF", borderRadius: 5 }}
            >
                <Text style={{ color: "#FFF" }}>Voltar</Text>
            </TouchableOpacity>
            <Text>
                Olaaaaa
            </Text>
            
            <TouchableOpacity onPress={() => navigation.push("Slide2")}>
                <Text>
                    Slide 2
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}