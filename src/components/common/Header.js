import React, { Component } from 'react'
import {Text,View,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { filterDrinks } from '../../actions';
import { Input } from './Input'

class Header extends Component {
  state = {
    visibleInput: false
  }

  filterDrinks(string) {
    this.props.filterDrinks(string)
  }
  onIconPress() {
    if (this.state.visibleInput) {
      this.setState({ visibleInput: false })
      this.props.filterDrinks('')
    } else {
      this.setState({ visibleInput: true })      
    }
  }
  render() {
    const props = this.props
    const { textStyle, headerIconStyle, headerStyle } = styles

    return (
        <View style={headerStyle}>
          <View style={{ flex: this.props.showBack ? 0.2 : 0 }}>
            {this.props.showBack ? <TouchableWithoutFeedback
              onPress={() => Actions.pop()}>
              <Icon name='chevron-left' size={25} color='#fff' style={headerIconStyle} />
            </TouchableWithoutFeedback> : null}
          </View>
          <TouchableWithoutFeedback
            onPress={() => this.setState({ visibleInput: true })}>
            <View style={{ flex: this.props.showBack ? 0.8 : 1, justifyContent: 'center' }}>
              {this.state.visibleInput ? <View >
                <Input placeholder={'Example: Applejack'}
                  label='Search'
                  onChangeText={this.filterDrinks.bind(this)} />
              </View> :
                <Text style={textStyle}>
                  {props.title}
                </Text>}
            </View>
          </TouchableWithoutFeedback>
          <View style={{ flex: 0.2 }}>
            {!this.props.showBack ?
              <TouchableWithoutFeedback
                onPress={() => this.onIconPress()}>
                <Icon name={this.state.visibleInput ? 'times' : 'search'} size={20} color='#fff' style={headerIconStyle} />
              </TouchableWithoutFeedback> : null}
          </View>
        </View>
    )
  }
}

const styles = {
  headerStyle: {
    flexDirection: 'row',
    backgroundColor: '#00BED5',
    height: 60
  },
  headerIconStyle: {
    margin: 20
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '300',
    alignSelf: 'center'
  }
}

export default connect(null, { filterDrinks })(Header)