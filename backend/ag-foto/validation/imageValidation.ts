import QueryString from "qs";
import StatusCode from "../common/StatusCode";
import ValidationResult from "./ValidationResult.interface";



export const validateImageCategoryNameQuery = (imageCategoryName: string
    | QueryString.ParsedQs
    | string[]
    | QueryString.ParsedQs[]
    | undefined): ValidationResult => {
    if (!imageCategoryName) return {
        isValid: false,
        message: "No ImageCategoryName was given.",
        status: StatusCode.BAD_REQUEST
    }

    if (typeof imageCategoryName !== "string") return {
        isValid: false,
        message: "The given ImageCategoryName was invalid",
        status: StatusCode.BAD_REQUEST
    }

    return { isValid: true, status: StatusCode.OK }
}