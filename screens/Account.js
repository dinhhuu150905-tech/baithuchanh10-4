// screens/Account.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Giữ lại Entypo cho mũi tên bên phải

const Account = ({ navigation }) => {

  // Cấu trúc MenuItem được giữ nguyên, chỉ thay icon thư viện bằng thẻ Image
  const MenuItem = ({ iconSource, label }) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLabelRow}>
        {/* Thay thế icon font bằng Image từ máy */}
        <Image source={iconSource} style={styles.menuIconImage} />
        <Text style={styles.menuText}>{label}</Text>
      </View>
      <Entypo name="chevron-right" size={20} color="#181725" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.userName}>Afsar Hossen</Text>
            <TouchableOpacity style={styles.editIcon}>
              <Entypo name="edit" size={16} color="#53B175" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userEmail}>Imshuvo97@gmail.com</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <ScrollView contentContainerStyle={styles.menuContent} showsVerticalScrollIndicator={false}>
        {/* Truyền các link ảnh từ thư mục assets vào đây */}
        <MenuItem iconSource={require('../assets/Orders icon.png')} label="Orders" />
        <MenuItem iconSource={require('../assets/details_icon.png')} label="My Details" />
        <MenuItem iconSource={require('../assets/Delicery address.png')} label="Delivery Address" />
        <MenuItem iconSource={require('../assets/payment_icon.png')} label="Payment Methods" />
        <MenuItem iconSource={require('../assets/promo_icon.png')} label="Promo Cord" />
        <MenuItem iconSource={require('../assets/bell_icon.png')} label="Notifications" />
        <MenuItem iconSource={require('../assets/help_icon.png')} label="Help" />
        <MenuItem iconSource={require('../assets/about_icon.png')} label="About" />
      </ScrollView>

      <View style={styles.logoutWrapper}>
        <TouchableOpacity 
          style={styles.logoutBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Image source={require('../assets/logout_icon.png')} style={styles.logoutIconImage} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', padding: 25, alignItems: 'center', marginTop: 10 },
  profileImage: { width: 65, height: 65, borderRadius: 27, marginRight: 20 },
  profileInfo: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#181725', marginRight: 8 },
  editIcon: { marginTop: 2 },
  userEmail: { fontSize: 16, color: '#7C7C7C' },
  divider: { height: 1, backgroundColor: '#E2E2E2' },
  menuContent: { paddingHorizontal: 25, paddingBottom: 100 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  menuLabelRow: { flexDirection: 'row', alignItems: 'center' },
  
  // Style mới cho Icon ảnh
  menuIconImage: { width: 20, height: 20, marginRight: 20, resizeMode: 'contain' },
  
  menuText: { fontSize: 18, fontWeight: '600', color: '#181725' },
  logoutWrapper: { position: 'absolute', bottom: 20, left: 25, right: 25 },
  logoutBtn: { backgroundColor: '#F2F3F2', height: 67, borderRadius: 19, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  
  // Style cho icon logout
  logoutIconImage: { width: 20, height: 20, marginRight: 15, resizeMode: 'contain' },
  
  logoutText: { color: '#53B175', fontSize: 18, fontWeight: '600' },
});

export default Account;