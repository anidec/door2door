import react, { useState, useEffect } from "react";
import reactDom from "react-dom";
import axios from "axios";

import "../styles/search.css";
import cards from "./cards";
// const Search = () => {
//     return (
//         <section>
//             <input
//                 type = 'text'
//                 nmae='search'
//                 value={}
//                 }
//                 >

//             </input>
//         </section>
//     );
// }

const Card = (props) => {
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    axios
      .get("/data")
      .then((res) => setWorkers(res.data))
      .catch((error) => console.log(error));
  }, []);
  //   const { name, location, phoneNo, price } = workers[0];
  return (
    <section className="cards">
      {workers.map((worker, key) => {
        return (
          <div className="card-sec">
            <div className="card">
                <img src={"https://p.kindpng.com/picc/s/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png"} className="card-img"/>
                <div className="card-info">
                    <span className="card-category card-color">{(worker.location).toUpperCase()}</span>
                    <h3 className="card-title">{worker.name}</h3>
                    <span className="card-category">{worker.phoneNo}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="card-category card-color ">{worker.price}</span><br /><br />
                    <a href="">
                        <button className="card-submit card-color">BOOK</button>
                    </a>
                </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Card;
