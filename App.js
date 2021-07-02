import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { CartTourism } from "./components/CartTourism/CartTourism";
import { DetailDestination } from "./components/DetailDestination/DetailDestination";
import miami from './assets/miami.jpg'
import paris from './assets/paris.jpg'



const destinos = [
  { id: 1, ImageCardBackground: miami, texto: "Miami", precio: "87.976", descripcion: "Viajar a Miami ofrece al turista una experiencia mágica. De hecho, Ciudad Mágica es el sobrenombre que recibe Miami: llena de sabores distintos, gente de todo el mundo, playas hermosas, glamour, naturaleza, vida nocturna, cruceros... es un lugar lleno de vida, en constante movimiento, capaz de cautivar a cualquier viajero." },
  { id: 2, ImageCardBackground: paris, texto: "Paris", precio: "157.875", descripcion: "París es la capital de Francia y constituye una de las ciudades más importantes e influyentes del mundo. Desde el punto de vista turístico, París es una de las ciudades más visitadas de Europa." },
];

export default function App() {
  const [detailView, setDetailView] = useState(false);
  const [detailViewInfo, setDetailViewInfo] = useState({});

  function  handleView(id) {
    const destino = destinos.find((element) => element.id == id);
    setDetailViewInfo(destino);
    setDetailView(true);
  };

  function  handleViewBack() {
    setDetailView(false);
    setDetailViewInfo({});
  };

  return (
    <SafeAreaView style={styles.screen}>
      {detailView ? (
        <DetailDestination detailViewInfo={detailViewInfo} handleViewBack={handleViewBack}/>
      ) : (
        destinos.map((destino) => (
          <CartTourism
            key={destino.id}
            destino={destino}
            handleView={(id) => handleView(id)}
          />
        ))
      )}
    </SafeAreaView>
  );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 60,
    paddingHorizontal: 5,
    flex: 1,
  },
});

/*<View style={styles.card}>
        <ImageBackground source={} style={styles.banner}>
          <Text style={styles.textoH1, styles.textWhite}>Vuelo a Miami</Text>
          <Text style={styles.textWhite}>Desde Buenos Aires</Text>
        </ImageBackground>
        <View style={styles.banner_info}>
          <Image style={styles.icon} source={require("./assets/avion.png")} />
          <View>
            <Text>A partir de</Text>
            <Text style={styles.textoH1}>AR$ 87.976</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <ImageBackground source={paris} style={styles.banner}>
          <Text style={styles.textoH1, styles.textWhite}>Vuelo a Paris</Text>
          <Text style={styles.textWhite}>Desde Buenos Aires</Text>
        </ImageBackground>
        <View style={styles.banner_info}>
          <Image style={styles.icon} source={require("./assets/avion.png")} />
          <View>
            <Text>A partir de</Text>
            <Text style={styles.textoH1}>AR$ 157.875</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <ImageBackground source={habana} style={styles.banner}>
          <Text style={styles.textoH1, styles.textWhite}>Vuelo a La Habana</Text>
          <Text style={styles.textWhite}>Desde Buenos Aires</Text>
        </ImageBackground>
        <View style={styles.banner_info}>
          <Image style={styles.icon} source={require("./assets/avion.png")} />
          <View>
            <Text>A partir de</Text>
            <Text style={styles.textoH1}>AR$ 54.796</Text>
          </View>
        </View>
      </View>*/
