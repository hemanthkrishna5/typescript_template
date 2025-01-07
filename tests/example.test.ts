import { greet } from "../src/utils/greet";

test("greet function", () => {
  expect(greet("World")).toBe("Hello, World!");
});
