import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  const[data , setData] = useState(null);
  const[loading, setLoading] = useState(false)
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=Oah5MZQ3p9OMPX5a2DcQBPGlMvrTaGQmUh6QVnfQ`;
      try {
        const res = await fetch(url);
        if(!res.ok){
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const apiData = await res.json();
        setData(apiData);
        console.log("data", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, [NASA_KEY]);
  return (
    <>
      {data ? (<Main data = {data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar data = {data} handleToggleModal={handleToggleModal} />}
      {data && (<Footer data = {data} handleToggleModal={handleToggleModal} />)}
    </>
  );
}

export default App;
