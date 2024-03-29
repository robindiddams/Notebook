import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './styles'
export default class Footer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
      return(
        <View style={{height:50, backgroundColor: '#F5F5F5'}}>
          <View style={[ {flex:1,
              flexDirection: 'row',
              paddingTop:10,
              paddingLeft: 10,
              paddingRight: 10,
              justifyContent:'space-between',
              borderTopColor: '#bbb',
              borderTopWidth: StyleSheet.hairlineWidth
            }, this.props.style]}>
            {this.props.children}
          </View>
        </View>
      );
    }

}
