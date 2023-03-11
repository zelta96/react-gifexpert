import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGif"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async () => {
        const imagesList = await getGifs(category)
        setImages(imagesList)
    }
    useEffect(()=>{
        getImages();
    },[]) 

    return {
        images,
        isLoading
    }
}
