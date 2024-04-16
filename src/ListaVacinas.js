import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { recuperarVacinas } from './utils/storage';
const ListaVacinas = () => {
    const [vacinas, setVacinas] = useState([]);
    useEffect(() => {
        const carregarVacinas = async () => {
            const vacinasArmazenadas = await recuperarVacinas();
            setVacinas(vacinasArmazenadas);
        };
        carregarVacinas();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Vacinas</Text>
            <FlatList
                data={vacinas}
                renderItem={({ item }) => 
                <Text style={styles.item}>
                Nome do Pet: {item.nomePet}{'\n'}
                Data de Nascimento: {item.DataNasc}{'\n'}
                Vacina:{item.nomeVacina}{'\n'}
                Data da vacina: {item.DataVac}</Text>}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    item: {
        padding:10,
        margin:5,
        height:120,
        borderWidth: 3,
        borderColor: "thistle",
        fontSize: 20,
        marginBottom: 10,
    },
});
export default ListaVacinas;
