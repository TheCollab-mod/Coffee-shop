import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { C, ui } from '../theme';

export function DeliveryScreen({ onBack }: { onBack: () => void }) {
  const [mins, setMins] = useState(10);

  useEffect(() => {
    const t = setInterval(() => setMins((m) => Math.max(0, m - 1)), 3000);
    return () => clearInterval(t);
  }, []);

  const filled = mins === 0 ? 4 : 1 + Math.floor((10 - mins) / 3);

  return (
    <View style={{ flex: 1, backgroundColor: '#ECE9E4' }}>
      <View style={[s.road, { top: '22%', left: 0, right: 0, height: 10 }]} />
      <View style={[s.road, { left: '28%', top: 0, bottom: 0, width: 10 }]} />
      <View style={[s.road, { left: '72%', top: 0, bottom: 0, width: 10 }]} />
      <View style={s.route} />
      <Text style={[s.pin, { left: '24%', top: '15%' }]}>📍</Text>
      <Text style={[s.pin, { left: '68%', top: '36%' }]}>🛵</Text>
      <Pressable style={s.back} onPress={onBack}><Text style={ui.ic}>‹</Text></Pressable>
      <View style={s.sheet}>
        <Text style={s.t}>{mins > 0 ? `${mins} minutes left` : 'Your order has arrived'}</Text>
        <Text style={[ui.muted, { textAlign: 'center', marginTop: 6 }]}>Delivery to Abay Ave 150</Text>
        <View style={{ flexDirection: 'row', gap: 6, marginVertical: 16 }}>
          {[0, 1, 2, 3].map((i) => (
            <View key={i} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: i < filled ? '#36C07E' : '#E4E4E4' }} />
          ))}
        </View>
        <View style={s.cour}>
          <View style={s.av}><Text style={{ color: '#fff', fontWeight: '700' }}>AC</Text></View>
          <View>
            <Text style={s.name}>Alex Carter</Text>
            <Text style={ui.muted}>Personal Courier</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  road: { position: 'absolute', backgroundColor: '#fff' },
  route: { position: 'absolute', left: '29%', top: '23%', width: '44%', height: '20%', borderTopWidth: 4, borderRightWidth: 4, borderColor: C.brand },
  pin: { position: 'absolute', fontSize: 28 },
  back: { position: 'absolute', top: 16, left: 20, width: 42, height: 42, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', elevation: 4 },
  sheet: { position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, elevation: 12 },
  t: { fontSize: 17, fontWeight: '600', color: C.text, textAlign: 'center' },
  cour: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  av: { width: 52, height: 52, borderRadius: 14, backgroundColor: C.brand, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 14, fontWeight: '600', color: C.text },
});
