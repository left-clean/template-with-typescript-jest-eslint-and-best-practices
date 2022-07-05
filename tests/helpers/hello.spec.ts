import { hello } from "../../src/helpers/hello"

describe("helpers", () => {
  test("expected hello return hi", () => {
    expect("hi").toStrictEqual(hello())
  })
})
