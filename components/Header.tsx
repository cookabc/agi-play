import React from "react";
import Image from 'next/image'

export default function HeaderLayout() {
    return (
        <header className="bg-slate-100 px-5 flex items-center">
            <a href="/" className="mr-5 font-900 text-2xl f-c-c">
                <Image src="logo.svg" width={250} height={60} alt="Logo"/>
            </a>
        </header>
    )
}
