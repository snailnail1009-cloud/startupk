# BOJAGI HOUSE — 브랜드 홍보 페이지

> 조각을 이어, 세계를 감싸다.
> 한국 전통 공예를 잇는 현대적인 생활 소품 브랜드 **BOJAGI HOUSE**의 원페이지 홍보 사이트입니다.

빌드 도구나 프레임워크 없이 **HTML · CSS · JavaScript** 만으로 만들어져 있어,
파일을 열어 바로 수정하고 GitHub에 올리면 그대로 배포됩니다.

## 사이트 주소

- 배포 주소: https://snailnail1009-cloud.github.io/startupk/
- 이전 실습 페이지(STARTUP-UP BOOST AI)는 `pages/startup-class.html` 로 보관했습니다.
  → https://snailnail1009-cloud.github.io/startupk/pages/startup-class.html

## 페이지 구성

| 섹션 | 내용 |
| --- | --- |
| Hero | 브랜드 한 줄 메시지 + 조각보(패치워크) 비주얼, 핵심 지표 |
| Story | 왜 보자기인가 — 브랜드 철학, 잇다 / 감싸다 / 나누다 |
| Craft | 조각보 · 나전 · 한지 · 매듭 · 옻칠 다섯 가지 전통 기법 |
| Collection | 대표 제품 5종과 가격, 전체 스토어 링크 |
| Process | 장인 협업부터 해외 배송까지 4단계 제작 과정 |
| Global | 32개국 배송 지도와 성장 지표 |
| K-Culture | 장인 카드, 영문 뉴스레터, 공방 라이브, 리테일 파트너십 |
| Reviews | 해외 고객 후기와 소개 매체 |
| CTA | 글로벌 스토어 · 도매 문의 |

### 주요 기능

- **한국어 / 영어 전환** — 우측 상단 `KO / EN` 버튼. 선택한 언어는 브라우저에 기억됩니다.
- **반응형 레이아웃** — 모바일(390px)부터 데스크톱까지 대응합니다.
- **스크롤 등장 애니메이션** — `IntersectionObserver` 기반, 모션 최소화 설정을 존중합니다.
- **이미지 파일 없는 비주얼** — 제품 이미지와 조각보 패턴을 모두 CSS로 그려 로딩이 빠릅니다.

## 폴더 구조

```
.
├── index.html                  # 브랜드 홍보 페이지 본문
├── assets/
│   ├── style.css               # 전체 스타일 (색상 토큰은 :root 에 모여 있음)
│   ├── script.js               # 언어 전환 + 스크롤 애니메이션
│   ├── favicon.svg             # 탭 아이콘
│   └── og.png                  # 링크 공유용 미리보기 이미지 (1200×630)
├── pages/startup-class.html    # 이전 실습 페이지 보관
├── .github/workflows/deploy.yml# GitHub Pages 자동 배포
└── .nojekyll                   # Jekyll 처리 없이 그대로 배포
```

## 내용 수정하기

1. **문구** — `index.html` 에서 고치면 됩니다. 한 요소에 두 언어가 함께 들어 있습니다.

   ```html
   <h3 data-ko="한국어 문구" data-en="English text">한국어 문구</h3>
   ```

   `data-ko`(한국어), `data-en`(영어), 그리고 태그 안의 글자까지 **세 곳을 모두** 바꿔 주세요.
   줄을 바꾸고 싶으면 태그 안에는 `<br />`, 속성 안에는 `&#10;` 을 씁니다.

2. **색상** — `assets/style.css` 맨 위 `:root` 의 값만 바꾸면 사이트 전체 톤이 바뀝니다.
   (오방색에서 가져온 `--clay` 적 · `--indigo` 청 · `--gold` 황 · `--ink` 먹)

3. **제품 / 가격** — `index.html` 의 `<section class="section collection">` 안 `<article class="product">` 블록을 복사해 늘리거나 지우면 됩니다.

4. **바꿔야 할 링크** — 실제 판매 채널로 교체하세요.
   - 글로벌 스토어 버튼: `https://www.etsy.com/`
   - 문의 이메일: `hello@bojagihouse.com`
   - 인스타그램: `https://www.instagram.com/`
   - `<head>` 의 `og:url` · `canonical` 주소 (자체 도메인을 쓸 경우)

## 로컬에서 확인하기

`index.html` 을 브라우저로 열어도 되고, 간단한 서버를 띄워도 됩니다.

```bash
python3 -m http.server 8000
# http://localhost:8000 접속
```

## GitHub로 배포하기

이 저장소는 **GitHub Actions**로 Pages에 자동 배포됩니다.

### 최초 1회 설정

1. GitHub 저장소 → **Settings** → **Pages** 로 이동
2. **Build and deployment → Source** 를 **GitHub Actions** 로 선택

### 이후 배포

`main` 브랜치에 푸시되면 `.github/workflows/deploy.yml` 이 실행되어 자동으로 배포됩니다.

```bash
git add .
git commit -m "브랜드 페이지 문구 수정"
git push origin main
```

- 진행 상황은 저장소 상단 **Actions** 탭에서 볼 수 있습니다. (보통 1분 내외)
- **Actions** 탭 → *Deploy to GitHub Pages* → **Run workflow** 로 수동 배포도 가능합니다.
- 작업용 브랜치에서 개발한 뒤 Pull Request로 `main` 에 합치면, 합쳐지는 순간 배포됩니다.

## 라이선스

본문 텍스트와 제품 정보는 데모용 예시입니다. 실제 판매 정보로 바꿔 사용하세요.
