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
          <div className="card">
            Name: {worker.name}
            <br />
            Location: {worker.location}
            <br />
            PhoneNo: {worker.phoneNo}
            <br />
            Price: {worker.price}
            <br />
          </div>
        );
      })}
    </section>
  );
};
export default Card;
