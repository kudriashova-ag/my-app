import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from "yup";

const initialValues = {
  name: '',
  year: '',
  image: ''
}

const FILM_SCHEMA = yup.object().shape({
  name: yup.string().required("Название обязательно"),
  year: yup
    .number()
    .typeError("Введите год")
    .integer()
    .positive()
    .required(),
  image: yup.string().url().required(),
});

const FilmAdd = ({addFilm}) => {
  const submitHandler = (value, formikBag) => { 
    addFilm(value);
    formikBag.resetForm();
  }


  return (
    <div>
      <h2>Add Film</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={FILM_SCHEMA}
      >
        {(props) => (
          <Form>
            <div>
              <Field name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <Field name="year" />
              <ErrorMessage name="year" component="div" className="error" />
            </div>
            <div>
              <Field name="image" />
              <ErrorMessage name="image" component="div" className="error" />
            </div>
            <Field type="submit" value="Save" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FilmAdd;




/* const FilmAdd = ({addFilm}) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");


  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} /> <br />
      <input type="text" placeholder="Year" value={year} onChange={(e)=>setYear(e.target.value)} /> <br />
      <input type="text" placeholder="Image" value={image} onChange={(e)=>setImage(e.target.value)} /> <br />
      <button onClick={()=>addFilm(name, year, image)}>Save</button>
    </div>
  );
}

export default FilmAdd; */
