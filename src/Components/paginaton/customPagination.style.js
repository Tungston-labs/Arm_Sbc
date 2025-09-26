import { createGlobalStyle } from "styled-components";

export const PaginationStyles = createGlobalStyle`
  .ant-pagination-item {
    background: #fff !important;
    color: #8A38F5 !important;
    border: none !important;
    transition: background 0.2s, color 0.2s;
  }
  .ant-pagination-item a {
    color: #8A38F5 !important;
  }
  .ant-pagination-item:hover:not(.ant-pagination-item-active) {
    background: #f0f0f0 !important;
    color: #8A38F5 !important;
  }
  .ant-pagination-item:hover:not(.ant-pagination-item-active) a {
    color: #8A38F5 !important;
  }
  .ant-pagination-item-active,
  .ant-pagination-item-active:focus,
  .ant-pagination-item-active:hover {
    background: #8A38F5 !important;
    color: #fff !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  .ant-pagination-item-active a,
  .ant-pagination-item-active:focus a,
  .ant-pagination-item-active:hover a {
    color: #fff !important;
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    background: transparent !important;
    color: #4C4747 !important;
    border: none !important;
  }
  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    color: #4C4747 !important;
    background: transparent !important;
    border: none !important;
  }
  .ant-pagination-jump-prev .ant-pagination-item-container,
  .ant-pagination-jump-next .ant-pagination-item-container {
    color: #4C4747 !important;
  }
  .ant-pagination-jump-prev .ant-pagination-item-ellipsis,
  .ant-pagination-jump-next .ant-pagination-item-ellipsis {
    color: #4C4747 !important;
  }
  
  .ant-pagination-item,
  .ant-pagination-item-link {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }

     @media (min-width: 2560px) {
    .ant-pagination {
      font-size: 2.2rem !important;
    }
    .ant-pagination-item,
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      font-size: 2rem !important;
      min-width: 2rem !important;
      height: 4rem !important;
      line-height: 4rem !important;
      padding: 0 2rem !important;
    }
    .ant-pagination-item a {
      font-size: 2rem !important;
      line-height: 4rem !important;
      min-width: 2rem !important;
      height: 4rem !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ant-pagination-item-ellipsis {
      font-size: 2rem !important;
      line-height: 4rem !important;
      min-width: 2rem !important;
      height: 4rem !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ant-pagination-item-link {
      font-size: 2rem !important;
      min-width: 2rem !important;
      height: 4rem !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ant-pagination-options {
      font-size: 2rem !important;
    }
  }
     @media (min-width: 3840px) {
    .ant-pagination {
      font-size: 3.2rem !important;
    }
    .ant-pagination-item,
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      font-size: 3rem !important;
      min-width: 3rem !important;
      height: 5rem !important;
      line-height: 5rem !important;
      padding: 0 2rem !important;
    }
    .ant-pagination-item a {
      font-size: 3rem !important;
      line-height: 5rem !important;
      min-width: 3rem !important;
      height: 5rem !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ant-pagination-item-ellipsis {
      font-size: 3rem !important;
      line-height: 5rem !important;
      min-width: 3rem !important;
      height: 5rem !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ant-pagination-item-link {
      font-size: 3rem !important;
      min-width: 3rem !important;
      height: 5rem !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ant-pagination-options {
      font-size: 3rem !important;
    }
  }
`;
