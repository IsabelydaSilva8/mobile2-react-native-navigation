import React from "react";
import { DeviceEventEmitter, Text, TouchableOpacity, View } from "react-native";

export function Slide05(){
    return(
        <View>
            <TouchableOpacity
                onPress={() => DeviceEventEmitter.emit("voltarPrincipal")}
                style={{ marginTop: 20, padding: 10, backgroundColor: "#007AFF", borderRadius: 5 }}
            >
                <Text style={{ color: "#FFF" }}>Voltar</Text>
            </TouchableOpacity>
            <Text>
                Oi
            </Text>
        </View>
    )
}