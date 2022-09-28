FROM            node:16

RUN             apt-get update && apt-get install -y python3-pip
RUN             pip3 install 'mkdocs-material>=8.0.0,<9.0.0'
RUN             mkdir /workspace

COPY            ./init-container.sh /root/init-container.sh
WORKDIR         /workspace
