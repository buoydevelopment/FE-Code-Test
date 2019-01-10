import { StyleSheet } from "react-native";
import { Metrics, Colors, Fonts } from "../../Themes";

export default StyleSheet.create({
  container: {
    height: Metrics.navBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    ...Fonts.style.h6,
    color: Colors.silver,
    fontWeight: "800",
    textAlign: "center"
  },
  buttonContainer: {
    height: Metrics.navBarHeight,
    width: Metrics.navBarHeight,
    justifyContent: "center",
    alignItems: "center"
  }
});
