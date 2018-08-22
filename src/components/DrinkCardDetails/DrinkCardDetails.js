import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const styles = {
  card: {
    marginTop: 12,
    marginBottom: 12,
    maxWidth: "calc(100vw - 24px)"
  }
};

function CardDrinkDetails(props) {
  const { classes, drink } = props;

  const drinkKeys = Object.keys(drink);

  // put ingredients and measures in array of object
  // [{ ingredient: X, measure: Y }]
  const ingredients = [];
  drinkKeys.map(key => {
    if (
      key.includes("strIngredient") &&
      drink[key] &&
      drink[key].trim().length > 0
    ) {
      const index = key.replace("strIngredient", "");
      ingredients.push({
        ingredient: drink[key].trim(),
        measure: drink[`strMeasure${index}`]
      });
    }
  });

  return (
    <Card className={classes.card}>
      <CardHeader title={drink.strDrink} subheader={drink.strCategory} />
      <CardMedia
        component="img"
        image={drink.strDrinkThumb}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Grid container direction="column" spacing={16}>
          <Grid item>
            <Typography variant="subheading" component="p">
              Ingredients
            </Typography>

            {ingredients.length > 0 &&
              ingredients.map((ingredient, key) => (
                <Typography variant="body1" component="p" key={key}>
                  {ingredient.measure} - {ingredient.ingredient}
                </Typography>
              ))}
          </Grid>
          <Grid item>
            <Typography variant="subheading" component="p">
              how to prepare
            </Typography>
            {drink.strInstructions && (
              <Typography variant="body1" component="p">
                {drink.strInstructions}
              </Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

CardDrinkDetails.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired
  }).isRequired,
  drink: PropTypes.object.isRequired
};

export default withStyles(styles)(CardDrinkDetails);
