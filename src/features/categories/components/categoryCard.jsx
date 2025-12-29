// eslint-disable-next-line no-unused-vars
export default function CategoryCard({ title, desc, count, icon: Icon, onClick }) {
  return (
    <div className="category-card" onClick={onClick}>
      <div className="icon-wrapper">
        <Icon size={38} />
      </div>

      <h4>{title}</h4>
      <p>{desc}</p>

      {/* <span className="category-count">
        {count}+ وحدة
      </span> */}
    </div>
  );
}
