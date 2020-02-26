import React from 'react';
import RoundBackground from '../../molecules/roundBackground';
import Card from '../../components/cards';
import Typography from '../../components/typography';


const Card1 = () => {
    return (
      <div>
        <Card
          cardlayout="vertical"
          bgColor="white"
            >
                <div style={{left: "20px", position: "relative"}}>

          <RoundBackground></RoundBackground>
          <Typography size={"small"} style={{fontWeight: "bold"}}>App Development</Typography>
          <Typography SIZE="paragraph" style={{ lineHeight: "22px" }}>
            Lorem ipsum dolor sit amet, imperdi ut consectetuer
          </Typography>
                </div>
        </Card>
      </div>
    );

}

export default Card1