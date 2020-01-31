import styled from "styled-components"
import GSWrapper from "../components/container"

const Wrapper = styled.main`
  background: #eee;
  padding: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
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

function HomePage() {
  return (
    <div>
      <GSWrapper />
      <Wrapper>
        <H1>Welcome to:</H1>
        <H1>Improv Sessions</H1>
        <H2>
          <Special>Music coming soon.</Special>
        </H2>
        <H3>
          <SpecialLink href="https://soundcloud.com/improvsesh/reset-v2/s-trG5w">
            Check this out in the mean time.
          </SpecialLink>
        </H3>
      </Wrapper>
    </div>
  )
}
export default HomePage
