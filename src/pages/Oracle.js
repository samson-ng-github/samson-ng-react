export default function Oracle(props) {
  const { name, src } = props.props;

  return (
    <div className="muliti-iframe-container">
      <iframe
        className="general-300x250 oracle-300x250"
        src={src + '/300x250'}
        title={name + ' 300x250'}
      />
      <iframe
        className="general-300x600 oracle-300x600"
        src={src + '/300x600'}
        title={name + ' 300x600'}
      />
      <iframe
        className="general-160x600 oracle-160x600"
        src={src + '/160x600'}
        title={name + ' 160x600'}
      />
      <iframe
        className="general-728x90 oracle-728x90"
        src={src + '/728x90'}
        title={name + ' 728x90'}
      />
      <iframe
        className="general-320x50 oracle-320x50"
        src={src + '/320x50'}
        title={name + ' 320x50'}
      />
      <iframe
        className="general-300x50 oracle-300x50"
        src={src + '/300x50'}
        title={name + ' 300x50'}
      />
    </div>
  );
}
