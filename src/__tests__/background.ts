import { sum } from "../background";

test("1 + 1 = 2", () => {
    const x = "x"
    const expected = [{ value: x, unit: x, ingredient: x }]
    const actual = sum(x)
    expect(actual).toStrictEqual(expected);
});