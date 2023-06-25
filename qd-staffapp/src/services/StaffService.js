import axios from "axios"
export class StaffService{
    static getStaffs(url){
        return axios.get(url);
    }
}