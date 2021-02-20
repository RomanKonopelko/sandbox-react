import MyInput from './Input'

import MyButton from './Button'

const range = {
    min: '0',
    max: '20'
}

const MyForm = () => (
    <form>
        <MyInput type='password'
            placeholder='your password'
            title='PASSWORD' />
        <MyInput type='email'
            placeholder='your email'
            title='EMAIL' />
        <MyInput type='number'
            placeholder='your age'
            title='AGE'
            range={range}
        />
        <MyButton btnName='Submit' />
    </form>
)

export default MyForm;