export default function Fifa19Template(props) {
  const { name, src } = props.props;

  return (
    <div className="muliti-iframe-container">
      <iframe
        className="general-300x250 fifa19-300x250"
        src={src + "/300x250"}
        title={name + " 300x250"}
      />
      <iframe
        className="general-970x250 fifa19-970x250"
        src={src + "/970x250"}
        title={name + " 970x250"}
      />
      <iframe
        className="general-300x600 fifa19-300x600"
        src={src + "/300x600"}
        title={name + " 300x600"}
      />
      <iframe
        className="general-160x600 fifa19-160x600"
        src={src + "/160x600"}
        title={name + " 160x600"}
      />
      <iframe
        className="general-970x66 fifa19-970x66"
        src={src + "/970x66"}
        title={name + " 970x66"}
      />
      <iframe
        className="general-728x90 fifa19-728x90"
        src={src + "/728x90"}
        title={name + " 728x90"}
      />
      <iframe
        className="general-320x50 fifa19-320x50"
        src={src + "/320x50"}
        title={name + " 320x50"}
      />
    </div>
  );
}
