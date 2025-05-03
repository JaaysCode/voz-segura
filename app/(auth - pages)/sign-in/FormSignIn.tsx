'use client';

import Logo from "@/components/navbar/Logo";
import { useRouter } from "next/navigation";

export default function FormSignIn() {
    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('/sign-up');
  };

  return(
    <div className = "min-h-screen bg-[#f2caff] flex flex-col justify-center items-center px-4">
        <div className="rounded-lg p-8 w-full max-w-md shadow-md bg-[#ffff]">
            <div className="flex justify-center mb-6">
                <Logo/>
            </div>
            <div className="flex justify-center mb-6 text-black">
                <button className="px-4 font-semibold border-b-2 border-purple-400 transition">
                    Sign In
                </button>
                <button 
                    className="px-4 font-semibold border-b-2 border-transparent hover:border-purple-400 transition"
                    onClick={handleSignUpClick}
                >
                    Sign Up
                </button>
            </div>
            <form className="space-y-4 text-white">
              
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
                
                <button className="w-full text-white py-3 rounded transition bg-[#7A0A9A] hover:bg-[#9B2DCA] focus:outline-none focus:border-2 focus:border-purple-400">
                    Sign In
                </button>
                
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                    </div>
                </div>
                
                <button 
                    type="button"
                    className="w-full flex justify-center items-center gap-2 bg-white text-black border border-gray-300 py-3 rounded transition hover:bg-gray-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                    </svg>
                    Continue with Google
                </button>
            </form>
            <p className="text-center text-sm text-black mt-4">
                Don't have an account? <a href="/sign-up" className="text-purple-500 hover:underline">Sign Up</a>
            </p>
        </div>
    </div>
  )
}