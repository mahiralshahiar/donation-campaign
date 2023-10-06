import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Utility/LocalStorage";
import { Link } from "react-router-dom";

const MyDonation = () => {
    const donations = useLoaderData();

    const [myDonations, setMyDonations] = useState([])

    const [dataLength, setDataLength] = useState(4);
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

    // console.log(dataLength);



    return (
        <div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-3 lg:px-0 md:max-w-7xl mx-auto py-8 mt-5 scale-90 md:scale-100">



                {myDonations.slice(0, dataLength).map((donation) => (
                    <div key={donation.id}>




                        {/* <div className={`card bg-base-100 shadow-xl flex flex-1 flex-col justify-between`}>
                            <img className="h-52 w-full rounded" src={donation.image} alt="Image" />
                            <div className={`p-3 h-24 ${donation.bg_color}`}>
                                <div className={`badge rounded p-3 font-medium my-2 ${donation.category_color} ${donation.color}`}>{donation.category}</div>
                                <h2 className={`font-semibold text-base ${donation.color}`}>{donation.title}</h2>
                            </div>
                        </div> */}


                        <div style={{ backgroundColor: (donation.color + "20") }} className="rounded bg-base-100 shadow-xl flex-row flex ">
                            <img className="md:w-72 w-60 rounded md:h-44" src={donation.image} alt="img" />
                            <div className=" md:p-2 md:px-6 p-2">

                                <div style={{ color: donation.color, backgroundColor: (donation.color + "30") }} className={`badge rounded p-3 font-medium my-2 `}>{donation.category}</div>


                                <h2 className="font-semibold">{donation.title}</h2>
                                <p style={{ color: donation.color }} className="py-2 font-semibold">$290.00</p>
                                <div className="flex">
                                    <Link to={`/campaign/${donation.id}`}>
                                        <button style={{ backgroundColor: donation.color }} className="btn text-white">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>




                    </div>
                ))}

            </div>

            <div className={`flex justify-center py-3 mb-6 ${dataLength === myDonations.length && 'hidden'}`}>
                <button onClick={() => setDataLength(myDonations.length)} className="btn bg-[#009444] text-white">See All</button>

            </div>

        </div >
    );
};

export default MyDonation;