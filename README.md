# BOJAGI HOUSE — 브랜드 홍보 페이지

> **Small patches, stitched into a wider world.**
> 작은 조각을 이어, 더 넓은 세계를 감쌉니다.

한국의 유산을 현대의 생활로 잇는 브랜드 **BOJAGI HOUSE**(EUM PLUS, INC. · 부산)의
원페이지 홍보 사이트입니다. 브랜드 덱(_BOJAGI HOUSE_ PDF)의 내용과 이미지를 그대로 옮겨
웹으로 구성했습니다.

빌드 도구나 프레임워크 없이 **HTML · CSS · JavaScript** 만으로 되어 있어,
파일을 고치고 GitHub에 올리면 그대로 배포됩니다.

## 사이트 주소

- 배포 주소: https://snailnail1009-cloud.github.io/startupk/
- 이전 실습 페이지(STARTUP-UP BOOST AI)는 `pages/startup-class.html` 로 보관했습니다.

## 페이지 구성 (브랜드 덱 목차 그대로)

| 섹션 | 내용 |
| --- | --- |
| Hero | 브랜드 마크 + "Small patches, stitched into a wider world." |
| Axes | Tradition × Contemporary / Craft × Lifestyle / Korea × Global |
| Welcome | 브랜드 인사말 |
| 01 About Us | 감싸고 잇는 전통의 현대적 해석, 세 가지 모토 |
| 02 What We Make | 색 비율(70/10/8/5/7)과 소재·공정 이미지 |
| 03 Highlights | 창업 로드맵 6단계 (2026 → 2027) |
| 04 Project Portfolio | 작업 10점, 클릭하면 확대(라이트박스) |
| 05 Reframed for Today | 유산 연구 — 박물관의 조각보를 오늘로 |
| 06 Built to Belong | 건축 콘셉트 — 관문, 수면, 빛 |
| 07 Contact Us | 주소 · 연락처 · 이메일 · 채널 |

### 주요 기능

- **한국어 / 영어 전환** — 우측 상단 `KO / EN`. 이미지 대체 텍스트까지 함께 바뀌고,
  선택한 언어는 브라우저에 기억됩니다. 첫 방문은 브라우저 언어를 따릅니다.
- **반응형** — 모바일(390px)부터 데스크톱까지 가로 스크롤 없이 대응합니다.
- **포트폴리오 확대 보기** — 이미지를 누르면 라이트박스가 열리고, `Esc`·바깥 클릭·닫기
  버튼으로 닫힙니다.
- **스크롤 등장 애니메이션** — `IntersectionObserver` 기반, 모션 최소화 설정을 존중합니다.

## 폴더 구조

```
.
├── index.html                   # 본문 (한국어·영어 문구가 함께 들어 있음)
├── assets/
│   ├── style.css                # 전체 스타일 (색상 토큰은 :root 에 모여 있음)
│   ├── script.js                # 언어 전환 · 스크롤 등장 · 라이트박스
│   ├── fonts/                   # Open Sauce One (woff2) + OFL 라이선스
│   ├── favicon.svg              # 탭 아이콘
│   ├── og.jpg                   # 링크 공유용 미리보기 (1200×630)
│   └── img/                     # 브랜드 덱에서 추출해 최적화한 이미지 24장
├── pages/startup-class.html     # 이전 실습 페이지 보관
├── .github/workflows/deploy.yml # GitHub Pages 자동 배포
└── .nojekyll                    # Jekyll 처리 없이 그대로 배포
```

## 타이포그래피 (브랜드 덱과 동일)

| 쓰임 | 폰트 | 비고 |
| --- | --- | --- |
| 워드마크 · 제목 · 본문 | **Open Sauce One** | 덱에 쓰인 폰트. Google Fonts에 없어 `assets/fonts/` 에 직접 넣었습니다(SIL OFL, 라이선스 동봉). |
| 강조 문구 · 축(×) 문장 | **Noto Serif Display** | 덱에서 세리프로 들어간 문장에만 사용 |
| 한글 | **Noto Sans KR** / **Noto Serif KR** | 위 두 폰트의 한글 짝 |

## 브랜드 색 (덱의 비율 그대로)

| 비율 | 이름 | 값 | 쓰임 |
| --- | --- | --- | --- |
| 70% | Ramie White | `#f2eee6` | 바탕 |
| 10% | Muted Red | `#a6453a` | 강조 · 문의 섹션 |
| 8% | Dusty Indigo | `#2b5468` | 건축 섹션 |
| 5% | Gardenia | `#c9ae79` | 포인트 |
| 7% | Ink / Material | `#1a1917` | 글자 · 어두운 섹션 |

`assets/style.css` 맨 위 `:root` 값만 바꾸면 사이트 전체 톤이 함께 바뀝니다.

## 내용 수정하기

1. **문구** — `index.html` 에서 고칩니다. 한 요소에 두 언어가 함께 들어 있습니다.

   ```html
   <h3 data-ko="한국어 문구" data-en="English text">한국어 문구</h3>
   ```

   `data-ko`, `data-en`, 태그 안의 글자까지 **세 곳을 모두** 바꿔 주세요.
   줄바꿈은 태그 안에서는 `<br />`, 속성 안에서는 `&#10;` 을 씁니다.

2. **이미지 대체 텍스트** — `data-alt-ko` / `data-alt-en` 속성을 함께 고칩니다.

3. **이미지 교체** — `assets/img/` 의 같은 이름으로 덮어쓰면 됩니다.
   포트폴리오는 `work-01.jpg` ~ `work-10.jpg` 입니다.
   용량이 큰 사진은 가로 1200px 내외로 줄여서 올리는 편이 좋습니다.

4. **바꿔야 할 정보** — 덱에 적힌 값을 그대로 넣어 두었습니다. 실제 정보로 교체하세요.
   - 주소 `123 Anywhere St., Busan City, ST 12345`
   - 전화 `+82 10-8961-3327`, 이메일 `hello@bojagihouse.com` / `bojagihouse@naver.com`
   - Behance · Instagram · Telegram 링크
   - `<head>` 의 `og:url` · `canonical` 주소 (자체 도메인을 쓸 경우)

## 로컬에서 확인하기

```bash
python3 -m http.server 8000
# http://localhost:8000 접속
```

## GitHub로 배포하기

이 저장소는 **GitHub Actions**로 Pages에 자동 배포됩니다.

### 최초 1회 설정

1. GitHub 저장소 → **Settings** → **Pages**
2. **Build and deployment → Source** 를 **GitHub Actions** 로 선택

### 이후 배포

`main` 브랜치에 푸시되면 `.github/workflows/deploy.yml` 이 실행되어 자동 배포됩니다.

```bash
git add .
git commit -m "브랜드 페이지 수정"
git push origin main
```

- 진행 상황은 저장소 상단 **Actions** 탭에서 확인합니다. (보통 1분 내외)
- **Actions** → *Deploy to GitHub Pages* → **Run workflow** 로 수동 배포도 가능합니다.
- 작업 브랜치에서 개발한 뒤 Pull Request로 `main` 에 합치면, 합쳐지는 순간 배포됩니다.

## 참고

본문 문구와 이미지는 제공된 브랜드 덱에서 가져왔습니다. 로드맵 일정과 연락처 등은
실제 사업 상황에 맞게 업데이트해 사용하세요.
