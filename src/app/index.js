import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {ListItem} from "./components/ListItem";
import {ListContainer} from "./components/ListContainer";

import './index.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeInternalId : '',
            activeBoardId : '',
            internalList: [
                {id: 0, text: "Architecture", active: false},
                {id: 1, text: "Programming", active: false},
                {id: 2, text: "Finance", active: false},
            ],
            boardList: [
                {id: 3, text: "Banking", active: false},
                {id: 4, text: "Legal", active: false},
                {id: 5, text: "IT", active: false},
            ]

        };
        // this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateActiveId = this.updateActiveId.bind(this);
    }

    // handleUpdate(id, isInternal) {
    //     let activeId = isInternal ? 'activeInternalId' : 'activeBoardId';
    //     this.setState({
    //         activeId: id
    //     })
    //     // if (isInternal) {
    //     //     this.setState({
    //     //         activeInternalId: id
    //     //     });
    //     // } else {
    //     //     this.setState({
    //     //         activeBoardId: id
    //     //     });
    //     // }
    // }

    handleClick(id, isInternal) {
        this.setState((prevState) => {
            let list = isInternal ? prevState.internalList : prevState.boardList;
            list.map(
                item => item.id !== id ? item.active = false : item.active = true
            )
        });

        this.updateActiveId(id, isInternal);
    }

    updateActiveId(id, isInternal) {
        if (isInternal) {
            this.setState({
                activeInternalId: id
            });
        } else {
            this.setState({
                activeBoardId: id
            });
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <Header homeLink={"eQuest"}/>
                                <ListContainer list={this.state.internalList} 
                                               isInternal={true}
                                               
                                               handleClick={this.handleClick}
                                               key={1} />
                                    <p>ID: {this.state.activeInternalId}</p>
                        </div>
                        <div className="col-sm-5">
                            <Header homeLink={"Board"}/>
                                <ListContainer list={this.state.boardList}
                                               isInternal={false}
                                               
                                               handleClick={this.handleClick}
                                               key={2} />
                                    <p>ID: {this.state.activeBoardId}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


render(<App/>, window.document.getElementById("app"));
