import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Filter from './Components/Filter';
import ListBookList from './Components/ListBookList';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
});

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGrid: false,
    };
  }

  toggleShowGridHandler = (isShowGrid) => {
    this.setState({showGrid: isShowGrid});
  };

  render() {
    const {showGrid} = this.state;
    return (
      <View style={styles.container}>
        <Filter
          showGrid={showGrid}
          toggleShowGrid={this.toggleShowGridHandler}
        />
        <ListBookList showGrid={showGrid} />
      </View>
    );
  }
}

export default BookList;
