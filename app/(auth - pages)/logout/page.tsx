'use client';
import { useRouter } from "next/router";
import { useEffect } from "react";

const LogoutPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => router.push("/"), 2000);

    }, []);
    return <div> Cerraste sesión... redireccionando en un momento.</div>
};

export default LogoutPage;