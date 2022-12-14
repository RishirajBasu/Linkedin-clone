import styled from "styled-components";
import React from "react";

const Middle = () => {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
    </Container>
  );
};
const Container = styled.div`
  /* grid-area: left; */
`;
const CommanCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%); ;
`;
const ShareBox = styled(CommanCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
`;
export default Middle;
