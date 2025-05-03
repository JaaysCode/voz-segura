import { z } from 'zod';

export const SignUpSchema = z
    .object({
        email: z
            .string()
            .email({ message: 'Invalid email address'})
            .max(100, { message: 'Email must be 100 characters or less'}),
        password: z
            .string()
            .min(8, {message: 'Password must be at least 8 characters long'})
            .max(100, { message: 'Password must be 100 characters or less'}),
        confirmPassword: z
            .string()
            .min(8, {message: 'Password must be at least 8 characters long'})
            .max(100, { message: 'Password must be 100 characters or less'})
    })

    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });
