import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 16,
        margin: 8,
        backgroundColor: '#fff'
    }
})

const NasaItem = ({nasa}) => {
    return (
        <View style={styles.card}>
            <Text>Title: {title.name}</Text>
            <Text>explanation: {nasa.explanation}</Text>
        </View>
    )
}

const Home = () => {
    const [nasa, setNasa] = useState()

    const fetchNasa = async () => {
        try {
            const {data} = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            setNasa(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNasa()
    }, [])

    return (
        <View>
            <FlatList 
                data={nasa} 
                renderItem={({item}) => 
                    <NasaItem nasa={item}/>
                }
            />
        </View>
    );
}

export default Home;