export default function Mpu4xTemplate(props) {
  const { name, src } = props.props;

  return (
    <div className="page">
      <header>{name}</header>
      <div className="main">
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={src + '/300x250_1'}
            title={name + ' 300x250'}
          />
        </div>
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={src + '/300x250_2'}
            title={name + ' 300x250'}
          />
        </div>
        <div className="mpu-block">
          <iframe
            className="iframe-300x250"
            src={src + '/300x250_3'}
            title={name + ' 300x250'}
          />
        </div>
      </div>
    </div>
  );
}
