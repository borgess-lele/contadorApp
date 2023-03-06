import {Component} from 'react';
import {Button, Text, View, StyleSheet} from "react-native";

export default class Counter extends Component {
    state = {
        count: 0,
    }
    increment() {
        this.setState({ count: this.state.count + 1});
    }
    decrement (){
        this.setState({count: this.state.count - 1});
    }
    render() {
        return (
            <View style={styles.contador}>
                <Text>Contador: {this.state.count}</Text>
                <Button onPress={() => this.increment()} title="+" />
                <Button onPress={() => this.decrement()} title="-" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    }
})