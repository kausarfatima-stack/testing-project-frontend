"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

interface DialogProps {
    open: boolean;
    onClose: () => void;
}
const schema = z.object({
    Title: z.string("Title can not be empty").min(3, { message: "Title must be at least 3 characters" }),
    desc: z.string().optional(),
    password: z.string()
        .min(8, { message: "Password is too short" })
        .max(20, { message: "Password is too long" }),
    confirmPassword: z.string("Passwords do not match"),
    role: z.string("Role must be selected"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type FormFields = z.infer<typeof schema>;
const DialogForm = ({open, onClose}: DialogProps)  => {
  if(!open) return null;

  return (
    <div className="dialog-overlay">
        <div className="dialog-content">
           
        </div>
    </div>
  );
}

export default DialogForm;