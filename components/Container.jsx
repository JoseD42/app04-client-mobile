import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

export default class Container extends Component{

    styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }
    });

    render() {
        return (
            <View style={this.styles.container}>{this.props.children}</View>
        );
    }
}