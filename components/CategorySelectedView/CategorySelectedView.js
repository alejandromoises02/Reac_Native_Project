import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { filterServices } from "./../../store/actions/services.action";

export const CategorySelectedView = () => {
  const dispatch = useDispatch();
  const categoryServices = useSelector(
    (state) => state.services.filteredServices
  );
  console.log("categoryServices");
  console.log(categoryServices);
  const category = useSelector((state) => state.categories.selected);
  console.log("category");
  console.log(category);

  useEffect(() => {
    dispatch(filterServices(category.id));
  }, []);

  return (
    <SafeAreaView>
      {categoryServices.map((category, i) => (
        <View key={i} style={styles.card}>
          <ImageBackground
            source={category.ImageCardBackground}
            style={styles.banner}
          >
            <Text style={styles.text}>{category.description}</Text>
          </ImageBackground>
        </View>
      ))}
    </SafeAreaView>
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
    color: "white",
  },
});
