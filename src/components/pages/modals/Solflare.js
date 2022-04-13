import { useState } from 'react';
import BarWave from 'react-cssfx-loading/lib/BarWave'

const SolflareModal = ({ onModal }) => {
    const [showSolanaModal, setShowSolanaModal] = useState(false);

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#e2e2e250]"
                onClick={(e) => e.stopPropagation()} onwmousewheel={(e) => e.stopPropagation()}
            >
                <div className="relative w-4/5 my-3 mx-auto max-w-3xl bg-theme_dark rounded-lg shadow-2xl" style={{borderColor:"#72b8ff80", borderWidth:"3px"}} onClick={(e) => e.stopPropagation()}>
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        {/*body*/}
                        <div className="relative p-6 pb-0 flex-auto">
                            <div className="p-2 w-full text-start bg-white rounded-lg sm:p-2 dark:bg-gray-800">
                                <h5 className="mb-2 text-center text-3xl font-bold text-theme_modalfont dark:text-white">Solflare App</h5>
                                <p className="mb-5 text-base text-theme_modalfont sm:text-lg dark:theme_modalfont">Solana is a highly functional open source project that implements a new, permissionless and high-speed layer-1 blockchain. <br />
                                    The Solana network has processed more than 52 billion transactions, which is roughly 30 times more than bitcoin and Ethereum's total transactions combined, according to the report.
                                </p>
                                <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                                        <div className="text-left text-theme_modalfont">
                                            <div className="-mt-1 font-sans text-sm font-semibold"><a href="https://www.solana.com">Get Solana App</a></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <BarWave />
                                {showSolanaModal ? (<div className="m-auto text-center items-center justify-center items-center space-y-4">

                                    <iframe className="w-full" loading="lazy" style={{ minHeight: "400px" }} src="https://www.solana.com"></iframe>
                                </div>) : null} */}
                            </div>
                        </div>

                        {/*footer*/}
                        <div className="flex items-center justify-end p-2 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => onModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default SolflareModal;