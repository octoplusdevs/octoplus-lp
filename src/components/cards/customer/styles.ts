import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px;
  background-color: #232529;
  width: 100%;
  height: 100%;
  height: 285px;
  max-width: 352px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: fit-content;
    span {
      color: #ffb906;
      font-size: 48px;
      font-family: Roboto, sans-serif;
      font-weight: 500;
      display: inline;
    }
    p {
      font-family: Inter, sans-serif;
      color: #bfbfbf;
      font-size: 14px;
      line-height: 150%;
      font-weight: 400;
      margin-top: -24px;
    }
  }
  .avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    .avatar-description {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;
      h3 {
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        color: #fff;
      }
      span {
        font-family: Roboto, sans-serif;
        font-size: 14px;
        line-height: 14px;
        font-weight: 400;
        color: #bfbfbf;
      }
    }
    .avatar-image {
      border-radius: 50%;
      background-color: #ffb906;
      padding: 4px;
      max-width: 48px;
      max-height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        border-radius: 50%;
        border: 1px solid #000;
        width: 100%;
        height: 100%;
      }
    }
  }
`
