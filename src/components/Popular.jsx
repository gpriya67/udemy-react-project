import img1 from "../assets/p-8.jpg";
import img2 from "../assets/p-1.jpg";
import img3 from "../assets/p-2.jpg";
import img4 from "../assets/p-3.jpg";
import img5 from "../assets/p-5.jpg";
import img6 from "../assets/p-5.jpg";
import img7 from "../assets/p-6.jpg";
import img8 from "../assets/p-7.jpg";

function Popular() {
  return (
    <div className="popular">
      <h1 className="popular__title">Most Popular</h1>
      <p className="popular__subtitle">Pick the best fit</p>
      <div className="popular__container">
        <div className="course-card">
          <img src={img1} alt="" />
          <h3>2023 Python Data Visualisation MasterclassName</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img2} alt="" />
          <h3>Basic to Advance Programming with EMC</h3>
          <p>Col Steele</p>
          <p>5 ⭐⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img3} alt="" />
          <h3>Web Development BootCamp 2023</h3>
          <p>Col Steele</p>
          <p>3.2 ⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img4} alt="" />
          <h3>Master UI/UX Designing with Figma</h3>
          <p>Col Steele</p>
          <p>4.2 ⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img5} alt="" />
          <h3>Master UI/UX Designing with Figma</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img6} alt="" />
          <h3>Basic to Advance Programming with EMC</h3>
          <p>Col Steele</p>
          <p>3.2 ⭐⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img7} alt="" />
          <h3>Web Development BootCamp 2023</h3>
          <p>Col Steele</p>
          <p>5 ⭐⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div className="course-card">
          <img src={img8} alt="" />
          <h3>Master UI/UX Designing with Figma</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Popular;
