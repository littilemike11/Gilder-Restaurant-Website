export default function MenuItem({ item }) {
    return (
        <div className="card bg-base-100 w-auto shadow-sm">
            {item.image &&
                <figure>
                    <img
                        src={item.image}
                        alt={`image of ${item.name}`} />
                </figure>
            }
            <div className="card-body">
                <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-primary">{item.price}</div>
                </h2>
                <p>{item.description}</p>

                <div className="card-actions justify-end">
                    {item.isVegan && <div className="badge badge-outline">Vegan</div>}
                    {!item.isVegan && item.isVegetarian && <div className="badge badge-outline">Vegetarian</div>}
                </div>
            </div>
        </div>
    )
}