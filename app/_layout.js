import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#1e1e1e" />
      <Stack
        screenOptions={{
          headerTitle: "Cocineritos 🍽️",
          headerStyle: { backgroundColor: "#1e1e1e" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </>
  );
}
