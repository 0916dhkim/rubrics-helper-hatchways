import React, { useMemo } from "react";

import styles from "./Snackbar.module.css";
import { useSnackbar } from "../providers/SnackbarProvider";

export const Snackbar = (): React.ReactElement => {
  const { isVisible, message } = useSnackbar();
  const classnames = useMemo(() => {
    const classnameArray = [styles.snackbar];
    if (!isVisible) classnameArray.push(styles.hidden);
    return classnameArray.join(" ");
  }, [isVisible]);

  return (
    <div className={classnames}>
      <div className="message is-success">
        <div className="message-body p-3">{message}</div>
      </div>
    </div>
  );
};
