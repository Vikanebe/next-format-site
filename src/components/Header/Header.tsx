import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as LogoMini} from "../../static/icons/LogoMiniIcon.svg";
import { ReactComponent as MenuIcon} from "../../static/icons/MenuIcon.svg";
import { JOBS_P, MAIN_P, PROJECTS_P } from "../../utils/constants";

import styles from "./Header.module.sass";

import { useAppSelector } from "../../store";
import { getIsMobile } from "../../store/slelectors/app-selector";

const Header: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isMobile = useAppSelector(getIsMobile);

  const returnToMainPage = useCallback(() => {
    navigate(MAIN_P);
  }, [navigate]);

  const openCloseMenu = useCallback(() => {

  }, []);

  return (
    <div className={styles["wrapper"]}>
      <LogoMini onClick={returnToMainPage} className={styles["logo"]}/>
      {
        isMobile
          ? <MenuIcon onClick={openCloseMenu}/>
          : <div className={styles["links"]}>
              <Link
                to={PROJECTS_P}
                className={styles['link']}
                children={t("links.our_projects")}
              />

              <Link
                to={JOBS_P}
                className={styles['link']}
                children={t('links.job_with_us')}
              />
            </div>
      }
    </div>
  )
};

export {Header};
