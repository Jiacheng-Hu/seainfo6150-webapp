import React from "react";
import PropTypes from "prop-types";

const ArticleListItem = props => {
	return (
		<li key={props.key}>
			<h3>{props.article.title}</h3>
			<time datetime={props.article.timeStamp}>{props.article.displayDate}</time>
			<p>{props.article.shortText}</p>
		</li>
	);
};

ArticleListItem.propTypes = {
	article: PropTypes.object.isRequired
};

export default ArticleListItem;