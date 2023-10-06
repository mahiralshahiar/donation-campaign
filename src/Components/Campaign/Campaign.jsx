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
                <div className={`card bg-base-100 shadow-xl flex flex-1 flex-col justify-between rounded-lg`}>
                    <img className="h-52 w-full rounded" src={image} alt="Image" />
                    <div style={{ backgroundColor: (color) + "20" }} className={`p-3 h-24 rounded-lg`}>

                        <div style={{ color: color, backgroundColor: (color + "30") }} className={`badge rounded p-3 font-medium my-2  `}>{category}</div>
                        <h2 style={{ color: color }} className={`font-semibold text-base `}>{title}</h2>

                    </div>
                </div>
            </Link >
        </div >
    );
};


export default Campaign;