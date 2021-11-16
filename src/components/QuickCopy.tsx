import React, { useCallback } from "react";

import { copyToClipboard } from "../clipboard";
import styles from "./QuickCopy.module.css";
import { useSnackbar } from "../providers/SnackbarProvider";

type QuickCopyProps = {
  children: string;
};

export const QuickCopy = ({ children }: QuickCopyProps): React.ReactElement => {
  const { showMessage } = useSnackbar();
  const onClick = useCallback(() => {
    copyToClipboard(children);
    showMessage("Note copied!");
  }, [children, showMessage]);

  return (
    <p className={styles.quickcopy} onClick={onClick}>
      {children}
    </p>
  );
};
