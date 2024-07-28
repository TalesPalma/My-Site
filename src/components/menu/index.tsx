import Link from 'next/link';
import Style from './Menu.module.css';
export const Menu = () => {
  return (
    <div className={Style.buttonContainer}>
      <Link href="/" className={Style.button} >Home</Link>
      <Link href="/sobre" className={Style.button} >Sobre</Link>
      <Link href="/contato" className={Style.button} >Contato</Link>
    </div>
  );
};
