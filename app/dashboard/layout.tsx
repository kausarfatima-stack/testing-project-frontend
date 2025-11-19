import HeaderButton from "../components/headerButton";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        <div className="flex h-screen bg-gray-100">
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <div className="hidden peer-checked:flex md:flex flex-col w-64 bg-gray-800 transition-all duration-300 ease-in-out">
                <div className="flex flex-col items-center justify-between bg-gray-900 px-4">
                    <img className="w-24 h-24 mb-6 rounded-full mt-3" src="/favicon.ico" alt="Bonnie image" />
                    <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading text-white">Kausar Fatima</h5>
                    <span className="text-sm text-body text-white mb-3">Developer</span>
                </div>
                <div className="flex flex-col flex-1">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">

                        <a href="/dashboard" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Projects
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Logout
                        </a>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-18 bg-white border-b border-gray-200">
                    <div className="flex items-center px-4">
                        <label htmlFor="menu-toggle"
                            className="md:hidden mr-4 bg-gray-800 text-white p-2 rounded focus:outline-none cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none"
                                viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <span>
                            <h3 className="ml-8 text-2xl w-40 font-bold">View Projects</h3>
                        </span>
                    </div>
                    <HeaderButton isBug={false} />
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    </>;
}