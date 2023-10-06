

import { useEffect, useState } from "react";
import Campaign from "../Campaign/Campaign";
import SearchPage from "../SearchPage/SearchPage";

const HomeAllDonations = ({ searchTerm, searchButtonClicked }) => {
    const [campaigns, setCampaigns] = useState([]);





    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCampaigns(data))



    }, [])



    const filteredCampaigns = searchButtonClicked ? campaigns.filter(campaign => campaign.category.toLowerCase().includes(searchTerm.toLowerCase())) : campaigns;

    // const filteredCampaigns = campaigns.filter((campaign) => {
    //     return campaign.category.toLowerCase().includes(searchTerm.toLowerCase());
    // });





    console.log(searchButtonClicked)

    return (



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto py-5 p-5 lg:p-0 mb-5">

            {
                filteredCampaigns.map(campaign => <Campaign key={campaign.id} campaign={campaign}></Campaign>)


            }

        </div>
    );
};

export default HomeAllDonations;