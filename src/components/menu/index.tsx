import Style from './Menu.module.css';
export const Menu = () => {
  return (
    <div className={Style.buttonContainer}>
      <button className={Style.button}>Home</button>
      <button className={Style.button}>Sobre</button>
      <button className={Style.button}>Contato</button>
    </div>
  );
};
