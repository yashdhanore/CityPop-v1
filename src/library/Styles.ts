import { StyleSheet } from "react-native";

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
});
