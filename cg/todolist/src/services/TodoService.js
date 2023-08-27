
import axios from 'axios';
class TodoService{
    static getAllTodos(){
        return axios.get('https://64e7e8e0b0fd9648b7906567.mockapi.io/todos');
    }
    static saveTodo(todo){
        return axios.post('https://64e7e8e0b0fd9648b7906567.mockapi.io/todos', todo);
    }
    static updateTodo(todo){
        console.log("todo updated", todo);
        return axios.put(`https://64e7e8e0b0fd9648b7906567.mockapi.io/todos/${todo.id}`, todo);
    }
    static deleteTodo(id){
        return axios.delete(`https://64e7e8e0b0fd9648b7906567.mockapi.io/todos/${id}`);
    }
}

export default TodoService;