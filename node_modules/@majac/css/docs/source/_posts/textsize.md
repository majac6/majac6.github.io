---
title: text size
date: 2017-08-07 10:25:05
tags: 
categories: Typo
---

- 값 : xs, sm, md, lg, xg
- 기본값(14px)을 기준으로 각 값의 크기가 결정됩니다(rem)
- 이 기본값은 `~/@majac/css/build/custom_scss/_var.scss` 파일에서 `$defaultFontSize`, `$defaultFontSize-Tablet`, `$defaultFontSize-Mobile` 값을 변경하면 적용됩니다.

텍스트크기를 지정할 때 사용합니다. 각 Element의 Class attr 에 직접 적용해 사용할 수 있고,
`<div class="textsize-값">` 형태로 사용됩니다.

#### Preview

<div class="preview-box">
  <div class="textsize-xs">textsize-xs</div>
  <div class="textsize-sm">textsize-sm</div>
  <div class="textsize-md">textsize-md</div>
  <div class="textsize-lg">textsize-lg</div>
  <div class="textsize-xg">textsize-xg</div>
</div>

<pre>
  <code class="html">
    &lt;div class="textsize-xs"&gt;&lt;/div&gt;
    &lt;div class="textsize-sm"&gt;&lt;/div&gt;
    &lt;div class="textsize-md"&gt;&lt;/div&gt;
    &lt;div class="textsize-lg"&gt;&lt;/div&gt;
    &lt;div class="textsize-xg"&gt;&lt;/div&gt;
  </code>
</pre>