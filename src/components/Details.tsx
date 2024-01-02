import  { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { songSelector } from "../features/store";
import {
  deleteSongPending,
  getSongPending,
  updateSongPending,
} from "../features/songs/songSlice";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  artist: Yup.string().required("Artist is required"),
  album: Yup.string().required("Album is required"),
  genre: Yup.string().required("Genre is required"),
});

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { songs, isLoading } = useAppSelector(songSelector);
  const dispatch = useAppDispatch();

  // fetch song
  useEffect(() => {
    if (songs.length === 0) {
      dispatch(getSongPending());
    }
  }, [dispatch, songs.length]);
  // delete a song

  const handleDelete = async (id: any) => {
    try {
      console.log(id);
      dispatch(deleteSongPending(id));
      toast.success("you have successfully deleted a Song");
      navigate("/music");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  // update a song
  const onSubmit = async (
    values: any,
    { setSubmitting, setErrors }: any
  ): Promise<void> => {
    try {
      const updatedValues = { ...values, _id: id };
      console.log(updatedValues);
      dispatch(updateSongPending(updatedValues));
      toast.success("Successfully updated!");
      setSubmitting(false);
      navigate("/music");
    } catch (error) {
      setSubmitting(false);
      setErrors(error);
      toast.error("Error updating. Please try again.");
    }
  };

  let content;
  if (isLoading) {
    return <h1>loading</h1>;
  } else if (!isLoading && songs.length > 0) {
    const filteredSongs = songs.filter((item) => item._id === id);
    content = (
      <div>
        <Formik
          initialValues={{
            title: filteredSongs[0].title,
            artist: filteredSongs[0].artist,
            album: filteredSongs[0].album,
            genre: filteredSongs[0].genre,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            onSubmit(values, { setSubmitting, setErrors });
          }}
        >
          <Form>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Song Title
                  </label>

                  <Field
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500  flex items-start"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Artist
                  </label>
                  <Field
                    type="text"
                    id="artist"
                    name="artist"
                    placeholder="artist"
                    className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // value="jesse@example.com"
                  />
                  <ErrorMessage
                    name="artist"
                    component="div"
                    className="text-red-500  flex items-start"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Album
                  </label>

                  <Field
                    type="text"
                    id="album"
                    name="album"
                    placeholder="album"
                    className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  <ErrorMessage
                    name="artist"
                    component="div"
                    className="text-red-500  flex items-start"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-500 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Genre
                  </label>
                  <Field
                    type="text"
                    id="genre"
                    name="genre"
                    placeholder="genre"
                    className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // value="jesse@example.com"
                  />
                  <ErrorMessage
                    name="genre"
                    component="div"
                    className="text-red-500  flex items-start"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row  items-center justify-between mt-5">
            <button
              className="bg-mainColor px-10 py-2 flex  justify-center items-center  ml-5 text-white active:bg-lightMain font-bold uppercase text-xs rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              {/* {isLoading ? <ButtonLoadingScreen /> : ''} */}
              <span>Update</span>
            </button>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
                className="px-10 py-1 rounded text-white bg-red-600 mr-5"
              >
                Delete 
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
  
  return (
    <section className=" py-1 flex flex-col h-screen bg-gray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Update Song
              </h6>
              <Link
                to="/music"
                className="bg-mainColor text-white active:bg-lightMain font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Back
              </Link>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">{content}</div>
        </div>
      </div>
    </section>
  );
}
