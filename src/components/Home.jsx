import React, { useState } from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.png'
import Button from './Button'

const Home = () => {


    const [value, setValue]=useState('$500 - $700')

  return (
    <Section>
        <div className="background">
            <img src={hero} alt="hero" />
        </div>
        <div className="content">
            <div className="info">
                <h1>It's Time To</h1>
                <h1>Explore the World</h1>
                <Button text= "Plan Your Trip" />
            </div>
            <div className="planner">
                <form>
                    <div className="row">
                        <label>Destinations</label>
                        <select>
                            <option>Arab Egypt</option>
                            <option>Udaipur India</option>
                        </select>
                    </div>
                    <div className="row">
                        <label>Chech In</label>
                        <input type="date" />
                    </div>
                    <div className="row">
                        <label>Price Range</label>
                        <input type="text" value={value} onChange={e =>{
                            setValue(e.target.value)
                        }} />
                    </div>
                    <div className="roe">
                    <Button text= "Discover More" />
                    </div>
                </form>
            </div>
        </div>
    </Section>
  )
}

export default Home

const Section = styled.section`
    margin-top: 2rem;
    position: relative;

    .background{
        img{
            height: 90vh;
            width: 100%;
        }
    }
    .content{
        .info{
            position: absolute;
            top: 5rem;
            margin-left: 8rem;
            h1{
                font-size: 5rem;
                margin-bottom: 1rem;
            }
        }
        .planner{
            position: absolute;
            right: 0;
            bottom: -2rem;
            background-color: white;
            padding: 2rem;
            box-shadow: rgba(100, 100, 111, .2) 0px 7px 29px 0px;
            form{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 3rem;
                .row{
                    display: flex;
                    flex-direction: column;
                    text-align: start;
                    label{
                        font-size: 1rem;
                        color: var(--secondary-text);
                    }
                    input, select{
                        color: var(--primary-color);
                        font-size: 1.1rem;
                        margin-top: .5rem;
                        border-bottom: 1px solid #f5ebe9;
                    }
                    input:focus{
                        outline: none;
                    }
                    input[type="date"]::-webkit-calendar-picker-indicator{
                        cursor: pointer;
                        filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
                            brightness(105%) contrast(101%);
                    }
                }
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px){
        margin-top: 0rem;
        .background{
            img{
                height: 50vh;
            }
        }
        .content{
            .info{
                margin-left: 2rem;
                h1{
                    font-size: 2rem;
                    margin-bottom:1rem;
                }
            }
            .planner{
                position: initial;
                margin: 2rem;
                form{
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
        }
    }
`;