import { Collapse } from "antd";
import styled from "styled-components";

const { Panel } = Collapse;

export const StyledCollapse = styled(Collapse)`
  flex: 1;
 
  background: transparent;
  border: none;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 32px;
  }
  @media (min-width: 1920px) {
    margin-top: 40px;
  }
  @media (min-width: 3840px) {
    margin-top: 60px;
  }

  .ant-collapse-item {
    border-radius: 12px;
     width: 95%;
    margin-bottom: 20px;
    border-top: none;
    overflow: hidden;
    border-bottom: none;

    @media (min-width: 1920px) {
      margin-bottom: 24px;
      border-radius: 16px;
    }
    @media (min-width: 3840px) {
      margin-bottom: 32px;
      border-radius: 20px;
    }
  }

  .ant-collapse-header {
    color: #4caf50;
    background: #333;
    font-weight: 600;
    font-size: 16px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      font-size: 18px;
      padding: 16px 20px;
    }
    @media (min-width: 1920px) {
      font-size: 1.5;
      padding: 20px 24px;
    }
    @media (min-width: 3840px) {
      font-size: 2rem;
      padding: 28px 32px;
    }

    .ant-collapse-arrow {
      margin-right: 0;
      transform: scale(1.1);

      @media (min-width: 1920px) {
        transform: scale(1.3);
      }
      @media (min-width: 3840px) {
        transform: scale(1.5);
      }
    }
  }

  .ant-collapse-content {
    background: #030206;
    padding: 16px;
    color: white;

    @media (min-width: 768px) {
      padding: 20px;
    }
    @media (min-width: 1920px) {
      padding: 28px;
    }
    @media (min-width: 3840px) {
      padding: 36px;
    }
  }

  .ant-input {
    background: #2b2534;
    border: 1px solid #2b2534;
    color: rgba(255, 255, 255, 1);
    padding: 8px 12px;
    border-radius: 6px;
    width: 100%;
    font-size: 14px;
      &::placeholder {
        color: #FFFFFF;
        opacity: 1;
      }
      &::-webkit-input-placeholder {
        color: #FFFFFF;
        opacity: 1;
      }
      &::-moz-placeholder {
        color: #FFFFFF;
        opacity: 1;
      }
      &:-ms-input-placeholder {
        color: #FFFFFF;
        opacity: 1;
      }
    @media (min-width: 768px) {
      font-size: 16px;
      padding: 10px 14px;
    }
    @media (min-width: 1920px) {
      font-size: 18px;
      padding: 12px 16px;
    }
    @media (min-width: 3840px) {
      font-size: 20px;
      padding: 16px 20px;
    }
  }
`;

export const StyledPanel = styled(Panel)``;
