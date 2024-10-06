import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Heading from '../../Components/Heading/Heading';
import Swal from 'sweetalert2';

export default function Contact() {
    const [t] = useTranslation();
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();

    const onSubmit = (data) => {
        console.log(data);
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(
                () => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: t('Contact.alert-text'),
                        showConfirmButton: false,
                        timer: 1500
                    });

                    reset()
                },
                (error) => {
                    console.error('Email Sending Failed', error);
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: 'Email Sending Failed',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            );
    };

    return (
        <div className='px-4 md:px-14 lg:px-24 my-4 md:my-12 animate-fadeIn'>
            <div className='text-center'>
                <Heading title={t('Contact.title')} />
            </div>
            <p className='text-center py-6 text-base md:text-xl dark:text-white mt-4'>
                {t('Contact.description')} <br />{t('Contact.send-email')}
            </p>

            {/* Contact Form */}
            <div className='flex justify-center items-center'>
                <form ref={form} className='my-10 w-full max-w-lg bg-white dark:bg-gray-800 p-12 rounded-lg shadow-md' onSubmit={handleSubmit(onSubmit)}>
                    {/* Hidden field for to_name */}
                    <input
                        type="hidden"
                        name="to_name"  // This will send the recipient's name
                        value="Tahmina"
                    />

                    {/* Other form fields (name, email, message) */}
                    {/* Name */}
                    <div className='mb-6'>
                        <label htmlFor='firstName' className='block text-lg font-semibold mb-2 dark:text-gray-200'>
                            {t('Contact.name')}
                        </label>
                        <input
                            required
                            id='firstName'
                            name="from_name"  // Correctly mapped to match EmailJS template
                            className='w-full border-b-2 py-3 px-4 bg-transparent focus:outline-none focus:border-blue-500 transition duration-300 dark:text-white'
                            type='text'
                            placeholder={t('Contact.name')}
                            {...register("from_name")}
                        />
                    </div>

                    {/* Email */}
                    <div className='mb-6'>
                        <label htmlFor='email' className='block text-lg font-semibold mb-2 dark:text-gray-200'>
                            {t('Contact.email')}
                        </label>
                        <input
                            required
                            id='email'
                            name="from_email"  // Correctly mapped to match EmailJS template
                            className='w-full border-b-2 py-3 px-4 bg-transparent focus:outline-none focus:border-blue-500 transition duration-300 dark:text-white'
                            type='email'
                            placeholder='email@example.com'
                            {...register("from_email")}
                        />
                    </div>

                    {/* Message */}
                    <div className='mb-6'>
                        <label htmlFor='message' className='block text-lg font-semibold mb-2 dark:text-gray-200'>
                            {t('Contact.message')}
                        </label>
                        <textarea
                            required
                            id='message'
                            name="message"  // Correctly mapped to match EmailJS template
                            className='w-full border-b-2 py-3 px-4 bg-transparent focus:outline-none focus:border-blue-500 transition duration-300 dark:text-white'
                            placeholder={t('Contact.placeholder-message')}
                            rows='5'
                            {...register("message")}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='mt-4 w-full bg-baseColor text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 shadow-md'
                    >
                        {t('Contact.send-btn')}
                    </button>
                </form>


            </div>
        </div>
    );
}


// service_hivif29
// template_1pvusql
// yDE9nqaxUAQluqg5Q