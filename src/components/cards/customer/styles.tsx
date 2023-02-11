import styled from 'styled-components'
import { Inter, Roboto } from '@next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })
const inter = Inter({ subsets: ['latin'] })

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
    span {
      color: #ffb906;
      font-size: 48px;
      line-height: 48px;
      font-family: ${roboto.style.fontFamily};
      font-weight: 500;
    }
    p {
      font-family: ${inter.style.fontFamily};
      color: #bfbfbf;
      font-size: 14px;
      line-height: 150%;
      font-weight: 400;
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
        font-family: ${inter.style.fontFamily};
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        color: #fff;
      }
      span {
        font-family: ${roboto.style.fontFamily};
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
