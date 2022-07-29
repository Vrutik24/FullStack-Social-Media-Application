import React, { useState } from "react";
import { Add, PlayArrow, ThumbUp, ThumbDown } from "@mui/icons-material";
import "./listItem.scss";

const ListItem = ({ index }) => {
  const [hovered, setHovered] = useState(false);
  const trailer = "https://youtu.be/kPqlNyhh-JU";
  return (
    <div
      className="listItem"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ left: hovered && index * 225 - 50 + index * 2.5 }}
    >
      <img
        src="https://th.bing.com/th/id/OIP.uMIN8o-hkqS7OraJ5KJahQHaKd?pid=ImgDet&rs=1"
        alt="Naruto"
      />
      {hovered && (
        <>
          <video src={trailer} autoplay="true" loop></video>
          <div className="listInfo">
            <div className="listIcons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUp className="icon" />
              <ThumbDown className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hr 14 mins</span>
              <span className="limit">+13</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Naruto Uzumaki, a mischievous adolescent ninja, struggles as he
              searches for recognition and dreams of becoming the Hokage, the
              village's leader and strongest ninja.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
