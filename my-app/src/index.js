import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListUnits from './component/ListUnits';
import UnitDetails from './component/UnitDetails';
import TestComp from './component/TestComp';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" exact element={<ListUnits />}>
      {/* <Route path="units" exact element={<ListUnits />} /> */}
      <Route path="units/:id" element={<UnitDetails />} />
      <Route path="test" element={<TestComp />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
