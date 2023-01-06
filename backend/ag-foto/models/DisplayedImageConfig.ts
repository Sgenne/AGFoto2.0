import { Schema, model } from "mongoose";

export interface IDisplayedImageConfig {
    homePageBackgroundImageId: string;
}

const DisplayedImageConfig = model("DisplayedImageConfig", new Schema<IDisplayedImageConfig>({
    homePageBackgroundImageId: {
        type: String,
        required: true,
    }
}, {
    collection: "DisplayedImageConfigs"
}))

export default DisplayedImageConfig;
