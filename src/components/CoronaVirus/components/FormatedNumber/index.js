import React from 'react'
import NumberFormat from 'react-number-format';

import {
    TemplateItem,
  } from "../TemplateCountryAndState/styled"

const FormatedNumber = ({ title, value }) => {
    return (
        <TemplateItem><span>{title}</span><NumberFormat value={value} displayType="text" thousandSeparator={`.`} decimalSeparator={`,`} /></TemplateItem>
    )
}

export default FormatedNumber