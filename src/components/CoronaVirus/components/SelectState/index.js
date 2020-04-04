import React from "react"

// Styled Components
import { Label, Select, Option } from "./styled"

// Mock Content
import states from "./content"

const SelectState = ({ value, onChange }) => (
  <Label>
    Exibindo resultados do estado:
    <Select value={value} onChange={onChange}>
      {states.map(({ name, uf }, index) => (
        <Option key={index} value={uf}>{name}</Option>
      ))}
    </Select>
  </Label>
)

export default SelectState
