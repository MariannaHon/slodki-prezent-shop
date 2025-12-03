'use client';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import css from './Form.module.scss';
import Link from 'next/link';

const Form = () => {

    const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(30, "Too Long!").required("Required!"),
        email: Yup.string().email().required("Required!"),
        phone: Yup.number().min(9, "Too Short!").max(15, "Too Long!").required("Required!"),
        comment: Yup.string(),
    })

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        comment: "",
    };

    const handleSubmit = () => {
        // dispatch(addContact(values));
        // actions.resetForm();
    };


  return (
    <div>
       <Formik
                initialValues={initialValues}
                validationSchema={Validator}
                onSubmit={handleSubmit}>
                <FormikForm className={css.form}>
                  <div className={css.label}>
                      <label htmlFor="name" className={css.labelText}>Imię i nazwisko</label>
                        <Field className={css.field} type="text" name="name" ></Field>

                        <ErrorMessage className={css.error} name="name" component="span" />
                    </div>
                    <div className={css.label}>
                        <label htmlFor="email" className={css.labelText}>Email</label>
                        <Field className={css.field} type="text" name="email"></Field>

                        <ErrorMessage className={css.error} name="email" component="span" />
                    </div>
                    <div className={css.label}>
                        <label htmlFor="phone" className={css.labelText}>Numer telefonu</label>
                        <Field className={css.field} type="text" name="phone"></Field>

                        <ErrorMessage className={css.error} name="phone" component="span" />
                    </div>
                    <div className={css.label}>
                        <label htmlFor="comment" className={css.labelText}>Wiadomość</label>
                        <Field className={css.comment} type="text" name="comment"></Field>

                        <ErrorMessage className={css.error} name="comment" component="span" />
                  </div>
                  <div>
                        <div>
                            <svg className={css['footer-top-links-icon']}>
                                <use href="/icons.svg#icon-box"></use>
                            </svg>
                            <svg className={css['footer-top-links-icon']}>
                                <use href="/icons.svg#icon-check"></use>
                            </svg>
                      </div>
                      <p>Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z <Link href='/privacy'>polityką prywatności</Link></p>
                  </div>
                  
                    <button className={css.btn} type="submit">Wyślij Wiadomość</button>
                </FormikForm>
            </Formik>
    </div>
  )
}

export default Form
