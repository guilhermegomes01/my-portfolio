import React, { useState, useEffect } from "react"
import { api, apiSecretaria } from "../../services/covid/api"
import moment from "moment"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"

import links from "../MenuLinks/content"
import PageTitle from "../PageTitle"
import { Globe } from "@styled-icons/fa-solid/Globe"

import { TemplateWrapper, TemplateFeatures, TemplateDiv } from "./styled"
import TemplateCases from "./components/TemplateCases"
import TemplateSecretary from "./components/TemplateSecretary"

const CoronaVirus = () => {
  const [status, setStatus] = useState({})
  const [statusPE, setStatusPE] = useState({})
  const [statusMunicipios, setStatusMunicipios] = useState({})
  // const [statusDate, setStatusDate] = useState('')
  // const [statusDate2, setStatusDate2] = useState('')
  // const [statusDate3, setStatusDate3] = useState('')
  const [loading, setLoading] = useState(true)
  const [loadingCity, setLoadingCity] = useState(true)
  // const data = [
  //   { name: "27/03", Casos: statusDate },
  //   { name: "28/03", Casos: statusDate2, pv: 2200, amt: 2200 },
  //   { name: "29/03", Casos: statusDate3, pv: 2400, amt: 2400 },
  // ]

  useEffect(() => {
    async function loadStatus() {
      const response = await api.get(`/brazil`)
      setStatus(response.data.data)
    }

    async function loadStatusPE() {
      const response = await api.get(`/brazil/uf/pe`)
      setStatusPE(response.data)
      setLoading(false)
    }

    async function loadStatusMunicipios() {
      const response = await apiSecretaria.get(`/data?is_last=True&state=PE`)
      console.log(response.data)
      setStatusMunicipios(response.data)
      setLoadingCity(false)
    }

    // async function loadStatusDate() {
    //   const response = await api.get(`/brazil/20200327`)
    //   const secondResponse = await api.get(`/brazil/20200328`)
    //   const thirdResponse = await api.get(`/brazil/20200329`)
    //   response.data.data.map(res => res.uf === 'PE' && setStatusDate(res.cases));
    //   secondResponse.data.data.map(res => res.uf === 'PE' && setStatusDate2(res.cases));
    //   thirdResponse.data.data.map(res => res.uf === 'PE' && setStatusDate3(res.cases));

    // }
    loadStatus()
    loadStatusMunicipios()
    // loadStatusDate()
    loadStatusPE()
  }, [])

  const { uf, state, cases, deaths, suspects, refuses, datetime } = statusPE

  return (
    <>
      <PageTitle>
        <Globe />
        <h2>{links[4].label}</h2>
      </PageTitle>
      <TemplateWrapper className="first">
        {loading ? (
          <TemplateDiv>
            <div></div>
            <div></div>
          </TemplateDiv>
        ) : (
          <>
            <TemplateCases
              title="Casos no Brasil"
              confirmed={status.cases}
              deaths={status.deaths}
              suspects={status.recovered}
              refuses={status.confirmed}
              datetime={moment(status.updated_at).format("D/MM/YYYY HH:mm")}
            />
            <TemplateCases
              isState
              title="Casos em Pernambuco"
              confirmed={cases}
              deaths={deaths}
              suspects={suspects}
              refuses={refuses}
              datetime={moment(datetime).format("D/MM/YYYY HH:mm")}
            />
          </>
        )}

        {/* <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="Casos" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" trokeDasharray="5 5"/>
        <YAxis />
        <Tooltip />
      </LineChart> */}
      </TemplateWrapper>
      <TemplateWrapper className="cities">
        {loadingCity ? (
          <TemplateDiv>
            <div></div>
            <div></div>
          </TemplateDiv>
        ) : (
          <>
            {statusMunicipios.results.map(
              cities =>
                cities.city !== "Importados/Indefinidos" &&
                cities.city !== null && (
                  <TemplateSecretary
                    title={`${cities.city}`}
                    confirmed={cities.confirmed}
                    deaths={cities.deaths}
                    datetime={moment(cities.date).format("D/MM/YYYY")}
                  />
                )
            )}
          </>
        )}
      </TemplateWrapper>
      <TemplateFeatures>
        <h3>Mais funcionalidades em Desenvolvimento...</h3>
        <p>
          Em breve: Dados de outros Estados e suas respectivas cidades que
          contenham ao menos 1 caso confirmado.
        </p>
      </TemplateFeatures>
    </>
  )
}

export default CoronaVirus
