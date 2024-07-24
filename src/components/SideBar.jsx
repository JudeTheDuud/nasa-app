import React from "react";

const SideBar = (props) => {
    const{handleToggleModal, data} = props;
  return (
    <div className="sidebar">
        <div onClick={handleToggleModal} className="bgOverlay" ></div>
        <div className="sidebarContents">
      <h2>{data.title}</h2>
      <div className="descriptionContainer">
        <p className="description">{data?.date}</p>
        <p>
         {data.explanation}
        </p>
      </div>
      <button onClick={() =>{
        handleToggleModal()
      }}>
      <i className="fa-solid fa-right-long"></i>
      </button>
      </div>
    </div>
  );
};

export default SideBar;