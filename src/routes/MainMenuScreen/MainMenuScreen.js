import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  TextInput
} from "react-native";
import { width, height } from "react-native-dimension";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CustomCachedImage, CachedImage } from "react-native-img-cache";
import ImageProgress from "react-native-image-progress";
import PropTypes from "prop-types";
import AIcon from "react-native-vector-icons/Ionicons";

// Global functions for multi-device constraints
import {
  scale,
  scaleByVertical,
} from "../../global/constants";

// References to styles including colors
import { colors } from "../../config/styles";

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
	  flexDirection: "row"
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
  searchIconStyle: {
    color: colors.white,
    fontSize: scaleByVertical(30),
    position: "absolute",
    right: scale(20),
    marginTop: 0
  },
  itemTitleStyle: {
    color: colors.gray,
    fontSize: scaleByVertical(25),
    fontWeight: "600"
  },
  topContainer: {
    height: scaleByVertical(30),
    flexDirection: "row",
    justifyContent: "center",
    marginTop: scaleByVertical(30),
    paddingHorizontal: scale(20)
  }
});

const MainMenuScreen = (props) => {
  const { updateState, showCocktailItem } = props;
  const filteredItems = props.keywordText === "" ? props.cocktails : props.cocktails.filter(item => (item.strDrink.indexOf(props.keywordText) !== -1));
  return (<View style={styles.container}>
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <StatusBar hidden />
      <View style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => { updateState({ keywordText: text }); }}
            placeholder="Random drinks 0.1"
            placeholderTextColor={colors.white}
            style={styles.textInputStyle}
            underlineColorAndroid={colors.transparent}
            value={props.keywordText}
          />
          <AIcon
            name="ios-search"
            style={styles.searchIconStyle}
          />
        </View>
        <ScrollView style={{ flex: 1 }}>
          {filteredItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => { showCocktailItem(props.cocktails.indexOf(item)); }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitleStyle}>{item.strDrink}</Text>
              </View>
              <View style={{ width: scale(50) }} />
              <View style={{ flex: 1 }}>
                <CachedImage
                  component={ImageProgress}
                  resizeMode="cover"
                  // indicator={ProgressBar}
                  source={{ uri: item.strDrinkThumb }}
                  style={{ flex: 1, borderRadius: scale(5) }}
                />
              </View>
            </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  </View>);
};

MainMenuScreen.propTypes = {
  showCocktailItem: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default MainMenuScreen;
