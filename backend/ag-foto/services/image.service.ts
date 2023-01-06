import multer from "multer";
import Image, { IImage } from "../models/Image";

export const handleImageUpload = multer({
    limits: {
      fileSize: 1000000
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error("Please upload a jpg, jpeg or png image."));
      }
  
      cb(null, true);
    }
  });

export const getImagesByCategory = async (categoryName: string) => {
  const images: IImage[] = await Image.find({
    categoryName: categoryName
  })

  return images;
}
