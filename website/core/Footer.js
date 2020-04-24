/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Documentación</h5>
<<<<<<< HEAD
            <a href={this.docUrl('como-iniciar', this.props.language)}>
              Como Iniciar
            </a>
            <a href={this.docUrl('http://explorer.testnet.latamlink.io', this.props.language)}>
              Explorador de Bloques 
            </a>
            <a href={this.docUrl('api', this.props.language)}>
              APIs
            </a>
=======
            <a href={this.docUrl("getting-started.html")}>
              Como Iniciar
            </a>
            <a href={this.docUrl("api.html")}>APIs</a>
>>>>>>> 62bc4724e4c62b8aa1aa8f71ebedca9d90754283
          </div>
          <div>
            <h5>Comunidad</h5>
            <a
              href="https://eosio.stackexchange.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a href="https://t.me/">Telegram Chat</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
          </div>
          <div>
            <h5>Más</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/LatamLink">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/LatamLink/documentacion"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <div className="icon-container">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                className="footer-logo"
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <a href="https://eoscostarica.io/es/" target="_blank" className="nav-home">
            <img
              className="footer-logo"
              src={this.props.config.baseUrl + this.props.config.eoscrIcon}
              alt={this.props.config.title}
            />
          </a>
          <a href="https://www.eosargentina.io/" target="_blank" className="nav-home">
            <img
              className="footer-logo"
              src={this.props.config.baseUrl + this.props.config.eosarIcon}
              alt={this.props.config.title}
            />
          </a>
          <a href="https://eosvenezuela.io/" target="_blank" className="nav-home">
            <img
              className="footer-logo"
              src={this.props.config.baseUrl + this.props.config.eosvenIcon}
              alt={this.props.config.title}
            />
          </a>
        </div>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
