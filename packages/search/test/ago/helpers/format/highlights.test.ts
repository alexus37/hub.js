import { calcHighlights } from "../../../../src/ago/helpers/format/highlights";

describe("highlights test", () => {
  it("highlights the search term for multiple occurrences", () => {
    const input = "Capital bike share... blah blah capital.... CAPITAL CAPITAL";
    const query = "capital";
    const property = "name";
    const expected = `<mark class="hub-search-highlight name-highlight">Capital</mark> bike share... blah blah <mark class="hub-search-highlight name-highlight">capital</mark>.... <mark class="hub-search-highlight name-highlight"><mark class="hub-search-highlight name-highlight">CAPITAL</mark></mark> <mark class="hub-search-highlight name-highlight"><mark class="hub-search-highlight name-highlight">CAPITAL</mark></mark>`;
    const actual = calcHighlights(input, query, property);
    expect(actual).toBe(expected);
  });

  it("returns undefined if input is undefined or there are no matches", () => {
    let input;
    const query = "capital";
    const property = "name";
    let actual = calcHighlights(input, query, property);
    expect(actual).toBeUndefined();
    input = "blah";
    actual = calcHighlights(input, query, property);
    expect(actual).toBeUndefined();
  });

  it("highlights multi-worded search term for multiple occurrences", () => {
    const input = "Capital bike share... blah blah capital.... CAPITAL CAPITAL";
    const query = "capital bike";
    const property = "name";

    const expected = `<mark class="hub-search-highlight name-highlight">Capital bike</mark> share... blah blah capital.... CAPITAL CAPITAL`;
    const actual = calcHighlights(input, query, property);
    expect(actual).toBe(expected);
  });
});
