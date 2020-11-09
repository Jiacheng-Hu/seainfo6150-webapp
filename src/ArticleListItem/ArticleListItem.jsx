import React from "react";
import PropTypes from "prop-types";

const ArticleListItem = props => {
	return (
		<li>
			<h3>{props.article.title}</h3>
			<time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
			<p>{props.article.shortText}</p>
		</li>
	);
};

ArticleListItem.propTypes = {
	article: PropTypes.object.isRequired
};

export default ArticleListItem;