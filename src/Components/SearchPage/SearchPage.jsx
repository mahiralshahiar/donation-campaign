import NavBar from "../NavBar/NavBar";
import "./SearchPage.css"

const SearchPage = () => {
    return (
        <div>


            <div className="for-bg max-h-max  h-screen ">
                <section className="bgimgoverlay h-screen">
                    <NavBar></NavBar>
                    <section className=" h-fit py-16">
                        <div className="text-center mt-14 p-4">
                            <h1 className="font-bold text-5xl">I Grow By Helping People In Need</h1>

                        </div>

                        <div className="form-control py-8 pb-40 max-h-screen ">
                            <div className="input-group justify-center">
                                <input type="text" placeholder="Search here...." className="input input-bordered " />
                                <button className="btn bg-[#FF444A] text-white hover:bg-red-700">Search</button>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div >
    );
};

export default SearchPage;