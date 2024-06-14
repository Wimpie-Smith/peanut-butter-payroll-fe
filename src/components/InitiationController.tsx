import React, {useState} from "react";
import { PayrollController } from "./PayrollContent/PayrollController";

export const InitiationController: React.FC<{}> = () => {

    /** Space for more developmemt
     * The idea was to have the backend run on both MSSQL and MYSQL.
     * With this we can do a call to the back end and check if a Database was initilizes.
     * If not Show a page where you can add you details and have the backend .env file save the details
     * I just could not fit this in to the time frame alocated.
     */

    const [ initCompleted, setInitCompleted] = useState<boolean>(true)

    return (
        <>
        {initCompleted ? <PayrollController/> : <></> }
        </>
    )
}