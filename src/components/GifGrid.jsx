import { useFetchGifs } from "../hooks/useFetchGifs";
import { CardGif } from "./cardGif";

export const GifGrid = ({category}) => {
  const { images, isLoding } = useFetchGifs(category);

  return (
    <>
      <h4>{ category }</h4>
      
      { isLoding && (<h2>Cargando..</h2>) }

      <div className="card-grid">
        {
          images.map((image) => (
          <CardGif key={image.id} {...image} />))
        }
      </div>
    </>
  )
}
