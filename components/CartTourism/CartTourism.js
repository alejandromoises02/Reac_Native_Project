import React, {useEffect} from "react";
import {Image, Text, View, ImageBackground, Button} from "react-native";

import { styles } from './CartTourism.styles'

export const CartTourism = ({destino, handleView}) => {


  return (
    <View style={styles.card}>
      <ImageBackground source={destino.ImageCardBackground} style={styles.banner}>
        <Text style={(styles.textoH1, styles.textWhite)}>Vuelo a {destino.texto}</Text>
        <Text style={styles.textWhite}>Desde Buenos Aires</Text>
      </ImageBackground>
      <View style={styles.banner_info}>
        <Image style={styles.icon} source={require("./../../assets/avion.png")} />
        <View>
          <Text>A partir de</Text>
          <Text style={styles.textoH1}>AR$ {destino.precio}</Text>
        </View>
      </View>
      <Button title="VER MAS" onPress={() => handleView(destino.id)} />
    </View>
  );
};
