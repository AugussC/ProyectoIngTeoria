import React from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";

export default function DetailScreen({ route }) {
  const { shirt } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={shirt.image} style={styles.image} />
      <Text style={styles.name}>{shirt.name}</Text>
      <Text style={styles.price}>{shirt.price}</Text>
      <Text style={styles.description}>{shirt.description}</Text>
      <Text style={styles.history}>{shirt.history}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#121212",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "limegreen",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 10,
  },
  history: {
    fontSize: 14,
    color: "#aaa",
    fontStyle: "italic",
  },
});
