class CustomError extends Error {
    private status: number;

    constructor(status: number) {
        super();
        this.status = status;
    }
}

class InternalServerError extends CustomError {
    constructor(message: string) {
        super(500);
        this.message = message;
    }
}

export { InternalServerError };
