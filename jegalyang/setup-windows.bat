@echo off
chcp 65001 >nul
rem 제갈량 상소문 - 윈도우용 자동 실행 설정
rem 이 파일을 마우스 오른쪽 버튼으로 눌러 "관리자 권한으로 실행"하세요.
rem 매일 오전 7시, 그리고 컴퓨터를 켜서 로그인할 때마다 상소문 창이 열립니다.

rem 열고 싶은 주소. 다른 주소를 쓰려면 이 줄만 고치세요.
set "URL=https://snailnail1009-cloud.github.io/startupk/jegalyang/"

schtasks /delete /tn "제갈량 상소문 - 매일 아침" /f >nul 2>&1
schtasks /delete /tn "제갈량 상소문 - 로그인" /f >nul 2>&1

schtasks /create /tn "제갈량 상소문 - 매일 아침" /tr "cmd /c start \"\" \"%URL%\"" /sc daily /st 07:00 /f
schtasks /create /tn "제갈량 상소문 - 로그인" /tr "cmd /c start \"\" \"%URL%\"" /sc onlogon /f

echo.
echo   설정이 끝났습니다.
echo   매일 오전 7시, 그리고 로그인할 때마다 상소문이 열립니다.
echo.
echo   그만두려면 이 창에 아래 두 줄을 붙여넣으세요:
echo   schtasks /delete /tn "제갈량 상소문 - 매일 아침" /f
echo   schtasks /delete /tn "제갈량 상소문 - 로그인" /f
echo.
pause
