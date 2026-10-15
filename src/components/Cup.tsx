import { View } from 'react-native';

const disc = (d: number, bg: string) =>
  ({ width: d, height: d, borderRadius: d / 2, backgroundColor: bg, alignItems: 'center', justifyContent: 'center' } as const);

export function Cup({ size, color }: { size: number; color: string }) {
  return (
    <View style={disc(size, '#241A15')}>
      <View style={disc(size * 0.72, '#F4EAE0')}>
        <View style={disc(size * 0.6, color)}>
          <View style={{ width: size * 0.26, height: size * 0.34, borderRadius: size * 0.17, backgroundColor: '#F7ECDF' }} />
        </View>
      </View>
    </View>
  );
}
