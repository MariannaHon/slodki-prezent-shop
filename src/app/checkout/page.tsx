'use client'

import Data from "../components/Data/Data"
import Order from "../components/Order/Order"
import Payment from "../components/Payment/Payment"

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import css from './page.module.scss'

export interface CheckoutFormValues {
  name: string;
  surname: string;
  email: string;
  phone: string;
  country: string;
  street: string;
  index: string;
  city: string;
  comment?: string;
  delivery?: string;
  payment?: string;
}


const checkoutPage = () => {

  const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Za krótkie!").max(30, "Za długie!").required("Wymagane!"),
        surname: Yup.string().min(3, "Za krótkie!").max(30, "Za długie!").required("Wymagane!"),
        email: Yup.string().email().required("Wymagane!"),
        phone: Yup.string().min(9, "Za krótkie!").max(15, "Za długie!").required("Wymagane!"),
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
    <main className={css.checkout}>
      <section className="container">
        <h1 className="main-title mb-40">Podsumowanie</h1>
        <Formik<CheckoutFormValues>
          initialValues={initialValues}
          validationSchema={Validator}
          onSubmit={handleSubmit}>
          <FormikForm className={css['checkout-form']}>
            <Data />
            <div className={css['checkout-wrapper']}>
              <Order />
              <Payment/>
            </div>
          </FormikForm>
        </Formik>
      </section>
    </main>
  )
}

export default checkoutPage
