export default function VideoTemplate(props) {
  const { name, src, size, text } = props.props;
  return (
    <div
      className="single-iframe-container"
      style={{ width: size.width + "px" }}
    >
      <iframe
        className="iframe-border"
        src={src}
        width={size.width}
        height={size.height}
        title={name}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        style={{ backgroundColor: "black" }}
      />
      <p>{text}</p>
    </div>
  );
}
