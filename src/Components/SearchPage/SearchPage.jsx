// import Campaign from "../HomeAllDonations/Campaign/Campaign";
import HomeAllDonations from "../HomeAllDonations/HomeAllDonations";
import "./SearchPage.css"
import React, { useState } from 'react';


const SearchPage = ({ onSearch, }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);

    const handleSearch = () => {



        if (searchButtonClicked) {
            setSearchButtonClicked(false);
        }

        else if (searchButtonClicked !== true) {
            setSearchButtonClicked(true);
        }
    };


    return (
        <div>


            <div className="for-bg max-h-max  h-screen ">
                <section className="bgimgoverlay h-screen">

                    <section className=" h-fit py-16">
                        <div className="text-center mt-14 p-4">
                            <h1 className="font-bold text-5xl">I Grow By Helping People In Need</h1>

                        </div>

                        <div className="form-control py-8 pb-40 max-h-screen ">
                            <div className="input-group justify-center">

                                <input onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search here...." className="input input-bordered " />


                                <button onClick={handleSearch} className="btn bg-[#FF444A] text-white hover:bg-red-700">Search</button>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

            {/* <Campaign></Campaign> */}
            <HomeAllDonations searchTerm={searchTerm} searchButtonClicked={searchButtonClicked}></HomeAllDonations>
        </div >
    );
};

export default SearchPage;