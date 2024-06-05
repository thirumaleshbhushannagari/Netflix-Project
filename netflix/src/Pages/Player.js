import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();

  return (
    <PlayerContainer>
      <div className="player">
        <div className="backarow">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video
          src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
          autoPlay
          loop
          controls
        ></video>
      </div>
    </PlayerContainer>
  );
};

const PlayerContainer = styled.div`
  .player {
    height: 100%;
    width: 100%;
    .backarow {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
        color: white;
      }
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Player;
