import { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/skeletonArticles";

const Articles = () => {
	const [articles, setArticles] = useState(null);

	useEffect(() => {
		setTimeout(async () => {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
			const data = await res.json();
			setArticles(data);
		}, 5000);
	}, []);
	return (
		<div className="articles">
			<h2>Articles</h2>

			{articles &&
				articles.map((article) => (
					<div className="article" key={article.id}>
						<h3>{article.title}</h3>
						<p>{article.body}</p>
					</div>
				))}
			{!articles && (
				<div>
					{[...Array(10)].map((item) => (
						<SkeletonArticle key={item} theme="dark" />
					))}
				</div>
			)}
		</div>
	);
};
export default Articles;
