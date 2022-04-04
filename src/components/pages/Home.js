import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Layout from "../layouts";
import SollinxAppModal from './modals/SollinxApp';
import SolflareModal from './modals/Solflare';
import BuySollinxModal from './modals/BuySollinx';

const Home = () => {
    const [showSollinxModal, setSollinxShowModal] = useState(false);
    const [showSolflareModal, setSolflareShowModal] = useState(false);
    const [showBuySollinxModal, setBuySollinxModal] = useState(false);
    return (
        <Layout>
            <div className="h-full bg-theme_dark pb-5 text-theme_primary">
                <div className="flex flex-wrap justify-center">
                    <div className="w-4/12 sm:w-4/12 px-4">
                        {/* <LazyLoadImage alt="Logo" src="./assets/images/logoSollinx.png" className="rounded h-4/12 m-auto mt-10 align-middle border-none" height="h-4/12" effect="blur" /> */}
                        <div className="text-center rounded h-4/12 m-auto mt-10 align-middle border-none min-h-sm md:min-h-md">
                            &nbsp;
                            <LazyLoadImage src="./assets/images/logoSollinx.png?tr=w-1,h-1:w-400,h-300"  effect="blur" />
                        </div>
                    </div>
                </div>
                <div className="m-auto w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <img className="object-cover w-24 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" loading="lazy" src="./assets/images/book.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wisdom</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Sollinx</b> is a digital token on the <b>Solana</b> block chain.  <b>Sollinx</b> is a set of communities centered on information of specific interests. Sollinx communities offer information as knowledge and wisdom. Sollinx communities create value for their members, not for shareholders or any institution.</p>
                    </div>
                </div>
                <div className="m-auto w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <img className="object-cover w-24 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"  loading="lazy" src="	./assets/images/community.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Community</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The Solana system allows <b>Sollinx</b> communities to be totally private.  Membership and participation requires no name, no e-mail address, no phone number, no personal information. Period.</p>
                    </div>
                </div>
                <div className="m-auto w-2/3 md:w-2/3 mt-5 flex flex-col items-center bg-theme_paper rounded-lg md:flex-row hover:bg-theme_paper dark:border-theme_paper dark:bg-theme_paper dark:hover:bg-theme_paper">
                    <img className="object-cover w-24 h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"  loading="lazy" src="./assets/images/privacy.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Privacy</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Members must own Sollinx tokens in order to access community content.  Digital “wallets”, on laptops or computers, hold Sollinx tokens. The Solflare app (free) creates wallets to hold Sollinx tokens.</p>
                    </div>
                </div>
                <div className="w-2/3 mt-10 m-auto flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tap below to:</h5>
                    <p className="mb-3 ml-10 font-normal md:text-xl text-gray-700 dark:text-gray-400">
                        - learn more about Sollinx communities
                        <br />
                        - buy Sollinx with a debit/credit card
                        <br />
                        - download the Solflare app to create a wallet
                        <br />
                        - download the Sollinx app
                        <br />
                        - learn about Solana
                        <br />
                        - learn about the company that supports Sollinx, EBG Media B. V.
                        <br />
                    </p>
                </div>
                <div className="w-10/12 m-auto text-center justify-center">
                    <Link to="/community" className="w-4/5 sm:w-4/5 mx-5 mt-3 bg-theme_paper active:bg-sky-600 px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none text-center mb-1 ease-linear transition-all duration-150" style={{display:"inline-block"}}><button className="text-sm text-white font-bold text-base" type="button"
                    >
                        Communities
                    </button></Link>
                    <button className="w-4/5 sm:w-4/ mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setBuySollinxModal(true)}
                    >
                        Buy Sollinx
                    </button>
                    <button className="w-4/5 sm:w-4/5 mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setSolflareShowModal(true)}
                    >
                        Get Solflare App
                    </button>
                    <button className="w-4/5 sm:w-4/5 mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setSollinxShowModal(true)}
                    >
                        Get Sollinx App
                    </button>
                    <button className="w-4/5 sm:w-4/ mx-5 mt-3 bg-theme_paper text-sm text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button"
                    >
                        <a href="https://www.ebgmedia.nl">Visit ebgmedia site</a>
                    </button>
                    <button className="w-4/5 sm:w-4/5 mx-5 mt-3 bg-theme_paper text-sm sm:text-md text-white active:bg-sky-600 font-bold text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" type="button"
                    >
                        <a href="https://www.solana.com">Visit www.solana site</a>
                    </button>
                </div>
            </div>
            {showSollinxModal ? (
                <SollinxAppModal onModal={setSollinxShowModal} />
            ) : null}
            {showSolflareModal ? (
                <SolflareModal onModal={setSolflareShowModal} />
            ) : null}
            {showBuySollinxModal ? (
                <BuySollinxModal onModal={setBuySollinxModal} />
            ) : null}
        </Layout>
    )
}

export default Home;