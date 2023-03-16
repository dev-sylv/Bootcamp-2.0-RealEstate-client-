import React from "react";
import AdminHom from "./AdmHome/AdminHom";
import Agents from "./AdmHome/Agents";
import Expense from "./AdmHome/Expense";
import Revenue from "./AdmHome/Revenue";


const Homee = () => {

    return(
        <div>

            <AdminHom />
            <Revenue />
            <Expense />
            <Agents />

        </div>
    )
}

export default Homee;