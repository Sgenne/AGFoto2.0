import { Schema, model, Document } from "mongoose";

export interface IImage extends Document {
    imageUrl: string;
    previewImageUrl: string;
    categoryName: string;
}

const Image = model("Image", new Schema<IImage>({
    imageUrl: { type: String, required: true },
    previewImageUrl: { type: String, required: true },
    categoryName: { type: String, required: true }
}, {
    collection: "Images"
}))

export default Image;
