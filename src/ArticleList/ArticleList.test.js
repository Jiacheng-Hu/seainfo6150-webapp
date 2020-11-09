import React from "react";
import ArticleList from "./ArticleList";

describe("ArticleList tests", () => {
    it("renders correctly", () => {
        const articles = [
            {
                "displayDate": "November 21st 2018, 2:57 pm",
                "author": "Cathryn Lindsey",
                "title": "You can take a pie on a plane",
                "shortText": "Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?"
            },
            {
                "displayDate": "November 22nd 2018, 6:58 am",
                "author": "Britney Collier",
                "title": "Boeing's 777X jetliner comes together ",
                "shortText": "Travelers around the globe are one step closer to seeing a plane with its wings folded up being taxied to their gate."
            }
        ];
        const { container } = render(<ArticleList articles = {articles}/>);
        expect(container ).toMatchSnapshot();
    });
})