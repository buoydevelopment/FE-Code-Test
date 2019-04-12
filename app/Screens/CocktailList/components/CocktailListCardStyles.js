import { StyleSheet } from 'react-native';

const CocktailListCard = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  cocktailNameContainer: {
    flex: 1,
  },
  cocktailName: {
    fontSize: 20,
  },
  cocktailImageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cocktailImage: {
    height: 100,
    width: 100,
  },
});

export default CocktailListCard;
