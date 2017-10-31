---
title: responsive
date: 2017-08-07 16:43:11
tags:
categories: Layout
---

모바일 및 PC 반응성을 위해 다음과 같이 SCSS 문법을 작성할 수 있습니다.
CSS 클래스를 하나 생성하고 `@include pc {...}` 또는 `@include mobile {...}` 을 생성해 그 안에 원하는 스타일을 작성하면 됩니다.

- 기본값(768px)을 기준으로, 창 사이즈가 기준보다 크면 PC, 작으면 Mobile 로 간주합니다.
- 이 기본값은 `~/@majac/css/build/custom_scss/_var.scss` 파일에서 `$pc-width` 값을 변경하면 적용됩니다.


<pre>
<code class="css">
.body {

  @include pc {
    background-color: #FFF;
  }

  @include mobile {
    background-color: red;
  }
  
}
</code>
</pre>