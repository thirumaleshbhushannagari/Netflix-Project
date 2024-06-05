import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";
import BackGroundImage from "../Components/BackGroundImage";
import { firebaseauth } from "../Utiles/firebase-Config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseauth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseauth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <Wrapper>
      <BackGroundImage />
      <div className="logincontent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>login</h1>
            </div>
            <div className="container">
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .logincontent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .form-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      flex-direction: column;
      height: 85vh;
    }
    .form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.83);
      height: 70vh;
      padding: 2rem;
      border-radius: 0.4rem;
      color: white;
    }
    .container {
      display: flex;
      gap: 2rem;
      flex-direction: column;
      input {
        border-radius: 0.4rem;
        padding: 0.5rem 1rem;
        width: 20rem;
        height: 2.4rem;
        outline: none;
      }
      button {
        background-color: red;
        padding: 0.5rem;
        border-radius: 0.4rem;
        cursor: pointer;
        border: none;
        color: white;
        height: 3.4rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
export default LoginPage;
