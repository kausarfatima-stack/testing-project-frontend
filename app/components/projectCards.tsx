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
        className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
        
        <div className="flex-1">
            <h5 className="mb-3 text-xl font-bold lg:text-2xl">Project Name</h5>
            <p className="mb-6 text-lg text-gray-600">Here is description for Project</p>
            <div className="grid grid-flow-col grid-rows-4 gap-4">
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
        className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
        
        <div className="flex-1">
            <h5 className="mb-3 text-xl font-bold lg:text-2xl">Project Name</h5>
            <p className="mb-6 text-lg text-gray-600">Here is description for Project</p>
            <div className="grid grid-flow-col grid-rows-4 gap-4">
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">CreatedBy</p>
                    <p className="text-lg font-bold">Fatima</p>
                </div>
                
            </div>
        </div>
    </div>
    <div
        className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
        
        <div className="flex-1">
            <h5 className="mb-3 text-xl font-bold lg:text-2xl">Project Name</h5>
            <p className="mb-6 text-lg text-gray-600">Here is description for Project</p>
            <div className="grid grid-flow-col grid-rows-4 gap-4">
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">CreatedBy</p>
                    <p className="text-lg font-bold">Fatima</p>
                </div>
                
            </div>
        </div>
    </div>
</div>
<BugsList open={isOpen} onClose={handleClose}/>
    </>
}