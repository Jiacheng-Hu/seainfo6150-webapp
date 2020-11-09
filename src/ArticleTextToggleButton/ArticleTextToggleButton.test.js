import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleListItem tests", () => {
    it("renders correctly", () => {
        const { container } = render(<ArticleTextToggleButton buttonText = "show more"/>);
        expect(container).toMatchSnapshot();
    });
});