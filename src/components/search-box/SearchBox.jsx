import React from 'react';
import {Search} from "@mui/icons-material";

function SearchBox(props) {
    // props
    const {show, bgColor, formWidth, formHeight, divSize, inputWidth, inputHeight} = props;

    // JSX
    return (
        <div className={`${show} ${divSize}`}>
            <form
                className={`relative flex items-center ${formWidth} xl:w-[510px] ${formHeight} rounded-[15px] pr-14 ${bgColor}`}>
                <button type="submit"
                        className="absolute right-3 after:absolute after:w-[1px] after:h-[20px] after:rounded-3xl after:bg-white after:right-[30px] after:top-0 after:bottom-0 after:m-auto">
                    <Search className="size-7 text-white"/>
                </button>
                <input type="text" placeholder="جستجو در بین ۱۵۰۰ محصول تخفیف دار"
                       className={`${inputWidth} xl:w-[467px] ${inputHeight} bg-transparent m-auto placeholder:text-white focus:outline-none`}/>
            </form>
        </div>
    )
}

export default SearchBox;