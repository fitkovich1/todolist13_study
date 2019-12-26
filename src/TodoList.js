import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {
    addTaskTC,
    deleteTaskTC,
    deleteTodolistTC,
    loadTasksTC,
    updateTaskTC
} from "./reducer";


class TodoList extends React.Component {
    componentDidMount() {
        this.props.loadTasks(this.props.id);
    }

    state = {
        filterValue: "All"
    };

    addTask = (title) => {
        this.props.addTask(title, this.props.id);
    };
    changeTask = (taskId, obj) => {
        this.props.updateTask(taskId, obj, this.props.id)
    };
    deleteTodolist = () => {
        this.props.deleteTodolist(this.props.id);
    };
    deleteTask = (taskId) => {
        this.props.deleteTask(taskId, this.props.id);
    };
    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue});
    };
    changeStatus = (taskId, status) => {
        this.changeTask(taskId, {status: status});
    };
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    };

    render = () => {
        let {tasks = []} = this.props;
        return (
            <div className="todoList">
                <div className="todoList-header">
                    <TodoListTitle title={this.props.title} onDelete={this.deleteTodolist} todolistId={this.props.id}/>
                    <AddNewItemForm addItem={this.addTask}/>

                </div>

                <TodoListTasks changeStatus={this.changeStatus}
                               changeTitle={this.changeTitle}
                               deleteTask={this.deleteTask}
                               tasks={tasks.filter(t => {
                                   if (this.state.filterValue === "All") {
                                       return true;
                                   }
                                   if (this.state.filterValue === "Active") {
                                       return t.isDone === false;
                                   }
                                   if (this.state.filterValue === "Completed") {
                                       return t.isDone === true;
                                   }
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask(title, todolistId) {
            dispatch(addTaskTC(title, todolistId));
        },
        loadTasks(todolistId) {
            dispatch(loadTasksTC(todolistId));
        },
        updateTask(taskId, obj, todolistId) {
            dispatch(updateTaskTC(taskId, obj, todolistId));
        },
        deleteTodolist: (todolistId) => {
            dispatch(deleteTodolistTC(todolistId))
        },
        deleteTask: (taskId, todolistId) => {
            dispatch(deleteTaskTC(todolistId, taskId))
        }
    }
};

const ConnectedTodolist = connect(null, mapDispatchToProps)(TodoList);

export default ConnectedTodolist;

