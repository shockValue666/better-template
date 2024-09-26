import { z } from "zod"

export type LoginProps = {
    email: string
    password: string
}

export const LoginZodTypes = z.object({
    email: z.string().email({ message: "Invalid email" }).trim(),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters" })
        .max(64, { message: "Password must be at most 64 characters" })
        .refine((value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''), "password should contain only alphabets and numbers"),
})