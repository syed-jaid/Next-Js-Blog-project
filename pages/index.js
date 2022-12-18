import Formet from '../Layout/formet';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';


export default function Home() {
  return (
    <div >
      <Formet>
        <Section1 />
        <Section2 />
        <Section4 />
        <Section3 />
      </Formet>
    </div>
  )
}
