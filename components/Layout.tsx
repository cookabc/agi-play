'use client'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-in",
});

export const metadata: Metadata = {
    title: 'AGISchool - AGI学园 - AI教学平台',
}

const cx = (...classNames: string[]) => classNames.filter(Boolean).join(" ");


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <div
            className={cx(inter.variable, "font-mr bg-light dark:bg-dark") + ' flex flex-col h-screen justify-between'}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
