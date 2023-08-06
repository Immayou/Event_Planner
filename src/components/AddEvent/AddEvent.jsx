import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BiArrowBack } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';
import { NavLink, useLocation } from 'react-router-dom';
import { priorities } from '../../data/priorities';
import { categories } from '../../data/categories';
import { Main } from 'components/Main/Main';
import SelectField from 'components/SelectField/SelectField';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import s from './AddEvent.module.css';

export const AddEvent = () => {
  const [filterSelected, setFilterSelected] = useState('');
  const [selectCategoryClick, setSelectCategoryClick] = useState(false);
  const [selectPriorityClick, setSelectPriorityClick] = useState(false);
  const [selectDateClick, setSelectDateClick] = useState(false);
  const [selectTimeClick, setSelectTimeClick] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const {
    control,
    register,
    handleSubmit,
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
  console.log(selectCategoryClick);
  const handleSelectOpenClick = type => {
    console.log(type);
    switch (type) {
      case 'Category':
        setSelectCategoryClick(true);
        break;
      case 'Priority':
        setSelectPriorityClick(true);
        break;
      case 'Date':
        setSelectDateClick(true);
        break;
      case 'Time':
        setSelectTimeClick(true);
        break;
      default:
        break;
    }
  };
  const handleSelectCloseClick = type => {
    console.log(type);
    switch (type) {
      case 'Category':
        setSelectCategoryClick(false);
        break;
      case 'Priority':
        setSelectPriorityClick(false);
        break;
      case 'Date':
        setSelectDateClick(false);
        break;
      case 'Time':
        setSelectTimeClick(false);
        break;
      default:
        break;
    }
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
              <iframe
                src="https://calendar.google.com/calendar/embed?src=r06mk22bik8he4ooem1kr1bju88s01d4%40import.calendar.google.com&ctz=Europe%2FKiev"
                // style="border: 0"
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
              ></iframe>
              {/* <Controller
                control={control}
                name="dateEvent"
                render={({ field: { value } }) => (
                  <SelectField
                    value={value}
                    className={'priority'}
                    label={'Date'}
                    isMenuOpen={selectDateClick}
                    handleSelectOpenClick={handleSelectOpenClick}
                    handleSelectCloseClick={handleSelectCloseClick}
                    handleChange={value => handleChangeFilter(value.value)}
                    options={priorities}
                    name="dateEvent"
                  />
                )}
              /> */}
            </div>
            <div className={s.inputMainBox}>
              <Controller
                control={control}
                name="timeEvent"
                render={({ field: { value } }) => (
                  <SelectField
                    value={value}
                    className={'priority'}
                    label={'Time'}
                    isMenuOpen={selectTimeClick}
                    handleSelectOpenClick={handleSelectOpenClick}
                    handleSelectCloseClick={handleSelectCloseClick}
                    handleChange={value => handleChangeFilter(value.value)}
                    options={priorities}
                    name="timeEvent"
                  />
                )}
              />
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
            <div className={s.inputMainBox}>
              <Controller
                control={control}
                name="categoryEvent"
                render={({ field: { value } }) => (
                  <SelectField
                    value={value}
                    label={'Category'}
                    className={'priority'}
                    isMenuOpen={selectCategoryClick}
                    handleSelectOpenClick={handleSelectOpenClick}
                    handleSelectCloseClick={handleSelectCloseClick}
                    handleChange={value => handleChangeFilter(value.value)}
                    options={categories}
                    name="categoryEvent"
                  />
                )}
              />
            </div>
            <div className={s.inputMainBox}>
              <Controller
                control={control}
                name="priorityEvent"
                render={({ field: { value } }) => (
                  <SelectField
                    value={value}
                    className={'priority'}
                    label={'Priority'}
                    isMenuOpen={selectPriorityClick}
                    handleSelectOpenClick={handleSelectOpenClick}
                    handleSelectCloseClick={handleSelectCloseClick}
                    handleChange={value => handleChangeFilter(value.value)}
                    options={priorities}
                    name="priorityEvent"
                  />
                )}
              />
            </div>
            <Button
              type="submit"
              btnClass="btn"
              text="Add event"
              disabled={isSubmitting}
              // handleClick={handleClick}
            />
          </form>
        </Container>
      </section>
    </Main>
  );
};
