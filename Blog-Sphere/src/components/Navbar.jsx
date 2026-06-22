function Navbar() {
  return (
    <nav className="navbar">
      <h1>BlogSphere</h1>

      <input
        type="text"
        placeholder="Search stories..."
        className="search"
      />

      <div className="nav-links">
        <span>Write</span>
        <span>Notifications</span>
        <span>Profile</span>
      </div>
    </nav>
  );
}

export default Navbar;