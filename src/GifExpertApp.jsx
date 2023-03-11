import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto'])

    const addCategoryHelpeer = (categorie) => {
        if (categories.includes(categorie)) return;
        setCategories([categorie, ...categories])

    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={addCategoryHelpeer}></AddCategory>
            {categories.map((item) => (
                <GifGrid category={item} key={item}></GifGrid>
            ))}
        </>
    )
}
