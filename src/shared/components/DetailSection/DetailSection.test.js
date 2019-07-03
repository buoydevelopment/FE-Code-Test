import React from 'react';
import { shallow } from 'enzyme';
import { DetailSection } from './DetailSection';
import { spy } from 'sinon';
import Spinner from '../Spinner/Spinner';

describe('DetailSection', () => {

		const selectedCocktail =
		{
			strDrinkThumb: "imageUrl",
			strDrink: "Cocktail Name",
			idDrink: "CocktailId",
			ingredient1: "Ingredient 1",
		};

		const fetching = false;
		const getDetail = spy();
		const cleanDetail = spy();
		const history = {
			goBack: () => {}
		};

    const detail = shallow(
			<DetailSection
				fetching={fetching}
				cocktail={selectedCocktail}
				getDetail={getDetail}
				cleanDetail={cleanDetail}
				history={history} />
    );
  
    it('Should render properly', () => {
      expect(detail.find('.level-left').length).toBe(2);
      expect(detail.find('.level-right').length).toBe(2);
      expect(detail.find('.ingredients').length).toBe(1);
      expect(detail.find('.how-to').length).toBe(1);
		});
		
		it('Should react to click', () => {
			detail.find('.level-left').first().simulate('click');
			expect(cleanDetail.called).toBe(true);
		});
		
		it('Should react to prop changes', () => {
			detail.setProps({ fetching: true, cocktail: {} });
			expect(detail.find(Spinner).length).toBe(1);
			expect(detail.find(Spinner).props().message).toBeDefined();
			expect(detail.find(Spinner).props().message).toEqual("Loading ...");
			detail.setProps({ fetching: false, cocktail: selectedCocktail });
			expect(detail.find(Spinner).length).toBe(0);
    });
  });