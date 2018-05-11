import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { Icon, WhiteSpace, Card, SearchBar } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';

// import ApplyPage from './applyPage'
import InfoPage from './infoPage'
import API from '../../utils/apiMap'
import { connect} from 'react-redux'

import { getNewData } from '../action' 

class MyList extends React.Component {
	constructor(props) {
		super(props)
		const { getNewData,userinfo,token } = this.props
		getNewData(API.zichan_list, {token,aiUseDw:userinfo.odDwId})
	}
	state = {
		aiName: '',
	};

	onChange = (aiName) => {
		this.setState({ aiName });
	}

	clear = () => {
		this.setState({ aiName: '' });
	}
	shouldComponentUpdate(next) {
		// console.log("shouldComponentUpdate",next)
		if (next.rows === this.props.rows)
			return false
		else return true
	}
	getNewDataWithSearch = (value) => {
		const { getNewData,userinfo,token } = this.props
		getNewData(API.zichan_list, {token,aiUseDw:userinfo.odDwId, aiName:this.state.aiName})
	}
	render() {
		const {rows} = this.props
		return (
			<View>
				<SearchBar
				value={this.state.aiName}
				placeholder="搜索"
				onSubmit={this.getNewDataWithSearch}
				onCancel={this.clear}
				onChange={this.onChange}
				// showCancelButton
				/>
				<FlatList
				style={{backgroundColor: "#e0e0e0",height:"100%"}}
				automaticallyAdjustContentInsets={false}
				contentContainerStyle={{ paddingBottom: 100 }}
				ItemSeparatorComponent={()=>(<View style={{height:8, backgroundColor:"#e0e0e0"}}></View>)}
				data={rows}
				renderItem={
					({item}) => (
							<View style={{flex:1,flexDirection:"column", backgroundColor:"white"}}>
								<View style={{height:30,flex:1,flexDirection:"row",alignItems:"center"}}>
									<Text style={{fontSize:15,flex:4,color:"black",marginLeft:20}}>资产编号：{item.aiCode}</Text>
									{/* <Text style={{fontSize:15,flex:1,color:"blue"}} onPress={()=>this.props.navigation.navigate("Apply")}>申请领用</Text> */}
								</View>
								<View style={{height:1,backgroundColor:"#eee"}}></View>
								<TouchableHighlight underlayColor="transparent"
									onPress={()=> {this.props.navigation.navigate("Info", {key: item.aiId})}}>
									<View style={{ flex:1, flexDirection:"column"}}>
										<View style={{height:30, flex:1, flexDirection:"row",alignItems:"center"}}>
											<View style={{flex:1}}></View>
											<Text style={{flex:6}}>资产名称：<Text>{item.aiName}</Text></Text>
											<Text style={{flex:6}}>管理部门：<Text>{item.aiManageDept}</Text></Text>
										</View>
										<View style={{height:30, flex:1, flexDirection:"row",alignContent:"center"}}>
											<View style={{flex:1}}></View>
											<Text style={{flex:6}}>使用部门：<Text>{item.aiUseDept}</Text></Text>
											<Text style={{flex:6}}>使用人：<Text>{item.aiUsePerson}</Text></Text>
										</View>
										<View style={{flex:1,flexDirection:"row",height:30,backgroundColor:"#f0f0f0",alignItems:"center"}}>
											<View style={{flex:1}}></View>
											<Text style={{flex:10}}>使用状况：{item.aiUseStateName}</Text>
											<Text style={{flex:6}}>位置：{item.aiPlaceName}</Text>
											{/* <Text style={{flex:4}} onPress={()=>{}}>领用记录</Text> */}
										</View>
									</View>
								</TouchableHighlight>
							</View>
					)}
				/>
				{/* <View style={{height:40,width:"100%"}}></View> */}
			</View>
		);
	}
}


const MyListContaner = connect(
	(state)=>({
		rows: state.searchReducer.rows,
        userinfo : state.homeReducer.userinfo,
        token: state.homeReducer.token
	}),
	(dispatch)=>({
		getNewData: (url,params) => {dispatch(getNewData(url,params))}
	})
)(MyList)


export default StackNavigator(
	{
		Home: { 
			screen: MyListContaner,
			navigationOptions:{
				headerTitle:'资产列表',
				headerBackTitle:null,
			} 
		},
		Info: { 
			screen: InfoPage,
			navigationOptions:{
				headerTitle:'资产信息',
				headerBackTitle:null,
			}
		},
	},
	{
		initialRouteName: 'Home',
		mode: "card",
		headerMode: 'screen',
		headerBackTitle: "返回"
	}
);

// const styles=StyleSheet.create({
//     txt: {
//         textAlign: 'center',
//         textAlignVertical: 'center',
//         color: 'white',
//         fontSize: 30,
//     }

// })
