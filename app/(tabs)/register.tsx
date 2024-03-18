import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function TabOneScreen() {
  const runFirst = `
      setTimeout(function() { 
        var elements = document.getElementsByClassName('css-gz8ypf');
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = 'none';
        }
        var elements2 = document.getElementsByClassName('css-a2x32k');
        for (var i = 0; i < elements2.length; i++) {
          elements2[i].style.display = 'none';
        }
        });      
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  const runBeforeFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
  `;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://share-cv.vercel.app/register' }}
        onMessage={(event) => { }}
        injectedJavaScript={runFirst}
        injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
      />
    </SafeAreaView>
  );
}