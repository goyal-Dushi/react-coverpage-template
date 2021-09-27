import Robot from "../components/robot";
import BrandContent from "../components/brandContent";
import { Container } from "react-bootstrap";

function HeaderSection() {
  return (
    <div className='welcome-area' id='welcome'>
      <div className='header-text'>
        <Container>
          <div className='row'>
            <div className='col'>
              <div className='robo-anim'>
                <Robot />
              </div>
            </div>
            <BrandContent />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HeaderSection;
