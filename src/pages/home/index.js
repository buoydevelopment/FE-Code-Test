import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import AppBar from 'material-ui/AppBar';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import CockTail from '../detail';
import { fetchingState } from '../../constants';
import * as cocktailActions from '../../actions/cocktail';
import selector from './selector';

@connect(selector, (dispatch) => ({
  fetchCocktailList: bindActionCreators(cocktailActions.fetchCocktailList, dispatch)
}))
export default class Home extends Component {
  static propTypes = {
    cocktailList: ImmutablePropTypes.map,
    fetchCocktailList: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      selectedItem: '',
      filter: '',
      open: false
    };
  }

  componentDidMount () {
    const { fetchCocktailList } = this.props;
    fetchCocktailList();
  }

  onClickItem (id) {
    this.setState({
      selectedItem: id,
      open: true
    });
  }

  onCloseDrawer () {
    this.setState({
      selectedItem: '',
      open: false
    });
  }

  onChangeFilter (value) {
    this.setState({
      filter: value
    });
  }

  renderCocktailList () {
    const { cocktailList } = this.props;
    const { filter } = this.state;
    if (cocktailList.get('state') === fetchingState.FETCHING) {
      return <CircularProgress style={{ width: '100%', textAlign: 'center' }}/>;
    } else if (cocktailList.get('state') === fetchingState.LOADED && cocktailList.get('data')) {
      let list = cocktailList.get('data').toJS();
      if (filter) {
        list = list.filter((item) => item.strDrink.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
      }
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {
            list.map((item, i) => (
              <Card
                containerStyle={{ display: 'flex', justifyContent: 'space-between' }}
                key={i}
                style={{ width: '400px', cursor: 'pointer', marginBottom: '20px' }}
                onClick={() => this.onClickItem(item.idDrink)}>
                <CardTitle title={item.strDrink} />
                <CardMedia style={{ flexShrink: 0, padding: '20px' }}>
                  <img src={item.strDrinkThumb} style={{ width: '200px', height: '200px' }}/>
                </CardMedia>
              </Card>
            ))
          }
        </div>
      );
    }
    return <span>No Data</span>;
  }

  render () {
    const { open, selectedItem } = this.state;
    return (
      <div>
        <AppBar title='Home' />
        <div style={{ textAlign: 'center' }}>
          <TextField
            hintText='Search'
            onChange={(e, v) => this.onChangeFilter(v)}/>
        </div>
        
        {
          this.renderCocktailList()
        }
        <Drawer open={open} width='100%'>
          <CockTail id={selectedItem} onClose={() => this.onCloseDrawer()}/>
        </Drawer>
      </div>
    );
  }
}
