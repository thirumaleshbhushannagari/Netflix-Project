import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineAlipayCircle } from "react-icons/ai";
import { FaPlay } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TopNav from "../Components/TopNav";
import Card from "../Components/Card";
import { fetchMovies, getgenres } from "../Store/Index";
import SliderContainer from "../Components/SliderComponent";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const movies = useSelector((state) => state.netflix.movies);

  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getgenres());
  }, []);

  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  // console.log(movies)
  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          alt="hero section"
        />

        <div className="container">
          <div className="title">
            <h1>Super Man</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              impedit dolores, recusandae soluta facere inventore pariatur
              voluptatibus blanditiis beatae quam exercitationem sint! Corporis
              ratione quae minima aliquid doloribus at iusto!
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/player")} className="playbtn">
              Play
            </button>
            <button className="morebtn">More</button>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies} />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  .hero {
    position: relative;

    .background-image {
      filter: brightness(40%);
    }
    img {
      width: 100%;
      height: 70vh;
    }
    .container {
      position: absolute;
      bottom: -3.5rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 65px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }

      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }

      .playbtn {
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 1rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
      }
      .morebtn {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: black;

        border-radius: 1rem;
        cursor: pointer;
        font-size: 1rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
      }
    }
  }
`;

export default Home;
