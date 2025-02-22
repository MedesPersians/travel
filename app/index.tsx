import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is text.</Text>
      <Link href={"/about"} style={styles.button}>
        Go to About Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    textDecorationColor: "#fff",
    color: "#fff",
  },
});
