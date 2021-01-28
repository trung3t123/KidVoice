import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
} from 'react-native';
import styles from './style';
import CustomIcon from '../../../../Utils/CustomIcon';
import GridViewBooks from './GridViewBooks';
import ListViewBooks from './ListViewBooks';
import IMAGE from '../../../../Utils/ImageConst';
import {getUserBooks} from '../../../../redux/actions/Book';
import {useDispatch} from 'react-redux';

const ListBookList = ({
  userId,
  navigation,
  books,
  showGrid,
  setModalVisible,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const getUserBook = () => {
    dispatch(getUserBooks(userId));
  };
  useEffect(() => {
    console.log('books', books);
    console.log('showGrid', showGrid);
  }, [books, showGrid]);

  const renderBooksItem = (item, isGridView) => {
    if (isGridView) {
      //GridView Start
      return (
        <GridViewBooks
          setModalVisible={setModalVisible}
          navigation={navigation}
          item={item}
        />
      );
    }
    //listView Start
    return (
      <ListViewBooks
        setModalVisible={setModalVisible}
        navigation={navigation}
        item={item}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={setModalVisible}
        style={{
          alignSelf: 'center',
          height: 25,
          width: 200,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7E7E7E',
        }}>
        <Text style={{fontSize: 15, fontWeight: '400', color: 'white'}}>
          Thêm sách
        </Text>
      </TouchableOpacity>
      {books.length > 0 ? (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => getUserBook()}
            />
          }
          contentContainerStyle={
            showGrid === true ? {alignItems: 'center'} : null
          }
          numColumns={showGrid ? 2 : 1}
          data={books}
          renderItem={(item) => renderBooksItem(item, showGrid)}
          keyExtractor={(item) => item._id.toString()}
          key={showGrid ? 2 : 1}
        />
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View style={{height: 300, width: 300}}>
            <Image
              source={IMAGE.bookLibraryNotFound}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
          <Text style={{fontSize: 15}}>
            Bạn chưa thêm cuốn sách nào vào thư viện
          </Text>
          <TouchableOpacity
            onPress={setModalVisible}
            style={{
              marginTop: 10,
              height: 50,
              width: 200,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#7E7E7E',
            }}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
              Thêm ngay
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ListBookList;
