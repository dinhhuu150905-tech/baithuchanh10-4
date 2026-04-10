// screens/CheckoutModal.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  Dimensions 
} from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons'; // Đưa Entypo lên đầu cho gọn

const { height } = Dimensions.get('window');

// BƯỚC 1: Thêm route vào props để nhận dữ liệu truyền sang
const CheckoutModal = ({ navigation, route }) => {
  
  // Lấy totalPrice từ params, nếu không có dữ liệu thì mặc định là 0
  const totalPrice = route.params?.totalPrice || 0;

  // Component phụ cho từng dòng tùy chọn
  const CheckoutOption = ({ label, value, icon, isImage }) => (
    <TouchableOpacity style={styles.optionRow}>
      <Text style={styles.optionLabel}>{label}</Text>
      <View style={styles.optionValueContainer}>
        {isImage ? (
          <Image source={require('../assets/card.png')} style={styles.cardImage} resizeMode="contain" />
        ) : (
          <Text style={styles.optionValue}>{value}</Text>
        )}
        <Entypo name="chevron-right" size={20} color="#181725" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Vùng mờ phía trên để đóng modal */}
      <TouchableOpacity 
        style={styles.backdrop} 
        activeOpacity={1} 
        onPress={() => navigation.goBack()} 
      />
      
      {/* Nội dung Modal chính */}
      <View style={styles.modalContent}>
        {/* Header Modal */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Checkout</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={24} color="#181725" />
          </TouchableOpacity>
        </View>

        {/* Các tùy chọn */}
        <View style={styles.optionsList}>
          <CheckoutOption label="Delivery" value="Select Method" />
          <CheckoutOption label="Pament" isImage={true} />
          <CheckoutOption label="Promo Code" value="Pick discount" />
          
          {/* BƯỚC 2: Thay thế giá trị tĩnh bằng biến totalPrice */}
          <CheckoutOption label="Total Cost" value={`$${totalPrice}`} />
        </View>

        {/* Điều khoản */}
        <Text style={styles.termsText}>
          By placing an order you agree to our{' '}
          <Text style={styles.termsHighlight}>Terms And Conditions</Text>
        </Text>

        {/* Nút Đặt hàng */}
        <TouchableOpacity 
          style={styles.placeOrderBtn}
          onPress={() => {
            navigation.goBack();
            navigation.navigate("OrderAccepted");
          }}
        >
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ... Phần styles giữ nguyên 100% như code cũ của bạn
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 40,
    maxHeight: height * 0.85,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#181725',
  },
  optionsList: {
    marginVertical: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  optionLabel: {
    fontSize: 18,
    color: '#7C7C7C',
    fontWeight: '600',
  },
  optionValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionValue: {
    fontSize: 16,
    color: '#181725',
    fontWeight: '600',
    marginRight: 10,
  },
  cardImage: {
    width: 25,
    height: 15,
    marginRight: 10,
  },
  termsText: {
    fontSize: 14,
    color: '#7C7C7C',
    lineHeight: 20,
    marginVertical: 25,
  },
  termsHighlight: {
    color: '#181725',
    fontWeight: '600',
  },
  placeOrderBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeOrderText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CheckoutModal;