/**
 * Created by hoale on 3/20/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseAction from '../../action/courseAction';
import CourseList from './CourseList';
class CoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state ={
      course: {title: ''}
    };
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }


  courseRow(course, index){
    return <div  key={index}>{course.title}</div>;
  }
  redirectToAddCoursePage (){
    browserHistory.push('/course');
  }
  render(){
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input  type="button"
                value="Add Course"
                className="btn btn-default" onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );

  }
}
CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return {
    //createCourse: course => dispatch(courseAction.createCourse(course))
    actions: bindActionCreators(courseAction, dispatch)

  };
}
export default connect(mapStateToProps, mapDispatchToProps) (CoursePage);
