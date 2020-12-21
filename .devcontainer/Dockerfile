# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.148.1/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
FROM node

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN sudo -u node npm install -g <your-package-list -here>
RUN yarn add global @gridsome/cli

RUN cd /tmp \
  && curl -LO https://github.com/libvips/libvips/releases/download/v8.10.5/vips-8.10.5.tar.gz \
  && tar zxvf vips-8.10.5.tar.gz \
  && cd vips-8.10.5 \
  && ./configure \
  && make \
  && make install \
  && ldconfig