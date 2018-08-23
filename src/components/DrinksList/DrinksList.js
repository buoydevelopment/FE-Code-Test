import React from "react";
import { List, AutoSizer } from "react-virtualized";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { List as ImmutableList } from "immutable";

const marginHorizontal = 16;
const marginVertical = 12;
const rowHeight = 132;

const styles = {
  listContainer: {
    padding: `${marginVertical}px ${marginHorizontal}px`
  },
  cardContainer: {
    padding: marginHorizontal
  }
};

class DrinksList extends React.Component {
  rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    style // Style object to be applied to row (to position it)
  }) => {
    const { classes, list } = this.props;
    const row = list.get(index);

    return (
      <div
        key={key}
        style={{ ...style, width: `calc(100vw - ${2 * marginHorizontal}px)` }}
        className={classes.rowContainer}
        onClick={this.props.handleClick(row.idDrink, index)}
      >
        <Paper elevation={1} style={{ height: style.height - marginVertical }}>
          <Grid
            direction="row"
            container
            style={{ height: style.height - marginVertical }}
            className={classes.cardContainer}
          >
            <Grid item>
              <img
                alt={`thumb of ${row.strDrink}`}
                src={row.strDrinkThumb}
                style={{
                  height:
                    style.height - (marginHorizontal * 2 + marginVertical),
                  width: style.height - (marginHorizontal * 2 + marginVertical),
                  borderRadius: 4
                }}
              />
            </Grid>
            <Grid
              item
              xs
              style={{
                padding: "0 12px"
              }}
            >
              <Grid container spacing={8} direction="column">
                <Grid item xs>
                  <Typography variant="title">{row.strDrink}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  };
  render() {
    const { classes, list, scrollToIndex } = this.props;
    return (
      <AutoSizer>
        {({ width, height }) => (
          <List
            className={classes.listContainer}
            width={width}
            height={height}
            rowCount={list.size}
            rowHeight={rowHeight}
            scrollToAlignment="start"
            scrollToIndex={scrollToIndex}
            rowRenderer={this.rowRenderer}
          />
        )}
      </AutoSizer>
    );
  }
}

DrinksList.propTypes = {
  list: PropTypes.instanceOf(ImmutableList).isRequired,
  classes: PropTypes.shape({
    listContainer: PropTypes.string.isRequired,
    cardContainer: PropTypes.string.isRequired
  }).isRequired,
  scrollToIndex: PropTypes.number
};

export default withStyles(styles)(DrinksList);
