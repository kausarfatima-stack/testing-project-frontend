'use client';
import React from "react";
import BugsList from "./bugsList";

export default function ProjectCards() {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    return <>
        <div className="grid gap-8 xl:grid-cols-3 sm:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-4">
            <div
                className="flex flex-col transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl p-6 flex-row space-y-0 space-x-6">
                <div className="flex-1">
                    <h5 className="mb-3 text-xl font-bold lg:text-2xl">Project Name</h5>
                    <p className="mb-6 text-lg text-gray-600">Here is description for Project</p>
                    <div className="grid gap-2">
                        <div className="flex justify-between mr-6">
                            <p className="text-gray-600">CreatedBy</p>
                            <p className="text-lg font-bold">Fatima</p>
                        </div>
                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" onClick={handleOpen}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    View Bugs
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl p-6 flex-row space-y-0 space-x-6">

                <div className="flex-1">
                    <h5 className="mb-3 text-xl font-bold lg:text-2xl">Project Name</h5>
                    <p className="mb-6 text-lg text-gray-600">Here is description for Project</p>
                    <div className="grid gap-2">
                        <div className="flex justify-between mr-6">
                            <p className="text-gray-600">CreatedBy</p>
                            <p className="text-lg font-bold">Fatima</p>
                        </div>
                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" onClick={handleOpen}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    View Bugs
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl p-6 flex-row space-y-0 space-x-6">
                <div className="flex-1">
                    <h5 className="mb-3 text-xl font-bold lg:text-2xl">Project Name</h5>
                    <p className="mb-6 text-lg text-gray-600">Here is description for Project</p>
                    <div className="grid gap-2">
                        <div className="flex justify-between mr-6">
                            <p className="text-gray-600">CreatedBy</p>
                            <p className="text-lg font-bold">Fatima</p>
                        </div>
                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" onClick={handleOpen}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    View Bugs
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            isOpen && <div className="[&_div.max-w-md]:max-w-3/4">
                <BugsList open={isOpen} onClose={handleClose} />
            </div>
        }
    </>
}