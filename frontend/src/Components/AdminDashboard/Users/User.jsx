import "./User.css";

const Users = () => {
  return (
    <div className="admin-users">

      <h2 className="page-title">Users Management</h2>

      <div className="users-table-container">

        <table className="users-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>101</td>
              <td>Rahul Sharma</td>
              <td>rahul@gmail.com</td>
              <td>User</td>
              <td>Active</td>
              <td>
                <button className="block-btn">Block</button>
              </td>
            </tr>

            <tr>
              <td>102</td>
              <td>Priya Patel</td>
              <td>priya@gmail.com</td>
              <td>Seller</td>
              <td>Active</td>
              <td>
                <button className="block-btn">Block</button>
              </td>
            </tr>

            <tr>
              <td>103</td>
              <td>Ram Sharma</td>
              <td>ram@gmail.com</td>
              <td>Seller</td>
              <td>Not Active</td>
              <td>
                <button className="block-btn">Block</button>
              </td>
            </tr>

            <tr>
              <td>104</td>
              <td>Vishnu Verma</td>
              <td>vishnu@gmail.com</td>
              <td>User</td>
              <td>Active</td>
              <td>
                <button className="block-btn">Block</button>
              </td>
            </tr>

            <tr>
              <td>105</td>
              <td>Neha Roy</td>
              <td>neha@gmail.com</td>
              <td>Seller</td>
              <td>Not Active</td>
              <td>
                <button className="block-btn">Block</button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Users;