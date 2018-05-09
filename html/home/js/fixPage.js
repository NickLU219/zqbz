import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { List, WhiteSpace, InputItem, Button } from 'antd-mobile'

export default class FixPage extends React.Component {
    constructor(props) {
        super(props)
        const {item } = this.props.navigation.state.params
        console.log(item)
    }
    getDept = () => {
        console.log("获取领用部门")
        this.props.navigation.navigate("Commonlist", {key: "dept"})
    }
    getPerson = () => {
        console.log("获取领用人")
        this.props.navigation.navigate("Commonlist", {key: "user"})
    }
    render() {
        return (
            <List renderHeader={()=>{}}>
                <List.Item
                    extra={ <TextInput placeholder="请填写维修原因" style={{textAlign: "right"}} /> }>
                    维修原因
                </List.Item>
                <List.Item
                    extra={ <TextInput placeholder="请填写维修内容" style={{textAlign: "right"}} /> }>
                    维修内容
                </List.Item>
                <List.Item
                    extra={ <Text></Text> }>
                    维修时间
                </List.Item>
                <List.Item
                    arrow="horizontal"
                    extra={
                        <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end", alignItems:"center", height:40}}>
                            <Text style={{color:"#ccc"}} onPress={this.getDept}> 请选择维修部门 </Text>
                        </View>
                    }>
                    维修部门
                </List.Item>
                <List.Item
                    arrow="horizontal"
                    extra={
                        <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end", alignItems:"center", height:40}}>
                            <Text style={{color:"#ccc"}} onPress={this.getPerson}> 请选择维修人 </Text>
                        </View>
                    }>
                    维修人
                </List.Item>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button type="primary">提交</Button>
            </List>
        );
    }
}