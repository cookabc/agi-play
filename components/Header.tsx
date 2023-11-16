import Image from 'next/image'

export default function HeaderLayout() {
    return (
        <header className="header fixed top-0 px-5 z-20 bg-white w-full h-[64px] flex"
                style={{borderBottom: '1px solid var(--ant-primary-color)'}}>
            <a href="/" className="mr-5 font-900 text-2xl flex items-center justify-center">
                <Image src="logo.svg" height={60} width={250} alt="Logo"/>
            </a>
        </header>
    )
}
