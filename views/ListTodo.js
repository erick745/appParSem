import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {VIEW_TODOS} from '../src/server/endpoints.js';
import Request from '../src/server/Request.js';
import Item from '../src/Item.js';
class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    var request = new Request('get', VIEW_TODOS, {}, (response) => {
      if (response.status == 200) {
        console.log('RESP200');
        this.setState({
          list: response.data,
        });
      }
    });
    request.start();
  }

  render() {
    console.log(this.state);
    return (
      <View style={{backgroundColor: '#34495e'}}>
        <Text style={{textAlign: 'center', color: 'white'}}>
          LISTA DE TAREAS
        </Text>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => (
            <Item
              name={item.name}
              description={item.description}
              date={item.date}
              hour={item.hour}
              done={item.done}
              id={item._id}
              realizado={(id) => {
                this.realizado(id);
              }}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    );
  }
}

export default ListTodo;
