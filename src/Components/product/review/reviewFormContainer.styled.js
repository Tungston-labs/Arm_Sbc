import styled from "styled-components";
import { Collapse } from "antd";

export const StyledCollapse = styled(Collapse)`
  border: none;

  .ant-collapse-item {
    border: none !important;
  }

  .ant-collapse-header {
    background: #110324;
    color: #fff !important;
    font-size: 14px;
    font-weight: 400;
    padding: 12px 16px !important;
    border-radius: 0.5rem !important;
    border-bottom: none !important;
    align-items: center !important;
    @media (width >= 1280px) {
      font-size: 1rem;
      svg {
        height: 0.8rem;
        width: 0.8rem;
      }
    }
    @media (width >= 1536px) {
      font-size: 1.5rem;
      svg {
        height: 1.2rem;
        width: 1.2rem;
      }
    }
    @media (width >= 2560px) {
      font-size: 2rem;
      border-radius: 1rem !important;
      padding: 1.5rem !important;
      svg {
        height: 1.6rem;
        width: 1.6rem;
      }
    }
    @media (width >= 3840px) {
      font-size: 3.5rem;
      border-radius: 2rem !important;
      padding: 2.5rem !important;
      margin-bottom: 2rem;
      svg {
        height: 2.6rem;
        width: 2.6rem;
      }
    }
  }

  .ant-collapse-expand-icon {
    color: #fff !important;
  }

  .ant-collapse-content {
    background: none !important;
    color: white;
    border-top: none !important;
  }
`
export const ErrorMessage = styled.p`
  color: #b70505;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;

  @media (min-width: 1280px) {
    font-size: 1rem;
  }

  @media (min-width: 1536px) {
    font-size: 1.2rem;
  }

  @media (min-width: 2560px) {
    font-size: 1.5rem;
  }

  @media (min-width: 3840px) {
    font-size: 2rem;
  }
`;;
