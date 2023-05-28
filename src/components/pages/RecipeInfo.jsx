import React, { useEffect, useState } from 'react'
import { Container_Info, Instructions, Ingredients } from './RecipeInfo.style'
import { useParams } from 'react-router-dom'
import { axiosRecipeInfo } from '../../utils/AxiosData';

export const RecipeInfo = () => {

  const { id } = useParams();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getRecipeInfo = async () => {
      const recipeData = await axiosRecipeInfo({id});
      setDetail(recipeData);
    };
    
    getRecipeInfo();
  }, [id]);

  return (
    <Container_Info>
      <div>
        <h1>{detail.title}</h1>
        <img src={detail.image} alt={detail.title} />
      </div>

      <div>
        <h3>Summary</h3>
        <span></span>
        <p dangerouslySetInnerHTML={{__html: detail.summary}} />
      </div>

      <Instructions>
        <h3>Instructions</h3>
        <span></span>
        <p dangerouslySetInnerHTML={{__html: detail.instructions}}/>
        <a href={detail.sourceUrl} target='_blank' rel='noopener noreferrer' className='source'>
          See full recipe on {detail.sourceName}
        </a>
      </Instructions>

      <Ingredients>
        <h3>Ingredients</h3>
        <span></span>
        <ul>
          {detail.extendedIngredients && detail.extendedIngredients.map((ingredient) => (
            <li key={detail.id}>{ingredient.original}</li>
          ))}
        </ul>
      </Ingredients>
    </Container_Info>
  );
};

export default RecipeInfo