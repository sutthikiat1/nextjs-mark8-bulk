import styled from "styled-components";
import { device } from "../../assets/styles/device";
import { Button } from "reactstrap";

export const DivHeaderTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 50px;
  align-items: center;

  @media ${device.mobileL} {
    justify-content: space-around;
  }

  .child-1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    background: #f3f5f8;
    width: 83px;
    height: 88px;
    padding: 30px 0;
  }

  .child-2 {
    margin: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    width: 50%;
    @media ${device.laptop} {
      width: 35%;
    }
  }

  .child-3 {
    margin: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    color: #0089ff;
    width: 10%;
    @media ${device.mobileL} {
      width: 10%;
    }
  }

  .child-4 {
    margin: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    color: #0089ff;
    width: 10%;
    @media ${device.mobileL} {
      width: 30%;
    }
  }

  .child-5 {
    margin: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    color: #0089ff;
    width: 10%;
    @media ${device.mobileL} {
      width: 30%;
    }
  }
`;

export const Tr = styled.tr`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Th = styled.th`
  .amenities_menu {
    color: #002240;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .dropdown:active .dropdown-menu {
    display: none;
  }

  span {
    color: ${(props) => (!props.value ? "#EB5757" : "#002240")};
  }

  .div-img {
    display: flex;
    align-items: center;
    width: 150px;
    transition: 0.5s ease-out;

    .edit-photo {
      background: none;
      border: none;
      display: none;
      color: #0089ff;
      font-weight: 500;
      opacity: 0;
    }

    img {
      border-radius: 6px;
      width: 24px;
      margin: 5px;
    }

    &:hover {
      width: 200px;

      .edit-photo {
        display: block;
        opacity: 1;
      }
    }
  }
`;

export const ButtonPost = styled(Button)`
  background: ${(props) =>
    props.post ? "rgba(111, 207, 151, 0.24)" : "rgba(243, 208, 83, 0.28)"};
  border-radius: 24px;
  color: ${(props) => (props.post ? "#6fcf97" : "#F2C94C;")};
  border: none;
  font-weight: 600;

  &:hover {
    background: ${(props) =>
      props.post ? "rgba(111, 207, 151, 0.24)" : "rgba(243, 208, 83, 0.28)"};
    color: ${(props) => (props.post ? "#6fcf97" : "#F2C94C;")};
  }
`;
