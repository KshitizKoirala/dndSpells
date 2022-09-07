import { Container } from "@mui/material";
import SpellsList from "../../component/spells/SpellsList";
import "./Home.css";

function Home() {
  return (
    <Container maxWidth="xl" className="headerNavbar">
      <SpellsList />
    </Container>
  );
}

export default Home;
