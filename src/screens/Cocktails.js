/* eslint-disable react/prop-types */
import React from 'react';
import {
	View, FlatList, StyleSheet, SafeAreaView
} from 'react-native';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import colors from '../theme/Colors';
import { responsiveSize } from '../utils/dimensions';
import CocktailBox from '../components/cocktails/cocktail-box/CocktailBox';
import Cocktail from '../entities/Cocktail';
import Typography from '../components/common/typography/Typography';
import { fetchCocktails } from '../actions/cocktails';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: colors.lightBlueBackgroung,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cocktailList: {
		marginTop: responsiveSize( 10 )
	  },
	  textTitle: {
		marginTop: responsiveSize( 30 ),
		color: colors.white
	  }
} );

const title = 'Ramdom Drinks 0.1';

class Cocktails extends React.Component {
	componentDidMount() {
		const { fetchCocktailsConnect } = this.props;
		fetchCocktailsConnect();
	}

	render() {
		const { cocktails } = this.props;

		return (
			<SafeAreaView style={styles.container}>
				<View>
					<Typography
						variant="bodyTitle"
						color="black"
						style={styles.textTitle}
					>
						{title}
					</Typography>
					<FlatList
						style={styles.cocktailList}
						keyExtractor={( item, index ) => index.toString()}
						data={cocktails}
						renderItem={( { item } ) => (
							<CocktailBox
								item={Cocktail.fromJSON( item )}
								// onStudioPress={studio => onStudioPress( studio )}
							/>
						)}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = state => ( {
	cocktails: state.cocktails.cocktails
} );

const mapDispatchToProps = dispatch => bindActionCreators( {
	fetchCocktailsConnect: fetchCocktails
}, dispatch );

export default compose(
	connect(
	  mapStateToProps,
	  mapDispatchToProps,
	)( Cocktails ),
);
