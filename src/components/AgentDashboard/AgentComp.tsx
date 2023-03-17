import React from "react";
import AgentBalance from "./AgentBalance";
import AgentHouse from "./AgentHouse";
import AgentTranHis from "./AgentTransHis";


const AgentComp = () => {

    return(
        <div>

            <AgentHouse />
            <AgentBalance />
            <AgentTranHis />

        </div>
    )
}

export default AgentComp;