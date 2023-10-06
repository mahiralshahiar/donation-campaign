import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Utility/LocalStorage";

const MyDonation = () => {
    const donations = useLoaderData();

    const [myDonations, setMyDonations] = useState([])

    useEffect(() => {
        const StoredDonationIds = getStoredDonations();

        if (donations.length > 0) {

            const donated = [];
            for (const id of StoredDonationIds) {
                const donation = donations.find(donation => donation.id === id)

                if (donation) {
                    donated.push(donation)
                }
            }

            setMyDonations(donated);

        }

    }, [])





    return (
        <div>


            <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto py-8 mt-5">



                {myDonations.map((donation) => (
                    <div key={donation.id}>




                        {/* <div className={`card bg-base-100 shadow-xl flex flex-1 flex-col justify-between`}>
                            <img className="h-52 w-full rounded" src={donation.image} alt="Image" />
                            <div className={`p-3 h-24 ${donation.bg_color}`}>
                                <div className={`badge rounded p-3 font-medium my-2 ${donation.category_color} ${donation.color}`}>{donation.category}</div>
                                <h2 className={`font-semibold text-base ${donation.color}`}>{donation.title}</h2>
                            </div>
                        </div> */}


                        <div className="rounded bg-base-100 shadow-xl flex-row flex ">
                            <img className="w-72 rounded h-44" src={donation.image} alt="img" />
                            <div className=" p-2 px-6">

                                <div className={`badge rounded p-3 font-medium my-2 ${donation.category_color} ${donation.color} `}>{donation.category}</div>


                                <h2 className="font-semibold">{donation.title}</h2>
                                <p className="py-2">$290.00</p>
                                <div className="flex">
                                    <button className="btn">View Details</button>
                                </div>
                            </div>
                        </div>




                    </div>
                ))}
                <h1>My Donations: {myDonations.length}</h1>
            </div>






        </div >
    );
};

export default MyDonation;