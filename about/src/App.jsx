import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header/>
    <div className="text-center">
      <img src="https://images.pexels.com/photos/27201648/pexels-photo-27201648/free-photo-of-a-horse-with-a-saddle-is-grazing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-full w-20 mb-4 mx-auto" alt="Avatar" />
      <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
      <p class="text-gray-500">Web designer</p>
    </div>
    <Footer/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)