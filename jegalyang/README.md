# 제갈량 상소문

매일 아침 7시, 그리고 컴퓨터를 켤 때마다 제갈량의 말투로 조언을 올리는 창입니다.

- `第一疏` 클로드 코드를 부리는 법 (초심자를 위한 여섯 가지 계책)
- `第二疏` 사업과 삶의 방향에 관한 여섯 가지 소견
- `오늘의 계` 날짜에 따라 매일 다른 한 구절

색은 보자기 컴퍼니 팔레트(테라코타 · 슬레이트블루 · 크림 · 원목)를 따랐고, 머리띠는 보자기 패치워크를 본떴습니다.

## 보는 방법

- 웹: https://snailnail1009-cloud.github.io/startupk/jegalyang/ (GitHub Pages를 켜면 열립니다)
- 내 컴퓨터: 이 폴더의 `index.html`을 두 번 누르면 바로 열립니다

## 매일 아침 자동으로 띄우기

### 맥

`setup-mac.command`를 Finder에서 두 번 누릅니다. (처음 한 번은 "확인되지 않은 개발자" 경고가 날 수 있으니, 오른쪽 버튼 → 열기)

설정을 지우려면 터미널에서:

```bash
launchctl unload ~/Library/LaunchAgents/com.bojagi.jegalyang.plist
rm ~/Library/LaunchAgents/com.bojagi.jegalyang.plist
```

### 윈도우

`setup-windows.bat`을 오른쪽 버튼 → **관리자 권한으로 실행**.

설정을 지우려면 명령 프롬프트에서:

```
schtasks /delete /tn "제갈량 상소문 - 매일 아침" /f
schtasks /delete /tn "제갈량 상소문 - 로그인" /f
```

## 주소를 바꾸고 싶을 때

두 스크립트 맨 위의 `URL` 한 줄만 고치면 됩니다. 이 폴더의 파일을 직접 열게 하려면 아래처럼 적으세요.

- 맥: `URL="file:///Users/내이름/startupk/jegalyang/index.html"`
- 윈도우: `set "URL=file:///C:/Users/내이름/startupk/jegalyang/index.html"`
