import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import axios from 'axios';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  //actualizamos el estado

  realizado() {
    if (this.props.done) {
      const res = axios.put(`http://192.168.0.10:8000/todos/${this.props.id}`, {
        done: 'false',
      });
    }
    if (!this.props.done) {
      const res = axios.put(`http://192.168.0.10:8000/todos/${this.props.id}`, {
        done: 'true',
      });
    }
    alert('Cambiado el estado, reinicie para ver los cambios.');
  }
  render() {
    if (this.props.done) {
      var done2 = 'TRUE';
    }
    if (!this.props.done) {
      var done2 = 'FALSE';
    }
    return (
      <View style={styles.containerlist}>
        <View style={styles.textstyle}>
          <Text>NOMBRE: {this.props.name}</Text>
        </View>
        <View style={styles.textstyle}>
          <Text>DESCRIPCION: {this.props.description}</Text>
        </View>
        <View style={styles.textstyle}>
          <Text>FECHA: {this.props.date}</Text>
        </View>
        <View style={styles.textstyle}>
          <Text>HORA: {this.props.hour}</Text>
        </View>
        <View style={styles.textstyle}>
          <Text>FINALIZADO: {done2}</Text>
        </View>
        <View>
          <Button
            title="Cambiar Estado"
            color="#34495e"
            onPress={() => {
              this.realizado(this.props.id);
              console.log(this.props.id);
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerlist: {
    flexDirection: 'column',
    backgroundColor: '#b3b6b7',
    marginTop: 5,
    padding: 5,
    borderRadius: 10,
    elevation: 4,
  },
  textstyle: {
    justifyContent: 'flex-start',
    width: '70%',
  },
});
export default Item;
