"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface DialogProps {
    open: boolean;
    onClose: () => void;
}
const ACCEPTED_IMAGE_TYPES = ["image/png", "image/gif"];
const MAX_FILE_SIZE = 500000;

const schema = z.object({
    title: z.string("Title can not be empty").min(3, { message: "Title must be at least 3 characters" }),
    desc: z.string().optional(),
    deadline: z.string().min(1, "Deadline must be selected"),
    screenShot: z
        .any()
        .refine((files) => files?.length == 1, "Image is required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            ".png and .gif files are accepted."
        ).optional(),
    type: z.string().min(1, "Type must be selected"),
    status: z.string().min(1, "Status must be selected"),
    creator: z.string().min(1, "Creator must be selected"),
    resolver: z.string().min(1, "Resolver must be selected"),
    project: z.string().min(1, "Resolver must be selected"),
});

type FormFields = z.infer<typeof schema>;
const BugDialogForm = ({ open, onClose }: DialogProps) => {
    const bug = useSelector((state: RootState) => state.bug);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
            console.log("Updated Redux bug state:", bug);
        }, [bug]);

    const onsubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
            dispatch(addBug({
                title: data.title,
                description: data.desc,
                deadline: data.deadline,
                image: data.screenShot,
                type: data.type,
                status: data.status,
                resolver: data.resolver,
                project: data.project,
                creator: data.creator
            }));
            onClose;
        } catch (error) {
            setError("root", {
                message: "Failed to load data",
            })
        }
    }
    const [selectedType, setSelectedType] = useState('');

    const handleChange = (event: { target: { value: any; }; }) => {
        setSelectedType(event.target.value);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-80 z-50">
            <div className="p-8 bg-white w-full max-w-md rounded-lg shadow-lg relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
                    &#x2715;
                </button>

                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="mt-6">
                        <label htmlFor="title" className="block text-sm font-medium leading-5 text-gray-700">
                            Enter Title
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input {...register("title")} type="text" placeholder="Title" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                        {errors.title && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.title.message}</span></p>
                        )}
                    </div>

                    <div className="mt-6">
                        <label htmlFor="title" className="block text-sm font-medium leading-5 text-gray-700">
                            Select Date
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input {...register("deadline")} type="date" placeholder="Title" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                        {errors.deadline && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.deadline.message}</span></p>
                        )}
                    </div>

                    <div className="mt-6">
                        <label htmlFor="title" className="block text-sm font-medium leading-5 text-gray-700">
                            Select File
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input {...register("screenShot")} type="file" placeholder="Title" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                        {errors.screenShot && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.screenShot.message as string}</span></p>
                        )}
                    </div>

                    <div className="mt-6">
                        <label htmlFor="type" className="block text-sm font-medium leading-5 text-gray-700" >
                            Select Type
                        </label>
                        <select {...register("type")} value={selectedType} onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <option value="">Select Type</option>
                            <option value="Bug">Bug</option>
                            <option value="Feature">Feature</option>
                        </select>
                        {errors.type && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.type.message}</span></p>
                        )}
                    </div>
                    <div className="mt-6">
                        <label htmlFor="type" className="block text-sm font-medium leading-5 text-gray-700">
                            Select Status
                        </label>
                        <select {...register("status")} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <option value="">Select Status</option>
                            <option value="New">New</option>
                            <option value="Started">Started</option>
                            <option value={selectedType === "Bug" ? "Resolved" : "Completed"}>{selectedType === "Bug" ? "Resolved" : "Completed"}</option>
                        </select>
                        {errors.type && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.type.message}</span></p>
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
                        <label htmlFor="type" className="block text-sm font-medium leading-5 text-gray-700">
                            Select Resolver
                        </label>
                        <select {...register("resolver")} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <option value="">Select Resolver</option>
                            <option value="option1">abc</option>
                            <option value="option2">xyz</option>
                            <option value="option3">123</option>
                        </select>
                        {errors.resolver && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.resolver.message}</span></p>
                        )}
                    </div>
                    <div className="mt-6">
                        <label htmlFor="project" className="block text-sm font-medium leading-5 text-gray-700">
                            Select Project
                        </label>
                        <select {...register("project")} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <option value="">Select Project</option>
                            <option value="option1">abc</option>
                            <option value="option2">xyz</option>
                            <option value="option3">123</option>
                        </select>
                        {errors.project && (
                            <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.project.message}</span></p>
                        )}
                    </div>
                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Add Bug
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BugDialogForm;