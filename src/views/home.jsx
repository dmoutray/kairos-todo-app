import React from "react";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateValue: '',
            dateList: []
        }

    }

    sortDates = () => {
        let sortedDatesList = this.state.dateList.sort(function(a, b) {
            let dateA = new Date(a), dateB = new Date(b);
            return dateA - dateB;
        });
        this.setState({dateList: sortedDatesList})
    }

    render() {
        return (
            <div>
                <input type='date' onChange={(event) => {
                    this.setState({dateValue: event.target.value})
                }}/>
                <button onClick={() => {
                    console.log('click')
                    this.setState((state) => {
                        return {dateList: [...state.dateList, state.dateValue]}
                    })
                }}>Add Date</button>
                <ul>
                    {this.state.dateList.map((item, key) => {
                        return (
                            <li key={key}>{item}</li>
                        )
                    })
                    }
                </ul>
                <button onClick={this.sortDates}>SORT</button>
            </div>

        )
    }
}
