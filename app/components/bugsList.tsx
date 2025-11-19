"use client";

import HeaderButton from "./headerButton";

interface DialogProps {
    open: boolean;
    onClose: () => void;
}

export default function BugsList({ open, onClose }: DialogProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 bg-black/50">
            <div className="p-8 bg-white w-full max-w-md rounded-lg shadow-lg relative w-700">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &#x2715;
                </button>
                <div className="flex items-center justify-between h-18 bg-white border-b border-gray-200">
                    <div className="flex items-center px-4">
                        <span>
                            <h3 className="ml-8 text-2xl w-40 font-bold">View Bugs</h3>
                        </span>
                        <input className="ml-4 border rounded-md px-4 py-2" type="text" placeholder="Search" />
                        <button className="bg-gray-800 text-white p-2 rounded focus:outline-none cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button></div>
                    <HeaderButton isBug={true} />
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="table-auto w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Type</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Project</th>
                                <th className="px-4 py-2">Creator</th>
                                <th className="px-4 py-2">Developer</th>
                                <th className="px-4 py-2">Deadline</th>
                                <th className="px-4 py-2">Image Files</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">MacBook Pro 17"</td>
                                <td className="px-4 py-2">Silver</td>
                                <td className="px-4 py-2">Laptop</td>
                                <td className="px-4 py-2">$2999</td>
                                <td className="px-4 py-2">231</td>
                                <td className="px-4 py-2">Silver</td>
                                <td className="px-4 py-2">Laptop</td>
                                <td className="px-4 py-2">$2999</td>
                                <td className="px-4 py-2">231</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
