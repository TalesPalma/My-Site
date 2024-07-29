import Styles from './AboutMeCard.module.css';

export const AboutMeCard = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}></div>
      <div className={Styles.card2}></div>
      <div className={Styles.card3}>
        <h2>Quem sou eu?</h2>
        <p>
          Olá, meu nome é Tales Palma e sou um desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes.
          Com uma sólida formação em Análise e Desenvolvimento de Sistemas, tenho experiência em diversas tecnologias e frameworks, o que me permite atuar em diferentes áreas do desenvolvimento de software.
        </p>
      </div>
    </div>
  )
}


