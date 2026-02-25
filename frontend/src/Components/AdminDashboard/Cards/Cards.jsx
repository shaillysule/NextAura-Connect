import "./Cards.css";

const Cards = () => {
  return (
    <div className="admin-cards">
      <div className="admin-card">
        <h4>Total Users</h4>
        <span>1,240</span>
      </div>

      <div className="admin-card">
        <h4>Total Listings</h4>
        <span>860</span>
      </div>

      <div className="admin-card">
        <h4>Active Rentals</h4>
        <span>312</span>
      </div>

      <div className="admin-card">
        <h4>Pending Approvals</h4>
        <span>24</span>
      </div>
    </div>
  );
};

export default Cards;