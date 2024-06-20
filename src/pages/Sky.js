export default function Sky(props) {
  const { name, src } = props.props;

  return (
    <div className="page">
      <header>{name}</header>
      <div className="main">
        <iframe
          className="iframe-300x250"
          id="sky-300x250"
          src={src + '/300x250'}
          title={name + ' 300x250'}
        />
        <iframe
          className="iframe-160x600"
          id="sky-160x600"
          src={src + '/160x600'}
          title={name + ' 160x600'}
        />
        <iframe
          className="iframe-728x90"
          id="sky-728x90"
          src={src + '/728x90'}
          title={name + ' 728x90'}
        />
      </div>
    </div>
  );
}
