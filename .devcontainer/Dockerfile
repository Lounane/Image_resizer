# [Choice] Debian OS version: bullseye, buster
ARG VARIANT=bullseye
FROM --platform=linux/amd64 mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

ENV DENO_INSTALL=/deno
RUN mkdir -p /deno \
    && curl -fsSL https://deno.land/x/install/install.sh | sh \
    && chown -R vscode /deno

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno
RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

# Fish
RUN echo 'deb http://download.opensuse.org/repositories/shells:/fish:/release:/3/Debian_11/ /' | sudo tee /etc/apt/sources.list.d/shells:fish:release:3.list
RUN curl -fsSL https://download.opensuse.org/repositories/shells:fish:release:3/Debian_11/Release.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/shells_fish_release_3.gpg > /dev/null
# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends fish

# RUN sh -c "$(curl -fsSL https://starship.rs/install.sh)" --yes

RUN curl -s https://api.github.com/repos/starship/starship/releases/latest \
    | grep browser_download_url \
    | grep x86_64-unknown-linux-gnu \
    | cut -d '"' -f 4 \
    | wget -qi -
RUN tar xvf starship-*.tar.gz
RUN ls -la
RUN mv starship /usr/local/bin/

RUN fish
RUN echo "starship init fish | source" >> ~/.config/fish/config.fish

CMD ["fish"]
