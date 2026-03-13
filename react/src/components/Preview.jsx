import './Preview.css';

function Preview({ item, onClick }) {
  return (
    <div
      className={`box ${item.is_premium ? "premium" : ""}`}
      onClick={onClick}
    >
      <div className={`label ${item.is_premium ? "label-premium" : ""}`} style={{ backgroundColor: item.label }} />
      {item.is_premium ? "premium 🔒" : "free"}
    </div>
  );
}

export default Preview;