import { createRoot } from "react-dom/client";
import { cleanup, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
// import renderer from "react-test-renderer";

import Home from "../pages/Home/Home";
import NavBar from "../component/Navbar/NavBar";

afterEach(cleanup);

describe("home", () => {
  function prepare() {
    const { container } = render(
      // <ProviderMock favorites={[]}>
      <Home />,
      // </ProviderMock>
    );
    return { container };
  }

  it("testing match snapshot", () => {
    const { container } = prepare();
    expect(container).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      root.render(<Home />);
    });
  });

  it("renders header title in the document", () => {
    render(<NavBar />);
    const linkElement = screen.getByText(/Dungeons and Dragons Spells/);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the Spells component", () => {
    render(<Home />);
    const linkElement = screen.getByTestId("spells-list");
    expect(linkElement).toBeInTheDocument();
  });
});
