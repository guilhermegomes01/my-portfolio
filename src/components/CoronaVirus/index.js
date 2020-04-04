import React, { useState, useEffect } from "react"

// External Components
import { api, apiSecretaria } from "../../services/covid/api"
import moment from "moment"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"

// Icons
import { Globe } from "@styled-icons/fa-solid/Globe"

// Content
import links from "../MenuLinks/content"

// Internal Components
import PageTitle from "../PageTitle"
import SelectState from "./components/SelectState"
import { TemplateWrapper, TemplateFeatures, TemplateDiv } from "./styled"
import TemplateCountryAndState from "./components/TemplateCountryAndState"
import TemplateCities from "./components/TemplateCities"

const CoronaVirus = () => {
  const [actualState, setActualState] = useState("PE")
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

  async function loadStatusPE(state) {
    const response = await api.get(`/brazil/uf/${state}`)
    setLoading(false)
    setStatusPE(response.data)
  }

  async function loadStatusMunicipios(state) {
    const response = await apiSecretaria.get(
      `/data?is_last=True&state=${state}`
    )
    setStatusMunicipios(response.data)
    setLoadingCity(false)
  }

  useEffect(() => {
    async function loadStatus() {
      const response = await api.get(`/brazil`)
      setStatus(response.data.data)
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
    loadStatusMunicipios(actualState)
    // loadStatusDate()
    loadStatusPE(actualState)
  }, [actualState])

  const handleChange = event => {
    setActualState(event.target.value)
  }

  const { uf, state, cases, deaths, suspects, refuses, datetime } = statusPE

  return (
    <>
      <PageTitle>
        <Globe />
        <h2>{links[4].label}</h2>
      </PageTitle>
      <TemplateWrapper style={{ marginTop: 40 }}>
        <p style={{ textAlign: "center", lineHeight: "23px" }}>
          Obs.: Os casos por município de um estado pode divergir do total no
          estado, pois nem sempre as Secretarias divulgam todos os municípios em
          que aconteceram casos.
        </p>
      </TemplateWrapper>
      <TemplateWrapper className="first">
        {loading ? (
          <TemplateDiv>
            <div></div>
            <div></div>
          </TemplateDiv>
        ) : (
          <TemplateCountryAndState
            title="Casos no Brasil"
            confirmed={status.confirmed}
            deaths={status.deaths}
            suspects={status.recovered}
            datetime={moment(status.updated_at).format("D/MM/YYYY HH:mm")}
          />
        )}

        {/* <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="Casos" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" trokeDasharray="5 5"/>
        <YAxis />
        <Tooltip />
      </LineChart> */}
      </TemplateWrapper>
      <TemplateWrapper className="select-state">
        <SelectState value={actualState} onChange={handleChange} />
      </TemplateWrapper>

      <TemplateWrapper className="cities">
        {loadingCity ? (
          <TemplateDiv>
            <div></div>
            <div></div>
          </TemplateDiv>
        ) : (
          <>
            <TemplateCountryAndState
              isState
              title={`Casos ${state}`}
              confirmed={cases}
              deaths={deaths}
              suspects={suspects}
              refuses={refuses}
              datetime={moment(datetime).format("DD/MM/YYYY HH:mm")}
            />
            {statusMunicipios.results.map(
              (cities, index) =>
                cities.city !== "Importados/Indefinidos" &&
                cities.city !== null && (
                  <TemplateCities
                    key={index}
                    title={`${cities.city}`}
                    confirmed={cities.confirmed}
                    deaths={cities.deaths}
                    datetime={moment(cities.date).format("DD/MM/YYYY")}
                  />
                )
            )}
          </>
        )}
      </TemplateWrapper>
      <TemplateFeatures>
        <h3>Mais funcionalidades em Desenvolvimento...</h3>
        <p>Fonte: Secretária de Saúde Estaduais e Ministério da Saúde</p>
      </TemplateFeatures>
    </>
  )
}

export default CoronaVirus
