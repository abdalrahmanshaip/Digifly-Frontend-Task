'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { userSchema } from '@/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
const UserForm = () => {
  const t = useTranslations('form')
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      mobileNumber: '',
      email: '',
    },
  })

  const onSubmit = (value: z.infer<typeof userSchema>) => {
    console.log(value)
  }
  return (
    <div className='w-full'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='lg:space-y-8 space-y-6'
        >
          <div className='flex flex-col lg:flex-row  gap-8 '>
            <FormField
              control={form.control}
              name='firstname'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel className='font-medium text-sm text-our-dark'>
                    {t('firstName')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('firstName')}
                      {...field}
                      className='bg-white lg:py-6 py-5 ps-6 rounded-[2px] '
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastname'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel className='font-medium text-sm text-our-dark'>
                    {t('lastName')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('lastName')}
                      {...field}
                      className='bg-white lg:py-6 py-5 ps-6 rounded-[2px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='mobileNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-medium text-sm text-our-dark'>
                  {t('mobileNumber')}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('mobileNumber')}
                    {...field}
                    className='bg-white lg:py-6 py-5 ps-6 rounded-[2px]'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-medium text-sm text-our-dark'>
                  {t('email')}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('email')}
                    {...field}
                    className='bg-white lg:py-6 py-5 ps-6 rounded-[2px]'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='w-full  py-2.5 '
          >
            {t('button')}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default UserForm
