import styled from 'styled-components'

export const HomeIntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 5.75rem 0;
`

export const TitleContainer = styled.div`
  h1 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    max-width: 36.75rem;
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;
`

export const BenefitItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    text-wrap: nowrap;
  }
`
