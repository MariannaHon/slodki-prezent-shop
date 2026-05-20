'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import css from './Search.module.scss';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '@/src/redux/filters/selectors';
import { search, resetFilters } from '@/src/redux/filters/slice';
import { useAppDispatch } from '@/src/redux/hooks';

const Search = () => {
    const dispatch = useAppDispatch();
    const filter = useSelector(selectNameFilter);
    const router = useRouter();

    const pathname = usePathname();

    useEffect(() => {
        if (filter && pathname !== '/boksy') {
            router.push('/boksy');
        }
    }, [filter, pathname, router]);

    useEffect(() => {
    if (!pathname.startsWith('/boksy')) {
        dispatch(resetFilters());
    }
}, [pathname, dispatch]);


    return (
        <div className={css.box}>
            <input
                className={css['input']} 
                value={filter}
                onChange={e => dispatch(search(e.target.value))}
                type="text"
                placeholder="Szukaj..."
            />
        </div>
    );
};

export default Search;