import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, View } from 'react-native';
import FinishViewStyles from './FinishViewStyles';
import ResponsiveCentered from './ResponsiveCentered';
import ActionButton from './ActionButton';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

const FinishView = (props) => {
    const {timeSpent} = props.route.params;
    const [name, setName] = useState('');
    
    const saveTime = async()=>{
        const storageKey = "@activities";
        let activities = await AsyncStorage.getItem(storageKey);
        if(activities === null){
            activities = [];
        } else{
            activities = JSON.parse(activities);
        }
        const date = new Date().getTime();
        console.log('name saved: '+name)
        activities.push({
            name,
            timeSpent,
            date
        });
        console.log(activities)
        await AsyncStorage.setItem(storageKey, JSON.stringify(activities));
        props.navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 4, justifyContent: 'space-between' }}>
                <Text style={FinishViewStyles.mainHeader}>{i18n.FINISH.MAIN_HEADER}</Text>
                <Text style={FinishViewStyles.timerSubHeader}>{moment.utc(timeSpent).format(i18n.TIME_FORMAT)}</Text>
                <View style={{ flex: 0.2 }}></View>
            </View>
            <View style={{ flex: 1 }}>
                <ResponsiveCentered>
                    <Text style={FinishViewStyles.activityNameLabel}>{i18n.FINISH.ACTIVITY_NAME_HEADER}</Text>
                </ResponsiveCentered>
                <ResponsiveCentered>
                    <TextInput style={FinishViewStyles.activityNameInput} 
                        onChangeText={(txt)=>{
                            setName(txt);
                            console.log('name: '+name)
                        }}></TextInput>
                </ResponsiveCentered>
            </View>

            <View style={{ flex: 3}}>
                <ResponsiveCentered>
                    <View style={ FinishViewStyles.actionButtonsContainer }>
                        <ActionButton label={i18n.CANCEL} 
                            backgroundColor={'#F39527'} textColor={'#fff'}
                            onPress={()=>{
                                props.navigation.goBack();
                            }}
                        >
                        </ActionButton>
                        <ActionButton label={i18n.SAVE} backgroundColor={'#00CD5E'} 
                            textColor={'#fff'} onPress={saveTime}>
                        </ActionButton>
                    </View>
                </ResponsiveCentered>

            </View>


        </SafeAreaView>
    )
}

export default FinishView;