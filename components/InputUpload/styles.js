import styled from "styled-components";
import { device } from "../../assets/styles/device";

export const DivInputUpload = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 6px;
  padding-bottom: 20px;

  @media ${device.laptop} {
    width: 90%;
  }
`;

export const DivInputUploadTitle = styled.div`
  padding: 20px 20px 0px 20px;

  .title {
    color: #002240;
    font-size: 24px;
    font-weight: bold;
  }

  .text-help {
    margin-top: -20px;
    color: #0089ff;
  }
`;

export const DivInputUploadFile = styled(DivInputUploadTitle)`
  padding: 0px 20px 0px 20px;
`;

export const CardUpload = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 6px;

  div {
    margin: 10px;
  }

  .icon-upload {
    background: #f3f5f8;
    border-radius: 6px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    i {
      font-size: 24px;
    }
  }
`;
