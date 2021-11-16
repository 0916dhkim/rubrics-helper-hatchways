import React, { useCallback } from "react";

import { copyToClipboard } from "../clipboard";
import styles from "./QuickCopy.module.css";

type QuickCopyProps = {
  children: string;
};

export const QuickCopy = ({ children }: QuickCopyProps): React.ReactElement => {
  const onClick = useCallback(() => {
    copyToClipboard(children);
  }, [children]);

  return (
    <p className={styles.quickcopy} onClick={onClick}>
      {children}
    </p>
  );
};
