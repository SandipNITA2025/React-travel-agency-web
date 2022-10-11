import React from 'react'
import lighthouse from '../assets/lighthouse.png'
import {BiWorld} from 'react-icons/bi'
import{BsPerson, BsHeadphones} from 'react-icons/bs'
import styled from 'styled-components'

const Offer = () => {
    const data=[
        {
            id:1,
            text:"Best Travel Guide Always for your Services",
            icon: <BsPerson/>,
            color: 'red'
        },
        {
            id:2,
            text:"World Class Services Provided For You",
            icon: <BiWorld/>,
            color: 'green'
        },
        {
            id:1,
            text:"24/7 Strong Customer Support",
            icon: <BsHeadphones/>,
            color: 'yellow'
        },
    ]
  return (
    <Section id='offers'>
        <div className="image">
            <img src={lighthouse} alt="lighthouse" />
        </div>
        <div className="content">
            <div className="title">
                <h1>
                We are Offering in Total 793 Tours Across the World
                </h1>
            </div>
            <ul className="list">
                {
                    data.map(({id, text, icon, color})=>{
                        return(
                            <li key={id}>
                                <div className={`icon ${color}`}> {icon} </div>
                                <div className="text">
                                    <h3>{text}</h3>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </Section>
  )
}

export default Offer

const Section= styled.section`
    margin: 8rem 0;
    display: flex;
    gap: 5rem;
    .image{
        img{
            height: 35rem;
        }
    }
    .content{
        .title{
            margin: 2rem 0;
            h1{
            font-size: 3rem;
            }
        }
        .list{
            li{
                display: flex;
                align-items: center;
                gap: 2rem;
                margin: 3rem 0;
                .icon{
                    padding: 0.5rem;
                    border-radius: 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 2rem;
                }
                .red{
                    background-color: #ff3010aa;
                    color: white;
                }
                .green{
                    background-color: #65ce5455;
                    color: #65ce54;
                }
                .yellow{
                    background-color: #ffc01e55;
                    color: #ffc01e;
                }
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px){
        flex-direction: column;
        margin: 5rem 2rem;
        gap: 1rem;
        .image{
            img{
                max-inline-size: 100%;
                block-size: auto;
            }
        }
        .content{
            .title{
                h1{
                    font-size: 2rem;
                    text-align: center;
                }
            }
            .list{
                li{
                    gap: 1rem;
                }
                .text{
                    h3{
                        font-size: 1rem;
                    }
                }
            }
        }
    }

`;