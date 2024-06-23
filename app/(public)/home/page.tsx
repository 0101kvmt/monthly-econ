"use client";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import Dropdown from "./../../components/dropdown";
const HomePage = () => {
  interface CSVState {
    "Transaction Date": string;
    Description: string;
    "Post Date": string;
    Type: string;
    Category?: string;
    Amount: string;
    Group?: string;
  }
  interface CSVResult {
    data: CSVState[];
    errors: [];
    meta: any;
  }
  const [CSVImport, setCSVImport] = useState<CSVState[]>([]);

  //////////////////////////////////////////////////////////
  //                  Import Logic                        //
  //////////////////////////////////////////////////////////

  useEffect(() => {
    console.log("VAL: ", CSVImport);
  }, [CSVImport]);

  const handleFileUpload = (event: any) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: CSVResult) {
        console.log("RESULTS FROM CSV @ PAPAPARSE - ", results.data);
        const CSVData = results.data.map((r, i) => {
          r.Type = "";
          return r;
        });
        console.log("CSV DATA", CSVData);
        setCSVImport(CSVData);
        console.log(CSVImport);
      },
    });
  };

  const renderCSVTable = () => {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>Post Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {CSVImport.map((c, i) => {
              return (
                <tr key={i}>
                  <td>{c["Transaction Date"]}</td>
                  <td>{c["Post Date"]}</td>
                  <td>{c["Description"]}</td>
                  <td>{c["Category"]}</td>
                  <td>{c["Amount"]}</td>
                  {/* <td>{c["Type"]}</td> */}
                  <td>
                    <Dropdown />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };
  return (
    <div>
      <p>Upload CSV file</p>
      <input
        className="file-input"
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
      {CSVImport.length > 0 && renderCSVTable()}
    </div>
  );
};

export default HomePage;
