import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import paris from "./../../assets/paris.jpg";

//import { styles } from './CategoryTourismo.styles'

const viajes = {
  ImageCardBackground: paris,
  title: "Paquetes",
  descripction: "los mejores destinos a tu disposicion",
};

export const ViajesView = () => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={viajes.ImageCardBackground}
        style={styles.banner}
      >
        <Text style={styles.text}>{viajes.descripction}</Text>
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
  