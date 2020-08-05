import { useContext } from "react";
import {
  Table,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { DivHeaderTable, Tr, Th, ButtonPost } from "./style";
import { Context } from "../../hooks/DataProvider";

const Tables = () => {
  const { file, setFile } = useContext(Context);
  const data = file.data;

  function subString(string, number) {
    let result;
    if (string.length > number) {
      result = string.substring(0, number - 1) + "...";
    }
    return result;
  }

  return (
    <>
      {data.length > 0 && (
        <>
          <DivHeaderTable>
            <div className="child-1">{data.length - 1}</div>
            <div className="child-2">
              listings successfully and Ready to published
            </div>
            <div className="child-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.51562 5.01562V9.23438L12.9844 11.3438L12.2812 12.5625L8.01562 9.98438V5.01562H9.51562ZM18 7.125H11.2031L13.9688 4.3125C12.5938 2.9375 10.9375 2.25 9 2.25C7.09375 2.21875 5.45312 2.875 4.07812 4.21875C2.73438 5.59375 2.0625 7.21875 2.0625 9.09375C2.0625 10.9688 2.73438 12.5938 4.07812 13.9688C5.42188 15.3438 7.0625 16.0312 9 16.0312C10.9375 16.0312 12.5938 15.3438 13.9688 13.9688C15.3125 12.625 15.9844 11 15.9844 9.09375H18C18 11.5625 17.125 13.6562 15.375 15.375C13.625 17.125 11.5 18 9 18C6.5 18 4.375 17.125 2.625 15.375C0.875 13.6562 0 11.5781 0 9.14062C0 6.67188 0.875 4.5625 2.625 2.8125C4.375 1.0625 6.48438 0.1875 8.95312 0.1875C11.4219 0.1875 13.5312 1.0625 15.2812 2.8125L18 0V7.125Z"
                  fill="#0089FF"
                />
              </svg>
              &nbsp;&nbsp;Update data
            </div>
            <div className="child-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6.98438L12.9844 11.0156H9.98438V17.0156H8.01562V11.0156H5.01562L9 6.98438ZM15.9844 0.984375C16.5469 0.984375 17.0156 1.1875 17.3906 1.59375C17.7969 2 18 2.46875 18 3V15C18 15.5312 17.7969 16 17.3906 16.4062C16.9844 16.8125 16.5156 17.0156 15.9844 17.0156H12V15H15.9844V5.01562H2.01562V15H6V17.0156H2.01562C1.45312 17.0156 0.96875 16.8125 0.5625 16.4062C0.1875 16 0 15.5312 0 15V3C0 2.46875 0.1875 2 0.5625 1.59375C0.96875 1.1875 1.45312 0.984375 2.01562 0.984375H15.9844Z"
                  fill="#A6AAB4"
                />
              </svg>
            </div>
            <div className="child-5">Published</div>
          </DivHeaderTable>
          <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th>CONDO NAME</th>
                <th>RENT PRICE (Baht)</th>
                <th>SELL PRICE (Baht)</th>
                <th>BEDROOM</th>
                <th>BATHROOM</th>
                <th>SIZE (sqm.)</th>
                <th>FLOOR </th>
                <th>STATUS </th>
                <th>PHOTO </th>
                <th>TITLE </th>
                <th>DESCRIPTION </th>
                <th>BENEFIT </th>
                <th>Amenities </th>
              </tr>
            </thead>
            <tbody>
              {data.map((file, index) => {
                const object = { ...file };
                let id = object["0"];
                let name = subString(object["1"], 20);
                let rate_price = object["2"];
                let sale_price = object["3"];
                let bad_room = object["4"];
                let bath = object["5"];
                let size = object["6"];
                let floor = object["7"];
                let title = subString(object["8"], 20);
                let description = subString(object["9"], 20);
                let photo = object["10"];
                let agen_post = object["11"] ? (
                  <ButtonPost post="true" color="success">
                    Agent post
                  </ButtonPost>
                ) : (
                  ""
                );
                let accept_agent = object["12"] ? (
                  <ButtonPost color="warning">รับ Co-Agent</ButtonPost>
                ) : (
                  ""
                );
                let air_con = object["13"] ? "Air condition" : null;
                let bath_tub = object["14"] ? "Bath Tub" : null;
                let electric_stove = object["15"] ? "Electric Stove" : null;
                let furniture = object["16"] ? "Furniture" : null;
                let gas_stove = object["17"] ? "Gas Stove" : null;
                let refrigerator = object["18"] ? "Refrigerator" : null;
                let washing_machine = object["19"] ? "Washing Machine" : null;
                let water_heater = object["20"] ? "Water Heater" : null;

                let amenities_menus = [
                  air_con,
                  bath_tub,
                  electric_stove,
                  furniture,
                  gas_stove,
                  refrigerator,
                  washing_machine,
                  water_heater,
                ].filter((x) => x);

                if (index > 0) {
                  return (
                    <Tr key={id}>
                      <Th scope="row" value={id}>
                        {" "}
                        <span>{id ? id : "notfound"}</span>
                      </Th>
                      <Th value={name}>
                        <span>{name ? name : "notfound"}</span>
                      </Th>
                      <Th value={rate_price}>
                        <span>{rate_price ? rate_price : "notfound"}</span>
                      </Th>
                      <Th value={sale_price}>
                        <span>{sale_price ? sale_price : "notfound"}</span>
                      </Th>
                      <Th value={bad_room}>
                        <span>{bad_room ? bad_room : "notfound"}</span>
                      </Th>
                      <Th value={bath}>
                        <span>{bath ? bath : "notfound"}</span>
                      </Th>
                      <Th value={size}>
                        <span>{size ? size : "notfound"}</span>
                      </Th>
                      <Th value={floor}>
                        <span>{floor ? floor : "notfound"}</span>
                      </Th>
                      <Th>
                        {agen_post}
                        {accept_agent}
                      </Th>
                      <Th>
                        <div className="div-img">
                          <img src={`${photo}`} />
                          <img src={`${photo}`} />
                          <img src={`${photo}`} />
                          <img src={`${photo}`} />
                          <button className="edit-photo">Edit photo</button>
                        </div>
                      </Th>
                      <Th value={title}>
                        <span>{title ? title : "notfound"}</span>
                      </Th>
                      <Th value={description}>
                        {" "}
                        <span>{description ? description : "notfound"}</span>
                      </Th>
                      <Th>-</Th>
                      <Th>
                        {amenities_menus.length > 0 ? (
                          <UncontrolledDropdown setActiveFromChild>
                            <DropdownToggle
                              tag="span"
                              className="amenities_menu"
                              caret={amenities_menus.length > 0 ? true : false}
                              disabled
                            >
                              {amenities_menus.length}
                            </DropdownToggle>
                            <DropdownMenu right className="dropdown_menu">
                              {amenities_menus.length > 0 && (
                                <>
                                  <DropdownItem header>Amenities</DropdownItem>
                                  <DropdownItem divider />
                                  {amenities_menus.map((menu, index) => {
                                    return (
                                      <DropdownItem key={index}>
                                        {menu}
                                      </DropdownItem>
                                    );
                                  })}
                                </>
                              )}
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        ) : (
                          <>{amenities_menus.length}</>
                        )}
                      </Th>
                    </Tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default Tables;
