# daekyung-fe

## 최근 업데이트

### 2024-10-06

- **Tailwind CSS 설치**

  - 프로젝트에 Tailwind CSS 설치 및 적용
  - Tailwind CSS 설정 파일(`tailwind.config.cjs`) 생성 후, 기본적인 스타일 설정을 완료
  - `src/index.css` 파일에 Tailwind CSS의 `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` 추가
  - `App.jsx`에서 Tailwind 유틸리티 클래스를 사용하여 기본 스타일 적용

- **Favicon 변경**
  - 기존 `vite.svg` 파일을 제거 후, `public` 폴더에 새로운 `favicon.ico` 파일을 추가
  - `index.html` 파일의 `<link>` 태그를 수정하여, 새 favicon을 적용
    ```html
    <link rel="icon" href="/favicon.ico" />
    ```
