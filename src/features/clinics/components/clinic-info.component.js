import React from 'react';
import styled from 'styled-components/native';
import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const Title = styled.Text `
 padding: 16px; 
 color: red;
 background: black; 
`;

export const ClinicInfo = ( {Clinic= {}} ) => {
  const {
    name= 'KK KUALA LUMPUR',
    addr= ' JLN SALAK SELATAN',
    photos= ['https://www.mynewshub.tv/wp-content/uploads/2017/04/Klinik-Kesihatan-KL-Jalan-F.jpg'],
  } = Clinic;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {backgroundColor: 'white'},
  cover: {padding: 20, backgroundColor: 'white'},
});
