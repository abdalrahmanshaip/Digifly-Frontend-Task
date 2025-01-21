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
import { useUserInformation } from '@/hooks/useUserInformation'
import { useTranslations } from 'next-intl'

const UserForm = () => {
  const t = useTranslations('form')
  const { form, onSubmit } = useUserInformation()

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
              name='FirstName'
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
                      aria-invalid={!!form.formState.errors.FirstName}
                      aria-describedby='firstname-error'
                    />
                  </FormControl>
                  <FormMessage id='firstname-error'>
                    {form.formState.errors.FirstName?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='LastName'
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
                      aria-invalid={!!form.formState.errors.LastName}
                      aria-describedby='lastname-error'
                    />
                  </FormControl>
                  <FormMessage id='lastname-error'>
                    {form.formState.errors.LastName?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='Phone'
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
                    aria-invalid={!!form.formState.errors.Phone}
                    aria-describedby='mobileNumber-error'
                  />
                </FormControl>
                <FormMessage id='mobileNumber-error'>
                  {form.formState.errors.Phone?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='Email'
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
                    aria-invalid={!!form.formState.errors.Email}
                    aria-describedby='email-error'
                  />
                </FormControl>
                <FormMessage id='email-error'>
                  {form.formState.errors.Email?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='w-full py-2.5'
            aria-label={t('button.send')}
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <div className='flex gap-3'>
                {t('button.sending')}
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
              </div>
            ) : (
              t('button.send')
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default UserForm
