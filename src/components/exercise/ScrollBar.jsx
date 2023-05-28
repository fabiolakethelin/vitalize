import { useEffect, useRef } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { axiosExercise } from "../../utils/AxiosData";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
import { ScrollMenu, Slider } from "./ScrollBar.style";
import BodyPart from "./BodyPart";

export const ScrollBar = () => {

  const [{bodyPartList}, dispatch] = useStateProvider();

  useEffect(() => {
    const getExercises = async () => {
      const bodyPartList = await axiosExercise('https://exercisedb.p.rapidapi.com/exercises/bodyPartList')

      dispatch({type: 'Set_BodyPartList', bodyPartList})
    }

    getExercises();
  }, [])

  const sliderRef = useRef(null);

  const LeftArrow = () => {
    sliderRef.current.scrollLeft -= 300
  }
  
  const RightArrow = () => {
    sliderRef.current.scrollLeft += 300
  };

  return (
    <ScrollMenu >
      <AiOutlineDoubleLeft className="arrow" onClick={LeftArrow }/>

      <Slider ref={sliderRef}>
        {
        bodyPartList.map((item, index) => (
          <BodyPart key={index} item={item}/>
        ))
        }
      </Slider>

      <AiOutlineDoubleRight className="arrow" onClick={RightArrow }/>
    </ScrollMenu>
  )
};

export default ScrollBar;