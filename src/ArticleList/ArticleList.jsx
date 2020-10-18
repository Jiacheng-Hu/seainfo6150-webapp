import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = props => {
	let content;
	if(props.articles.length){
		content = (
			<>
				<ul>{props.articles.map((item) => (
					<ArticleListItem article = {item} key = {item.slug}/>
				))}
				</ul>
			</>
		)
	}else{
		content = <div>You have no data!</div>
	}
	return props.articles.length ? (
		<div>{content}</div>
	) : null;
};

export default ArticleList;