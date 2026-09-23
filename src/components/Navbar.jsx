import logo from "../assets/udemy-logo.png";

function Navbar() {
  return (
    <div class="navbar">
      <div class="navbar__s1">
        <h1 class="navbar__s1__title">
          <img src={logo} alt="udemy-logo" />
        </h1>
      </div>
      <div class="navbar__s2">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search for anything here Tech, Business, Art..." />
      </div>
      <div class="navbar__s3">
        <p>Courses</p>
        <p>My Learning</p>
        <div class="mylearning">
          <p>My Learning</p>
          <div class="mylearning__popup">
            <p>You did not purchase anything yet</p>
          </div>
        </div>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-notdog-duo fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="navbar__s4">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
