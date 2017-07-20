/*
 * @flow
 */

import React, { Component } from 'react';
import {
  ART,
  View
} from 'react-native';

import { generalStyles } from  './generalStyles';

const {
  Surface,
  Group,
  Shape,
} = ART;

export class Graph extends Component {
  constructor(props){
    super(props)
    this.props.path= "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
  }
  render() {
    console.log(ART);
    return (
      <View style={generalStyles.container}>
        <Surface width={200} height={200}>
          <Group x={0} y={0}>
            <Shape
              d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
              //d={ this.props.path }
              stroke="#000"
              strokeWidth={1}
            />
          </Group>
        </Surface>
      </View>
    );
  }
}
