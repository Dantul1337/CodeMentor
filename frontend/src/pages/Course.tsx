import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { Course } from '../types/course';
import { getCourse } from '../services/courseApi';

import ApplicationForm from '../components/forms/ApplicationForm';
import Container from '../components/ui/Container';

const CoursePage = () => {
  const { id } = useParams();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        if (!id) return;

        const data = await getCourse(Number(id));
        setCourse(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  if (!course) {
    return <h1>Курс не найден</h1>;
  }

  return (
    <Container>
      <div className="course-page">
        <div className="course-page__card">
          <h1>{course.title}</h1>

          <p>{course.description}</p>

          <p className="course-page__duration">📅 {course.duration}</p>

          <h2 className="course-page__price">{Number(course.price).toLocaleString('ru-RU')} ₽</h2>
        </div>

        <ApplicationForm />
      </div>
    </Container>
  );
};

export default CoursePage;
