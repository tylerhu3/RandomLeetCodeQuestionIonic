import { Storage } from '@capacitor/storage';


export class StorageSingleton {

    static setData = async(map ) => {
        // Store the value under "my-key"
        console.log('storing: ', map)
        await Storage.set({
            key: 'name',
            value: JSON.stringify([...map]),
          });
    }
    
    static getData = async() => {

        const { value } = await Storage.get({ key: 'name' });
        
        // console.log(`Hello ${value}!`);
        // console.log('getting data: ' , Storage.get({ key: 'name' }));
    
        // Get the value under "my-key"

        const newMap = new Map(JSON.parse(value));
        console.log("exporting map from storage: ", newMap);
        return newMap
    
    }
    
}