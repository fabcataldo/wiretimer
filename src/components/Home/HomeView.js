import React from 'react';
import {View, AppState, Text, TouchableOpacity} from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';
import StopwatchButton from '../StopwatchButton/StopwatchButton';
import AsyncStorage from '@react-native-community/async-storage';


class HomeView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            paused: false
        }
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }

    async handleAppStateChange(nextAppState){
        const now = new Date().getTime();
        const {time, paused} = this.state;

        const readTime = parseInt(await AsyncStorage.getItem('@time'));
        const readStateTimestamp = parseInt(await AsyncStorage.getItem('@appStateChangedTimestamp'));

        const timeDifference = now - readStateTimestamp;
        const newTime = readTime + timeDifference;

        if(nextAppState === 'active'){
            const isPaused = await AsyncStorage.getItem('@isPaused');
            const wasPaused = isPaused && isPaused === 'true';
            let newState = {
                paused: wasPaused,
                time: readTime
            };
            if(!wasPaused){
                newState.time = newTime;             
            }      
            this.setState(newState, this.startTimer);
        } else{
            await AsyncStorage.setItem('@isPaused', paused === true ? 'true' : 'false');
            await AsyncStorage.setItem('@time', time.toString());
            await AsyncStorage.setItem('@appStateChangedTimestamp', now.toString());
        }
    }

    componentDidMount(){
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount(){
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    clearTimer(){
        if(this.timerIntervalID){
            clearInterval(this.timerIntervalID);
        }
    }

    startTimer(){
        this.clearTimer();
        this.timerIntervalID = setInterval(()=>{
            const {time, paused}=this.state;
            if(!paused){
                this.setState({
                    time: time + 1000
                })    
            }
        }, 1000);
    }

    pauseTimer(){
        const {paused}=this.state
        this.setState({paused: !paused})
    }


    renderFinishButton(){
        const {time, paused} = this.state;
        if(time && !paused){
            return(
                <TouchableOpacity onPress={()=>{
                    this.clearTimer();
                    this.setState({
                        time:0
                    })
                }}>
                    <Text style={HomeViewStyles.finishButtonText}>
                        {i18n.HOME.FINISH_BTN_CAPTION}
                    </Text>
                </TouchableOpacity>
            )
        }
    }

    render(){
        const {time, paused}=this.state;
        return (
            <View style={[{flex:1},HomeViewStyles.viewContainer]}>
                <View style={{flex:1}}>
                    <Text style={HomeViewStyles.welcomeHeader}>
                        {i18n.HOME.WELCOME_HEADER}
                    </Text>
                </View>
                <View style={[{flex:2}, HomeViewStyles.buttonsContainer]}>
                    <StopwatchButton 
                        paused={paused}
                        time={time}
                        timerOnPressAction={this.pauseTimer}
                        startOnPressAction={this.startTimer}
                    ></StopwatchButton> 
                    {this.renderFinishButton()}
                </View>
            </View>
        )
    }
};

export default HomeView;