import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import RoutingPaths from 'navigation/routing-paths';

const styles = theme => ({
  card: {
    display: 'flex',
    width: '100%'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    height: 151,
    margin: 10
  }
});

class CocktailList extends React.PureComponent {
  render() {
    const { classes } = this.props;
    const cocktailList = this.props.cocktails.map(cocktail =>
      <ListItem
        button
        component={Link}
        to={{ pathname: `${RoutingPaths.cocktail}/${cocktail.id}` }}
        key={cocktail.id}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            {cocktail.name}
          </CardContent>
          <CardMedia
            className={classes.cover}
            image={cocktail.thumbUrl}
            title={cocktail.name}
          />
        </Card>
      </ListItem>);

    return (
      <div>
        <List>
          {cocktailList}
        </List>
      </div>
    );
  }
}

CocktailList.propTypes = {
  cocktails: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles, { withTheme: true }))(CocktailList);
