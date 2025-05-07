import FormSignIn from "./FormSignIn";
import {useState} from "react";
import { supabase } from "@/lib/supabase";


export default function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async () => {
        const {error} = await supabase.auth.signInWithPassword({email, password});
        if (error) console.log('Error al iniciar sesion', error.message);
    };
    return(
        <FormSignIn
            email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            handleSignIn = {handleSignIn}

        />
    );
}