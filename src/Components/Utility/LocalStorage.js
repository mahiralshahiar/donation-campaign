import { stringify } from "postcss";
import { json } from "react-router-dom"

const getStoredDonations = () => {

    const StoredDonations = localStorage.getItem('Donations')


    if (StoredDonations) {
        return JSON.parse(StoredDonations);

    }
    return [];
}


const saveDonations = id => {

    const StoredDonations = getStoredDonations();
    const exists = StoredDonations.find(donationId => donationId === id)

    if (!exists) {
        StoredDonations.push(id);
        localStorage.setItem('Donations', JSON.stringify(StoredDonations))

    }
}

export { getStoredDonations, saveDonations }