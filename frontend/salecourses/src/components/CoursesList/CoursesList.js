import Card from '../CoursesCard/Card';
import './CoursesList.css';

function CoursesList() {
    return (
        <>
            <div className='Lego Spike Prime Courses'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className='Lego WeDo Courses'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className='MindStorm EV3 courses'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </>
    );
}

export default CoursesList;

