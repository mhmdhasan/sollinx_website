import { useState } from 'react';
import Layout from "../layouts";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Community = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Layout>
            <div className="h-full bg-theme_dark pb-5 text-theme_primary">
                <div className="flex flex-wrap justify-center">
                    <div className="w-4/12 sm:w-4/12 px-4">
                        <div className="text-center rounded h-4/12 m-auto mt-10 align-middle border-none min-h-sm md:min-h-md">
                            &nbsp;
                            <LazyLoadImage src="./assets/images/logoSollinx.png?tr=w-1,h-1:w-400,h-300"  effect="blur" />
                        </div>
                    </div>
                </div>
                <h5 className="text-2xl text-center">Communities of wisdom</h5>
                <div className="m-auto w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <img className="object-cover w-24 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./assets/images/logoSollinx.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sollinx is a set of communities focused on life interests, organized into “threads” of information.  The menu below leads to community descriptions.   The first Sollinx community is “Finance”.</p>
                    </div>
                </div>
                <div className="m-auto w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <img className="object-cover w-24 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./assets/images/logoSollinx.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Information in content threads is classified as “current”, “archived”, and “reference”.  This structure helps community members find information.  Access to all information is limited to holders of Sollinx tokens.</p>
                    </div>
                </div>
                <div className="m-auto w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <img className="object-cover w-24 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./assets/images/logoSollinx.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">All community Information is private, confidential, proprietary, and privileged between parties of the community.  Community content is valuable.  The community expects members to protect its content.</p>
                    </div>
                </div>

                <div className="m-auto justify-center w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg shadow-md md:flex-col hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <div className="flex flex-col p-4 leading-normal" style={{ cursor: "pointer" }} onClick={() => setShowDropdown(!showDropdown)}>
                        <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Sollinx Communities</h5>
                    </div>
                    {showDropdown ? (<div className="w-full mb-5 text-center">
                        <button className="w-4/5 sm:w-4/5 md:w-6/12 mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            Finance
                        </button>
                        <button className="w-4/5 sm:w-4/5 md:w-6/12 mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            Health
                        </button>
                        <button className="w-4/5 sm:w-4/5 md:w-6/12 mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            Nutrition
                        </button>
                        <button className="w-4/5 sm:w-4/5 md:w-6/12 mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            Life
                        </button>
                    </div>) : null}
                </div>
            </div>
        </Layout>
    )
}

export default Community;