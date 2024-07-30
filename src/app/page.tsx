import { Card } from "@/components/card";
import Style from "./page.module.css";
import { AboutMeCard } from "@/components/aboutMeCard";
import { Dates, Tecnology } from "@/dates/dates";



export default function Home() {
  const dates = new Dates();
  const listDirectiorisImg: Tecnology[] = dates.listMyTecnologies;
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
          <h1>Tecnologia quê tenho dominio</h1>
          <ul className={Style.icons}>
            {
              listDirectiorisImg.map(({ src, alt }) => {
                return <img src={src} alt={alt} key={alt} />
              })
            }
          </ul>
        </div>
      </main>
    </div>);
}
