
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { DeviceEventEmitter, Text, TouchableOpacity, View } from "react-native";
import { MenuTabs } from '../../navigation/MenuBottomTab.navigation';
import { MenuDrawer } from '../../navigation/MenuDrawer.navigation';
import { MenuStack } from '../../navigation/MenuStack.navigation';

export function Principal(){
    const navigation = useNavigation<any>();
    const [mostrarMenuStack, setMostrarMenuStack] = useState(false);
    const [mostrarMenuDrawer, setMostrarMenuDrawer] = useState(false);
    const [mostrarMenuBottomTab, setMostrarMenuBottomTab] = useState(false);

    useEffect(() => {
        const evento = DeviceEventEmitter.addListener("voltarPrincipal", () => {
            setMostrarMenuStack(false);
            setMostrarMenuDrawer(false);
            setMostrarMenuBottomTab(false);
        });
        return () => evento.remove();
    }, []);

    if (mostrarMenuStack) {
        return <MenuStack />;
  }
    if (mostrarMenuDrawer) {
        return <MenuDrawer />;
  }
   if (mostrarMenuBottomTab) {
        return <MenuTabs />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Olaaaaa</Text>

      <TouchableOpacity
        onPress={() => setMostrarMenuStack(true)}
        style={{ marginTop: 20, padding: 10, backgroundColor: "#007AFF", borderRadius: 5 }}
      >
        <Text style={{ color: "#FFF" }}>Menu Stack</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setMostrarMenuDrawer(true)}
        style={{ marginTop: 20, padding: 10, backgroundColor: "#007AFF", borderRadius: 5 }}
      >
        <Text style={{ color: "#FFF" }}>Menu Drawer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setMostrarMenuBottomTab(true)}
        style={{ marginTop: 20, padding: 10, backgroundColor: "#007AFF", borderRadius: 5 }}
      >
        <Text style={{ color: "#FFF" }}>Menu BottomTab</Text>
      </TouchableOpacity>
    </View>
  );
}