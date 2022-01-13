/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { BiPlus, BiMinus } from "react-icons/bi";

const ActionButton = ({ isOpen, handleClick }) => {
  return (
    <span sx={styles.button} onClick={handleClick}>
      {isOpen ? (
        <BiMinus size="28px" sx={styles.button} />
      ) : (
        <BiPlus size="28px" sx={styles.button} />
      )}
    </span>
  );
};

export default ActionButton;

const styles = {
  button: {
    cursor: "pointer",
    position: "absolute",
    right: 0,
    color: "primary",
  },
};
