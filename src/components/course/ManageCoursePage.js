import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../action/courseAction";
import CourseForm from "./CourseForm";
export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id){
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');

  }
  render() {
    return (
      <div>
        <CourseForm
          onChange={this.updateCourseState}
          allAuthors={this.props.authors}
          onSave={this.saveCourse}
          errors={this.state.errors}
          course={this.state.course}/>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};
function getCourseById(courses,id){
  const course = courses.filter(course => course.id == id);
  if(course) return course[0];
  return null;
}
function mapStateToProps(state, ownProps) {
  let courseId = ownProps.params.id;
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  if(courseId && state.courses.length){
    course = getCourseById(state.courses, courseId);
  }
  const authorsFormatForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors: authorsFormatForDropdown
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
