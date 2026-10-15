import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Cup } from '../components/Cup';
import { Coffee, categories, coffees, kzt } from '../data/coffees';
import { C } from '../theme';

type Props = { onOpen: (c: Coffee) => void; onAdd: (c: Coffee) => void };

export function HomeScreen({ onOpen, onAdd }: Props) {
  const [cat, setCat] = useState('All Coffee');
  const [q, setQ] = useState('');
  const list = coffees.filter(
    (c) => (cat === 'All Coffee' || c.cat === cat) && c.name.toLowerCase().includes(q.trim().toLowerCase()),
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg }} showsVerticalScrollIndicator={false}>
      <View style={s.head}>
        <Text style={s.loc}>Location</Text>
        <Text style={s.city}>Almaty, Bostandyk District ▾</Text>
        <TextInput style={s.search} placeholder="Search coffee" placeholderTextColor="#A9A29D" value={q} onChangeText={setQ} />
      </View>
      <View style={s.promo}>
        <Text style={s.tag}>Promo</Text>
        <Text style={s.promoText}>Buy one get one FREE</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.chips}>
        {categories.map((c) => (
          <Pressable key={c} onPress={() => setCat(c)} style={[s.chip, c === cat && { backgroundColor: C.brand }]}>
            <Text style={{ color: c === cat ? '#fff' : C.text, fontWeight: c === cat ? '600' : '400' }}>{c}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={s.grid}>
        {list.length === 0 && <Text style={s.empty}>No coffee found. Try another name or category.</Text>}
        {list.map((c) => (
          <View key={c.id} style={s.card}>
            <Pressable onPress={() => onOpen(c)}>
              <View style={s.ph}><Cup size={110} color={c.color} /></View>
              <Text style={s.name}>{c.name}</Text>
              <Text style={s.sub}>{c.sub}</Text>
            </Pressable>
            <View style={s.row}>
              <Text style={s.price}>{kzt(c.price)}</Text>
              <Pressable style={s.add} onPress={() => onAdd(c)}><Text style={s.plus}>+</Text></Pressable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  head: { backgroundColor: C.dark, padding: 20, paddingBottom: 70 },
  loc: { color: '#B7B7B7', fontSize: 12 },
  city: { color: '#fff', fontSize: 14, fontWeight: '600', marginTop: 6 },
  search: { backgroundColor: '#2D2724', color: '#fff', borderRadius: 14, paddingHorizontal: 16, marginTop: 20, height: 50 },
  promo: { marginHorizontal: 20, marginTop: -48, height: 130, borderRadius: 16, backgroundColor: '#A8734F', padding: 16 },
  tag: { alignSelf: 'flex-start', backgroundColor: '#ED5151', color: '#fff', fontSize: 12, fontWeight: '600', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, overflow: 'hidden' },
  promoText: { color: '#fff', fontSize: 26, fontWeight: '700', marginTop: 12, width: '70%' },
  chips: { gap: 10, padding: 20 },
  chip: { paddingHorizontal: 14, paddingVertical: 9, borderRadius: 10, backgroundColor: '#fff' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 24, rowGap: 16 },
  empty: { color: C.muted, textAlign: 'center', width: '100%', paddingVertical: 30 },
  card: { width: '48%', backgroundColor: '#fff', borderRadius: 16, padding: 8, paddingBottom: 12 },
  ph: { height: 125, borderRadius: 12, backgroundColor: '#2A1C14', alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 15, fontWeight: '600', color: C.text, marginTop: 10, marginHorizontal: 4 },
  sub: { fontSize: 12, color: C.muted, marginHorizontal: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginHorizontal: 4 },
  price: { fontSize: 16, fontWeight: '600', color: C.text },
  add: { width: 32, height: 32, borderRadius: 10, backgroundColor: C.brand, alignItems: 'center', justifyContent: 'center' },
  plus: { color: '#fff', fontSize: 20, lineHeight: 24 },
});
