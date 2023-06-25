import React, {useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import LoadingTask from './LoadingStaff';

export default function AddStaff() {
    const [state, setState] = useState({
        loading: false,
        staff: {
            name: '',
            avatar: '',
            mobile: '',
            email: '',
            company: '',
            groupId: ''
        },
        groups: []
    })
    const handleChange = (e)=>{
        setState({...state, staff: {
            ...staff,
            [e.target.name]: e.target.value
        }})
    }
    const handleCreate = (e)=>{
        e.preventDefault();
        setState({
            ...state,
            loading: true
        })
        async function createTask(){
            let data = await axios.post("https://640445b580d9c5c7bac454ac.mockapi.io/api/staff", staff)
            console.log(data);
        }
        createTask();
        
    }
    useEffect(function (){
        async function fetchGroups(){
            let GroupsData = await axios.get('https://640445b580d9c5c7bac454ac.mockapi.io/api/department');
            console.log(GroupsData.data);
            setState({
                ...state,
                groups: GroupsData.data
            })
        }
        fetchGroups();
    }, [])
    const {staff, groups, loading} = state;
    return (
        <>
        {
            loading ? <LoadingTask loading={loading} /> : (
                <section className="staff-list mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <form >
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="name"
                                placeholder="Full Name"
                                required=""
                                onChange={handleChange}
                                value={staff.name}
                            />
                            <input
                                type="text"
                                className="form-control mb-2"
                                name="email"
                                placeholder="Email"
                                required=""
                                onChange={handleChange}
                            />
                             <input
                                type="text"
                                className="form-control mb-2"
                                name="mobile"
                                placeholder="Mobile"
                                required=""
                                onChange={handleChange}
                            />
                             <input
                                type="text"
                                className="form-control mb-2"
                                name="company"
                                placeholder="Company"
                                required=""
                                onChange={handleChange}
                            />
                            <select className='form-control' onChange={handleChange} name='groupId' value={staff.groupId}>
                                <option value='0' key='0'>Select a group</option>
                                {/* {
                                    [(<option value='1' key='1'>Select a group</option>), (<option value='2' key='2'>Select a group</option>)]
                                } */}
                                {
                                    groups.map(group =>
                                        (<option value={group.id} key={group.id}>{group.name}</option>)
                                    )
                                }
                            </select>
                            <div>
                                <button className="btn btn-primary btn-sm me-2" onClick={handleCreate}>Create</button>
                                <button className="btn btn-dark btn-sm me-2">Cancel</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-8">
                        <div className="d-flex flex-column w-50">
                            <img
                                className="img-thumbnail"
                                src="https://res.cloudinary.com/dtxyz2s1g/image/upload/v1664434019/qszkm0dacxecczj6rak7.jpg"
                                alt=""
                            />
                            <button className="btn btn-warning">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            )
        }
        </>

    )
}
