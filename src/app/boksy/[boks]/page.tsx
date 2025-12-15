'use client';

import Image from "next/image";
import Link from "next/link";
import css from './page.module.scss';
import Popular from "../../components/Popular/Popular";
import Skontaktuj from "../../components/Skontaktuj/Skontaktuj";
import FAQ from "../../components/FAQ/FAQ";
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import { selectProducts, selectError, selectLoading } from '@/src/redux/products/selectors';
import { useEffect } from 'react';
import { useAppDispatch } from "../../../redux/hooks";

import { fetchProducts } from '../../../redux/products/operations';


const ProductPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const pathname = usePathname();

    const products = useSelector(selectProducts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products]);

    const productId = pathname.split('/').pop();
    const product = products.find(item => item._id?.toString() === productId);

    if (isLoading || !product) {
        return <p>Ładowanie produktu...</p>;
    }

    if (error) {
        return <p>Błąd: {error}</p>;
    }


  return (
    <div className="container">
          <div className={css.product}>
              <div className={css['product-top']}>
                    <div className={css['product-top-left']}>
                        <Image
                            priority
                            className={css['product-top-left-main']}
                            src={product.photo}
                            width="588"
                            height="598"
                            alt="Sweet present"
                        />
                        <ul className={css['product-top-left-list']}>
                            <li className={css['product-top-left-list-item']}>
                                <Image
                                    priority
                                    src={product.photo2}
                                    width="180"
                                    height="180"
                                    alt="Sweet present"
                                />
                            </li>
                            <li className={css['product-top-left-list-item']}>
                                <Image
                                    priority
                                    src={product?.photo3}
                                    width="180"
                                    height="180"
                                    alt="Sweet present"
                                />
                            </li>
                            <li className={css['product-top-left-list-item']}>
                                <Image
                                    priority
                                    src={product?.photo4}
                                    width="180"
                                    height="180"
                                    alt="Sweet present"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className={css['product-top-right']}>
                        <h1 className="section-title mb-32">{product.name}</h1>
                        <h3 className="card-title">Opis zestawu prezentowego:</h3>
                        <ul className={css['product-top-right-list']}>
                            {product?.contains?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p>{product.description}</p> <br/>
                        <p>Minimalna liczba zestawów jednej pozycji w zamówieniu to 5 sztuk. Skład może ulec drobnej modyfikacji, jednak zawsze bez wpływu na jakość produktu.</p> <br/>
                        <p><b>Ilość:</b></p>
                        <div className={css['product-top-right-wrapper']}>
                            <div className={css['product-top-right-wrapper-amount']}>
                                <button className={css['product-top-right-wrapper-amount-btn']}>
                                    <svg className={css['product-top-right-wrapper-amount-btn-icon']}>
                                        <use href="/icons.svg#icon-minus"></use>
                                    </svg>
                                </button>
                                <p className={css['product-top-right-wrapper-amount-num']}>1</p>
                                <button className={css['product-top-right-wrapper-amount-btn']}>
                                    <svg className={css['product-top-right-wrapper-amount-btn-icon']}>
                                        <use href="/icons.svg#icon-plus"></use>
                                    </svg>
                                </button>
                            </div>
                            <div className={css['product-top-right-wrapper-price']}>
                                <p className="section-title"><span className={css.span}>{product.oldPrice} zł</span> {product.price} zł</p>
                                <p className="title-black">cena netto</p>
                            </div>
                        </div>
                        <div className={css['product-top-right-contact']}>
                            <Link className={css['product-top-right-contact-cart']} href='/cart'>Do koszyka</Link>
                            <Link className={css['product-top-right-contact-brown']} href='/kontakt'>Skontaktuj się z nami</Link>
                        </div>
                        <ul className={css['product-top-right-why']}>
                            <li className={css['product-top-right-why-item']}>
                                <svg className={css['product-top-right-why-item-icon']}>
                                    <use href="/icons.svg#icon-save"></use>
                                </svg>
                                <p>Bezpieczne płatności online</p>
                            </li>
                            <li className={css['product-top-right-why-item']}>
                                <svg className={css['product-top-right-why-item-icon']}>
                                    <use href="/icons.svg#icon-present"></use>
                                </svg>
                                <p>Darmowy prezent do zamówień powyżej 500 zł</p>
                            </li>
                            <li className={css['product-top-right-why-item']}>
                                <svg className={css['product-top-right-why-item-icon']}>
                                    <use href="/icons.svg#icon-fast"></use>
                                </svg>
                                <p>Szybka i staranna dostawa w całej Polsce</p>
                            </li>
                        </ul>
                    </div>
              </div>
              <Popular />
              <Skontaktuj />
              <FAQ/>
        </div>
    </div>
  )
}

export default ProductPage
