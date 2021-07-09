import React, { useState } from "react";
import { SafeAreaView, TouchableHighlight } from "react-native";
import { CategoryTourismo } from "./../CategoryTourismo/CategoryTourismo";
import miami from "./../../assets/miami.jpg";
import paris from "./../../assets/paris.jpg";

import { StyleSheet } from "react-native";

const destinos = [
  {
    id: 1,
    ImageCardBackground: miami,
    texto: "Miami",
    precio: "87.976",
    descripcion:
      "Viajar a Miami ofrece al turista una experiencia mágica. De hecho, Ciudad Mágica es el sobrenombre que recibe Miami: llena de sabores distintos, gente de todo el mundo, playas hermosas, glamour, naturaleza, vida nocturna, cruceros... es un lugar lleno de vida, en constante movimiento, capaz de cautivar a cualquier viajero.",
  },
  {
    id: 2,
    ImageCardBackground: paris,
    texto: "Paris",
    precio: "157.875",
    descripcion:
      "París es la capital de Francia y constituye una de las ciudades más importantes e influyentes del mundo. Desde el punto de vista turístico, París es una de las ciudades más visitadas de Europa.",
  },
];

const categorias = [
  { id: 1, ImageCardBackground: miami, title: "Viajes" },
  { id: 2, ImageCardBackground: paris, title: "Paquetes" },
];

export const CategoryTourismoContainer = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      {categorias.map((categoria,i) => (
        <TouchableHighlight key={i}
          onPress={() => navigation.navigate(`${categoria.title}`)}
        >
          <CategoryTourismo  categoria={categoria} />
        </TouchableHighlight>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 100,
    paddingHorizontal: 5,
    flex: 1,
  },
});
