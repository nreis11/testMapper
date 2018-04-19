import React from 'react';
import {ListItem} from './ListItem';

export class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 0, text: "Architecture", active: false},
                {id: 1, text: "Programming", active: false},
                {id: 2, text: "Finance", active: false}
          ]
        }
        this.eachListItem = this.eachListItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(e) {

        document.body.addEventListener('keydown', (e) => {
            let key = e.keyCode;
            let active = this.state.list.filter(item => item.active);
            if (key === 32 && active.length) {
                console.log(active);
                this.handleClick(active[0].id + 1)
            }
        });
    }

    handleClick(id) {
        this.setState((prevState) => {
            prevState.list.map(
                item => item.id !== id ? item.active = false : item.active = true
            )
        })
    }

    eachListItem(item) {
        return (
            <ListItem key={item.id} 
                      id={item.id}
                      text={item.text}
                      active={item.active}
                      onClick={this.handleClick} />
        )
    }

    render() {
        return (
            <ul>{this.state.list.map(this.eachListItem)}</ul>
        )
    }
}