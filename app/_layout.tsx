import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { Link } from 'expo-router';

const RootLayout = () => {

  return (
    //Fragments 
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

    </Stack>

  )
}

export default RootLayout;

//Creo un componente en donde se importa el status bar de expo-status-b