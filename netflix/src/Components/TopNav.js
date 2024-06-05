import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseauth } from "../Utiles/firebase-Config";

const TopNav = ({ isScrolled }) => {
  const navlink = [
    { name: "Home", link: "/" },
    { name: "Tv Shows", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];
  const navigate = useNavigate();
  onAuthStateChanged(firebaseauth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <NavContainer>
      <nav className={`${isScrolled ? "Scrolled" : "notScrolle"}`}>
        <div className="leftside">
          <div className="logo">
            <img
              className="netflix"
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png
              "
              alt="logo"
            />
          </div>
          <ul className="links">
            {navlink.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rightside">
          <button onClick={() => signOut(firebaseauth)}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  .notScrolle {
    display: flex;
  }
  .Scrolled {
    display: flex;
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .leftside {
      display: flex;
      align-items: center;
      gap: 2rem;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .netflix {
        width: 10rem;
        height: 2rem;
      }
    }
    .links {
      display: flex;
      list-style-type: none;
      gap: 3rem;

      li {
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
  .rightside {
    display: flex;
    align-items: center;
    background-color: red;
    gap: 1rem;
    button {
      border: none;
      background-color: red;
      cursor: pointer;
      border-radius: 50%;
    }
    &:focus {
      outline: none;
    }
    svg {
      color: white;
      font-size: 2rem;
    }
  }
`;
export default TopNav;
