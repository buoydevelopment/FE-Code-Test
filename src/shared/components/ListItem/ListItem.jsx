import React from "react";
import { withRouter } from 'react-router-dom';
import { getObjProps } from '../../utils/utils';
import OnVisible from 'react-on-visible';
import './ListItem.scss';

const MAX_INGREDIENTS = 2;

const ListItem = (props) => {

	const onClick = () => {
		props.onClick(props.cocktail);
		props.history.push('/cocktail/' + props.cocktail.idDrink);
	};

	const formatIngredients = (max) => {
		const originalIngredients = getObjProps(props.cocktail, 'ingredient');
		const ingredientsToList = originalIngredients.slice(0, max);
		const dif = originalIngredients.length - ingredientsToList.length;
    return (
        <p>
					{ingredientsToList.map((ing, i) => {
						return (
							<li key={i}>{props.cocktail[ing]}</li>
						);
					})}
					{dif > 0 && <span>{`y ${dif} ingrediente/s mas`}</span>}
				</p>
    );
  };

	const onVisible = (isvisible) => {
		if (isvisible) {
			props.shouldGetIngredients(props.cocktail.idDrink);
		}
	}

	return (
		<OnVisible
			onChange={onVisible}
			percent={10}>
				<div onClick={onClick} className='box has-background-white-ter'>
					<div className='columns'>
						<div className='column'>
							<p className='title is-3'>
								{props.cocktail.strDrink}
							</p>
							{formatIngredients(MAX_INGREDIENTS)}
						</div>
						<div className='column'>
							<img alt={''} src={props.cocktail.strDrinkThumb} />
						</div>
					</div>
				</div>
		</OnVisible>
	);
}

export default withRouter(ListItem);