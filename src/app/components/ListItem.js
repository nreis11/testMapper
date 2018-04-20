import React from 'react';

export class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("id: ", this.props.id);
        this.props.handleClick(this.props.id, this.props.isInternal);
    } 

    render() {
        if (this.props.active) {
            return(
                <li className='selected' onClick={this.handleClick}><mark>{this.props.text}</mark></li>
            )
        } else {
            return(
                <li className='selectable' onClick={this.handleClick}>{this.props.text}</li>
            )
        }
    }
}