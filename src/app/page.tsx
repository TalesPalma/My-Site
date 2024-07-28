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
            <a href="/Curriculo.pdf" className={Style.buttonDownload} download>Download CV</a>

          </div>
        </div>
      </header>
      <main className={Style.main}>
        <div className={Style.divider}>        <h1>Tecnologias que domino</h1>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Rust</li>
            <li>Java</li>
            <li>Spring</li>
            <li>Rocket.rs</li>
            <li>Next.js</li>
            <li>React</li>
            <li>React Native</li>
            <li>Kotlin</li>
            <li>Jetpack Compose</li>
          </ul>
        </div>
      </main>
      <footer className={Style.footer}>
        <p>Desenvolvido por: <a href="https://github.com/talespalma">talespalma</a></p>
      </footer>
    </div>);
}
