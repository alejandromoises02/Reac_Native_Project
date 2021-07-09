import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import miami from "./../../assets/miami.jpg";

//import { styles } from './CategoryTourismo.styles'

const paquetes = {
  ImageCardBackground: miami,
  title: "Viajes",
  descripction: "los mejores paquetes a tu disposicion",
};

export const PaquetesView = () => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={paquetes.ImageCardBackground}
        style={styles.banner}
      >
        <Text style={styles.text}>{paquetes.descripction}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 40,
    height: 400,
    width: "auto",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 5,
  },
  banner: {
    width: "auto",
    height: 150,
    padding: 20,
  },
  text: {
    fontSize: 40,
    color: "white"
  },
});
