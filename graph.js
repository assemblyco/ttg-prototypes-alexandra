/*
 * @flow
 */

import React, { Component } from 'react';
import {
  ART,
  View
} from 'react-native';

const {
  Group,
  Shape,
  Surface,
} = ART;

export class Graph extends Component {
  constructor(props){
    super()
    
    this.state={
      linePath: "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
    }
  }
  render() {
    return (
      //<Source /> is the equivalent of <svg />
      <Surface width={200} height={200}>
        {/*<Group /> is the equivalent of <g />*/}
        <Group x={0} y={0}>
          {/*<Shape /> is the equivalent of <path />*/}
          <Shape
            d={ this.state.linePath }
            stroke="#000"
            strokeWidth={1}
          />
        </Group>
      </Surface>
    );
  }
}
