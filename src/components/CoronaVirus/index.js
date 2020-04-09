import React, { useState, useEffect } from "react"

// External Components
import { api, apiSecretaria } from "../../services/covid/api"
import moment from "moment"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"

// Icons
import Globe from "../../images/svg-icons/globe.svg"
import { ArrowRight } from "@styled-icons/feather/ArrowRight"
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"

// Content
import links from "../MenuLinks/content"

// Styles
import {
  TemplateWrapper,
  TemplateFeatures,
  TemplateDiv,
  Button,
  Span,
} from "./styled"

// Internal Components
import PageTitle from "../PageTitle"
import SelectState from "./components/SelectState"
import TemplateCountryAndState from "./components/TemplateCountryAndState"
import TemplateCities from "./components/TemplateCities"

const CoronaVirus = ({ title, description }) => {
  const url = "https://guilhermegomes.dev/casos-covid19/"

  const [actualState, setActualState] = useState("PE")
  const [status, setStatus] = useState({})
  const [statusPE, setStatusPE] = useState({})
  const [statusMunicipios, setStatusMunicipios] = useState({})
  const [loading, setLoading] = useState(true)
  const [loadingState, setLoadingState] = useState(true)
  const [loadingCity, setLoadingCity] = useState(true)

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

    loadStatus()
    loadStatusMunicipios(actualState)
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

      <TemplateWrapper className="social-links" style={{ marginTop: 40 }}>
        <p className="share-button text-share">Compartilhe em: </p>
        <WhatsappShareButton
          className="share-button"
          url={url}
          title={title}
          separator=": "
        >
          <WhatsappIcon size={35} borderRadius={3} />
        </WhatsappShareButton>
        <LinkedinShareButton
          className="share-button"
          url={url}
          title={`${title} no Brasil e seus estados`}
          source="Guilherme Gomes"
          summary={description}
        >
          <LinkedinIcon size={35} borderRadius={3} />
        </LinkedinShareButton>
        <FacebookShareButton
          className="share-button"
          url={url}
          quote={description}
        >
          <FacebookIcon size={35} borderRadius={3} />
        </FacebookShareButton>
        <TwitterShareButton className="share-button" url={url} title={title}>
          <TwitterIcon size={35} borderRadius={3} />
        </TwitterShareButton>
      </TemplateWrapper>

      <TemplateWrapper>
        <Button
          cover
          direction="left"
          bg="#242424"
          duration={0.6}
          to="/casos-covid19/informacoes-importantes"
        >
          <Span>Informações Importantes</Span>
          <ArrowRight />
        </Button>
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
            datetime={moment(status.updated_at).format("DD/MM/YYYY HH:mm")}
          />
        )}
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
