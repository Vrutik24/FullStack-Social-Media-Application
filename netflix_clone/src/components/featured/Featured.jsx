import React from "react";
import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Shows"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="docuumentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://tbivision.com/files/2020/05/The-Last-Dance.jpg"
        alt="The Last Dance"
      />
      <div className="info">
        <h1 className="title">The Last Dance</h1>
        <span className="desc">
          The Last Dance is a 2020 American sports documentary miniseries
          co-produced by ESPN Films and Netflix. Directed by Jason Hehir, the
          series revolves around the career of Michael Jordan, with particular
          focus on his final season with the Chicago Bulls. The series features
          exclusive footage from a film crew that had an all-access pass to the
          Bulls, as well as interviews of many NBA personalities including
          Jordan, Scottie Pippen, Dennis Rodman, Steve Kerr, and Phil Jackson.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
