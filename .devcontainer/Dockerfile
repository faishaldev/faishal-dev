FROM oven/bun:alpine

ENV PATH="~/.bun/bin:${PATH}"
RUN ln -s /usr/local/bin/bun /usr/local/bin/node

RUN if [ "alpine" == "alpine" ] ; then apk update ; else apt-get update ; fi

RUN if [ "alpine" == "alpine" ] ; then apk add git ; else apt-get install -y git ; fi
