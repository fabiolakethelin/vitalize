import { Intro_Section, Exercise_Section, Recipes_Section } from './Home.style';
import hero from '../../assets/hero.png';
import hero2 from '../../assets/hero2.png';
import ScrollBar from '../exercise/ScrollBar';
import LinkButton from '../layout/LinkButton';

export const Home = () => {

   return (
   <>  
   <Intro_Section>
      <div className='intro'>
         <h1>VITALIZE</h1>
         <h3>Optimize Your Health</h3>
         <p>
            With our easy-to-follow exercise instructions and step-by-step nutrition guides, you'll be able to create a sustainable and healthy lifestyle!
         </p>
      </div>

      <div className='intro-img'>
         <img src={hero} alt='' />
      </div>
   </Intro_Section>

   <Exercise_Section>
      <h2>Revitalize your body and mind with exercises chosen by you</h2>

      <LinkButton to='/exercise' text='Search Exercise' />

      <ScrollBar />
   </Exercise_Section>

   <Recipes_Section>
      <div className='recipes-intro'>
         <h2>Discover a World of Delicious Recipes Tailored to Your Calorie Needs!</h2>
         <p>
            Immerse yourself in a world of culinary possibilities, where calorie-conscious recipes take center stage, offering you a delightful journey of flavor and wellness
         </p>
         <LinkButton to='/recipes' text='Search Recipes' className='green'/>
      </div>

      <div className='recipes_img'>
         <img src={hero2} alt='' />
      </div>
   </Recipes_Section>

   </>
   );
};
  
  export default Home;