import { StyleSheet } from 'react-native';

export const C = {
  brand: '#C67C4E', soft: '#FBEEE4', dark: '#1B1613',
  text: '#2F2D2C', muted: '#9B9B9B', line: '#ECECEC', bg: '#F9F9F9',
};

export const ui = StyleSheet.create({
  btn: { backgroundColor: C.brand, padding: 16, borderRadius: 16, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 },
  title: { fontSize: 16, fontWeight: '600', color: C.text },
  ic: { fontSize: 28, color: C.text, width: 30, textAlign: 'center' },
  foot: {
    flexDirection: 'row', alignItems: 'center', gap: 20, padding: 20, backgroundColor: '#fff',
    borderTopLeftRadius: 24, borderTopRightRadius: 24, elevation: 12,
  },
  h: { fontSize: 16, fontWeight: '600', color: C.text, marginTop: 18, marginBottom: 10 },
  muted: { fontSize: 13, color: C.muted },
});
