import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from "react-native";
import axios from "axios";
import ReadMore from '@fawazahmed/react-native-read-more';
import { Colors } from "react-native/Libraries/NewAppScreen";


const HomePage = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getData()
    }, []);


    const getData = () => {
        var config = {
            method: 'get',
            url: 'https://newsapi.org/v2/everything?q=Apple&from=2021-08-07&sortBy=popularity&apiKey=4e6eed19c0b3461dbb533f86183b278e',
            // headers: {}
        };

        axios(config)
            .then(function (response) {
                setItems(response.data.articles)
                setLoading(false)
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    if (loading) {
        return <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}><ActivityIndicator size="large" color="#1E90FF" /></View>
    }
    else {

        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.cardsContainer}>
                        {items.map(data =>
                            <View style={styles.contentContainer} key={data.id}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title} key="gh1">{data.title}</Text>
                                    <Text style={styles.titleHeader} key="gh2">Author : {data.author}</Text>
                                </View>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{ uri: data.urlToImage }} key="gh3">

                                    </Image>
                                </View>

                                <View style={styles.description} key="gh7">
                                    <ReadMore numberOfLines={3}>
                                        {
                                            <Text style={styles.txt} key="g8">{data.description}.</Text>
                                        }
                                    </ReadMore>
                                </View>

                            </View>)}
                    </View>
                </ScrollView>

            </View>

        )
    }
}
export default HomePage

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#F8F8FF'
    },
    cardsContainer: {
        padding: '3%'
    },
    contentContainer: {
        backgroundColor: 'white',
        borderRadius: 6,
        marginVertical: '3%'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 14

    },
    titleContainer: {
        padding: '2%'
    },
    imageContainer: {
        height: 200,
        padding: '2%',
    },
    image: {
        height: null,
        width: null,
        resizeMode: 'cover',
        flex: 1,
        borderRadius: 5,
    },
    description: {
        padding: '2%',
        marginVertical: '2%',
    },
    txt: {
        fontSize: 16
    },
    titleHeader: {
        margin: '1%',
        color: 'tomato'
    }
})



