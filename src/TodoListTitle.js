import React from 'react';
import './App.css';
import {api} from "./api";


class TodoListTitle extends React.Component {


    state = {
        editMode: false,
        title: this.props.title
    };

    activateEditModeTodo = () => {
        this.setState({editMode: true})
    };

    deactivateEditModeTodo = () => {
        this.setState({editMode: false})

    };
    onTitleChangeTodo = (e) => {
        this.setState(
            {title: e.currentTarget.value},
            () => {
                api.updateTodoTitle(this.state.title, this.props.todolistId);
            });
    };

    render = () => {
        return (
            <>
                {
                    this.state.editMode
                        ? <input onBlur={this.deactivateEditModeTodo} onChange={this.onTitleChangeTodo} autoFocus={true} value={this.state.title}/>
                        :
                        <h3 className="todoList-header__title" onClick={this.activateEditModeTodo}>{this.state.title}
                            <button onClick={this.props.onDelete}>X</button>
                        </h3>
                }
            </>
        );
    }
}

export default TodoListTitle;

