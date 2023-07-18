
import { useEffect } from 'react';

// if(id === 'home') window.scrollTo(0,0);


const useScrollTo = (goal: string) => {
  useEffect(() => {
    const element = document.getElementById(goal);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [goal]);
};

export default useScrollTo;
