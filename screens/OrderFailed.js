// screens/OrderFailed.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  Dimensions 
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const OrderFailed = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Nền mờ */}
      <View style={styles.backdrop} />
      
      {/* Nội dung Popup */}
      <View style={styles.modalContent}>
        {/* Nút đóng góc trái */}
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color="#181725" />
        </TouchableOpacity>

        {/* Nội dung chính */}
        <View style={styles.body}>
          {/* Ảnh minh họa lỗi (Cần file ảnh trong assets) */}
          <Image 
            source={require('../assets/order-failed.png')} 
            style={styles.image} 
            resizeMode="contain" 
          />
          
          <Text style={styles.title}>Oops! Order Failed</Text>
          <Text style={styles.description}>
            Something went terribly wrong.
          </Text>
        </View>

        {/* Nút bấm */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.retryBtn}>
            <Text style={styles.retryText}>Please Try Again</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.backHomeBtn}
            onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Main', params: { screen: 'Cart' } }],
            });
          }}
          >
            <Text style={styles.backHomeText}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: height * 0.8,
    position: 'relative', // Để định vị nút đóng
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },
  body: {
    alignItems: 'center',
    marginTop: 40, // Nhường chỗ cho nút đóng
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#181725',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '500',
  },
  footer: {
    width: '100%',
  },
  retryBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  backHomeBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backHomeText: {
    color: '#181725',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OrderFailed;
