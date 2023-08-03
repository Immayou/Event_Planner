import { useForm } from 'react-hook-form';
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { Main } from 'components/Main/Main';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import s from './AddEvent.module.css';

export const AddEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      titleEvent:
        JSON.parse(window.sessionStorage.getItem('searchQuery')) ?? '',
    },
  });
  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Main>
      <section>
        <Container>
          <NavLink className={s.link}>
            <BiArrowBack size={24} className={s.link_icon} />
            <span>Back</span>
          </NavLink>
          <h2 className={s.title}>Create new event</h2>
          <form className={s.add_card}>
            <label>Title</label>
            <input
              {...register('titleEvent')}
              className={s.title}
              type="text"
            />

            <label>Description</label>
            <textarea></textarea>

            <label>Location</label>
            <input type="text" />
            <Button
              type="submit"
              btnClass="searchBtn"
              text="Add event"
              // handleClick={handleClick}
            />
          </form>
        </Container>
      </section>
    </Main>
  );
};
