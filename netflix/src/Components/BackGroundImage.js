import React from "react";
import styled from "styled-components"

const BackGroundImage = () => {
  return (
    <BackGroundContainer>
      <img
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg"
        alt="no interent connection"
      />
    </BackGroundContainer>
  );
};

const BackGroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
export default BackGroundImage;
