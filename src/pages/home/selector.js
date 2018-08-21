import { createStructuredSelector } from 'reselect';
import { cocktailListSelector } from '../../selectors/cocktail';

export default createStructuredSelector({
  cocktailList: cocktailListSelector
});
