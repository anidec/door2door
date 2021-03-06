import react, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
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

let orignalWorkers = [];

const Card = (props) => {
  const [workers, setWorkers] = useState([]);
  const [workerID, setWorkerID] = useState();
  useEffect(() => {
    axios
      .get("/data")
      .then((res) => {
        setWorkers(res.data);
        orignalWorkers = res.data;
      })
      .catch((error) => console.log(error));
  }, []);

  const search = (e) => {
    // if (e.target.value.length === 0) {
    //   setWorkers(orignalWorkers);
    //   return;
    // }
    const newWorkers = orignalWorkers.filter((item) =>
      item.location.includes(e.target.value)
    );
    setWorkers(newWorkers);
  };

  return (
    <>
      <div style={{ width: "500px", margin: "0px auto" }}>
        <input type="text" onChange={(e) => search(e)}></input>
      </div>
      <section className="cards">
        {workers.map((worker, key) => {
          return (
            <div className="card-sec">
              <div className="card">
                <img
                  src={`https://picsum.photos/200/300?random=10/${Math.floor(
                    Math.random() * 1000
                  )}`}
                  className="card-img"
                />
                <div className="card-info">
                  <span className="card-category card-color">
                    {worker.location}
                  </span>
                  <h3 className="card-title">{worker.name}</h3>
                  <span className="card-category">{worker.phoneNo}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="card-category card-color ">
                    ${worker.price}
                  </span>
                  <br />
                  <br />
                  <Link
                    to={{
                      pathname: "/bookingProfile",
                    }}
                  >
                    <button
                      onClick={() => {
                        console.log(worker._id);
                        localStorage.setItem("id", worker._id);
                        localStorage.setItem("name", worker.name);
                        localStorage.setItem("price", worker.price);
                      }}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      BOOK
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default Card;
