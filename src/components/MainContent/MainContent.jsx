import { NavLink } from 'react-router-dom';
import { ReactComponent as SvgIconCategory } from '../../images/svg/category.svg';
import { ReactComponent as SvgIconSort } from '../../images/svg/sort.svg';
import { ReactComponent as SvgIconPlus } from '../../images/svg/plus.svg';
import SrcUrl from '../../images/img-1.jpg';
import Container from 'components/Container/Container';
import s from './MainContent.module.css';
import { Main } from 'components/Main/Main';

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
          <div className={s.card_wrapper}>
            <div className={s.img_box}>
              <img src={SrcUrl} alt="Event" width="100%" height="336px" />
              <div className={s.top_details_box}>
                <p className={s.top_main_details}>Art</p>
                <p className={s.top_secondary_details}>High</p>
              </div>
              <div className={s.bottom_details_box}>
                <p>Time</p>
                <p>City</p>
              </div>
            </div>
            <div className={s.bottom_card_box}>
              <h2 className={s.card_title}>Event Name</h2>
              <p className={s.card_text}>
                Description vnfvnfjnvjfvnjfn nvfvfbvjfbvjfbv nvbfjvbjfbvjfvb
                nvbfjvbjfbvjfvb vjfbvjfbvjfbvjfb vbjbvjfvb
              </p>
              <button type="button" className={s.btn}>
                More info
              </button>
            </div>
          </div>
        </section>
      </Container>
    </Main>
  );
};
