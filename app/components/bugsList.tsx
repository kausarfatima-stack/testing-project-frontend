"use client";

interface DialogProps {
    open: boolean;
    onClose: () => void;
}

export default function BugsList({ open, onClose }: DialogProps) {
    if (!open) return null;   // <-- IMPORTANT

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 bg-black/50">
            <div className="p-8 bg-white w-full max-w-md rounded-lg shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &#x2715;
                </button>

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="table-auto w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2">Product</th>
                                <th className="px-4 py-2">Color</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">MacBook Pro 17"</td>
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
