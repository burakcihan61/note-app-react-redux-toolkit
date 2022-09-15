import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { selectNotes, searchData } from "../../redux/noteSlice";
import { Input } from "@chakra-ui/react";

function FilterInput() {
  const dispatch = useDispatch();
  const items = useSelector(selectNotes);
  console.log(items);

  const handleSearch = (e) => {
    dispatch(searchData(e.target.value));
  };

  return (
    <div>
      <Input
        type="text"
        className={styles.search}
        placeholder="Aramak istediğiniz kelimeyi yazınız"
        onChange={handleSearch}
      />
    </div>
  );
}

export default FilterInput;
