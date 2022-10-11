import React from 'react'
import styled from "styled-components";
import cuba from '../assets/cuba.png'
import paris from '../assets/paris.png'
import japan from '../assets/japan.png'
import Button from './Button';

const Destination = () => {

    const data=[
        {
            id:1,
            image:cuba,
            name:'Cuba City'
        },
        {
            id:2,
            image:paris,
            name:'Paris'
        },
        {
            id:3,
            image:japan,
            name:'Japan'
        },
    ]

  return (
    <Section id='destination'>
        <div className="info">
            <h2>
                Top <span>Destinations</span> In the World.
            </h2>
            <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout from it.
            </p>
            <Button text='Discover More' />
        </div>

        <div className="destinations">
            {
                data.map(({id, image, name})=> {
                    return(
                        <div className="destination" key={id}>
                            <div className="image">
                                <img src={image} alt="destination" />
                            </div>
                            <div className="name">
                                <h3>{name}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Section>
  )
}

export default Destination;


const Section = styled.section`
    display: flex;
    gap: 5rem;
    .info{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 3rem;
        h2{
            font-size: 2rem;
            line-height: 3rem;
            span{
                color: var(--primary-color);
            }
        }
        p{
            color: var(--secondary-text);
        }
    }
    .destinations{
        flex: 2;
        display: flex;
        gap: 2rem;
        .destination{
            position: relative;
            img{
                height: 20rem;
            }
            .name{
                position: absolute;
                bottom: 0;
                height: 100%;
                width: 100%;
                background: linear-gradient(to bottom, #ffffff14, #000000ae);
                display: flex;
                flex-direction: column-reverse;
                h3{
                    margin-left: 1rem;
                    font-size: 1.5rem;
                    color: white;
                }
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px){
        margin: 2.5rem;
        flex-direction: column;
        .destinations{
            flex-direction: column;
            .destination{
                img{
                    width: 100%;
                }
            }
        }
    }
`;