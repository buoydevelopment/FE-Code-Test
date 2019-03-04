import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAll } from './actions'
import Cocktails from '../../components/Cocktails'
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export class CocktailsList extends Component {
  state = {
    filterText: '',
    redirectShow: false,
    url: ''
  }

  componentWillMount() {
    this.props.getCocktailsList()
  }

  showDetails = (element) => {
    this.setState({
      redirectShow: true,
      url: `drink/${element.idDrink}`
    })
  }

  handleChange(event) {
    this.setState({filterText: event.target.value});
  }

  render() {
    const { cocktails } = this.props
    const { filterText, redirectShow, url } = this.state

    if (redirectShow) {
      return <Redirect to={{pathname: url}} />
    }

    return (
      <div>
        <Row>
          <Col>
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label 
                  for="search" 
                  className="mr-sm-2"
                >
                  Filter by Name:
                </Label>
                <Input 
                  type="text" 
                  placeholder="search by name..." 
                  value={filterText} 
                  onChange={(e) => this.handleChange(e)} 
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>      
          {
            cocktails.length > 0 ? (
              cocktails.filter(item => filterText !== '' ? item.strDrink.toLowerCase().includes(filterText.toLowerCase()) : true).map((element, index) => <Col key={index} md={6} lg={3} className='col-list' onClick={() => this.showDetails(element)}><Cocktails element={element} /></Col>)
            ) : null
          }
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.drinksListReducer.cocktails,
})

const mapDispatchToProps = (dispatch) => ({
  getCocktailsList: () => dispatch(getAll())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CocktailsList))
