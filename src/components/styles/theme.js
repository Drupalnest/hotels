import redlionLogo from '../../images/svg/brand_logos/redlion.svg';
import styled from "styled-components";

export const colors = {
  primary: "#AE1E22",
  secondary: "#D8D8D8",
  dark: "#404040",
  light: "#F8F8F8"
};
export const brandColors = {
  "default": colors.primary,
  "Hotel RL": "#04202E",
  "Red Lion Hotel": colors.primary,
  "SIG": "#009FD1",
  "SIG INN": "#009FD1",
  "RLIS": "#000000",
  "GH": "#2C8C62",
  "KNI": "#5E267F",
  "ABVI": "#28397D",
  "CBVI": "#D1232A",
};
export const fontWeights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900
};

const baseFontSize = 16;

export const remCalc = pixelSize => {
  return(
    `${pixelSize / baseFontSize}rem`
  );
}

export const borderColor = "#E0E0E0";

export const redlion = {
  wrapperClass: `redlion`,
  logo: redlionLogo,
  primaryColor: colors.primary,
  primaryColorDark: `#570f11`
};

export const theme = redlion;

/** Header Style 01 **/
export const Title = styled.h1`
  font-size: 54px;
  font-size: ${remCalc(54)};
  font-weight: ${fontWeights.black};
  line-height: ${remCalc(54)};
`;
/** Header Style 02 **/
export const Title2 = styled.h2`
  font-size: 36px;
  font-size: ${remCalc(36)};
  font-weight: ${fontWeights.black};
  line-height: ${remCalc(40)};
`;
/** Header Style 03 **/
export const Title3 = styled.h3`
  font-size: 28px;
  font-size: ${remCalc(28)};
  font-weight: ${fontWeights.black};
  line-height: ${remCalc(34)};
`;
/** Header Style 04 **/
export const Title4 = styled.h4`
  font-size: 20px;
  font-size: ${remCalc(20)};
  font-weight: ${fontWeights.bold};
  line-height: ${remCalc(24)};
`;
/** Header Style 05 **/
export const Title5 = styled.h5`
  font-size: 18px;
  font-size: ${remCalc(18)};
  font-weight: ${fontWeights.bold};
  line-height: ${remCalc(24)};
`;
/** Header Style 06 **/
export const Title6 = styled.h6`
  font-size: 16px;
  font-size: ${remCalc(16)};
  font-weight: ${fontWeights.bold};
  line-height: ${remCalc(24)};
`;
/** Overline **/
export const Subtitle = styled.div`
  font-size: 14px;
  font-size: ${remCalc(13)};
  line-height: 1rem;
  font-weight: ${fontWeights.medium};
  color: ${colors.primary};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block !important;
  width: 45px;
  height: 23px;
  margin: 0 !important;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #404040;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 5px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #AE1E22;
  }


  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  input:checked + .slider:after {
    content: 'ON';
    position: absolute;
    right: -21px;
    bottom: 3px;
    font-weight: 400;
    font-size: 10px;
  }
  input + .slider:after {
    content: 'OFF';
    position: absolute;
    right: -23px;
    bottom: 3px;
    font-weight: 400;
    font-size: 10px;
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 16px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
