import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { salvarVacinas, recuperarVacinas } from './utils/storage';
import { MaskedTextInput } from 'react-native-mask-text';

const AdicionarVacina = () => {
    const [nomeVacina, setNomeVacina] = useState('');
    const [nomePet, setNomePet] = useState('');
    const [DataNasc, setDataNasc] = useState('');
    const [DataVac, setDataVac] = useState('');
    const adicionarVacina = async () => {
        if (nomeVacina.trim() !== '' && nomePet.trim() !== '' && DataNasc.trim() !== '' && DataVac.trim() !== '') {
            const novaVacina = {
                id: Date.now(),
                nomeVacina,
                nomePet,
                DataNasc,
                DataVac
            };
            const vacinasAntigas = await recuperarVacinas();
            const novasVacinas = [...vacinasAntigas, novaVacina];
            await salvarVacinas(novasVacinas);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar Pet</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Pet:"
                value={nomePet}
                onChangeText={(text) => setNomePet(text)}
            />
            <MaskedTextInput
                mask='99/99/9999'
                placeholder='Data de Nascimento:'
                value={DataNasc}
                onChangeText={(text) => setDataNasc(text)}
                keyboardType='numberic'
                style={styles.input}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome da Vacina:"
                value={nomeVacina}
                onChangeText={(text) => setNomeVacina(text)}
            />
            <MaskedTextInput
                mask='99/99/9999'
                placeholder='Data de Aplicação:'
                value={DataVac}
                onChangeText={(text) => setDataVac(text)}
                keyboardType='numberic'
                style={styles.input}
            />
            <Button
                title="Adicionar"
                onPress={() => adicionarVacina(nomeVacina,DataVac,nomePet,DataNasc)}
                color="#993399"
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
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});
export default AdicionarVacina