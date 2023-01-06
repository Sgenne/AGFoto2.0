import express, {NextFunction, Request, Response} from "express";
import DisplayedImageConfig from "../models/DisplayedImageConfig";
import Image from "../models/Image";
import { getImagesByCategory, handleImageUpload } from "../services/image.service";
import { getAllImageCategories } from "../services/imageCategory.service";
import { validateImageCategoryNameQuery } from "../validation/imageValidation";

const getAllImages = (req: Request, res: Response) => res.send("hello, /image!");

const getImageById = (req: Request, res: Response) => res.send("hello, /image/id");

const postImage = (req: Request, res: Response) => {
    const postedImage = req.file;

    res.send("hello POST /image")
}

const getAllImageCategoriesHandler = async (req: Request, res: Response) => {
    const imageCategories = await getAllImageCategories();

    res.send(imageCategories);
}

const getImagesByCategoryHandler = async (req: Request, res: Response) => {
    const imageCategoryName = req.params.imageCategoryName;
    
    const imageCategoryNameValidationResult = validateImageCategoryNameQuery(imageCategoryName);

    if (!imageCategoryNameValidationResult.isValid) return res
        .status(imageCategoryNameValidationResult.status)
        .json({
            message: imageCategoryNameValidationResult.message
        });

    const images = await getImagesByCategory(imageCategoryName as string);

    return res
        .status(200)
        .json({
            images: images
    })
}

const getHomePageBackgroundImage = async (req: Request, res: Response, next: NextFunction) => {
    const config = await DisplayedImageConfig.findOne();

    if (!config) {
        return next(new Error("No DisplayedImageConfig was found."))
    }

    const backgroundImageId = config.homePageBackgroundImageId
    
    const backgroundImage = await Image.findOne({_id: backgroundImageId});

    if (!backgroundImage) {
        return next(new Error("The home page background image was not found."));
    }

    return res
        .status(200)
        .json({
            image: backgroundImage
        });
}

const router = express.Router();

router.get("/", getAllImages);

router.get("/id", getImageById);

router.post("/", handleImageUpload.single("image"), postImage);

router.get("/category", getAllImageCategoriesHandler);

router.get("/by-category/:imageCategoryName", getImagesByCategoryHandler);

router.get("/home-background", getHomePageBackgroundImage);

export default router;