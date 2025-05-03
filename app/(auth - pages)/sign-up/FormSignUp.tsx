 'use client';

import Logo from "@/components/navbar/Logo";
import { useRouter } from "next/navigation";

export default function FormSignUp() {
    const router = useRouter();

    const handleSignInClick = () => {
        router.push('/sign-in');
    }

  return(
    <div className = "min-h-screen bg-[#f2caff] flex flex-col justify-center items-center px-4">
        <div className="rounded-lg p-8 w-full max-w-md shadow-md bg-[#ffff]">
            <div className="flex justify-center mb-6">
                <Logo/>
            </div>
            <div className="flex justify-center mb-6 text-black">
                <button 
                    className="px-4 font-semibold border-b-2 border-transparent hover:border-purple-400 transition"
                    onClick={handleSignInClick}
                >
                    Sign In
                </button>
                <button className="px-4 font-semibold border-b-2 border-purple-400 transition">
                    Sign Up
                </button>
            </div>
            <form className="space-y-4 text-white">
                <input
                    type="text"
                    name = "username"
                    placeholder="Username"
                    className="w-full p-3 rounded bg-white placeholder-gray-500  border border-black focus:outline-none focus:border-2 focus:border-purple-400"
                />
                <input
                    type="email"
                    name = "email"
                    placeholder="Email"
                    className="w-full p-3 rounded bg-white placeholder-gray-500 border border-black focus:outline-none focus:border-2 focus:border-purple-400"
                />
                <input
                    type="password"
                    name = "password"
                    placeholder="Password"
                    className="w-full p-3 rounded bg-white placeholder-gray-500 border border-black focus:outline-none focus:border-2 focus:border-purple-400"
                />  
                <input
                    type="password"
                    name = "confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full p-3 rounded bg-white placeholder-gray-500 border border-black focus:outline-none focus:border-2 focus:border-purple-400"
                />
                <button className="w-full text-white py-3 rounded transition bg-[#7A0A9A] hover:bg-[#9B2DCA] focus:outline-none focus:border-2 focus:border-purple-400">
                    Sign Up
                </button>
            </form>
            <p className="text-center text-sm text-black mt-4">
                Already have an account? <a href="#" className="text-purple-500 hover:underline">Sign In</a>
            </p>
        </div>
    </div>
  )
}