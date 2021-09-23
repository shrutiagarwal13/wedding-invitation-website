import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ParentsBlock from '../components/ParentsBlock';
import ParentsPic from '../images/parents.jpeg';

const ParentsSection = () => {
  return (
    <div>
      <section className='parents-section'>
        <div className='section-heading'>Our Parents</div>
        <div>
          <Container>
            <ParentsBlock
              parentsPic={ParentsPic}
              parentsMsg='Ut venenatis tellus in metus vulputate eu. Consequat mauris
                  nunc congue nisi. Nisl tincidunt eget nullam non nisi est sit
                  amet facilisis. Nibh cras pulvinar mattis nunc sed blandit
                  libero volutpat. Et magnis dis parturient montes nascetur
                  ridiculus mus mauris vitae. Et magnis dis parturient montes
                  nascetur ridiculus mus mauris vitae.'
            />
            <ParentsBlock
              parentsPic={ParentsPic}
              parentsMsg='Ut venenatis tellus in metus vulputate eu. Consequat mauris
                  nunc congue nisi. Nisl tincidunt eget nullam non nisi est sit
                  amet facilisis. Nibh cras pulvinar mattis nunc sed blandit
                  libero volutpat. Et magnis dis parturient montes nascetur
                  ridiculus mus mauris vitae. Et magnis dis parturient montes
                  nascetur ridiculus mus mauris vitae.'
            />
          </Container>
        </div>
      </section>
    </div>
  );
};

export default ParentsSection;
