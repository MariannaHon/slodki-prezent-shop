'use client';

import css from './Payment.module.scss';
// import { useFormikContext } from 'formik';
// import { CheckoutFormValues } from '../../checkout/page';
import Link from 'next/link';

const Payment = () => {

    // const { values, setFieldValue } =
    // useFormikContext<CheckoutFormValues>();

  return (
    <div className={css.form}>
        {/* <div className={css['form-payment']}>
            <h4>Płatność</h4>
            <div className={css['form-payment-options']}>
                <label className={css['form-payment-options-option']}>
                    <input type="radio" name="payment" value="blik" onChange={() => setFieldValue('payment', 'blik')} />
                    <span>BLIK</span>
                </label>
                <label className={css['form-payment-options-option']}>
                    <input type="radio" name="payment" value="przelewy" onChange={() => setFieldValue('payment', 'przelewy')}/>
                    <span>Pay with Przelewy24</span>
                </label>
                <label className={css['form-payment-options-option']}>
                    <input type="radio" name="payment" value="card" onChange={() => setFieldValue('payment', 'card')} />
                    <span>Card payment</span>
                </label>
            </div>  
        </div> */}
        <p className={css['form-text']}>Twoje dane osobowe będą użyte do przetworzenia zamówienia, wsparcia Twojego doświadczenia na tej stronie oraz do innych celów opisanych w naszej <Link href="/policy"><b>polityce prywatności</b></Link>.</p>  
        <button type='submit' className={css['form-btn']}>Złóż zamówienie</button>
    </div>
  )
}

export default Payment