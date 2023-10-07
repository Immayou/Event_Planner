import SrcUrl from '../../images/img-1.jpg';
import s from './CardItem.module.css';

const CardItem = () => {
  return (
    <div className={s.card_wrapper}>
      <div className={s.img_box}>
        <img src={SrcUrl} alt="Event" />
        <div className={s.top_details_box}>
          <p className={s.top_main_details} style={{ marginRight: '12px' }}>
            Art
          </p>
          <p className={s.top_main_details}>High</p>
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
  );
};

export default CardItem;
