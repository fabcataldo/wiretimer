import React, { useState, useEffect } from 'react';
import {Text, SafeAreaView, FlatList, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import HistoryViewStyles from './HistoryViewStyles';

const HistoryView = ()=>{
    const [activities, setActivities] = useState([]);
    const storageKey = "@activities";
    
    const getActivities = async ()=>{
        const activities = await AsyncStorage.getItem(storageKey);
        let parsedActivities = [];
        if(activities != null){
            parsedActivities = JSON.parse(activities);
        }
        setActivities(parsedActivities);
    }

    useEffect(()=>{
        getActivities();
    },[activities])

    const renderItem = ({item})=>{
        return(
            <View style={HistoryViewStyles.historyItemContainer}>
                <View style={{flex: 4}}>
                    <Text style={HistoryViewStyles.historyItemNameText}>
                        {item.name}
                    </Text>
                </View>
                <View style={HistoryViewStyles.historyItemsDetailsContainer}>
                    <View>
                        <Text style={HistoryViewStyles.historyItemsDetailsText}>
                            {moment.utc(item.date).format(i18n.DATE_FORMAT)}
                        </Text>
                    </View>
                    <View>
                        <Text style={HistoryViewStyles.historyItemsDetailsText}>
                            {moment.utc(item.timeSpent).format(i18n.TIME_FORMAT)}
                        </Text>
                    </View>
                </View>

            </View>
        );
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <Text style={HistoryViewStyles.historyPageHeader}>{i18n.HISTORY.SAVED_ACTIVITIES}</Text>
            <FlatList
                data = {activities}
                renderItem = {renderItem}
                keyExtractor = {(item, index)=>{
                    return item.name + index;
                }}
            />
        </SafeAreaView>
    )
}

export default HistoryView;