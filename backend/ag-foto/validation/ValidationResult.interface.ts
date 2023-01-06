import StatusCode from "../common/StatusCode";

export default interface ValidationResult {
    isValid: boolean;
    message?: string;
    status: StatusCode
}

