export default function Facebook(props) {
  const { name, src } = props.props;

  return (
    <div className="page">
      <header>{name}</header>
      <div className="main">
        <iframe
          className="iframe-300x250"
          id="facebook-300x250"
          src={src + '/300x250'}
          title={name + ' 300x250'}
        />
        <iframe
          className="iframe-300x600"
          id="facebook-300x600"
          src={src + '/300x600'}
          title={name + ' 300x600'}
        />
        <iframe
          className="iframe-728x90"
          id="facebook-728x90"
          src={src + '/728x90'}
          title={name + ' 728x90'}
        />
      </div>
    </div>
  );
}
