const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo" style={{
        backgroundColor : "white",
        borderRadius : "10px",
        width : "85px",
        height : "50px"
      
      }}>
        <img src="/images/brand_logo.png" alt="logo" style={{
          padding:"5px"
        }} />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="login">Login</button>
    </nav>
  );
};

export default Navigation;
