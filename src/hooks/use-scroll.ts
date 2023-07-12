export const useScrollTo = (id: string) => {
    const el = document.getElementById(id);

    if(id === 'home') window.scrollTo(0,0);

    if(el){
        el.scrollIntoView({
            behavior: 'smooth'
        })
    }
}