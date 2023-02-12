import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  /* background-color: #0c0c0c; */
  position: sticky;
  top: 0;
  transition: all 0.8s ease;
  .element {
    background-color: #000;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: fit-content;
    gap: 24px;
    .image {
      background-color: #1f1f1f;
      width: 800px;
      height: 415px;
      border-radius: 12px;
    }
    .description {
      display: flex;
      justify-content: flex-start;
      gap: 24px;
      flex-direction: column;
      .title {
        h2 {
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 48px;
          line-height: 58px;
          color: #ffffff;
        }
        p {
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 16px;
          color: #ffffff;
        }
      }
    }
    button {
      padding: 18px 24px;
      background-color: #0688ff;
      border: none;
      cursor: pointer;
      color: #fff;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 16px;
      width: fit-content;
      border-radius: 4px;
    }
  }
`
