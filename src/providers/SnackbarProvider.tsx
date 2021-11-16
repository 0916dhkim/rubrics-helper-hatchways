import React, { useCallback } from "react";
type SnackbarState = {
  timeout?: NodeJS.Timeout;
  isVisible: boolean;
  message: string;
};

type SnackbarContext = SnackbarState & {
  showMessage: (message: string) => Promise<void>;
};

const SnackbarContext = React.createContext<SnackbarContext>({
  isVisible: false,
  message: "",
  showMessage: async () => {},
});

export function useSnackbar() {
  const context = React.useContext(SnackbarContext);
  return context;
}

export const SnackbarProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<SnackbarState>({
    isVisible: false,
    message: "",
  });

  const showMessage = useCallback(
    async (message: string) => {
      // Ignore last timer.
      if (state.timeout) {
        clearTimeout(state.timeout);
      }

      // Hide message after timeout.
      const nextTimeout = setTimeout(() => {
        setState({ isVisible: false, message, timeout: undefined });
      }, 1000);

      // Show message now.
      setState({ isVisible: true, message, timeout: nextTimeout });
    },
    [state.timeout]
  );

  return (
    <SnackbarContext.Provider
      value={{
        ...state,
        showMessage,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
