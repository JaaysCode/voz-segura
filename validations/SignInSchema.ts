import { z } from 'zod';

export const SignInSchema = z.object({
    email: z
        .string()
        .email({message: 'Invalid email address'})
        .max(100, { message: 'Email must be 100 characters or less'}),
    password: z
        .string()
        .min(8, {message: 'Password must be at least 8 characters long'})
        .max(100, { message: 'Password must be 100 characters or less'}),
});