import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function ShirtCard({ shirt }) {
  return (
    <View style={styles.card}>
      <Image source={shirt.image} style={styles.image} />
      <Text style={styles.name}>{shirt.name}</Text>
      <Text style={styles.breveDescripcion}>{shirt.breveDescripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  breveDescripcion: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#f2f2f2",
    marginTop: 8,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#ccc",
  },
  
});
