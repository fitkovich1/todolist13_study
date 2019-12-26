import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/todo-lists/",
    headers: {"API-KEY": "edd25c6c-92b4-48d9-95c2-52b239caae08"},
    withCredentials: true
});


export const api = {
    createTask (newTaskTitle, todolistId) {
        return instance.post(`${todolistId}/tasks`, {title: newTaskTitle})
    },
    createTodoList (title) {
        return instance.post("", {title: title})
    },
    getTodolists () {
        return instance.get("")
    },
    updateTask (task,obj) {
      return instance.put(`tasks`,{...task, ...obj})
    },
    getTasks (todolistId) {
        return instance.get(`${todolistId}/tasks`)
    },
    deleteTodoList (todolistId) {
        return instance.delete("" + todolistId)
    },
    deleteTask (taskId) {
        return instance.delete(`tasks/${taskId}`)
    },
    updateTodoTitle (newTodoTitle, todolistId) {
        return instance.put("" + todolistId, {title: newTodoTitle})
    }
};