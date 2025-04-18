export default function ArticleCard({ article }) {
    return (
        <>
            <a href={article.link} target="_blank">
                <div className="card bg-base-100 w-80  shadow-sm">
                    <figure>
                        <img
                            className="w-80 h-80"
                            src={article.img}
                            alt={`image of article`} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{article.name}</h2>
                        <p>{article.title}</p>
                    </div>
                </div>
            </a>

        </>
    )
}