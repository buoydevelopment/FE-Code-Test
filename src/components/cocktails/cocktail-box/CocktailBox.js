import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import Typography from '../../common/typography/Typography';
import Spacing from '../../common/spacing/Spacing';
import PlaceHolderImage from '../../common/placeholder-image/PlaceHolderImage';
import Cocktail from '../../../entities/Cocktail';


const ListingBox = ( { item, onCocktailPress } ) => (
	<TouchableOpacity
		style={[ styles.cocktail ]}
		activeOpacity={0.9}
		onPress={() => onCocktailPress( item )}
	>
		<View style={styles.info}>
			<Typography
				variant="bodyTitleRegular"
				color="black"
				style={styles.textTitle}
			>
				{item.strDrink}
			</Typography>
			<Spacing size="thin" />
		</View>
		<View style={styles.cocktailPhoto}>
			<PlaceHolderImage
				style={styles.image}
				source={{ uri: item.strDrinkThumb }}
			/>
		</View>
	</TouchableOpacity>
);

ListingBox.propTypes = {
	item: PropTypes.instanceOf( Cocktail ).isRequired,
	onCocktailPress: PropTypes.func
};

ListingBox.defaultProps = {
	onCocktailPress: () => {}
};

export default ListingBox;
