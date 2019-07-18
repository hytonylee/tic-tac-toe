import React from 'react'

export default class Square extends React.Component {

    render() {
        return (
            <div className="square" onClick={() => { console.log('alert') }} value={this.props.value}>
                {this.props.value}
            </div>
        )
    }
}
