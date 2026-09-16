#!/bin/bash
# 제갈량 상소문 - 맥용 자동 실행 설정
# 이 파일을 Finder에서 두 번 누르면 설정이 끝납니다.
# 매일 오전 7시, 그리고 컴퓨터를 켜서 로그인할 때마다 상소문 창이 열립니다.

set -e

# 열고 싶은 주소. 다른 주소를 쓰려면 이 줄만 고치세요.
URL="https://snailnail1009-cloud.github.io/startupk/jegalyang/"

LABEL="com.bojagi.jegalyang"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"

mkdir -p "$HOME/Library/LaunchAgents"

cat > "$PLIST" <<PLISTEOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>$LABEL</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/open</string>
    <string>$URL</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>7</integer>
    <key>Minute</key>
    <integer>0</integer>
  </dict>
</dict>
</plist>
PLISTEOF

launchctl unload "$PLIST" 2>/dev/null || true
launchctl load "$PLIST"

echo ""
echo "  설정이 끝났습니다."
echo "  매일 오전 7시, 그리고 로그인할 때마다 상소문이 열립니다."
echo ""
echo "  그만두려면 터미널에 아래 한 줄을 붙여넣으세요:"
echo "  launchctl unload \"$PLIST\" && rm \"$PLIST\""
echo ""
