'use client';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import css from './Form.module.scss';
import Link from 'next/link';

const Form = () => {

    const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Za krótkie!").max(30, "Za długie!").required("Wymagane!"),
        email: Yup.string().email().required("Wymagane!"),
        phone: Yup.number().min(9, "Za krótkie!").max(15, "Za długie!").required("Wymagane!"),
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
      <div className={css.form}>
          <h3 className={css['form-title']}>Napisz do nas</h3>
       <Formik
                initialValues={initialValues}
                validationSchema={Validator}
                onSubmit={handleSubmit}>
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
                        <input className="visually-hidden" type="checkbox" id="user-privacy" name="user-privacy" value="true"
                            required />
                        <label htmlFor="user-privacy" className={css["form-bottom-check"]}>
                            <span className={css["form-bottom-check-span"]}>
                                <svg width="16" height="16" className={css['form-bottom-check-span-icon']}>
                                    <use href="/icons.svg#icon-check"></use>
                                </svg>
                            </span>
                            <span className={css['form-bottom-check-text']}>Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z <Link className={css['form-bottom-check-text-privacy']} href='/privacy'>polityką prywatności</Link>
                            </span>
                        </label>
                    </div>
                  
                    <button className={css['form-btn']} type="submit">Wyślij Wiadomość</button>
                </FormikForm>
            </Formik>
    </div>
  )
}

export default Form
