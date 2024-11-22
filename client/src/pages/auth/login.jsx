import { Formik, Form, Field, ErrorMessage } from 'formik';
import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required.")
    .email("Email is not valid."),
  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters"),
});

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const dispatch = useDispatch();
  const { toast } = useToast();

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={async (formData) => {
          const data = await dispatch(loginUser(formData));
          if (data?.payload?.success) {
            toast({
              title: data?.payload?.message,
            });
          } else {
            toast({
              title: data?.payload?.message,
              variant: "destructive",
            });
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {loginFormControls.map((controlItem) => (
              <div className="grid w-full gap-1.5" key={controlItem.name}>
                <label className="mb-1">{controlItem.label}</label>
                <Field
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}
                  type={controlItem.type}
                  className={`input ${errors[controlItem.name] && touched[controlItem.name] ? 'border-red-500' : ''}`}
                />
                <ErrorMessage name={controlItem.name} component="p" className="text-red-500 text-sm" />
              </div>
            ))}
            <button type="submit" className="mt-2 w-full">
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default AuthLogin;
