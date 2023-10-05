import './CampaignDetails.css'

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const CampaignDetails = () => {

    const Campaigns = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const Campaign = Campaigns.find(Campaigns => Campaigns.id === idInt);

    const handleDonate = () => {
        toast('Your Have Donated Successfully')
    }


    return (
        <div className='max-w-7xl mx-auto py-5'>
            <div className='max-w-7xl mx-auto py-5 rounded-lg bg-transparent relative'>
                <div className="hero min-h-screen rounded-lg bg-transparent bg-no-repeat relative"
                    style={{ backgroundImage: `url(${Campaign.image})` }}>



                </div>
                <div className="w-full h-32 bg-[#07070797]  absolute bottom-5 rounded-lg">
                    <button onClick={() => handleDonate()} className={`max-w-md absolute bottom-10 left-10  font-semibold rounded text-white btn border-none b${Campaign.color}`}>Donate $290</button>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-3xl mt-5'>{Campaign.title}</h1>
                <p className='text-base font-normal py-2'>{Campaign.description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CampaignDetails;