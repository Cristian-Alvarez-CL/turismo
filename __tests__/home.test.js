import { render, screen } from "@testing-library/react"
import Home from "../app/page"

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />)
    const heading = screen.getByRole("heading", { name: /Descubre la Magia de Mapumay/i })
    expect(heading).toBeInTheDocument()
  })
})