import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useForm, Controller } from "react-hook-form";

// https://react-hook-form.com/

const App = () => {
  const { register, handleSubmit, control, formState: {errors} } = useForm();
  const onSubmit = data => alert(JSON.stringify(data, " ", 4));
  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Controller name="name" control={control} render={({ field }) => <Input {...field} />} />
          {errors.name?.type === 'required' && <span>Name is required</span>}
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Controller name="password" control={control} render={({ field }) => <Input type="password" placeholder="password placeholder" {...field} />} />
          {errors.password?.type === 'required' && <span>Password is required</span>}
        </FormGroup>
        <FormGroup check>
          <Controller name="check" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
         {' '}
          <Label check>Check me out</Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
  );
}

export default App;
