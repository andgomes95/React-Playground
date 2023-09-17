import { useEffect, useState } from 'react';
import { PagesNavBar, ShortlinkNavBar, Title, Wrapper } from './styles';
import DropdownNavBar from './DropdownNavBar';


function NavBar(){
  const [tamanhoDaTela, setTamanhoDaTela] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setTamanhoDaTela(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  return(
    <Wrapper>
        <Title>React Playground</Title>
        {tamanhoDaTela <= 767 ? 
        (<PagesNavBar>
          <DropdownNavBar />
        </PagesNavBar>) : 
        <PagesNavBar>
            <ShortlinkNavBar to="/calculari">CALCULARI</ShortlinkNavBar>
            <ShortlinkNavBar to="/animeseason">ANIME SEASON</ShortlinkNavBar>
            <ShortlinkNavBar to="/organizer">ORGANIZER</ShortlinkNavBar>
        </PagesNavBar>
        }
      </Wrapper>
  );
}

export default NavBar;