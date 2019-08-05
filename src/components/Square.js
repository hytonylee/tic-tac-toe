import React from 'react'


class Square extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            isClick: false
        }
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isClick: true,

            }
        })

        console.log('checked!!')
    }

    render() {
        return (
            <button className="square" onClick={this.handleClick} value={this.state.value}>
                {this.state.isClick}
            </button>
        )
    }
}


export default Square;
