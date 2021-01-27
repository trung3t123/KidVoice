import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import BookElement from './BookElement';
import {connect} from 'react-redux';
import {loadHomeBook} from './../../../redux/actions/Book';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  booksContainer: {
    marginTop: 20,
    height: (deviceHeight * 30) / 100,
    paddingRight: (deviceWidth * 5) / 100,
    paddingLeft: (deviceWidth * 5) / 100,
    width: '100%',
  },
});

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getAppsBooks();
  };

  render() {
    const {books, navigation} = this.props;
    console.log('books', books);
    return (
      <View style={styles.booksContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{fontSize: 17}}>Truyện</Text>
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={() => navigation.navigate('Search', {query: 'books'})}>
            <Text>Xem thêm...</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 6}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={books}
            renderItem={({item}) => (
              <BookElement
                navigation={navigation}
                bookId={item._id}
                bookName={item.bookName}
                bookImage={
                  item.bookImage ? item.bookImage : '5fbe6fa64d4e4c0748e27711'
                }
              />
            )}
            keyExtractor={(item) => item._id.toString()}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.homeBooks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAppsBooks: () => dispatch(loadHomeBook()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
