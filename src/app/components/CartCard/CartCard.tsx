
import Image from "next/image"

import css from './CartCard.module.scss'

import { cartItem } from "@/src/redux/cart/slice";
import { useAppDispatch } from "@/src/redux/hooks";
import { increaseItemQuantity, decreaseItemQuantity, removeItem } from "@/src/redux/cart/slice";

interface ItemProps {
    item: cartItem;
}

const CartCard: React.FC<ItemProps> = ({ item }) => {


    const cartAmount = item.quantity * item.price;
    const dispatch = useAppDispatch();

    const handleIncrease = () => {
        if (item.id) {
            dispatch(increaseItemQuantity(item.id));
        }
    };

    const handleDecrease = () => {
        if (item.id) {
            dispatch(decreaseItemQuantity(item.id));
        }
    };

    const handleRemove = () => {
    if (item.id) {
        dispatch(removeItem(item.id));
    }
};


  return (
      <div className={css.card}>
      <Image
            priority
            className={css['card-img']}
            src={item.photo}
            width="120"
            height="120"
            alt="Sweet present"
          />
          
        <div className={css['card-content']}>
            <h4 className="card-title mb-24">{item.name}</h4>
            <button className={css['card-content-close']} type="button" onClick={handleRemove}>
                <svg className={css['card-content-close-icon']}>
                    <use href="/icons.svg#icon-close"></use>
                </svg>
            </button>  
            <ul className={css['card-content-list']}>
                <li className={css['card-content-list-item']}>
                    <p className="cart-title mb-8">Cena:</p>
                    <p className="cart-title"><span className="card-title">{item.price} zł </span>netto</p>
                </li>
                <li className={css['card-content-list-item']}>
                    <p className="cart-title">Ilość:</p>
                    <div className={css['card-content-list-item-add']}>
                        <button className={css['card-content-list-item-add-btn']} type="button" onClick={handleDecrease}>
                            <svg className={css['card-content-list-item-add-btn-icon']}>
                                <use href="/icons.svg#icon-minus"></use>
                            </svg>
                        </button>
                        <p className={css['card-content-list-item-add-amount']}>{item.quantity}</p>
                        <button className={css['card-content-list-item-add-btn']} type="button" onClick={handleIncrease}>
                            <svg className={css['card-content-list-item-add-btn-icon']}>
                                <use href="/icons.svg#icon-plus"></use>
                            </svg>
                        </button>
                    </div>
                </li>
                <li className={css['card-content-list-item']}>
                    <p className="cart-title mb-8">Razem</p>
                    <p className="cart-title"><span className="card-title">{cartAmount} zł </span>netto</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CartCard
