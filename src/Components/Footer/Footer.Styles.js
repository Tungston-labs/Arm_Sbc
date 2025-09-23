import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #0E0619; 
  color: #fff;
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (max-width: 900px) {
    background: #170B27; 
  }

  @media (min-width: 3840px) {
    padding: 6rem 12rem;
    font-size: 1.5rem;
  }

  @media (min-width: 7680px) {
    font-size: 2rem;
    padding: 8rem 16rem;
  }
`;




export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; 
  margin-bottom: 0.5rem;

  @media (max-width: 900px) {
    gap: 0.5rem;
   margin-bottom: 0.2rem;
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    gap: 0.6rem;
   margin-bottom: 0.2rem;
  }

  @media (min-width: 1201px) and (max-width: 1920px) {
    gap: 0.7rem;
   margin-bottom: 0.2rem;
  }

  @media (min-width: 1921px) and (max-width: 3840px) {
    gap: 0.8rem;
   margin-bottom: 0.2rem;
  }

  @media (min-width: 3841px) and (max-width: 7680px) {
    gap: 0.9rem;
   margin-bottom: 0.2rem;
  }

  @media (min-width: 7681px) {
    gap: 1rem;
   margin-bottom: 0.2rem;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  object-fit: contain;

  @media (max-width: 900px) {
    width: 7rem;
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    width: 8rem;
  }

  @media (min-width: 1201px) and (max-width: 1920px) {
    width: 10rem;
  }

  @media (min-width: 1921px) and (max-width: 3840px) {
    width: 12rem;
  }

  @media (min-width: 3841px) and (max-width: 7680px) {
    width: 14rem;
  }

  @media (min-width: 7681px) {
    width: 100px;
  }
`;



export const Heading = styled.h3`
  font-size: 1.8rem; 
  font-weight: bold;
  margin-bottom: 0.1rem;
  font-family: 'Roboto';
  @media (min-width: 600px) {
    font-size: 1.5rem;
  }

  @media (min-width: 900px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }

  @media (min-width: 1920px) {
    font-size: 2.5rem;
  }

  @media (min-width: 3840px) {
    font-size: 2.8rem;
  }

  @media (min-width: 7680px) {
    font-size: 3.2rem;
  }
`;


export const Subtitle = styled.p`
  max-width: 600px;
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
  font-family: 'Roboto';

  @media (min-width: 3840px) {
    font-size: 1.5rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const Icon = styled.a`
  background: #8c52ff;
  color: #fff;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #8c52ff;
  }

  @media (min-width: 3840px) {
    font-size: 3rem;
    padding: 1rem;
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1.5rem; 

  a {
    color: #fff;
    text-decoration: none;
    opacity: 0.8;
    font-size: 0.85rem; 

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
    @media (min-width: 768px) {
      font-size: 0.9rem;
    }

    @media (min-width: 1200px) {
      font-size: 1rem;
    }

    @media (min-width: 1920px) {
      font-size: 1.2rem;
    }

    @media (min-width: 3840px) {
      font-size: 1.2rem;
    }

    @media (min-width: 7680px) {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    gap: 3rem;
  }

  @media (min-width: 1920px) {
    gap: 4rem;
  }

  @media (min-width: 3840px) {
    gap: 5rem;
  }

  @media (min-width: 7680px) {
    gap: 2.5rem;
  }
`;

export const CopyRight = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  @media (min-width: 1920px) {
    font-size: 1.1rem;
  }

  @media (min-width: 3840px) {
    font-size: 1.2rem;
  }

  @media (min-width: 7680px) {
    font-size: 1.4rem;
  }
`;
