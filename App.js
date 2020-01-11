import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SimpleApp from './src/SimpleApp';

const prefix = 'tingzhoudeeplink://';

export default class App extends Component {
  render() {
    return (
      <SimpleApp
        uriPrefix={prefix}
      />
    )
  }
}
