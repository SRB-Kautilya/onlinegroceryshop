import Slider from "./_components/Slider";
import {  getSliders } from "./_utils/gloabalApi";

export default  async function Home() {

  const sliderList = await getSliders()

  return (
    <div>
      <Slider sliderList={sliderList} />
    </div>
  );
}
