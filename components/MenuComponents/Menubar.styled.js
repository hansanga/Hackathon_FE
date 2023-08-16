import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  background: #FFF;
  position: fixed;
  top: 0;
  right: ${({ menuVisible }) => (menuVisible ? '0' : '-200px')};
  transition: right 0.3s ease-in-out;
  z-index: 10;
`;

export const Container = styled.div`
  width: 250px;
  height: 70px;
  /* background: #9c9; */
`

export const CloseButton = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: transparent;
`;

export const MenuIcon = styled.img`
  position: absolute;
  width: 27px;
  height: 24px;
  top: 13px;
  left: 10px;  
  cursor: pointer;
`;
export const MenuText = styled.img`
  position: absolute;
  top: 18px;
  left: 50px;
  color: #686868;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;


/* 카테고리 */

export const CategoryContainer = styled.div`
  width: 250px;
  height: 100%;
  padding: 3px 0 0 25px;
  /* overflow-y: scroll; */
`;

export const PublicS = styled.div`
  color: #686868;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
`;

export const ShortBorder = styled.div`
  width: 180px;
  height: 1px;
  margin-top: 10px;
  background-color: #999;
`;

/* Comprehensive certification */
export const PublicApp1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;


export const Publicimg1 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;


export const ComprehensiveCertification = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Safety */
export const PublicApp2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg2 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Safety = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Map */
export const PublicApp3 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg3 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Map = styled.div`
  font-size: 12px;
  color: #333;
`;

/* public transport */
export const PublicApp4 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg4 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const publictransport = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Taxi */
export const PublicApp5 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg5 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Taxi = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Navigation */
export const PublicApp6 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg6 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Navigation = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Cultural life */
export const PublicApp7 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg7 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const CulturalLife = styled.div`
  font-size: 12px;
  color: #333;
`;

/* SNS */
export const PublicApp8 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg8 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const SNS = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Search Engine */
export const PublicApp9 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg9 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const SearchEngine = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Finance */
export const PublicApp10 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;

export const Publicimg10 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Finance = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Food Delivery */
export const PublicApp11 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;

export const Publicimg11 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const FoodDelivery = styled.div`
  font-size: 12px;
  color: #333;
`;

/* E-commerce */
export const PublicApp12 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg12 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const ECommerce = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Used Item */
export const PublicApp13 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg13 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const UsedItem = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Interior */
export const PublicApp14 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

`;

export const Publicimg14 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Interior = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Part-time */
export const PublicApp15 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;

export const Publicimg15 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const PartTime = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Trendy App */
export const PublicApp16 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;

export const Publicimg16 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const TrendyApp = styled.div`
  font-size: 12px;
  color: #333;
`;

/* Employment */
export const PublicApp17 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;

export const Publicimg17 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Employment = styled.div`
  font-size: 12px;
  color: #333;
`;