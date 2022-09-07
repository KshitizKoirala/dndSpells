import { Container, AppBar } from "@mui/material";

// Show Navbar in all Pages
function NavBar() {
  return (
    <Container maxWidth="xl" className="headerNavbar">
      <AppBar color="primary" className="NavbarPanel">
        <h2>Dungeons and Dragons Spells</h2>
      </AppBar>
    </Container>
  );
}

export default NavBar;
