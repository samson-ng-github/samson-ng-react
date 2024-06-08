export default function Oracle(props) {
  const { name, src } = props.props;

  return (
    <div className="page">
      <header>{name}</header>
      <div className="main">
        <iframe
          className="iframe-300x250"
          id="oracle-300x250"
          src={src + '/300x250'}
          title={name + ' 300x250'}
        />
        <iframe
          className="iframe-300x600"
          id="oracle-300x600"
          src={src + '/300x600'}
          title={name + ' 300x600'}
        />
        <iframe
          className="iframe-160x600"
          id="oracle-160x600"
          src={src + '/160x600'}
          title={name + ' 160x600'}
        />
        <iframe
          className="iframe-728x90"
          id="oracle-728x90"
          src={src + '/728x90'}
          title={name + ' 728x90'}
        />
        <iframe
          className="iframe-320x50"
          id="oracle-320x50"
          src={src + '/320x50'}
          title={name + ' 320x50'}
        />
        <iframe
          className="iframe-300x50"
          id="oracle-300x50"
          src={src + '/300x50'}
          title={name + ' 300x50'}
        />
      </div>
    </div>
  );
}
