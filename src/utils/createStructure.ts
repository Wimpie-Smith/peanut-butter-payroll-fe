import { IEmployeeData } from "../types/interfaces/employeeModels"

export const createBlankUserData = ():IEmployeeData => {
    return {
        employeeNumber:0,
        firstName:'',
        lastName:'',
        salutation:'',
        gender:'',
        fullNames:'',
        grossSalary:0,
        profileColour:'Grey',
    }
}