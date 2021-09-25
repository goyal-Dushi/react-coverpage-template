import Robot from "../components/robot";
import BrandContent from "../components/brandContent";

function HeaderSection() {
  return (
    <div className='welcome-area' id='welcome'>
      <div className='header-text'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='robo-anim'>
                <Robot />
              </div>
            </div>
            <BrandContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
