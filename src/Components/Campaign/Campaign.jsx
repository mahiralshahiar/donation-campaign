import { Link } from 'react-router-dom';
import './Campaign.css'

const Campaign = ({ campaign }) => {

    const { category, title, description, image, color, bg_color, category_color, id } = campaign;

    // const dynamicCSS = `.pColor{
    //     background:${bg_color}
    // }`


    return (
        <div>
            <Link to={`/campaign/${id}`}>
                {/* <style>{dynamicCSS}</style> */}
                <div className={`card bg-base-100 shadow-xl flex flex-1 flex-col justify-between`}>
                    <img className="h-52 w-full rounded" src={image} alt="Image" />
                    <div className={`p-3 h-24 ${bg_color} `}>

                        <div className={`badge rounded p-3 font-medium my-2 ${category_color} ${color} `}>{category}</div>
                        <h2 className={`font-semibold text-base ${color}`}>{title}</h2>

                    </div>
                </div>
            </Link>
        </div >
    );
};


export default Campaign;