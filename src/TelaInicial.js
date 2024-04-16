import React from 'react';
import { View, Text, Button, StyleSheet, style } from 'react-native';
function TelaInicial({ navigation}) {
    return (
      <View style={styles.container}>
              <Button 
                  title="Ver Vacinas"
                  onPress={() => navigation.navigate('ListaVacinas')}
                
              />
              <Button
                  title="Adicionar Vacina"
                  onPress={() => navigation.navigate('AdicionarVacina')
                }
                color="#993399"
              />
              
          </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f0f0f0',
        marginTop:200,
        marginLeft:30,
        marginRight:30,

    },

  });
export default TelaInicial;
