import React from "react";
import { UNSAFE_RouteContext } from "react-router-dom";
import styled from "styled-components";
const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap >
            {/* home */}
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
             {/* network */}
             <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>
             {/* jobs */}
             <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
             {/* messagings */}
             <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>
             {/* Notification */}
             <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>
                  Me
                <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut>
                <a>
                  Sign out
                </a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>

              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  position: fixed;
  top: 0;
  padding: 0 24px;
  width: 100vw;
  z-index: 10000;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      border-radius: 2px;
      box-shadow: none;
      padding: 0px 8px 0 48px;
      background-color: #eef3f8;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      /* unit-less : uses the number multiplied by its font size */
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 100;
  /* To let the cursor be same as that on the search field on hovering over the search Icon  */
  pointer-events: none;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  /* the Nav component is fixed at the bottom of the screen for mobile devices */
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
    z-index: -1;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type:none;
  /* for all those NavList who has the active class */
  .active{
    /* underneath the content of the span tag of the NavList */
    span:after{
      content: "";
      transform: scaleY(1);
      border-bottom: 2px solid var(--white,#fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width:100%;
      border-color:rgba(0,0,0,0.9);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a{
    display: flex;
    align-items: center;
    background:transparent;
    /* The vertically display of the contents inside the a tag */
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
  }
  span{
    color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    font-weight:bolder;
  }
  @media (max-width: 768px) {
    min-width: 70px;
  }
  &:hover,&:active{
    a{
      span{
        color: rgba(0,0,0,1);
      }
    }
  }
`;
const SignOut=styled.div`
  position: absolute;
  top:45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width:100px;
  height:40px;
  font-size: 14px;
  transition-duration: 167ms;
  text-align:center;
  display: none;

`;
// Style of NavList is borrowed to the User  
const User=styled(NavList)`
  a>img{
    width:24px;
    height:24px;
    border-radius:50%;
  }
  span{
    display:flex;
    align-items: center;
  }
  &:hover{
    ${SignOut}{
      align-items: center;
      display:flex;
      justify-content:center;
    }
  }
`;
// Style of User is borrowed to Work
const Work =styled(User)`
  border-left:1px solid rgba(0,0,0,0.08);
`;

export default Header;
