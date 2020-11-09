import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import PropTypes from "prop-types";

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

ArticleList.propTypes = {
	articles: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			displayDate: PropTypes.string.isRequired,
			shortText: PropTypes.string.isRequired
		})
	).isRequired
};

export default ArticleList;