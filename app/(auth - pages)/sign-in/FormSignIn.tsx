'use client';

import Logo from "@/components/navbar/Logo";
import { login } from "@/lib/auth-action";
import { useRouter } from "next/navigation";
import SignInWithGoogleButton from "./components/SignInWithGoogleButton";
import React from "react";

interface FormSignInProps {
    email: string;
    setEmail: (email: string) => void; 
    password: string;   
    setPassword: (password: string) => void;
    handleSignIn: () =>Promise<void>;
}

export default function FormSignIn({
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,

}: FormSignInProps) {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSignIn();
    };
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
            <form onSubmit={handleSubmit} className="space-y-4 text-white">
              
                <input
                    type="email"
                    name = "email"
                    placeholder="Email"
                    className="w-full p-3 rounded bg-white placeholder-gray-500 border border-black focus:outline-none focus:border-2 focus:border-purple-400"
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name = "password"
                    placeholder="Password"
                    className="w-full p-3 rounded bg-white placeholder-gray-500 border border-black focus:outline-none focus:border-2 focus:border-purple-400"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                />  
                
                <button 
                    type="submit"
                    className="w-full text-white py-3 rounded transition bg-[#7A0A9A] hover:bg-[#9B2DCA] focus:outline-none focus:border-2 focus:border-purple-400">
                    Iniciar Sesión
                </button>
                
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                    </div>
                </div>
                <SignInWithGoogleButton/>
            </form>
            <p className="text-center text-sm text-black mt-4">
                Don't have an account? <a href="/sign-up" className="text-purple-500 hover:underline">Sign Up</a>
            </p>
        </div>
    </div>
  )
}