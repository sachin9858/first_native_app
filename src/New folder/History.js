import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const History = () => {
    const[data,setData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const currentUser = auth().currentUser;
            try{
                // if user is login
                if(currentUser){
                    // going to milk collection of particular user by user uid
                    const docSnapshot = await firestore().collection("milk").doc(currentUser.uid).get();
                    
                    if (docSnapshot.exists) {
                        const docData = docSnapshot.data();
    
                        // Simplified process of collecting data
                        const fetchedData = [];
    
                        // Iterate over years in the document data
                        for (const [yearKey, yearMap] of Object.entries(docData)) {
                            // Iterate over months in the current year
                            for (const [monthKey, monthMap] of Object.entries(yearMap)) {
                                // Iterate over data points in the current month
                                for (const [dataPointId, dataPoint] of Object.entries(monthMap)) {
                                    // Push an object with the data point information
                                    fetchedData.push({year: yearKey,month: monthKey,dataPointId,dataPoint,});
                                }
                            }
                        }
    
                        // Update the state with fetched data
                        setData(fetchedData);
                    }
                    else{
                        console.log("user document doesn't exits");
                    }
                }
                // user is not login
                else{
                    console("user is not login");
                }
            }
            catch(error){
                console.log("!! Error in fetchData ",error);
            }
        }

        // calling fecthData function
        fetchData();
    });

  return (
    <View>
      <Text>History</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
            <View style={styles.row}>
                <Text style={styles.cell}>{item.dataPointId}/{item.month}/{item.year}</Text>
                <Text style={styles.cell}>{JSON.stringify(item.dataPoint)}</Text>
            </View>
        )}
    />
    </View>
  )
}

export default History

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cell: {
        flex: 1,
        padding: 5,
        borderRightWidth: 1,
        borderRightColor: '#ccc',
    },
});