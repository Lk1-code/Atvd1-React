import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  VACINAS: '@storage',
};

export const salvarDados = async (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonData);
  } catch (error) {
    console.error(`Erro ao salvar dados ${key} no AsyncStorage:`, error);
    throw error;
  }
};

export const recuperarDados = async (key) => {
  try {
    const jsonData = await AsyncStorage.getItem(key);
    return jsonData != null ? JSON.parse(jsonData) : [];
  } catch (error) {
    console.error(`Erro ao recuperar dados ${key} do AsyncStorage:`, error);
    throw error;
  }
};

export const salvarVacinas = async (vacinas) => {
  await salvarDados(STORAGE_KEYS.VACINAS, vacinas);
};


export const recuperarVacinas = async () => {
  return await recuperarDados(STORAGE_KEYS.VACINAS);
};

export const adicionarVacina = async (novaVacina) => {
  try {
    const vacinas = await recuperarVacinas();
    vacinas.push(novaVacina);
    await salvarVacinas(vacinas);
  } catch (error) {
    console.error('Erro ao adicionar nova vacina:', error);
    throw error;
  }
};

