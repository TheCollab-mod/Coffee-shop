import { useEffect, useState } from 'react';
import { BackHandler, Platform, StatusBar, View } from 'react-native';
import { Coffee, Mode, Size, coffees } from './src/data/coffees';
import { Screen, useFlow } from './src/navigation/useFlow';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { DetailScreen } from './src/screens/DetailScreen';
import { OrderScreen } from './src/screens/OrderScreen';
import { DeliveryScreen } from './src/screens/DeliveryScreen';
import { C } from './src/theme';

export default function App() {
  const { screen, go, back } = useFlow();
  const [item, setItem] = useState<Coffee>(coffees[0]);
  const [size, setSize] = useState<Size>('M');
  const [qty, setQty] = useState(1);
  const [mode, setMode] = useState<Mode>('Deliver');

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', back);
    return () => sub.remove();
  }, [back]);

  const pick = (c: Coffee, to: Screen) => { setItem(c); setSize('M'); setQty(1); go(to); };
  const dark = screen === 'onboarding' || screen === 'home';
  const top = Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 44;

  return (
    <View style={{ flex: 1, paddingTop: top, backgroundColor: dark ? C.dark : '#fff' }}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      {screen === 'onboarding' && <OnboardingScreen onStart={() => go('home')} />}
      {screen === 'home' && <HomeScreen onOpen={(c) => pick(c, 'detail')} onAdd={(c) => pick(c, 'order')} />}
      {screen === 'detail' && (
        <DetailScreen item={item} size={size} onSize={setSize} onBack={back} onBuy={() => go('order')} />
      )}
      {screen === 'order' && (
        <OrderScreen item={item} size={size} qty={qty} onQty={setQty} mode={mode} onMode={setMode}
          onBack={back} onOrder={() => go('delivery')} />
      )}
      {screen === 'delivery' && <DeliveryScreen onBack={back} />}
    </View>
  );
}
