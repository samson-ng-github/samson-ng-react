export default function FourMpuTemplate(props) {
  const { name, src } = props.props;

  return (
    <div className={"four-mpu-container"}>
      <iframe
        className="general-300x250"
        src={src + "/300x250_1"}
        title={name + " 300x250"}
      />
      <iframe
        className="general-300x250"
        src={src + "/300x250_2"}
        title={name + " 300x250"}
      />
      <iframe
        className="general-300x250"
        src={src + "/300x250_3"}
        title={name + " 300x250"}
      />
      <iframe
        className="general-300x250"
        src={src + "/300x250_4"}
        title={name + " 300x250"}
      />
    </div>
  );
}
