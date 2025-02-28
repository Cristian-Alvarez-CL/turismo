import { render, screen } from "@testing-library/react"
import Home from "../app/page"

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}))

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />)
    const heading = screen.getByRole("heading", { name: /Descubre la Magia de Mapumay/i })
    expect(heading).toBeInTheDocument()
  })
})