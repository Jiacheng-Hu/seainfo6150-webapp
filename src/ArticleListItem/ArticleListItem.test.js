import React from "react";
import ArticleListItem from "./ArticleListItem";
import {fireEvent} from "@testing-library/react";

describe("ArticleListItem tests", () => {

    const article = {
        "displayDate": "November 21st 2018, 2:57 pm",
        "author": "Cathryn Lindsey",
        "title": "You can take a pie on a plane",
        "shortText": "Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?"
    };
    
    it("renders correctly", () => {
        const { container } = render(<ArticleListItem article = {article}/>);
        expect(container).toMatchSnapshot();
    });

    it("renders correctly after button is clicked", () => {
        const { container, getByText } = render(
           <ArticleListItem article = {article}/>
        );
        const buttonShowMore = getByText("Show more");
        fireEvent.click(buttonShowMore);
        expect(container).toMatchSnapshot();

        const buttonShowLess = getByText("Show less");
        fireEvent.click(buttonShowLess);
        expect(container).toMatchSnapshot();
    });
});