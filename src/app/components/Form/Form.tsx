'use client';

import * as Yup from 'yup';
import { Formik, Form as FormikForm, Field, ErrorMessage, FormikHelpers } from "formik";

import css from './Form.module.scss';
import Link from 'next/link';
import toast from 'react-hot-toast';

const Form = () => {

    const Validator = Yup.object({
        name: Yup.string()
            .trim()
            .matches(
            /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ\s-]+$/,
            'Dozwolone są tylko litery'
            )
            .min(3, 'Minimum 3 znaki')
            .max(50, 'Maksimum 50 znaków')
            .required('Imię i nazwisko jest wymagane'),

        email: Yup.string()
            .trim()
            .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            'Nieprawidłowy adres email'
            )
            .required('Email jest wymagany'),

        phone: Yup.string()
            .trim()
            .matches(
            /^(\+?\d{1,3})?\s?\d{9,12}$/,
            'Nieprawidłowy numer telefonu'
            )
            .required('Numer telefonu jest wymagany'),

        comment: Yup.string()
            .trim()
            .min(10, 'Wiadomość musi mieć min. 10 znaków')
            .max(500, 'Maksimum 500 znaków')
            .required('Wiadomość jest wymagana'),

        privacy: Yup.boolean()
            .required('Wymagana zgoda'),
        });


    const initialValues = {
        name: "",
        email: "",
        phone: "",
        comment: "",
        privacy: false,
    };

    interface FormValues {
        name: string;
        email: string;
        phone: string;
        comment: string;
        privacy: boolean;
    }

    const handleSubmit = async (
        values: FormValues,
        { resetForm, setSubmitting }: FormikHelpers<FormValues>
        ) => {
        try {
            const res = await fetch('https://slodki-prezent-db.onrender.com/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
            throw new Error(data.message || 'Błąd wysyłki wiadomości');
            }

            toast.success('Wiadomość została wysłana ✉️');
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error(
            error instanceof Error
                ? error.message
                : 'Nie udało się wysłać wiadomości'
            );
        } finally {
            setSubmitting(false);
        }
    };


  return (
      <div className={css.form}>
          <h3 className={css['form-title']}>Napisz do nas</h3>
       <Formik
                initialValues={initialValues}
                validationSchema={Validator}
              onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <FormikForm>
                  <div className={css['form-label']}>
                      <label htmlFor="name" className='title-18'>Imię i nazwisko</label>
                        <Field className={css['form-label-field']} type="text" name="name" ></Field>

                        <ErrorMessage name="name" component="span" />
                    </div>
                    <div className={css['form-label']}>
                        <label htmlFor="email" className='title-18'>Email</label>
                        <Field className={css['form-label-field']} type="text" name="email"></Field>

                        <ErrorMessage name="email" component="span" />
                    </div>
                    <div className={css['form-label']}>
                        <label htmlFor="phone" className='title-18'>Numer telefonu</label>
                        <Field className={css['form-label-field']} type="text" name="phone"></Field>

                        <ErrorMessage name="phone" component="span" />
                    </div>
                    <div className={css['form-label']}>
                        <label htmlFor="comment" className='title-18'>Wiadomość</label>
                        <Field className={css['form-label-comment']} as="textarea" name="comment"></Field>

                        <ErrorMessage name="comment" component="span" />
                  </div>
                   <div className={css['form-bottom']}>
                        <input className="visually-hidden" type="checkbox" id="privacy" name="privacy" value="true"
                            required />
                      <label htmlFor="privacy" className={css["form-bottom-check"]}>
                            <span className={css["form-bottom-check-span"]}>
                                <svg width="16" height="16" className={css['form-bottom-check-span-icon']}>
                                    <use href="/icons.svg#icon-check"></use>
                                </svg>
                            </span>
                            
                            <span className={css['form-bottom-check-text']}>Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z <Link className={css['form-bottom-check-text-privacy']} href='/privacy'>polityką prywatności</Link>
                            </span>
                      </label>
                      <ErrorMessage name="privacy" component="span" />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={css['form-btn']}
                        >
                        {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                    </button>

                </FormikForm>)}
            </Formik>
    </div>
  )
}

export default Form
