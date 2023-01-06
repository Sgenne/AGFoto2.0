import { Schema, model } from "mongoose";

export interface IImageCategory {
    name: string;
}

const ImageCategory = model("ImageCategory", new Schema<IImageCategory>({
    name: {
        type: String,
        required: true
    }
}, { collection: "ImageCategories" }));

export default ImageCategory;