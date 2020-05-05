import React from 'react';
import axios from 'axios';
import { PageLoadingPage } from './Loading';
import { BACKEND_URL } from '../Controllers/Constant';
import { HomeArticle, HomeHeader } from './Part/Home';


class Home extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: true,
            exchangeRate: 0,
            materials: [],
            enteredWeight: '',
            weights: [],
            prices: []
        }
    };

    UNSAFE_componentWillMount = async () => {
        try
        {
            await axios.get(`${BACKEND_URL}`)
            .then((res) => {
                let materials = res.data.materials;
                let prices = [];
                let weights = [];

                for(let index = 0; index < materials.length; index++)
                {
                    prices.push(materials[index].price);
                }

                for(let index = 0; index < materials.length; index++)
                {
                    weights.push(materials[index].weight);
                }
                this.setState(
                    {
                        isLoading: false,
                        exchangeRate: res.data.exchangeRate,
                        prices,
                        weights,
                        materials
                    }
                );
            })
            .catch((err) => {
                console.log(err);
            })
        }
        catch(error)
        {
            console.log(error);
        }
    }

    HandleOnChanging = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }
    

    render()
    {
        let {
            isLoading,
            prices,
            weights,
            materials,
            enteredWeight,
            exchangeRate
        } = this.state;
        console.log(enteredWeight);
        return(
            isLoading
            ?
            (<PageLoadingPage />)
            :
            (<div>
                <HomeHeader/>
                <HomeArticle 
                    prices={prices}
                    exchangeRate={exchangeRate}
                    weights={weights}
                    materials={materials}
                    enteredWeight={enteredWeight}
                    HandleOnChanging={this.HandleOnChanging}
                />
            </div>)
        )
    }
}

export default Home;