import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || "";
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findAllEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);
  return data;
};

export const enroll = async (user: string, course: string) => {
  const { data } = await axios.post(ENROLLMENTS_API, { user, course });
  return data;
};

export const unenroll = async (user: string, course: string) => {
  await axios.delete(ENROLLMENTS_API, { data: { user, course } });
};

export const findEnrollmentsForUser = async (userId: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/user/${userId}`);
  return data;
};

export const findEnrollmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/course/${courseId}`);
  return data;
};