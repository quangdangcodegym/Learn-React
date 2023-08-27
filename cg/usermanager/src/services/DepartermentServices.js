import axios from 'axios';


class DepartermentService{
    static getDeparterments(){
        return axios.get('https://640445b580d9c5c7bac454ac.mockapi.io/api/departerments')
    }
}

export default DepartermentService;