import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useContext, useEffect, useState } from "react"

import './Tab1.css';
import { QuestionsContext } from '../App';

const Tab1: React.FC = () => {
  const rawQuestions = useContext(QuestionsContext);
  console.log("tyler", rawQuestions[0]);

  function getRandomInt (max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  };


  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("tyler's Tab1");
  });

  const [index, setIndex] = useState(getRandomInt(rawQuestions.length)); 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random Question</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Random Question</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer url={rawQuestions[index].url} name={rawQuestions[index].num + ". "+ rawQuestions[index].title} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
