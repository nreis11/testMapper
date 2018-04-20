import React from 'react';
import {ListItem} from './ListItem';

export class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.eachListItem = this.eachListItem.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(e) {
        if (this.props.isInternal) {
            document.body.addEventListener('keydown', (e) => {
                let key = e.keyCode;
                let active = this.props.list.filter(item => item.active);
                if (key === 32 && active.length) {
                    console.log("Active: ", active[0]);
                    this.props.handleClick(active[0].id + 1, this.props.isInternal)
                }
            });
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.list !== nextProps.list;
    // }

    // componentDidUpdate() {
    //     console.log('UPDATED, isInternal: ', this.props.isInternal);
    //     let active = this.props.list.filter(item => item.active);
    //     console.log('ACTIVE: ', active);
    //     this.props.onUpdate(active[0].id, this.props.isInternal);
    // }

    eachListItem(item) {
        return (
            <ListItem key={item.id} 
                      id={item.id}
                      text={item.text}
                      active={item.active}
                      handleClick={this.props.handleClick}
                      isInternal={this.props.isInternal} />
        )
    }

    render() {
        const style= {
            border: "solid",
            padding: "20px 2px"
        }

        return (
            <div style={style}><ul>{this.props.list.map(this.eachListItem)}</ul></div>
        )
    }
}