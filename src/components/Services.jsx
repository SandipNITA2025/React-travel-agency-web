import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import styled from "styled-components";

const Services = () => {
  const data = [
    {
      id: 1,
      image: service1,
      title: "Choose Destination",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      image: service2,
      title: "Explore the Place",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      image: service3,
      title: "Start Your Journey",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      image: service4,
      title: "Let's Enjoy",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <Section id="services">
      <div className="services">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="service" key={id}>
              <img src={image} alt="service" />
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;

const Section = styled.section`
  margin: 8rem 4rem;
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    .service {
      padding: 1rem 2rem;
      text-align: center;
      background-color: var(--card-gray);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      transition: var(--default-transition);
      h2 {
        color: var(--primary-text);
      }
      p {
        color: var(--secondary-text);
      }
      img {
        height: 125px;
        width: 125px;
      }
      &:hover {
        background-color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px){

    .services{
      grid-template-columns: 1fr;
    }
  }
`;
