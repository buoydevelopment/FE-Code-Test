import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { getCocktail } from './actions'
import { connect } from 'react-redux'
import Cocktail from '../../components/Cocktail';

export class Drink extends Component {
  state = {
    redirectList: false,
  }

  componentWillMount() {
    this.props.getCocktail({id: this.props.match.params.id})
  }

  handleBack = () => {
    this.setState({
      redirectList: true,
    })
  }

  render() {
    const { cocktail } = this.props
    const { redirectList } = this.state

    if (redirectList) {
      return <Redirect to={{pathname: '/'}} />
    }
    return (
      <div>
        {
          cocktail.strDrink ? (
            <Cocktail cocktail={cocktail} back={this.handleBack}/>
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cocktail: state.drinkReducer.cocktail,
})

const mapDispatchToProps = (dispatch) => ({
  getCocktail: (props) => dispatch(getCocktail(props))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Drink))