export default function PencilDrawingTemplate(props) {
  const { name, thumb, src, size, text } = props.props;
  return (
    <div
      className="single-iframe-container pencil-drawing-template-container"
      style={{ width: size.width + "px" }}
    >
      <img
        className="pencil-drawing-template-img"
        src={src}
        width={size.width}
        height={size.height}
        alt={name}
      />
      <img
        className="pencil-drawing-template-img-mobile"
        src={"./assets/" + thumb}
        alt={name}
      />
      <p>{text}</p>
    </div>
  );
}
