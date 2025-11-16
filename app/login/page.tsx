'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from 'next/navigation';

const schema = z.object({
    email: z.string().email(),
    password: z.string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
});

type FormFields = z.infer<typeof schema>;

const Login = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });
    const router = useRouter();

    const onsubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
            router.push('/dashboard');
        } catch (error) {
            setError("root", {
                message: "This email is already in use",
            })
        }
    }

    return (
        <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-2xl leading-9 font-extrabold text-gray-900">
                    Login to your account 
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                  OR &nbsp;
                    <a href="/signup"
                        className="font-medium text-center text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                         Create a new account
                    </a>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="mt-6">
                            <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                                Email address 
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input {...register("email")} type="text" placeholder="Email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                               
                            </div>
                             {errors.email && (
                                    <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.email.message}</span></p>
                                )}
                        </div>
                        <div className="mt-6">
                            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input {...register("password")} type="password" placeholder="Password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                            </div>
                              {errors.password && (
                                    <p className="mt-2.5 text-sm text-red-500"><span className="font-medium">{errors.password.message}</span></p>
                                )}
                        </div>
                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Login
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;