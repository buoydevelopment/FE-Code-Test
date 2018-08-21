import { createStructuredSelector } from 'reselect';
import { cocktailDetailSelector } from '../../selectors/cocktail';

export default createStructuredSelector({
  cocktailDetail: cocktailDetailSelector
});
