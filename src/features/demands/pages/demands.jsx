import React from "react";
import { UserData } from "../components/UserData";
import { UnitData } from "../components/UnitData";
import colors from "../../../assets/styles/colors";

export const DemandsScreen = () => {
  return (
    <div className="container my-4 py-4 text-center bg-light rounded shadow-sm">
      <h2 className="mb-4  fw-bold">اعرض عقارك لدينا</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <UserData />
        </div>
        <div className="col-md-6 mb-4">
          <UnitData />
        </div>
      </div>
      <button className="btn  px-5 py-2 mt-3" style={{backgroundColor:colors.gold,color:"white",fontSize:"1.2rem"}}>اعرض لدينا</button>
    </div>
  );
};
