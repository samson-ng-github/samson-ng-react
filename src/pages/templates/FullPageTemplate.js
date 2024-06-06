export default function FullPageTemplate(props) {
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
      />
      <p>{text}</p>
    </div>
  );
}
