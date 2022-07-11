import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleGifs();
  }, [])

  const handleGifs = async() => {
    const resp = await getGifs(category);
    setImages([...resp]);
    setIsLoading(false)
  }

  return {
    images,
    isLoading
  }
}
