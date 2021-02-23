import Button from '../shared/button/button'
import { Formik } from 'formik';
import Input from '../shared/input/input'

interface IUserFormProps {
    username: string;
    firstName?: string;
    lastName?: string;
    password: string;
    submitText: string;
}

const UserForm = ({username = '', firstName = '', lastName = '', password = '', submitText}: IUserFormProps) => {
    return (
        <Formik
            initialValues={{ username, firstName, lastName, password }}
            validate={values => {
                const errors = {username, firstName, lastName, password};

                if (!values.username) {
                    errors.username = 'Required';
                } 
                if (!values.firstName){
                    errors.firstName = 'Required';
                } 
                if (!values.lastName) {
                    errors.lastName = 'Required';
                } 
                if (!values.password){
                    errors.password = 'Required';
                } 
                return errors;
                }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit}>
            <Input
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="Put your unique username"
            />
            {errors.username && touched.username && errors.username}
            <Input
                type="firstName"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="First name"
            />
            {errors.firstName && touched.firstName && errors.firstName}
            <Input
                type="lastName"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="Last Name"
            />
            {errors.lastName && touched.lastName && errors.lastName}
            <Input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
            />
            {errors.password && touched.password && errors.password}
            <Button type="submit" disabled={isSubmitting}>
                {submitText}
            </Button>
            </form>
        )}
    </Formik>
    )
}

export default UserForm;