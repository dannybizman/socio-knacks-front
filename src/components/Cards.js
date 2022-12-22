import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";


function Cards() {
  return (
    <>
      <div className="my-img-container">
        <img src="images/Tasks-1.png" className="my-img" />
      </div>
      <div className="cards">
      <div className="header-card">
 <h1 className="">What We Offer ?</h1>
 </div>
        <div className="cards__container">
      
          <div className="cards___wrapper">
            <ul className="cards__items">
              <CardItem
                // src="images/Rectangle.png"
                icon="fa-regular fa-triangle"
                text="Best CRM tool for your business growth"
                label="CRM"
                path="/services"
              />

              <CardItem
                src="images/Rectangle.png"
                text="Best CRM tool for your business growth"
                label="CRM"
                path="/services"
              />
              <CardItem
                src="images/Rectangle.png"
                text="Best CRM tool for your business growth"
                label="CRM"
                path="/services"
              />
              <CardItem
                src="images/Rectangle.png"
                text="Best CRM tool for your business growth"
                label="CRM"
                path="/services"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="images/Rectangle.png"
                text="Best CRM tool for your business growth"
                label="CRM"
                path="/services"
              />

              <CardItem
                src="images/Rectangle.png"
                text="Best CRM tool for your business growth"
                label="CRM"
                path="/services"
              />
              <CardItem
                src="images/Rectangle.png"
                text="Best CRM tool for your business growth"
                label="CRM"
                path="/services"
              />
              <CardItem
                src="images/Rectangle.png"
                text="Best CRM tool for your business growth"
                label="CRM"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
