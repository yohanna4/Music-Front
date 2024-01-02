import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../features/hooks';
import { postSongPending } from '../features/songs/songSlice';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    artist: Yup.string().required('Artist is required'),
    album: Yup.string().required('Album is required'),
    genre: Yup.string().required('Genre is required'),
});

export default function AddSongForm() {
    const fields = [
        { id: 'title', label: 'Title', placeholder: 'title' },
        { id: 'album', label: 'Album', placeholder: 'album' },
        { id: 'artist', label: 'Artist', placeholder: 'artist' },
        { id: 'genre', label: 'Genre', placeholder: 'genre' },
      ];

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = async (values: any, { setSubmitting, setErrors }: any): Promise<void> => {
        try {
            dispatch(postSongPending(values));
            toast.success('Successfully added!');
            setSubmitting(false);
            navigate('/music');
        } catch (error) {
            setSubmitting(false);
            setErrors(error);
            toast.error('Error occurred! Please Try Again.');
        }
    };

    return (
        <section className=" py-1 bg-blueGray-50 h-screen bg-gray-100 pt-12 lg:pt-16">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-gray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6  mt-30">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">New Song</h6>
                            <Link
                                to="/music"
                                className="bg-mainColor text-white active:bg-lightMain font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                    <div className="flex-auto bg-white px-4 lg:px-10 py-10 pt-0">
                        <Formik
                            initialValues={{
                                title: '',
                                artist: '',
                                album: '',
                                genre: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={async (values, { setSubmitting, setErrors }) => {
                                onSubmit(values, { setSubmitting, setErrors });
                            }}
                        >
                             <Form>
      <div className="flex flex-wrap">
        {fields.map((field) => (
          <div className="w-full lg:w-6/12 px-4" key={field.id}>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-500 text-xs font-bold mb-2 text-left"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <Field
                type="text"
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
              <ErrorMessage
                name={field.id}
                component="div"
                className="text-red-500 flex items-start"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-mainColor flex gap-2 justify-center items-center mt-6 ml-5 text-white active:bg-lightMain font-bold uppercase text-xs px-8 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="submit"
        >
          <span>Submit</span>
        </button>
      </div>
    </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
}
