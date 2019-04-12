import { StyleSheet } from 'react-native';

const CocktailDetailCardStyles = StyleSheet.create({
  cocktailName: {
    fontSize: 30,
    alignSelf: 'center',
    marginVertical: 10,
    color: '#fff',
  },
  cardContainer: {
    justifyContent: 'space-around',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    height: 275,
    width: 275,
    marginBottom: 15,
    alignSelf: 'center',
  },
  instructionTitle: {
    marginVertical: 10,
  },
});

export default CocktailDetailCardStyles;
