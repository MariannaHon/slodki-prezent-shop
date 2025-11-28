import css from "./Filters.module.scss";

const Filters = () => {

    const handleCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        // filterType: FilterType
    ) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        // switch (filterType) {
        //     case FilterType.Who:
        //         const newBrandFilters = isChecked
        //             ? [...brandFilters, value]
        //             : brandFilters.filter(item => item !== value);
        //         setBrandFilters(newBrandFilters);
        //         dispatch(
        //             changeFilter({ filter: filterType, value: newBrandFilters })
        //         );
        //         break;
        //     case FilterType.Categories:
        //         const newCategoriesFilters = isChecked
        //             ? [...categoriesFilters, value]
        //             : categoriesFilters.filter(item => item !== value);
        //         setCategoriesFilters(newCategoriesFilters);
        //         dispatch(
        //             changeFilter({
        //                 filter: filterType,
        //                 value: newCategoriesFilters,
        //             })
        //         );
        //         break;
        //     case FilterType.Discount:
        //         const newDiscountFilters = isChecked
        //             ? [...discountFilters, value]
        //             : discountFilters.filter(item => item !== value);
        //         setDiscountFilters(newDiscountFilters);
        //         dispatch(
        //             changeFilter({
        //                 filter: filterType,
        //                 value: newDiscountFilters,
        //             })
        //         );
        //         break;
        //     case FilterType.Price:
        //         const priceValue = parseInt(value);
        //         const newPriceFilters = isChecked
        //             ? [...priceFilters, priceValue]
        //             : priceFilters.filter(item => item !== priceValue);

        //         setPriceFilters(newPriceFilters);
        //         dispatch(
        //             changeFilter({ filter: filterType, value: newPriceFilters })
        //         );
        //         break;
        //     case FilterType.Rating:
        //         const ratingValue = parseInt(value);
        //         const newRatingFilters = isChecked
        //             ? [...ratingFilters, ratingValue]
        //             : ratingFilters.filter(item => item !== ratingValue);
        //         setRatingFilters(newRatingFilters);
        //         dispatch(
        //             changeFilter({
        //                 filter: filterType,
        //                 value: newRatingFilters,
        //             })
        //         );
        //         break;
        //     default:
        //         break;
        // }
    };

  return (
    <div>
      <aside className={css.sidebar}>
            <h3 className={css['sidebar-title']}>Opcje przeglądania</h3>

              <fieldset className={css['sidebar-field']}>
                <legend className={css['sidebar-field-legend']}>Dla Kogo</legend>
                {['Dla Firm', 'Dla Niej', 'Dla Niego', 'Dla Dzieci'].map(
                    whoName => (
                        <div className={css.label} key={whoName}>
                            <label>
                                <input
                                    className={css['sidebar-field-text']}
                                    type="checkbox"
                                    id={whoName}
                                    name={whoName}
                                    value={whoName}
                                    // checked={whoFilters.includes(whoName)}
                                    // onChange={e =>
                                    //     handleCheckboxChange(
                                    //         e,
                                    //         // FilterType.Who
                                    //     )
                                    // }
                                />
                                {/* <span className={css.violet}>
                                    <svg width="18" height="18">
                                        <use href="/img/sprite.svg#icon-checked"></use>
                                    </svg>
                                    <svg
                                        className={css.check}
                                        width="10"
                                        height="8"
                                    >
                                        <use href="/img/sprite.svg#icon-vector"></use>
                                    </svg>
                                </span> */}
                                {whoName.charAt(0).toUpperCase() +
                                    whoName.slice(1)}
                            </label>
                        </div>
                    )
                )}
              </fieldset>
              <fieldset className={css['sidebar-field']}>
                <legend className={css['sidebar-field-legend']}>Święta</legend>
                {['Boże Narodzenie', 'Dzień Kobiet', 'Dzień Mężczyzn', 'Halloween', 'Kosze świąteczne', 'Mikołajki', 'Sylwester', 'Walentynki', 'Wielkanoc'].map(
                    holidayName => (
                        <div className={css.label} key={holidayName}>
                            <label className="text">
                                <input
                                    className={css['sidebar-field-text']}
                                    type="checkbox"
                                    id={holidayName}
                                    name={holidayName}
                                    value={holidayName}
                                    // checked={whoFilters.includes(whoName)}
                                    // onChange={e =>
                                    //     handleCheckboxChange(
                                    //         e,
                                    //         // FilterType.Who
                                    //     )
                                    // }
                                />
                                {/* <span className={css.violet}>
                                    <svg width="18" height="18">
                                        <use href="/img/sprite.svg#icon-checked"></use>
                                    </svg>
                                    <svg
                                        className={css.check}
                                        width="10"
                                        height="8"
                                    >
                                        <use href="/img/sprite.svg#icon-vector"></use>
                                    </svg>
                                </span> */}
                                {holidayName.charAt(0).toUpperCase() +
                                    holidayName.slice(1)}
                            </label>
                        </div>
                    )
                )}
              </fieldset>
              <fieldset className={css['sidebar-field']}>
                <legend className={css['sidebar-field-legend']}>Cena</legend>
                {['1zł — 70zł', '70zł — 100zł', '100zł — 200zł', '200zł — 300zł', '300zł — 500zł'].map(
                    priceName => (
                        <div className={css.label} key={priceName}>
                            <label className="text">
                                <input
                                    className={css['sidebar-field-text']}
                                    type="checkbox"
                                    id={priceName}
                                    name={priceName}
                                    value={priceName}
                                    // checked={whoFilters.includes(whoName)}
                                    // onChange={e =>
                                    //     handleCheckboxChange(
                                    //         e,
                                    //         // FilterType.Who
                                    //     )
                                    // }
                                />
                                {/* <span className={css.violet}>
                                    <svg width="18" height="18">
                                        <use href="/img/sprite.svg#icon-checked"></use>
                                    </svg>
                                    <svg
                                        className={css.check}
                                        width="10"
                                        height="8"
                                    >
                                        <use href="/img/sprite.svg#icon-vector"></use>
                                    </svg>
                                </span> */}
                                {priceName.charAt(0).toUpperCase() +
                                    priceName.slice(1)}
                            </label>
                        </div>
                    )
                )}
            </fieldset>
          </aside>
    </div>
  )
}

export default Filters
