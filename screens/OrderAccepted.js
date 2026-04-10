// screens/OrderAccepted.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar 
} from 'react-native';

const OrderAccepted = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Nội dung chính giữa */}
      <View style={styles.content}>
        {/* Ảnh minh họa thành công (Cần file ảnh trong assets) */}
        <Image 
          source={require('../assets/order-success.png')} 
          style={styles.image} 
          resizeMode="contain" 
        />
        
        <Text style={styles.title}>Your Order has been{'\n'}accepted</Text>
        <Text style={styles.description}>
          Your items has been placed and is on{'\n'}it’s way to being processed
        </Text>
      </View>

      {/* Nút bấm phía dưới */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.trackOrderBtn}>
          <Text style={styles.trackOrderText}>Track Order</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#181725',
    textAlign: 'center',
    lineHeight: 35,
  },
  description: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 21,
    fontWeight: '500',
  },
  footer: {
    paddingBottom: 30,
  },
  trackOrderBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  trackOrderText: {
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

export default OrderAccepted;