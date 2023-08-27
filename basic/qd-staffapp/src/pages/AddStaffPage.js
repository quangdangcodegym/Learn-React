import React from 'react'
import Logo from '../components/Logo'
import NavBar from '../components/Navbar'
import AddStaff from './../components/AddStaff';

export default function AddStaffPage() {
  return (
    <>
      <NavBar />
      <section className="staff-info">
        <div className="container">
          <Logo />
        </div>
      </section>
      <AddStaff />
    </>
  )
}
