import React from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	StatusBar,
	Platform,
	ScrollView,
} from "react-native";
import { width, height } from "react-native-dimension";
import AIcon from "react-native-vector-icons/Ionicons";
import { CustomCachedImage, CachedImage } from "react-native-img-cache";
import ImageProgress from "react-native-image-progress";
import PropTypes from "prop-types";

// Global functions for multi-device constraints
import {
	scale,
	scaleByVertical
} from '../../global/constants';

// References to styles including colors
import { colors } from "../../config/styles";

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  topContainer: {
    height: scaleByVertical(30),
    justifyContent: "center",
    marginTop: scaleByVertical(30),
    paddingHorizontal: scale(20)
  },
  itemContainer: {
    height: height(100) - scaleByVertical(110),
    marginVertical: scaleByVertical(10),
    marginHorizontal: scale(20),
    backgroundColor: colors.white,
    borderRadius: scale(5),
    padding: scale(20),
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
	  elevation: Platform.OS === "android" ? 2 : 0
  },
  itemTitleStyle: {
    backgroundColor: colors.transparent,
    textAlign: "center",
	  fontSize: scaleByVertical(20),
	  height: scaleByVertical(30),
	  color: colors.white,
	  flex: 1
  },
  imageStyle: {
    width: scale(335),
    height: scale(250)
  },
  itemTextStyle: {
    lineHeight: scaleByVertical(20),
    fontSize: scaleByVertical(15),
    color: colors.gray,
    fontWeight: '600'
  }
});

const PreviewScreen = (props) => {
	const { updateState, backButtonTapped } = props;
	return <View style={styles.container}>
		<StatusBar hidden={true} />
		<View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => { backButtonTapped(); }} style={styles.topContainer}>
        <AIcon name={"ios-arrow-round-back"} style={{ color: colors.white, fontSize: scaleByVertical(30), position: 'absolute', marginTop: 0, marginLeft: scale(20) }} />
        <Text style={styles.itemTitleStyle}>{props.currentTitle}</Text>
      </TouchableOpacity>
      {props.currentItem && props.currentItem !== undefined ?
        <View style={styles.itemContainer}>
          <ScrollView style={{ flex: 1 }}>
            <CachedImage
              component={ImageProgress}
              resizeMode="cover"
              // indicator={ProgressBar}
              source={{ uri: props.currentItem.strDrinkThumb }}
              style={styles.imageStyle}
            />
            {props.categories.length > 0 ?
              <View style={{ marginTop: scaleByVertical(20) }}>
                {props.categories.map((item, index) => {
                  return (
                    <Text key={index} style={styles.itemTextStyle}>
                      {item}
                    </Text>
                  );
                })}
              </View>
              :
              null}
            {props.currentItem.strInstructions && props.currentItem.strInstructions !== undefined && props.currentItem.strInstructions !== "" ?
              <View style={{ marginTop: scaleByVertical(20) }}>
                <Text style={styles.itemTextStyle}>
                  {'• How to prepare'}
                </Text>
                <Text style={[styles.itemTextStyle, { lineHeight: scaleByVertical(18), marginTop: scaleByVertical(10) }]}>
                  {props.currentItem.strInstructions}
                </Text>
              </View>
              :
              null}
          </ScrollView>
        </View>
        :
        null}
    </View>
	</View>;
};

PreviewScreen.propTypes = {
	backButtonTapped: PropTypes.func.isRequired,
	updateState: PropTypes.func.isRequired
};

export default PreviewScreen;
