import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { setFilter, resetFilters } from "@/src/redux/filters/slice";
import { changePage } from "@/src/redux/products/slice";
import css from "./Filters.module.scss";


const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterType: keyof typeof filters
  ) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    dispatch(setFilter({ [filterType]: isChecked ? value : "" }));
    dispatch(changePage(1)); 
  };

  return (
    <aside className={css.sidebar}>
      <h3 className={css["sidebar-title"]}>Opcje przeglądania</h3>

      {/* Dla kogo */}
      <fieldset className={css["sidebar-field"]}>
        <legend className={css["sidebar-field-legend"]}>Dla Kogo</legend>
        {["Dla Firm", "Dla Niej", "Dla Niego", "Dla Dzieci"].map((whoName) => (
          <div key={whoName}>
            <label>
                <input
                    type="checkbox"
                    value={whoName}
                    checked={filters.dlaKogo === whoName}
                    onChange={(e) => handleCheckboxChange(e, "dlaKogo")}
                />
              {whoName}
            </label>
          </div>
        ))}
      </fieldset>

      {/* Święta */}
      <fieldset className={css["sidebar-field"]}>
        <legend className={css["sidebar-field-legend"]}>Święta</legend>
        {[
          "Boże Narodzenie",
          "Dzień Kobiet",
          "Dzień Mężczyzn",
          "Halloween",
          "Kosze świąteczne",
          "Mikołajki",
          "Sylwester",
          "Walentynki",
          "Wielkanoc",
        ].map((holiday) => (
          <div key={holiday}>
            <label>
              <input
                type="checkbox"
                value={holiday}
                checked={filters.swieta === holiday}
                onChange={(e) => handleCheckboxChange(e, "swieta")}
              />
              {holiday}
            </label>
          </div>
        ))}
      </fieldset>

      {/* Cena */}
      <fieldset className={css["sidebar-field"]}>
        <legend className={css["sidebar-field-legend"]}>Cena</legend>
        {[
          "1zl - 70zl",
          "70zl - 100zl",
          "100zl - 200zl",
          "200zl - 300zl",
          "300zl - 500zl",
        ].map((price) => (
          <div key={price}>
            <label>
              <input
                type="checkbox"
                value={price}
                checked={filters.cena === price}
                onChange={(e) => handleCheckboxChange(e, "cena")}
              />
              {price}
            </label>
          </div>
        ))}
      </fieldset>
    </aside>
  );
};

export default Filters;


