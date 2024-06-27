import React from 'react';
import {Modal, Box} from "@mui/material";
import {Close, AccountCircleOutlined} from "@mui/icons-material";
import {useStore} from "@nanostores/react";
import {showLoginModal} from "../../stores/show-login-store";
import {Link} from "react-router-dom";

function LoginModal() {
    // Stores (nanostore package)
    const $showLoginModal = useStore(showLoginModal);


    // JSX
    return (
        <>
            <Modal
                open={$showLoginModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="outline-none"
            >
                <Box
                    className="absolute top-[50%] left-[50%] flex w-[580px] h-[270px] bg-white transform -translate-y-[50%] -translate-x-[50%] !outline-none">
                    {/* bg-image-modal is custom class */}
                    <div className="w-[232px] h-full bg-image-modal">

                    </div>

                    <div className="w-[348px] h-full] p-4">
                        <div className="flex justify-end">
                            <span className="cursor-pointer" onClick={() => showLoginModal.set(false)}>
                                <Close/>
                            </span>
                        </div>

                        <div className="flex flex-col justify-center gap-3 w-full h-full">
                            <p className="text-lg font-bold">ورود | عضویت</p>
                            <span className="text-sm text-[#555]">موبایل خود را وارد نمایید.</span>
                            <div className="relative">
                                <input type="tel" inputMode="numeric"
                                       className="relative w-full h-11 p-3 pr-10 border-solid border-[1px] border-[#555] rounded-md focus:outline-none"/>
                                <AccountCircleOutlined className="absolute right-1 top-0 bottom-0 my-auto !size-8 text-gray-300"/>
                            </div>
                            <button type="submit" className="w-full h-11 bg-gradient-to-l from-blue-800 to-red-400 text-white rounded-md">ورود | عضویت</button>
                            <span className="text-xs text-[#555]">
                                 ورود یا ثبت نام به منزله قبول
                                <Link to="/" className="text-blue-500 underline"> شرایط و قوانین </Link>
                                پارس کالا است.
                            </span>
                        </div>
                    </div>

                </Box>
            </Modal>
        </>
    );
}

export default LoginModal;