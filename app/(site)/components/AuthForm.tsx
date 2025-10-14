'use client';
import { useCallback, useState } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../../app/components/inputs/Input';
import { error } from 'console';

type variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      // Axios Register
    }

    if (variant === 'LOGIN') {
      // NextAuth SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social SignIn
  };

  return (
    <div
      className="
  mt-8
  sm:mx-auto
  sm:w-fill
  sm:max-w-md
  "
    >
      <div
        className="
    bg-white
    px-4
    py-8
    shadow
    sm:rounded-leg
    sm:px-10
    "
      >
        <Input id="email" label="Email" register={register} errors={errors} />

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}></form>
      </div>
    </div>
  );
};

export default AuthForm;
