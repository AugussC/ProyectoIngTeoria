import { ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { ShirtCard } from "../components/RecetaCard.js";
import { recipes } from "../data/recipes.js";

export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: "#121212", padding: 20 }}>
      {recipes.map((item) => (
        <Link
          key={item.id}
          href={`/${item.id}`}
          asChild
        >
          <Pressable>
            <ShirtCard shirt={item} />
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}
