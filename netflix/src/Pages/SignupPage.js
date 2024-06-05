import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseauth } from "../Utiles/firebase-Config";
import Header from "../Components/Header";
import BackGroundImage from "../Components/BackGroundImage";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [showPassword, setshowPassWord] = useState(false);
  const [fromValues, setFromValuse] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSigIn = async () => {
    try {
      const { email, password } = fromValues;
      await createUserWithEmailAndPassword(firebaseauth, email, password);
    } catch (error) {}
  };

  onAuthStateChanged(firebaseauth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <Container>
      <BackGroundImage />

      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited Movies, TV Shows and More</h1>
            <h4>Watch Anywhere,Cancle Anytime</h4>
            <h6>
              Ready to Watch? Enter Your Email to Create or Restart membership
            </h6>
          </div>
          <div className="form">
            {showPassword ? (
              <input
                type="password"
                placeholder="password"
                name="password"
                value={fromValues.password}
                onChange={(e) =>
                  setFromValuse({
                    ...fromValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ) : (
              <input
                type="email"
                placeholder="email"
                name="email"
                value={fromValues.email}
                onChange={(e) =>
                  setFromValuse({
                    ...fromValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword ? (
              <button onClick={() => setshowPassWord(true)}>Get Started</button>
            ) : (
              <button onClick={handleSigIn}>Sign Up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.79);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;

    .body {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .text {
      display: flex;
      text-align: center;
      color: white;
      flex-direction: column;
      font-size: 1rem;
      gap: 1rem;
    }
    h1 {
      padding: 0 25rem;
    }
    h4 {
      padding: -1.5rem;
    }
    h6 {
      padding: -1.5rem;
      font-size: 1rem;
    }
  }
  .form {
    display: grid;
    width: 60%;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 1fr" : "2fr 1fr"};
    input {
      color: black;
      padding: 1rem;
      font-size: 1.2rem;
      width: 43rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      font-size: 1.05rem;
      width: 10rem;
      color: white;
    }
  }
`;
export default SignupPage;
