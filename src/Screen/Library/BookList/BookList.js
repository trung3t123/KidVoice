import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Filter from './Components/Filter';
import ListBookList from './Components/ListBookList';
import {connect} from 'react-redux';
import {getUserBooks} from '../../../redux/actions/Book';
import ModalAddBook from './Components/ModalAddBook';
import Modal from 'react-native-modal';

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
      addBookVisible: false,
    };
  }

  componentDidMount = () => {
    this.props.getUserBooks(this.props.userId);
  };

  setModalVisible = () => {
    const {addBookVisible} = this.state;
    this.setState({addBookVisible: !addBookVisible});
  };

  toggleShowGridHandler = (isShowGrid) => {
    this.setState({showGrid: isShowGrid});
  };

  render() {
    const {showGrid, addBookVisible} = this.state;
    const {books, navigation} = this.props;

    return (
      <View style={styles.container}>
        <Filter
          showGrid={showGrid}
          toggleShowGrid={this.toggleShowGridHandler}
        />
        <ListBookList
          setModalVisible={() => this.setModalVisible()}
          navigation={navigation}
          books={books}
          showGrid={showGrid}
        />
        <Modal
          isVisible={addBookVisible}
          useNativeDriver={true}
          animationInTiming={500}>
          <ModalAddBook setModalVisible={() => this.setModalVisible()} />
        </Modal>
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
