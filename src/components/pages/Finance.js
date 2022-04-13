import { useState } from 'react';
import Layout from "../layouts";
import SollinxAppModal from './modals/SollinxApp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Finance = () => {
    const [showSollinxModal, setSollinxShowModal] = useState(false);

    return (
        <Layout>
            <div className="h-full bg-theme_dark pb-5 text-theme_primary">
                <div className="flex flex-wrap justify-center">
                    <div className="w-6/12 sm:w-3/12 px-4">
                        {/* <LazyLoadImage alt="Logo" src="./assets/images/logoSollinx.png" className="rounded h-4/12 m-auto mt-10 align-middle border-none" height="h-4/12" effect="blur" /> */}
                        <div className="text-center rounded h-3/12 m-auto mt-10 align-middle border-none min-h-sm md:min-h-md w-6/12 lg:w-4/12">
                            &nbsp;
                            <LazyLoadImage src="./assets/images/logoSollinxFinance.png?tr=w-1,h-1:w-200,h-150" effect="blur" />
                        </div>
                    </div>
                </div>
                <h5 className="text-2xl text-center">Money wisdom</h5>
                <div className="m-auto w-10/12 md:w-10/12 mt-5 md:flex items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <div className="flex flex-col justify-between p-0 leading-normal">
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal md:text-xl lg:text-2xl text-gray-700 dark:text-gray-400"><img className="object-cover float-left w-16 h-auto rounded-t-lg md:h-auto md:w-16 md:rounded-none md:rounded-l-lg" loading="lazy" src="./assets/images/money.png" style={{ shapeOutside: "none", marginRight: "15px" }} alt="" />
                        Finance is a fundamental aspect of life.  SollinxFinance is a community focused on better financial decision-making. Content threads are: "securities", "debt", "insurance", "crypto", "real estate", and "tax".</p>
                    </div>
                </div>
                <div className="m-auto w-10/12 md:w-10/12 mt-5 md:flex items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <div className="flex flex-col justify-between p-0 leading-normal">
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal md:text-xl lg:text-2xl text-gray-700 dark:text-gray-400"><img className="object-cover float-left w-16 h-auto rounded-t-lg md:h-auto md:w-16 md:rounded-none md:rounded-l-lg" loading="lazy" src="./assets/images/groupwTarget.png" style={{ shapeOutside: "none", marginRight: "15px" }} alt="" />
                        This community centers on relevant, timely, and accurate content on financial topics.  Content clearly differentiates between fact, observation, opinion, and advice. Members learn in order to better decide and act.</p>
                    </div>
                </div>
                <div className="m-auto w-10/12 md:w-10/12 mt-5 md:flex items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <div className="flex flex-col justify-between p-0 leading-normal">
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal md:text-xl lg:text-2xl text-gray-700 dark:text-gray-400"><img className="object-cover float-left w-16 h-auto rounded-t-lg md:h-auto md:w-16 md:rounded-none md:rounded-l-lg" loading="lazy" src="./assets/images/trust.png" style={{ shapeOutside: "none", marginRight: "15px" }} alt="" />
                        Wise individuals seek good information to make better decisions. The Sollinx community creates and promulgates information worthy of trust.</p>
                    </div>
                </div>

                <div className="w-10/12 m-auto flex flex-wrap justify-center mt-5">
                    <button className="w-3/5 sm:w-2/5 mx-5 mt-3 bg-theme_button text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setSollinxShowModal(true)}
                    >
                        <p ><img className="object-cover float-left w-6 rounded-lg" loading="lazy" src="./assets/images/logosollinx.png" alt="" />
                        &nbsp;Get Sollinx App</p>                       
                    </button>
                </div>
            </div>
            {showSollinxModal ? (
                <SollinxAppModal onModal={setSollinxShowModal} />
            ) : null}
        </Layout>
    )
}

export default Finance;