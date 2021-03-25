import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';


export default class HomeScreen extends React.Component{

    constructor() {
        super();
        this.state = {
          text: '',
          isSearchPressed: false,
          isLoading: false,
          word  : "Loading...",
          lexicalCategory :'',
          definition : ""
        };
      }

      getWord=(word)=>{
          var searchKeyWord=word.toLowerCase()
          var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyWord+".json"
          //console.log(url)
          return fetch(url)
          .then((data)=>{
              if (data.status===200){
                  return data.json()
              }
              else{
                  return null
              }
          })
          .then((response)=>{
              //console.log(response)

            var responseObject = response
            console.log(responseObject)

            if(responseObject){
                var wordData = responseObject.definitions[0];
                console.log(wordData)
                var definition = wordData.description
                console.log(definition)
                var LexicalCategory = wordData.wordtype
                console.log(LexicalCategory)

                this.setState({
                    "word":this.state.text,
                    "definition":definition,
                    "lexicalCategory":LexicalCategory
                })

                
                console.log(this.state.lexicalCategory)
            }

            else{
                this.setState({
                    "word" : this.state.text,
                    "definition" : "Not Found",
                })
            }

          })
    
   
      }

    render(){
        return(
            <View style={{alignItems:'center'}}>
                
                <Text style={{fontSize:40}}>Dictionary</Text>

                <TextInput style = {{borderWidth: 2,
                    width: 500,
                    height:30,
                    marginTop:20,
                    marginBottom: 20}} 
                onChangeText = {text=>{
                    this.setState({
                        text: text,
                        isSearchPressed: false,
                        word  : "Loading...",
                        lexicalCategory :'',
                        examples : [],
                        defination : "",
                    })
                }}/>

                <TouchableOpacity style={{
                    width:100,
                    height:25
                }}
                
                onPress = {()=>{
                    this.setState({isSearchPressed : true})
                    this.getWord(this.state.text)
                }}>
                    <Text style={{fontSize:20,
                    textAlign: 'center',
                    fontWeight: 'bold'}}>Enter</Text>
                </TouchableOpacity>

                <View style={{alignItems:"center", marginTop: 10}}>
                
                    <Text style={{fontSize:30}}>Word : {this.state.word}</Text>

                </View>
                <View style={{alignItems:"center", marginTop: 10}}>

                    <Text style={{fontSize:25}}>Type : {this.state.lexicalCategory}</Text>

                </View>
                <View style={{alignItems:"center", padding: 20, }}>

                    <Text style={{fontSize:20}}>Definition : {''}</Text>
                    <Text style={{fontSize: 20,
                    textAlign:'center', marginLeft:40, marginRight:40, marginTop: 10}}>{this.state.definition}</Text>

                </View>
            </View>
            
        )
    }
}