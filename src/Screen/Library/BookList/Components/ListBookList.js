import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './style';
import CustomIcon from '../../../../Utils/CustomIcon';
import GridViewBooks from './GridViewBooks';
import ListViewBooks from './ListViewBooks';

const ListBookList = ({navigation, books, showGrid}) => {
  useEffect(() => {
    console.log('books', books);
    console.log('showGrid', showGrid);
  }, [books, showGrid]);

  const renderBooksItem = (item, isGridView) => {
    if (isGridView) {
      //GridView Start
      return <GridViewBooks navigation={navigation} item={item} />;
    }
    //listView Start
    return <ListViewBooks navigation={navigation} item={item} />;
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={
          showGrid === true ? {alignItems: 'center'} : null
        }
        numColumns={showGrid ? 2 : 1}
        data={books}
        renderItem={(item) => renderBooksItem(item, showGrid)}
        keyExtractor={(item) => item._id.toString()}
        key={showGrid ? 2 : 1}
      />
    </View>
  );
};

export default ListBookList;
