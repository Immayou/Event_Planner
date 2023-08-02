import { Suspense } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Container from 'components/Container/Container';
import Button from 'components/Button/Button';

import s from './SharedLayout.module.css';

export const SharedLayout = () => {
  const [, setSearchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    defaultValues: {
      productName:
        JSON.parse(window.sessionStorage.getItem('searchQuery')) ?? '',
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await window.sessionStorage.setItem(
      'searchQuery',
      JSON.stringify(data.searchEvent)
    );
    await setSearchParams({ search: data.searchEvent });
  };
  return (
    <>
      <div className={s.mainWrapper}>
        <Container>
          <header className={s.header}>
            <h2 className={s.caption}>Event Planner</h2>

            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              <label className={s.label}>
                <input
                  {...register('searchEvent')}
                  className={s.input_search}
                  type="text"
                  placeholder="Search by keywords"
                />
              </label>
              {/* {errors.productName && (
              <Text
                text={'* Введіть значення для пошуку'}
                textClass="errorMessageHeaderForm"
              />
            )} */}

              <Button
                type="submit"
                btnClass="searchBtn"
                text={<CiSearch size={30} />}
                // handleClick={handleClick}
              >
                ggg
              </Button>
            </form>
          </header>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </div>
    </>
  );
};
