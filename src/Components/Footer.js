import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import messages from "./FooterMessages";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
const useStyles = () => ({
  globalFooter: {
    padding: "2% 2% 0%",
    background:
      "transparent linear-gradient(180deg, #fff 0%, #f4f6ff 100%) 0% 0% no-repeat padding-box !important",
    borderTop: " 1px solid var(--unnamed-color-bdc7e8)",
  },
  root: {
    padding: "30px 5%",

    height: "auto !important",
  },
  logoContainer: {
    width: 200,
  },
  logo: {
    width: "100%",
  },
  listContainer: {
    marginTop: 50,
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    gap: 20,
  },

  linkList: {
    width: "25%",
  },

  listTitle: {
    fontSize: "calc(20px * 0.7)",
    color: "black",
    fontWeight: 600,
    fontFamily: "Montserrat",
    marginBottom: 10,
  },
  navColophon: {
    width: "100%",
  },
  footerItem: {
    listStyle: "none",
    padding: 0,
  },
  linkSection: {
    color: "#777777",
    fontFamily: "Montserrat",
    fontSize: "unset !important",
    width: "100%",
    marginTop: "2%",
  },
  linkTag: {
    fontFamily: "Montserrat !important",
    fontSize: "calc(18px * 0.7)",
    fontWeight: 500,
    letterSpacing: "var(--unnamed-character-spacing-0)",
    color: "var(--unnamed-color-777777) !important",
    textAlign: "left",
    "&:hover": {
      "text-decoration": "none",
    },
  },

  location: {
    fontSize: "calc(18px*0.7)",
    color: "var(--unnamed-color-777777)",
    fontWeight: 500,
    marginTop: "8%",
  },
  countryLocation: {
    marginBottom: "5%",
    minHeight: 40,
    height: "auto",
  },
  countryContact: {
    fontSize: "calc(18px*0.7)",
    color: "var(--unnamed-color-777777)",
    fontWeight: 500,
  },
  facebook: {
    width: 32,
    fill: "#4267B2",
  },
  linkdin: {
    width: 32,
    fill: "#0e76a8",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  credits: {
    fontFamily: "Montserrat",
    fontSize: "calc(18px*0.7)",
  },
  icons: {
    display: "flex",
    justifyContent: "flex-end",
    width: "20%",
    alignItems: "center",
    gap: 50,
  },
  socialLink: {
    transition: "link-color 0.15s ease-in-out 0s,border 0.15s ease-in-out 0s",
    borderBottom: "none",
    color: "#3b85ff",
    "text-decoration": "none !important",
  },
});
class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.intl);
    this.state = {
      links: [
        {
          title: this.props.intl.formatMessage(
            messages["footer.nav.links.pages"]
          ),
          navLinks: [
            {
              name: this.props.intl.formatMessage(
                messages["footer.nav.links.pages.home"]
              ),
              path: "/",
            },
            {
              name: this.props.intl.formatMessage(
                messages["footer.nav.links.pages.courses"]
              ),
              path: "/course-list",
            },
            {
              name: this.props.intl.formatMessage(
                messages["footer.nav.links.pages.about"]
              ),
              path: "/about",
            },
            { name: this.props.intl.formatMessage(
                messages["footer.nav.links.pages.contact"]
              ), path: "/contactus" },
          ],
        },
        {
          title: "Policy and terms",
          navLinks: [
            { name: this.props.intl.formatMessage(
                messages["footer.nav.links.policy.privacy"]
              ), path: "https://groupado.ci/privacy" },


            { name: this.props.intl.formatMessage(
                messages["footer.nav.links.policy.tos"]
              ), path: "https://groupado.ci/tos" },
            { name: this.props.intl.formatMessage(
                messages["footer.nav.links.policy.cookies"]
              ), path: "https://groupado.ci/cookies" },
          ],
        },
      ],
      locations: [
        {
          name: this.props.intl.formatMessage(
            messages["footer.locations.tunisia.label"]
          ),
          phone: "+216 26 641 620",
          loca: "Carre des M 23, 1053 Lac 1, Tiberlade",
        },
        {
          name: this.props.intl.formatMessage(
            messages["footer.locations.dubai.label"]
          ),
          phone: "+971 551991059 ",
          loca: "Business Bay, The Oberai; Office No, 904 Dubai, UAE",
        },
        {
          name: this.props.intl.formatMessage(
            messages["footer.locations.ivory.label"]
          ),
          phone: "+2250546256408 ",
          loca: "Abidjan",
        },
      ],
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.globalFooter}>
        <footer className={classes.root}>
          <div className={classes.logoContainer}>
            <a href="https://groupado.ci">
            <img
              className={classes.logo}
              src="http://groupado.ci/static/groupado/images/groupado_logo.png"
              />
              </a>
          </div>
          <div class={classes.listContainer}>
            {this.state.locations.map((location, index) => (
              <div key={index} className={classes.linkList}>
                <div className={classes.listTitle}>{location.name}</div>
                <div className={classes.location}>
                  <div className={classes.countryLocation}>{location.loca}</div>
                  <div className={classes.countryContact}>
                    {this.props.intl.formatMessage(
                      messages["footer.locations.phone"]
                    )}
                    {location.phone}
                  </div>
                  pro@groupado.com
                </div>
              </div>
            ))}

            {this.state.links.map((item, index) => (
              <div key={index} className={classes.linkList}>
                <div className={classes.listTitle}>{item.title}</div>
                <nav className={classes.navColophon}>
                  <ul class={classes.footerItem}>
                    {item.navLinks.map((link, key) => (
                      <li
                        key={key}
                        class={`nav-colophon-04 + ${classes.linkSection}`}
                      >
                        <a
                          target="_blank"
                          href={link.path}
                          className={classes.linkTag}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
          <div className={classes.bottom}>
            <div className={classes.credits}>
              © groupadoPro 2022, All rights reserved{" "}
            </div>
            <div className={classes.icons}>
              <div className={classes.social}>
                <a
                  href="https://www.facebook.com/go.groupado"
                  target="_blank"
                  className={classes.socialLink}
                >
                  <svg
                    className={classes.facebook}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" />
                  </svg>
                </a>
              </div>
              <div className={classes.social}>
                <a
                  href="https://www.instagram.com/go.groupado/"
                  target="_blank"
                  className={classes.socialLink}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8ma"
                      cx="19.38"
                      cy="42.035"
                      r="44.899"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fd5" />
                      <stop offset=".328" stop-color="#ff543f" />
                      <stop offset=".348" stop-color="#fc5245" />
                      <stop offset=".504" stop-color="#e64771" />
                      <stop offset=".643" stop-color="#d53e91" />
                      <stop offset=".761" stop-color="#cc39a4" />
                      <stop offset=".841" stop-color="#c837ab" />
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    />
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8mb"
                      cx="11.786"
                      cy="5.54"
                      r="29.813"
                      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#4168c9" />
                      <stop
                        offset=".999"
                        stop-color="#4168c9"
                        stop-opacity="0"
                      />
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    />
                    <path
                      fill="#fff"
                      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                    />
                    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                    <path
                      fill="#fff"
                      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                    />
                  </svg>
                </a>
              </div>
              <div className={classes.social}>
                <a
                  href="https://www.linkedin.com/company/gogroupado/"
                  target="_blank"
                  className={classes.socialLink}
                >
                  <svg
                    className={classes.linkdin}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
Footer.propTypes = {
  intl: intlShape.isRequired,
};

// export default Footer;
// export default (injectIntl(Footer));
export default withStyles(useStyles)(injectIntl(Footer));
