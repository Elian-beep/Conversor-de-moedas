import React from "react"
import Conversor from "./components/Conversor"

export default function Home() {
  return (
    <>
    <div className="App">
      <Conversor moedaA="USD" moedaB="BRL" chave="usd_brl" ></Conversor>

      <Conversor moedaA="USD" moedaB="EU" chave="usd_eu" ></ Conversor>
    </div>
    </>
  )
}
