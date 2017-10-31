---
title: size
date: 2017-08-07 16:40:27
tags:
categories: Layout
---

각 Element의 크기를 조절할 때 사용되는 Class입니다. 특정한 규칙을 적용해 원하는 크기를 설정할 수 있으며,
`&lt;div class="속성-값[옵션]"&gt;` 형태로 사용됩니다.

- 속성 : width / height
- 값 : 0 ~ 100
- 옵션(생략가능, 크기가 %으로 적용됨) : p

<pre>
  <code class="html">
    &lt;div class="width-50"&gt;&lt;/div&gt;
    &lt;div class="width-100p"&gt;&lt;/div&gt;

    &lt;div class="height-50"&gt;&lt;/div&gt;
    &lt;div class="height-100p"&gt;&lt;/div&gt;
  </code>
</pre>