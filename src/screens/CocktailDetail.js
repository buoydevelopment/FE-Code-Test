/* eslint-disable react/prop-types */
import React from 'react';
import {
	View, StyleSheet, SafeAreaView
} from 'react-native';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import colors from '../theme/Colors';
import { responsiveSize } from '../utils/dimensions';
// import Cocktail from '../entities/Cocktail';
import Typography from '../components/common/typography/Typography';
import { fetchCocktails } from '../actions/cocktails';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: colors.lightBlueBackgroung,
		justifyContent: 'center',
		alignItems: 'center'
	},
	  textTitle: {
		marginTop: responsiveSize( 30 ),
		color: colors.white
	  }
} );

const title = 'detalle';

class CocktailDetail extends React.Component {
	/* static options() {
		return {
			topBar: {
				leftButtons: [
					{
						id: 'back',
						icon: require( '../assets/icons/back.png' )
					}
				],
				rightButtons: []
			}
		};
	} */

	componentDidMount() {
	}

	render() {
		// const { item } = this.props;

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
				</View>
			</SafeAreaView>
		);
	}
}

/* CocktailDetail.propTypes = {
	item: PropTypes.instanceOf( Cocktail ).isRequired
}; */

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
	)( CocktailDetail ),
);
