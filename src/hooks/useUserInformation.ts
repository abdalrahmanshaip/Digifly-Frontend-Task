import { userSchema } from '@/schema'
import { useAddUserMutation } from '@/state/api/apiSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

export const useUserInformation = () => {
  const t = useTranslations('')
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
    },
  })
  const [addUser] = useAddUserMutation()
  const onSubmit = async (data: z.infer<typeof userSchema>) => {
    try {
      await addUser(data).unwrap()
      toast.success(t('messages.success'))
      form.reset()
    } catch (error) {
      console.error(error)
      toast.error(t('messages.error'))
    }
  }
  return { form, onSubmit }
}
