import {FC, useCallback} from "react"
import styles from "./Header.module.sass";
import {ReactComponent as LogoMini} from "../../static/icons/LogoMiniIcon.svg";
import { useNavigate } from "react-router-dom";
import { MAIN_P } from "../../utils/constants";

const Header: FC = () => {
  const navigate = useNavigate();

  const returnToMainPage = useCallback(() => {
    navigate(MAIN_P);
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <LogoMini onClick={returnToMainPage}/>
    </div>
  )
}

export {Header};
