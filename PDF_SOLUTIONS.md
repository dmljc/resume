# PDF 下载方案对比

## 当前问题
html2pdf.js 依赖 html2canvas，在转换复杂 CSS 样式时容易出现格式错乱问题。

## 解决方案对比

### 方案1：浏览器原生打印 API（推荐 ⭐）
**文件**: `src/lib/downloadResumePdfV2.js` - `downloadResumePdfViaPrint()`

**优点**:
- ✅ 样式完美保留，100% 兼容
- ✅ 格式稳定，不会出现样式错乱
- ✅ 无需第三方库
- ✅ 支持所有现代浏览器
- ✅ 用户可以选择打印质量、页面大小等

**缺点**:
- ⚠️ 需要用户手动选择"另存为 PDF"
- ⚠️ 无法完全自动化下载

**使用方式**:
```javascript
import { downloadResumePdfViaPrint } from '../../lib/downloadResumePdfV2.js'
await downloadResumePdfViaPrint(lang)
```

**状态**: ✅ 已实现并集成到下载按钮

---

### 方案2：iframe + 打印
**文件**: `src/lib/downloadResumePdfV2.js` - `downloadResumePdfViaIframe()`

**优点**:
- ✅ 不影响当前页面
- ✅ 样式保留较好

**缺点**:
- ⚠️ 仍然需要用户手动选择"另存为 PDF"
- ⚠️ 实现较复杂

**使用方式**:
```javascript
import { downloadResumePdfViaIframe } from '../../lib/downloadResumePdfV2.js'
await downloadResumePdfViaIframe(lang)
```

**状态**: ✅ 已实现，但未集成

---

### 方案3：react-pdf (@react-pdf/renderer)
**需要安装**: `npm install @react-pdf/renderer`

**优点**:
- ✅ 格式完全可控
- ✅ 可以自动下载
- ✅ 样式稳定

**缺点**:
- ❌ 需要重新构建所有组件
- ❌ 不支持所有 CSS 特性
- ❌ 学习成本较高
- ❌ 需要维护两套组件（网页版 + PDF 版）

**使用方式**:
```javascript
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

const MyDoc = () => (
  <Document>
    <Page size="A4">
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);

const blob = await pdf(<MyDoc />).toBlob();
// 下载 blob
```

**状态**: ❌ 未实现（需要大量重构）

---

### 方案4：后端服务（Puppeteer/Playwright）
**需要**: Node.js 后端服务

**优点**:
- ✅ 样式完美保留
- ✅ 可以自动下载
- ✅ 支持所有现代 CSS

**缺点**:
- ❌ 需要后端服务
- ❌ 需要服务器资源
- ❌ 增加部署复杂度

**使用方式**:
```javascript
// 前端调用后端 API
const response = await fetch('/api/generate-pdf', {
  method: 'POST',
  body: JSON.stringify({ html: document.querySelector('.print-area').outerHTML })
});
const blob = await response.blob();
// 下载 blob
```

**后端示例（Puppeteer）**:
```javascript
const puppeteer = require('puppeteer');

app.post('/api/generate-pdf', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(req.body.html);
  const pdf = await page.pdf({ format: 'A4' });
  await browser.close();
  res.send(pdf);
});
```

**状态**: ❌ 未实现（需要后端支持）

---

## 推荐方案

**当前推荐**: **方案1（浏览器原生打印 API）**

理由：
1. 实现简单，无需额外依赖
2. 样式完美保留，不会出现格式错乱
3. 用户体验良好（现代浏览器都支持"另存为 PDF"）
4. 维护成本低

如果未来需要完全自动化的 PDF 下载，可以考虑：
- 短期：继续优化 html2pdf.js（但可能仍有问题）
- 长期：实现后端服务方案（Puppeteer/Playwright）

---

## 切换方案

在 `src/components/sections/ResumeClone.jsx` 中修改：

```javascript
// 使用方案1（浏览器原生打印）
import { downloadResumePdfViaPrint } from '../../lib/downloadResumePdfV2.js'
await downloadResumePdfViaPrint(lang)

// 使用方案2（iframe）
import { downloadResumePdfViaIframe } from '../../lib/downloadResumePdfV2.js'
await downloadResumePdfViaIframe(lang)

// 使用原方案（html2pdf）
import { downloadResumePdf } from '../../lib/downloadResumePdf.js'
await downloadResumePdf(lang)
```

