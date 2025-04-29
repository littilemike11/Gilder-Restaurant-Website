export default function ArticleCard({ article }) {
    return (
        <>

            <div className="card bg-base-100 w-80 shadow-sm">
                <a href={article.link} target="_blank" title="Go to Article">
                    <figure>
                        <img
                            className="w-80 h-80"
                            src={article.img}
                            alt={`image of article`} />
                    </figure>
                </a>
                <div className="card-body">
                    <h2 className="card-title">{article.name}</h2>
                    <p>{article.title}</p>
                </div>
                <div className="card-actions justify-end p-2">
                    <button className="btn btn-secondary"><a href={article.link} target="_blank" title="Go to Article">Read More</a></button>
                </div>
            </div>


        </>
    )
}