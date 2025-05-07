import FormSignUp from "./FormSignUp"
import { useState } from "react"
import { supabase } from "@/lib/supabase"


export default function SignUp() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSignUp = async () => {

        const { username, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {

            setErrorMsg('Las contraseñas no coinciden');
            return;
        }

        const { error } = await supabase.auth.signUp({

            email,
            password,
            options: {
                data : {
                    username,
                },
            },
        });

        if (error) {
            setErrorMsg(error.message);
        } else {
            setSuccessMsg(' Usuario creado con éxito, por favor verifica tu correo electrónico');
        }
    };
    
    return(
        <FormSignUp
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleSignUp={handleSignUp}
        />
    )
}