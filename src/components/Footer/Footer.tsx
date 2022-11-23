import React, { FC } from "react";
import classnames from "classnames";

import { ReactComponent as EmailIcon} from "../../static/icons/EmailIcon.svg";
import { ReactComponent as PhoneIcon} from "../../static/icons/PhoneIcon.svg";
import { ReactComponent as WhatsAppIcon} from "../../static/icons/WhatsAppIcon.svg";
import { ReactComponent as TelegramIcon} from "../../static/icons/TelegramIcon.svg";

import styles from "./Footer.module.sass";

const Footer: FC = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["contact"]}>
        <EmailIcon className={styles["icon"]}/>
        <span>info@nextf.ru</span>
      </div>

      <div className={styles["contact"]}>
        <PhoneIcon className={styles["icon"]}/>
        <span>+7 926 862 06 44</span>
      </div>

      <div className={classnames(styles["contact"], styles["whatsapp"])}>
        <WhatsAppIcon className={styles["icon"]}/>
        <span>Написать нам в WhatsApp</span>
      </div>

      <div className={classnames(styles["contact"], styles["telegram"])}>
        <TelegramIcon className={styles["icon"]}/>
        <span>Написать нам в Telegram</span>
      </div>
      <div className={styles["info"]}>
        <div className={styles["other-info"]}>или @nextfstudio</div>
        <div>Next Format, 2022</div>
      </div>
    </div>
  )
}

export { Footer };
