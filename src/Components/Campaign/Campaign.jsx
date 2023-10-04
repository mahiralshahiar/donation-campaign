
const Campaign = ({ campaign }) => {

    const { category, title, description, image, color, bg_color, category_color } = campaign;
    console.log(category);

    return (


        <div>

            <div className="card bg-base-100 shadow-xl flex flex-1 flex-col justify-between">
                <img className=" h-52 w-full" src={image} alt="Image" />
                <div className="card-body h-60">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p className="">{description}</p>

                    <div className="badge badge-outline">{category}</div>

                </div>
            </div>

        </div>
    );
};

export default Campaign;