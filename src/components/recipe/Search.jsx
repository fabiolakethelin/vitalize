import { useEffect, useState } from "react";
import { useStateProvider } from '../../utils/StateProvider';
import { axiosRecipe } from "../../utils/AxiosData";
import { Container, Search_input, Calories_input } from './Search.style';
import {IoMdSearch} from 'react-icons/io';

export const Search = () => {

    const [{}, dispatch] = useStateProvider();

    const [search, setSearch] = useState('');
    const [maxCalories, setMaxCalories] = useState('');

    useEffect(() => {
        const getRandomRecipe = async () => {
            const randomRecipes = await axiosRecipe({params: {query: 'potato', maxCalories: '300'}});

            dispatch({type: 'Set_Recipes', recipes: randomRecipes})
        };
        getRandomRecipe();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const getRecipe = async () => {
                const searchRecipes = await axiosRecipe({params: {query: search, maxCalories: maxCalories ? maxCalories : '300'}});

                dispatch({type: 'Set_Recipes', recipes: searchRecipes})

                setSearch('');
                setMaxCalories('');
            };

            getRecipe();
        }
    };


    return (
        <Container>
            <Search_input>
                <input
                    type='text'
                    placeholder='Search Recipe'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())} />
            </Search_input>
            <Calories_input>
                <input
                    type='number'
                    placeholder='Max Calories'
                    value={maxCalories}
                    onChange={(e) => setMaxCalories(e.target.value.toString())} />
            </Calories_input>
            <IoMdSearch onClick={handleSearch}/>
        </Container>
    );
};

export default Search