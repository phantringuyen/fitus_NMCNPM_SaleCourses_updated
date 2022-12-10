import ResponsiveAppBar from '../../components/Appbar/Appbar';
import Footer from '../../components/Footer/Footer';
import ScrollableTabsButtonAuto from '../../components/TabCourses/TabCourses';
import CoursesList from '../../components/CoursesList/CoursesList';

export default function Homepage() {
    return(
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <ScrollableTabsButtonAuto></ScrollableTabsButtonAuto>
            <CoursesList></CoursesList>
            <Footer></Footer>
        </>
    )
}