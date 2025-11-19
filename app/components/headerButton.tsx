'use client';

import React from 'react';
import ProjectDialogForm from './projectdialogform';
import BugDialogForm from './bugdialogform';

interface HeaderButtonProps {
    isBug: boolean;
}

export default function HeaderButton({ isBug }: HeaderButtonProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    }
    
    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <div className="flex items-center px-4">
            <button onClick={handleOpen} className="bg-gray-800 text-white p-2 rounded focus:outline-none cursor-pointer mx-6 px-4">
                {isBug ? "+ Add Bug" : "+ Add Project"}
            </button>
            {isBug ? <div className="[&_div.max-w-md]:max-w-md"><BugDialogForm open={isOpen} onClose={handleClose} /></div> : <ProjectDialogForm open={isOpen} onClose={handleClose} />}
        </div>
    );
}