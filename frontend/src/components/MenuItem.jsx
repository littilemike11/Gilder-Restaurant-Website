export default function MenuItem({ item }) {
    return (
        <div className="card bg-base-100 w-auto h-full text-amber-900 shadow-sm">

            <div className="card-body">
                <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-primary h-fit">{item.price}</div>
                </h2>
                <p>{item.description}</p>

                <div className="card-actions justify-end">
                    {item.isVegan && <div className="badge badge-outline">Vegan</div>}
                    {!item.isVegan && item.isVegetarian && <div className="badge badge-outline">Vegetarian</div>}
                </div>
            </div>
            {item.img &&
                <figure className="h-80 overflow-hidden">
                    <img
                        className=""
                        src={item.img}
                        alt={`image of ${item.name}`} />
                </figure>
            }
        </div>
    )
}