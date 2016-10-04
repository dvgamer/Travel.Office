@echo off
REM meteor build ../ --architecture=os.linux.x86_64
PAUSE
CD ..
pscp UI-Mid-BackOffice.tar.gz core@ssh.touno-k.com:/app/travox-mbos/UI-MidBack.tar.gz
del UI-Mid-BackOffice.tar.gz