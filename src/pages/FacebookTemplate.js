export default function FacebookTemplate(props) {
  const { name, src } = props.props;

  return (
    <div className="muliti-iframe-container">
      <iframe
        className="general-300x250 facebook-300x250"
        src={src + "/300x250"}
        title={name + " 300x250"}
      />
      <iframe
        className="general-300x600 facebook-300x600"
        src={src + "/300x600"}
        title={name + " 300x600"}
      />
      <iframe
        className="general-728x90 facebook-728x90"
        src={src + "/728x90"}
        title={name + " 728x90"}
      />
    </div>
  );
}
