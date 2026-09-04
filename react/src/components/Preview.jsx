import './Preview.css';

function Preview({ item, onClick }) {
  return (
    <button className={`box ${item.is_premium ? "premium" : ""}`} onClick={onClick} data-name={item.id}>
      <div className={`label ${item.is_premium ? "label-premium" : ""}`} style={{ backgroundColor: item.label }} />
      {item.is_premium ? "premium 🔒" : "free"}
    </button>
  );
}

export default Preview;