import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./home.scss";

const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const randomList = async () => {
      try {
        const res = await axios.get(
          `/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDkzNDFiZWRhZDkzOTFhZDkxNzJkOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTg4NDI5ODksImV4cCI6MTY1OTI3NDk4OX0.-mbKqQRKz9oUDV9c5_1SNLOJRhWS0_E72Do39GCpsc4",
            },
          }
        );
        console.log(res);
        //  setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    randomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
