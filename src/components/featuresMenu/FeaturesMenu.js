import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const FeaturesMenu = (props) => {
  const {
    location,
    translations,
    features,
    project,
  } = props;

  const menuItem = () => {
    const items = [];
    features.map((feature) => {
      switch (feature.name) {
        case 'feed':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 1,
                pageRoute: '/',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 1,
                pageRoute: '/social-feed',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 1,
                pageRoute: '/feed',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 1,
                pageRoute: '/',
                showItem: true,
                iconItem: 'icon feed',
                itemText: translations.feed,
                hide: 0,
              });
          }
          break;

        case 'auctions':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 2,
                pageRoute: '/auctions',
                showItem: true,
                iconItem: 'icon auction',
                itemText: translations.auctions,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 2,
                pageRoute: `/search/auctions/?company=${JSON.parse(localStorage.company).id}`,
                showItem: true,
                iconItem: 'icon auction',
                itemText: translations.auctions,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 2,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon auction',
                itemText: translations.auctions,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 2,
                pageRoute: '/',
                showItem: false,
                iconItem: '',
                itemText: translations.auctions,
                hide: 0,
              });
          }
          break;

        case 'manage-employees':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 3,
                pageRoute: '/employees',
                showItem: true,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 3,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 3,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 3,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon employees',
                itemText: translations.manageEmployees,
                hide: 0,
              });
          }
          break;

        case 'volunteering':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 4,
                pageRoute: '/charityneeds',
                showItem: true,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 4,
                pageRoute: '/user/requests',
                showItem: true,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 4,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 4,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: 0,
              });
          }
          break;

        case 'projects':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 5,
                pageRoute: '/projects',
                showItem: true,
                iconItem: 'icon volunteering',
                itemText: translations.projects,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 5,
                pageRoute: '/',
                showItem: false,
                iconItem: '',
                itemText: '',
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 5,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon volunteering',
                itemText: translations.projects,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 5,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon volunteering',
                itemText: translations.charityneeds,
                hide: 0,
              });
          }
          break;

        case 'giftcards':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 6,
                pageRoute: '/giftcards',
                showItem: true,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 6,
                pageRoute: '/user/giftcards',
                showItem: true,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 6,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 6,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon giftcards',
                itemText: translations.giftCards,
                hide: 0,
              });
          }
          break;

        case 'matchdonation':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 7,
                pageRoute: '/match-donations',
                showItem: true,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 7,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 7,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 7,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon match',
                itemText: translations.matchDonations,
                hide: 0,
              });
          }
          break;

        case 'crowdfunding':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 8,
                pageRoute: '/crowdfunding',
                showItem: true,
                iconItem: 'icon crowdfunding',
                itemText: translations.crowdfunding,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 8,
                pageRoute: '/user/campaigns',
                showItem: true,
                iconItem: 'icon crowdfunding',
                itemText: translations.crowdfunding,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 8,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon crowdfunding',
                itemText: translations.crowdfunding,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 8,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon crowdfunding',
                itemText: translations.crowdfunding,
                hide: 0,
              });
          }
          break;

        case 'payments':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 9,
                pageRoute: '/payments',
                showItem: true,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 9,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 9,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 9,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon payments',
                itemText: translations.payments,
                hide: 0,
              });
          }
          break;

        case 'impact-analytics':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 10,
                pageRoute: '/impact-analytics',
                showItem: true,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 10,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 10,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 10,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon ic-statistics',
                itemText: translations.impactAnalytics,
                hide: 0,
              });
          }
          break;

        case 'documents':
          switch (project) {
            case 'business-frontend':
              items.push({
                position: 12,
                pageRoute: '/',
                showItem: false,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: 0,
              });
              break;

            case 'esolidar':
              items.push({
                position: 12,
                pageRoute: '/user/documents',
                showItem: true,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 12,
                pageRoute: '/user/documents',
                showItem: true,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 12,
                pageRoute: '/user/documents',
                showItem: true,
                iconItem: 'icon documents',
                itemText: translations.documents,
                hide: 0,
              });
          }
          break;

        case 'survey':
          switch (project) {
            case 'business-frontend':
              if (_.find(items, (o) => o.pageRoute === '/impact-analytics')) {
                items.push({
                  position: 11,
                  pageRoute: '/impact-analytics',
                  showItem: false,
                  iconItem: 'icon survey-icon',
                  itemText: translations.survey,
                  hide: 0,
                });
              } else {
                items.push({
                  position: 10,
                  pageRoute: '/impact-analytics',
                  showItem: true,
                  iconItem: 'icon ic-statistics',
                  itemText: translations.survey,
                  hide: 0,
                });
              }
              break;

            case 'esolidar':
              items.push({
                position: 11,
                pageRoute: '/user/survey',
                showItem: true,
                iconItem: 'icon survey-icon',
                itemText: translations.survey,
                hide: feature.pivot.hide,
              });
              break;

            case 'whitelabel':
              items.push({
                position: 11,
                pageRoute: '/user/survey',
                showItem: true,
                iconItem: 'icon survey-icon',
                itemText: translations.survey,
                hide: feature.pivot.hide,
              });
              break;

            default:
              items.push({
                position: 11,
                pageRoute: '/user/survey',
                showItem: true,
                iconItem: 'icon survey-icon',
                itemText: translations.survey,
                hide: 0,
              });
          }
          break;

        default:
      }
    });

    return _.sortBy(items, ['position']).map((item) => {
      if (item.showItem) {
        if (item.hide !== 1) {
          return (
            <li key={item.position} className={location === item.pageRoute ? 'active' : ''}>
              <a
                href={`${item.pageRoute}`}
              >
                <i className={item.iconItem} />
                {item.itemText}
              </a>
            </li>
          );
        }
      }
    });
  };

  return (
    <section className="sidebar">
      <ul className="sidebar-menu">
        {menuItem()}
      </ul>
    </section>
  );
};

export default FeaturesMenu;

FeaturesMenu.propTypes = {
  translations: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  project: PropTypes.string.isRequired,
};
