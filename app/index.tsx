import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { useEffect } from "react";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@/hooks";
import { ThemedView } from "@/components/core/layout";
import { ThemedText } from "@/components/core/ThemedText";

const Welcome = () => {
  const insets = useSafeAreaInsets();
  const { setTheme } = useTheme();
  const theme = useColorScheme();

  const getPokomon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    // getPokomonWithId(1)

    return () => {};
  }, []);

  const getPokomonWithId = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    console.log(data);
  }

  const data = {
    count: 1302,
    next: "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
    previous: null,
    results: [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
      { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
      { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
      { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
      { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
      { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
      { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
    ],
  };
  return (
    <ThemedView
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,

        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>This is top text.</Text>
      <Link href="/home">
        <ThemedText type="link">Go to home screen!</ThemedText>
      </Link>
      <ThemedText
        type="link"
        onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Theme
      </ThemedText>
      <ThemedText>This is bottom text.</ThemedText>
    </ThemedView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
