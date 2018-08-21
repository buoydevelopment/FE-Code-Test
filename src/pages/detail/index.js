import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import BackButton from 'material-ui/svg-icons/navigation/arrow-back';
import { Card, CardMedia, CardText } from 'material-ui/Card';
import * as cocktailActions from '../../actions/cocktail';
import selector from './selector';
import { fetchingState } from '../../constants';

@connect(selector, (dispatch) => ({
  fetchCocktail: bindActionCreators(cocktailActions.fetchCocktail, dispatch)
}))
export default class User extends Component {
  static propTypes = {
    cocktailDetail: ImmutablePropTypes.map,
    fetchCocktail: PropTypes.func.isRequired,
    id: PropTypes.string,
    onClose: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { id } = this.props;
    if (id) {
      this.onFetchCocktail(id);
    }
  }

  componentWillReceiveProps (nextProps) {
    const { id } = this.props;
    if (id !== nextProps.id && nextProps.id) {
      this.onFetchCocktail(nextProps.id);
    }
  }

  onFetchCocktail (id) {
    const { fetchCocktail, cocktailDetail } = this.props;
    if (!cocktailDetail.getIn([ 'data', id ])) {
      fetchCocktail({ cocktailId: id });
    }
  }

  renderMeasures (detail) {
    const measures = Object.keys(detail).filter((key) => key.indexOf('strMeasure') !== -1);
    const measuresInfo = [];
    measures.forEach((m, i) => {
      const measure = detail[`strMeasure${i + 1}`];
      const ingredient = detail[`strIngredient${i + 1}`];
      if ((measure && measure.trim()) || (ingredient && ingredient.trim())) {
        measuresInfo.push(<p key={i}>{measure} - {ingredient}</p>);
      }
    });
    return measuresInfo;
  }

  renderDetail () {
    const { cocktailDetail, id } = this.props;
    if (cocktailDetail.get('state') === fetchingState.FETCHING) {
      return <CircularProgress style={{ width: '100%', textAlign: 'center' }}/>;
    } else if (cocktailDetail.get('state') === fetchingState.LOADED && cocktailDetail.getIn([ 'data', id ])) {
      const detail = cocktailDetail.getIn([ 'data', id ]).toJS();
      return (
        <Card
          style={{ width: '400px', margin: 'auto' }}>
          <CardMedia style={{ padding: '20px' }}>
            <img src={detail.strDrinkThumb} />
          </CardMedia>
          <CardText>
            {
              this.renderMeasures(detail)
            }
            <div>
              <p><strong>&#xb7; How to prepare</strong></p>
              <p>{detail.strInstructions}</p>
            </div>
          </CardText>
        </Card>
      );
    }
    return <span>No Data</span>;
  }

  render () {
    const { onClose, cocktailDetail, id } = this.props;
    return (
      <div>
        <AppBar
          iconElementLeft={<IconButton onClick={onClose}><BackButton /></IconButton>}
          title={cocktailDetail.getIn([ 'data', id ]) ? cocktailDetail.getIn([ 'data', id, 'strDrink' ]) : 'Cocktail Detail'}/>
        {
          this.renderDetail()
        }
      </div>
    );
  }
}
