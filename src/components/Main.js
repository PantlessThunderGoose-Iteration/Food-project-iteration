import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Main = props => {

  return(
    <div>
      {/* <img src="logo.png" alt="logo"></img> */}
       
        <div id='cultureName'>
            {props.meal.strArea}
        </div>
        <div>
        <h3>Information on this culture's food:</h3>
        <p id='cultureInfo'>{props.info}</p>
      </div>
    </div>
  );
}

export default Main;