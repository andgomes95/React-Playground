import { PagesNavBar, ShortlinkNavBar, Title, Wrapper } from './styles';

function NavBar(){
  const shortcuts = ['CALCULARI','ANIME SEASON','ORGANIZER']
  return(
    <Wrapper>
        <Title>React Playground</Title>
        <PagesNavBar>
          { shortcuts.map((text)=>(
            <ShortlinkNavBar>{text}</ShortlinkNavBar>
          )) }
        </PagesNavBar>
      </Wrapper>
  );
}

export default NavBar;