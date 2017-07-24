/*
 * @flow
 */

import React, { Component } from 'react';
import { TouchableWithoutFeedback, Dimensions, View } from 'react-native';

//Library components
import Svg, { G,
              Line,
              Path,
              Rect,
              Text,
} from 'react-native-svg';
import { scaleBand,
         scaleLinear
} from 'd3-scale';
import { max,
         ticks
} from 'd3-array';
import { line } from 'd3-shape';
import { path } from 'd3-path';

//Custom components
import { colors } from './colors';
import { data } from './data';

export class Graph extends Component {
  render() {
    const screen = Dimensions.get('window')
    const margin = {top: 150, right: 25, bottom: 200, left: 25}
    const width = screen.width - (margin.left + margin.right)
    const height = screen.height - (margin.top + margin.bottom)
    const x = scaleBand()
            .rangeRound([0, width])
            .padding(0.1)
            .domain(data.map(d => d.month))
    const maxFrequency = max(data, d => d.frequency)
    const y = scaleLinear()
              .rangeRound([height, 0])
              .domain([0, maxFrequency])
    const firstMonthX = x(data[0].month)
    const secondMonthX = x(data[1].month)
    const lastMonthX = x(data[data.length - 1].month)
    const labelDx = (secondMonthX - firstMonthX) / 2
    const bottomAxis = [firstMonthX - labelDx, lastMonthX + labelDx]
    const bottomAxisD = line().x(d => d + labelDx).y( () => 0)(bottomAxis)

    const leftAxis = ticks(0, maxFrequency, 5)
    const leftAxisD = line().x(() => bottomAxis[0] + labelDx).y(d => y(d) - height)(leftAxis)

    const labelStyle = [
      {
        style: {
          "stroke-width": 2
        }
      }
    ]

    const notch = 5
    const labelDistance = 9

    const svg = (
      <Svg width={screen.width} height={screen.height}>
        <G translate={margin.left + "," + margin.top}>
          <G translate={"0," + height}>
            {/*Create the X axis*/}
            <G key={-1}>
              <Path stroke={colors.black} d={bottomAxisD} key="-1" />
              {
                data.map((d, i) => (
                  <G key={i + 1} translate={x(d.month) + labelDx + ",0"}>
                    <Line stroke={colors.black} y2={notch} />
                    <Text fill={colors.black} y={labelDistance}>{d.month}</Text>
                  </G>
                ))
              }
            </G>
            {/*Create the Y axis if needed*/}
            {/*<G key={-2}>
              <Path stroke={colors.black} d={leftAxisD} key="-1" />
              {
                leftAxis.map((d, i) => (
                  <G key={i + 1} translate={"0," + (y(d) - height)}>
                    <Line stroke={colors.black} x1={notch} x2={labelDistance} />
                    <Text fill={colors.black} x={-labelDistance} y={-notch}>{d}</Text>
                  </G>
                ))
              }
            </G>*/}
            {/*Generate the graph*/}
            {
              data.map((d, i) => (
                <TouchableWithoutFeedback key={ i }>
                  <Rect x={ x(d.month) }
                        y={ y(d.frequency) - height }
                        width={ x.bandwidth() }
                        height={ height - y(d.frequency) }
                        fill={ colors.blue }
                        labelStyle = { labelStyle.style }
                  >
                  </Rect>
                </TouchableWithoutFeedback>
              ))
            }
          </G>
        </G>
      </Svg>
    );
    return svg
  }
}
