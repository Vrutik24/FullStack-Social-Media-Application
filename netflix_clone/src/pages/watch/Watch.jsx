import React from "react";
import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay="true"
        progress
        controls="true"
        src="https://www.youtube.com/watch?v=kPqlNyhh-JU"
      />
    </div>
  );
};

export default Watch;
