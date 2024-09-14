export const scrollToSection = (e: any, id:string) => {
    e.preventDefault();
    let section = document.querySelector(id) as HTMLElement;;
    window.scrollTo({
      top: section?.offsetTop,
      behavior: "smooth",
    });
  };