import { useEffect, useState } from "react";

import Container from "../ui/Container";
import CourseCard from "../common/CourseCard";

import type { Course } from "../../types/course";
import { getCourses } from "../../services/courseApi";

const CoursesPreview = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                setCourses(data.slice(0, 3));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return (
            <section className="courses-preview">
                <Container>
                    <h2>Популярные курсы</h2>
                    <p>Загрузка...</p>
                </Container>
            </section>
        );
    }

    return (
        <section className="courses-preview">
            <Container>
                <h2>Популярные курсы</h2>

                <div className="courses-preview__grid">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CoursesPreview;