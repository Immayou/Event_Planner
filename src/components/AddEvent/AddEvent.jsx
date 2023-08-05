import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BiArrowBack } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';
import { NavLink, useLocation } from 'react-router-dom';
import { priorities } from '../../data/priorities';
import { Main } from 'components/Main/Main';
import SelectField from 'components/SelectField/SelectField';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import s from './AddEvent.module.css';

export const AddEvent = () => {
  const [filterSelected, setFilterSelected] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const {
    control,
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm({
    defaultValues: {
      titleEvent: '',
      locationEvent: '',
      descriptionEvent: '',
    },
  });
  const handleChangeFilter = async filterSelected => {
    await setFilterSelected(filterSelected);
  };
  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Main>
      <section>
        <Container>
          <NavLink className={s.link} to={backLinkHref}>
            <BiArrowBack size={24} className={s.link_icon} />
            <span>Back</span>
          </NavLink>
          <h2 className={s.title}>Create new event</h2>
          <form className={s.add_card}>
            <div className={s.inputMainBox}>
              <label htmlFor="titleEvent" className={s.label}>
                Title
              </label>
              <div className={s.inputBox}>
                <input
                  id="titleEvent"
                  {...register('titleEvent')}
                  className={s.input}
                  type="text"
                />
                {dirtyFields.titleEvent && (
                  <Button
                    type="button"
                    btnClass="reset_btn"
                    text={<VscClose size={20} />}
                    handleClick={() =>
                      resetField('titleEvent', { defaultValue: '' })
                    }
                  />
                )}
              </div>
            </div>
            <div className={s.inputMainBox}>
              <label htmlFor="descriptionEvent" className={s.label}>
                Description
              </label>
              <div className={s.inputBox}>
                <textarea
                  id="descriptionEvent"
                  {...register('descriptionEvent')}
                  className={s.textarea}
                  rows="6"
                />
                {dirtyFields.descriptionEvent && (
                  <Button
                    type="button"
                    btnClass="reset_textarea_btn"
                    text={<VscClose size={20} />}
                    handleClick={() =>
                      resetField('descriptionEvent', { defaultValue: '' })
                    }
                  />
                )}
              </div>
            </div>

            <div className={s.inputMainBox}>
              <label htmlFor="titleEvent" className={s.label}>
                Location
              </label>
              <div className={s.inputBox}>
                <input
                  id="locationEvent"
                  {...register('locationEvent')}
                  className={s.input}
                  type="text"
                />
                {dirtyFields.locationEvent && (
                  <Button
                    type="button"
                    btnClass="reset_btn"
                    text={<VscClose size={20} />}
                    handleClick={() =>
                      resetField('locationEvent', { defaultValue: '' })
                    }
                  />
                )}
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <Controller
                control={control}
                name="priorityEvent"
                render={({ field: { value } }) => (
                  <SelectField
                    value={value}
                    className={'priority'}
                    handleChange={value => handleChangeFilter(value.value)}
                    options={priorities}
                    defaultValue={{ value: 'Low', label: 'Low' }}
                    name="priorityEvent"
                  />
                )}
              />
            </div>
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
