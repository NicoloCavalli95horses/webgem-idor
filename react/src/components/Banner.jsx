import './Banner.css';

function Banner({ onClick }) {
  return (
    <div className="backdrop" onClick={onClick}>
      <div className="banner">
        <h3>You are not allowed to access this content</h3>
      </div>
    </div>
  );
}


export default Banner;