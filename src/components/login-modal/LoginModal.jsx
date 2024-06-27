import React from 'react';
import {Modal, Box} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useStore} from "@nanostores/react";
import {showLoginModal} from "../../stores/login-store";

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
                    className="absolute top-[50%] left-[50%] flex w-[580px] h-[250px] bg-white transform -translate-y-[50%] -translate-x-[50%]">
                    {/* bg-image-modal is custom class */}
                    <div className="w-[232px] h-full bg-image-modal">

                    </div>

                    <div className="w-[348px] h-full] p-4">
                        <div className="flex justify-end">
                            <span className="cursor-pointer" onClick={() => showLoginModal.set(false)}>
                                <Close/>
                            </span>
                        </div>

                        <div>
                            <p>ورود | عضویت</p>
                            <span>موبایل خود را وارد نمایید.</span>
                            <input type="tel" inputMode="numeric"/>
                            <button type="submit">ورود | عضویت</button>
                        </div>
                    </div>

                </Box>
            </Modal>
        </>
    );
}

export default LoginModal;