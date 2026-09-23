import homeImg from "../assets/sale-image.jpg";

function HomeBanner() {
  return (
    <div class="sale-image">
      <img src={homeImg} alt="Sale Image" />
      <div class="sale-image__offer">
        <h2>Udemy Flash Sale! 24 hours to save.</h2>
        <p>
          Get the top courses for just 499.just one day to save but a lifetime
          to learn
        </p>
      </div>
    </div>
  );
}

export default HomeBanner;
