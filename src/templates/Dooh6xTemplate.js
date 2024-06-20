export default function Dooh6xTemplate(props) {
  const { name, src } = props.props;
  return (
    <div className="page">
      <header>{name}</header>
      <div className="main">
        <div className="dooh-block">
          <video
            autoPlay
            muted
            playsInline
            className="video-300x533"
            key={`${src}1`}
          >
            <source src={src + '/300x533_1.mp4'} type="video/mp4" />
          </video>{' '}
        </div>
        <div className="dooh-block">
          <video
            autoPlay
            muted
            playsInline
            className="video-300x533"
            key={`${src}2`}
          >
            <source src={src + '/300x533_2.mp4'} type="video/mp4" />
          </video>{' '}
        </div>
        <div className="dooh-block">
          <video
            autoPlay
            muted
            playsInline
            className="video-300x533"
            key={`${src}3`}
          >
            <source src={src + '/300x533_3.mp4'} type="video/mp4" />
          </video>{' '}
        </div>
        <div className="dooh-block">
          <video
            autoPlay
            muted
            playsInline
            className="video-300x533"
            key={`${src}4`}
          >
            <source src={src + '/300x533_4.mp4'} type="video/mp4" />
          </video>{' '}
        </div>
        <div className="dooh-block">
          <video
            autoPlay
            muted
            playsInline
            className="video-300x533"
            key={`${src}5`}
          >
            <source src={src + '/300x533_5.mp4'} type="video/mp4" />
          </video>{' '}
        </div>
        <div className="dooh-block">
          <video
            autoPlay
            muted
            playsInline
            className="video-300x533"
            key={`${src}6`}
          >
            <source src={src + '/300x533_6.mp4'} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
