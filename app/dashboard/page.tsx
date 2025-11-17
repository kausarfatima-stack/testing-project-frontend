import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function DashboardPage() {
        const bugs = useSelector((state: RootState) => state.bug);

    return <>
    <div className="grid gap-8 xl:grid-cols-3 sm:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-4">
    <div
        className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div
            className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                </path>
            </svg>
        </div>
        <div className="flex-1">
            <h5 className="mb-3 text-xl font-bold lg:text-2xl">Bug Title</h5>
            <p className="mb-6 text-lg text-gray-600">Here is description for bug</p>
            <div className="grid grid-flow-col grid-rows-4 gap-4">
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">Status</p>
                    <p className="text-lg font-bold">Completed</p>
                </div>
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">type</p>
                    <p className="text-lg font-bold">Feature</p>
                </div>
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">Creator</p>
                    <p className="text-lg font-bold">Kausar</p>
                </div>
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">Resolver</p>
                    <p className="text-lg font-bold">Fatima</p>
                </div>
            </div>
        </div>
    </div>
    <div
        className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div
            className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                </path>
            </svg>
        </div>
        <div className="flex-1">
            <h5 className="mb-3 text-xl font-bold lg:text-2xl">Bug Title</h5>
            <p className="mb-6 text-lg text-gray-600">Here is description for bug</p>
            <div className="grid grid-flow-col grid-rows-4 gap-4">
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">Status</p>
                    <p className="text-lg font-bold">Completed</p>
                </div>
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">type</p>
                    <p className="text-lg font-bold">Feature</p>
                </div>
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">Creator</p>
                    <p className="text-lg font-bold">Kausar</p>
                </div>
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">Resolver</p>
                    <p className="text-lg font-bold">Fatima</p>
                </div>
            </div>
        </div>
    </div>
    <div
        className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div
            className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                </path>
            </svg>
        </div>
        <div className="flex-1">
            <h5 className="mb-3 text-xl font-bold lg:text-2xl">Bug Title</h5>
            <p className="mb-6 text-lg text-gray-600">Here is description for bug</p>
            <div className="grid grid-flow-col grid-rows-4 gap-4">
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">Status</p>
                    <p className="text-lg font-bold">Completed</p>
                </div>
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">type</p>
                    <p className="text-lg font-bold">Feature</p>
                </div>
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">Creator</p>
                    <p className="text-lg font-bold">Kausar</p>
                </div>
                <div className="flex justify-between mr-6">
                    <p className="text-gray-600">Resolver</p>
                    <p className="text-lg font-bold">Fatima</p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
}