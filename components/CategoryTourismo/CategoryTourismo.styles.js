import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    //margin: 20,
    height: 70,
    width: "auto",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },

  banner: {
    height: 70,
    width: "auto",
    flex: 1,
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    color: "white",
  },
});
