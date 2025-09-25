import styled from "styled-components";

export const Container = styled.div`
  background-color: #0e0619;
  width: 100%;
  padding-bottom: 40px;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px; 
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 20px 30px;
  color: white;

  @media (max-width: 1024px) {
    font-size: 24px;
    padding: 20px 30px;
  }

  @media (min-width: 280px) and (max-width: 768px) {
    font-size: 8px;
    padding: 2px 10px;
  }

  @media (min-width: 2500px) and (max-width: 4200px) {
    min-width: 100px;
    font-size: 42px;
  }
`;


export const RowBox = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(${(p) => p.count}, minmax(220px, 1fr));
  border: 1px solid #fff;
  border-radius: 8px;
  margin: 16px 30px;
    @media (max-width: 768px) {
        border: none;

    grid-template-columns: 60px repeat(${(p) => p.count}, minmax(120px, 1fr));
  }
  @media (max-width: 1024px) {
    grid-template-columns: 120px repeat(${(p) => p.count}, minmax(200px, 1fr));
  }
  @media (max-width: 2600px) {
    grid-template-columns: 180px repeat(${(p) => p.count}, minmax(200px, 1fr));
  }
  @media (max-width: 1600px) {
    grid-template-columns: 150px repeat(${(p) => p.count}, minmax(200px, 1fr));
  }
  @media (max-width: 4000px) {
    grid-template-columns: 230px repeat(${(p) => p.count}, minmax(200px, 1fr));
  }
`;

export const RowCell = styled.div`
  width: 100%;
  overflow-x: scroll;
`;
export const Cell = styled.div`
  position: relative;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 10px;
    bottom: 10px;
    width: 1px;
    background: #fff;
  }

  &:last-child::after {
    content: none;
    border-top: none;

  }

  border-top: 1px solid #fff;

  &:nth-child(-n + ${(p) => p.count + 1}) {
    border-top: none;
  }
`;


export const Button = styled.button`
  background-color: #8a38f5;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  color: white;
  padding: 10px 32px;
  font-family: "Roboto", sans-serif;
`;

export const FeatureName = styled(Cell)`
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 24px;            

  @media (max-width: 3800px) { font-size: 22px; }
  @media (max-width: 2600px) { font-size: 18px; }
  @media (max-width: 1600px) { font-size: 16px; }
  @media (max-width: 1024px) { font-size: 12px; }
  @media (max-width: 768px)  { font-size: 10px; }
`;


export const ProductInfoCell = styled(Cell)`
  text-align: center;
    position: relative;
img {
  margin-bottom: 12px;  
  width: 230px;

  @media (max-width: 2600px) { width: 200px; }
  @media (max-width: 1500px) { width: 160px; }
  @media (max-width: 1024px) { width: 100px; }
  @media (max-width: 768px)  { width: 40px; }
}


p {
  color: white;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  font-size: 24px;                       

  @media (max-width: 3800px) { font-size: 22px; }
  @media (max-width: 2600px) { font-size: 16px; }
  @media (max-width: 1600px) { font-size: 12px; }
  @media (max-width: 1100px) { font-size: 10px; }
  @media (max-width: 768px)  { font-size: 8px;  }
}

  button {
  color: white;
  padding: 8px;
  margin-top: 8px;
  width: 100px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  background-color: #8a38f5;
  font-family: "Roboto", sans-serif;
   
  @media (max-width: 3800px) { font-size: 22px; }
  @media (max-width: 2600px) { font-size: 16px; }
  @media (max-width: 1600px) { font-size: 12px; }
  @media (max-width: 1100px) { font-size: 10px; }
  @media (max-width: 768px)  { font-size: 8px;  }
}

  
`;

export const FeatureCell = styled(Cell)`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1600px) {
    font-size: 16px;
  }
  @media (min-width: 2600px) {
    font-size: 22px;
  }
  @media (min-width: 2600px) {
    font-size: 24px;
  }
`;
export const ReadMoreButton = styled.button`
   color: white;
  padding: 10px;
  width: 200px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  background-color: #8a38f5;
  font-family: "Roboto", sans-serif;
  @media (max-width: 768px) {
    font-size: 8px;
  }
  @media (min-width: 2500px) and (max-width: 4200px) {
    font-size: 32px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
export const RemoveButton = styled.div`
  position: absolute;
  top: 18px;
  right: 28px;
  border: none;
  width: 64px;
  height: 64px;
  color: aliceblue;
  font-size: 32px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;



`;