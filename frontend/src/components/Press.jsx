import ArticleCard from "./ArticleCard"
import articles from "/src/PressArticles"
export default function Press() {
    return (
        <>
            <h1>Press</h1>
            <div className="grid place-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article}></ArticleCard>
                ))}
            </div>
        </>
    )
}