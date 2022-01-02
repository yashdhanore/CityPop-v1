import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2e30",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 7,
    height: 50,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#f46530",
    alignSelf: "stretch",
  },
  buttonTextContainer: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: "stretch",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "normal",
    alignSelf: "center",
  },
  formatview: {
    flex: 1,
    marginVertical: 7,
    height: 50,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },

  cityName: {
    marginVertical: 7,
    height: 50,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2a2e30",
    alignSelf: "stretch",
    position: "absolute",
    marginLeft: "auto",
    top: Dimensions.get("window").height / 5,
    marginRight: "auto",
    width: Dimensions.get("window").width,
  },
  populationBox: {
    marginHorizontal: 6,
    minHeight: 125,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#f46530",
    alignSelf: "stretch",
  },
  result: {
    marginVertical: 7,
    height: 50,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#f46530",
    alignSelf: "stretch",
  },
  countryButtons: {
    minHeight: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 6,
    margin: 2,
    backgroundColor: "#f46530",
    alignSelf: "stretch",
  },
});
