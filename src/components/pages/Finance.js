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
                    <div className="w-4/12 sm:w-4/12 px-4">
                        <div className="text-center rounded h-4/12 m-auto mt-10 align-middle border-none min-h-sm md:min-h-md">
                            &nbsp;
                            <LazyLoadImage src="./assets/images/logoSollinx.png?tr=w-1,h-1:w-400,h-300"  effect="blur" />
                        </div>
                    </div>
                </div>
                <h5 className="text-2xl text-center">Money wisdom</h5>
                <div className="m-auto w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <img className="object-cover w-24 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./assets/images/logoSollinx.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Finance is a fundamental aspect of life.  SollinxFinance is a community of individuals seeking information for better financial decision-making.   Content threads include: securities, debt, insurance, crypto, real estate, and tax.</p>
                    </div>
                </div>
                <div className="m-auto w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <img className="object-cover w-24 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./assets/images/logoSollinx.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Activities of the community center on relevant, timely, and accurate content on financial topics.  Content clearly differentiates between fact, observation, opinion, and advice. Members learn in order to better decide and act.</p>
                    </div>
                </div>
                <div className="m-auto w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <img className="object-cover w-24 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./assets/images/logoSollinx.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Wise individuals seek good information to make better decisions. The Sollinx community creates and promulgates information worthy of trust.</p>
                    </div>
                </div>
                <div className="w-10/12 m-auto flex flex-wrap justify-center mt-5">
                    <button className="w-4/5 sm:w-4/5 md:w-3/12 mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setSollinxShowModal(true)}
                    >
                        Get Sollinx App
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