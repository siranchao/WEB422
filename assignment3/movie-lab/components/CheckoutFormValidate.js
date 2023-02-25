

//This file located at "/components/CheckoutFormValidate.js"
import { useForm } from 'react-hook-form';

export default function CheckoutFormValidate() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            cardNum: "",
            password: "",
            cvv: ""
        }
    })

    function submitForm(data) {
        console.log(data);
        //TODO submit the form by POST request
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <label>
                    Cardholder's Name:
                    <input {...register("username",
                        {
                            required: true,
                            pattern: /^\w{3,15} \w{3,15}$/
                        })}
                    />
                    {errors.username?.type === "required" && <span>Cardholder Name is required</span>}
                    {errors.username?.type === "pattern" && <span>Cardholder Name format incorrect</span>}
                </label>

                <label>
                    Card Number:
                    <input {...register("cardNum",
                        {
                            required: true,
                            pattern: /^\d{16}$/
                        })}
                    />
                    {errors.cardNum?.type === "required" && <span>Card number is required</span>}
                    {errors.cardNum?.type === "pattern" && <span>Card number format incorrect</span>}
                </label>

                <label>
                    Password:
                    <input {...register("password",
                        {
                            required: true,
                            maxLength: 10,
                            pattern: /^[a-zA-Z0-9]+$/
                        })}
                    />
                    {errors.password?.type === "required" && <span>Password is required</span>}
                    {errors.password?.type === "pattern" && <span>Password format incorrect</span>}
                    {errors.password?.type === "maxLength" && <span>Password over max length</span>}
                </label>

                <label>
                    CVV/CVC:
                    <input {...register("cvv",
                        {
                            required: true,
                            pattern: /^\d{3}$/
                        })}
                    />
                    {errors.cvv?.type === "required" && <span>CVV is required</span>}
                    {errors.cvv?.type === "pattern" && <span>CVV format incorrect</span>}
                </label>

                <button type="submit" disabled={Object.keys(errors).length > 0}>Submit Form</button>
            </form>
        </>
    )
}

