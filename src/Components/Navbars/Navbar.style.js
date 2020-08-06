import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 150px;
  max-width: 20vw;
  background-color: lightgrey;
  border-right: 1px white solid;
  align-items: center;
`;

const NavbarList = styled.ul`
  padding: 0;
  flex: 2;
  margin-bottom: 2rem;
  margin-top: 5rem;
  width: 100%;
`;
const NavbarListItem = styled.li`
  list-style: none;
  padding: .5rem 1rem;
  width: 100%;
`;
const NavbarSublist = styled.ul`
  padding: 0;
  flex: 2;
  margin-top: .5rem;
`;
const NavbarSublistItem = styled.li`
  list-style: none;
  padding: .5rem 1rem;
  width: 100%;
`;

const GuidanceItem = styled.div`
  margin: 2rem 0;
  width: 100%;
  text-align: center;
  padding: .5rem;
`;

export {
  NavbarContainer,
  NavbarListItem,
  NavbarList,
  NavbarSublist,
  NavbarSublistItem,
  GuidanceItem,
};