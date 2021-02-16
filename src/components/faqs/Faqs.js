import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Loading from '../loading/Loading';
import FaqsTabs from './FaqsTabs';
import FaqsItem from './FaqsItem';

const Faqs = ({ lang, tabs, faqs, type, changeType, changeId, id, isLoading, env }) => {
  let faqsFilterLang = [];
  const title = `title_${lang}`;
  faqsFilterLang = faqs.filter(faq => faq[title] !== null);

  return (
    <div className="faqs mb-5">
      <Container>
        <FaqsTabs tabs={tabs} changeType={changeType} type={type} />
        {isLoading && <Loading />}
        <Row>
          {faqsFilterLang.length > 0 && !isLoading && (
            <div className="wrapper">
              {faqsFilterLang.map((faq, index) => {
                let title = '';
                if (lang === 'pt') title = faq.title_pt;
                else if (lang === 'en') title = faq.title_en;
                else if (lang === 'br') title = faq.title_br;

                let cardBody = '';
                if (lang === 'pt') cardBody = faq.description_pt;
                else if (lang === 'en') cardBody = faq.description_en;
                else if (lang === 'br') cardBody = faq.description_br;
                return (
                  <FaqsItem
                    key={index}
                    env={env}
                    changeId={changeId}
                    id={id}
                    faqId={faq.id}
                    type={type}
                    // eslint-disable-next-line no-nested-ternary
                    title={title}
                    // eslint-disable-next-line no-nested-ternary
                    cardBody={cardBody}
                  />
                );
              })}
            </div>
          )}
          {!faqsFilterLang.length && !isLoading && (
            <Col sm={12}>
              <div className="wrapper">
                <FormattedMessage id="faqs.items.empty" defaultMessage="No FAQs found" />
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

Faqs.propTypes = {
  lang: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
  faqs: PropTypes.array,
  type: PropTypes.string,
  changeType: PropTypes.func.isRequired,
  changeId: PropTypes.func.isRequired,
  id: PropTypes.number,
  isLoading: PropTypes.bool,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};

Faqs.defaultProps = {
  isLoading: true,
};

export default Faqs;
