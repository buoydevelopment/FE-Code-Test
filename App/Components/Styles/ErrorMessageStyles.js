import { Metrics, Colors, Fonts } from "../../Themes";

export default {
  text: {
    ...Fonts.style.h6,
    color: Colors.snow,
    maxWidth: 150,
    textAlign: "center"
  },
  messageContainer: {
    alignItems: "center",
    backgroundColor: Colors.facebook,
    borderRadius: 10,
    elevation: 3,
    flex: 1,
    flexDirection: "row",
    height: Metrics.listItemWithThumbnailHeight,
    justifyContent: "center",
    padding: Metrics.basePadding
  }
};
