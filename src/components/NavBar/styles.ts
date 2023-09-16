import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h2`
  font-size: 1.5em;
  color: papayawhip;
  display: flex;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 1em;
  background: #BF4F74;
  display: flex;
  justify-content: center;
`;

export const ShortlinkNavBar = styled.li`
  list-style: none;
  min-width: 120px;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 0.5em;
  cursor: pointer;
  color: #FFF;
  font-weight: bold;
`;

export const PagesNavBar = styled.ul`
  display: flex;
`;

