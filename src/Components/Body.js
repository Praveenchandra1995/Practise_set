import React from "react";
import { Data, KitchenData } from "./Data";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
export default function Body() {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(false);
  const [keys, setKeys] = useState(false);
  return (
    <div className="body">
      <div className="body-title">
        <h1 className="title-1">Step 1:Niche Products</h1>
        {/*functionality works when you click on arrow */}
        <AiOutlineDown className="icon-1" onClick={() => setOpen(!open)} />
      </div>
      <div className="type-1">
        <h1 className="title-2">Baby Products</h1>
      </div>
      <div className="product-container">
        {open &&
          Data.map((info) => {
            return (
              <div className="product-inner">
                <img src={info.Image} alt="img" className="images" />
                <h1 className="product-title">{info.Title}</h1>
                <p className="product-description">{info.Description}</p>
              </div>
            );
          })}
      </div>
      <div className="type-1">
        <h1 className="title-2">Kitchen Tools</h1>
      </div>
      <div className="product-container">
        {open &&
          KitchenData.map((info) => {
            return (
              <div className="Kitchen-inner">
                <img src={info.Image} alt="img" className="images" />
                <h1 className="product-title">{info.Title}</h1>
                <p className="product-description">{info.Description}</p>
              </div>
            );
          })}
      </div>
      <div className="body-title">
        <h1 className="title-1">Step 2:Getting Hosting&Domain</h1>
        {/*functionality works when you click on arrow */}

        <AiOutlineDown className="icon-1" />
      </div>

      <div className="body-title">
        <h1 className="title-1">Step 3:Keyword Tools</h1>
        <AiOutlineDown className="icon-1" onClick={() => setKey(!key)} />
      </div>
      {key && (
        <div className="key-inner">
          <h2 className="key-title">Tools To Find Keyword</h2>
          <div className="btn-inner1">
            <button className="btn1">#1 Tool</button>
            <h3>Keyword.io</h3>
          </div>
          <div className="btn-inner2">
            <button className="btn1">#1 Tool</button>
            <h3>Keywordsheeter</h3>
            <button className="btn1">#1 Tool</button>
            <h3>Keywordsheeter</h3>
          </div>
        </div>
      )}

      <div className="body-title">
        <h1 className="title-1">Step 4:Find Number of Searches</h1>
        {/*functionality works when you click on arrow */}

        <AiOutlineDown className="icon-1" onClick={() => setKeys(!keys)} />
      </div>
      {keys && (
        <div className="key-inner">
          <h2 className="key-title2">Tools To get Search Volume</h2>
          <div className="btn-inner1">
            <button className="btn1">#1 Tool</button>
            <h3>SemScoop</h3>
          </div>
          <div className="btn-inner2">
            <button className="btn1">#2 Tool</button>
            <h3>LinkGraph</h3>
            <button className="btn1">#3 Tool</button>
            <h3>SearchVolume.io</h3>
          </div>
        </div>
      )}
    </div>
  );
}
