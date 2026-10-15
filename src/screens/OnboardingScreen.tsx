import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Cup } from '../components/Cup';
import { C, ui } from '../theme';

export function OnboardingScreen({ onStart }: { onStart: () => void }) {
  return (
    <View style={{ flex: 1, backgroundColor: C.dark }}>
      <View style={s.hero}><Cup size={240} color="#7A4A2E" /></View>
      <View style={{ padding: 28 }}>
        <Text style={s.h1}>Fall in Love with Coffee in Blissful Delight!</Text>
        <Text style={s.p}>Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>
        <Pressable style={ui.btn} onPress={onStart}><Text style={ui.btnText}>Get Started</Text></Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  hero: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  h1: { color: '#fff', fontSize: 30, fontWeight: '600', textAlign: 'center', lineHeight: 40 },
  p: { color: '#A9A29D', fontSize: 14, textAlign: 'center', lineHeight: 22, marginVertical: 12 },
});
