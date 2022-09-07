import { Container, AppBar } from "@mui/material";
import SpellsList from "../../component/spells/SpellsList";
import "./Home.css";

function Home() {
  return (
    <Container maxWidth="xl" className="headerNavbar">
      <AppBar color="primary" className="NavbarPanel">
        <h2>Dungeons and Dragons Spells</h2>
      </AppBar>
      <SpellsList />
    </Container>
  );
}

export default Home;
