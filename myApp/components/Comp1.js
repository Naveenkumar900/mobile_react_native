import { View, Button, StyleSheet } from "react-native";

export function Comp1({ navigation }){
  return (
    <View style={styles.container}>
      <View style={styles.button}><Button title="Go To Counter" onPress={() => navigation.navigate("Counter")} /></View>
      <View style={styles.button}><Button title="Go To Useeffectdemo" onPress={() => navigation.navigate("Useeffectdemo")} /></View>
      <View style={styles.button}><Button title="Go To Axiosdemo" onPress={() => navigation.navigate("Axiosdemo")} /></View>
      <View style={styles.button}><Button title="Go To Logindemopage" onPress={() => navigation.navigate("Logindemopage")} /></View>
      <View style={styles.button}><Button title="Go To Body" onPress={() => navigation.navigate("Body")} /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  button: { marginVertical: 6 }
});