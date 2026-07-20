import Container from '../components/ui/Container';
import CourseCard from '../components/common/CourseCard';
import Input from '../components/ui/Input';

import { useEffect, useState } from 'react';

import type { Course } from '../types/course';
import { getCourses } from '../services/courseApi';

const Courses = () => {
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();

        setCourses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(search.toLowerCase()));

  if (loading) {
    return (
      <Container>
        <h2>Загрузка...</h2>
      </Container>
    );
  }

  return (
    <section className="courses-page">
      <Container>
        <h1>Наши курсы</h1>

        <p>Выберите направление обучения, которое подходит именно вам.</p>

        <Input type="text" placeholder="Поиск курса..." value={search} onChange={(event) => setSearch(event.target.value)} />

        <div className="courses-page__grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Courses;
