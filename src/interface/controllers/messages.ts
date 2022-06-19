export type Request<T> = {
    data: T;
};
export type Response<T> = {
    status: number;
    data?: T;
    error?: string;
};
