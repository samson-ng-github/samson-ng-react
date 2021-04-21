export default function SkyTemplate(props) {
  const { name, src } = props.props;

  return (
    <div className="muliti-iframe-container">
      <iframe
        className="general-300x250 sky-300x250"
        src={src + "/300x250"}
        title={name + " 300x250"}
      />
      <iframe
        className="general-160x600 sky-160x600"
        src={src + "/160x600"}
        title={name + " 160x600"}
      />
      <iframe
        className="general-728x90 sky-728x90"
        src={src + "/728x90"}
        title={name + " 728x90"}
      />
    </div>
  );
}
