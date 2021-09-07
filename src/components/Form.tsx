import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ReactComponent as TwitchIcon } from '../images/twitch.svg';
import { ReactComponent as TwitterIcon } from '../images/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';

type Inputs = {
  role: string;
  tech: string;
  comment: string;
  age: number;
  consent: boolean;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [platform, setPlatform] = useState<string>('');
  const [showConsent, setShowConsent] = useState<boolean>(false);
  const watchAge = watch('age');

  useEffect(() => {
    setShowConsent(watchAge > 0 && watchAge < 18);
  }, [watchAge]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <select
          {...register('role', {
            required: true,
          })}
          className={`${errors.role ? 'error' : ''}`}
        >
          <option value=''>Role</option>
          <option value='developer'>Developer</option>
          <option value='tester'>Tester</option>
          <option value='product-manager'>Product Manger</option>
        </select>
        <select {...register('tech')}>
          <option value=''>Technology</option>
          <option value='javascript'>JavaScript</option>
          <option value='ruby'>Ruby on rails</option>
          <option value='pyton'>Python</option>
        </select>
        <textarea
          placeholder='Leave me a comment'
          {...register('comment')}
        ></textarea>
        <p className='platform-text'>Select in which platform you follow me</p>
        <div className='platform-icons-container'>
          <button
            type='button'
            onClick={() => setPlatform('twitch')}
            className={`${platform === 'twitch' ? 'active' : ''}`}
          >
            <TwitchIcon />
          </button>
          <button
            type='button'
            onClick={() => setPlatform('twitter')}
            className={`${platform === 'twitter' ? 'active' : ''}`}
          >
            <TwitterIcon />
          </button>
          <button
            type='button'
            onClick={() => setPlatform('linkedin')}
            className={`${platform === 'linkedin' ? 'active' : ''}`}
          >
            <LinkedInIcon />
          </button>
        </div>
        <input
          type='number'
          placeholder='Age'
          {...register('age', {
            min: 7,
            required: true,
          })}
          className={`${errors.age ? 'error' : ''}`}
        />
        {showConsent && (
          <div className='consent-container'>
            <input type='checkbox' {...register('consent')} />
            <p>I have consent of been supervised by an adult</p>
          </div>
        )}

        <button type='submit'>SUBMIT</button>
      </div>
    </form>
  );
};

export default Form;
