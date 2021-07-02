import React, { useEffect } from "react";
import { Image, Text, View, Button } from "react-native";

import { styles } from "./DetailDestination.style";

export const DetailDestination = ({detailViewInfo,handleViewBack}) => {
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={detailViewInfo.ImageCardBackground} />
      <Text style={styles.descp} >{detailViewInfo.descripcion}</Text>
      <Text style={styles.txt} >
        Precio final ida/vuelta por persona AR$ {detailViewInfo.precio}
      </Text>
      <Button title="VOLVER" onPress={() => handleViewBack()} />
    </View>
  );
};

