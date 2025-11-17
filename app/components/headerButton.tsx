'use client';

import React from 'react';
import BugDialogForm from './bugdialogform';
import ProjectDialogForm from './projectdialogform';

export default function HeaderButton() {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <div className="flex items-center px-4">
            <button  onClick={handleOpen} className="bg-gray-800 text-white p-2 rounded focus:outline-none cursor-pointer mx-6 px-4">
                + Add Bug
            </button>
            <BugDialogForm open={isOpen} onClose={handleClose} />
        </div>
    );
}