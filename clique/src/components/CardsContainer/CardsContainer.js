import React from "react";
import './card-container.css'

const Container = (props) => (
  <div className="card-container">
            {props.children}
  </div>
);

export default Container;