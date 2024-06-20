export default function Fifa19Template(props) {
  const { name, src } = props.props;

  return (
    <div className="page">
      <header>{name}</header>
      <div className="main">
        <iframe
          className="iframe-300x250"
          id="fifa19-300x250"
          src={src + '/300x250'}
          title={name + ' 300x250'}
        />
        <iframe
          className="iframe-970x250"
          id="fifa19-970x250"
          src={src + '/970x250'}
          title={name + ' 970x250'}
        />
        <iframe
          className="iframe-300x600"
          id="fifa19-300x600"
          src={src + '/300x600'}
          title={name + ' 300x600'}
        />
        <iframe
          className="iframe-160x600"
          id="fifa19-160x600"
          src={src + '/160x600'}
          title={name + ' 160x600'}
        />
        <iframe
          className="iframe-970x66"
          id="fifa19-970x66"
          src={src + '/970x66'}
          title={name + ' 970x66'}
        />
        <iframe
          className="iframe-728x90"
          id="fifa19-728x90"
          src={src + '/728x90'}
          title={name + ' 728x90'}
        />
        <iframe
          className="iframe-320x50"
          id="fifa19-320x50"
          src={src + '/320x50'}
          title={name + ' 320x50'}
        />
      </div>
    </div>
  );
}
