import React, { Component } from 'react';
import * as d3 from 'd3';

export class Travel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/tripData.csv').then(data =>
            this.setState ({
                data:data
            })
        )
    }

    render() {
        let trips = this.state.data.map((trip) => {
            return (<div key={trip.index}>{trip.location}</div>);
        });
        return(

            <div>
                <h1>Places I've Been</h1>
                {trips}
            </div>
        )
    }
}