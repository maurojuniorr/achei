import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FeedScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      image: require('./path/to/image1.jpg'), // Substitua pelo caminho da imagem do post
      object: 'Celular',
      status: 'Achado', // Opções: 'Achado' ou 'Perdido'
      likes: 10,
      user: {
        name: 'Michael B. Jordan',
        profilePic: require('./path/to/licensed-image.jpg'), // Substitua pelo caminho da imagem de perfil do usuário
      },
      timestamp: '1 hour ago',
      details: 'Detalhes do post...', // Adicione os detalhes do post aqui
    },
    {
      id: '2',
      image: require('./path/to/fone.jpg'),
      object: 'Fone de ouvido',
      status: 'Perdido',
      likes: 5,
      user: {
        name: 'Jane Doe',
        profilePic: require('./path/to/pin 2.jpg'),
      },
      timestamp: '2 hours ago',
      details: 'Detalhes do post...',
    },
	{
		id: '3',
		image: require('./path/to/image1.jpg'), // Substitua pelo caminho da imagem do post
		object: 'Celular',
		status: 'Achado', // Opções: 'Achado' ou 'Perdido'
		likes: 10,
		user: {
		  name: 'Michael B. Jordan',
		  profilePic: require('./path/to/licensed-image.jpg'), // Substitua pelo caminho da imagem de perfil do usuário
		},
		timestamp: '1 hour ago',
		details: 'Detalhes do post...', // Adicione os detalhes do post aqui
	  },
	  {
		id: '4',
		image: require('./path/to/fone.jpg'),
		object: 'Fone de ouvido',
		status: 'Perdido',
		likes: 5,
		user: {
		  name: 'Jane Doe',
		  profilePic: require('./path/to/pin 2.jpg'),
		},
		timestamp: '2 hours ago',
		details: 'Detalhes do post...',
	  }
    // Adicione mais posts aqui
  ]);
  const [likedPosts, setLikedPosts] = useState([]);

  const [selectedPost, setSelectedPost] = useState(null);

  const handleLike = (postId) => {
	if (likedPosts.includes(postId)) {
	  setLikedPosts(likedPosts.filter((id) => id !== postId));
	  setPosts((prevPosts) =>
		prevPosts.map((post) =>
		  post.id === postId ? { ...post, likes: post.likes - 1 } : post
		)
	  );
	} else {
	  setLikedPosts([...likedPosts, postId]);
	  setPosts((prevPosts) =>
		prevPosts.map((post) =>
		  post.id === postId ? { ...post, likes: post.likes + 1 } : post
		)
	  );
	}
  };
  
  

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.postContainer}
      onPress={() => setSelectedPost(item)}
    >
      <View style={styles.userprofileContainer}>
      
      <View style={styles.profileContainer}>
            <Image source={item.user.profilePic} style={styles.profilePic} />
            <Text style={styles.username}>{item.user.name}</Text>
          </View>
      </View>
      <View style={styles.postImageContainer}>
      <Image source={item.image} style={styles.postImage} />
      </View>
      
      <View style={styles.postInfo}>
      <View style={styles.likesContainer}>
            <TouchableOpacity style={styles.likeButton} onPress={() => handleLike(item.id)}>
              <Icon name="heart" size={20} color="red" />
              <Text style={styles.likesText}>{item.likes}</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.postHeader}>
          <Text style={styles.nickname}>{item.user.name}</Text>
          <Text style={styles.objectText}>{item.object}</Text>
         
        </View>
        
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedList}
      />

      {/* Modal para exibir detalhes do post */}
      <Modal visible={selectedPost !== null} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedPost && (
            <>
              <Image source={selectedPost.image} style={styles.modalImage} />
              <Text style={styles.modalDetails}>{selectedPost.details}</Text>
            </>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedPost(null)}>
            <Icon name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
  },
  feedList: {
    padding: 20,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: 480,
    borderRadius:8
  },
  postImageContainer: {
    width: '100%',
    padding:16,
    borderRadius:8
  },
  postInfo: {
    padding: 15,
  },
  postHeader: {
    flexDirection: 'row',
  
    alignItems: 'center',
    marginBottom: 10,
  
  },
  objectText: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    marginLeft: 5,
    fontSize: 16,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userprofileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:16
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 45,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'normal',
    paddingRight:16
  },
  nickname: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight:16
  },
  timestamp: {
    fontSize: 14,
    color: '#8a8a8f',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalDetails: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default FeedScreen;
