import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Cup } from '../components/Cup';
import { Coffee, DELIVERY_FEE, Mode, Size, kzt, priceOf } from '../data/coffees';
import { C, ui } from '../theme';

type Props = {
  item: Coffee; size: Size; qty: number; onQty: (n: number) => void;
  mode: Mode; onMode: (m: Mode) => void; onBack: () => void; onOrder: () => void;
};

export function OrderScreen({ item, size, qty, onQty, mode, onMode, onBack, onOrder }: Props) {
  const deliver = mode === 'Deliver';
  const price = priceOf(item, size) * qty;
  const fee = deliver ? DELIVERY_FEE : 0;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={ui.top}>
        <Pressable onPress={onBack}><Text style={ui.ic}>‹</Text></Pressable>
        <Text style={ui.title}>Order</Text>
        <View style={{ width: 30 }} />
      </View>
      <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 0 }}>
        <View style={s.seg}>
          {(['Deliver', 'Pick Up'] as Mode[]).map((m) => (
            <Pressable key={m} onPress={() => onMode(m)} style={[s.segBtn, m === mode && { backgroundColor: C.brand }]}>
              <Text style={{ color: m === mode ? '#fff' : C.text, fontWeight: m === mode ? '600' : '400' }}>{m}</Text>
            </Pressable>
          ))}
        </View>
        {deliver && (
          <>
            <Text style={ui.h}>Delivery Address</Text>
            <Text style={s.b}>Abay Ave 150</Text>
            <Text style={ui.muted}>Abay Ave 150, apt. 12, Almaty.</Text>
          </>
        )}
        <View style={s.line}>
          <Cup size={54} color={item.color} />
          <View style={{ flex: 1 }}>
            <Text style={s.b}>{item.name}</Text>
            <Text style={ui.muted}>{item.sub} · {size}</Text>
          </View>
          <Pressable style={s.q} onPress={() => onQty(Math.max(1, qty - 1))}><Text>−</Text></Pressable>
          <Text style={s.b}>{qty}</Text>
          <Pressable style={s.q} onPress={() => onQty(Math.min(20, qty + 1))}><Text>+</Text></Pressable>
        </View>
        <Text style={ui.h}>Payment Summary</Text>
        <View style={s.sum}><Text>Price</Text><Text style={s.b}>{kzt(price)}</Text></View>
        <View style={s.sum}><Text>Delivery Fee</Text><Text style={s.b}>{deliver ? kzt(DELIVERY_FEE) : 'Free'}</Text></View>
      </ScrollView>
      <View style={[ui.foot, { flexDirection: 'column', alignItems: 'stretch', gap: 12 }]}>
        <Text style={s.b}>Cash/Wallet · {kzt(price + fee)}</Text>
        <Pressable style={ui.btn} onPress={onOrder}><Text style={ui.btnText}>Order</Text></Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  seg: { flexDirection: 'row', backgroundColor: '#EFEFEF', borderRadius: 12, padding: 4 },
  segBtn: { flex: 1, padding: 11, borderRadius: 10, alignItems: 'center' },
  b: { fontSize: 14, fontWeight: '600', color: C.text },
  line: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 16, marginTop: 18, borderTopWidth: 1, borderBottomWidth: 1, borderColor: C.line },
  q: { width: 26, height: 26, borderRadius: 13, borderWidth: 1, borderColor: '#CFCFCF', alignItems: 'center', justifyContent: 'center' },
  sum: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
});
