import React from "react";
import { View, Text, Image, StyleSheet, } from "react-native";

// Componente que muestra una camiseta
export function ShirtCard({ shirt }) {
  return (
    <View style={styles.card}>
      <Image source={shirt.image} style={styles.image} />
      <Text style={styles.name}>{shirt.name}</Text>
      <Text style={styles.description}>{shirt.description}</Text>
    </View>
  );
}

// Componente principal


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    padding: 20,
  },
  header: {
    backgroundColor: "#1e1e1e",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    marginTp: 10,
    marginBottom: 30,
    elevation: 4, // sombra en Android
    shadowColor: "#000", // sombra en iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  logo: {
    width: 160,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#f2f2f2",
    textAlign: "center",
  },
  card: {
    marginBottom: 30,
    backgroundColor: "#2a2a2a",
    padding: 15,
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 12,
  },
  price: {
    fontSize: 18,
    color: "limegreen",
    fontWeight: "bold",
    marginVertical: 6,
  },
  description: {
    fontSize: 14,
    color: "#ccc",
  },
});