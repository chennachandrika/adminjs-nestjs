import { Schema } from 'mongoose';
export interface ICategory {
    title: string;
}
export declare const CategorySchema: Schema<ICategory, import("mongoose").Model<ICategory, any, any, any, import("mongoose").Document<unknown, any, ICategory> & ICategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ICategory, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ICategory>> & import("mongoose").FlatRecord<ICategory> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Category: import("mongoose").Model<ICategory, {}, {}, {}, import("mongoose").Document<unknown, {}, ICategory> & ICategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
