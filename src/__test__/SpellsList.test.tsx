import { createRoot } from "react-dom/client";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";

import SpellList from "../component/spells/SpellsList";
// import SpellSingle from "../component/spells/SpellSingle";
import { spellData } from "../mockData/spells";

/**
 * Making mock server to handle request
 */
const handlers = [
  rest.get("https://www.dnd5eapi.co/api/spells", (req, res, ctx) =>
    res(ctx.json(spellData), ctx.delay(150)),
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("home", () => {
  function prepare() {
    const { container } = render(<SpellList />);
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
      root.render(<SpellList />);
    });
  });

  it("renders all the spells in the document", async () => {
    render(<SpellList />);
    expect(
      screen.getByRole("link", { name: spellData.results[0].name }),
    ).toBeInTheDocument();
  });
});
