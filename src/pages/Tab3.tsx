import {useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave, IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { useContext, useState } from 'react';
import { QuestionsContext } from '../App';
import { Virtuoso } from 'react-virtuoso';
import { star, heart, heartOutline, starOutline } from 'ionicons/icons';

import { StorageSingleton } from '../data/IonicStorage';
import './Tab3.css';

const Tab3: React.FC = () => {
  
  interface FavItem {
    [key:string]: any;
  }
  

  const questionsRawList = useContext(QuestionsContext);
  console.log("tab3",questionsRawList[0]);
  const [faves, setFaves] = useState(new Map<string, boolean>());

  /*

    1. Upon entry... Get Data and ensure it's not null, otherwise just make a empty object

    2. Upon populating list, make a check to decided whether to color a fav icon yellow or nothing

    3. Upon clicking a icon, make a change object to favObject 

  */
  //Execute #1
  useIonViewWillEnter(() => {
    // StorageSingleton.setData({1:true, 2:true, 3:true});
    // console.log('ionViewWillEnter event fired');

    // faves.set("1", true);
    // faves.set("2", true);
    // faves.set("3", true);
    
   
    StorageSingleton.getData().then((favList)=>{
      console.log("favList: ", favList);
      setFaves(favList);
      }
       
   ).catch((error)=>{
       console.log("error retriving data from Storage: ", error);
   });


  });

  //Execute #2
  useIonViewDidEnter(() => {
    //  StorageSingleton.getData().then((x)=>{
    //    if(x != null && x["1"])
    //     console.log("got data: ", x["2"]);
    // }).catch((error)=>{
    //     console.log("error " )
    // });
    // console.log("got data 2: ", x);
  });

  //Execute #3
  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave event fired');
  });

  //Execute #4
  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave event fired');
  });


  const starOnClick = (e: { currentTarget: { getAttribute: (arg0: string) => any; }; }) => {
    const value1 = e.currentTarget.getAttribute("itemID")
    console.log("Question Number", value1)
    if(faves.has(value1)){
      faves.delete(value1);
    }else{
      faves.set(value1, true);
    }
    setFaves(faves);
    StorageSingleton.setData(faves);
  }
  function listElements() {

    let listOfQuestions: JSX.Element[] = [];
   
    questionsRawList.forEach((x)=>{
      // console.log("type of", typeof(x.num));
      
      listOfQuestions.push(
        (<IonItem key={x.num}>
            <IonLabel>{x.num + ". " +  x.title} </IonLabel>
            <IonIcon onClick={starOnClick} itemID={x.num}
            //border:"2px solid red",
             style={{height:"100%",  color:"pink"}} icon={( faves.get(x.num) == null)  ? heartOutline : heart}> </IonIcon>
        </IonItem>))
    })

    return listOfQuestions;
  }

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Questions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">All Questions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Virtuoso
        
        style={{ height: '100%' }}
        totalCount={questionsRawList.length}
        itemContent={listElements}
        followOutput={true}

      />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
