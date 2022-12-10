import Card from '../CoursesCard/Card';
import './CoursesList.css';

function CoursesList() {
    return (
        <>
            <div className='courses-list-1'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className='courses-list-2'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className='courses-list-3'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </>
    );
}

export default CoursesList;

