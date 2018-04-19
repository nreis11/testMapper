import React from 'react';

export class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(this.props.id);
        // this.setState({
        //     active: true
        // });
        this.props.onClick(this.props.id);
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