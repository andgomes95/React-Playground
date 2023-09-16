import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 1.5em;
  color: papayawhip;
  display: flex;
`;

export const Wrapper = styled.section`
  padding: 1em;
  background: #BF4F74;
  display: flex;
  justify-content: center;
`;

export const ShortlinkNavBar = styled(Link)`
  text-decoration: none;
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

