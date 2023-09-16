import { PagesNavBar, ShortlinkNavBar, Title, Wrapper } from './styles';

function NavBar(){
  return(
    <Wrapper>
        <Title>React Playground</Title>
        <PagesNavBar>
            <ShortlinkNavBar to="/calculari">CALCULARI</ShortlinkNavBar>
            <ShortlinkNavBar to="/animeseason">ANIME SEASON</ShortlinkNavBar>
            <ShortlinkNavBar to="/organizer">ORGANIZER</ShortlinkNavBar>
        </PagesNavBar>
      </Wrapper>
  );
}

export default NavBar;