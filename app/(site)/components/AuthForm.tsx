'use client';
import {BsGithub, BsGoogle} from 'react-icons/bs';
import { useCallback, useState } from 'react';
import { 
    FieldValues, 
    useForm , 
    SubmitHandler 
} from 'react-hook-form';
import Input  from "@/app/components/Inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialbutton from "./AuthSocialButton";
type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        }   else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // Axios Register
        }

        if (variant === 'LOGIN') {
            // NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        //NextAuth Social SignIn
    }

  return (
    <div
        className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
        >

        <div
            className="bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10"
        >
            <form
                className ="space-y-6"
                onSubmit ={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                    <Input 
                        id="name" 
                        label="Name" 
                        register={register} 
                        errors={errors}
                        disabled={isLoading}
                    />
                    )}
                    <Input 
                        id="name" 
                        label="Email address"
                        type ="email"
                        register={register} 
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input 
                        id="password" 
                        label="Password"
                        type="password"
                        register={register} 
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >
                            {variant === 'LOGIN' ? 'Sign In' : 'Register'}
                        </Button>
                    </div>
                </form>
                
                <div className="mt-6">
                    {/* <div className="relative">
                        <div
                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                            "
                        >
                            <div 
                            className="
                                w-full 
                                border-t 
                                border-gray-300"
                            />
                        </div>
                        <div
                        className="
                            relative
                            flex
                            justify-center
                            text-sm
                            "
                        >
                            <span className="
                                bg-whihte 
                                px-2
                                text-gray-500">
                                    Or Continue with
                            </span>
                        </div>
                    </div> */}
                    <div className="relative flex items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                            <span
                                className="
                                    mx-4
                                    bg-white 
                                    text-gray-500 
                                    text-sm 
                                    whitespace-nowrap
                                ">
                                Or Continue with
                            </span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    


                    <div className="mt-6 flex gap-2">
                        <AuthSocialbutton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialbutton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />

                    </div>
                </div>
                <div className="
                    flex
                    gap-2
                    justify-center
                    text-sm
                    mt-6
                    px-2
                    text-gray-500
                ">
                    <div>
                        {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}
                    </div>

                    <div 
                        onClick={toggleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;