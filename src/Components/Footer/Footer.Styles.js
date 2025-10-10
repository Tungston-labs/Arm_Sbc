import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #170B27; 
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
   margin-bottom: 2rem;
  }

  @media (min-width: 1201px) and (max-width: 1920px) {
    gap: 0.7rem;
   margin-bottom: 2rem;
  }

  @media (min-width: 1921px) and (max-width: 3840px) {
    gap: 0.8rem;
   margin-bottom: 3rem;
  }

  @media (min-width: 3841px) and (max-width: 7680px) {
    gap: 0.9rem;
   margin-bottom: 3rem;
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
    width: 15rem;
  }

  @media (min-width: 1921px) and (max-width: 3840px) {
    width: 18rem;
  }

  @media (min-width: 3841px) and (max-width: 7680px) {
    width: 20rem;
  }

 
`;



export const Heading = styled.h3`
  font-size: 1.8rem; 
  font-weight: bold;
  margin-bottom: 0.5rem;
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
 @media (min-width: 1440px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1920px) {
    font-size: 2.8rem;
  }

  @media (min-width: 3840px) {
    font-size: 3rem;
  }

  @media (min-width: 7680px) {
    font-size: 3.2rem;
  }
`;


export const Subtitle = styled.p`
  font-family: 'Roboto';
  opacity: 0.8;
  margin-bottom: 1.5rem;
  text-align: center;
  max-width: 100%;

  /* Extra small screens (mobile) */
  @media (max-width: 600px) {
    font-size: 0.8rem;
    max-width: 90%;
  }

  /* Small screens (tablet) */
  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 0.9rem;
   
  }

  /* Medium screens (desktop) */
  @media (min-width: 901px) and (max-width: 1200px) {
    font-size: 1rem;
   
  }

  /* Large screens */
  @media (min-width: 1201px) and (max-width: 1920px) {
    font-size: 1.2rem;
   
  }

  /* Extra large screens (4K) */
  @media (min-width: 1921px) and (max-width: 3840px) {
    font-size: 1.5rem;

  }

  /* Ultra large screens (8K) */
  @media (min-width: 3841px) {
    font-size: 2rem;

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
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #8c52ff;
  }


  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }


  @media (min-width: 601px) and (max-width: 900px) {
    font-size: 1.3rem;
    padding: 0.7rem;
  }


  @media (min-width: 901px) and (max-width: 1920px) {
    font-size: 1.5rem;
    padding: 0.8rem;
  }


  @media (min-width: 1921px) and (max-width: 3840px) {
    font-size: 3rem;
    padding: 1rem;
  }


  @media (min-width: 3841px) {
    font-size: 4rem;
    padding: 1.2rem;
  }
`;


export const BottomBar = styled.div`
  border-top: 1px solid #B2B2B2;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 90%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1.5rem; 
color: #FFFFFF;
  a {
    color: #fff;
    text-decoration: none;
    /* opacity: 0.8; */
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
  /* opacity: 0.7; */
  text-align: center;
color: #FFFFFF;
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
