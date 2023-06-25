import React from 'react'
import { useState, useEffect } from 'react';
import LoadingTask from './LoadingStaff';



export default function Tasks(props) {
  
  console.log(props.staffs);
  return (
          <>
            <section className="staff-list mt-4">
              <div className="container">
                <div className="row">
                  {
                    props.staffs.map((staff) => (
                      <div className="col-6">
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="row align-items-center">
                              <img
                                className="col-3 rounded"
                                src="https://res.cloudinary.com/dtxyz2s1g/image/upload/v1664434019/qszkm0dacxecczj6rak7.jpg"
                                alt=""
                              />
                              <ul className="col-8 list-group">
                                <li className="list-group-item">{staff.name}</li>
                                <li className="list-group-item">{staff.mobile}</li>
                                <li className="list-group-item">{staff.email}</li>
                              </ul>
                              <div className="col-1">
                                <div className="d-flex flex-column align-items-center">
                                  <a href="" className="btn btn-warning btn-sm mb-1">
                                    <i className="fa fa-eye" />
                                  </a>
                                  <a href="" className="btn btn-success btn-sm mb-1">
                                    <i className="fa fa-edit" />
                                  </a>
                                  <a href="" className="btn btn-danger btn-sm mb-1">
                                    <i className="fa fa-trash" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </section>

            <LoadingTask />
          </>
  )
}
