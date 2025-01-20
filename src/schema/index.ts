import z from 'zod'

export const userSchema = z.object({
  firstname: z.string().min(1, {
    message: 'First name must be at least 1 characters.',
  }),
  lastname: z.string().min(1, {
    message: 'Last name must be at least 1 characters.',
  }),
  mobileNumber: z
    .string()
    .min(10, { message: 'Must be a valid mobile number' })
    .max(14, { message: 'Must be a valid mobile number' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('This is invalid email'),
})
