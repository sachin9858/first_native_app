import React, { useEffect, useState } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity,TextInput,Modal,ScrollView, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

const Profile = () => {
    const [userDetails, setUserDetails] = useState(null);
    useEffect(()=> {
        const fetchUserDetails = async()=>{
            try{
                const currentUser = auth().currentUser;
                if(currentUser){
                    const usersCollection = await firestore().collection('profile').doc(currentUser.uid).get;
                    console.log(usersCollection);
                }
                else{
                    Alert.alert("User not loggin");
                }
            }
            catch(error){
                console.error("error in user details",error);
            }
        }
        fetchUserDetails();
    },[]);

    const handleLogout = async () => {
      try {
        await auth().signOut();
        // Navigate to the login screen or handle logout as needed
        console.log("logged out sucessfully");
        Alert.alert("Success",`logged Out`);
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };


  // State for user details
  const [name, setName] = useState('Sachin Yadav');
  const [bio, setBio] = useState('Software Engineer | Tech Enthusiast | Traveler');
  const [email, setEmail] = useState('sachinyadav2218@gmail.com');
  const [phone, setPhone] = useState('+91-9305691881');
  const [address,setAddress] = useState('C/O Shiv Shankar Yadav, Fattepurwa, 210504')

  // State for modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle Save
  const handleSave = () => {
    setModalVisible(false);
    // Add logic here to save data permanently if needed
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/your-profile-pic.jpg' }} // Replace with your image URL
          alt='!! Not found'
          style={styles.profileImage}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{bio}</Text>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logOutButton} onPress={()=> handleLogout()}>
            <Text style={styles.logOutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          I am a Software Engineer , I develop Mobile App and Web App. I love solving complex problems and building elegant solutions.
        </Text>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.sectionContent}>Email: {email}</Text>
        <Text style={styles.sectionContent}>Phone: {phone}</Text>
        <Text style={styles.sectionContent}>Location: {address}</Text>
      </View>

      {/* Social Links */}
      <View style={styles.socialLinks}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Twitter</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Editing Profile */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Bio"
              value={bio}
              onChangeText={setBio}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={phone}
              keyboardType="phone-pad"
              onChangeText={setPhone}
            />

            {/* Save and Cancel Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSave}
              >
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  logOutButton: {
    marginTop: 10,
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  logOutButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  socialButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#28a745',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Profile;
