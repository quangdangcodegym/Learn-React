import React, { useState, useEffect } from 'react'
import Logo from '../components/Logo';
import SearchStaffs from '../components/SearchStaffs';
import Staffs from '../components/Staffs';
import NavBar from '../components/Navbar';
import axios from 'axios';
import LoadingStaff from '../components/LoadingStaff';
import Pagination from './../components/Pagination';
import { StaffService } from './../services/StaffService';
import { Filter } from './../model/Filter';


export default function StaffsPage() {
  const [filter, setFilter] = useState(new Filter(1, 5, "", 1));
  const [state, setState] = useState({
    staffs: [],
    loading: false,
    message: ''
  })
  const onKwChange = (kw) => {
    async function getStaffs() {
      setState({
        ...state,
        loading: true
      })
      let urlStaff = `http://localhost:8080/api/staffs?page=${filter.page}&limit=${filter.limit}&q=${kw}`
      
      console.log("onchange: " + urlStaff);
      let data_staffs_Request = await StaffService.getStaffs(urlStaff)
      
      let data_staffs = data_staffs_Request.data;
      setFilter({
        ...filter,
        q: kw,
        totalPages: data_staffs.totalPages
      })
      setState({
        ...state,
        staffs: data_staffs.content,
        loading: false
      })

    }
    getStaffs();
  }




  const onPageChange = (page, totalPages) => {
    console.log(`onPageChange............page: ${page} totalPages: ${totalPages}`);
    async function getStaffs() {
      setState({
        ...state,
        loading: true
      })
      let urlStaff = `http://localhost:8080/api/staffs?page=${page}&limit=${filter.limit}&q=${filter.q}`
      let data_staffs_Request = await StaffService.getStaffs(urlStaff);
      
      let data_staffs = data_staffs_Request.data;
      setFilter({
        ...filter,
        page:page,
        totalPages: data_staffs.totalPages
      })
      setState({
        ...state,
        staffs: data_staffs.content,
        loading: false
      })

    }
    getStaffs();



  }
  useEffect(function () {
    setState({ ...state, loading: true });
    async function getStaffs() {
      setState({
        ...state,
        loading: true
      })
      let urlStaff = `http://localhost:8080/api/staffs?page=${filter.page}&limit=${filter.limit}&q=${filter.q}`
      let data_staffs_Request = await StaffService.getStaffs(urlStaff)
      
      let data_staffs = data_staffs_Request.data;
      console.log("use effect");
      console.log(data_staffs);
      setFilter({
        ...filter,
        totalPages: data_staffs.totalPages
      })
      setState({
        ...state,
        staffs: data_staffs.content,
        loading: false
      })

    }
    getStaffs();


  }, [])
  return (
    <>
      <NavBar />
      <section className="staff-info">
        <div className="container">
          <Logo />
          <SearchStaffs kw={filter.q} onKwChange={onKwChange} />
        </div>
      </section>
      <Staffs staffs={state.staffs} />
      <Pagination onPageChange={onPageChange} page={filter.page} totalPages={filter.totalPages} />
      <LoadingStaff loading={state.loading} />


    </>
  )
}
