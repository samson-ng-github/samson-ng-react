export default function FitbitTemplate(props) {
  const { name, src } = props.props;
  console.log(name + ' 300x250');

  return (
    <div className="page">
      <header>{name}</header>
      <div className="main">
        <iframe
          className="iframe-300x250"
          id="fitbit-300x250"
          src={src + '/300x250'}
          title={name + ' 300x250'}
        />
        <iframe
          className="iframe-970x250"
          id="fitbit-970x250"
          src={src + '/970x250'}
          title={name + ' 970x250'}
        />
        <iframe
          className="iframe-300x600"
          id="fitbit-300x600"
          src={src + '/300x600'}
          title={name + ' 300x600'}
        />
        <iframe
          className="iframe-728x90"
          id="fitbit-728x90"
          src={src + '/728x90'}
          title={name + ' 728x90'}
        />
        <iframe
          className="iframe-320x50"
          id="fitbit-320x50"
          src={src + '/320x50'}
          title={name + ' 320x50'}
        />
        <iframe
          className="iframe-300x50"
          id="fitbit-300x50"
          src={src + '/300x50'}
          title={name + ' 300x50'}
        />{' '}
      </div>
    </div>
  );
}
