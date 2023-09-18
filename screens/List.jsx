import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const estrelaData = [
    {
        name: 'sol',
        type: 'anã amarela',
    },
    {
        name: 'sirius',
        type: 'estrela branca',
    },
    {
        name: 'rigel',
        type: 'gigante azul'
    }
]

const styles = StyleSheet.create({
    estrelaCard: {
        padding: 16,
        backgroundColor: '#5F9F9F',
        margin: 8,
        borderRadius: 20
    },
    text: {
        color: '#ffffff',
        fontSize: 24,
    }
})

const EstrelaItem = ({estrela}) => {
    const {name, type} = estrela

    return (
        <View style={styles.estrelaCard}>
            <Text style={styles.text}>Estrela: {name}</Text>
            <Text style={styles.text}>Tipo: {type}</Text>
        </View>
    )
}

const ListPage = () => {
    return (
        <SafeAreaView style={{marginTop: 20}}>
            <FlatList
                data={estrelaData}
                renderItem={({item}) => <EstrelaItem estrela={item}/>}
            />
            <Button title="infos nasa" onPress={() => navigation.navigate('Nasa')}/>
        </SafeAreaView>
    );
}

export default List;