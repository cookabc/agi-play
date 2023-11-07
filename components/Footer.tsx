import React from "react";

export default function FooterLayout() {
    const currentYear = new Date().getFullYear();
    return (
        <footer
            className="flex items-center justify-around flex-wrap text-[14px] py-5">
            <p className="my-0">
                Copyright © <span>{currentYear}</span> AGI School
            </p>
        </footer>
    );
}
