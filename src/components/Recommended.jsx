import img1 from '../assets/course-1.jpg'
import img2 from '../assets/course-2.jpg'
import img3 from '../assets/course-3.jpg'
import img4 from '../assets/course-4.jpg'

function Recommended() {
  return (
    <div class="recommended">
      <h1 class="recommended__title">Recommended for you</h1>
      <p>Pick the best fit</p>
      <div class="recommeded-container">
        <div class="course-card">
          <img src={img1} alt="" />
          <h3>2023 Python Data Visulisation Masterclass</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div class="course-card">
          <img src={img2} alt="" />
          <h3>Basic to Advance Programming with EMC</h3>
          <p>Col Steele</p>
          <p>4.2 ⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div class="course-card">
          <img src={img3} alt="" />
          <h3>Web Development BootCamp 2023</h3>
          <p>Col Steele</p>
          <p>5 ⭐⭐⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
        <div class="course-card">
          <img src={img4} alt="" />
          <h3>Master UI/UX Designing with Figma</h3>
          <p>Col Steele</p>
          <p>3.2 ⭐⭐⭐ (12,450 reviews)</p>
          <p>
            ₹ 499 <del>₹ 1999</del>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Recommended