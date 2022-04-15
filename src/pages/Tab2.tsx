import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import  '../data/IonicStorage';
import { StorageSingleton } from '../data/IonicStorage';

const Tab2: React.FC = () => {


  //Execute #1
  useIonViewWillEnter(() => {
    // StorageSingleton.setData({1:true, 2:true, 3:true});
    // console.log('ionViewWillEnter event fired');
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

 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favorites </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer url="#" name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
