import React, { useEffect, useState } from 'react'
import DepartermentService  from '../services/DepartermentServices';
import UserService from '../services/UserServices';
export default function CreateUser({evtShowUsers}) {
    const [user, setUser]   =  useState({
        id: null,
        name: null,
        createdAt: null,
        avatar: null,
        idDeparterment: -1
    });
    const [departerments, setDeparterments] = useState([]);
    console.log("R1 Render", departerments, user);
    useEffect(()=>{
        console.log("DI LAY DU LIEU");
            try{
                async function getDeparterments(){
                    let departermentRes = await DepartermentService.getDeparterments();
                    setDeparterments(
                        departermentRes.data
                    );
                }
                getDeparterments();
            }catch(err){

            }
    }, []);

    const handleDepartermentChange = (evt)=>{
        setUser({
            ...user,
            idDeparterment: evt.target.value
        })
    }
    
    console.log("R2 Render", departerments, user);

    const handleCreateBtn = (evt)=>{
        UserService.createUser(user);
        evtShowUsers();
    }
  return (
    <div className="container row justify-content-center mt-5">
        <div className="col-6">
          <div className="row mb-3">
            <div className="col-6">
              <label className="d-block">Name</label>
              <input type="text" value={null} onChange={(e)=>setUser({...user, name: e.target.value})} className="form-control" placeholder="name..." />
            </div>
            <div className="col-6">
              <label className="d-block">Create at</label>
              <input type="date" onChange={(e)=>setUser({...user, createdAt: e.target.value})} value={null} className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label className="d-block">Avatar</label>
              <input type="text" onChange={(e)=>setUser({...user, avatar: e.target.value})} className="form-control" placeholder="avatar..." />
            </div>
            <div className="col-6">
              <label className="d-block">Group</label>
              <select className="form-control" onChange={handleDepartermentChange}>
                {
                    departerments.map(d => (
                        <>
                            <option value={d.id}>{d.name}</option>
                        </>
                    ))
                }
              </select>
            </div>
          </div>
          <div>
            <button className="btn btn-primary" type="button" onClick={handleCreateBtn}>Create</button>
            <button className="btn btn-danger" type="button" onClick={()=>evtShowUsers()}>Cancel</button>
          </div>
        </div>
      </div>
  )
}
