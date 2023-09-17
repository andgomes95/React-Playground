import { useState } from "react";
import { DropdownButton, HamburgNavBar, DropdownMenu, DropdownMenuItem } from "./styles";
import { ShortlinkNavBar } from "../styles";

function DropdownNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <DropdownButton>
      <DropdownButton onClick={toggleDropdown}>
        <HamburgNavBar />
      </DropdownButton>
      <DropdownMenu isOpen={isDropdownOpen}>
        <DropdownMenuItem><ShortlinkNavBar to="/calculari">CALCULARI</ShortlinkNavBar></DropdownMenuItem>
        <DropdownMenuItem><ShortlinkNavBar to="/animeseason">ANIME SEASON</ShortlinkNavBar></DropdownMenuItem>
        <DropdownMenuItem><ShortlinkNavBar to="/organizer">ORGANIZER</ShortlinkNavBar></DropdownMenuItem>
        
            
            
      </DropdownMenu>
    </DropdownButton>
  )
}

export default DropdownNavBar;