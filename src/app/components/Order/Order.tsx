'use client';

import css from './Order.module.scss';
import { useFormikContext } from 'formik';
import { CheckoutFormValues } from '../../checkout/page';

import { cartItem } from "@/src/redux/cart/slice";
import { useAppDispatch } from "@/src/redux/hooks";
import { useSelector } from "react-redux";
import { selectCart, selectAmount } from "@/src/redux/cart/selectors"

const Order = () => {

    const { values, setFieldValue } =
        useFormikContext<CheckoutFormValues>();
    
    const cartItems = useSelector(selectCart);
    const cartAmount = useSelector(selectAmount);

     const deliveryFee = values.delivery === 'inpost' || values.delivery === 'dhl' ? 30 : 0;

    const vat = (cartAmount + deliveryFee) * 0.23;
    const total = cartAmount + deliveryFee + vat;

    const dispatch = useAppDispatch();

  return (
    <div className={css.form}>
        <h3 className="form-title">Twoje zamówienie</h3>
        <div className={css['form-line']}>
            <p>Produkt</p>
            <p>Cena</p>
        </div>  
        <ul className={css['form-list']}>
            {cartItems.map((item: cartItem) => (
                <li className={css['form-line']} key={item.id}>
                    <p>{item.name} x {item.quantity}</p>
                    <p>{item.price * item.quantity} zł</p>
                </li>
            ))}
        </ul>
        <div className={css['form-line']}>
            <p>Cena</p>
            <p>{cartAmount} zł</p>
        </div>
        <div className={css['form-delivery']}>
            <h4>Wysyłka</h4>
            <div className={css['form-delivery-options']}>
                <label className={css['form-delivery-options-option']}>
                    <input type="radio" name="delivery" value="pickup" onChange={() => setFieldValue('delivery', 'pickup')} />
                    <span>Odbiór osobisty</span>
                </label>
                <label className={css['form-delivery-options-option']}>
                    <input type="radio" name="delivery" value="inpost" onChange={() => setFieldValue('delivery', 'inpost')}/>
                    <span>InPost Kurier: <b>30 zł</b></span>
                </label>
                <label className={css['form-delivery-options-option']}>
                    <input type="radio" name="delivery" value="dhl" onChange={() => setFieldValue('delivery', 'dhl')} />
                    <span>DHL Kurier: <b>30 zł</b></span>
                </label>
            </div>
        </div>
        <div className={css['form-line']}>
            <p>VAT</p>
            <p>{cartAmount * 0.23} zł</p>
        </div>
        <div className={css['form-line']}>
            <p>Razem do zapłaty</p>
            <p>{total} zł</p>
        </div>  
    </div>
  )
}

export default Order
