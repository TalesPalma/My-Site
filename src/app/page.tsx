import { Card } from "@/components/card";
import Style from "./page.module.css";

export default function Home() {
  return (
    <div className={Style.container}>
      <header className={Style.header}>
        <Card />
        <h1>Bem vindo ao meu site</h1>

        {

          //Colocar um apresentacao mais bonita e curto sobre mim aqui em cima
          // Colocar uma parte para fazer download do meu CV
          // Colocar uma apresentacao das tecnologias que uso e o tempo de experiencia
        }




      </header>
    </div>
  );
}
