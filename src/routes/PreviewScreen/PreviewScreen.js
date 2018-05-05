import React from "react";
import {
	Image,
	View,
	StyleSheet,
	TouchableOpacity,
	Animated,
	Easing,
	Text,
	StatusBar,
	Platform,
	ScrollView,
} from "react-native";
import { width, height } from "react-native-dimension";
import AIcon from 'react-native-vector-icons/Ionicons';
import PropTypes from "prop-types";

// Global functions for multi-device constraints
import {
	scale,
	scaleByVertical
} from '../../global/constants';

// References to styles including colors
import { colors } from "../../config/styles";

// References to images
import images from "../../config/images";

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  itemContainer: {
    height: width(100) / 2 - scale(20),
    marginVertical: scaleByVertical(10),
    marginHorizontal: scale(20),
    backgroundColor: colors.white,
    borderRadius: scale(5),
    padding: scale(20),
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
	  elevation: Platform.OS === "android" ? 2 : 0,
	  flexDirection: 'row'
  },
  textInputStyle: {
    backgroundColor: colors.transparent,
    textAlign: "center",
	  fontSize: scaleByVertical(20),
	  height: scaleByVertical(30),
    padding: 0,
    paddingLeft: 20,
    paddingRight: scaleByVertical(30),
	  color: colors.white,
	  flex: 1,
  },
});

const PreviewScreen = (props) => {
	const { updateState, backButtonTapped } = props;
	return <View style={styles.container}>
		<StatusBar hidden={true} />
		<View style={{ flex: 1 }}>
        <View style={{
            height: scaleByVertical(30), flexDirection: "row", justifyContent: "center", marginTop: scaleByVertical(30), paddingHorizontal: scale(20)
          }}
        >
		  <AIcon name={"ios-arrow-round-back"} style={{ color: colors.white, fontSize: scaleByVertical(30), position: 'absolute', right: scale(20), marginTop: 0 }} />
        </View>

      </View>
	</View>;
};

PreviewScreen.propTypes = {
	backButtonTapped: PropTypes.func.isRequired,
	updateState: PropTypes.func.isRequired
};

export default PreviewScreen;
