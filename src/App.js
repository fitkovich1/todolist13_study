import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistTC, setTodolistTC} from "./reducer";


class App extends React.Component {

    componentDidMount() {
        this.props.setTodolists();
    }

    addTodoList = (title) => {
        this.props.addTodolist(title);
    };


    render = () => {
        const todolists = this.props.todolists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title} tasks={tl.tasks}/>)

        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTodolists: () => {
            dispatch(setTodolistTC())
        },
        addTodolist: (newTodolist) => {
            dispatch(addTodolistTC(newTodolist))
        }
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;

