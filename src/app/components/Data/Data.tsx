'use client';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import css from './Data.module.scss'
import Link from 'next/link';

const Data = () => {
  const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Za krótkie!").max(30, "Za długie!").required("Wymagane!"),
        surname: Yup.string().min(3, "Za krótkie!").max(30, "Za długie!").required("Wymagane!"),
        email: Yup.string().email().required("Wymagane!"),
        phone: Yup.number().min(9, "Za krótkie!").max(15, "Za długie!").required("Wymagane!"),
        street: Yup.string().min(3, "Za krótkie!").max(30, "Za długie!").required("Wymagane!"),
        index: Yup.string().min(6, "Za krótkie!").max(6, "Za długie!").required("Wymagane!"),
        city: Yup.string().min(3, "Za krótkie!").max(15, "Za długie!").required("Wymagane!"),
    })

    const initialValues = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        country: "Polska",
        street: "",
        index: "",
        city: ""
    };

    const handleSubmit = () => {
        // dispatch(addContact(values));
        // actions.resetForm();
    };


  return (
      <div className={css.form}>
          <h3 className={css['form-title']}>Dane rozliczeniowe</h3>
       <Formik
                initialValues={initialValues}
                validationSchema={Validator}
                onSubmit={handleSubmit}>
                <FormikForm>
                    <div className={css['form-label']}>
                        <label htmlFor="name" className='title-16'>Imię*</label>
                        <Field className={css['form-label-field']} type="text" name="name" ></Field>

                        <ErrorMessage name="name" component="span" />
                    </div>
                    <div className={css['form-label']}>
                        <label htmlFor="surname" className='title-16'>Nazwisko*</label>
                        <Field className={css['form-label-field']} type="text" name="surname" ></Field>

                        <ErrorMessage name="surname" component="span" />
                    </div>
                    <div className={css['form-label']}>
                        <label htmlFor="email" className='title-16'>Email*</label>
                        <Field className={css['form-label-field']} type="text" name="email"></Field>

                        <ErrorMessage name="email" component="span" />
                    </div>
                    <div className={css['form-label']}>
                        <label htmlFor="phone" className='title-16'>Numer telefonu*</label>
                        <Field className={css['form-label-field']} type="text" name="phone"></Field>

                        <ErrorMessage name="phone" component="span" />
                  </div>
                  <h3 className={css['form-title']}>Dane adresowe</h3>
                    <div className={css['form-label']}>
                        <label htmlFor="country" className='title-16'>Kraj*</label>
                        <Field className={css['form-label-comment']} type="text" name="country"></Field>

                        <ErrorMessage name="country" component="span" />
                  </div>
                  <div className={css['form-label']}>
                        <label htmlFor="street" className='title-16'>Ulica i nr domu*</label>
                        <Field className={css['form-label-comment']} type="text" name="street"></Field>

                        <ErrorMessage name="street" component="span" />
                  </div>
                  <div className={css['form-label']}>
                        <label htmlFor="index" className='title-16'>Kod pocztowy*</label>
                        <Field className={css['form-label-comment']} type="text" name="index"></Field>

                        <ErrorMessage name="index" component="span" />
                  </div>
                  <div className={css['form-label']}>
                        <label htmlFor="city" className='title-16'>Miasto*</label>
                        <Field className={css['form-label-comment']} type="text" name="city"></Field>

                        <ErrorMessage name="city" component="span" />
                  </div>
                    <div>
                        <input type="checkbox" />
                        <p>Dane do Faktury</p>
                  </div>
                    <div className={css['form-label']}>
                        <label htmlFor="comment" className='title-16'>Uwagi do zamówienia (ocjonalnie)</label>
                        <Field className={css['form-label-comment']} as="textarea" name="comment"></Field>

                        <ErrorMessage name="comment" component="span" />
                    </div>
                </FormikForm>
            </Formik>
    </div>
  )
}

export default Data
