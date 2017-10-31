---
title: text letter
date: 2017-08-07 16:19:52
categories: Typo
---

일관적인 텍스트간격을 지정할 때 사용합니다. 각 Element의 Class attr 에 직접 적용해 사용할 수 있고,
`<div class="textletter-값">`형태로 사용됩니다.

- 값 : sm, md, lg
- 이 값은 *~/@majac/css/build/custom_scss/_var.scss* 파일에서 `$letterspace` 값을 변경하면 적용됩니다.

#### Preview
<div class="preview-box">
  <div class="textletter-sm">textleeter-sm</div>
  <div class="textletter-md">textleeter-md</div>
  <div class="textletter-lg">textleeter-lg</div>
</div>

<pre>
  <code class="html">
    &lt;div class="textletter-sm"&gt;&lt;/div&gt;
    &lt;div class="textletter-md"&gt;&lt;/div&gt;
    &lt;div class="textletter-lg"&gt;&lt;/div&gt;
  </code>
</pre>