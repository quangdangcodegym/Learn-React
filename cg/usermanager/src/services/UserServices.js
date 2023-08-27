import axios from 'axios';


class UserService{
    static getUsers(){
        return axios.get('https://640445b580d9c5c7bac454ac.mockapi.io/api/users')
    }
    static createUser(user){
        return axios.post('https://640445b580d9c5c7bac454ac.mockapi.io/api/users', user);
    }
    static findUserById(id){
        return axios.get(`https://640445b580d9c5c7bac454ac.mockapi.io/api/users/${id}`);
    }
    static updateUser(user){
        console.log("UPDATE", user);
        return axios.put(`https://640445b580d9c5c7bac454ac.mockapi.io/api/users/${user.id}`, user);
    }
}

export default UserService;