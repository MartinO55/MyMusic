import { useState } from "react";
//Okay I realised too late that I should have used album names to link the images, not band names. BUT as everyone of these is fictional I don't think anyone will care
import BringMeThePencils from "../card/assets/BringMethePencils.png";
import EnglandPanic from "../card/assets/EnglandPanic.png";
import McStick from "../card/assets/McStick.png";
import Newtsica from "../card/assets/Newtsica.png";
import PurelyBrown from "../card/assets/PurelyBrown.png";
import RachelLehcar from "../card/assets/RachelLehcar.png";
import RachelsMidnightStudents from "../card/assets/RachelsMidnightStudents.png";
import SexySaturday from "../card/assets/SexySaturday.png";

import Header from "../Header/Header.jsx";
import Card from "../card/Card.jsx";
import FlexWrap from "../containers/FlexWrap.jsx";

function App() {
  return (
    //okay on reflection I am altering the design, mostly cause of the awesome album art I generated
    <>
      <Header></Header>
      <FlexWrap>
        <Card
          title={"I Will Survive"}
          bandName={"Bring Me the Pencils"}
          rating={"* * *"}
          albumArt={BringMeThePencils}
        />
        <Card
          title={"Imperfect love"}
          bandName={"Sexy Saturday"}
          rating={"* * * * *"}
          albumArt={SexySaturday}
        />
        <Card
          title={"Dear Future"}
          bandName={"Rachel's Midnight Students"}
          rating={"* *"}
          albumArt={RachelsMidnightStudents}
        />
        <Card
          title={"What You Did To Me"}
          bandName={"McStick"}
          rating={"* * * *"}
          albumArt={McStick}
        />
        <Card
          title={"White Lies"}
          bandName={"Newtsica"}
          rating={"* * * * *"}
          albumArt={Newtsica}
        />
        <Card
          title={"A set up"}
          bandName={"Rachel Lehcar"}
          rating={"* * *"}
          albumArt={RachelLehcar}
        />
        <Card
          title={"I Have A Helper"}
          bandName={"England Panic"}
          rating={"* * * * *"}
          albumArt={EnglandPanic}
        />
        <Card
          title={"Cultivating Love"}
          bandName={"Purely Brown"}
          rating={"* * * *"}
          albumArt={PurelyBrown}
        />
      </FlexWrap>
    </>
  );
}

export default App;
