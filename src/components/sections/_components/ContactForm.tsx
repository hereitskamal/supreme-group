'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

// Type definitions
interface ContactFormProps {
  isPurposeField?: boolean;
  formTitle?: string;
}

// Form validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required.')
    .max(30, 'Name cannot be more than 30 characters.'),
  email: z
    .string()
    .email('Invalid email address.')
    .min(1, 'Email is required.'),
  company: z.string().min(2, 'Company is required.'),
  message: z.string().optional(),
});

export type FormFieldSchema = z.infer<typeof formSchema>;

const ContactForm: React.FC<ContactFormProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFieldSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFieldSchema> = async (data) => {
    setIsLoading(true);
    
    try {
      if (!formRef.current) {
        throw new Error('Form reference not found');
      }

      // EmailJS configuration - replace with your actual values
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_q18i4pc',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_dj61ejg',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '_lu9sv7Uji6IgL1EQ'
      );

      reset();
      toast.success('Form submitted successfully!', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to submit the form. Please try again.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full">
      <ToastContainer
        position="bottom-center"
        theme="dark"
        toastClassName="!bg-gray-800 !text-white !shadow-lg !rounded-lg"
        className="text-sm !px-5 font-medium"
        progressClassName="!bg-blue-500 !h-1"
      />

      <div>
        <form
          noValidate
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-full grid gap-4 2xl:gap-9"
        >
          <div className="relative">
            <input
              className={`text-white  placeholder:text-white transition-all duration-300 ease-in-out border-b-2 border-solid py-2 px-0 w-full text-base lg:text-lg font-[400] bg-transparent outline-none focus-visible:outline-none focus-visible:placeholder:text-white/90 ${
                errors.name 
                  ? 'border-red-500 focus-visible:border-red-500' 
                  : 'border-white/50 hover:border-white focus-visible:border-white'
              }`}
              id="name"
              type="text"
              placeholder="Full name"
              autoComplete="name"
              {...register('name')}
            />
            {errors.name && (
              <span className="absolute top-full left-0 text-red-400 font-medium text-xs 2xl:text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              className={`text-white  placeholder:text-white transition-all duration-300 ease-in-out border-b-2 border-solid py-2 px-0 w-full text-base lg:text-lg font-[400] bg-transparent outline-none focus-visible:outline-none focus-visible:placeholder:text-white/90 ${
                errors.email 
                  ? 'border-red-500 focus-visible:border-red-500' 
                  : 'border-white/50 hover:border-white focus-visible:border-white'
              }`}
              id="email"
              type="email"
              inputMode="email"
              placeholder="Email"
              autoComplete="email"
              {...register('email')}
            />
            {errors.email && (
              <span className="absolute top-full left-0 text-red-400 font-medium text-xs 2xl:text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              className={`text-white  placeholder:text-white transition-all duration-300 ease-in-out border-b-2 border-solid py-2 px-0 w-full text-base lg:text-lg font-[400] bg-transparent outline-none focus-visible:outline-none focus-visible:placeholder:text-white/90 ${
                errors.company 
                  ? 'border-red-500 focus-visible:border-red-500' 
                  : 'border-white/50 hover:border-white focus-visible:border-white'
              }`}
              type="text"
              id="company"
              inputMode="text"
              placeholder="Company"
              autoComplete="organization"
              {...register('company')}
            />
            {errors.company && (
              <span className="absolute top-full left-0 text-red-400 font-medium text-xs 2xl:text-sm mt-1">
                {errors.company.message}
              </span>
            )}
          </div>

          <div className="relative">
            <textarea
              rows={3}
              id="message"
              className="text-white  placeholder:text-white transition-all duration-300 ease-in-out border-b-2 border-solid py-2 px-0 w-full text-base lg:text-lg font-[400] bg-transparent outline-none focus-visible:outline-none resize-none border-white/50 hover:border-white focus-visible:border-white focus-visible:placeholder:text-white/90"
              placeholder="Message"
              {...register('message')}
            />
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              disabled={isLoading}
              type="submit"
              className="group max-w-46 relative overflow-hidden flex items-center justify-center gap-1 w-full disabled:opacity-70 disabled:cursor-not-allowed bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black hover:bg-white focus:bg-white text-white font-semibold border border-white hover:border-transparent focus:border-transparent text-sm lg:text-base px-8 md:px-12 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={isLoading ? 'Submitting form' : 'Submit contact form'}
            >
              {isLoading ? 'Loading...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
