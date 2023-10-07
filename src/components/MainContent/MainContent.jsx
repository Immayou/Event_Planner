import { NavLink } from 'react-router-dom';
import { ReactComponent as SvgIconCategory } from '../../images/svg/category.svg';
import { ReactComponent as SvgIconSort } from '../../images/svg/sort.svg';
import { ReactComponent as SvgIconPlus } from '../../images/svg/plus.svg';
import Container from 'components/Container/Container';
import s from './MainContent.module.css';
import { Main } from 'components/Main/Main';
import CardItem from 'components/CardItem/CardItem';

export const MainContent = () => {
  return (
    <Main>
      <Container>
        <section className={s.nav_wrapper}>
          <NavLink className={s.nav_box}>
            <SvgIconSort className={s.nav_icon} />
          </NavLink>
          <NavLink className={s.nav_box}>
            <SvgIconCategory className={s.nav_icon} />
          </NavLink>
          <NavLink className={s.nav_box} to="/add-event">
            <SvgIconPlus className={s.nav_icon} />
          </NavLink>
        </section>

        <section>
          <CardItem />
        </section>
      </Container>
    </Main>
  );
};
