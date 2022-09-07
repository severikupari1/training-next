import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from "./components/Layout";
import YoutubeContainer from "./components/YoutubeContainer";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>

      <Route path="/login" element={
        <Layout>
          <h1>login</h1>
        </Layout>
      }></Route>

      <Route path="/" element={
        <Layout>
          <YoutubeContainer>
            <h1>asd</h1>
          </YoutubeContainer>
        </Layout>
      }></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
