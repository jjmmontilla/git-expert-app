
export const CardGif = ({url, title}) => {
  return (
    <div className="card">
      <img src={url} alt={title} width='100' />
      <p>{title}</p>
    </div>
  )
}
