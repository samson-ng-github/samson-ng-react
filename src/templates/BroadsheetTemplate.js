export default function BroadsheetTemplate(props) {
  const { name, src, size, text } = props.props;
  return (
    <div className="page">
      <header className="broadsheet-header">{name}</header>
      <div className="broadsheet-main">
        <iframe
          className="iframe-border"
          src={src}
          width={size.width}
          height={size.height}
          title={name}
        />
        <div className="mpu-text-block">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
