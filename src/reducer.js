import {api} from "./api";

export const ADD_TODOLIST = "TodoList/Reducer/ADD-TODOLIST";
export const DELETE_TODOLIST = "TodoList/Reducer/DELETE-TODOLIST";
export const DELETE_TASK = "TodoList/Reducer/DELETE-TASK";
export const ADD_TASK = "TodoList/Reducer/ADD-TASK";
export const SET_TASKS = "TodoList/Reducer/SET_TASKS";
export const UPDATE_TASK = "TodoList/Reducer/UPDATE-TASK";
export const SET_TODOLISTS = "TodoList/Reducer/SET_TODOLISTS";

const initialState = {
    "todolists": []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl;
                    } else {
                        return {...tl, tasks: action.tasks}
                    }
                })
            };
        case SET_TODOLISTS:
            return {
                ...state,
                todolists: action.todolists.map(tl => ({...tl, tasks: []}))
            };
        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]
            };
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            };
        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            };
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}
                    } else {
                        return tl
                    }
                })
            };
        case UPDATE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id !== action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            }
    }
    return state;
};

const updateTaskAC = (taskId, obj, todolistId) => {
    return {type: UPDATE_TASK, taskId, obj, todolistId};
};
const deleteTodolistAC = (todolistId) => {
    return {
        type: DELETE_TODOLIST,
        todolistId: todolistId
    };
};
const deleteTaskAC = (todolistId, taskId) => {
    return {
        type: DELETE_TASK,
        todolistId,
        taskId
    };
};
const addTaskAC = (newTask, todolistId) => {
    return {type: ADD_TASK, newTask, todolistId};
};
const setTasksAC = (tasks, todolistId) => {
    return {type: SET_TASKS, tasks, todolistId};
};
const addTodolistAC = (newTodolist) => {
    return {
        type: ADD_TODOLIST,
        newTodolist: newTodolist
    }
};
const setTodolistsAC = (todolists) => {
    return {
        type: SET_TODOLISTS,
        todolists: todolists
    }
};



export const loadTasksTC = (todolistId) => {
    return (dispatch) => {
        api.getTasks(todolistId)
            .then(res => {
                dispatch(setTasksAC(res.data.items, todolistId));
            });
    }
};
export const addTaskTC = (title, todolistId) => {
    return (dispatch) => {
        api.createTask(title, todolistId).then(res => {
            dispatch(addTaskAC(res.data.data.item, todolistId));
        });
    }
};
export const deleteTodolistTC = (todolistId) => {
    return (dispatch) => {
        api.deleteTodoList(todolistId).then(res => {
            dispatch(deleteTodolistAC(todolistId));
        });
    }
};
export const deleteTaskTC = (todolistId, taskId) => {
    return (dispatch) => {
        api.deleteTask(taskId)
            .then(res => {
                dispatch(deleteTaskAC(todolistId, taskId));
            });
    }
};
export const updateTaskTC = (taskId, obj, todolistId) => {
    return (dispatch, getState) => {
        getState()
            .todolists
            .find(tl => tl.id === todolistId)
            .tasks.forEach(task => {
            if (task.id === taskId) {
                api.updateTask({...task, ...obj})
                    .then(res => {
                        dispatch(updateTaskAC(taskId, obj, todolistId))
                    })
            }
        })
    }
};
export const addTodolistTC = (title) => {
    return (dispatch) => {
        api.createTodoList(title).then(res => {
            dispatch(addTodolistAC(res.data.data.item));
        });
    }
};
export const setTodolistTC = () => {
    return (dispatch) => {
        api.getTodolists()
            .then(res => {
                dispatch(setTodolistsAC(res.data));
            });
    }
};


export default reducer;
