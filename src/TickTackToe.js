import {Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';

let i=0;
let visited=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

const TickTackToe = () => {

  const [text0,setText0]=useState("");
  const [text1,setText1]=useState("");
  const [text2,setText2]=useState("");
  const [text3,setText3]=useState("");
  const [text4,setText4]=useState("");
  const [text5,setText5]=useState("");
  const [text6,setText6]=useState("");
  const [text7,setText7]=useState("");
  const [text8,setText8]=useState("");

  useEffect(()=>{
    console.log("hey");
  },[4])

  const [player_x,setPlayer_x]=useState("Player_x");
  const [player_0,setPlayer_0]=useState("Player_0");
  const [win_x,setWin_x]=useState(0);
  const [lose_x,setLose_x]=useState(0);
  const [win_0,setWin_0]=useState(0);
  const [lose_0,setLose_0]=useState(0);


  const initial=()=>{
    setText0(""); setText1(""); setText2("");
    setText3(""); setText4(""); setText5("");
    setText6(""); setText7(""); setText8("");
    visited=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
    i=0;
  }

  const checkForWinner=()=>{
    if(visited[0]!=-1 && visited[0]==visited[1] && visited[1]==visited[2]){return visited[0];}
    if(visited[3]!=-1 && visited[3]==visited[4] && visited[4]==visited[5]){return visited[3];}
    if(visited[6]!=-1 && visited[6]==visited[7] && visited[7]==visited[8]){return visited[6];}

    if(visited[0]!=-1 && visited[0]==visited[3] && visited[3]==visited[6]){return visited[0];}
    if(visited[1]!=-1 && visited[1]==visited[4] && visited[4]==visited[7]){return visited[1];}
    if(visited[2]!=-1 && visited[2]==visited[5] && visited[5]==visited[8]){return visited[2];}

    if(visited[0]!=-1 && visited[0]==visited[4] && visited[4]==visited[8]){return visited[0];}
    if(visited[2]!=-1 && visited[2]==visited[4] && visited[4]==visited[6]){return visited[2];}

  }

  const reset=()=>{
    initial();
    setWin_x(0);
    setLose_x(0);
    setWin_0(0);
    setLose_0(0);
  }

  const hey=(a)=>{
    // if already visited
    if(visited[a]!=-1){return;}

    let value=(i%2==0)?'X':0;
    i++;
    visited[a]=value;

    switch(a){
      case 0:
        setText0(value);
        break;
      case 1:
        setText1(value);
        break;
      case 2:
        setText2(value);
        break;
      case 3:
        setText3(value);
        break;
      case 4:
        setText4(value);
        break;
      case 5:
        setText5(value);
        break;
      case 6:
        setText6(value);
        break;
      case 7:
        setText7(value);
        break;
      case 8:
        setText8(value);
        break;
    }
    // check if there is any winner
    let winner=checkForWinner();
    if(winner=='X'){
      Alert.alert(player_x+" is winner");
      let w_x=win_x+1;
      let l_0=lose_0+1;
      setWin_x(w_x);
      setLose_0(l_0);
      initial();
    }
    if(winner==0){
      Alert.alert(player_0+" is winner");
      let w_0=win_0+1;
      let l_x=lose_x+1;
      setWin_0(w_0);
      setLose_x(l_x);
      initial();
    }

    // if game tie no one is winner and all boxes are filled
    if(i==9){initial()};
  }

  return (
    <View style={{backgroundColor:'#F5F5F5'}}>
      <Text
        style={{
          color: 'red',
          fontSize: 60,
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 30,
        }}>
        TicTacToe
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom:10}}>
        <TextInput
          style={{textAlign:'center', backgroundColor: '#2196F3', marginHorizontal: 15, width: '30%',borderRadius:10}}
          onChangeText={setPlayer_x}
          value={player_x}
        />
        <Text style={{fontSize:30}}>Vs</Text>
        <TextInput
          style={{textAlign:'center',backgroundColor: '#F44336', marginHorizontal: 15, width: '30%',borderRadius:10}}
          onChangeText={setPlayer_0}
          value={player_0}
        />
      </View>

      <View style={{marginHorizontal: '3%'}}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => hey(0)}>
            <Text style={styles.buttonFont}>{text0}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => hey(1)}>
            <Text style={styles.buttonFont}>{text1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => hey(2)}>
            <Text style={styles.buttonFont}>{text2}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => hey(3)}>
            <Text style={styles.buttonFont}>{text3}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => hey(4)}>
            <Text style={styles.buttonFont}>{text4}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => hey(5)}>
            <Text style={styles.buttonFont}>{text5}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => hey(6)}>
            <Text style={styles.buttonFont}>{text6}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => hey(7)}>
            <Text style={styles.buttonFont}>{text7}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => hey(8)}>
            <Text style={styles.buttonFont}>{text8}</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity
        style={{
          backgroundColor: '#96489c',
          width: 120,
          marginTop: 10,
          marginLeft: 125,
          borderRadius: 10,
        }}
        onPress={initial}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Restart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#7282ab',width: 60,marginTop: 5,marginLeft: 155,borderRadius: 5,}} onPress={reset}><Text style={{fontSize: 15, textAlign: 'center'}}>Reset</Text></TouchableOpacity>
      <Text
        style={{
          marginTop: 15,
          color: '#849456',
          fontSize: 50,
          textAlign: 'center',
        }}>
        ScoreBoard
      </Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={{fontWeight:'bold', textAlign:'center',color:'#a35c22'}}>Player</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={{fontWeight:'bold', textAlign:'center',color:'#a35c22'}}>Win</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={{fontWeight:'bold', textAlign:'center',color:'#a35c22'}}>Lose</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{player_x}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{win_x}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{lose_x}</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{player_0}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{win_0}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{lose_0}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TickTackToe;

const styles = StyleSheet.create({
  column:{
    flexDirection:'row',
  },
  button: {
    height: 90,
    width:'29.33%',
    marginHorizontal:'2%',
    marginVertical:7,
    backgroundColor: '#CCCCCC',
    borderRadius:10
  },
  buttonFont:{
    color:'#333333',
    fontSize:70,
    fontWeight:'bold',
    textAlign:'center'
  },
  inputFont:{
    fontSize:20,
  },
  table: {
    margin:5,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableCell: {
    borderLeftWidth:1,
    flex: 1,
    padding: 10,
  },
  cellText: {
    textAlign: 'center',
  },
});
