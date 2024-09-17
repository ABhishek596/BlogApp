import React from 'react';
import { View, Text, Image ,ScrollView} from 'react-native';
import { styles } from './styles';
import AntDesign  from 'react-native-vector-icons/AntDesign'
const ViewPost = ({navigation,route}) => {
  const data = route?.params?.data;
  console.log('ggg',data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Left icon (you can replace this with your actual icon component) */}
        <View style={styles.leftIcon}>
          <AntDesign name='left' size={20} color={'#000000'} onPress={()=>navigation.goBack()}/>
        </View>

        {/* Title */}
        <View style={styles.title}>
          <Text>My Screen</Text>
        </View>
      </View>
      <ScrollView style={{flex:1}}>
      {/* Image */}
      <Image source={{uri:data?.imageUri}} style={styles.image} />

      {/* Title and description */}
      <View style={styles.content}>
        <Text style={styles.titleText}>{data?.title}</Text>
        <Text style={styles.descriptionText}>
        {data?.content}
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};



export default ViewPost;