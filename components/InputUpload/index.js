import { useState, useContext } from "react";
import CSVReader from "react-csv-reader";
import { Context } from "../../hooks/DataProvider";

import {
  DivInputUpload,
  DivInputUploadTitle,
  DivInputUploadFile,
  CardUpload,
} from "./styles";

const InputUpload = () => {
  const { file, setFile } = useContext(Context);

  function onClickUpload() {
    let input2 = document.getElementById("inputFile");
    input2.click();
  }

  function onFileLoaded(data, fileInfo) {
    setFile({ ...file, name: fileInfo.name, data: data });
  }

  return (
    <>
      <CSVReader
        inputStyle={{ display: "none" }}
        inputId={"inputFile"}
        onFileLoaded={(data, fileInfo) => onFileLoaded(data, fileInfo)}
      />
      <DivInputUpload>
        <DivInputUploadTitle>
          <h2 className='title'>Testing Bulk Upload </h2>
          <div className='text-help'>
            <span>you haven't upload any bulk data yed</span>
          </div>
        </DivInputUploadTitle>
        <hr />
        <DivInputUploadFile>
          <h2 className='title'>Choose your an input medthod</h2>
          <CardUpload>
            <div className='icon-upload' onClick={() => onClickUpload()}>
              <i className='fas fa-upload' />
            </div>
            <div>
              <h5>{file.name ? file.name : "via CSV file "}</h5>
              <h5>อัปเดตข้อมูลจากไฟล์ CSV</h5>
            </div>
          </CardUpload>
        </DivInputUploadFile>
      </DivInputUpload>
    </>
  );
};

export default InputUpload;
