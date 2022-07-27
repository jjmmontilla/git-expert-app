import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { CardGif } from "./cardGif";

export const GifGrid = ({category}) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h4>{ category }</h4>
      
      { isLoading && (<h2>Cargando..</h2>) }

      <div className="card-grid">
        {
          images.map((image) => (
          <CardGif key={image.id} {...image} />))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
