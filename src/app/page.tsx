import { Card } from "@/components/card";
import Style from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={Style.container}>
      <header className={Style.header}>
        <h1>Seja bem-vindo!</h1>
        <div className={Style.titleHeader}>
          <Card />
          <div className={Style.description}>
            <h2>Quem sou eu?</h2>
            <p>
              Olá, meu nome é Tales Palma e sou um desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes.
              Com uma sólida formação em Análise e Desenvolvimento de Sistemas, tenho experiência em diversas tecnologias e frameworks, o que me permite atuar em diferentes áreas do desenvolvimento de software.
            </p>
            <a href="/CurriculoTales.pdf" className={Style.buttonDownload} download>Download CV</a>

          </div>
        </div>
      </header>
      <main className={Style.main}>
        <div className={Style.divider}>
          <h1>Tecnologias que domino</h1>
          <ul className={Style.icons}>
            <img src="/icons/rust.svg" alt="rust" />
            <img src="/icons/java.svg" alt="java" />
            <img src="/icons/spring.svg" alt="spring" />
            <img src="/icons/kotlin.svg" alt="kotlin" />
            <img src="/icons/android.svg" alt="android" />
            <img src="/icons/javascript.svg" alt="javascript" />
            <img src="/icons/typescript.svg" alt="typescript" />
            <img src="/icons/nextjs.svg" alt="nextjs" />
            <img src="/icons/react.svg" alt="react" />
            <img src="/icons/angular.svg" alt="angular" />
          </ul>
        </div>
      </main>
      <footer className={Style.footer}>
        <p>Desenvolvido por: <a href="https://github.com/talespalma">talespalma</a></p>
      </footer>
    </div>);
}
