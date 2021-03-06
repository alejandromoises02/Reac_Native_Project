import React, {useEffect} from "react";
import {Image, Text, View, ImageBackground, Button, TouchableHighlight} from "react-native";

import { styles } from './CategoryTourismo.styles'

export const CategoryTourismo = ({categoria}) => {
console.log(categoria);

  return (
    
    <View style={styles.card}>
      <ImageBackground source={categoria.ImageCardBackground} style={styles.banner}>
        <Text style={(styles.texto)}>{categoria.name}</Text>
      </ImageBackground>
    </View>
    
  );
};