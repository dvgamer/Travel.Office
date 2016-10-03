meteor build ../ --architecture=os.linux.x86_64
CD ..
pscp UI-Mid-BackOffice.tar.gz core@ssh.touno-k.com:/app/travox-mbos/bundle.tar.gz
del UI-Mid-BackOffice.tar.gz