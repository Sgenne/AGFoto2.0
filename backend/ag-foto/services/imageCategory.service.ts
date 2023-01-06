import ImageCategory from "../models/ImageCategory"

export const getAllImageCategories = async () => {
    const imageCategories = await ImageCategory.find();

    return imageCategories;
}