import React from 'react'
import styled from "styled-components";
import Leftside from './Leftside';
import Middle from './Middle';
import Rightside from './Rightside';

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? -</a>
        </h5>
        <p>Find talented pros in record time with Upwork and Keep business moving</p>
      </Section>
      <Layout>
        <Leftside/>
        <Middle/>
        <Rightside/>
      </Layout>
    </Container>
  )
}
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;

`;
const Section =styled.section`
  max-height: 50px;
  padding: 16px 0px;
  box-sizing: content-box;
  display: flex;
  text-align:center;
  justify-content: center;
  
  h5{
    color:blue;
    font-size: 14px;
    text-decoration: underline;
    a{
      font-weight: 700;
    }
  }
  p{
    font-size: 14px;
    color: #434649;
    font-weight:600;
  }
  @media (max-width:768px) {
    flex-direction: column;
    padding: 0 5px;
    p{
      font-weight:200;
    }
    a{
      font-size: 20px;
    }
  }
`;
const Layout = styled.div`
  display: grid;
  /* This specifies the area of each grid element within the grid layout */
  grid-template-areas: "left middle right";
  /* here the specified grid elements has a specified area = minmax(min, max) and 1fr= 1fraciton of the available grid space */
  grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
  column-gap:25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;
  padding: 0 15px;
  @media (max-width:768px) {
   display :flex ;
   flex-direction: column;
   padding: 0 15px;
  }

`;
export default Home
