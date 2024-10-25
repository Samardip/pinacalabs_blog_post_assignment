import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import BlogHome from "./component/blogHome/blogHome";
import BlogView from "./component/blogView/blogView";
import BlogCreate from "./component/blogCreate/blogCreate";
const LazyHomeContainer = React.lazy(() => import('./container/homeContainer/homeContainer'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Suspense fallback="Loading..."><LazyHomeContainer /></Suspense>
        }>
          <Route index path="/" element={<BlogHome />} />
          <Route path="/post/:id" element={<BlogView />} />
          <Route path="/post/create" element={<BlogCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
