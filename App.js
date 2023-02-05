import React from 'react';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {ClinicsScreen} from './src/features/clinics/screens/clinic.screen';


// eslint-disable-next-line require-jsdoc
export default function App() {
  return (
    <>
      <ClinicsScreen/>
      <ExpoStatusBar style="auto" />
    </>
  );
}


