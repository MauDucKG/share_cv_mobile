import { WebView } from 'react-native-webview';

export default function TabOneScreen() {
  return (
    <WebView
      source={{ uri: 'https://share-cv.vercel.app/' }}
      style={{ flex: 1 }}
      javaScriptEnabled
    />
  );
}