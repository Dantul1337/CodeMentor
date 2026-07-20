import Button from '../ui/Button';
import type { Course } from '../../types/course';

import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <article className="course-card">
      <h3>{course.title}</h3>

      <p>{course.description}</p>

      <span>{course.duration}</span>

      <strong>{course.price}</strong>

      <Button onClick={() => navigate(`/courses/${course.id}`)}>Подробнее</Button>
    </article>
  );
};

export default CourseCard;
