import styled from "styled-components"
import GSWrapper from "../components/container"
import { FaSoundcloud, FaInstagram } from "react-icons/fa"

const Wrapper = styled.main`
  background: #eee;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: left;
  min-height: 100vh;
  flex-direction: column;
  background-color: #f5f5f5;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%233c3c3c' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
  @media (max-width: 600px) {
    h1 {
      font-size: 3em;
    }
    h2 {
      font-size: 2.5em;
    }
    h3 {
      font-size: 2em;
    }
  }
`

const Content = styled.section`
  width: 970px;
  margin: auto;
`

const H1 = styled.h1`
  font-size: 3.5em;
  font-family: Helvetica, sans-serif;
  color: #23282d;
`

const H2 = styled.h2`
  font-size: 3em;
  font-family: Helvetica, sans-serif;
  color: #23282d;
  padding-top: 20px;
`

const H3 = styled.h3`
  font-size: 2.5em;
  font-family: Helvetica, sans-serif;
  color: #23282d;
  padding-top: 20px;
`

const Special = styled.span`
  border-bottom: 5px solid #32dbca;
`

const SpecialLink = styled.a`
  text-decoration: none;
  color: #23282d;
  &:hover {
    border-bottom: 5px solid #32dbca;
    cursor: pointer;
  }
`

const SC = styled(FaSoundcloud)`
  color: #23282d;
  font-size: 3em;
`

const IG = styled(FaInstagram)`
  color: #23282d;
  font-size: 3em;
`
const IconsLink = styled.a`
  margin: 5px;
  text-decoration: none;
  &:hover {
    background: #32dbca;
    cursor: pointer;
  }
`

function HomePage() {
  return (
    <div>
      <GSWrapper />
      <Wrapper>
        <Content>
          <H1>Welcome to:</H1>
          <H1>Improv Sessions</H1>
          <H2>
            <Special>Music coming soon.</Special>
          </H2>
          <H3>
            <SpecialLink href="https://soundcloud.com/improvsesh/reset-v2/s-trG5w">
              Check my latest track in the mean time.
            </SpecialLink>
          </H3>
          <IconsLink href="https://soundcloud.com/improvsesh">
            <SC />
          </IconsLink>
          <IconsLink href="https://www.instagram.com/improvsessions/">
            <IG />
          </IconsLink>
        </Content>
      </Wrapper>
    </div>
  )
}
export default HomePage
