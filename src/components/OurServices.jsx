import React from "react";
import styled from "styled-components";
import corporate from "../assets/corporate.jpg";
import privateparties from "../assets/privateparties.jpg";
import weddings from "../assets/weddings.jpg";
import { useState } from "react";
import Moreinfo from "./Moreinfo";
const ServicesContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const CardWrapper = styled.div`
  perspective: 1000px;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ isFlipped }) =>
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardFront = styled.div`
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 20px;
  color: #333;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

const services = [
  {
    title: "Weddings",
    description:
      "Create your dream wedding with our comprehensive wedding planning services, including venue selection, decor design, catering, and more.",
    imageUrl: weddings, // Replace with actual image paths
    backContent:
      "- Full-Service Wedding Planning : Enjoy a stress-free wedding planning experience with our comprehensive services, including venue selection, theme development, vendor management, and day-of coordination. - Destination Weddings : Whether you dream of saying on a sun-kissed beach or in a historic castle, we specialize in planning destination weddings that reflect your love story ",
  },
  {
    title: "Corporate",
    description:
      "Elevate your company's image with meticulously planned corporate events, from conferences and product launches to gala dinners and team-building retreats.",
    imageUrl: corporate, // Replace with actual image paths
    backContent: "More details about Corporate events...",
  },
  {
    title: "Private Parties",
    description:
      "Celebrate life's milestones in style with our bespoke private party planning, whether it's a birthday celebration, anniversary party, or intimate gatherings.",
    imageUrl: privateparties, // Replace with actual image paths
    backContent: "More details about Private Parties...",
  },
];

const OurServices = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <ServicesContainer>
      <Title>Our Services</Title>
      <CardsContainer>
        {services.map((service, index) => (
          <CardWrapper key={index} onClick={() => handleCardClick(index)}>
            <Card isFlipped={flippedIndex === index}>
              <CardFront>
                <CardImage src={service.imageUrl} alt={service.title} />
                <CardContent>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </CardFront>
              <Moreinfo />
              <CardBack>
                <CardContent>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.backContent}</CardDescription>
                </CardContent>
              </CardBack>
            </Card>
          </CardWrapper>
        ))}
      </CardsContainer>
    </ServicesContainer>
  );
};

export default OurServices;
