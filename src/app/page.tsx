import { Card } from "@/components/card";
import Style from "./page.module.css";

export default function Home() {
  return (
    <div className={Style.container}>
      <header className={Style.header}>
        <h1>Bem vindo ao meu site</h1>
      </header>
      <Card />
    </div>
  );
}
