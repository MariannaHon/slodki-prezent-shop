'use client';

import css from './Data.module.scss';
import { useFormikContext } from 'formik';
import { CheckoutFormValues } from '../../checkout/page';

const Data = () => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<CheckoutFormValues>();

  return (
    <div className={css.form}>
      <h3 className="form-title">Dane rozliczeniowe</h3>

      <div>
        <div className={css['form-top']}>
          <div className={css['form-label']}>
            <label htmlFor="name" className="title-16">
              Imię*
            </label>
            <input
              className={css['form-label-input']}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && <span>{errors.name}</span>}
          </div>

          <div className={css['form-label']}>
            <label htmlFor="surname" className="title-16">
              Nazwisko*
            </label>
            <input
              className={css['form-label-input']}
              type="text"
              name="surname"
              value={values.surname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.surname && errors.surname && <span>{errors.surname}</span>}
          </div>

          <div className={css['form-label']}>
            <label htmlFor="email" className="title-16">
              Email*
            </label>
            <input
              className={css['form-label-input']}
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <span>{errors.email}</span>}
          </div>

          <div className={css['form-label']}>
            <label htmlFor="phone" className="title-16">
              Numer telefonu*
            </label>
            <input
              className={css['form-label-input']}
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && <span>{errors.phone}</span>}
          </div>
        </div>

        <h3 className={css['form-title']}>Dane adresowe</h3>

        <div className={css['form-label']}>
          <label htmlFor="country" className="title-16">
            Kraj*
          </label>
          <input
            className={css['form-label-comment']}
            type="text"
            name="country"
            value={values.country}
            disabled
          />
          {touched.country && errors.country && <span>{errors.country}</span>}
        </div>

        <div className={css['form-label']}>
          <label htmlFor="street" className="title-16">
            Ulica i nr domu*
          </label>
          <input
            className={css['form-label-comment']}
            type="text"
            name="street"
            value={values.street}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.street && errors.street && <span>{errors.street}</span>}
        </div>

        <div className={css['form-label']}>
          <label htmlFor="index" className="title-16">
            Kod pocztowy*
          </label>
          <input
            className={css['form-label-comment']}
            type="text"
            name="index"
            value={values.index}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.index && errors.index && <span>{errors.index}</span>}
        </div>

        <div className={css['form-label']}>
          <label htmlFor="city" className="title-16">
            Miasto*
          </label>
          <input
            className={css['form-label-comment']}
            type="text"
            name="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.city && errors.city && <span>{errors.city}</span>}
        </div>

        <div className={css['form-checkbox']}>
          <input type="checkbox" id="invoice" />
          <label htmlFor="invoice">Dane do Faktury</label>
        </div>

        <div className={css['form-label']}>
          <label htmlFor="comment" className="title-16">
            Uwagi do zamówienia (opcjonalnie)
          </label>
          <textarea
            className={css['form-label-comment']}
            name="comment"
            value={values.comment}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.comment && errors.comment && <span>{errors.comment}</span>}
        </div>
      </div>
    </div>
  );
};

export default Data;
