import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosExercise } from "../../utils/AxiosData";
import { Container_Info, Info, ExerciseImg } from './ExerciseInfo.style';
import muscle from '../../assets/muscle.png';
import mental from '../../assets/mental.png';
import smile from '../../assets/smile.png';
import SimilarExercise from '../exercise/SimilarExercise';

export const ExerciseInfo = () => {

  const [detail, setDetail] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const getExerciseDetail = async () => {
      const exercise = await axiosExercise(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`)

      setDetail(exercise);
    }

    getExerciseDetail();
  }, [id])

  return (
    <div>
      <Container_Info>
        <ExerciseImg>
          <img src={detail.gifUrl} alt={detail.name}/>
        </ExerciseImg>

        <Info>
          <h1>{detail.name}</h1>
          <p>
            Enhance your endurance, strength, and flexibility with this dynamic exercise that engages multiple muscle groups simultaneously. Through fluid and coordinated movements, you'll strengthen your core, upper, and lower body muscles while improving your range of motion. Embrace the challenge and feel the empowering benefits as you build a well-rounded physique and boost your overall athletic performance.
          </p>

          <div className='benefits'>
            <h3>Benefits</h3>
            <div>
              <img src={muscle} alt="Muscle icon" />
              <span>Strong muscles and better body resistance</span>
            </div>
            <div>
              <img src={mental} alt="Mental icon" />
              <span>Improve your mental health</span>
            </div>
            <div>
              <img src={smile} alt="Smile icon" />
              <span>Elevate your mood and creativity</span>
            </div>
          </div>

          <div className='repetitions'>
            <h3>Repetitions</h3>
            <p>3 sets of 15, resting for 30 seconds between sets</p>
            <p><strong>Reminder</strong>: Adjust the repetitions according to your needs and consult a healthcare professional or personal trainer</p>
          </div>
        </Info>
      </Container_Info>

      <SimilarExercise target={detail.target} name={detail.name}/>
    </div>
  );
};

export default ExerciseInfo;
