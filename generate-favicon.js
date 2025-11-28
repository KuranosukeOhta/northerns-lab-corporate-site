const favicons = require('favicons');
const fs = require('fs');
const path = require('path');

const source = 'src/app/favicon.svg';
const outputPath = 'src/app';

const configuration = {
  path: '/',
  appName: 'Northerns合同会社',
  appShortName: 'Northerns',
  appDescription: 'Northerns合同会社（Northerns LLC） Corporate Site',
  background: '#2563eb',
  theme_color: '#2563eb',
  appleStatusBarStyle: 'default',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  start_url: '/',
  version: '1.0',
  logging: true,
  pixel_art: false,
  loadManifestWithCredentials: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: false,
    windows: false,
    yandex: false
  }
};

(async () => {
  try {
    // 正しい関数を使用
    const response = await favicons.favicons(source, configuration);
    
    // favicon.icoファイルを保存
    if (response.images && response.images.length > 0) {
      const favicon = response.images.find(img => img.name.includes('favicon-32x32'));
      if (favicon) {
        fs.writeFileSync(path.join(outputPath, 'favicon.ico'), favicon.contents);
        console.log('✅ favicon.ico が生成されました');
      }
    }
    
    console.log('🎉 ファビコンの生成が完了しました');
  } catch (error) {
    console.error('❌ エラーが発生しました:', error);
  }
})();
