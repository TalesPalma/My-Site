import { Card } from "@/components/card";
import Style from "./page.module.css";
import Link from "next/link";
import { AboutMeCard } from "@/components/aboutMeCard";

export default function Home() {
  return (
    <div className={Style.container}>
      <header className={Style.header}>
        <h1>Seja bem-vindo!</h1>
        <div className={Style.titleHeader}>
          <Card />
          <div className={Style.description}>
            <AboutMeCard />
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
