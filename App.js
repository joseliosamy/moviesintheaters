import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, Image, View, Button, ActivityIndicator} from 'react-native';
import { styles } from './style';

const App = () => {
  const [ movie, setMovie ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(()=>{
    const requestMovies = async () =>{
      setLoading(true)
      const req = await fetch('https://api.b7web.com.br/cinema/');
      const json = await req.json();
      
      if(json){
        setMovie(json)
      }
      setLoading(false)
    }
    requestMovies()
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.totalMoviesText}>{movie.length} FILMES ENCONTRADOS</Text>

      { loading &&
        <View style={styles.loadingArea}>
          <ActivityIndicator size='large' color='#fff' />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      }
      { !loading &&
        <>
          <FlatList
        data={movie} 
        style={styles.list}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.movieTitle}>{item.titulo}</Text>
            <Image 
              source={{uri: item.avatar}}
              style={styles.movieImage}
              resizeMode='contain'
            />
          </View>
        )}
        keyExtractor={item => item.titulo}
      />
        </>
      }
      
    </SafeAreaView>

  );
}

export default App;