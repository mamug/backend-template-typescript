export class User {
    /* ID */
    private readonly _id: string;
    /* 名前 */
    private readonly _name: string;
    /* 削除フラグ */
    private readonly _deleted: boolean;

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public get deleted(): boolean {
        return this._deleted;
    }

    constructor(id: string, name: string, deleted: boolean) {
        this._id = id;
        this._name = name;
        this._deleted = deleted;
    }
}