import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Filter from './Components/Filter';
import ListBookList from './Components/ListBookList';
import {connect} from 'react-redux';
import {getUserBooks} from '../../../redux/actions/Book';

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

  componentDidMount = () => {
    this.props.getUserBooks(this.props.userId);
  };

  toggleShowGridHandler = (isShowGrid) => {
    this.setState({showGrid: isShowGrid});
  };

  render() {
    const {showGrid} = this.state;
    const {books, navigation} = this.props;

    return (
      <View style={styles.container}>
        <Filter
          showGrid={showGrid}
          toggleShowGrid={this.toggleShowGridHandler}
        />
        <ListBookList
          navigation={navigation}
          books={books}
          showGrid={showGrid}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
    userId: state.user.user._id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserBooks: (userId) => dispatch(getUserBooks(userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
