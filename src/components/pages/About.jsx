import logo from '../../assets/logo.png'
import { About_Container, Logo } from './About.style'

export const About = () => {
  return (
    <About_Container>
        <Logo>
          <img src={logo} alt='logo' />
        </Logo>

        <h2>About Our Platform</h2>
        <p>
          Welcome to our platform, your ultimate destination for a holistic approach to health and wellness. We are dedicated to empowering individuals like you to achieve their fitness goals and maintain a balanced lifestyle through a combination of calorie-based recipes and diverse physical exercises.
        </p>

        <h4>Delicious Calorie-Based Recipes:</h4>
        <p>
          Our platform offers a vast collection of mouthwatering recipes that are carefully curated based on their calorie content. Whether you are looking to lose weight, maintain a healthy weight, or simply adopt a more mindful approach to eating, our recipes are designed to suit your individual calorie needs. From breakfast to dinner, and everything in between, our culinary experts have crafted a wide range of dishes that are both nutritious and flavorful. Indulge in a variety of cuisines, explore new flavors, and savor the goodness of our calorie-based recipes.
        </p>

        <h4>Diverse Physical Exercises:</h4>
        <p>
          In addition to our delectable recipes, we understand the importance of incorporating physical activity into your wellness routine. Here, you will find a comprehensive selection of diverse physical exercises that target different muscle groups and cater to various fitness levels. Whether you are a beginner or an experienced fitness enthusiast, you are going to find a wide range of exercises to suit your preferences and help you achieve your fitness goals. From strength training to cardiovascular workouts, our exercise library is designed to keep you motivated, challenged, and engaged on your fitness journey.
        </p>
    </About_Container>
  );
};

export default About