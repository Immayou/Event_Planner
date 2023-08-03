import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { Main } from 'components/Main/Main';
import Container from 'components/Container/Container';
import s from './AddEvent.module.css';

export const AddEvent = () => {
  return (
    <Main>
      <section>
        <Container>
          <NavLink className={s.link}>
            <BiArrowBack size={24} className={s.link_icon} />
            <span>Back</span>
          </NavLink>
          <h2 className={s.title}>Create new event</h2>
          <form className={s.add_card}></form>
        </Container>
      </section>
    </Main>
  );
};
