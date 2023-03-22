import { useState } from "react";

export default function Categories() {

    const [openMenu, setOpenMenu] = useState(false)

    return (

        <>
            <div className="flex md:hidden ml-8">
                <label>
                    Browse by Category
                </label>
                <span class="m-1 w-2">
                    <svg onClick={() => setOpenMenu(!openMenu)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5 cursor-pointer">
                        <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </div>

            <div className={!openMenu? "flex flex-col md:flex-row justify-between p-4": "hidden md:flex md:justify-between md:p-4"}>
                <div className="flex-none cursor-pointer mx-4">Technology</div>
                <div className="flex-none cursor-pointer mx-4">Writing</div>
                <div className="flex-none cursor-pointer mx-4">Design</div>
                <div className="flex-none cursor-pointer mx-4">Business</div>
                <div className="flex-none cursor-pointer mx-4">Music & Audio</div>
                <div className="flex-none cursor-pointer mx-4">Social Media</div>
            </div>

        </>
    );
}