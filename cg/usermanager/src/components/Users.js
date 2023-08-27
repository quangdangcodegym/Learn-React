import React, { useState, useEffect } from "react";

import UserService from "../services/UserServices.js";
import DepartermentService from '../services/DepartermentServices.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const { format } = require('date-fns');

let reload = false;
export default function Users({ evtShowAddEdit }) {
    const [state, setState] = useState({
        loading: false,
        users: [],
        message: ''
    });
    const [search, setSearch] = useState('');

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getUsers() {
                let departermentRes = await DepartermentService.getDeparterments();

                let userRes = await UserService.getUsers();
                let users = userRes.data;

                let userSearchs = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
                setState({
                    ...state,
                    users: userSearchs,
                    loading: false
                })

                reload = false;
            }
            getUsers();
        } catch (e) {
            setState(
                {
                    ...state,
                    loading: false,
                    message: e.message
                })
        }
    }, [search, reload])


    const [userEdit, setUserEdit] = useState({
        id: null,
        name: null,
        createdAt: null,
        avatar: null,
        //idDeparterment
        idDeparterment: -1
    });
    const [departerments, setDeparterments] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSaveClose = ()=>{
        UserService.updateUser(userEdit);
        setShow(false);
        reload = true;
    }
    
    const handleShow = () => setShow(true);
    const handleShowUser = (id)=>{
        try{
            async function getUserInfo(){
                let user = await UserService.findUserById(id);
                let departerments = await DepartermentService.getDeparterments();
                
                user.data.id = id;
                setUserEdit(user.data);
                setDeparterments(departerments.data);
                handleShow();
            }
            getUserInfo();
        }catch(err){
            console.log(err);
        }
    }

    const { loading, users, message } = state;

    console.log("RE REDNER", userEdit);
    return (
        <>
            <div class={loading ? 'overlay' : 'loading-none'}>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row justify-content-center">
                        <div className="row mb-3">
                            <div className="col-6">
                                <label className="d-block">Name</label>
                                <input type="text" onChange={(e)=> setUserEdit({...userEdit, name: e.target.value })} value={userEdit.name} className="form-control" placeholder="name..." />
                            </div>
                            <div className="col-6">
                                <label className="d-block">Create at</label>
                                <input type="date" onChange={(e)=>setUserEdit({...userEdit, createdAt: e.target.value})}  value={format(new Date(userEdit.createdAt), 'yyyy-MM-dd')} className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <label className="d-block">Avatar</label>
                                <input type="text" onChange={(e)=>setUserEdit({...userEdit, avatar: e.target.value})} value={userEdit.avatar}  className="form-control" placeholder="avatar..." />
                            </div>
                            <div className="col-6">
                                <label className="d-block">Group</label>
                                <select className="form-control" onChange={(e)=>setUserEdit({...userEdit, idDeparterment: e.target.value})}>
                                    {
                                        departerments.map(d => (
                                            <option value={d.id} selected={d.id == userEdit.idDeparterment}>{d.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-md mt-5">
                <h1 className="text-center">List products</h1>
                <div className="row justify-content-between mb-3">
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-create" onClick={() => evtShowAddEdit()}>Create</button>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            className="form-control mx-md-2"
                            type="text"
                            placeholder="Find product by"
                        />
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
                <div>
                    <table className="table table-striped table-primary">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Create at</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.createdAt}</td>
                                        <td>
                                            <img src={user.avatar} />
                                        </td>
                                        <td>
                                            <i role='button' onClick={()=> handleShowUser(user.id)} className="fa-solid fa-pen-to-square"></i>
                                            <i role='button' className="fa-solid fa-trash"></i>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
