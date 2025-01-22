import z from 'zod'

export const userSchema = z.object({
  FirstName: z.string().min(1, {
    message: 'First name must be at least 1 characters.',
  }),
  LastName: z.string().min(1, {
    message: 'Last name must be at least 1 characters.',
  }),
  Phone: z
    .string()
    .min(10, { message: 'Must be a valid mobile number' })
    .max(14, { message: 'Must be a valid mobile number' }),
  Email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('This is invalid email'),
})
