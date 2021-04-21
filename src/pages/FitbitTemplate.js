export default function FitbitTemplate(props) {
  const { name, src } = props.props;
  console.log(name + " 300x250");

  return (
    <div className="muliti-iframe-container">
      <iframe
        className="general-300x250 fitbit-300x250"
        src={src + "/300x250"}
        title={name + " 300x250"}
      />
      <iframe
        className="general-970x250 fitbit-970x250"
        src={src + "/970x250"}
        title={name + " 970x250"}
      />
      <iframe
        className="general-300x600 fitbit-300x600"
        src={src + "/300x600"}
        title={name + " 300x600"}
      />
      <iframe
        className="general-728x90 fitbit-728x90"
        src={src + "/728x90"}
        title={name + " 728x90"}
      />
      <iframe
        className="general-320x50 fitbit-320x50"
        src={src + "/320x50"}
        title={name + " 320x50"}
      />
      <iframe
        className="general-300x50 fitbit-300x50"
        src={src + "/300x50"}
        title={name + " 300x50"}
      />
    </div>
  );
}
