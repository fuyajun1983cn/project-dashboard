import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render() {
      return (
        <div className="chart">
            <Line
                data={this.state.chartData}
                options = { {
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: false
                        }
                      }]
                    },
                    legend: {
                      display: false,
                    }
                  }}
                  />
        </div>
      );
    }
  }
  
  export default Chart;