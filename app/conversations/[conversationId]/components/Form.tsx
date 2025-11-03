'use client';

import useConversation from '@/app/hooks/userConversation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { HiPhoto } from 'react-icons/hi2';
import MessageInput from './MessageInput';

const Form = () => {
  const { conversationId } = useConversation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true });

    axios.post('/api/messages', {
      ...data,
      conversationId,
    });

    setValue('message', '');
  };

  return (
    <div
      className="
        py-4 
        px-4 
        bg-white 
        border-gray-200 
        border-t 
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
        "
    >
      <HiPhoto size={30} className="text-sky-500" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
      </form>
    </div>
  );
};

export default Form;
