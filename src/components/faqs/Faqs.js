import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Loading from '../loading/Loading';
import FaqsTabs from './FaqsTabs';
import FaqsItem from './FaqsItem';

const Faqs = ({
  lang,
  tabs,
  faqs,
  type,
  changeType,
  changeId,
  id,
  isLoading,
  env,
}) => (
  <div className="faqs">
    <Container>
      <FaqsTabs
        tabs={tabs}
        changeType={changeType}
        type={type}
      />
      {isLoading && <Loading />}
      <Row>
        {(faqs.length > 0 && !isLoading) && (
        <div className="wrapper">
          {faqs.map((faq, index) => {
            if (faq.title_pt !== null) {
              return (
                <FaqsItem
                  key={index}
                  env={env}
                  changeId={changeId}
                  id={id}
                  faqId={faq.id}
                  type={type}
                      // eslint-disable-next-line no-nested-ternary
                  title={lang === 'pt' ? faq.title_pt : lang === 'en' ? faq.title_en : lang === 'br' ? faq.title_br : ''}
                      // eslint-disable-next-line no-nested-ternary
                  cardBody={lang === 'pt' ? faq.description_pt : lang === 'en' ? faq.description_en : lang === 'br' ? faq.description_br : ''}
                />
              );
            }
          })}
        </div>
        )}
        {(faqs.length === 0 && !isLoading) && (
        <Col sm={12}>
          <FormattedMessage
            id="faqs.items.empty"
            defaultMessage="No faqs"
          />
        </Col>
        )}
      </Row>
    </Container>
  </div>
);

Faqs.propTypes = {
  lang: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  faqs: PropTypes.array,
  type: PropTypes.string,
  changeType: PropTypes.func.isRequired,
  changeId: PropTypes.func.isRequired,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  env: PropTypes.shape({
    cdn_static_url: PropTypes.string,
  }),
};

Faqs.defaultProps = {
  isLoading: true,
};

export default Faqs;
