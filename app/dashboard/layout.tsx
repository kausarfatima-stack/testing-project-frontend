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
                        <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Bugs
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Projects
                        </a>
                         <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            Logout
                        </a>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
			<div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
				<div className="flex items-center px-4">
					<label htmlFor="menu-toggle"
						className="md:hidden mr-4 bg-gray-800 text-white p-2 rounded focus:outline-none cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none"
							viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</label>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
					</svg>					  
					<input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search"/>
				</div>
			</div>
			<div className="p-4">
                {children}
			</div>
		</div>
        </div>
    </>;
}