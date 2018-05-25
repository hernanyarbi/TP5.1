export class CustomError {

    public errorKey: string;
    public errorMsg: string;

    constructor(errorKey: string, errorMsg: string) {
        this.errorKey = errorKey;
        this.errorMsg = errorMsg;
    }

}
