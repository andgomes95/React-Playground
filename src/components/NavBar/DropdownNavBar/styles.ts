import styled from "styled-components";
import { MdMenu } from 'react-icons/md';

export const HamburgNavBar = styled(MdMenu)`
  font-size: 2em;
  display: flex;
  height: 100%;
  padding: 0 0.5em;
  cursor: pointer;
  color: #FFF;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 0.25em;
  cursor: pointer;
`;

export const DropdownMenu = styled.ul<{ isOpen: boolean}>`
  position: absolute;
  right:0;
  background-color: #BF4F74;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const DropdownMenuItem = styled.li`
  padding: 10px;

  &:hover {
    background-color: #CCC;
  }
`;

