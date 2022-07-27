import PropTypes from 'prop-types';

export const CardGif = ({url, title}) => {
  return (
    <div className="card">
      <img src={url} alt={title} width='100' />
      <p>{title}</p>
    </div>
  )
}

CardGif.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}