import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { firstColor, selectColor } from "../../redux/colorSlice";
import { useSelector, useDispatch } from "react-redux";
import { addNote, saveEditedNote } from "../../redux/noteSlice";

function TextArea() {
  const edit = useSelector((state) => state.notes.edit);
  console.log("edit", edit);

  const dispatch = useDispatch();

  const startColor = useSelector((state) => state.color.startColor);

  const colors = useSelector((state) => state.color.colors);

  const [text, setText] = useState("");
  const [updateText, setUpdateText] = useState(edit.text);

  useEffect(() => {
    setUpdateText(edit.text);
  }, [edit]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text) return alert("Boş ekleme yapamazsınız!");
    dispatch(addNote({ text: text, color: startColor, time: date }));
    setText("");
  };

  const date = new Date().toLocaleString();

  const handleSaveEditedNoteButton = () => {
    dispatch(
      saveEditedNote({
        id: edit.id,
        text: updateText,
        time: date,
        color: startColor,
      })
    );
    setText("");
    setUpdateText("");
  };

  const handleColor = (code) => {
    dispatch(firstColor(code));
    dispatch(selectColor(code));
  };

  return (
    <div className={styles.TextAreaDiv}>
      <textarea
        value={edit.id ? updateText : text}
        cols="30"
        rows="10"
        placeholder="Not giriniz..."
        className={styles.TextArea}
        onChange={
          edit.id
            ? (e) => setUpdateText(e.target.value)
            : (e) => setText(e.target.value)
        }
      ></textarea>
      <div className={styles.colorAndBtn}>
        <div className={styles.colorDiv}>
          {colors.map((colorItem) => (
            <button
              key={colorItem.id}
              className={styles.color}
              style={{ backgroundColor: colorItem.code }}
              onClick={() => handleColor(colorItem.code)}
            >
              {colorItem.selected ? <span>✔</span> : ""}
            </button>
          ))}
        </div>

        <div className={styles.addBtnDiv}>
          {edit.id ? (
            <button
              className={styles.ekleBtn}
              onClick={handleSaveEditedNoteButton}
            >
              Ekle
            </button>
          ) : (
            <button className={styles.ekleBtn} onClick={handleAdd}>
              Ekle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default TextArea;
