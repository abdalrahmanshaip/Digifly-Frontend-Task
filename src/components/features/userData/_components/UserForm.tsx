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
          aria-labelledby='form-title'
        >
          <h1
            id='form-title'
            className='sr-only'
          >
            User form
          </h1>
          <div className='flex flex-col lg:flex-row gap-8'>
            <FormField
              control={form.control}
              name='firstname'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel
                    className='font-medium text-sm text-our-dark'
                    htmlFor='firstname'
                  >
                    {t('firstName')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      id='firstname'
                      placeholder={t('firstName')}
                      {...field}
                      className='bg-white lg:py-6 py-5 ps-6 rounded-[2px]'
                      aria-invalid={!!form.formState.errors.firstname}
                      aria-describedby='firstname-error'
                    />
                  </FormControl>
                  <FormMessage id='firstname-error'>
                    {form.formState.errors.firstname?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastname'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel
                    className='font-medium text-sm text-our-dark'
                    htmlFor='lastname'
                  >
                    {t('lastName')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      id='lastname'
                      placeholder={t('lastName')}
                      {...field}
                      className='bg-white lg:py-6 py-5 ps-6 rounded-[2px]'
                      aria-invalid={!!form.formState.errors.lastname}
                      aria-describedby='lastname-error'
                    />
                  </FormControl>
                  <FormMessage id='lastname-error'>
                    {form.formState.errors.lastname?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='mobileNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className='font-medium text-sm text-our-dark'
                  htmlFor='mobileNumber'
                >
                  {t('mobileNumber')}
                </FormLabel>
                <FormControl>
                  <Input
                    id='mobileNumber'
                    placeholder={t('mobileNumber')}
                    {...field}
                    className='bg-white lg:py-6 py-5 ps-6 rounded-[2px]'
                    aria-invalid={!!form.formState.errors.mobileNumber}
                    aria-describedby='mobileNumber-error'
                  />
                </FormControl>
                <FormMessage id='mobileNumber-error'>
                  {form.formState.errors.mobileNumber?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className='font-medium text-sm text-our-dark'
                  htmlFor='email'
                >
                  {t('email')}
                </FormLabel>
                <FormControl>
                  <Input
                    id='email'
                    placeholder={t('email')}
                    {...field}
                    className='bg-white lg:py-6 py-5 ps-6 rounded-[2px]'
                    aria-invalid={!!form.formState.errors.email}
                    aria-describedby='email-error'
                  />
                </FormControl>
                <FormMessage id='email-error'>
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='w-full py-2.5'
            aria-label={t('button')}
          >
            {t('button')}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default UserForm
