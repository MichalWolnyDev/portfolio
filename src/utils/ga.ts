import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-23P2M5QCNJ");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category: string, action: string, label: string) => {
    console.log('ga action event')
  ReactGA.event({
    category,
    action,
    label,
  });
};
