import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../layouts";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Community = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Layout>
            <div className="h-full bg-theme_dark pb-5 text-theme_primary">
                <div className="flex flex-wrap justify-center">
                    <div className="w-4/12 sm:w-2/12 px-4">
                        {/* <LazyLoadImage alt="Logo" src="./assets/images/logoSollinx.png" className="rounded h-4/12 m-auto mt-10 align-middle border-none" height="h-4/12" effect="blur" /> */}
                        <div className="text-center rounded h-2/12 m-auto mt-10 align-middle border-none min-h-sm md:min-h-md w-6/12 lg:w-4/12">
                            &nbsp;
                            <LazyLoadImage src="./assets/images/communitylogo.png?tr=w-1,h-1:w-200,h-150" effect="blur" />
                        </div>
                    </div>
                </div>
                <h5 className="text-2xl text-center">Communities of wisdom</h5>
                <div className="m-auto w-10/12 md:w-10/12 mt-5 md:flex items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <div className="flex flex-col justify-between p-0 leading-normal">
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal md:text-xl lg:text-2xl text-gray-700 dark:text-gray-400"><img className="object-cover float-left w-16 h-auto rounded-t-lg md:h-auto md:w-16 md:rounded-none md:rounded-l-lg" loading="lazy" src="./assets/images/communitylogo.png" style={{ shapeOutside: "none" }} alt="" />
                            Sollinx is a set of communities focused on life interests, organized into “threads” of information.  The menu below leads to community descriptions.   The first Sollinx community is “Finance”.</p>
                    </div>
                </div>
                <div className="m-auto w-10/12 md:w-10/12 mt-5 md:flex items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <div className="flex flex-col justify-between p-0 leading-normal">
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal md:text-xl lg:text-2xl text-gray-700 dark:text-gray-400"><img className="object-cover float-left w-16 h-auto rounded-t-lg md:h-auto md:w-16 md:rounded-none md:rounded-l-lg" loading="lazy" src="./assets/images/basketwClock.png" style={{ shapeOutside: "none" }} alt="" />
                            Information in content threads is classified as “current”, “archived”, and “reference”.  This structure helps community members find information.  Access to all information is limited to holders of Sollinx tokens.</p>
                    </div>
                </div>
                <div className="m-auto w-10/12 md:w-10/12 mt-5 md:flex items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <div className="flex flex-col justify-between p-0 leading-normal">
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal md:text-xl lg:text-2xl text-gray-700 dark:text-gray-400"><img className="object-cover float-left w-16 h-auto rounded-t-lg md:h-auto md:w-16 md:rounded-none md:rounded-l-lg" loading="lazy" src="./assets/images/privacy.png" style={{ shapeOutside: "none" }} alt="" />
                            All community Information is private, confidential, proprietary, and privileged between parties of the community.  Community content is valuable.  The community expects members to protect its content.</p>
                    </div>
                </div>
                <div className="justify-center w-full md:w-full mt-5 flex flex-col items-center bg-theme_dark  md:flex-col hover:bg-theme_dark dark:border-theme_dark text-white dark:hover:bg-theme_dark">
                    <div className="flex flex-col w-4/5 sm:w-4/5 md:w-6/12 bg-theme_dropdown1 rounded-3xl text-center pt-2 pb-2 leading-normal" style={{ cursor: "pointer", height:"120px", zIndex:"50", }} onClick={() => setShowDropdown(!showDropdown)}>
                        <h5 className="mb-2 text-2xl font-bold" style={{ color: "white" }}>Sollinx Communities</h5>
                    </div>
                    {showDropdown ? (<div className="w-4/5 sm:w-4/5 md:w-6/12 mb-5 text-center">
                        <button className="w-full bg-theme_dropdown2 text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-3xl shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" style={{color:"#ffffff", height:"120px", zIndex:"40", top:"-30px", position: "relative"}} type="button"
                        ><Link to="/finance">
                                <img className="w-10 h-8 float-left mr-2 mt-2" src="./assets/images/finance_btn.png" /><p className="mt-3 text-xl" style={{textAlign:"start"}}>Finance</p>
                            </Link>
                        </button>
                        <button className="w-full bg-theme_dropdown3 text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-3xl shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" style={{color:"#ffffff", height:"120px", zIndex:"30", top:"-65px", position: "relative"}} type="button"
                        >
                                <img className="w-10 h-8  float-left mr-2 mt-2" src="./assets/images/health_btn.png" /><p className="mt-3 text-xl" style={{textAlign:"start"}}>Health</p>
                        </button>
                        <button className="w-full bg-theme_dropdown4 text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-3xl shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" style={{color:"#ffffff", height:"120px", zIndex:"20", top:"-100px", position: "relative"}} type="button"
                        >
                                <img className="w-10 h-8  float-left mr-2 mt-4" src="./assets/images/it_btn.png" /><p className="mt-6 text-xl" style={{textAlign:"start", display:"table-cell"}}>Information technology</p>
                        </button>
                        <button className="w-full bg-theme_dropdown5 text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-3xl shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" style={{color:"#ffffff", height:"120px", zIndex:"10", top:"-130px", position: "relative"}} type="button"
                        >
                                <img className="w-10 h-8 float-left mr-2 mt-2" src="./assets/images/life_btn.png" /><p className="mt-3 text-xl" style={{textAlign:"start"}}>Life</p>
                        </button>
                    </div>) : null}
                </div>
                {/* <div className="justify-center w-full md:w-full mt-5 flex flex-col items-center bg-theme_primary  md:flex-col hover:bg-theme_primary dark:border-theme_primary text-white dark:hover:bg-theme_primary">
                    <div className="flex flex-col w-full text-center pt-2 pb-2 leading-normal" style={{ cursor: "pointer" }} onClick={() => setShowDropdown(!showDropdown)}>
                        <h5 className="mb-2 text-2xl font-bold" style={{ color: "white" }}>Sollinx Communities</h5>
                    </div>
                    {showDropdown ? (<div className="w-full mb-5 text-center">
                        <button className="w-4/5 sm:w-4/5 md:w-6/12 mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button"
                        ><Link to="/finance">
                                Finance
                            </Link>
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
                </div> */}
            </div>
        </Layout>
    )
}

export default Community;