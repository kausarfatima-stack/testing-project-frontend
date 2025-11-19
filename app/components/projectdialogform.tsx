"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createProject, fetchProjectsByUserEmail } from "../redux/projectSlice";
import { RootState, useAppDispatch } from "../redux/store";

import { z } from "zod";
import { useEffect } from "react";

interface DialogProps {
    open: boolean;
    onClose: () => void;
}

const schema = z.object({
    name: z.string("Name can not be empty").min(3, { message: "Name must be at least 3 characters" }),
    desc: z.string("Description can not be empty").min(5, { message: "Description must be at least 5 characters" }),
    creator: z.string().min(1, "Creator must be selected"),
});

type FormFields = z.infer<typeof schema>;
const ProjectDialogForm = ({ open, onClose }: DialogProps) => {
    const project = useSelector((state: RootState) => state.project);
    const { currentUser } = useSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        console.log("Updated Redux project state:", project);
    }, [project]);


    const onsubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            console.log(data);
            await dispatch(createProject({
                name: data.name,
                description: data.desc,
                creatorEmail: currentUser!.email
            }));
            onClose;
        } catch (error) {
            setError("root", {
                message: "Failed to load data",
            })
        }
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 z-50 bg-black/50">
            <div className="p-8 bg-white w-full max-w-md rounded-lg shadow-lg relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
                    &#x2715;
                </button>

                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="mt-6">
                        <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                            Enter Name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input {...register("name")} type="text" placeholder="Title" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                        {errors.name && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.name.message}</span></p>
                        )}
                    </div>
                    <div className="mt-6">
                        <label htmlFor="type" className="block text-sm font-medium leading-5 text-gray-700">
                            Select Creator
                        </label>
                        <select {...register("creator")} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <option value="">Select Creator</option>
                            <option value="option1">abc</option>
                            <option value="option2">xyz</option>
                            <option value="option3">123</option>
                        </select>
                        {errors.creator && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.creator.message}</span></p>
                        )}
                    </div>
                    <div className="mt-6">
                        <label htmlFor="desc" className="block text-sm font-medium leading-5 text-gray-700">
                            Enter Description
                        </label>
                        <textarea {...register("desc")} rows={4} placeholder="Here is desc..." className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        </textarea>
                        {errors.desc && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.desc.message}</span></p>
                        )}
                    </div>
                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Add Project
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectDialogForm;