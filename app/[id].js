import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, Image, View } from "react-native";
import { recipes } from "../data/recipes";

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>Receta no encontrada</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "#121212", padding: 20 }}>
      <Image source={recipe.image} style={{ width: "100%", height: 300, borderRadius: 10 }} />
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff", marginTop: 20 }}>
        {recipe.name}
      </Text>
      <Text style={{ fontSize: 16, color: "#ccc", marginTop: 10 }}>{recipe.description}</Text>
      <Text style={{fontSize: 16, color: "#ccc", marginTop: 10  }}>{recipe.historia}</Text>
      <Text style={{fontSize: 16, color: "#ccc", marginTop: 10 , marginBottom: 50 }}>{recipe.receta}</Text>
    </ScrollView>
  );
}
