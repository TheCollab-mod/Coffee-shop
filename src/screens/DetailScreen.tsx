import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Cup } from '../components/Cup';
import { Coffee, Size, kzt, priceOf } from '../data/coffees';
import { C, ui } from '../theme';

type Props = { item: Coffee; size: Size; onSize: (z: Size) => void; onBack: () => void; onBuy: () => void };

export function DetailScreen({ item, size, onSize, onBack, onBuy }: Props) {
  const [fav, setFav] = useState(false);
  const price = priceOf(item, size);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={ui.top}>
        <Pressable onPress={onBack}><Text style={ui.ic}>‹</Text></Pressable>
        <Text style={ui.title}>Detail</Text>
        <Pressable onPress={() => setFav(!fav)}>
          <Text style={[ui.ic, fav && { color: '#ED5151' }]}>{fav ? '♥' : '♡'}</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 0 }}>
        <View style={s.hero}><Cup size={170} color={item.color} /></View>
        <Text style={s.name}>{item.name}</Text>
        <Text style={ui.muted}>{item.sub}</Text>
        <Text style={s.rate}>★ {item.rate}</Text>
        <Text style={ui.h}>Description</Text>
        <Text style={s.desc}>{item.desc}</Text>
        <Text style={ui.h}>Size</Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          {(['S', 'M', 'L'] as Size[]).map((z) => (
            <Pressable key={z} onPress={() => onSize(z)} style={[s.size, z === size && s.sizeOn]}>
              <Text style={{ color: z === size ? C.brand : C.text, fontWeight: z === size ? '600' : '400' }}>{z}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={ui.foot}>
        <View>
          <Text style={ui.muted}>Price</Text>
          <Text style={s.fp}>{kzt(price)}</Text>
        </View>
        <Pressable style={[ui.btn, { flex: 1 }]} onPress={onBuy}><Text style={ui.btnText}>Buy Now</Text></Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  hero: { height: 190, borderRadius: 16, backgroundColor: '#2A1C14', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  name: { fontSize: 20, fontWeight: '600', color: C.text },
  rate: { fontSize: 15, fontWeight: '600', color: C.text, marginTop: 8 },
  desc: { fontSize: 14, lineHeight: 22, color: '#7C7C7C' },
  size: { flex: 1, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: '#DEDEDE', alignItems: 'center' },
  sizeOn: { backgroundColor: C.soft, borderColor: C.brand },
  fp: { fontSize: 18, fontWeight: '600', color: C.brand },
});
