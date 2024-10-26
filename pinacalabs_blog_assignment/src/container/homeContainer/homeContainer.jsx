// import React from 'react'
import { useState } from "react";
import { Outlet } from "react-router-dom"
import { Navbar } from "../../component/navbar/navbar";
import { UserContext } from "../../useHooks/useBlogContext/useBlogContext";
import { useHomeContainer } from "../../useHooks/useHomeContainer/useHomeContainer";

const HomeContainer = () => {
  const { blogs, setBlogs } = useHomeContainer();
  return (
    <UserContext.Provider value={
      {
        blogs, setBlogs
      }
    }>
      <div>
        <Navbar />
        <div className="m-10 mt-20 bg-white">
          <Outlet />
        </div>
      </div>
    </UserContext.Provider >
  )
}

export default HomeContainer