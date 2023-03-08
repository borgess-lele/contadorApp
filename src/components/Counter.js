import {Component} from 'react';
import {Button, Text, View, StyleSheet, TextInput} from "react-native";

export default class Counter extends Component {
    state = {
        count: 0,
        step: 3,
    }
    increment() {
        this.setState({ count: this.state.count +  this.state.step});
    }
    decrement (){
        this.setState({count: this.state.count - this.state.step});
    }
    alterarStep(texto) {
        this.setState({ step: parseInt(texto) || 0 });
    }
    render() {
        return (
            <View style={styles.contador}>
                <TextInput
                value={this.state.step.toString()}
                onChange={(e) => this.alterarStep(e.nativeEvent.text)}
                keyboardType="numeric"
                />
                <TextInput
                defaultValue={this.state.step.toString()}
                onChangeText={(text) => this.alterarStep(text)}
                keyboardType="numeric"
                />
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