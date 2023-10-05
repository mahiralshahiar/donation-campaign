import { useEffect, useState } from "react";
import Campaign from "../Campaign/Campaign";

const HomeAllDonations = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCampaigns(data))

    }, [])


    return (



        <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto py-5">

            {
                campaigns.map(campaign => <Campaign key={campaign.id} campaign={campaign}></Campaign>)


            }
            <h1>Total Campaigns: {campaigns.length}</h1>
        </div>
    );
};

export default HomeAllDonations;