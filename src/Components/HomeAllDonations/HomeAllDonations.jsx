import { useEffect, useState } from "react";
// import Campaign from "./Campaign/Campaign";

const HomeAllDonations = () => {
    const [campaigns, setCampaigns] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCampaigns(data))

    }, [])


    return (



        <div>

            {/* {
                campaigns.map(campaign => <Campaign key={campaign.index} campaign={campaign}></Campaign>)


            }, */}
            <h1>Total Campaigns: {campaigns.length}</h1>
        </div>
    );
};

export default HomeAllDonations;