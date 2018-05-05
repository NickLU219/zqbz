import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';
import { InputItem } from 'antd-mobile'

export default class LoginPage extends React.Component {
    render() {
        return (
            <View>
                <SafeAreaView/>
                <View >
                    <Image source={require("../img/my_top_bg.png")} style={{height:120, width:"100%"}}/>
                    <Image source={require("../img/my_icon.png")} style={{height:110, marginTop:"-10%",alignSelf:"center"}} />
                    <Text style={{alignSelf:"center", fontSize:20,marginTop:10, marginBottom:30}}>宿迁支队管理员(8532)</Text>
                </View>
                <InputItem
                style={{marginLeft: 30, marginRight: 30}}
                    clear
                    onErrorPress={() => alert('clicked me')}
                    value=""
                    onChange={(value) => {
                    
                    }}
                    placeholder=""
                >
                用户名
                </InputItem>
                
            </View>
        )
    }
}