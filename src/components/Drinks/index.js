import React, { useState } from "react"

const Drinks = () => {
  const [barato, setBarato] = useState("")
  const [valueLitro, setValueLitro] = useState({
    name: "",
    value: 0,
    valuePerLitro: 0,
  })
  const [valueLatao, setValueLatao] = useState({
    name: "",
    value: 0,
    valuePerLitro: 0,
  })
  const [valueLata, setValueLata] = useState({
    name: "",
    value: 0,
    valuePerLitro: 0,
  })

  const prices = [valueLitro, valueLatao, valueLata]
  const values = []

  const test = () => {
    prices.filter(price => {
      if (price.valuePerLitro == values[0]) {
        setBarato(price.name)
      }
    })
  }

  return (
    <>
      <h1>Hello</h1>
      <input
        type="text"
        value={valueLitro.value}
        onChange={e =>
          setValueLitro({
            name: "Litro",
            value: e.target.value,
            valuePerLitro: parseFloat(
              ((e.target.value * 1000) / 1000).toFixed(2)
            ),
          })
        }
      />
      <input
        type="text"
        value={valueLatao.value}
        onChange={e =>
          setValueLatao({
            name: "Latão",
            value: e.target.value,
            valuePerLitro: parseFloat(
              ((e.target.value * 1000) / 550).toFixed(2)
            ),
          })
        }
      />
      <input
        type="text"
        value={valueLata.value}
        onChange={e =>
          setValueLata({
            name: "Lata",
            value: e.target.value,
            valuePerLitro: parseFloat(
              ((e.target.value * 1000) / 350).toFixed(2)
            ),
          })
        }
      />
      <button onClick={test}>Calcular</button>

      {prices.map(price => {
        values.push(price.valuePerLitro)
        values.sort((a, b) => a - b)
      })}

      <h2>{barato}</h2>
    </>
  )
}

export default Drinks
