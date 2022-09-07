import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";


export const Checkout = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <h1>asd</h1>
          </Layout>
        }/>

      </Routes>
    </BrowserRouter>
  );
};
