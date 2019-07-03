import React from 'react';
import { withRouter } from 'react-router-dom';
import { getObjProps } from '../../utils/utils';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import './DetailSection.scss'
import Spinner from '../Spinner/Spinner';

export const DetailSection = (props) => {
  const [fetching, setfetching] = React.useState(true);

  const getObjPropsCount = () => Object.keys(props.cocktail).length;

  React.useEffect(() => {
    if (!(props.cocktail.idDrink) && props.match.params.id && !props.fetching) {
      props.getDetail(props.match.params.id);
    }
  }, []);

  React.useEffect(() => {
    setfetching(props.fetching);
  }, [props.fetching]);

  const formatIngredients = () => {
    const ingredients = getObjProps(props.cocktail, 'ingredient');
    return (
      <ul>
        {ingredients.map((ing, i) => {
          return (
            <li key={i}>{props.cocktail[`strMeasure${i+1}`]} {props.cocktail[ing]}</li>
          );
        })}
      </ul>
    );
  };

  const goBack = () => {
    props.cleanDetail();
    props.history.push('/');
  };

  return (
    <div>
      { fetching && !(getObjPropsCount() > 3) ? (
        <Spinner message={'Loading ...'} />
      ) : (
        <div>
          <div className='level is-mobile'>
            <div className='level-left' onClick={goBack}>
              <FaLongArrowAltLeft />
            </div>
            <div className='level-right' style={{ margin: 'auto' }}>
              <p className='title is-4 has-text-centered has-text-white has-text-weight-light'>
              {props.cocktail.strDrink}
              </p>
            </div>
          </div>
          <div className='box has-background-white-ter level'>
            <div className='level-left'>
              <img className='level-item' src={props.cocktail.strDrinkThumb} />
            </div>
            <div className='level-right'>
              <div className='level-item ingredients'>
                {formatIngredients()}
              </div>
              <div className='level-item how-to has-text-left'>
                <div>
                  <li>How to prepare</li>
                </div>
                <div>
                  <p>
                    {props.cocktail.strInstructions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default withRouter(DetailSection);